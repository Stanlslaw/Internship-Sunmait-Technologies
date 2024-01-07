import { CardsData } from "../database/db.js";
class Projects {
  constructor() {}
  async GetProjects(req, res) {
    try {
      const { search } = req.query;
      if (!search) {
        res.json({
          CardsData: CardsData,
        });
        return;
      }
      res.json({
        CardsData: CardsData.filter((el) => {
          return el.cardHeader.toLowerCase().includes(search.toLowerCase());
        }),
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  }
}
export default new Projects();
