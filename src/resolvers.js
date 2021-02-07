const { v4: uuidv4 } = require('uuid');

module.exports = {
    Query: {
        desserts: (parent, args, { models }) => Object.values(models.desserts)
    },
    Mutation: {
        createDessert: (parent, args, { models }) => {
            const id = uuidv4();
            const dessert = {
                id,
                ...args,
            };
            models.desserts[id] = dessert;
            // throw new Error('message here');
            return dessert;
        },
        deleteDessert: (parent, { ids }, { models }) => {
            // return false
            const desserts = models.desserts;
            let noError = true;
            ids.forEach(id => {
                if (!(id in desserts)) {
                    noError = false;
                    return;
                }
            })
            // throw new Error('message here');
            // delete single value
            // const { [id]: dessert, ...desserts } = models.desserts;
            // if (!dessert) {
            //     return false;
            // }
            if (noError) {
                ids.forEach(id => {
                    delete desserts[id];
                })
            }
            return noError;
        }
    }
}
