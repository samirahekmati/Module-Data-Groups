function contains(object, key) {
    //The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property 
     return object.hasOwnProperty(key);
}

console.assert(contains({name:"julie", city:"bristol"}, "city") === true)

module.exports = contains;
