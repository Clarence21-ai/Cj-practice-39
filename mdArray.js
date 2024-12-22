let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"]; // Names
let subArray2 = [24, 65, 21, 5, 9]; // Numerical values

let restructuredArray = [];
for (let i = 0; i < subArray1.length; i++) {
    restructuredArray.push([subArray1[i], subArray2[i]]);
    }

    console.log("Restructured Array:");
    restructuredArray.forEach(subArray => {
        console.log(`[${subArray[0]}, ${subArray[1]}]`);
        });