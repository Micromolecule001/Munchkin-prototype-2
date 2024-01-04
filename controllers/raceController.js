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


export const getRacesData = async () => {
  let races = [];

  let count = typeof raceDocumentCount === 'function' ? await raceDocumentCount() : raceDocumentCount;

  for (let id = 1; id < count; id++) {
    // Fetch the race document from the database
    const race = await Race.findOne({ raceId: id }).exec();
  
    // Check if the race document exists
    if (race) {
      races.push({
        raceId: id,
        name: race.name,
        ability: race.ability,
        image: race.image,
        type: race.type,
      });
    }
  }

  console.log('getRaces done')

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
    console.log('Document count:', count);
    return count;
  } catch (error) {
    console.error('Error getting document count:', error);
    throw error;
  }
};


export default {
    addNewRace,
  };