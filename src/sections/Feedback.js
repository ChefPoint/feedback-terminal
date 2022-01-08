/* * */
/* * */
/* * * * * */
/* Feedback */
/* * */

/* * */
/* IMPORTS */
import _ from 'lodash';
import FeedbackAPI from '../services/FeedbackAPI';

/* * */
/* * * * */
export default class Feedback {
  properties = {};

  set(path, value) {
    _.set(this.properties, path, value);
    return this;
  }

  get(key) {
    if (key) return this.properties[key];
    else return this.properties;
  }

  async save() {
    try {
      if (this.properties.id) await this.update();
      else await this.create();
      return this.properties.id;
      // await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (err) {
      console.log(err.response.data);
      throw new Error(err);
    }
  }

  // If there is no _id set, then POST a new POSFeedback
  async create() {
    const response = await FeedbackAPI.post(this.properties);
    this.properties.id = response.data.id;
  }

  // Update POSFeedback with set _id
  async update() {
    await FeedbackAPI.put(this.properties);
  }
}
