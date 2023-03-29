import { db } from "../db.js";

export const editStudent = (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    
    // Query the database to update the user with the given ID
    db.query('UPDATE user SET username = ?, email = ? WHERE id = ?', [username, email, userId], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating user');
      } else {
        console.log(result)
        res.status(200).send('User updated successfully');
      }
    });
  }