const express = require("express");
const router = express.Router();
const app = express();
app.use('/api',router);
const USERS = require ('../controller/users');


router.get('/get-users/:adminId', USERS.getUsers);

router.get('/delete-user/:userId', USERS.deleteUser);

module.exports = router;