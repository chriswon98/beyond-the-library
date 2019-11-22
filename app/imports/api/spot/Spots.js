import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Spots = new Mongo.Collection('Spots');

/** Define a schema to specify the structure of each document in the collection. */
const Spotschema = new SimpleSchema({
  name: String, // name of the spot
  image: String, // a link to the picture of the spot
  location: String, // general location for display
  description: String, // extra information for display
  address: String, // this is the exact address for map interaction
  owner: String, // name of the user who posted the spot
  major: {
    type: String,
    allowedValues: ['Computer Science', 'Computer Engineering', 'Music', 'Open for everyone'],
    defaultValue: 'Open for everyone',
  },
  environment: {
    type: String,
    allowedValues: ['Indoor', 'Outdoor', 'Unknown'],
    defaultValue: 'Outdoor',
  },
  time: {
    type: String,
    allowedValues: ['24/7', 'Weekdays Daytime', 'Daytime', 'Unknown'],
    defaultValue: '24/7',
  },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Spots.attachSchema(Spotschema);

/** Make the collection and schema available to other code. */
export { Spots, Spotschema };