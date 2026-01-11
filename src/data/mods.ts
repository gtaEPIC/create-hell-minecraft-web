export interface Mod {
  name: string;
  description: string;
  modrinthUrl: string;
  wikiUrl?: string;
}

export interface ModCategory {
  category: string;
  mods: Mod[];
}

export const modList: ModCategory[] = [
  {
    category: "Create Ecosystem",
    mods: [
      {
        name: "Create",
        description: "The centerpiece of the modpack - a technology mod focusing on automation, decoration, and aesthetic mechanical blocks. Version 5 brings rotational power, contraptions, and endless engineering possibilities.",
        modrinthUrl: "https://modrinth.com/mod/create-fabric",
        wikiUrl: "https://create.fandom.com/wiki/Create_Wiki"
      },
      {
        name: "Create Crafts & Additions",
        description: "Bridges Create with electrical power, adding generators, motors, and energy conversion systems to expand automation possibilities.",
        modrinthUrl: "https://modrinth.com/mod/createaddition"
      },
      {
        name: "Create Deco",
        description: "Adds decorative blocks and building materials that complement Create's industrial aesthetic, perfect for beautifying your factories.",
        modrinthUrl: "https://modrinth.com/mod/create-deco"
      },
      {
        name: "Create Jetpack",
        description: "Adds customizable jetpacks powered by Create's rotational force, offering a unique flight experience for engineers.",
        modrinthUrl: "https://modrinth.com/mod/create-jetpack"
      },
      {
        name: "Create Railways Navigator",
        description: "Advanced train navigation and scheduling system for Create's railway networks, making complex rail systems manageable.",
        modrinthUrl: "https://modrinth.com/mod/create-track-map"
      },
      {
        name: "Create Track Map",
        description: "Visual mapping system for your Create railway networks, helping you plan and monitor complex train routes.",
        modrinthUrl: "https://modrinth.com/mod/create-track-map"
      },
      {
        name: "Create Unlimited",
        description: "Removes various limitations from Create, allowing for more ambitious and large-scale engineering projects.",
        modrinthUrl: "https://modrinth.com/mod/create-unlimited"
      },
      {
        name: "Create: Bells & Whistles",
        description: "Adds cosmetic and functional improvements to trains, including bells, whistles, and decorative options for locomotives.",
        modrinthUrl: "https://modrinth.com/mod/bellsandwhistles"
      },
      {
        name: "Create: Copycats+",
        description: "Advanced block copying and facade system, allowing you to create custom blocks that mimic other blocks' textures.",
        modrinthUrl: "https://modrinth.com/mod/copycats"
      },
      {
        name: "Create: Interiors",
        description: "Furniture and interior decoration blocks designed to work seamlessly with Create's mechanical systems.",
        modrinthUrl: "https://modrinth.com/mod/create-interiors"
      },
      {
        name: "Create: Misc & Things",
        description: "Collection of miscellaneous additions to Create, including new machines, materials, and quality of life improvements.",
        modrinthUrl: "https://modrinth.com/mod/create-misc-and-things"
      },
      {
        name: "Create: New Age",
        description: "Expands Create into new technological ages with electrical systems, advanced machinery, and energy networks.",
        modrinthUrl: "https://modrinth.com/mod/create-new-age"
      },
      {
        name: "Create: Tramways",
        description: "Adds tram systems and urban transit options to Create's transportation network, perfect for city-building engineers.",
        modrinthUrl: "https://modrinth.com/mod/create-tramways"
      }
    ]
  },
  {
    category: "Tech & Automation",
    mods: [
      {
        name: "Applied Energistics 2",
        description: "Revolutionary storage and automation system using matter and energy. Features advanced crafting automation, wireless access, and spatial storage.",
        modrinthUrl: "https://modrinth.com/mod/ae2",
        wikiUrl: "https://appliedenergistics.org/"
      },
      {
        name: "Mekanism",
        description: "Comprehensive tech mod featuring ore processing, power generation, energy storage, and advanced machinery. Includes Additions, Generators, and Tools modules.",
        modrinthUrl: "https://modrinth.com/mod/mekanism",
        wikiUrl: "https://wiki.aidancbrady.com/wiki/Mekanism"
      },
      {
        name: "Draconic Evolution",
        description: "End-game technology mod with powerful tools, armor, and energy systems. Features dimension-bending capabilities and massive energy storage.",
        modrinthUrl: "https://modrinth.com/mod/draconic-evolution"
      },
      {
        name: "Immersive Engineering",
        description: "Retro-futuristic tech mod focused on multiblock structures, realistic wire systems, and industrial machinery with a unique aesthetic.",
        modrinthUrl: "https://modrinth.com/mod/immersiveengineering",
        wikiUrl: "https://ftb.fandom.com/wiki/Immersive_Engineering"
      },
      {
        name: "Electrodynamics",
        description: "Realistic electricity and machinery mod with complex power systems, scientific equipment, and industrial processing.",
        modrinthUrl: "https://modrinth.com/mod/electrodynamics"
      }
    ]
  },
  {
    category: "Building & Decoration",
    mods: [
      {
        name: "Chipped",
        description: "Massively expands building options with thousands of block variants, giving every builder unlimited creative freedom.",
        modrinthUrl: "https://modrinth.com/mod/chipped"
      },
      {
        name: "Effortless Building",
        description: "Powerful building tool that allows you to place blocks in patterns, mirror builds, and construct large structures effortlessly.",
        modrinthUrl: "https://modrinth.com/mod/effortless-building"
      },
      {
        name: "Extended Slabs+",
        description: "Adds slab, stair, and wall variants for many more blocks, expanding your building palette significantly.",
        modrinthUrl: "https://modrinth.com/mod/extended-slabs"
      }
    ]
  },
  {
    category: "Transportation",
    mods: [
      {
        name: "Valkyrien Skies",
        description: "Physics-based mod that allows you to build real, movable ships and airships with full physics simulation.",
        modrinthUrl: "https://modrinth.com/mod/valkyrien-skies",
        wikiUrl: "https://wiki.valkyrienskies.org/"
      },
      {
        name: "Clockwork",
        description: "Companion to Valkyrien Skies adding clockwork mechanics and Create integration for building advanced vehicles.",
        modrinthUrl: "https://modrinth.com/mod/valkyrien-skies-clockwork"
      },
      {
        name: "Simple Planes",
        description: "Build and fly your own aircraft with an intuitive block-based construction system.",
        modrinthUrl: "https://modrinth.com/mod/simpleplanes"
      },
      {
        name: "Trackwork",
        description: "Advanced rail system with switches, signals, and realistic train physics for complex railway networks.",
        modrinthUrl: "https://modrinth.com/mod/trackwork"
      }
    ]
  },
  {
    category: "Storage & Utility",
    mods: [
      {
        name: "Refined Storage",
        description: "Intuitive storage network system with crafting integration, wireless access, and fluid storage capabilities. Includes addons for expanded functionality.",
        modrinthUrl: "https://modrinth.com/mod/refined-storage",
        wikiUrl: "https://refinedmods.com/refined-storage/"
      },
      {
        name: "CC: Tweaked",
        description: "Adds programmable computers and turtles, enabling complex automation through Lua programming.",
        modrinthUrl: "https://modrinth.com/mod/cc-tweaked",
        wikiUrl: "https://tweaked.cc/"
      },
      {
        name: "Waystones",
        description: "Teleportation system with customizable waypoints, perfect for navigating large worlds and connecting distant bases.",
        modrinthUrl: "https://modrinth.com/mod/waystones"
      },
      {
        name: "JourneyMap",
        description: "Real-time mapping mod with waypoints, biome display, and multiplayer support. Includes Teams integration.",
        modrinthUrl: "https://modrinth.com/mod/journeymap"
      },
      {
        name: "Sophisticated Backpacks",
        description: "Advanced backpack system with upgrades, filtering, and automation capabilities for portable storage.",
        modrinthUrl: "https://modrinth.com/mod/sophisticated-backpacks"
      },
      {
        name: "Lootr",
        description: "Makes dungeon loot chests unique per player, ensuring everyone gets their fair share of treasure.",
        modrinthUrl: "https://modrinth.com/mod/lootr"
      }
    ]
  },
  {
    category: "World & Exploration",
    mods: [
      {
        name: "Biomes O' Plenty",
        description: "Adds 80+ unique biomes with new trees, plants, and terrain features, vastly expanding world generation variety.",
        modrinthUrl: "https://modrinth.com/mod/biomes-o-plenty",
        wikiUrl: "https://biomesoplenty.fandom.com/wiki/Biomes_O%27_Plenty_Wiki"
      },
      {
        name: "Serene Seasons",
        description: "Dynamic seasonal cycle with changing weather, crop growth, and visual effects throughout the year.",
        modrinthUrl: "https://modrinth.com/mod/serene-seasons"
      },
      {
        name: "Nature's Compass",
        description: "Handy tool for locating biomes, making exploration and base location planning much easier.",
        modrinthUrl: "https://modrinth.com/mod/natures-compass"
      }
    ]
  },
  {
    category: "Survival & Gameplay",
    mods: [
      {
        name: "Tinkers' Construct",
        description: "Tool crafting system with customizable parts, modifiers, and progressive upgrades. Build the perfect tool for every job.",
        modrinthUrl: "https://modrinth.com/mod/tinkers-construct",
        wikiUrl: "https://tinkers-construct.fandom.com/wiki/Tinkers%27_Construct_Wiki"
      },
      {
        name: "Farmer's Delight",
        description: "Expands farming and cooking with new crops, recipes, and food preparation methods. Makes survival more flavorful!",
        modrinthUrl: "https://modrinth.com/mod/farmers-delight"
      },
      {
        name: "Simple Voice Chat",
        description: "Proximity-based voice communication with configurable range, allowing natural in-game conversations with nearby players.",
        modrinthUrl: "https://modrinth.com/mod/simple-voice-chat"
      },
      {
        name: "Relics",
        description: "Adds powerful relics and artifacts to discover, each with unique abilities and progression paths.",
        modrinthUrl: "https://modrinth.com/mod/relics"
      },
      {
        name: "Tombstone",
        description: "Death management system that protects your items in a decorative grave, with teleportation and recovery features.",
        modrinthUrl: "https://modrinth.com/mod/tombstone"
      },
      {
        name: "Weather, Storms & Tornadoes",
        description: "Dynamic weather system with realistic storms, tornadoes, and environmental effects that impact gameplay.",
        modrinthUrl: "https://modrinth.com/mod/weather-storms-tornadoes"
      }
    ]
  },
  {
    category: "Quality of Life",
    mods: [
      {
        name: "AppleSkin",
        description: "Displays food value information, saturation, and hunger predictions, helping you manage your food supply efficiently.",
        modrinthUrl: "https://modrinth.com/mod/appleskin"
      },
      {
        name: "Jade",
        description: "Advanced tooltip system showing detailed information about blocks, entities, and mod content when hovering over them.",
        modrinthUrl: "https://modrinth.com/mod/jade"
      },
      {
        name: "Just Enough Items (JEI)",
        description: "Recipe viewer and item lookup system - essential for learning crafting recipes and mod integration.",
        modrinthUrl: "https://modrinth.com/mod/jei"
      },
      {
        name: "Tree Harvester",
        description: "Automatically harvests entire trees when you break the bottom log, saving time and making forestry more efficient.",
        modrinthUrl: "https://modrinth.com/mod/tree-harvester"
      }
    ]
  }
];
