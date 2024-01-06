// raceController.js
import RaceModel from '../models/RaceModel.js';


// ========================== Add new Race to DB ==================================

export const addNewRace = async (req, res) => {
  try {

    // Get data from the request body
    let raceId = Number(req.body.raceId);
    const { name, ability, image, type  } = req.body;
    

    // Create a new race instance
    const newRace = new RaceModel({
      raceId,
      name,
      ability,
      image,
      type,
    });

    // Save the new race to the database
    await newRace.save();
    
  
    // If successful
    res.render('raceAddView', {
      status: 'Done',
    });

  } catch (error) { 
    res.status(500).json({ error: 'Adding failed: ', message: error.message })
  }
};


// ========================= Get all Races from DB =================================

export const getRacesData = async () => {

  // Empty Object and Count of Races in DB
  const racesCount = await RaceModel.countDocuments();
  const racesResult = [];

  // From id = 1 to last (by count) Race id
  for (let id = 1; id < racesCount; id++) {

    // Fetch the race document from the database ? 
    const raceCard = await RaceModel.findOne({ raceId: id }).exec();
  
    // If Race exists, push it to the racesResult array
    if (raceCard) {
      racesResult.push({
        raceId: id,
        name: raceCard.name,
        ability: raceCard.ability,
        image: raceCard.image,
        type: raceCard.type,
      });
    }
  }
  
  // Return the racesResult array
  return racesResult;
};
