// const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
// const COHORT = "2505-ftb-ct-web-pt";
// const RESOURCE = "/events";
// const API = BASE + COHORT + RESOURCE;

// const $output_1 = document.createElement("output");
const $div2 = document.createElement("div");
$h3 = document.createElement("h3");

const getMoreInfo = async (id) => {
    try {
        const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/events/${id}`);
        const data = await response.json();
        const $p1 = document.createElement("p");
        const $p2 = document.createElement("p");
        const $p3 = document.createElement("p");
        const $p = document.createElement("p");        

        console.log(data.data)
        $p1.textContent = data.data.id
        $p1.style.fontWeight = "bold";
        $p2.textContent = data.data.date
        $p3.textContent = data.data.location
        $p.textContent = data.data.description
        
        $div2.innerHTML = ""
        $div2.append($p1)
        $div2.append($p2)
        $div2.append($p3)
        $div2.append($p)
        $h3.innerHTML = ""
        console.log(data.data);
    } catch (error) {
        console.error(error);
        return [];
    }
};

const party = async () => {
    try {
        const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/events/`);
        const data = await response.json();
        displayResults(data.data);
    } catch (error) {
        console.error(error);
    }
};





// const form = () => {
//     const $form = document.createElement("form");
//     $form.style.width = "50%";
//     $form.style.margin = "0 auto";
//     $form.innerHTML = `<div class="form-group">
//         <label for="exampleInputEmail1">Add a number to the bank</label>
//         <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add number">
//     </div>
//     <button class="btn btn-primary">Add number</button>`;
//     $form.addEventListener("submit", addNumberToBank);
//     return $form;
// }

const displayResults = (characters) => {
    $app = document.querySelector("#app");
    $h1 = document.createElement("h1");
    $h1.textContent = "Party Planner";
    $app.append($h1);
    $h2_1 = document.createElement("h2");
    $h2_1.textContent = "Upcoming Parties";
    $app.append($h2_1);
    for (const element of characters) {
        $div = document.createElement("div");
        $p = document.createElement("p");
        $p.textContent = element.name;
        $button = document.createElement("button");
        $button.textContent = "Click for more info";
        $button.addEventListener("click", () => getMoreInfo(element.id));
        
        $div.append($p);
        $div.append($button);
        $app.append($div);
    }
    $h2.textContent = "Party Details";
    $app.append($h2);
    $app.append($div2);
    $app.append($h3);
};

const partyDetails = () => {
    $app = document.querySelector("#app");
    $h2 = document.createElement("h2");
    
    $h3.textContent = "Please select a party";
};












// const start = () => {
//     console.log("Hello")
    
    
// }



party();
partyDetails();