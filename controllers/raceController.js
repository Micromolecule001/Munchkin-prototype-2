// raceController.js

import Race from '../models/RaceModel.js';

export const addNewRace = async (req, res) => {
  try {

    // Get data from the request body
    let raceId = Number(req.body.raceId);
    const { name, ability, image, type  } = req.body;
    
    console.log('req.body: ', req.body);

    // Create a new race instance
    const newRace = new Race({
      raceId,
      name,
      ability,
      image,
      type,
    });

    // Save the new race to the database
    try {
      await newRace.save();
    } catch (error) {
      return res.status(500).json({ error: 'Save failed', message: error.message });
    }
   

    // If successful

    console.log('newRace: ', newRace);
    res.render('raceAddView', {
      message: 'Register successful',
      userId: newRace.id,
    });
  } catch (error) { 
    res.status(500).json({ error: 'Register failed', message: error.message })
  }
};

export default {
    addNewRace,
  };