import cloneDeep from "lodash.clonedeep";

const base = {
    "_id": "armor_plate_vi_thorax_2_aramid",
    "_name": "VI2A",
    "_parent": "armor_plate_thorax",
    "_type": "Item",
    "_props": {
        "Name": "Vixen Industries Level 2 Aramid Plate",
        "ShortName": "VI2A",
        "Description": "Multi-hit protective plating from Vixen Industries, to protect the user's thorax.",
        "Weight": 3.5,
        "BackgroundColor": "default",
        "Width": 3,
        "Height": 3,
        "StackMaxSize": 1,
        "ItemSound": "gear_armor",
        "Prefab": {
            "path": "assets/item_equipment_armorplate_chest.bundle",
            "rcid": ""
        },
        "UsePrefab": {
            "path": "",
            "rcid": ""
        },
        "StackObjectsCount": 1,
        "NotShownInSlot": false,
        "ExaminedByDefault": false,
        "ExamineTime": 1,
        "IsUndiscardable": false,
        "IsUnsaleable": false,
        "IsUnbuyable": false,
        "IsUngivable": false,
        "IsLockedafterEquip": false,
        "QuestItem": false,
        "LootExperience": 20,
        "ExamineExperience": 2,
        "HideEntrails": false,
        "RepairCost": 125,
        "RepairSpeed": 8,
        "ExtraSizeLeft": 0,
        "ExtraSizeRight": 0,
        "ExtraSizeUp": 0,
        "ExtraSizeDown": 0,
        "ExtraSizeForceAdd": false,
        "MergesWithChildren": false,
        "CanSellOnRagfair": true,
        "CanRequireOnRagfair": true,
        "ConflictingItems": [],
        "Unlootable": false,
        "UnlootableFromSlot": "FirstPrimaryWeapon",
        "UnlootableFromSide": [],
        "AnimationVariantsNumber": 0,
        "DiscardingBlock": false,
        "RagFairCommissionModifier": 1,
        "IsAlwaysAvailableForInsurance": false,
        "DiscardLimit": -1,
        "DropSoundType": "None",
        "InsuranceDisabled": false,
        "QuestStashMaxCount": 0,
        "IsSpecialSlotOnly": false,
        "IsUnremovable": false,
        "Grids": [],
        "Slots": [],
        "CanPutIntoDuringTheRaid": true,
        "CantRemoveFromSlotsDuringRaid": [],
        "BlocksEarpiece": false,
        "BlocksEyewear": false,
        "BlocksHeadwear": false,
        "BlocksFaceCover": false,
        "Durability": 50,
        "MaxDurability": 50,
        "armorClass": "2",
        "speedPenaltyPercent": -1.5,
        "mousePenalty": -0.5,
        "weaponErgonomicPenalty": -1,
        "armorZone": [
            "Chest"
        ],
        "Indestructibility": 0.9,
        "headSegments": [],
        "FaceShieldComponent": false,
        "FaceShieldMask": "NoMask",
        "HasHinge": false,
        "MaterialType": "BodyArmor",
        "RicochetParams": {
            "x": 0,
            "y": 0,
            "z": 80
        },
        "DeafStrength": "None",
        "BluntThroughput": 0.36,
        "ArmorMaterial": "Aramid",
        "BlindnessProtection": 0,
        "ArmorType": "Light"
    },
    "_proto": "545cdb794bdc2d3a198b456a"
};

const heavyMaterials = ["ArmoredSteel", "Titan"];
const rarityColors = {
    "Common": "default",
    "Rare": "orange",
    "Superrare": "red",
};
const armorClassRarities = {
    1: "Common",
    2: "Common",
    3: "Common",
    4: "Rare",
    5: "Superrare",
    6: "Superrare",
};

import config from "./mats";
import merge from "lodash.merge";

