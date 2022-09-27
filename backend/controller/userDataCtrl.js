const userModel = require('../models/userModel');

const userDataCtrl = {
    createProduct: async (req, res) => {
        const userData = new userModel(req.body);
        userData.save()
        .then(todo => {
            res.status(200).json({'todo': 'Data Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed To Add Data');
        });
    },
    getProduct: async (req, res) => {
        userModel.find(function(err, todos) {
            if (err) {
                console.log(err);
            } else {
                res.json(todos);
            }
        });
    },
    updateProduct: async (req, res) => {
        userModel.findById(req.params.id, (err, data) => {
            console.log(data);
            if (!data)
                res.status(404).send("Data not found");
            else
                data.bashboard.totalRevenue = req.body.bashboard.totalRevenue;
                data.save().then(data => {
                    res.json('Data updated!');
                })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        })
    }
};

module.exports = userDataCtrl;