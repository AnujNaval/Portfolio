const mongoose = require('mongoose');
require('dotenv').config();
const Project = require('./models/Project');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Your actual projects
const projects = [
  {
    title: 'Income Prediction Using Decision Trees & Random Forest',
    description: 'Implemented decision tree classifier from scratch using mutual information and entropy-based splitting criteria. Developed post-pruning algorithm with ensemble methods reducing tree complexity by 98%. Built Random Forest with grid search achieving 85.45% accuracy.',
    image: '/images/decision_tree.png',
    link: 'https://github.com/AnujNaval/Income-Prediction-Using-Decision-Trees-and-Random-Forest-Ensemble',
    github: 'https://github.com/AnujNaval/Income-Prediction-Using-Decision-Trees-and-Random-Forest-Ensemble',
    technologies: ['Python', 'Machine Learning', 'Random Forest', 'Decision Trees'],
    featured: true
  },
  {
    title: 'Traffic Sign Classification using Neural Networks',
    description: 'Engineered deep learning neural networks from scratch with backpropagation and cross-entropy loss. Implemented adaptive learning rate scheduling with ReLU activation. Conducted comparative analysis using grid search across multi-layer architectures.',
    image: '/images/neural_network.png',
    link: 'https://github.com/AnujNaval/Traffic-Sign-Classification-Using-Deep-Neural-Networks',
    github: 'https://github.com/AnujNaval/Traffic-Sign-Classification-Using-Deep-Neural-Networks',
    technologies: ['Python', 'Deep Learning', 'Neural Networks', 'Computer Vision'],
    featured: true
  }
];

// Seed function
async function seedProjects() {
  try {
    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects');
    
    // Insert new projects
    await Project.insertMany(projects);
    console.log('Projects seeded successfully!');
    
    // Display the projects
    const allProjects = await Project.find();
    console.log('\nSeeded Projects:');
    allProjects.forEach(project => {
      console.log(`- ${project.title}`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding projects:', error);
    process.exit(1);
  }
}

// Run the seed function
seedProjects();