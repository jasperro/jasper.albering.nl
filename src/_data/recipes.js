const fetch = require("node-fetch");

async function getAllRecipes() {
    let response;

    // make queries until makeNewQuery is set to false
    try {
        // initiate fetch
        const data = await fetch("http://localhost/jsonapi/node/recipe", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        // store the JSON response when promise resolves
        response = await data.json();

        console.log(response);

        // handle CMS errors
        if (response.errors) {
            let errors = response.errors;
            errors.map((error) => {
                console.log(error.message);
            });
            throw new Error("Houston... We have a CMS problem");
        }
    } catch (error) {
        throw new Error(error);
    }

    const responseFormatted = response.data.map((item) => {
        return {
            id: item.id,
            title: item.attributes.title,
            temperature: item.attributes.field_temperature,
            tasty: item.attributes.field_tasty,
            content: item.attributes.body.processed,
        };
    });

    return responseFormatted;
}

// export for 11ty
module.exports = getAllRecipes;
