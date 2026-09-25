import express from "express";
import cors from "cors";
import userServices from "./user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("hello world");
});



app.delete("/users/:id", (req, res) => {
   const id = req.params["id"];
   
   userServices
	.deleteUserById(id)
	.then((result) => {
		if(result){
			res.status(204).end();
		}
		else{
			res.status(404).send("resource not found");
		}
	})
	.catch((error) => {
		console.log(error);
		res.status(500).send("error occured");
	});
});

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  
  userServices
	.addUser(userToAdd)
	.then((savedUser) => {
		res.status(201).send(savedUser);
	})
	.catch((error) => {
		console.log(error);
		res.status(500).send("failed to create");
	});
});

app.get("/users/:id", (req, res) => {
  const id = req.params["id"]; 
  userServices
	.findUserById(id)
	.then((result) => {
		if(result == null || result == undefined){
			res.status(404).send("resource not found.");
		}
		else{
			res.send(result);
		}
	})
	.catch((error) => {
		console.log(error);
		res.status(500).send("invalid id");
	});

});


app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;

  userServices
	.getUsers(name, job)
	.then((result) => {
		res.send({users_list: result});
	})
	.catch((error)=> {
		console.log(error);
		res.status(500).send("an error occured");
	});
});



app.listen(port, () => {
        console.log(
                'Example app listening at http://localhost:${port}'
        );
});