let db = {
    templates: {
        items: {
            "armor_plate": {
                "_id": "armor_plate",
                "_name": "armor_plate",
                "_parent": "57bef4c42459772e8d35a53b",
                "_type": "Node",
                "_props": {
                    "Name": "Base item for armor plates",
                    "ShortName": "armor_plate",
                    "Description": "You should not see this, it's meant for item filters as a parent",
                    "Weight": 3.5,
                    "BackgroundColor": "blue",
                    "Width": 3,
                    "Height": 3,
                    "StackMaxSize": 1,
                    "ItemSound": "gear_armor",
                    "Prefab": {
                        "path": "assets/item_equipment_armorplate_chest.bundle",
                        "rcid": ""
                    },
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "StackObjectsCount": 1,
                    "NotShownInSlot": false,
                    "ExaminedByDefault": false,
                    "ExamineTime": 1,
                    "IsUndiscardable": false,
                    "IsUnsaleable": false,
                    "IsUnbuyable": false,
                    "IsUngivable": false,
                    "IsLockedafterEquip": false,
                    "QuestItem": false,
                    "LootExperience": 20,
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 125,
                    "RepairSpeed": 8,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": false,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": true,
                    "ConflictingItems": [],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "BlocksEarpiece": false,
                    "BlocksEyewear": false,
                    "BlocksHeadwear": false,
                    "BlocksFaceCover": false,
                    "Durability": 50,
                    "MaxDurability": 50,
                    "armorClass": "2",
                    "speedPenaltyPercent": -1.5,
                    "mousePenalty": -0.5,
                    "weaponErgonomicPenalty": -1,
                    "armorZone": [
                        "Chest"
                    ],
                    "Indestructibility": 0.9,
                    "headSegments": [],
                    "FaceShieldComponent": false,
                    "FaceShieldMask": "NoMask",
                    "HasHinge": false,
                    "MaterialType": "BodyArmor",
                    "RicochetParams": {
                        "x": 0,
                        "y": 0,
                        "z": 80
                    },
                    "DeafStrength": "None",
                    "BluntThroughput": 0.36,
                    "ArmorMaterial": "Aramid",
                    "BlindnessProtection": 0,
                    "ArmorType": "Light"
                }
            },
            "armor_plate_arms": {
                "_id": "armor_plate_arms",
                "_name": "armor_plate_arms",
                "_parent": "armor_plate",
                "_type": "Node",
                "_props": {
                    "Name": "Base item for armor plates",
                    "ShortName": "armor_plate_arms",
                    "Description": "You should not see this, it's meant for item filters as a parent",
                    "Weight": 3.5,
                    "BackgroundColor": "blue",
                    "Width": 3,
                    "Height": 3,
                    "StackMaxSize": 1,
                    "ItemSound": "gear_armor",
                    "Prefab": {
                        "path": "assets/item_equipment_armorplate_chest.bundle",
                        "rcid": ""
                    },
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "StackObjectsCount": 1,
                    "NotShownInSlot": false,
                    "ExaminedByDefault": false,
                    "ExamineTime": 1,
                    "IsUndiscardable": false,
                    "IsUnsaleable": false,
                    "IsUnbuyable": false,
                    "IsUngivable": false,
                    "IsLockedafterEquip": false,
                    "QuestItem": false,
                    "LootExperience": 20,
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 125,
                    "RepairSpeed": 8,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": false,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": true,
                    "ConflictingItems": [],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "BlocksEarpiece": false,
                    "BlocksEyewear": false,
                    "BlocksHeadwear": false,
                    "BlocksFaceCover": false,
                    "Durability": 50,
                    "MaxDurability": 50,
                    "armorClass": "2",
                    "speedPenaltyPercent": -1.5,
                    "mousePenalty": -0.5,
                    "weaponErgonomicPenalty": -1,
                    "armorZone": [
                        "Chest"
                    ],
                    "Indestructibility": 0.9,
                    "headSegments": [],
                    "FaceShieldComponent": false,
                    "FaceShieldMask": "NoMask",
                    "HasHinge": false,
                    "MaterialType": "BodyArmor",
                    "RicochetParams": {
                        "x": 0,
                        "y": 0,
                        "z": 80
                    },
                    "DeafStrength": "None",
                    "BluntThroughput": 0.36,
                    "ArmorMaterial": "Aramid",
                    "BlindnessProtection": 0,
                    "ArmorType": "Light"
                }
            },
            "armor_plate_stomach": {
                "_id": "armor_plate_stomach",
                "_name": "armor_plate_stomach",
                "_parent": "armor_plate",
                "_type": "Node",
                "_props": {
                    "Name": "Base item for stomach armor plates",
                    "ShortName": "armor_plate_stomach",
                    "Description": "You should not see this, it's meant for item filters as a parent",
                    "Weight": 3.5,
                    "BackgroundColor": "blue",
                    "Width": 3,
                    "Height": 3,
                    "StackMaxSize": 1,
                    "ItemSound": "gear_armor",
                    "Prefab": {
                        "path": "assets/item_equipment_armorplate_chest.bundle",
                        "rcid": ""
                    },
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "StackObjectsCount": 1,
                    "NotShownInSlot": false,
                    "ExaminedByDefault": false,
                    "ExamineTime": 1,
                    "IsUndiscardable": false,
                    "IsUnsaleable": false,
                    "IsUnbuyable": false,
                    "IsUngivable": false,
                    "IsLockedafterEquip": false,
                    "QuestItem": false,
                    "LootExperience": 20,
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 125,
                    "RepairSpeed": 8,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": false,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": true,
                    "ConflictingItems": [],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "BlocksEarpiece": false,
                    "BlocksEyewear": false,
                    "BlocksHeadwear": false,
                    "BlocksFaceCover": false,
                    "Durability": 50,
                    "MaxDurability": 50,
                    "armorClass": "2",
                    "speedPenaltyPercent": -1.5,
                    "mousePenalty": -0.5,
                    "weaponErgonomicPenalty": -1,
                    "armorZone": [
                        "Chest"
                    ],
                    "Indestructibility": 0.9,
                    "headSegments": [],
                    "FaceShieldComponent": false,
                    "FaceShieldMask": "NoMask",
                    "HasHinge": false,
                    "MaterialType": "BodyArmor",
                    "RicochetParams": {
                        "x": 0,
                        "y": 0,
                        "z": 80
                    },
                    "DeafStrength": "None",
                    "BluntThroughput": 0.36,
                    "ArmorMaterial": "Aramid",
                    "BlindnessProtection": 0,
                    "ArmorType": "Light"
                }
            },
            "armor_plate_thorax": {
                "_id": "armor_plate_thorax",
                "_name": "Base thorax plate",
                "_parent": "armor_plate",
                "_type": "Node",
                "_props": {
                    "Name": "Base item for thorax armor plates",
                    "ShortName": "Thorax Plate base",
                    "Description": "You should not see this, it's meant for item filters as a parent",
                    "Weight": 3.5,
                    "BackgroundColor": "blue",
                    "Width": 3,
                    "Height": 3,
                    "StackMaxSize": 1,
                    "ItemSound": "gear_armor",
                    "Prefab": {
                        "path": "assets/item_equipment_armorplate_chest.bundle",
                        "rcid": ""
                    },
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "StackObjectsCount": 1,
                    "NotShownInSlot": false,
                    "ExaminedByDefault": false,
                    "ExamineTime": 1,
                    "IsUndiscardable": false,
                    "IsUnsaleable": false,
                    "IsUnbuyable": false,
                    "IsUngivable": false,
                    "IsLockedafterEquip": false,
                    "QuestItem": false,
                    "LootExperience": 20,
                    "ExamineExperience": 2,
                    "HideEntrails": false,
                    "RepairCost": 125,
                    "RepairSpeed": 8,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "MergesWithChildren": false,
                    "CanSellOnRagfair": true,
                    "CanRequireOnRagfair": true,
                    "ConflictingItems": [],
                    "Unlootable": false,
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UnlootableFromSide": [],
                    "AnimationVariantsNumber": 0,
                    "DiscardingBlock": false,
                    "RagFairCommissionModifier": 1,
                    "IsAlwaysAvailableForInsurance": false,
                    "DiscardLimit": -1,
                    "DropSoundType": "None",
                    "InsuranceDisabled": false,
                    "QuestStashMaxCount": 0,
                    "IsSpecialSlotOnly": false,
                    "IsUnremovable": false,
                    "Grids": [],
                    "Slots": [],
                    "CanPutIntoDuringTheRaid": true,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "BlocksEarpiece": false,
                    "BlocksEyewear": false,
                    "BlocksHeadwear": false,
                    "BlocksFaceCover": false,
                    "Durability": 50,
                    "MaxDurability": 50,
                    "armorClass": "2",
                    "speedPenaltyPercent": -1.5,
                    "mousePenalty": -0.5,
                    "weaponErgonomicPenalty": -1,
                    "armorZone": [
                        "Chest"
                    ],
                    "Indestructibility": 0.9,
                    "headSegments": [],
                    "FaceShieldComponent": false,
                    "FaceShieldMask": "NoMask",
                    "HasHinge": false,
                    "MaterialType": "BodyArmor",
                    "RicochetParams": {
                        "x": 0,
                        "y": 0,
                        "z": 80
                    },
                    "DeafStrength": "None",
                    "BluntThroughput": 0.36,
                    "ArmorMaterial": "Aramid",
                    "BlindnessProtection": 0,
                    "ArmorType": "Light"
                }
            },
        },
        handbook: {
            Items: [] as any[],
        },
        prices: {},
    },
    locales: {
        global: {
            en: {},
        }
    }
};

