import mongoose from 'mongoose';

const entriesSchema = mongoose.Schema(
  {
    API: {
      type: String,
    },
    Description: {
      type: String,
    },
    Auth: {
      type: String,
    },
    HTTPS: {
      type: String,
    },
    Cors: {
      type: String,
    },
    Link: {
      type: String,
    },
    Category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Entries = mongoose.model('Entries', entriesSchema);

export default Entries;
