// controllers/artistController.js

import Artist from '../models/artist.js';

// Create Artist
const createArtist = async (req, res) => {
  try {
    const { name, bio, category, location } = req.body;
    const image = req.file ? req.file.filename : null;
    const createdBy = req.user.id;

    const newArtist = new Artist({ name, bio, category, location, image, createdBy });
    await newArtist.save();
    res.status(201).json(newArtist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Artists
const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.status(200).json(artists);
  } catch (error) {  
    res.status(500).json({ message: error.message });
  }
};

// Get Artist by ID
const getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) return res.status(404).json({ message: 'Artist not found' });
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Artist
const updateArtist = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) return res.status(404).json({ message: 'Artist not found' });

    if (artist.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const updatedData = req.body;
    if (req.file) updatedData.image = req.file.filename;

    const updated = await Artist.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Artist
const deleteArtist = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) return res.status(404).json({ message: 'Artist not found' });

    if (artist.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await Artist.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Artist deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Export all
export {
  createArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
  deleteArtist
};
