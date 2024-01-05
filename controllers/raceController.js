// raceController.js

import Race from '../models/RaceModel.js';

export const addNewRace = async (req, res) => {
  try {

    // Get data from the request body
    let raceId = Number(req.body.raceId);
    const { name, ability, image, type  } = req.body;
    

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

    res.render('raceAddView', {
      message: 'Register successful',
      userId: newRace.id,
    });
  } catch (error) { 
    res.status(500).json({ error: 'Register failed', message: error.message })
  }
};


export const getRacesData = async () => {
  let races = [];

  let count = typeof raceDocumentCount === 'function' ? await raceDocumentCount() : raceDocumentCount;

  for (let id = 1; id < count; id++) {
    // Fetch the race document from the database
    const raceCard = await Race.findOne({ raceId: id }).exec();
  
    // Check if the race document exists
    if (raceCard) {
      races.push({
        raceId: id,
        name: raceCard.name,
        ability: raceCard.ability,
        image: raceCard.image,
        type: raceCard.type,
      });
    }
  }
  
  return races;
};

export const getRaces = async (req, res) => {
  try {
    const races = await getRacesData();
    res.render('raceListView', { message: 'Register successful', races: races });
  } catch (error) {
    res.status(500).json({ error: 'Register failed', message: error.message });
  }
};

// Get the number of documents in the database
export const raceDocumentCount = async () => {
  try {
    const count = await Race.countDocuments();
    return count;
  } catch (error) {
    console.error('Error getting document count:', error);
    throw error;
  }
};


export default {
    addNewRace,
  };