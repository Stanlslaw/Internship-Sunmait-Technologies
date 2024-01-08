import { CardsData } from "../database/db.js";
import {Cards} from "../database/models/models.js";
class Projects {
  constructor() {}
  async GetProjects(req, res) {
    try {
      const { search } = req.query;
      let data =await  Cards.findAll();
      if (!search) {
        res.json({
          CardsData: data,
        });
        return;
      }
      res.json({
        CardsData: data.filter((el) => {
          return el.cardHeader.toLowerCase().includes(search.toLowerCase())
        })
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  }
}
export default new Projects();
