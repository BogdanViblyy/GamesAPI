const mongoose = require('mongoose');
const Game = require('./models/game');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const sampleGames = [
    {
        id: 1,
        name: "The Witcher 3: Wild Hunt",
        description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
        category: "RPG",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
        price: 29.99,
        releaseDate: new Date("2015-05-19")
    },
    {
        id: 2,
        name: "Cyberpunk 2077",
        description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and relentless body modification.",
        category: "RPG",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
        price: 59.99,
        releaseDate: new Date("2020-12-10")
    },
    {
        id: 3,
        name: "Elden Ring",
        description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        category: "Action RPG",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
        price: 59.99,
        releaseDate: new Date("2022-02-25")
    },
    {
        id: 4,
        name: "Stardew Valley",
        description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life.",
        category: "Simulation",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
        price: 14.99,
        releaseDate: new Date("2016-02-26")
    },
    {
        id: 5,
        name: "Hades",
        description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",
        category: "Roguelike",
        imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
        price: 24.99,
        releaseDate: new Date("2020-09-17")
    }
];

mongoose.connect(uri)
    .then(async () => {
        console.log('Connected to MongoDB for seeding...');

        // Clear existing games
        await Game.deleteMany({});
        console.log('Cleared existing games.');

        // Insert new games
        await Game.insertMany(sampleGames);
        console.log('Seeded database with sample games.');

        mongoose.connection.close();
    })
    .catch((error) => {
        console.error('Error seeding database:', error);
        mongoose.connection.close();
    });
