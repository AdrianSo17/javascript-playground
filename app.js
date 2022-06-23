"use strict"
window.onload = () => {
    alert("Are you Ready?")
    let Originalstory = `<h1>This is the original story.</h1>\n<br><h2> I am the bone of my sword.\n<br> Steel is my body, and fire is my blood.\n<br> I have created over a thousand blades.\n<br> Unknown to Death, Nor known to life.\n<br> Have withstood pain to create many weapons.\n<br> Yet those hands will never hold anything.\n<br> So as i pray, Unlimited Blade Works!</h2>`;
    let inputs = {
        "a parts of the body":"",
        "a Metallic element(e.g iron, steel etc...)":"",
        "an elements of nature(e.g fire, water etc...)":"",
        "an action you can/will do to a living/non-living things(verb:past-tense)":"",
        "living/non-living things(Plural-form)":"",
        "a noun that has an opposite meaning":"",
        "oposite word of the previous inputs":"",
        "a verb(past-tense)":"",
        "a name of any non-living/living things(Plural-form)":"",
        "Something you can hold/touch":"",
        "a physical object":""
    };
    for(let i in inputs){
        inputs[i] = prompt(`Please input ${i} (${Object.keys(inputs).length - (Object.keys(inputs).indexOf(i)+1)} questions left...): `);
    }
    let Newstory = `<h1>This is the New story that you created.</h1>\n<br><h2> I am the ${Object.values(inputs)[0]} of my sword.\n<br> ${Object.values(inputs)[1]} is my body, and ${Object.values(inputs)[2]} is my blood.\n<br> I have ${Object.values(inputs)[3]} over a thousand ${Object.values(inputs)[4]}.\n<br> Unknown to ${Object.values(inputs)[5]}, Nor known to ${Object.values(inputs)[6]}.\n<br> Have ${Object.values(inputs)[7]} pain to create many ${Object.values(inputs)[8]}.\n<br> Yet those hands will never hold a/an ${Object.values(inputs)[9]}.\n<br> So as i pray, Unlimited ${Object.values(inputs)[10]} Works!</h2>`;
    alert("Done! Ready to see the Result?")
    console.log(Newstory);
    document.write(Originalstory)
    document.write(Newstory);
}
