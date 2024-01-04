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


export const getRaces = async (req, res) => {
  try {
    let races = [];

    

    for (let i = 0; i < raceDocumentCount; i++) {
      // Perform logic to fetch races from the database or any other data source
      // and add them to the races array
      races.push({
        raceId: i + 1,
        name: `Race ${i + 1}`,
        ability: `Ability ${i + 1}`,
        image: `Image ${i + 1}`,
        type: `Type ${i + 1}`,
      });
    }

    res.render('raceAddView', {
      message: 'Register successful',
      races: races,
    });
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