Object.entries(config.availableVixenIndustriesPlates).forEach(([matName, plates]) => {
    const materialConfig = config.materials[matName];

    for (const slot of ["arms", "thorax", "stomach"]) {
        for (const armorClass of plates[slot]) {
            let newPlate = cloneDeep(base);
            const rarity = armorClassRarities[armorClass];
            const price = (materialConfig[slot].basePriceRUB * armorClass) * config.armorClassCostMultiplier[armorClass];
            merge(newPlate, {
                _id: `armor_plate_vi_${slot}_${armorClass}_${matName}`,
                _parent: `armor_plate_${slot}`,
                _props: {
                    Name: `Scavenged Level ${armorClass} ${matName} Armor Plate`,
                    ShortName: `P${armorClass}_${matName}_${slot}`,
                    Description: "A multi-hit protective armor plate meant for carriers.",
                    Prefab: {
                        path: config.prefabs[slot],
                    },
                    ItemSound: materialConfig.noise,
                    Height: config.sizes[slot][0],
                    Width: config.sizes[slot][1],
                    Weight: (materialConfig[slot].baseWeightKG + (armorClass * config.armorClassWeightKG[slot])),
                    armorClass: armorClass,
                    armorZone: config.zones[slot],
                    Durability: materialConfig[slot].maxDurability,
                    MaxDurability: materialConfig[slot].maxDurability,
                    ArmorMaterial: matName,
                    BluntThroughput: materialConfig.bluntThroughput,
                    speedPenaltyPercent: (armorClass * -0.3) * materialConfig.multipliers.speedPenalty,
                    mousePenalty: (armorClass * -0.12) * materialConfig.multipliers.mousePenalty,
                    weaponErgonomicPenalty: (armorClass * -0.25) * materialConfig.multipliers.ergonomicPenalty,
                    ArmorType: heavyMaterials.includes(matName) ? "Heavy" : "Light",
                    Rarity: rarity,
                    BackgroundColor: rarityColors[rarity],
                }
            });

            db.templates.items[newPlate._id] = newPlate;
            db.locales.global.en[`${newPlate._id} Name`] = newPlate._props.Name;
            db.locales.global.en[`${newPlate._id} ShortName`] = newPlate._props.ShortName;
            db.locales.global.en[`${newPlate._id} Description`] = newPlate._props.Description;
            db.templates.prices[newPlate._id] = price;
            db.templates.handbook.Items.push({
                "Id": newPlate._id,
                "ParentId": "5b5f704686f77447ec5d76d7",
                "Price": price,
            });
        }
    }
});

console.log(JSON.stringify(db));