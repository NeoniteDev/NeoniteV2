const fs = require("fs");
const path = require("path");
const axios = require("axios");

// @author armisto#2174
module.exports = {
    /**
     * Adds an item to the profile JSON.
     * 
     * @param {any} profile the profile object, loaded from a file
     * @param {string} itemId the item ID of the item to add
     * @param {any} item the item object to add
     * @param {any[]} profileChangesArr (optional) if a change is made, adds a profile change entry to the profileChanges array
     * @returns {boolean} if the a change is made
     */
    addItem(profile, itemId, item, profileChangesArr) {
        if (profile.items[itemId]) {
            return false;
        }

        profile.items[itemId] = item;

        if (profileChangesArr) {
            profileChangesArr.push({ "changeType": "itemAdded", "itemId": itemId, "item": item });
        }

        return true;
    },

    /**
     * Removes an item from the profile JSON.
     * 
     * @param {any} profile the profile object, loaded from a file
     * @param {string} itemId the item ID of the item to remove
     * @param {any[]} profileChangesArr (optional) if a change is made, adds a profile change entry to the profileChanges array
     * @returns {boolean} if the a change is made
     */
    removeItem(profile, itemId, profileChangesArr) {
        if (!profile.items[itemId]) {
            return false;
        }
        //commented it to prevent removing gift item from the profile
        //delete profile.items[itemId];

        if (profileChangesArr) {
            profileChangesArr.push({ "changeType": "itemRemoved", "itemId": itemId });
        }

        return true;
    },

    /**
     * Modifies the quantity of a specified item in the profile JSON.
     * 
     * @param {any} profile the profile object, loaded from a file
     * @param {string} itemId the item ID
     * @param {number} quantity the new quantity
     * @param {any[]} profileChangesArr (optional) if a change is made, adds a profile change entry to the profileChanges array
     * @returns {boolean} if the a change is made
     */
    changeItemQuantity(profile, itemId, newQuantity, profileChangesArr) {
        if (!profile.items[itemId] || profile.items[itemId].quantity == newQuantity) {
            return false;
        }

        profile.items[itemId].quantity = newQuantity;

        if (profileChangesArr != null) {
            profileChangesArr.push({ "changeType": "itemQuantityChanged", "itemId": itemId, "quantity": newQuantity });
        }

        return true;
    },

    /**
     * Modifies an attribute value of a specified item in the profile JSON.
     * 
     * @param {any} profile the profile object, loaded from a file
     * @param {string} itemId the item ID of the item to have one of its attributes' value changed
     * @param {string} attributeName the item attribute property name
     * @param {any} attributeValue the new attribute value
     * @param {any[]} profileChangesArr (optional) if a change is made, adds a profile change entry to the profileChanges array
     * @returns {boolean} if the a change is made
     */
    changeItemAttribute(profile, itemId, attributeName, attributeValue, profileChangesArr) {
        var item = profile.items[itemId];

        if (!item) {
            return false;
        }

        if (!item.attributes) {
            item.attributes = {};
        } /*else if (item.attributes[attributeName] == attributeValue) {
        return false;
    }*/

        item.attributes[attributeName] = attributeValue;

        if (profileChangesArr != null) {
            profileChangesArr.push({ "changeType": "itemAttrChanged", "itemId": itemId, "attributeName": attributeName, "attributeValue": attributeValue });
        }

        return true;
    },

    /**
     * Modifies the a stat value of the profile JSON.
     * 
     * @param {any} profile the profile object, loaded from a file
     * @param {string} statName the stat property name
     * @param {any} statValue the stat value to modify to
     * @param {any[]} profileChangesArr (optional) if a change is made, adds a profile change entry to the profileChanges array
     * @returns {boolean} if the a change is made
     */
    modifyStat(profile, statName, statValue, profileChangesArr) {
        if (!statName || statValue == null) {
            return false;
        }
        profile.stats.attributes[statName] = statValue;

        if (profileChangesArr != null) {
            profileChangesArr.push({ "changeType": "statModified", "name": statName, "value": statValue });
        }

        return true;
    },

    /**
     * Changes the updated date of the profile and its revision so the client can detect if it has been changed.
     * 
     * @param {any} profile the profile object, loaded from a file
     * @returns {any} the supplied profile object
     */
    bumpRvn(profile) {
        profile.rvn += 1;
        profile.updated = new Date().toISOString();
        profile.commandRevision += 1;
        return profile;
    },

    readProfile(accountId, profileId) {
        try {
            return JSON.parse(fs.readFileSync(path.join(__dirname, `/config/${accountId}/profiles/profile_${profileId}.json`), "utf8"));
        } catch (e) {
            return null;
        }
    },

    readProfileTemplate(profileId) {
        // console.log(`/config_template/profiles/profile_${profileId}.json`);
        try {
            return JSON.parse(fs.readFileSync(path.join(__dirname, `/config_template/profiles/profile_${profileId}.json`), "utf8"));
        } catch (e) {
            return null;
        }
    },

    saveProfile(accountId, profileId, data) {
        fs.writeFileSync(path.join(__dirname, `/config/${accountId}/profiles/profile_${profileId}.json`), JSON.stringify(data, null, 2));
    }
};
