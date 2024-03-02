const Data = require('../models/Data');


exports.getData = async (req, res) => {
    try {
        const filters = req.query;  
        const filterObject = {};
        for (const key in filters) {
            if (filters.hasOwnProperty(key)) {  
                filterObject[key] = filters[key];  
            }
        }

        const data = await Data.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

    // const FetchUsersData = async (req, res) => {
        // res.status(200).send({ data: await Data.find(), success: true })
    // }
};

exports.addData = async (req, res) => {
    try {
        const newData = new Data(req.body);
        const savedData = await newData.save();
        res.status(201).json(savedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};