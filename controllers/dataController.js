import asyncHandler from 'express-async-handler';

const getData = asyncHandler(async (req, res) => {
  try {
    const { category = '', limit = 0 } = req.query;
    const apiUrl = `https://api.publicapis.org/entries`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => data.entries)
      .then((entries) => {
        if (category != '')
          return entries.filter(
            (entry) => entry.Category.toLowerCase() === category.toLowerCase()
          );
        else return entries;
      })
      .then((filterentries) => {
        if (limit < 0) {
          res.status(422);
          throw new Error('Invalid limit');
        } else if (limit > 0) return filterentries.slice(0, limit);
        else return filterentries;
      })
      .then((response) => res.json(response));
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default getData;
