import { db } from "../db.js";

export const getUser = (req, res) => {
    db.query('SELECT id, username, email, subject, year FROM user', (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error retrieving users from database');
        } else {
            res.status(200).json(results);
        }
    });    
}

export const editUser = (req, res) => {
    const { id } = req.params;
    const { username, email, subject, year } = req.body;
    const query = 'UPDATE user SET username=?, email=?, subject=?, year=? WHERE id=?';
    db.query(query, [username, email, subject, year, id], (error, results) => {
      if (error) {
        console.error(error);
        console.log(error)
        res.status(500).send('Error updating user in database');
      } else {
        res.status(200).send(`User with id ${id} has been updated`);
      }
    });
  }

  export const deleteStudent = (req, res) => {
    const id = req.params.id;
    const q = "DELETE FROM user WHERE id = ?";
    db.query(q, [id], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("Student deleted successfully");
    });
  };

