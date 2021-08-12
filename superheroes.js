const superHeroes = 
[
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]

    const superHeroesName = superHeroes.map(superheld => superheld.name)

    // console.log(superHeroesName)

    const superHeroesLightWeight = superHeroes.filter(superheld => superheld.weight < 190)

    // console.log(superHeroesLightWeight)

    const superHeroes200Weight = superHeroes
    .filter(superheld => superheld.weight === "200")
    .map(superheld => superheld.name)

    // console.log(superHeroes200Weight)

// const suprerHeroesFirstAppearances = superHeroes.map(superheld => superheld.first_appearance)

// console.log(suprerHeroesFirstAppearances)

const superHeroesDcComics = superHeroes
.filter(superheld => superheld.publisher === "DC Comics")
.map(superheld => superheld.name)

// console.log(superHeroesDcComics)


const superHeroesMarvelComics = superHeroes
.filter(superheld => superheld.publisher === "Marvel Comics")
.map(superheld => superheld.name)

// console.log(superHeroesMarvelComics)

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const superHeroesDcComicsWeight = () => {
    const superHeroesDcComicsTotal = superHeroes
    .filter(superheld => superheld.publisher === "DC Comics")
    .map(superheld => parseInt(superheld.weight))
    .reduce(reducer)
    return superHeroesDcComicsTotal
}
// console.log(superHeroesDcComicsWeight())

// const superHeroesMarvelComicsWeight = () => {
//     let superHeroesMarvelComicsTotalFilter = superHeroes.filter(superheld => superheld.publisher === "Marvel Comics")
//     // console.log(superHeroesMarvelComicsTotalFilter)

//     let superHeroesMarvelComicsTotalMap = superHeroesMarvelComicsTotalFilter.map(superheld => superheld.weight)

//     let superHeroesMarvelComicsTotalNumber = superHeroesMarvelComicsTotalMap.map(Number)

//     let superHeroesMarvelComicsTotalAllNumbers = superHeroesMarvelComicsTotalNumber.filter(superheld => superheld > 0)

//     let superHeroesMarvelComicsTotalAllNumbersReduce = superHeroesMarvelComicsTotalAllNumbers.reduce(reducer)

//     return superHeroesMarvelComicsTotalAllNumbersReduce
// }

// console.log(superHeroesMarvelComicsWeight())

const superHeroesMarvelComicsWeight = () => {
    let superHeroesMarvelComicsTotalFilter = superHeroes
    .filter(superheld => superheld.publisher === "Marvel Comics")
    .map(superheld => superheld.weight)
    .map(Number)
    .filter(superheld => superheld > 0)
    .reduce(reducer)

    return superHeroesMarvelComicsTotalFilter
}

// console.log(superHeroesMarvelComicsWeight())

const BiggistSuperHeroes = () => {
    const getMax = (a, b) => Math.max(a, b);
    let BiggistSuperHeroesFilter = superHeroes
    .map(superheld => superheld.weight)
    .map(Number)
    .filter(superheld => superheld > 0)
    .reduce(getMax)
    return BiggistSuperHeroesFilter
}
console.log(BiggistSuperHeroes())




