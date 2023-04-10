export type book = {
  episodeTitle: string[];
  guestRecomendation: string[];
  author: string;
  rating?: number;
  link?: string;
};
type books = {
  [k: string | number]: book;
};
type episodeDateObjType = {
  [k: string]: {
    date: Date | null;
  };
};
export type DataType = {
  books: books;
  episodeDateObj: episodeDateObjType;
};
export const testData: DataType = {
  books: {
    1940: {
      author: "Susan Dunn",
      episodeTitle: ["Rachel Maddow Looks Back on a Wild 14 Years"],
      guestRecomendation: ["Rachel Maddow"],
    },
    "We the Fallen People": {
      author: "Robert Tracy McKenzie",
      episodeTitle: [
        "Trump’s Legal Jeopardy and America’s Political Crossroads",
      ],
      guestRecomendation: ["David French"],
    },
    "The Napoleonic Wars": {
      author: "Alexander Mikaberidze",
      episodeTitle: [
        "Trump’s Legal Jeopardy and America’s Political Crossroads",
      ],
      guestRecomendation: ["David French"],
    },
    "Ring of Steel": {
      author: "Alexander Watson",
      episodeTitle: [
        "Trump’s Legal Jeopardy and America’s Political Crossroads",
      ],
      guestRecomendation: ["David French"],
    },
    "Flash Boys": {
      author: "Michael Lewis",
      episodeTitle: ["A Radical Way of Thinking About Money"],
      guestRecomendation: ["Morgan Ricks"],
    },
    "The Idea Factory": {
      author: "Jon Gertner",
      episodeTitle: ["A Radical Way of Thinking About Money"],
      guestRecomendation: ["Morgan Ricks"],
    },
    "The Fed Unbound": {
      author: "Lev Menand",
      episodeTitle: ["A Radical Way of Thinking About Money"],
      guestRecomendation: ["Morgan Ricks"],
    },
    "The Making of the Atomic Bomb": {
      author: "Richard Rhodes",
      episodeTitle: [
        "A.I. Is About to Get Much Weirder. Here’s What to Watch For.",
      ],
      guestRecomendation: ["Kelsey Piper"],
    },
    "Asterisk Magazine": {
      author: "",
      episodeTitle: [
        "A.I. Is About to Get Much Weirder. Here’s What to Watch For.",
      ],
      guestRecomendation: ["Kelsey Piper"],
    },
    "The Silmarillion": {
      author: "J. R. R. Tolkien",
      episodeTitle: [
        "A.I. Is About to Get Much Weirder. Here’s What to Watch For.",
      ],
      guestRecomendation: ["Kelsey Piper"],
    },
    "Chip War": {
      author: "Chris Miller",
      episodeTitle: ["Why Silicon Valley Bank Collapsed — And What Comes Next"],
      guestRecomendation: ["Noah Smith"],
    },
    "How Asia Works": {
      author: "Joe Studwell",
      episodeTitle: ["Why Silicon Valley Bank Collapsed — And What Comes Next"],
      guestRecomendation: ["Noah Smith"],
    },
    "The Invisible Bridge": {
      author: "Rick Perlstein",
      episodeTitle: ["Why Silicon Valley Bank Collapsed — And What Comes Next"],
      guestRecomendation: ["Noah Smith"],
    },
    "The Jesuits": {
      author: "Markus Friedrich",
      episodeTitle: [
        "How China Went From Economic Superstar to Faltering Giant",
      ],
      guestRecomendation: ["Dan Wang"],
    },
    "Last and First Men": {
      author: "Olaf Stapledon",
      episodeTitle: [
        "How China Went From Economic Superstar to Faltering Giant",
      ],
      guestRecomendation: ["Dan Wang"],
    },
    "Disturbing the Universe": {
      author: "Freeman Dyson",
      episodeTitle: [
        "How China Went From Economic Superstar to Faltering Giant",
      ],
      guestRecomendation: ["Dan Wang"],
    },
    "The Tenuous Attachments of Working-Class Men": {
      author: "Kathryn Edin, Timothy Nelson, Andrew Cherlin and Robert Franci",
      episodeTitle: ["The Men — and Boys — Are Not Alright"],
      guestRecomendation: ["Richard Reeves"],
    },
    "Career and Family": {
      author: "Claudia Goldin",
      episodeTitle: ["The Men — and Boys — Are Not Alright"],
      guestRecomendation: ["Richard Reeves"],
    },
    "The Life of Dad": {
      author: "Anna Machin",
      episodeTitle: ["The Men — and Boys — Are Not Alright"],
      guestRecomendation: ["Richard Reeves"],
    },
    Homintern: {
      author: "Gregory Woods",
      episodeTitle: [
        "If You Read the G.O.P.’s Anti-Trans Policies, You’ll See What It Really Wants",
      ],
      guestRecomendation: ["Gillian Branstetter"],
    },
    "Caliban and the Witch": {
      author: "Silvia Federici",
      episodeTitle: [
        "If You Read the G.O.P.’s Anti-Trans Policies, You’ll See What It Really Wants",
      ],
      guestRecomendation: ["Gillian Branstetter"],
    },
    "Can the Monster Speak?": {
      author: "Paul B. Preciado",
      episodeTitle: [
        "If You Read the G.O.P.’s Anti-Trans Policies, You’ll See What It Really Wants",
      ],
      guestRecomendation: ["Gillian Branstetter"],
    },
    "Metaphors We Live By": {
      author: "George Lakoff and Mark Johnson",
      episodeTitle: ["What a Poetic Mind Can Teach Us About How to Live"],
      guestRecomendation: ["Jane Hirshfield"],
    },
    "Less Than One": {
      author: "Joseph Brodsky",
      episodeTitle: ["What a Poetic Mind Can Teach Us About How to Live"],
      guestRecomendation: ["Jane Hirshfield"],
    },
    "The Fire Next Time": {
      author: "James Baldwin",
      episodeTitle: ["What a Poetic Mind Can Teach Us About How to Live"],
      guestRecomendation: ["Jane Hirshfield"],
    },
    Burn: {
      author: "Herman Pontzer",
      episodeTitle: ["Our Brains Weren’t Designed for This Kind of Food"],
      guestRecomendation: ["Stephan Guyenet"],
    },
    "Salt Sugar Fat": {
      author: "Michael Moss",
      episodeTitle: ["Our Brains Weren’t Designed for This Kind of Food"],
      guestRecomendation: ["Stephan Guyenet"],
    },
    "The Secret of Our Success": {
      author: "Joseph Henrich",
      episodeTitle: ["Our Brains Weren’t Designed for This Kind of Food"],
      guestRecomendation: ["Stephan Guyenet"],
    },
    "Soldier of the Mist": {
      author: "Gene Wolfe",
      episodeTitle: ["Is A.I. Actually Creative? Are We?"],
      guestRecomendation: ["Adrian Tchaikovsky"],
    },
    "After Atlas": {
      author: "Emma Newman",
      episodeTitle: ["Is A.I. Actually Creative? Are We?"],
      guestRecomendation: ["Adrian Tchaikovsky"],
    },
    Babel: {
      author: "R. F. Kuang",
      episodeTitle: [
        "Is A.I. Actually Creative? Are We?",
        "How Liberals — Yes, Liberals — Are Hobbling Government",
      ],
      guestRecomendation: ["Adrian Tchaikovsky", "Nicholas Bagley"],
    },
    "Why Zebras Don’t Get Ulcers": {
      author: "Robert M. Sapolsky",
      episodeTitle: [
        "A Surprising Theory for Understanding — and Healing — Pain",
        "What Does Toxic Stress Do to Children?",
      ],
      guestRecomendation: ["Rachel Zoffness", "Nadine Burke Harris"],
    },
    "The Body Keeps the Score": {
      author: "Bessel van der Kolk",
      episodeTitle: [
        "A Surprising Theory for Understanding — and Healing — Pain",
      ],
      guestRecomendation: ["Rachel Zoffness"],
    },
    Pain: {
      author: "Patrick Wall",
      episodeTitle: [
        "A Surprising Theory for Understanding — and Healing — Pain",
      ],
      guestRecomendation: ["Rachel Zoffness"],
    },
    "Slouching Towards Utopia": {
      author: "J. Bradford DeLong",
      episodeTitle: [
        "The Inflation Story Has Changed Significantly. Paul Krugman Breaks It Down.",
        "There’s Been a ‘Regime Change’ in How Democrats Think About Elections",
        "How the Fed Is ‘Shaking the Entire System’",
        "I Keep Hoping Larry Summers Is Wrong. What if He’s Not?",
      ],
      guestRecomendation: [
        "Paul Krugman",
        "Matt Yglesias",
        "Adam Tooze",
        "Larry Summers",
      ],
    },
    "How the War Was Won": {
      author: "Phillips Payson O’Brien",
      episodeTitle: [
        "The Inflation Story Has Changed Significantly. Paul Krugman Breaks It Down.",
      ],
      guestRecomendation: ["Paul Krugman"],
    },
    "Ninth House": {
      author: "Leigh Bardugo",
      episodeTitle: [
        "The Inflation Story Has Changed Significantly. Paul Krugman Breaks It Down.",
      ],
      guestRecomendation: ["Paul Krugman"],
    },
    "Here Comes Everybody": {
      author: "Clay Shirky",
      episodeTitle: ["How the $500 Billion Attention Industry Really Works"],
      guestRecomendation: ["Tim Hwang"],
    },
    "The Profiteers": {
      author: "Sally Denton",
      episodeTitle: ["How the $500 Billion Attention Industry Really Works"],
      guestRecomendation: ["Tim Hwang"],
    },
    "Jim Ravel’s Theatrical Pickpocketing": {
      author: "Jim Ravel",
      episodeTitle: ["How the $500 Billion Attention Industry Really Works"],
      guestRecomendation: ["Tim Hwang"],
    },
    "Forever Changes": {
      author: "Love (album)",
      episodeTitle: ["The Tao of Rick Rubin"],
      guestRecomendation: ["Rick Rubin"],
    },
    "The Beatles": {
      author: "The Beatles (album)",
      episodeTitle: ["The Tao of Rick Rubin"],
      guestRecomendation: ["Rick Rubin"],
    },
    Ramones: {
      author: "Ramones (album)",
      episodeTitle: ["The Tao of Rick Rubin"],
      guestRecomendation: ["Rick Rubin"],
    },
    "Public Citizens": {
      author: "Paul Sabin",
      episodeTitle: ["How Liberals — Yes, Liberals — Are Hobbling Government"],
      guestRecomendation: ["Nicholas Bagley"],
    },
    "The Fifth Risk": {
      author: "Michael Lewis",
      episodeTitle: ["How Liberals — Yes, Liberals — Are Hobbling Government"],
      guestRecomendation: ["Nicholas Bagley"],
    },
    "Seeking Truth and Hiding Facts": {
      author: "Jeremy L. Wallace",
      episodeTitle: ["Is This How a Cold War With China Begins?"],
      guestRecomendation: ["Jessica Chen Weiss"],
    },
    "Our Missing Hearts": {
      author: "Celeste Ng",
      episodeTitle: ["Is This How a Cold War With China Begins?"],
      guestRecomendation: ["Jessica Chen Weiss"],
    },
    "See No Stranger": {
      author: "Valarie Kaur",
      episodeTitle: ["Is This How a Cold War With China Begins?"],
      guestRecomendation: ["Jessica Chen Weiss"],
    },
    "From The Soil": {
      author: "Xiaotong Fei",
      episodeTitle: ["There’s Been a Revolution in How China Is Governed"],
      guestRecomendation: ["Yuen Yuen Ang"],
    },
    "Fei Xiaotong and Sociology in Revolutionary China": {
      author: "R. David Arkush",
      episodeTitle: ["There’s Been a Revolution in How China Is Governed"],
      guestRecomendation: ["Yuen Yuen Ang"],
    },
    "The Fractalist": {
      author: "Benoit Mandelbrot",
      episodeTitle: ["There’s Been a Revolution in How China Is Governed"],
      guestRecomendation: ["Yuen Yuen Ang"],
    },
    "Fit Nation": {
      author: "Natalia Mehlman Petrzela",
      episodeTitle: ["How Right-Wing Media Ate the Republican Party"],
      guestRecomendation: ["Nicole Hemmer"],
    },
    Dreamland: {
      author: "Carly Goodman",
      episodeTitle: ["How Right-Wing Media Ate the Republican Party"],
      guestRecomendation: ["Nicole Hemmer"],
    },
    "Freedom’s Dominion": {
      author: "Jefferson Cowie",
      episodeTitle: ["How Right-Wing Media Ate the Republican Party"],
      guestRecomendation: ["Nicole Hemmer"],
    },
    "Where Do We Go From Here": {
      author: "Martin Luther King Jr.",
      episodeTitle: [
        "A Revelatory Tour of Martin Luther King Jr.’s Forgotten Teachings",
      ],
      guestRecomendation: ["Brandon Terry"],
    },
    "The Trumpet of Conscience": {
      author: "Martin Luther King Jr.",
      episodeTitle: [
        "A Revelatory Tour of Martin Luther King Jr.’s Forgotten Teachings",
      ],
      guestRecomendation: ["Brandon Terry"],
    },
    "The Sword and the Shield": {
      author: "Peniel E. Joseph",
      episodeTitle: [
        "A Revelatory Tour of Martin Luther King Jr.’s Forgotten Teachings",
      ],
      guestRecomendation: ["Brandon Terry"],
    },
    "A More Beautiful and Terrible History": {
      author: "Jeanne Theoharis",
      episodeTitle: [
        "A Revelatory Tour of Martin Luther King Jr.’s Forgotten Teachings",
      ],
      guestRecomendation: ["Brandon Terry"],
    },
    "Dark Ghettos": {
      author: "Tommie Shelby",
      episodeTitle: [
        "A Revelatory Tour of Martin Luther King Jr.’s Forgotten Teachings",
      ],
      guestRecomendation: ["Brandon Terry"],
    },
    "Capital in the Twenty-First Century": {
      author: "Thomas Piketty",
      episodeTitle: [
        "A Guide to the ‘Legal Fictions’ That Create Wealth, Inequality and Economic Crises",
      ],
      guestRecomendation: ["Katharina Pistor"],
    },
    Crashed: {
      author: "Adam Tooze",
      episodeTitle: [
        "A Guide to the ‘Legal Fictions’ That Create Wealth, Inequality and Economic Crises",
      ],
      guestRecomendation: ["Katharina Pistor"],
    },
    "Ages of American Capitalism": {
      author: "Jonathan Levy",
      episodeTitle: [
        "A Guide to the ‘Legal Fictions’ That Create Wealth, Inequality and Economic Crises",
      ],
      guestRecomendation: ["Katharina Pistor"],
    },
    "The Ethical Slut": {
      author: "Janet W. Hardy and Dossie Easton",
      episodeTitle: ["Dan Savage on Polyamory, Chosen Family and Better Sex"],
      guestRecomendation: ["Dan Savage"],
    },
    "Berlin Diary": {
      author: "William L. Shirer",
      episodeTitle: ["Dan Savage on Polyamory, Chosen Family and Better Sex"],
      guestRecomendation: ["Dan Savage"],
    },
    "A Royal Affair": {
      author: "Stella Tillyard",
      episodeTitle: ["Dan Savage on Polyamory, Chosen Family and Better Sex"],
      guestRecomendation: ["Dan Savage"],
    },
    "The Language Instinct": {
      author: "Steven Pinker",
      episodeTitle: ["A Skeptical Take on the A.I. Revolution"],
      guestRecomendation: ["Gary Marcus"],
    },
    "How the World Really Works": {
      author: "Vaclav Smil",
      episodeTitle: ["A Skeptical Take on the A.I. Revolution"],
      guestRecomendation: ["Gary Marcus"],
    },
    "The Martian": {
      author: "Andy Weir",
      episodeTitle: ["A Skeptical Take on the A.I. Revolution"],
      guestRecomendation: ["Gary Marcus"],
    },
    "Adam Bede": {
      author: "George Eliot",
      episodeTitle: ["Sabbath and the Art of Rest"],
      guestRecomendation: ["Judith Shulevitz"],
    },
    "The Seven Day Circle": {
      author: "Eviatar Zerubavel",
      episodeTitle: ["Sabbath and the Art of Rest"],
      guestRecomendation: ["Judith Shulevitz"],
    },
    "On the Clock": {
      author: "Emily Guendelsberger",
      episodeTitle: ["Sabbath and the Art of Rest"],
      guestRecomendation: ["Judith Shulevitz"],
    },
    "Happy Birthday to You!": {
      author: "Dr. Seuss",
      episodeTitle: [
        "What I’m Thinking About at the End of 2022",
        "My Reading Habits, Explained, and Other Questions You Asked",
      ],
      guestRecomendation: ["Ezra Klein", "Ezra Klein"],
    },
    "The Rabbit Listened": {
      author: "Cori Doerrfeld",
      episodeTitle: ["What I’m Thinking About at the End of 2022"],
      guestRecomendation: ["Ezra Klein"],
    },
    "Here We Are": {
      author: "Oliver Jeffers",
      episodeTitle: [
        "What I’m Thinking About at the End of 2022",
        "My Reading Habits, Explained, and Other Questions You Asked",
      ],
      guestRecomendation: ["Ezra Klein", "Ezra Klein"],
    },
    "The Pout-Pout Fish": {
      author: "Deborah Diesen",
      episodeTitle: ["What I’m Thinking About at the End of 2022"],
      guestRecomendation: ["Ezra Klein"],
    },
    Noise: {
      author: "Daniel Kahneman, Olivier Sibony and Cass R. Sunstein",
      episodeTitle: ["Time Is Way Weirder Than You Think"],
      guestRecomendation: ["Dean Buonomano"],
    },
    "When We Cease to Understand the World": {
      author: "Benjamin Labatut",
      episodeTitle: [
        "Time Is Way Weirder Than You Think",
        "Liberals Need a Clearer Vision of the Constitution. Here’s What It Could Look Like.",
      ],
      guestRecomendation: ["Dean Buonomano", "Larry Kramer"],
    },
    "The Age of A.I.": {
      author: "Henry A. Kissinger, Eric Schmidt and Daniel Huttenlocher",
      episodeTitle: ["Time Is Way Weirder Than You Think"],
      guestRecomendation: ["Dean Buonomano"],
    },
    "Invisible Women": {
      author: "Caroline Criado Perez",
      episodeTitle: ["Three Signals We’ve Entered a New Economic Era"],
      guestRecomendation: ["Mohamed El-Erian"],
    },
    "Bad Blood": {
      author: "John Carreyrou",
      episodeTitle: ["Three Signals We’ve Entered a New Economic Era"],
      guestRecomendation: ["Mohamed El-Erian"],
    },
    "The World For Sale": {
      author: "Javier Blas and Jack Farchy",
      episodeTitle: ["Three Signals We’ve Entered a New Economic Era"],
      guestRecomendation: ["Mohamed El-Erian"],
    },
    "Fragmented Democracy": {
      author: "Jamila Michener",
      episodeTitle: [
        "There’s Been a Massive Change in Where American Policy Gets Made",
      ],
      guestRecomendation: ["Jake Grumbach"],
    },
    "Private Government": {
      author: "Elizabeth Anderson",
      episodeTitle: [
        "There’s Been a Massive Change in Where American Policy Gets Made",
      ],
      guestRecomendation: ["Jake Grumbach"],
    },
    "Dilla Time": {
      author: "Dan Charnas",
      episodeTitle: [
        "There’s Been a Massive Change in Where American Policy Gets Made",
      ],
      guestRecomendation: ["Jake Grumbach"],
    },
    "The German War": {
      author: "Nicholas Stargardt",
      episodeTitle: [
        "A Conservative’s Take on the Chaotic State of the Republican Party",
      ],
      guestRecomendation: ["Michael Brendan Dougherty"],
    },
    "The Demon in Democracy": {
      author: "Ryszard Legutko",
      episodeTitle: [
        "A Conservative’s Take on the Chaotic State of the Republican Party",
      ],
      guestRecomendation: ["Michael Brendan Dougherty"],
    },
    "The Face of God": {
      author: "Roger Scruton",
      episodeTitle: [
        "A Conservative’s Take on the Chaotic State of the Republican Party",
      ],
      guestRecomendation: ["Michael Brendan Dougherty"],
    },
    Wastelands: {
      author: "Corban Addison",
      episodeTitle: ["The Hidden Costs of Cheap Meat"],
      guestRecomendation: ["Leah Garcés"],
    },
    Meatonomics: {
      author: "David Robinson Simon",
      episodeTitle: ["The Hidden Costs of Cheap Meat"],
      guestRecomendation: ["Leah Garcés"],
    },
    "Animal Machines": {
      author: "Ruth Harrison",
      episodeTitle: ["The Hidden Costs of Cheap Meat"],
      guestRecomendation: ["Leah Garcés"],
    },
    "The Gilead Novels": {
      author: "Marilynne Robinson",
      episodeTitle: [
        "This Is Your Brain on ‘Deep Reading.’ It’s Pretty Magnificent.",
        "Why the Evangelical Movement Is in ‘Disarray’ After Dobbs",
      ],
      guestRecomendation: ["Maryanne Wolf", "Russell Moore"],
    },
    "World and Town": {
      author: "Gish Jen",
      episodeTitle: [
        "This Is Your Brain on ‘Deep Reading.’ It’s Pretty Magnificent.",
      ],
      guestRecomendation: ["Maryanne Wolf"],
    },
    Standing: {
      author: "Words”",
      episodeTitle: [
        "This Is Your Brain on ‘Deep Reading.’ It’s Pretty Magnificent.",
      ],
      guestRecomendation: ["Maryanne Wolf"],
    },
    "Love’s Mind": {
      author: "John Dunne",
      episodeTitle: [
        "This Is Your Brain on ‘Deep Reading.’ It’s Pretty Magnificent.",
      ],
      guestRecomendation: ["Maryanne Wolf"],
    },
    Middlemarch: {
      author: "George Eliot",
      episodeTitle: [
        "This Is Your Brain on ‘Deep Reading.’ It’s Pretty Magnificent.",
      ],
      guestRecomendation: ["Maryanne Wolf"],
    },
    "New York 2140": {
      author: "Kim Stanley Robinson",
      episodeTitle: ["Bill McKibben on the Power That Could Save the Planet"],
      guestRecomendation: ["Bill McKibben"],
    },
    "Orwell’s Roses": {
      author: "Rebecca Solnit",
      episodeTitle: ["Bill McKibben on the Power That Could Save the Planet"],
      guestRecomendation: ["Bill McKibben"],
    },
    "How It Went": {
      author: "Wendell Berry",
      episodeTitle: ["Bill McKibben on the Power That Could Save the Planet"],
      guestRecomendation: ["Bill McKibben"],
    },
    "The Storm Is Here": {
      author: "Luke Mogelson",
      episodeTitle: [
        "George Saunders on the ‘Braindead Megaphone’ That Makes Our Politics So Awful",
      ],
      guestRecomendation: ["George Saunders"],
    },
    "Sugar Street": {
      author: "Jonathan Dee",
      episodeTitle: [
        "George Saunders on the ‘Braindead Megaphone’ That Makes Our Politics So Awful",
      ],
      guestRecomendation: ["George Saunders"],
    },
    Marlena: {
      author: "Julie Buntin",
      episodeTitle: [
        "George Saunders on the ‘Braindead Megaphone’ That Makes Our Politics So Awful",
      ],
      guestRecomendation: ["George Saunders"],
    },
    "The Rise and Fall of the Neoliberal Order": {
      author: "Gary Gestle",
      episodeTitle: [
        "Inflation Does More Than Raise Prices. It Destroys Governments.",
        "The Stock Market Is Plummeting. Welcome to the End of the ‘Everything Bubble.’",
      ],
      guestRecomendation: ["J. Bradford DeLong", "Rana Foroohar"],
    },
    "Free Market": {
      author: "Jacob Soll",
      episodeTitle: [
        "Inflation Does More Than Raise Prices. It Destroys Governments.",
      ],
      guestRecomendation: ["J. Bradford DeLong"],
    },
    "Adam Smith’s America": {
      author: "Glory M. Liu",
      episodeTitle: [
        "Inflation Does More Than Raise Prices. It Destroys Governments.",
      ],
      guestRecomendation: ["J. Bradford DeLong"],
    },
    "Popular Dictatorships": {
      author: "Aleksandar Matovski",
      episodeTitle: [
        "A Powerful Theory of Why the Far Right Is Thriving Across the Globe",
      ],
      guestRecomendation: ["Pippa Norris"],
    },
    "Spin Dictators": {
      author: "Sergei Guriev and Daniel Treisman",
      episodeTitle: [
        "A Powerful Theory of Why the Far Right Is Thriving Across the Globe",
      ],
      guestRecomendation: ["Pippa Norris"],
    },
    "The Origins of Totalitarianism": {
      author: "Hannah Arendt",
      episodeTitle: [
        "A Powerful Theory of Why the Far Right Is Thriving Across the Globe",
        "Thomas Piketty’s Case for ‘Participatory Socialism’",
        "Anne Applebaum on What Liberals Misunderstand About Authoritarianism",
        "Timothy Snyder on the Myths That Blinded the West to Putin’s Plans",
      ],
      guestRecomendation: [
        "Pippa Norris",
        "Thomas Piketty",
        "Anne Applebaum",
        "Timothy Snyder",
      ],
    },
    "The Increasingly United States": {
      author: "Daniel J. Hopkins",
      episodeTitle: [
        "These Political Scientists Surveyed 500,000 Voters. Here Are Their Unnerving Conclusions.",
      ],
      guestRecomendation: ["Lynn Vavreck and John Sides"],
    },
    Groundbreakers: {
      author: "Elizabeth McKenna and Hahrie Han",
      episodeTitle: [
        "These Political Scientists Surveyed 500,000 Voters. Here Are Their Unnerving Conclusions.",
      ],
      guestRecomendation: ["Lynn Vavreck and John Sides"],
    },
    "The Loud Minority": {
      author: "Daniel Q. Gillion",
      episodeTitle: [
        "These Political Scientists Surveyed 500,000 Voters. Here Are Their Unnerving Conclusions.",
      ],
      guestRecomendation: ["Lynn Vavreck and John Sides"],
    },
    "Rock Me on the Water": {
      author: "Ronald Brownstein",
      episodeTitle: [
        "These Political Scientists Surveyed 500,000 Voters. Here Are Their Unnerving Conclusions.",
      ],
      guestRecomendation: ["Lynn Vavreck and John Sides"],
    },
    "State of Terror": {
      author: "Hillary Rodham Clinton and Louise Penny",
      episodeTitle: [
        "These Political Scientists Surveyed 500,000 Voters. Here Are Their Unnerving Conclusions.",
      ],
      guestRecomendation: ["Lynn Vavreck and John Sides"],
    },
    "Why We Did It": {
      author: "Tim Miller",
      episodeTitle: ["A Step-by-Step Guide to Becoming a Trump Enabler"],
      guestRecomendation: ["Mark Leibovich"],
    },
    "Confidence Man": {
      author: "Maggie Haberman",
      episodeTitle: ["A Step-by-Step Guide to Becoming a Trump Enabler"],
      guestRecomendation: ["Mark Leibovich"],
    },
    NSFW: {
      author: "Isabel Kaplan",
      episodeTitle: ["A Step-by-Step Guide to Becoming a Trump Enabler"],
      guestRecomendation: ["Mark Leibovich"],
    },
    "Famine: A Short History": {
      author: "Cormac Ó Gráda",
      episodeTitle: [
        "There’s Been a ‘Regime Change’ in How Democrats Think About Elections",
      ],
      guestRecomendation: ["Matt Yglesias"],
    },
    "Strangers to Ourselves": {
      author: "Rachel Aviv",
      episodeTitle: [
        "There’s Been a ‘Regime Change’ in How Democrats Think About Elections",
      ],
      guestRecomendation: ["Matt Yglesias"],
    },
    "Fullmetal Alchemist": {
      author: "Hiromu Arakawa",
      episodeTitle: [
        "A Legendary World-Builder on Multiverses, Revolution and the ‘Souls’ of Cities",
      ],
      guestRecomendation: ["N.K. Jemisin"],
    },
    Mechanique: {
      author: "Genevieve Valentine",
      episodeTitle: [
        "A Legendary World-Builder on Multiverses, Revolution and the ‘Souls’ of Cities",
      ],
      guestRecomendation: ["N.K. Jemisin"],
    },
    "Witch King": {
      author: "Martha Wells",
      episodeTitle: [
        "A Legendary World-Builder on Multiverses, Revolution and the ‘Souls’ of Cities",
      ],
      guestRecomendation: ["N.K. Jemisin"],
    },
    "The Death and Life of Great American Cities": {
      author: "Jane Jacobs",
      episodeTitle: [
        "A Legendary World-Builder on Multiverses, Revolution and the ‘Souls’ of Cities",
      ],
      guestRecomendation: ["N.K. Jemisin"],
    },
    "Hitler in Los Angeles": {
      author: "Steven J. Ross",
      episodeTitle: ["Rachel Maddow Looks Back on a Wild 14 Years"],
      guestRecomendation: ["Rachel Maddow"],
    },
    "Nazis of Copley Square": {
      author: "Charles R. Gallagher",
      episodeTitle: ["Rachel Maddow Looks Back on a Wild 14 Years"],
      guestRecomendation: ["Rachel Maddow"],
    },
    "Hitler’s American Friends": {
      author: "Bradley W. Hart",
      episodeTitle: ["Rachel Maddow Looks Back on a Wild 14 Years"],
      guestRecomendation: ["Rachel Maddow"],
    },
    "The Oppermanns": {
      author: "Lion Feuchtwanger",
      episodeTitle: ["Rachel Maddow Looks Back on a Wild 14 Years"],
      guestRecomendation: ["Rachel Maddow"],
    },
    "Down in New Orleans Billy Sothern": {
      author: "Billy Sothern",
      episodeTitle: ["Rachel Maddow Looks Back on a Wild 14 Years"],
      guestRecomendation: ["Rachel Maddow"],
    },
    "The Neapolitan Novels": {
      author: "Elena Ferrante",
      episodeTitle: ["How the Fed Is ‘Shaking the Entire System’"],
      guestRecomendation: ["Adam Tooze"],
    },
    Youthquake: {
      author: "Edward Paice",
      episodeTitle: ["How the Fed Is ‘Shaking the Entire System’"],
      guestRecomendation: ["Adam Tooze"],
    },
    "Madness and Modernism": {
      author: "Louis Sass",
      episodeTitle: ["Interrogating the Stories We Tell About Our Minds"],
      guestRecomendation: ["Rachel Aviv"],
    },
    "Of Two Minds": {
      author: "T.M. Luhrmann",
      episodeTitle: ["Interrogating the Stories We Tell About Our Minds"],
      guestRecomendation: ["Rachel Aviv"],
    },
    "The Rise and Fall of the Third Reich": {
      author: "William L. Shirer",
      episodeTitle: ["Ethereum’s Founder on What Crypto Can — and Can’t — Do"],
      guestRecomendation: ["Vitalik Buterin"],
    },
    "Harry Potter and The Methods of Rationality": {
      author: "Eliezer Yudkowsky",
      episodeTitle: ["Ethereum’s Founder on What Crypto Can — and Can’t — Do"],
      guestRecomendation: ["Vitalik Buterin"],
    },
    "Algorithmic Game Theory": {
      author: "Noam Nisan, Tim Roughgarden, Eva Tardos and Vijay V. Vazirani",
      episodeTitle: ["Ethereum’s Founder on What Crypto Can — and Can’t — Do"],
      guestRecomendation: ["Vitalik Buterin"],
    },
    "Empire and Revolution": {
      author: "Richard Bourke",
      episodeTitle: [
        "We Know Shockingly Little About What Makes Humanity Prosper",
      ],
      guestRecomendation: ["Patrick Collison"],
    },
    "Scene of Change": {
      author: "Warren Weaver",
      episodeTitle: [
        "We Know Shockingly Little About What Makes Humanity Prosper",
      ],
      guestRecomendation: ["Patrick Collison"],
    },
    "A Widening Sphere": {
      author: "Philip N. Alexander",
      episodeTitle: [
        "We Know Shockingly Little About What Makes Humanity Prosper",
      ],
      guestRecomendation: ["Patrick Collison"],
    },
    "Stalin: Paradoxes of Power, 1878-1928": {
      author: "Stephen Kotkin",
      episodeTitle: ["Why Russia Is Losing the War in Ukraine"],
      guestRecomendation: ["Andrea Kendall-Taylor"],
    },
    "Making Climate Policy Work": {
      author: "Danny Cullenward and David G. Victor",
      episodeTitle: ["The Single Best Guide to Decarbonization I’ve Heard"],
      guestRecomendation: ["Jesse Jenkins"],
    },
    "How Solar Energy Became Cheap": {
      author: "Gregory F. Nemet",
      episodeTitle: ["The Single Best Guide to Decarbonization I’ve Heard"],
      guestRecomendation: ["Jesse Jenkins"],
    },
    "The Middle Out": {
      author: "Michael Tomasky",
      episodeTitle: ["Now All Biden Has to Do Is Build It"],
      guestRecomendation: ["Felicia Wong"],
    },
    "Elite Capture": {
      author: "Olúfẹ́mi O. Táíwò",
      episodeTitle: ["Now All Biden Has to Do Is Build It"],
      guestRecomendation: ["Felicia Wong"],
    },
    "Chords of Change (forthcoming 2023)": {
      author: "Deepak Bhargava and Stephanie Luce",
      episodeTitle: ["Now All Biden Has to Do Is Build It"],
      guestRecomendation: ["Felicia Wong"],
    },
    "Envy Up, Scorn Down": {
      author: "Susan T. Fiske",
      episodeTitle: [
        "We Build Civilizations on Status. But We Barely Understand It.",
      ],
      guestRecomendation: ["Cecilia Ridgeway"],
    },
    "The Psychology of Social Status": {
      author: "Joey T. Cheng, Jessica L. Tracy, Cameron Anderson",
      episodeTitle: [
        "We Build Civilizations on Status. But We Barely Understand It.",
      ],
      guestRecomendation: ["Cecilia Ridgeway"],
    },
    'The Theory of the Leisure Class"': {
      author: "Thorstein Veblen",
      episodeTitle: [
        "We Build Civilizations on Status. But We Barely Understand It.",
      ],
      guestRecomendation: ["Cecilia Ridgeway"],
    },
    Staring: {
      author: "Rosemarie Garland-Thomson",
      episodeTitle: ["The Subtle Art of Appreciating ‘Difficult Beauty’"],
      guestRecomendation: ["Chloé Cooper Jone"],
    },
    "H is for Hawk": {
      author: "Helen Macdonald",
      episodeTitle: ["The Subtle Art of Appreciating ‘Difficult Beauty’"],
      guestRecomendation: ["Chloé Cooper Jone"],
    },
    "Romance in Marseille": {
      author: "Claude McKay",
      episodeTitle: ["The Subtle Art of Appreciating ‘Difficult Beauty’"],
      guestRecomendation: ["Chloé Cooper Jone"],
    },
    "The Bone People": {
      author: "Keri Hulme",
      episodeTitle: [
        "A Grammy-Nominated Singer Performs and Explores Music’s Deep Power Over Us",
      ],
      guestRecomendation: ["Allison Russell"],
    },
    "A Fortune for Your Disaster": {
      author: "Hanif Abdurraqib",
      episodeTitle: [
        "A Grammy-Nominated Singer Performs and Explores Music’s Deep Power Over Us",
      ],
      guestRecomendation: ["Allison Russell"],
    },
    "The Weight of Glory": {
      author: "C.S. Lewis",
      episodeTitle: [
        "Why the Evangelical Movement Is in ‘Disarray’ After Dobbs",
      ],
      guestRecomendation: ["Russell Moore"],
    },
    "Mere Christianity": {
      author: "C.S. Lewis",
      episodeTitle: [
        "Why the Evangelical Movement Is in ‘Disarray’ After Dobbs",
      ],
      guestRecomendation: ["Russell Moore"],
    },
    "The Lion, the Witch and the Wardrobe": {
      author: "C.S. Lewis",
      episodeTitle: [
        "Why the Evangelical Movement Is in ‘Disarray’ After Dobbs",
      ],
      guestRecomendation: ["Russell Moore"],
    },
    "The Resurrection of the Son of God": {
      author: "N.T. Wright",
      episodeTitle: [
        "Why the Evangelical Movement Is in ‘Disarray’ After Dobbs",
      ],
      guestRecomendation: ["Russell Moore"],
    },
    "In the Age of the Smart Machine": {
      author: "Shoshana Zuboff",
      episodeTitle: [
        "Is the Remote Work Revolution Flopping, Succeeding or Both?",
      ],
      guestRecomendation: ["Anne Helen Petersen and Charlie Warzel"],
    },
    "The Myth of the Paperless Office": {
      author: "Abigail J. Sellen and Richard H. R. Harper",
      episodeTitle: [
        "Is the Remote Work Revolution Flopping, Succeeding or Both?",
      ],
      guestRecomendation: ["Anne Helen Petersen and Charlie Warzel"],
    },
    Liquidated: {
      author: "Karen Ho",
      episodeTitle: [
        "Is the Remote Work Revolution Flopping, Succeeding or Both?",
      ],
      guestRecomendation: ["Anne Helen Petersen and Charlie Warzel"],
    },
    "Essential Labor": {
      author: "Angela Garbes",
      episodeTitle: [
        "Is the Remote Work Revolution Flopping, Succeeding or Both?",
      ],
      guestRecomendation: ["Anne Helen Petersen and Charlie Warzel"],
    },
    Beloved: {
      author: "Toni Morrison",
      episodeTitle: ["How Do We Face Loss With Empathy?"],
      guestRecomendation: ["Mohsin Hamid"],
    },
    Ficciones: {
      author: "Jorge Luis Borges",
      episodeTitle: ["How Do We Face Loss With Empathy?"],
      guestRecomendation: ["Mohsin Hamid"],
    },
    "The Epic of Gilgamesh translated": {
      author: "Andrew George",
      episodeTitle: ["How Do We Face Loss With Empathy?"],
      guestRecomendation: ["Mohsin Hamid"],
    },
    "Moral Capital": {
      author: "Christopher Leslie Brown",
      episodeTitle: [
        "Three Sentences That Could Change the World — and Your Life",
      ],
      guestRecomendation: ["William MacAskill"],
    },
    "The Precipice": {
      author: "Toby Ord",
      episodeTitle: [
        "Three Sentences That Could Change the World — and Your Life",
        "Can Democrats Turn Their 2022 Around?",
        "Warning: This Episode Gets Really Weird About How Much Good You Can Do",
      ],
      guestRecomendation: [
        "William MacAskill",
        "Sean McElwee and Anat Shenker-Osorio",
        "Holden Karnofsky",
      ],
    },
    "The Scout Mindset": {
      author: "Julia Galef",
      episodeTitle: [
        "Three Sentences That Could Change the World — and Your Life",
      ],
      guestRecomendation: ["William MacAskill"],
    },
    "Histories of the Transgender Child": {
      author: "Jules Gill-Peterson",
      episodeTitle: [
        "Gender Is Complicated for All of Us. Let’s Talk About It.",
      ],
      guestRecomendation: ["Kathryn Bond Stockton"],
    },
    "Brilliant Imperfection": {
      author: "Eli Clare",
      episodeTitle: [
        "Gender Is Complicated for All of Us. Let’s Talk About It.",
      ],
      guestRecomendation: ["Kathryn Bond Stockton"],
    },
    "Asegi Stories": {
      author: "Qwo-Li Driskill",
      episodeTitle: [
        "Gender Is Complicated for All of Us. Let’s Talk About It.",
      ],
      guestRecomendation: ["Kathryn Bond Stockton"],
    },
    "Amusing Ourselves to Death": {
      author: "Neil Postman",
      episodeTitle: [
        "How We Communicate Will Decide Whether Democracy Lives or Dies",
        "Is Climate Change a Reason to Avoid Having Children? and Other Listener Questions Answered",
      ],
      guestRecomendation: ["Sean Illing", "Ezra Klein"],
    },
    "Public Opinion": {
      author: "Walter Lippmann",
      episodeTitle: [
        "How We Communicate Will Decide Whether Democracy Lives or Dies",
      ],
      guestRecomendation: ["Sean Illing"],
    },
    Mediated: {
      author: "Thomas de Zengotita",
      episodeTitle: [
        "How We Communicate Will Decide Whether Democracy Lives or Dies",
      ],
      guestRecomendation: ["Sean Illing"],
    },
    "Nobody’s Normal": {
      author: "Roy Richard Grinker",
      episodeTitle: ["A Top Mental Health Expert on Where America Went Wrong"],
      guestRecomendation: ["Thomas Insel"],
    },
    "American Psychosis": {
      author: "E. Fuller Torrey",
      episodeTitle: ["A Top Mental Health Expert on Where America Went Wrong"],
      guestRecomendation: ["Thomas Insel"],
    },
    Crazy: {
      author: "Pete Earley",
      episodeTitle: ["A Top Mental Health Expert on Where America Went Wrong"],
      guestRecomendation: ["Thomas Insel"],
    },
    "Crabgrass Frontier": {
      author: "Kenneth T. Jackson",
      episodeTitle: [
        "Why Housing Is So Expensive — Particularly in Blue States",
      ],
      guestRecomendation: ["Jenny Schuetz"],
    },
    "Neighborhood Defenders": {
      author: "Katherine Levine Einstein, David M. Glick and Maxwell Palmer",
      episodeTitle: [
        "Why Housing Is So Expensive — Particularly in Blue States",
      ],
      guestRecomendation: ["Jenny Schuetz"],
    },
    "A Brief History of Equality": {
      author: "Thomas Piketty",
      episodeTitle: [
        "A Weird, Wonderful Conversation With Kim Stanley Robinson",
      ],
      guestRecomendation: ["Kim Stanley Robinson"],
    },
    "The Dawn of Everything": {
      author: "David Graeber and David Wengrow",
      episodeTitle: [
        "A Weird, Wonderful Conversation With Kim Stanley Robinson",
      ],
      guestRecomendation: ["Kim Stanley Robinson"],
    },
    "The Echo Maker": {
      author: "Richard Powers",
      episodeTitle: [
        "A Weird, Wonderful Conversation With Kim Stanley Robinson",
      ],
      guestRecomendation: ["Kim Stanley Robinson"],
    },
    Backlash: {
      author: "Susan Faludi",
      episodeTitle: ["Michelle Goldberg Grapples With Feminism After Roe"],
      guestRecomendation: ["Michelle Goldberg"],
    },
    "No More Nice Girls": {
      author: "Ellen Willis",
      episodeTitle: ["Michelle Goldberg Grapples With Feminism After Roe"],
      guestRecomendation: ["Michelle Goldberg"],
    },
    "Status and Culture": {
      author: "W. David Marx",
      episodeTitle: ["Michelle Goldberg Grapples With Feminism After Roe"],
      guestRecomendation: ["Michelle Goldberg"],
    },
    "The Anti-Oligarchy Constitution": {
      author: "Joseph Fishkin and William E. Forbath",
      episodeTitle: [
        "Liberals Need a Clearer Vision of the Constitution. Here’s What It Could Look Like.",
      ],
      guestRecomendation: ["Larry Kramer"],
    },
    "The Second Creation": {
      author: "Jonathan Gienapp",
      episodeTitle: [
        "Liberals Need a Clearer Vision of the Constitution. Here’s What It Could Look Like.",
      ],
      guestRecomendation: ["Larry Kramer"],
    },
    "The Turnaway Study": {
      author: "Diana Greene Foster",
      episodeTitle: [
        "The Single Best Guide I’ve Heard to the Supreme Court’s Rightward Shift",
      ],
      guestRecomendation: ["Kate Shaw"],
    },
    "Torn Apart": {
      author: "Dorothy Roberts",
      episodeTitle: [
        "The Single Best Guide I’ve Heard to the Supreme Court’s Rightward Shift",
      ],
      guestRecomendation: ["Kate Shaw"],
    },
    "Who Decides?": {
      author: "Jeffrey S. Sutton",
      episodeTitle: [
        "The Single Best Guide I’ve Heard to the Supreme Court’s Rightward Shift",
      ],
      guestRecomendation: ["Kate Shaw"],
    },
    "51 Imperfect Solutions": {
      author: "Jeffrey S. Sutton",
      episodeTitle: [
        "The Single Best Guide I’ve Heard to the Supreme Court’s Rightward Shift",
      ],
      guestRecomendation: ["Kate Shaw"],
    },
    "Hope in the Dark": {
      author: "Rebecca Solnit",
      episodeTitle: [
        "The Dobbs Decision Isn’t Just About Abortion. It’s About Power.",
      ],
      guestRecomendation: ["Dahlia Lithwick"],
    },
    "Man’s Search for Meaning": {
      author: "Viktor E. Frankl",
      episodeTitle: [
        "The Dobbs Decision Isn’t Just About Abortion. It’s About Power.",
      ],
      guestRecomendation: ["Dahlia Lithwick"],
    },
    "You Can’t Be Neutral on a Moving Train": {
      author: "Howard Zinn",
      episodeTitle: [
        "The Dobbs Decision Isn’t Just About Abortion. It’s About Power.",
      ],
      guestRecomendation: ["Dahlia Lithwick"],
    },
    "Free Soil, Free Labor, Free Men": {
      author: "Eric Foner",
      episodeTitle: ["Jan. 6 Has Surfaced America’s Disdain for Democracy"],
      guestRecomendation: ["Jamelle Bouie"],
    },
    "Salmon P. Chase": {
      author: "Walter Stahr",
      episodeTitle: ["Jan. 6 Has Surfaced America’s Disdain for Democracy"],
      guestRecomendation: ["Jamelle Bouie"],
    },
    "What It Took to Win": {
      author: "Michael Kazin",
      episodeTitle: ["Jan. 6 Has Surfaced America’s Disdain for Democracy"],
      guestRecomendation: ["Jamelle Bouie"],
    },
    "In Shock": {
      author: "Dr. Rana Awdish",
      episodeTitle: [
        "Two Years Later, We Still Don’t Understand Long Covid. Why?",
      ],
      guestRecomendation: ["Lekshmi Santhosh"],
    },
    "Every Deep-Drawn Breath": {
      author: "Wes Ely",
      episodeTitle: [
        "Two Years Later, We Still Don’t Understand Long Covid. Why?",
      ],
      guestRecomendation: ["Lekshmi Santhosh"],
    },
    "Mountains Beyond Mountains": {
      author: "Tracy Kidder",
      episodeTitle: [
        "Two Years Later, We Still Don’t Understand Long Covid. Why?",
      ],
      guestRecomendation: ["Lekshmi Santhosh"],
    },
    "All That She Carried": {
      author: "Tiya Miles",
      episodeTitle: [
        "The Stock Market Is Plummeting. Welcome to the End of the ‘Everything Bubble.’",
        "What Keeping American Democracy Alive Looks Like",
      ],
      guestRecomendation: ["Rana Foroohar", "Martha S. Jones"],
    },
    "Beautiful Country": {
      author: "Qian Julie Wang",
      episodeTitle: [
        "The Stock Market Is Plummeting. Welcome to the End of the ‘Everything Bubble.’",
      ],
      guestRecomendation: ["Rana Foroohar"],
    },
    "The Invention of Nature": {
      author: "Andrea Wulf",
      episodeTitle: [
        "Is Climate Change a Reason to Avoid Having Children? and Other Listener Questions Answered",
      ],
      guestRecomendation: ["Ezra Klein"],
    },
    "Beautiful World, Where Are You": {
      author: "Sally Rooney",
      episodeTitle: [
        "Is Climate Change a Reason to Avoid Having Children? and Other Listener Questions Answered",
      ],
      guestRecomendation: ["Ezra Klein"],
    },
    "Socialism: Past and Future": {
      author: "Michael Harrington",
      episodeTitle: [
        "Why One of America’s Leading Socialists Is Worried About His Movement",
      ],
      guestRecomendation: ["Bhaskar Sunkara"],
    },
    "The Age of Extremes": {
      author: "Eric Hobsbawm",
      episodeTitle: [
        "Why One of America’s Leading Socialists Is Worried About His Movement",
      ],
      guestRecomendation: ["Bhaskar Sunkara"],
    },
    "The South": {
      author: "Adolph L. Reed, Jr.",
      episodeTitle: [
        "Why One of America’s Leading Socialists Is Worried About His Movement",
      ],
      guestRecomendation: ["Bhaskar Sunkara"],
    },
    "The Great Demarcation": {
      author: "Rafe Blaufarb",
      episodeTitle: ["Thomas Piketty’s Case for ‘Participatory Socialism’"],
      guestRecomendation: ["Thomas Piketty"],
    },
    "The Emergence of Globalism": {
      author: "Or Rosenboim",
      episodeTitle: ["Thomas Piketty’s Case for ‘Participatory Socialism’"],
      guestRecomendation: ["Thomas Piketty"],
    },
    Classified: {
      author: "David E. Bernstein",
      episodeTitle: [
        "Why Reihan Salam Thinks ‘Antiracialism’ Could Break the Democrats",
      ],
      guestRecomendation: ["Reihan Salam"],
    },
    "Criminal (In)Justice": {
      author: "Rafael A. Mangual",
      episodeTitle: [
        "Why Reihan Salam Thinks ‘Antiracialism’ Could Break the Democrats",
      ],
      guestRecomendation: ["Reihan Salam"],
    },
    "Sir Vidia’s Shadow": {
      author: "Paul Theroux",
      episodeTitle: [
        "Why Reihan Salam Thinks ‘Antiracialism’ Could Break the Democrats",
      ],
      guestRecomendation: ["Reihan Salam"],
    },
    "The Strategy of Denial": {
      author: "Elbridge A. Colby",
      episodeTitle: [
        "Why Reihan Salam Thinks ‘Antiracialism’ Could Break the Democrats",
      ],
      guestRecomendation: ["Reihan Salam"],
    },
    "Rights Talk": {
      author: "Mary Ann Glendon",
      episodeTitle: [
        "A Debate Over What Roe Did — and What Losing It Would Mean",
        "Let’s Talk About How Truly Bizarre Our Supreme Court Is",
      ],
      guestRecomendation: ["Erika Bachiochi", "Jamal Greene"],
    },
    "Feminism Without Illusions": {
      author: "Elizabeth Fox-Genovese",
      episodeTitle: [
        "A Debate Over What Roe Did — and What Losing It Would Mean",
      ],
      guestRecomendation: ["Erika Bachiochi"],
    },
    "Public Man, Private Woman": {
      author: "Jean Bethke Elshtain",
      episodeTitle: [
        "A Debate Over What Roe Did — and What Losing It Would Mean",
      ],
      guestRecomendation: ["Erika Bachiochi"],
    },
    Stones: {
      author: "Kevin Young",
      episodeTitle: ["A Conversation With Ada Limón, in Six Poems"],
      guestRecomendation: ["Ada Limón"],
    },
    "Frank: Sonnets": {
      author: "Diane Seuss",
      episodeTitle: ["A Conversation With Ada Limón, in Six Poems"],
      guestRecomendation: ["Ada Limón"],
    },
    "Postcolonial Love Poem": {
      author: "Natalie Diaz",
      episodeTitle: ["A Conversation With Ada Limón, in Six Poems"],
      guestRecomendation: ["Ada Limón"],
    },
    "Beyond Roe": {
      author: "David Boonin",
      episodeTitle: ["The Ethics of Abortion"],
      guestRecomendation: ["Kate Greasley"],
    },
    "Abortion: Three Perspectives": {
      author:
        "Michael Tooley, Celia Wolf-Devine, Philip E. Devine and Alison M. Jaggar",
      episodeTitle: ["The Ethics of Abortion"],
      guestRecomendation: ["Kate Greasley"],
    },
    "About Abortion": {
      author: "Carol Sanger",
      episodeTitle: ["The Ethics of Abortion"],
      guestRecomendation: ["Kate Greasley"],
    },
    Cuba: {
      author: "Ada Ferrer",
      episodeTitle: [
        "Anne Applebaum on What Liberals Misunderstand About Authoritarianism",
      ],
      guestRecomendation: ["Anne Applebaum"],
    },
    "The Lincoln Highway": {
      author: "Amor Towles",
      episodeTitle: [
        "Anne Applebaum on What Liberals Misunderstand About Authoritarianism",
      ],
      guestRecomendation: ["Anne Applebaum"],
    },
    "The New Class War": {
      author: "Michael Lind",
      episodeTitle: ["What Does the ‘Post-Liberal Right’ Actually Want?"],
      guestRecomendation: ["Patrick Deneen"],
    },
    Dominion: {
      author: "Tom Holland",
      episodeTitle: ["What Does the ‘Post-Liberal Right’ Actually Want?"],
      guestRecomendation: ["Patrick Deneen"],
    },
    "The Art of Loading Brush": {
      author: "Wendell Berry",
      episodeTitle: ["What Does the ‘Post-Liberal Right’ Actually Want?"],
      guestRecomendation: ["Patrick Deneen"],
    },
    "Let Us Talk of Many Things": {
      author: "William F. Buckley Jr.",
      episodeTitle: ["Donald Trump Didn’t Hijack the G.O.P. He Understood It."],
      guestRecomendation: ["Matthew Continetti"],
    },
    "Making It": {
      author: "Norman Podhoretz",
      episodeTitle: ["Donald Trump Didn’t Hijack the G.O.P. He Understood It."],
      guestRecomendation: ["Matthew Continetti"],
    },
    "The Prince of Darkness": {
      author: "Robert D. Novak",
      episodeTitle: ["Donald Trump Didn’t Hijack the G.O.P. He Understood It."],
      guestRecomendation: ["Matthew Continetti"],
    },
    "The Bond King": {
      author: "Mary Childs",
      episodeTitle: [
        "Elon Musk Might Break Twitter. Maybe That’s a Good Thing",
      ],
      guestRecomendation: ["Felix Salmon"],
    },
    "Typeset in the Future": {
      author: "Dave Addey",
      episodeTitle: [
        "Elon Musk Might Break Twitter. Maybe That’s a Good Thing",
      ],
      guestRecomendation: ["Felix Salmon"],
    },
    "The Surprise of Cremona": {
      author: "Edith Templeton",
      episodeTitle: [
        "Elon Musk Might Break Twitter. Maybe That’s a Good Thing",
      ],
      guestRecomendation: ["Felix Salmon"],
    },
    Free: {
      author: "Lea Ypi",
      episodeTitle: ["Putin May Not Like How He’s Changed Europe"],
      guestRecomendation: ["Ivan Krastev"],
    },
    "The Age of Unpeace": {
      author: "Mark Leonard",
      episodeTitle: ["Putin May Not Like How He’s Changed Europe"],
      guestRecomendation: ["Ivan Krastev"],
    },
    "Time Shelter": {
      author: "Georgi Gospodinov",
      episodeTitle: ["Putin May Not Like How He’s Changed Europe"],
      guestRecomendation: ["Ivan Krastev"],
    },
    "Scary Monsters": {
      author: "Michelle de Kretser",
      episodeTitle: [
        "Emily St. John Mandel on Time Travel, Parenting and the Apocalypse",
      ],
      guestRecomendation: ["Emily St. John Mandel"],
    },
    "Ill Will": {
      author: "Dan Chaon",
      episodeTitle: [
        "Emily St. John Mandel on Time Travel, Parenting and the Apocalypse",
      ],
      guestRecomendation: ["Emily St. John Mandel"],
    },
    "Suite Française": {
      author: "Irène Némirovsky",
      episodeTitle: [
        "Emily St. John Mandel on Time Travel, Parenting and the Apocalypse",
      ],
      guestRecomendation: ["Emily St. John Mandel"],
    },
    "The Course": {
      author: "Ed Miller",
      episodeTitle: ["Can Democrats Turn Their 2022 Around?"],
      guestRecomendation: ["Sean McElwee and Anat Shenker-Osorio"],
    },
    "The Climate War": {
      author: "Eric Pooley",
      episodeTitle: ["Can Democrats Turn Their 2022 Around?"],
      guestRecomendation: ["Sean McElwee and Anat Shenker-Osorio"],
    },
    "A Theory of System Justification": {
      author: "John T. Jost",
      episodeTitle: ["Can Democrats Turn Their 2022 Around?"],
      guestRecomendation: ["Sean McElwee and Anat Shenker-Osorio"],
    },
    Memorial: {
      author: "Bryan Washington",
      episodeTitle: ["Can Democrats Turn Their 2022 Around?"],
      guestRecomendation: ["Sean McElwee and Anat Shenker-Osorio"],
    },
    "These Precious Days": {
      author: "Ann Patchett",
      episodeTitle: ["Can Democrats Turn Their 2022 Around?"],
      guestRecomendation: ["Sean McElwee and Anat Shenker-Osorio"],
    },
    "Ukraine in Histories and Stories": {
      author: "Volodymyr Yermolenko",
      episodeTitle: [
        "A Ukrainian Philsopoher on What Putin Never Understood About Ukraine",
      ],
      guestRecomendation: ["Volodymyr Yermolenko"],
    },
    "The Gates of Europe": {
      author: "Serhii Plokhy",
      episodeTitle: [
        "A Ukrainian Philsopoher on What Putin Never Understood About Ukraine",
        "Timothy Snyder on the Myths That Blinded the West to Putin’s Plans",
      ],
      guestRecomendation: ["Volodymyr Yermolenko", "Timothy Snyder"],
    },
    "Lost Kingdom": {
      author: "Serhii Plokhy",
      episodeTitle: [
        "A Ukrainian Philsopoher on What Putin Never Understood About Ukraine",
      ],
      guestRecomendation: ["Volodymyr Yermolenko"],
    },
    Chernobyl: {
      author: "Serhii Plokhy",
      episodeTitle: [
        "A Ukrainian Philsopoher on What Putin Never Understood About Ukraine",
      ],
      guestRecomendation: ["Volodymyr Yermolenko"],
    },
    "Blood of Others": {
      author: "Rory Finnin",
      episodeTitle: [
        "A Ukrainian Philsopoher on What Putin Never Understood About Ukraine",
      ],
      guestRecomendation: ["Volodymyr Yermolenko"],
    },
    "The Art of War": {
      author: "Sun Tzu",
      episodeTitle: [
        "Fiona Hill on Whether Ukraine Can Win — and What Happens if Russia Loses (April 8, 2022)",
      ],
      guestRecomendation: ["Fiona Hill"],
    },
    "The Power Broker": {
      author: "Robert A. Caro",
      episodeTitle: [
        "A Viral Case Against Crypto, Explored",
        "How Chuck Schumer Plans to Win Over Trump Voters",
      ],
      guestRecomendation: ["Dan Olson", "Chuck Schumer"],
    },
    "The Tombs of Atuan": {
      author: "Ursula K. Le Guin",
      episodeTitle: ["A Viral Case Against Crypto, Explored"],
      guestRecomendation: ["Dan Olson"],
    },
    "Persuasive Games": {
      author: "Ian Bogost",
      episodeTitle: ["A Viral Case Against Crypto, Explored"],
      guestRecomendation: ["Dan Olson"],
    },
    Collapse: {
      author: "Vladislav M. Zubok",
      episodeTitle: [
        "Sanctioning Russia Is a Form of War. We Need to Treat It Like One.",
      ],
      guestRecomendation: ["Nicholas Mulder"],
    },
    "The Perfect Fascist": {
      author: "Victoria de Grazia",
      episodeTitle: [
        "Sanctioning Russia Is a Form of War. We Need to Treat It Like One.",
      ],
      guestRecomendation: ["Nicholas Mulder"],
    },
    "My Century": {
      author: "Aleksander Wat",
      episodeTitle: [
        "Sanctioning Russia Is a Form of War. We Need to Treat It Like One.",
      ],
      guestRecomendation: ["Nicholas Mulder"],
    },
    "The Best and The Brightest": {
      author: "David Halberstam",
      episodeTitle: ["I Keep Hoping Larry Summers Is Wrong. What if He’s Not?"],
      guestRecomendation: ["Larry Summers"],
    },
    "The Price of Peace": {
      author: "Zachary D. Carter",
      episodeTitle: [
        "I Keep Hoping Larry Summers Is Wrong. What if He’s Not?",
        "What’s Happening to Our Economy Is Like a Natural Disaster",
      ],
      guestRecomendation: ["Larry Summers", "Paul Krugman"],
    },
    War: {
      author: "Margaret MacMillan",
      episodeTitle: [
        "Margaret Atwood on ‘The Handmaid’s Tale,’ Totalitarianism and U.F.O.s",
      ],
      guestRecomendation: ["Margaret Atwood"],
    },
    Biased: {
      author: "Jennifer L. Eberhardt",
      episodeTitle: [
        "Margaret Atwood on ‘The Handmaid’s Tale,’ Totalitarianism and U.F.O.s",
        "What if We Respected Toddlers as Whole People?",
      ],
      guestRecomendation: ["Margaret Atwood", "Janet Lansbury"],
    },
    "Secrets of the Sprakkar": {
      author: "Eliza Reid",
      episodeTitle: [
        "Margaret Atwood on ‘The Handmaid’s Tale,’ Totalitarianism and U.F.O.s",
      ],
      guestRecomendation: ["Margaret Atwood"],
    },
    "Charlotte’s Web": {
      author: "E. B. White",
      episodeTitle: [
        "Margaret Atwood on ‘The Handmaid’s Tale,’ Totalitarianism and U.F.O.s",
        "Should We Dim the Sun? Will We Even Have a Choice?",
      ],
      guestRecomendation: ["Margaret Atwood", "Elizabeth Kolbert"],
    },
    "Lord of the Rings": {
      author: "J.R.R. Tolkien",
      episodeTitle: [
        "Margaret Atwood on ‘The Handmaid’s Tale,’ Totalitarianism and U.F.O.s",
      ],
      guestRecomendation: ["Margaret Atwood"],
    },
    "Putin’s World": {
      author: "Angela Stent",
      episodeTitle: [
        "How Energy Markets Are Shaping Putin’s Invasion — and the World",
        "Fiona Hill on the War Putin Is Really Fighting",
      ],
      guestRecomendation: ["Daniel Yergin", "Fiona Hill"],
    },
    "The Power of Law": {
      author: "Sebastian Mallaby",
      episodeTitle: [
        "How Energy Markets Are Shaping Putin’s Invasion — and the World",
      ],
      guestRecomendation: ["Daniel Yergin"],
    },
    "The Cloud Revolution": {
      author: "Mark P. Mills",
      episodeTitle: [
        "How Energy Markets Are Shaping Putin’s Invasion — and the World",
      ],
      guestRecomendation: ["Daniel Yergin"],
    },
    "The Economic Weapon": {
      author: "Nicholas Mulder",
      episodeTitle: [
        "A Realist Take on How the Russia-Ukraine War Could End",
        "Can the West Stop Russia by Strangling Its Economy?",
      ],
      guestRecomendation: ["Emma Ashford", "Adam Tooze"],
    },
    "Not One Inch": {
      author: "M.E. Sarotte",
      episodeTitle: [
        "A Realist Take on How the Russia-Ukraine War Could End",
        "Fiona Hill on the War Putin Is Really Fighting",
      ],
      guestRecomendation: ["Emma Ashford", "Fiona Hill"],
    },
    "The Sleepwalkers": {
      author: "Christopher Clark",
      episodeTitle: ["A Realist Take on How the Russia-Ukraine War Could End"],
      guestRecomendation: ["Emma Ashford"],
    },
    "Nothing Is True and Everything Is Possible": {
      author: "Peter Pomerantsev",
      episodeTitle: [
        "Timothy Snyder on the Myths That Blinded the West to Putin’s Plans",
      ],
      guestRecomendation: ["Timothy Snyder"],
    },
    "The Last Empire": {
      author: "Serhii Plokhy",
      episodeTitle: [
        "Putin Is ‘Profoundly Anti-Modern.’ Masha Gessen Explains What That Means for the World",
      ],
      guestRecomendation: ["Masha Gessen"],
    },
    "Manual for Survival": {
      author: "Kate Brown",
      episodeTitle: [
        "Putin Is ‘Profoundly Anti-Modern.’ Masha Gessen Explains What That Means for the World",
      ],
      guestRecomendation: ["Masha Gessen"],
    },
    "Babi Yar": {
      author: "Anatoly Kuznetsov",
      episodeTitle: [
        "Putin Is ‘Profoundly Anti-Modern.’ Masha Gessen Explains What That Means for the World",
      ],
      guestRecomendation: ["Masha Gessen"],
    },
    Bloodlands: {
      author: "Timothy Snyder",
      episodeTitle: ["Fiona Hill on the War Putin Is Really Fighting"],
      guestRecomendation: ["Fiona Hill"],
    },
    "The Limits of Partnership": {
      author: "Angela Stent",
      episodeTitle: ["Fiona Hill on the War Putin Is Really Fighting"],
      guestRecomendation: ["Fiona Hill"],
    },
    "Russia Under the Old Regime": {
      author: "Richard Pipes",
      episodeTitle: ["Fiona Hill on the War Putin Is Really Fighting"],
      guestRecomendation: ["Fiona Hill"],
    },
    "The Formation of the Soviet Union": {
      author: "Richard Pipes",
      episodeTitle: ["Fiona Hill on the War Putin Is Really Fighting"],
      guestRecomendation: ["Fiona Hill"],
    },
    "Man, the State, and War": {
      author: "Kenneth N. Waltz",
      episodeTitle: [
        "Fareed Zakaria Has a Better Way to Handle Russia —and China (March 4, 2022)",
      ],
      guestRecomendation: ["Fareed Zakaria"],
    },
    "A World Safe for Democracy": {
      author: "G. John Ikenberry",
      episodeTitle: [
        "Fareed Zakaria Has a Better Way to Handle Russia —and China (March 4, 2022)",
      ],
      guestRecomendation: ["Fareed Zakaria"],
    },
    "Memoirs 1925-1950": {
      author: "George F. Kennan",
      episodeTitle: [
        "Fareed Zakaria Has a Better Way to Handle Russia —and China (March 4, 2022)",
      ],
      guestRecomendation: ["Fareed Zakaria"],
    },
    "The End of the End of History": {
      author: "Alex Hochuli, George Hoare and Philip Cunliffe",
      episodeTitle: ["Can the West Stop Russia by Strangling Its Economy?"],
      guestRecomendation: ["Adam Tooze"],
    },
    "The Future of Money": {
      author: "Eswar S. Prasad",
      episodeTitle: ["Can the West Stop Russia by Strangling Its Economy?"],
      guestRecomendation: ["Adam Tooze"],
    },
    "The Anarchy": {
      author: "William Dalrymple",
      episodeTitle: [
        "A Critique of Government That Progressives — Myself Included — Need to Hear",
      ],
      guestRecomendation: ["Alex Tabarrok"],
    },
    "India: A Story Through 100 Objects": {
      episodeTitle: [
        "A Critique of Government That Progressives — Myself Included — Need to Hear",
      ],
      author: "Vidya Dehejia",
      guestRecomendation: ["Alex Tabarrok"],
    },
    "The Splendid and the Vile": {
      author: "Erik Larson",
      episodeTitle: [
        "A Critique of Government That Progressives — Myself Included — Need to Hear",
      ],
      guestRecomendation: ["Alex Tabarrok"],
    },
    "Dear Parent: Caring for Infants with Respect": {
      author: "Magda Gerber",
      episodeTitle: ["What if We Respected Toddlers as Whole People?"],
      guestRecomendation: ["Janet Lansbury"],
    },
    "Siblings Without Rivalry": {
      author: "Adele Faber and Elaine Mazlish",
      episodeTitle: ["What if We Respected Toddlers as Whole People?"],
      guestRecomendation: ["Janet Lansbury"],
    },
    "The Hurried Child": {
      author: "David Elkind",
      episodeTitle: ["What if We Respected Toddlers as Whole People?"],
      guestRecomendation: ["Janet Lansbury"],
    },
    "The Anatomy of a Moment": {
      author: "Javier Cercas",
      episodeTitle: [
        "It’s Not Your Fault You Can’t Pay Attention. Here’s Why.",
      ],
      guestRecomendation: ["Johann Hari"],
    },
    'Visitors"': {
      author: "Anita Brookner",
      episodeTitle: [
        "It’s Not Your Fault You Can’t Pay Attention. Here’s Why.",
      ],
      guestRecomendation: ["Johann Hari"],
    },
    "The Apology": {
      author: "V (formerly Eve Ensler)",
      episodeTitle: [
        "It’s Not Your Fault You Can’t Pay Attention. Here’s Why.",
        "This Conversation Will Change How You Think About Trauma",
      ],
      guestRecomendation: ["Johann Hari", "Bessel van der Kolk"],
    },
    "The Myth of the Rational Voter": {
      author: "Bryan Caplan",
      episodeTitle: ["Why (Most) Economists Got This Economy So Wrong"],
      guestRecomendation: ["Jason Furman"],
    },
    "The Weirdest People in the World": {
      author: "Joseph Henrich",
      episodeTitle: ["Why (Most) Economists Got This Economy So Wrong"],
      guestRecomendation: ["Jason Furman"],
    },
    "Who We Are and How We Got Here": {
      author: "David Reich",
      episodeTitle: ["Why (Most) Economists Got This Economy So Wrong"],
      guestRecomendation: ["Jason Furman"],
    },
    "Law and Disagreement": {
      author: "Jeremy Waldron",
      episodeTitle: ["Let’s Talk About How Truly Bizarre Our Supreme Court Is"],
      guestRecomendation: ["Jamal Greene"],
    },
    "Cult of the Constitution": {
      author: "Mary Anne Franks",
      episodeTitle: ["Let’s Talk About How Truly Bizarre Our Supreme Court Is"],
      guestRecomendation: ["Jamal Greene"],
    },
    "The Heart Principle": {
      author: "Helen Hoang",
      episodeTitle: [
        "Democrats Chase Shiny Objects. Here’s How They Can Build Real Power.",
      ],
      guestRecomendation: ["Amanda Litman"],
    },
    "Olga Dies Dreaming": {
      author: "Xochitl Gonzalez",
      episodeTitle: [
        "Democrats Chase Shiny Objects. Here’s How They Can Build Real Power.",
      ],
      guestRecomendation: ["Amanda Litman"],
    },
    "Let’s Get Physical": {
      author: "Danielle Friedman",
      episodeTitle: [
        "Democrats Chase Shiny Objects. Here’s How They Can Build Real Power.",
      ],
      guestRecomendation: ["Amanda Litman"],
    },
    "When You Greet Me I Bow": {
      author: "Norman Fischer",
      episodeTitle: ["What We Gain by Enchanting the Objects in Our Lives"],
      guestRecomendation: ["Ruth Ozeki"],
    },
    "The Aleph and Other Stories": {
      author: "Jorge Luis Borges",
      episodeTitle: ["What We Gain by Enchanting the Objects in Our Lives"],
      guestRecomendation: ["Ruth Ozeki"],
    },
    "Vibrant Matter": {
      author: "Jane Bennett",
      episodeTitle: ["What We Gain by Enchanting the Objects in Our Lives"],
      guestRecomendation: ["Ruth Ozeki"],
    },
    "The Gatekeepers": {
      author: "Chris Whipple",
      episodeTitle: ["What Biden’s Chief of Staff Has Learned, One Year In"],
      guestRecomendation: ["Ron Klain"],
    },
    "The Theory and Practice of Group Psychotherapy": {
      author: "Irvin D. Yalom and Molyn Leszcz",
      episodeTitle: ["The Pandemic Lessons We Clearly Haven’t Learned"],
      guestRecomendation: ["Zeynep Tufekci"],
    },
    Chaos: {
      author: "James Gleick",
      episodeTitle: ["The Pandemic Lessons We Clearly Haven’t Learned"],
      guestRecomendation: ["Zeynep Tufekci"],
    },
    "The Dead Hand": {
      author: "David Hoffman",
      episodeTitle: ["The Pandemic Lessons We Clearly Haven’t Learned"],
      guestRecomendation: ["Zeynep Tufekci"],
    },
    "The Braindead Megaphone": {
      author: "George Saunders",
      episodeTitle: ["Chris Hayes on How Biden Can Have a Better 2022"],
      guestRecomendation: ["Chris Hayes"],
    },
    "The Three-Body Problem Series": {
      author: "Cixin Liu",
      episodeTitle: ["Chris Hayes on How Biden Can Have a Better 2022"],
      guestRecomendation: ["Chris Hayes"],
    },
    "The Racial Contract": {
      author: "Charles W. Mills",
      episodeTitle: ["Chris Hayes on How Biden Can Have a Better 2022"],
      guestRecomendation: ["Chris Hayes"],
    },
    "Nicomachean Ethics": {
      author: "Aristotle",
      episodeTitle: [
        "Timeless Wisdom for Leading a Life of Love, Friendship and Learning",
      ],
      guestRecomendation: ["Leon Kass"],
    },
    "The Hebrew Bible, especially Genesis and Exodus": {
      author: "",
      episodeTitle: [
        "Timeless Wisdom for Leading a Life of Love, Friendship and Learning",
      ],
      guestRecomendation: ["Leon Kass"],
    },
    "Democracy in America": {
      author: "Alexis de Tocqueville",
      episodeTitle: [
        "Timeless Wisdom for Leading a Life of Love, Friendship and Learning",
      ],
      guestRecomendation: ["Leon Kass"],
    },
    "Daniel Deronda": {
      author: "George Eliot",
      episodeTitle: [
        "Timeless Wisdom for Leading a Life of Love, Friendship and Learning",
      ],
      guestRecomendation: ["Leon Kass"],
    },
    "The Sum of Us": {
      author: "Heather McGhee",
      episodeTitle: [
        "Every 8 Seconds, an American Turns 65. How Do We Care for Everyone?",
        "The Life-Altering Differences Between White and Black Debt",
        "Ibram X. Kendi on What Conservatives—and Liberals—Get Wrong About Antiracism",
        "The Senate Is Making a Mockery of Itself",
      ],
      guestRecomendation: [
        "Ai-jen Poo",
        "Louise Seamster",
        "Ibram X. Kendi",
        "Adam Jentleson",
      ],
    },
    Caste: {
      author: "Isabel Wilkerson",
      episodeTitle: [
        "Every 8 Seconds, an American Turns 65. How Do We Care for Everyone?",
      ],
      guestRecomendation: ["Ai-jen Poo"],
    },
    "Being Mortal": {
      author: "Atul Gawande",
      episodeTitle: [
        "Every 8 Seconds, an American Turns 65. How Do We Care for Everyone?",
      ],
      guestRecomendation: ["Ai-jen Poo"],
    },
    "Thinking, Fast and Slow": {
      author: "Daniel Kahneman",
      episodeTitle: [
        "Predicting the Future Is Possible. These ‘Superforecasters’ Know How.",
      ],
      guestRecomendation: ["Philip Tetlock"],
    },
    "Enlightenment Now": {
      author: "Steven Pinker",
      episodeTitle: [
        "Predicting the Future Is Possible. These ‘Superforecasters’ Know How.",
      ],
      guestRecomendation: ["Philip Tetlock"],
    },
    "Perception and Misperception in International Politics": {
      author: "Robert Jervis",
      episodeTitle: [
        "Predicting the Future Is Possible. These ‘Superforecasters’ Know How.",
      ],
      guestRecomendation: ["Philip Tetlock"],
    },
    "The Stickup Kids": {
      author: "Randol Contreras",
      episodeTitle: [
        "Why Is Murder Spiking? And Can Cities Address It Without Police?",
      ],
      guestRecomendation: ["Patrick Sharkey"],
    },
    "The Truly Disadvantaged": {
      author: "William Julius Wilson",
      episodeTitle: [
        "Why Is Murder Spiking? And Can Cities Address It Without Police?",
      ],
      guestRecomendation: ["Patrick Sharkey"],
    },
    Siddhartha: {
      author: "Hermann Hesse",
      episodeTitle: [
        "Why Is Murder Spiking? And Can Cities Address It Without Police?",
      ],
      guestRecomendation: ["Patrick Sharkey"],
    },
    "Lost in Work": {
      author: "Amelia Horgan",
      episodeTitle: ["The Case Against Loving Your Job"],
      guestRecomendation: ["Sarah Jaffe"],
    },
    "Farewell to the Factory": {
      author: "Ruth Milkman",
      episodeTitle: ["The Case Against Loving Your Job"],
      guestRecomendation: ["Sarah Jaffe"],
    },
    "Confessions of the Fox": {
      author: "Jordy Rosenberg",
      episodeTitle: ["The Case Against Loving Your Job"],
      guestRecomendation: ["Sarah Jaffe"],
    },
    "Fortress America": {
      author: "Elaine Tyler May",
      episodeTitle: ["How Far-Right Extremism Invaded Mainstream Politics"],
      guestRecomendation: ["Kathleen Belew"],
    },
    "Future Home of the Living God": {
      author: "Louise Erdrich",
      episodeTitle: ["How Far-Right Extremism Invaded Mainstream Politics"],
      guestRecomendation: ["Kathleen Belew"],
    },
    "Tiny You": {
      author: "Jennifer Holland",
      episodeTitle: ["How Far-Right Extremism Invaded Mainstream Politics"],
      guestRecomendation: ["Kathleen Belew"],
    },
    "The Boys on the Bus": {
      author: "Timothy Crouse",
      episodeTitle: ["The Mainstream Media Has a Republican Party Problem"],
      guestRecomendation: ["Jay Rosen"],
    },
    "Making News": {
      author: "Gaye Tuchman",
      episodeTitle: ["The Mainstream Media Has a Republican Party Problem"],
      guestRecomendation: ["Jay Rosen"],
    },
    "Deciding What’s News": {
      author: "Herbert Gans",
      episodeTitle: ["The Mainstream Media Has a Republican Party Problem"],
      guestRecomendation: ["Jay Rosen"],
    },
    "South to America": {
      author: "Imani Perry",
      episodeTitle: ["Two Acclaimed Writers on the Art of Revising Your Life"],
      guestRecomendation: ["Kiese Laymon"],
    },
    "Shoutin’ in the Fire": {
      author: "Danté Stewart",
      episodeTitle: ["Two Acclaimed Writers on the Art of Revising Your Life"],
      guestRecomendation: ["Kiese Laymon"],
    },
    "Abolition for the People": {
      author: "Colin Kaepernick",
      episodeTitle: ["Two Acclaimed Writers on the Art of Revising Your Life"],
      guestRecomendation: ["Kiese Laymon"],
    },
    "The Color of Money": {
      author: "Mehrsa Baradaran",
      episodeTitle: [
        "The Life-Altering Differences Between White and Black Debt",
      ],
      guestRecomendation: ["Louise Seamster"],
    },
    "A Pound of Flesh": {
      author: "Alexes Harris",
      episodeTitle: [
        "The Life-Altering Differences Between White and Black Debt",
      ],
      guestRecomendation: ["Louise Seamster"],
    },
    "The Adventures of Tintin": {
      author: "Hergé",
      episodeTitle: [
        "Why This Conservative Wants a More Radical Republican Party",
      ],
      guestRecomendation: ["Sohrab Ahmari"],
    },
    "The Charterhouse of Parma": {
      author: "Stendhal",
      episodeTitle: [
        "Why This Conservative Wants a More Radical Republican Party",
      ],
      guestRecomendation: ["Sohrab Ahmari"],
    },
    "The Gnostic Religion": {
      author: "Hans Jonas",
      episodeTitle: [
        "Why This Conservative Wants a More Radical Republican Party",
      ],
      guestRecomendation: ["Sohrab Ahmari"],
    },
    "The Journal of a Disappointed Man": {
      author: "W.N.P. Barbellion",
      episodeTitle: [
        "What Living ‘At the Edge of Medical Knowledge’ Reveals about American Healthcare",
      ],
      guestRecomendation: ["Meghan O’Rourke"],
    },
    "On Immunity": {
      author: "Eula Biss",
      episodeTitle: [
        "What Living ‘At the Edge of Medical Knowledge’ Reveals about American Healthcare",
      ],
      guestRecomendation: ["Meghan O’Rourke"],
    },
    "The Cancer Journals": {
      author: "Audre Lorde",
      episodeTitle: [
        "What Living ‘At the Edge of Medical Knowledge’ Reveals about American Healthcare",
      ],
      guestRecomendation: ["Meghan O’Rourke"],
    },
    "The Love Songs of W.E.B. Du Bois": {
      author: "Honorée Fanonne Jeffers",
      episodeTitle: ["What Keeping American Democracy Alive Looks Like"],
      guestRecomendation: ["Martha S. Jones"],
    },
    Thick: {
      author: "Tressie McMillan Cottom",
      episodeTitle: ["What Keeping American Democracy Alive Looks Like"],
      guestRecomendation: ["Martha S. Jones"],
    },
    "A Midwife’s Tale": {
      author: "Laurel Thatcher Ulrich",
      episodeTitle: [
        "Why Does It Have to Be Slaveholders That We Unite Around?",
      ],
      guestRecomendation: ["Woody Holton"],
    },
    "The Negro in the American Revolution": {
      author: "Benjamin Quarles",
      episodeTitle: [
        "Why Does It Have to Be Slaveholders That We Unite Around?",
      ],
      guestRecomendation: ["Woody Holton"],
    },
    "Rebecca’s Revival": {
      author: "Jon F. Sensbach",
      episodeTitle: [
        "Why Does It Have to Be Slaveholders That We Unite Around?",
      ],
      guestRecomendation: ["Woody Holton"],
    },
    "The Company": {
      author: "John Micklethwait and Adrian Wooldridge",
      episodeTitle: ["A Crypto Optimist Meets a Crypto Skeptic"],
      guestRecomendation: ["Katie Haun"],
    },
    "My Life in Full": {
      author: "Indra Nooyi",
      episodeTitle: ["A Crypto Optimist Meets a Crypto Skeptic"],
      guestRecomendation: ["Katie Haun"],
    },
    "Palace Walk": {
      author: "Naguib Mahfouz",
      episodeTitle: ["A Crypto Optimist Meets a Crypto Skeptic"],
      guestRecomendation: ["Katie Haun"],
    },
    Fidelity: {
      author: "Wendell Berry",
      episodeTitle: ["Lessons on Living Well, From Nick Offerman"],
      guestRecomendation: ["Nick Offerman"],
    },
    Wanderlust: {
      author: "Rebecca Solnit",
      episodeTitle: ["Lessons on Living Well, From Nick Offerman"],
      guestRecomendation: ["Nick Offerman"],
    },
    "Girls and Sex": {
      author: "Peggy Orenstein",
      episodeTitle: ["Lessons on Living Well, From Nick Offerman"],
      guestRecomendation: ["Nick Offerman"],
    },
    "Boys and Sex": {
      author: "Peggy Orenstein",
      episodeTitle: ["Lessons on Living Well, From Nick Offerman"],
      guestRecomendation: ["Nick Offerman"],
    },
    Possibilities: {
      author: "David Graeber",
      episodeTitle: ["What if We’ll Never Truly Be Free?"],
      guestRecomendation: ["Maggie Nelson"],
    },
    "Wayward Lives, Beautiful Experiments": {
      author: "Saidiya Hartman",
      episodeTitle: ["What if We’ll Never Truly Be Free?"],
      guestRecomendation: ["Maggie Nelson"],
    },
    "The Force of Nonviolence": {
      author: "Judith Butler",
      episodeTitle: ["What if We’ll Never Truly Be Free?"],
      guestRecomendation: ["Maggie Nelson"],
    },
    "Due Diligence": {
      author: "David Roodman",
      episodeTitle: [
        "Warning: This Episode Gets Really Weird About How Much Good You Can Do",
      ],
      guestRecomendation: ["Holden Karnofsky"],
    },
    "The Lifeways of Hunter-Gatherers": {
      author: "Robert L. Kelly",
      episodeTitle: [
        "Warning: This Episode Gets Really Weird About How Much Good You Can Do",
      ],
      guestRecomendation: ["Holden Karnofsky"],
    },
    "Healthy At Last": {
      author: "Eric Adams",
      episodeTitle: [
        "‘We’ve Become Too Complicated’: Where Eric Adams Thinks Democrats Went Wrong",
      ],
      guestRecomendation: ["Eric Adams"],
    },
    "Breaking The Habit of Being Yourself": {
      author: "Joe Dispenza",
      episodeTitle: [
        "‘We’ve Become Too Complicated’: Where Eric Adams Thinks Democrats Went Wrong",
      ],
      guestRecomendation: ["Eric Adams"],
    },
    "You Are The Placebo": {
      author: "Joe Dispenza",
      episodeTitle: [
        "‘We’ve Become Too Complicated’: Where Eric Adams Thinks Democrats Went Wrong",
      ],
      guestRecomendation: ["Eric Adams"],
    },
    Upstream: {
      author: "Dan Heath",
      episodeTitle: [
        "‘We’ve Become Too Complicated’: Where Eric Adams Thinks Democrats Went Wrong",
      ],
      guestRecomendation: ["Eric Adams"],
    },
    "Atomic Habits": {
      author: "James Clear",
      episodeTitle: [
        "‘We’ve Become Too Complicated’: Where Eric Adams Thinks Democrats Went Wrong",
      ],
      guestRecomendation: ["Eric Adams"],
    },
    "How to Be Animal": {
      author: "Melanie Challenger",
      episodeTitle: ["Richard Powers on What We Can Learn from Trees"],
      guestRecomendation: ["Richard Powers"],
    },
    Rooted: {
      author: "Lyanda Lynn Haupt",
      episodeTitle: ["Richard Powers on What We Can Learn from Trees"],
      guestRecomendation: ["Richard Powers"],
    },
    "Ever Green": {
      author: "John W. Reid and Thomas E. Lovejoy",
      episodeTitle: ["Richard Powers on What We Can Learn from Trees"],
      guestRecomendation: ["Richard Powers"],
    },
    "How All Politics Became Reproductive Politics": {
      author: "Laura Briggs",
      episodeTitle: ["We’re on the Precipice of a Post-Roe World"],
      guestRecomendation: ["Leslie Reagan"],
    },
    "Killing for Life": {
      author: "Carol Mason",
      episodeTitle: ["We’re on the Precipice of a Post-Roe World"],
      guestRecomendation: ["Leslie Reagan"],
    },
    "Radical Reproductive Justice, edited": {
      author:
        "Loretta J. Ross, Lynn Roberts, Erika Derkas, Whitney Peoples, and Pamela Bridgewater",
      episodeTitle: ["We’re on the Precipice of a Post-Roe World"],
      guestRecomendation: ["Leslie Reagan"],
    },
    "The Deficit Myth": {
      author: "Stephanie Kelton",
      episodeTitle: ["Covid Showed Us What Keynes Always Knew"],
      guestRecomendation: ["Adam Tooze"],
    },
    Stalingrad: {
      author: "Vasily Grossman",
      episodeTitle: ["Covid Showed Us What Keynes Always Knew"],
      guestRecomendation: ["Adam Tooze"],
    },
    "Essays in Persuasion": {
      author: "John Maynard Keynes",
      episodeTitle: ["Covid Showed Us What Keynes Always Knew"],
      guestRecomendation: ["Adam Tooze"],
    },
    "Love Goes to Buildings on Fire": {
      author: "Will Hermes",
      episodeTitle: [
        "How Colson Whitehead Writes About Our ‘Big Wild Country’",
      ],
      guestRecomendation: ["Colson Whitehead"],
    },
    "The Buddha in the Attic": {
      author: "Julie Otsuka",
      episodeTitle: [
        "How Colson Whitehead Writes About Our ‘Big Wild Country’",
      ],
      guestRecomendation: ["Colson Whitehead"],
    },
    "When the Emperor Was Divine": {
      author: "Julie Otsuka",
      episodeTitle: [
        "How Colson Whitehead Writes About Our ‘Big Wild Country’",
      ],
      guestRecomendation: ["Colson Whitehead"],
    },
    "Mad As Hell": {
      author: "Dave Itzkoff",
      episodeTitle: [
        "How Colson Whitehead Writes About Our ‘Big Wild Country’",
      ],
      guestRecomendation: ["Colson Whitehead"],
    },
    "Ain’t Gonna Let Nobody Turn Me Around": {
      author: "Alethia Jones and Virginia Eubanks, with Barbara Smith",
      episodeTitle: ["Can We Change Our Sexual Desires? Should We?"],
      guestRecomendation: ["Amia Srinivasan"],
    },
    "Revolting Prostitutes": {
      author: "Juno Mac and Molly Smith",
      episodeTitle: ["Can We Change Our Sexual Desires? Should We?"],
      guestRecomendation: ["Amia Srinivasan"],
    },
    "Feminist International": {
      author: "Verónica Gago, translated",
      episodeTitle: ["Can We Change Our Sexual Desires? Should We?"],
      guestRecomendation: ["Amia Srinivasan"],
    },
    "Undoing the Demos": {
      author: "Wendy Brown",
      episodeTitle: ["This Isn’t Your Grandpa’s Joe Biden"],
      guestRecomendation: ["Felicia Wong"],
    },
    "The End of the Myth": {
      author: "Greg Grandin",
      episodeTitle: ["This Isn’t Your Grandpa’s Joe Biden"],
      guestRecomendation: ["Felicia Wong"],
    },
    "Difference Without Domination": {
      author: "Danielle Allen and Rohini Somanathan",
      episodeTitle: ["This Isn’t Your Grandpa’s Joe Biden"],
      guestRecomendation: ["Felicia Wong"],
    },
    "Cars and Trucks and Things That Go": {
      author: "Richard Scarry",
      episodeTitle: [
        "My Reading Habits, Explained, and Other Questions You Asked",
      ],
      guestRecomendation: ["Ezra Klein"],
    },
    "The Best and the Brightest": {
      author: "David Halberstam",
      episodeTitle: [
        "The Foreign Policy Conversation Washington Doesn’t Want to Have",
      ],
      guestRecomendation: ["Robert Wright"],
    },
    "The Hell of Good Intentions": {
      author: "Stephen Walt",
      episodeTitle: [
        "The Foreign Policy Conversation Washington Doesn’t Want to Have",
      ],
      guestRecomendation: ["Robert Wright"],
    },
    Frankenstein: {
      author: "Mary Shelley",
      episodeTitle: [
        "The Foreign Policy Conversation Washington Doesn’t Want to Have",
      ],
      guestRecomendation: ["Robert Wright"],
    },
    "Love in Goon Park": {
      author: "Deborah Blum",
      episodeTitle: [
        "This Conversation Will Change How You Think About Trauma",
      ],
      guestRecomendation: ["Bessel van der Kolk"],
    },
    "The Narrow Road to the Deep North": {
      author: "Richard Flanagan",
      episodeTitle: [
        "This Conversation Will Change How You Think About Trauma",
      ],
      guestRecomendation: ["Bessel van der Kolk"],
    },
    Reconstruction: {
      author: "Eric Foner",
      episodeTitle: ["How Identity Politics Took Over the Republican Party"],
      guestRecomendation: ["Lilliana Mason"],
    },
    "Black Reconstruction in America, 1860-1880": {
      author: "W. E. B. Du Bois",
      episodeTitle: [
        "How Identity Politics Took Over the Republican Party",
        "What’s Really Behind the 1619 Backlash?",
      ],
      guestRecomendation: [
        "Lilliana Mason",
        "Nikole Hannah-Jones and Ta-Nehisi Coates",
      ],
    },
    "Children of Blood and Bone": {
      author: "Tomi Adeyemi",
      episodeTitle: ["How Identity Politics Took Over the Republican Party"],
      guestRecomendation: ["Lilliana Mason"],
    },
    "The City We Became": {
      author: "N. K. Jemisin",
      episodeTitle: ["How Identity Politics Took Over the Republican Party"],
      guestRecomendation: ["Lilliana Mason"],
    },
    "American War": {
      author: "Omar El Akkad",
      episodeTitle: [
        "What Trump Understood About the War on Terror That Others Missed",
      ],
      guestRecomendation: ["Spencer Ackerman"],
    },
    "The Jakarta Method": {
      author: "Vincent Bevins",
      episodeTitle: [
        "What Trump Understood About the War on Terror That Others Missed",
      ],
      guestRecomendation: ["Spencer Ackerman"],
    },
    Overheated: {
      author: "Kate Aronoff",
      episodeTitle: [
        "What Trump Understood About the War on Terror That Others Missed",
      ],
      guestRecomendation: ["Spencer Ackerman"],
    },
    "The New Gods": {
      author: "Jack Kirby",
      episodeTitle: [
        "What Trump Understood About the War on Terror That Others Missed",
      ],
      guestRecomendation: ["Spencer Ackerman"],
    },
    Lazarus: {
      author: "Greg Rucka and Michael Lark",
      episodeTitle: [
        "What Trump Understood About the War on Terror That Others Missed",
      ],
      guestRecomendation: ["Spencer Ackerman"],
    },
    "Rise of the Black Panther": {
      author: "Evan Narcisse and Ta-Nehisi Coates",
      episodeTitle: [
        "What Trump Understood About the War on Terror That Others Missed",
      ],
      guestRecomendation: ["Spencer Ackerman"],
    },
    "Wired for Culture": {
      author: "Mark Pagel",
      episodeTitle: ["The Good and Bad News About the Delta Variant"],
      guestRecomendation: ["Céline Gounder"],
    },
    "Rule Makers, Rule Breakers": {
      author: "Michele Gelfand",
      episodeTitle: ["The Good and Bad News About the Delta Variant"],
      guestRecomendation: ["Céline Gounder"],
    },
    Stuck: {
      author: "Heidi J. Larson",
      episodeTitle: ["The Good and Bad News About the Delta Variant"],
      guestRecomendation: ["Céline Gounder"],
    },
    "Tools for Conviviality": {
      author: "Ivan Illich",
      episodeTitle: [
        "This Conversation Changed the Way I Interact With Technology",
      ],
      guestRecomendation: ["L. M. Sacasas"],
    },
    "The Human Condition": {
      author: "Hannah Arendt",
      episodeTitle: [
        "This Conversation Changed the Way I Interact With Technology",
      ],
      guestRecomendation: ["L. M. Sacasas"],
    },
    "Technology and the Character of Contemporary Life": {
      author: "Albert Borgmann",
      episodeTitle: [
        "This Conversation Changed the Way I Interact With Technology",
      ],
      guestRecomendation: ["L. M. Sacasas"],
    },
    "The Warmth of Other Suns": {
      author: "Isabel Wilkerson",
      episodeTitle: ["What’s Really Behind the 1619 Backlash?"],
      guestRecomendation: ["Nikole Hannah-Jones and Ta-Nehisi Coates"],
    },
    Postwar: {
      author: "Tony Judt",
      episodeTitle: ["What’s Really Behind the 1619 Backlash?"],
      guestRecomendation: ["Nikole Hannah-Jones and Ta-Nehisi Coates"],
    },
    "Avengers of the New World": {
      author: "Laurent Dubois",
      episodeTitle: ["What’s Really Behind the 1619 Backlash?"],
      guestRecomendation: ["Nikole Hannah-Jones and Ta-Nehisi Coates"],
    },
    "Crucible of War": {
      author: "Fred Anderson",
      episodeTitle: ["Ross Douthat Has Been ‘Radicalized a Little Bit, Too’"],
      guestRecomendation: ["Ross Douthat"],
    },
    "Champlain’s Dream": {
      author: "David Hackett Fischer",
      episodeTitle: ["Ross Douthat Has Been ‘Radicalized a Little Bit, Too’"],
      guestRecomendation: ["Ross Douthat"],
    },
    "Mom Genes": {
      author: "Abigail Tucker",
      episodeTitle: ["Ross Douthat Has Been ‘Radicalized a Little Bit, Too’"],
      guestRecomendation: ["Ross Douthat"],
    },
    "Golden Gates": {
      author: "Conor Dougherty",
      episodeTitle: ["How Blue Cities Became So Outrageously Affordable"],
      guestRecomendation: ["Jerusalem Demsas"],
    },
    "The Dispossessed": {
      author: "Ursula Le Guin",
      episodeTitle: [
        "How Blue Cities Became So Outrageously Affordable",
        "To Understand This Era, You Need to Think in Systems",
      ],
      guestRecomendation: ["Jerusalem Demsas", "Zeynep Tufekci"],
    },
    "Stories of Your Life and Others": {
      author: "Ted Chiang",
      episodeTitle: ["How Blue Cities Became So Outrageously Affordable"],
      guestRecomendation: ["Jerusalem Demsas"],
    },
    "Supersizing the Mind": {
      author: "Andy Clark",
      episodeTitle: [
        "This Conversation Will Change How You Think About Thinking",
      ],
      guestRecomendation: ["Annie Murphy Paul"],
    },
    "Mind in Motion": {
      author: "Barbara Tversky",
      episodeTitle: [
        "This Conversation Will Change How You Think About Thinking",
      ],
      guestRecomendation: ["Annie Murphy Paul"],
    },
    "Thoughts Without a Thinker": {
      author: "Mark Epstein",
      episodeTitle: [
        "This Conversation Will Change How You Think About Thinking",
      ],
      guestRecomendation: ["Annie Murphy Paul"],
    },
    "Dying of Whiteness": {
      author: "Jonathan M. Metzl",
      episodeTitle: [
        "Ibram X. Kendi on What Conservatives—and Liberals—Get Wrong About Antiracism",
      ],
      guestRecomendation: ["Ibram X. Kendi"],
    },
    "Race for Profit": {
      author: "Keeanga-Yamahtta Taylor",
      episodeTitle: [
        "Ibram X. Kendi on What Conservatives—and Liberals—Get Wrong About Antiracism",
      ],
      guestRecomendation: ["Ibram X. Kendi"],
    },
    "The Outermost House": {
      author: "Henry Beston",
      episodeTitle: ["How Octopuses Upend What We Know About Ourselves"],
      guestRecomendation: ["Sy Montgomery"],
    },
    "The Old Way": {
      author: "Elizabeth Marshall Thomas",
      episodeTitle: ["How Octopuses Upend What We Know About Ourselves"],
      guestRecomendation: ["Sy Montgomery"],
    },
    "King Solomon’s Ring": {
      author: "Konrad Lorenz",
      episodeTitle: ["How Octopuses Upend What We Know About Ourselves"],
      guestRecomendation: ["Sy Montgomery"],
    },
    "Chlorine Sky": {
      author: "Mahogany L. Browne",
      episodeTitle: [
        "Critical Race Theory, Comic Books and the Power of Public Schools",
      ],
      guestRecomendation: ["Eve Ewing"],
    },
    "Halfway Home: Race, Punishment and the Afterlife of Mass Incarceration": {
      author: "Reuben Jonathan Miller",
      episodeTitle: [
        "Critical Race Theory, Comic Books and the Power of Public Schools",
      ],
      guestRecomendation: ["Eve Ewing"],
    },
    Severance: {
      author: "Ling Ma",
      episodeTitle: [
        "Critical Race Theory, Comic Books and the Power of Public Schools",
      ],
      guestRecomendation: ["Eve Ewing"],
    },
    "Don Quixote": {
      author: "Miguel de Cervantes",
      episodeTitle: [
        "Wilco’s Jeff Tweedy Wants You to Be Bad at Something. It’s for Your Own Good.",
      ],
      guestRecomendation: ["Jeff Tweedy"],
    },
    "A Temple of Texts and other work": {
      author: "William H. Gass",
      episodeTitle: [
        "Wilco’s Jeff Tweedy Wants You to Be Bad at Something. It’s for Your Own Good.",
      ],
      guestRecomendation: ["Jeff Tweedy"],
    },
    "King Leopold’s Ghost: A Story of Greed, Terror and Heroism in Colonial Africa":
      {
        author: "Adam Hochschild",
        episodeTitle: ["Why Do We Work So Damn Much?"],
        guestRecomendation: ["James Suzman"],
      },
    "Entangled Life: How Fungi Make Our Worlds, Change Our Minds and Shape Our Futures":
      {
        author: "Merlin Sheldrake",
        episodeTitle: ["Why Do We Work So Damn Much?"],
        guestRecomendation: ["James Suzman"],
      },
    "Other Minds: The Octopus, the Sea and the Deep Origins of Consciousness": {
      author: "Peter Godfrey-Smith",
      episodeTitle: ["Why Do We Work So Damn Much?"],
      guestRecomendation: ["James Suzman"],
    },
    "Tinker, Tailor, Soldier, Spy": {
      author: "John Le Carré",
      episodeTitle: ["Republicans Are Setting Off a Doom Loop for Democracy"],
      guestRecomendation: ["Ari Berman"],
    },
    "Race and Reunion: The Civil War in American Memory": {
      author: "David Blight",
      episodeTitle: ["Republicans Are Setting Off a Doom Loop for Democracy"],
      guestRecomendation: ["Ari Berman"],
    },
    "Dirty Work: Essential Jobs and the Hidden Toll of Inequality in America": {
      author: "Eyal Press",
      episodeTitle: ["Republicans Are Setting Off a Doom Loop for Democracy"],
      guestRecomendation: ["Ari Berman"],
    },
    "Poor Queer Studies: Confronting Elitism in the University": {
      author: "Matt Brim",
      episodeTitle: [
        "Sarah Schulman’s Radical Approach to Conflict, Communication and Change",
      ],
      guestRecomendation: ["Sarah Schulman"],
    },
    "Vanguard: How Black Women Broke Barriers, Won the Vote and Insisted on Equality for All":
      {
        author: "Martha S. Jones",
        episodeTitle: [
          "Sarah Schulman’s Radical Approach to Conflict, Communication and Change",
        ],
        guestRecomendation: ["Sarah Schulman"],
      },
    "Memorial Drive: A Daughter’s Memoir": {
      author: "Natasha Trethewey",
      episodeTitle: [
        "Sarah Schulman’s Radical Approach to Conflict, Communication and Change",
      ],
      guestRecomendation: ["Sarah Schulman"],
    },
    "Klara and the Sun": {
      author: "Kazuo Ishiguro",
      episodeTitle: [
        "Welcome to the ‘Take This Job and Shove It’ Economy",
        "Michael Lewis Is Asking the Right Question",
      ],
      guestRecomendation: ["Betsey Stevenson", "Michael Lewis"],
    },
    "The Undercover Economist Strikes Back": {
      author: "Tim Harford",
      episodeTitle: ["Welcome to the ‘Take This Job and Shove It’ Economy"],
      guestRecomendation: ["Betsey Stevenson"],
    },
    "Career and Family: Women’s Century-Long Journey Toward Equity": {
      author: "Claudia Goldin",
      episodeTitle: ["Welcome to the ‘Take This Job and Shove It’ Economy"],
      guestRecomendation: ["Betsey Stevenson"],
    },
    "Tristes Tropiques": {
      author: "Claude Lévi-Strauss",
      episodeTitle: ["The Freeing of the American Mind"],
      guestRecomendation: ["Louis Menand"],
    },
    "Postwar: A History of Europe Since 1945": {
      author: "Tony Judt",
      episodeTitle: ["The Freeing of the American Mind"],
      guestRecomendation: ["Louis Menand"],
    },
    "Chance and Circumstance: Twenty Years With Cage and Cunningham": {
      author: "Carolyn Brown",
      episodeTitle: ["The Freeing of the American Mind"],
      guestRecomendation: ["Louis Menand"],
    },
    "Crystal Nights": {
      author: "Greg Egan",
      episodeTitle: [
        "Sam Altman on the A.I. Revolution, Trillionaires and the Future of Political Power",
      ],
      guestRecomendation: ["Sam Altman"],
    },
    "The Last Question": {
      author: "Isaac Asimov",
      episodeTitle: [
        "Sam Altman on the A.I. Revolution, Trillionaires and the Future of Political Power",
      ],
      guestRecomendation: ["Sam Altman"],
    },
    "The Gentle Seduction": {
      author: "Marc Stiegler",
      episodeTitle: [
        "Sam Altman on the A.I. Revolution, Trillionaires and the Future of Political Power",
      ],
      guestRecomendation: ["Sam Altman"],
    },
    "Halfway Home": {
      author: "Reuben Miller",
      episodeTitle: [
        "Employers Are Begging for Workers. Maybe That’s a Good Thing.",
      ],
      guestRecomendation: ["Jamila Michener"],
    },
    "Root Shock": {
      author: "Mindy Fullilove",
      episodeTitle: [
        "Employers Are Begging for Workers. Maybe That’s a Good Thing.",
      ],
      guestRecomendation: ["Jamila Michener"],
    },
    "Poorly Understood": {
      author: "Mark Rank, Lawrence Eppard and Heather Bullock",
      episodeTitle: [
        "Employers Are Begging for Workers. Maybe That’s a Good Thing.",
      ],
      guestRecomendation: ["Jamila Michener"],
    },
    "What to Expect When You’re Expecting Robots": {
      author: "Julie Shah and Laura Major",
      episodeTitle: [
        "If ‘All Models Are Wrong,’ Why Do We Give Them So Much Power?",
      ],
      guestRecomendation: ["Brian Christian"],
    },
    "Finite and Infinite Games": {
      author: "James P. Carse",
      episodeTitle: [
        "If ‘All Models Are Wrong,’ Why Do We Give Them So Much Power?",
      ],
      guestRecomendation: ["Brian Christian"],
    },
    "How to Do Nothing": {
      author: "Jenny Odell",
      episodeTitle: [
        "If ‘All Models Are Wrong,’ Why Do We Give Them So Much Power?",
      ],
      guestRecomendation: ["Brian Christian"],
    },
    "The Overstory": {
      author: "Richard Powers",
      episodeTitle: [
        "Obama Explains How America Went From ‘Yes We Can’ to ‘MAGA’",
      ],
      guestRecomendation: ["Barack Obama"],
    },
    "Memorial Drive": {
      author: "Natasha Tretheway",
      episodeTitle: [
        "Obama Explains How America Went From ‘Yes We Can’ to ‘MAGA’",
      ],
      guestRecomendation: ["Barack Obama"],
    },
    Ghettoside: {
      author: "Jill Leovy",
      episodeTitle: ["Violent Crime Is Spiking. Do Liberals Have an Answer?"],
      guestRecomendation: ["James Forman Jr."],
    },
    "Becoming Ms. Burton": {
      author: "Susan Burton and Cari Lynn",
      episodeTitle: ["Violent Crime Is Spiking. Do Liberals Have an Answer?"],
      guestRecomendation: ["James Forman Jr."],
    },
    "The Condemnation of Blackness": {
      author: "Khalil Gibran Muhammad",
      episodeTitle: ["Violent Crime Is Spiking. Do Liberals Have an Answer?"],
      guestRecomendation: ["James Forman Jr."],
    },
    "Bring the War Home: The White Power Movement and Paramilitary America": {
      author: "Kathleen Belew",
      episodeTitle: ["The Spectacle of the G.O.P.’s Shrinking Tent"],
      guestRecomendation: ["Nicole Hemmer"],
    },
    "Gods of the Upper Air: How a Circle of Renegade Anthropologists Reinvented Race, Sex and Gender in the Twentieth Century":
      {
        author: "Charles King",
        episodeTitle: ["The Spectacle of the G.O.P.’s Shrinking Tent"],
        guestRecomendation: ["Nicole Hemmer"],
      },
    "The Fire Is Upon Us: James Baldwin, William F. Buckley Jr. and the Debate Over Race in America":
      {
        author: "Nicholas Buccola",
        episodeTitle: ["The Spectacle of the G.O.P.’s Shrinking Tent"],
        guestRecomendation: ["Nicole Hemmer"],
      },
    "Tolstoy: A Russian Life": {
      author: "Rosamund Bartlett",
      episodeTitle: ["Status Games, Polyamory and the Merits of Meritocracy"],
      guestRecomendation: ["Agnes Callard"],
    },
    "Pessoa: A Biography": {
      author: "Richard Zenith",
      episodeTitle: ["Status Games, Polyamory and the Merits of Meritocracy"],
      guestRecomendation: ["Agnes Callard"],
    },
    "Augustine of Hippo": {
      author: "Peter Brown",
      episodeTitle: ["Status Games, Polyamory and the Merits of Meritocracy"],
      guestRecomendation: ["Agnes Callard"],
    },
    "Young Men and Fire": {
      author: "Norman McLean",
      episodeTitle: ["Michael Lewis Is Asking the Right Question"],
      guestRecomendation: ["Michael Lewis"],
    },
    "Furious Hours": {
      author: "Casey Cep",
      episodeTitle: ["Michael Lewis Is Asking the Right Question"],
      guestRecomendation: ["Michael Lewis"],
    },
    "Heart of Fire": {
      author: "Mazie Hirono",
      episodeTitle: ["Elizabeth Warren on What We Get Wrong About Inequality"],
      guestRecomendation: ["Elizabeth Warren"],
    },
    "Before the Coffee Gets Cold": {
      author: "Toshikazu Kawaguchi",
      episodeTitle: ["Elizabeth Warren on What We Get Wrong About Inequality"],
      guestRecomendation: ["Elizabeth Warren"],
    },
    "John Rain series": {
      author: "Barry Eisler",
      episodeTitle: ["Elizabeth Warren on What We Get Wrong About Inequality"],
      guestRecomendation: ["Elizabeth Warren"],
    },
    "Death in Mud Lick": {
      author: "Eric Eyre",
      episodeTitle: ["How to Have Better Conversations About Hard Things"],
      guestRecomendation: ["Anna Sale"],
    },
    "Crying in H Mart": {
      author: "Michelle Zauner",
      episodeTitle: ["How to Have Better Conversations About Hard Things"],
      guestRecomendation: ["Anna Sale"],
    },
    "The Secret to Superhuman Strength": {
      author: "Alison Bechdel",
      episodeTitle: ["How to Have Better Conversations About Hard Things"],
      guestRecomendation: ["Anna Sale"],
    },
    Grant: {
      author: "Ron Chernow",
      episodeTitle: ["How Chuck Schumer Plans to Win Over Trump Voters"],
      guestRecomendation: ["Chuck Schumer"],
    },
    Freedom: {
      author: "William Safire",
      episodeTitle: ["How Chuck Schumer Plans to Win Over Trump Voters"],
      guestRecomendation: ["Chuck Schumer"],
    },
    "Conflict Is Not Abuse": {
      author: "Sarah Schulman",
      episodeTitle: ["Shame, Safety and Moving Beyond Cancel Culture"],
      guestRecomendation: ["Natalie Wynn and Will Wilkinson"],
    },
    "The Tao Is Silent": {
      author: "Raymond Smullyan",
      episodeTitle: ["Shame, Safety and Moving Beyond Cancel Culture"],
      guestRecomendation: ["Natalie Wynn and Will Wilkinson"],
    },
    "The Last of the Just": {
      author: "Andre Schwarz-Bart",
      episodeTitle: ["Noam Chomsky on Anarchism, Human Nature and Joe Biden"],
      guestRecomendation: ["Noam Chomsky"],
    },
    "All God’s Dangers: The Life of Nate Shaw": {
      author: "Theodore Rosengarten",
      episodeTitle: ["Noam Chomsky on Anarchism, Human Nature and Joe Biden"],
      guestRecomendation: ["Noam Chomsky"],
    },
    "Selected essays": {
      author: "Ahad Ha’am",
      episodeTitle: ["Noam Chomsky on Anarchism, Human Nature and Joe Biden"],
      guestRecomendation: ["Noam Chomsky"],
    },
    "The Art of Racing in the Rain": {
      author: "Garth Stein",
      episodeTitle: [
        "That Anxiety You’re Feeling? It’s a Habit You Can Unlearn.",
      ],
      guestRecomendation: ["Judson Brewer"],
    },
    "Barbarian Days": {
      author: "William Finnegan",
      episodeTitle: [
        "That Anxiety You’re Feeling? It’s a Habit You Can Unlearn.",
      ],
      guestRecomendation: ["Judson Brewer"],
    },
    "The Underground Railroad": {
      author: "Colson Whitehead",
      episodeTitle: [
        "That Anxiety You’re Feeling? It’s a Habit You Can Unlearn.",
      ],
      guestRecomendation: ["Judson Brewer"],
    },
    "Where the Wild Things Are": {
      author: "Maurice Sendak",
      episodeTitle: [
        "Why Adults Lose the ‘Beginner’s Mind’",
        "The Senate Is Making a Mockery of Itself",
      ],
      guestRecomendation: ["Alison Gopnik", "Adam Jentleson"],
    },
    "Mary Poppins in the Park": {
      author: "P.L. Travers",
      episodeTitle: ["Why Adults Lose the ‘Beginner’s Mind’"],
      guestRecomendation: ["Alison Gopnik"],
    },
    "The Children of Green Knowe": {
      author: "L.M. Boston",
      episodeTitle: ["Why Adults Lose the ‘Beginner’s Mind’"],
      guestRecomendation: ["Alison Gopnik"],
    },
    "Minor Feelings": {
      author: "Cathy Park Hong",
      episodeTitle: ["Your Success Probably Didn’t Come From Merit Alone"],
      guestRecomendation: ["Tressie McMillan Cottom"],
    },
    "Fearing the Black Body": {
      author: "Sabrina Strings",
      episodeTitle: ["Your Success Probably Didn’t Come From Merit Alone"],
      guestRecomendation: ["Tressie McMillan Cottom"],
    },
    "The Chosen": {
      author: "Jerome Karabel",
      episodeTitle: ["Your Success Probably Didn’t Come From Merit Alone"],
      guestRecomendation: ["Tressie McMillan Cottom"],
    },
    "Roll of Thunder, Hear My Cry": {
      author: "Mildred Taylor",
      episodeTitle: ["Your Success Probably Didn’t Come From Merit Alone"],
      guestRecomendation: ["Tressie McMillan Cottom"],
    },
    "The Culture of Narcissism": {
      author: "Christopher Lasch",
      episodeTitle: ["Did the Boomers Ruin America? A Debate."],
      guestRecomendation: ["Helen Andrews and Jill Filipovic"],
    },
    "Can’t Even": {
      author: "Anne Helen Petersen",
      episodeTitle: ["Did the Boomers Ruin America? A Debate."],
      guestRecomendation: ["Helen Andrews and Jill Filipovic"],
    },
    "Goodnight Moon": {
      author: "Margaret Wise Brown",
      episodeTitle: ["Did the Boomers Ruin America? A Debate."],
      guestRecomendation: ["Helen Andrews and Jill Filipovic"],
    },
    "A Tale of Two Utopias": {
      author: "Paul Berman",
      episodeTitle: ["Did the Boomers Ruin America? A Debate."],
      guestRecomendation: ["Helen Andrews and Jill Filipovic"],
    },
    "Coming of Age on Zoloft": {
      author: "Katherine Sharpe",
      episodeTitle: ["Did the Boomers Ruin America? A Debate."],
      guestRecomendation: ["Helen Andrews and Jill Filipovic"],
    },
    "A Book of Americans": {
      author: "Stephen Vincent Benét",
      episodeTitle: ["Did the Boomers Ruin America? A Debate."],
      guestRecomendation: ["Helen Andrews and Jill Filipovic"],
    },
    "The Bully Pulpit": {
      author: "Doris Kearns Goodwin",
      episodeTitle: ["Humanity’s Awesome, Terrifying Takeover of Evolution"],
      guestRecomendation: ["Walter Isaacson"],
    },
    "The Moviegoer": {
      author: "Walker Percy",
      episodeTitle: ["Humanity’s Awesome, Terrifying Takeover of Evolution"],
      guestRecomendation: ["Walter Isaacson"],
    },
    "The Eighth Day of Creation": {
      author: "Horace Freeland Judson",
      episodeTitle: ["Humanity’s Awesome, Terrifying Takeover of Evolution"],
      guestRecomendation: ["Walter Isaacson"],
    },
    "Winnie the Pooh": {
      author: "A.A. Milne",
      episodeTitle: ["Humanity’s Awesome, Terrifying Takeover of Evolution"],
      guestRecomendation: ["Walter Isaacson"],
    },
    Creation: {
      author: "Steve Grand",
      episodeTitle: [
        "The Author Behind ‘Arrival’ Doesn’t Fear A.I. ‘Look at How We Treat Animals.’",
      ],
      guestRecomendation: ["Ted Chiang"],
    },
    "CivilWarLand in Bad Decline": {
      author: "George Saunders",
      episodeTitle: [
        "The Author Behind ‘Arrival’ Doesn’t Fear A.I. ‘Look at How We Treat Animals.’",
      ],
      guestRecomendation: ["Ted Chiang"],
    },
    "A Visit From the Goon Squad": {
      author: "Jennifer Egan",
      episodeTitle: [
        "The Author Behind ‘Arrival’ Doesn’t Fear A.I. ‘Look at How We Treat Animals.’",
      ],
      guestRecomendation: ["Ted Chiang"],
    },
    "On Fragile Waves": {
      author: "Lily Yu",
      episodeTitle: [
        "The Author Behind ‘Arrival’ Doesn’t Fear A.I. ‘Look at How We Treat Animals.’",
      ],
      guestRecomendation: ["Ted Chiang"],
    },
    "Pilgrim at Tinker Creek": {
      author: "Annie Dillard",
      episodeTitle: [
        "The Author Behind ‘Arrival’ Doesn’t Fear A.I. ‘Look at How We Treat Animals.’",
      ],
      guestRecomendation: ["Ted Chiang"],
    },
    "Grand New Party": {
      author: "Ross Douthat and Reihan Salam",
      episodeTitle: [
        "A Top G.O.P. Pollster on Trump 2024, QAnon and What Republicans Really Want",
      ],
      guestRecomendation: ["Kristen Soltis Anderson"],
    },
    Resonate: {
      author: "Nancy Duarte",
      episodeTitle: [
        "A Top G.O.P. Pollster on Trump 2024, QAnon and What Republicans Really Want",
      ],
      guestRecomendation: ["Kristen Soltis Anderson"],
    },
    "Dragons Love Tacos": {
      author: "Adam Rubin",
      episodeTitle: [
        "A Top G.O.P. Pollster on Trump 2024, QAnon and What Republicans Really Want",
      ],
      guestRecomendation: ["Kristen Soltis Anderson"],
    },
    "The House of Mirth": {
      author: "Edith Wharton",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "A Tree Grows in Brooklyn": {
      author: "Betty Smith",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "Another Brooklyn": {
      author: "Jacqueline Woodson",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "My Ántonia": {
      author: "Willa Cather",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "Then We Came to the End": {
      author: "Joshua Ferris",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "All the King’s Men": {
      author: "Robert Penn Warren",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "Unbought and Unbossed": {
      author: "Shirley Chisholm",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "The Elephant and the Bad Baby": {
      author: "Elfrida Vipont",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "The Church Mouse": {
      author: "Graham Oakley",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "Tar Beach": {
      author: "Faith Ringgold",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "The Highway Rat": {
      author: "Julia Donaldson",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "The Complete 8-Book Ramona Collection": {
      author: "Beverly Cleary",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "When You Reach Me": {
      author: "Rebecca Stead",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "The Watsons Go to Birmingham — 1963": {
      author: "Christopher Paul Curtis",
      episodeTitle: ["Andrew Cuomo and the Performance of Power"],
      guestRecomendation: ["Rebecca Traister"],
    },
    "Classic Indian Cooking": {
      author: "Julie Sahni",
      episodeTitle: [
        "Mark Bittman Cooked Everything. Now He Wants to Change Everything.",
      ],
      guestRecomendation: ["Mark Bittman"],
    },
    "How to Cook Everything Vegetarian": {
      author: "Mark Bittman",
      episodeTitle: [
        "Mark Bittman Cooked Everything. Now He Wants to Change Everything.",
      ],
      guestRecomendation: ["Mark Bittman"],
    },
    "Lord Emsworth": {
      author: "P.G. Wodehouse",
      episodeTitle: [
        "Mark Bittman Cooked Everything. Now He Wants to Change Everything.",
      ],
      guestRecomendation: ["Mark Bittman"],
    },
    "The New Book of Middle Eastern Food": {
      author: "Claudia Roden",
      episodeTitle: [
        "Mark Bittman Cooked Everything. Now He Wants to Change Everything.",
      ],
      guestRecomendation: ["Mark Bittman"],
    },
    "The Old World Kitchen: The Rich Tradition of European Peasant Cooking": {
      author: "Elisabeth Luard",
      episodeTitle: [
        "Mark Bittman Cooked Everything. Now He Wants to Change Everything.",
      ],
      guestRecomendation: ["Mark Bittman"],
    },
    "The Optimist’s Telescope": {
      author: "Bina Venkataraman",
      episodeTitle: [
        "Mark Bittman Cooked Everything. Now He Wants to Change Everything.",
      ],
      guestRecomendation: ["Mark Bittman"],
    },
    "The Wuggie Norple Story": {
      author: "Daniel Manus Pinkwater and Tomie dePaola",
      episodeTitle: [
        "Mark Bittman Cooked Everything. Now He Wants to Change Everything.",
      ],
      guestRecomendation: ["Mark Bittman"],
    },
    LikeWar: {
      author: "P.W. Singer and Emerson T. Brooking",
      episodeTitle: ["How America’s Covid-19 Nightmare Ends"],
      guestRecomendation: ["Ashish Jha"],
    },
    "The Autobiography of Malcolm X": {
      author: "Malcolm X and Alex Haley",
      episodeTitle: ["How America’s Covid-19 Nightmare Ends"],
      guestRecomendation: ["Ashish Jha"],
    },
    "The Very Hungry Caterpillar": {
      author: "Eric Carle",
      episodeTitle: ["How America’s Covid-19 Nightmare Ends"],
      guestRecomendation: ["Ashish Jha"],
    },
    "The Emotional Life of the Toddler": {
      author: "Alicia Lieberman",
      episodeTitle: ["What Does Toxic Stress Do to Children?"],
      guestRecomendation: ["Nadine Burke Harris"],
    },
    "The Woman Behind the New Deal": {
      author: "Kirstin Downey",
      episodeTitle: ["What Does Toxic Stress Do to Children?"],
      guestRecomendation: ["Nadine Burke Harris"],
    },
    "The Runaway Bunny": {
      author: "Margaret Wise Brown",
      episodeTitle: ["What Does Toxic Stress Do to Children?"],
      guestRecomendation: ["Nadine Burke Harris"],
    },
    "Technics and Civilization": {
      author: "Lewis Mumford",
      episodeTitle: ["Stop. Breathe. We Can’t Keep Working Like This."],
      guestRecomendation: ["Cal Newport"],
    },
    "Five Things We Need to Know About Technological Change": {
      author: "Neil Postman",
      episodeTitle: ["Stop. Breathe. We Can’t Keep Working Like This."],
      guestRecomendation: ["Cal Newport"],
    },
    "Andrew Henry’s Meadow": {
      author: "Doris Burn",
      episodeTitle: ["Stop. Breathe. We Can’t Keep Working Like This."],
      guestRecomendation: ["Cal Newport"],
    },
    "The Great Debate": {
      author: "Yuval Levin",
      episodeTitle: [
        "What a More Responsible Republican Party Would Look Like",
      ],
      guestRecomendation: ["Ramesh Ponnuru"],
    },
    "The Upside-Down Constitution": {
      author: "Michael S. Greve",
      episodeTitle: [
        "What a More Responsible Republican Party Would Look Like",
      ],
      guestRecomendation: ["Ramesh Ponnuru"],
    },
    "Popular Crime": {
      author: "Bill James",
      episodeTitle: [
        "What a More Responsible Republican Party Would Look Like",
      ],
      guestRecomendation: ["Ramesh Ponnuru"],
    },
    "The Chronicles of Narnia": {
      author: "C.S. Lewis",
      episodeTitle: [
        "What a More Responsible Republican Party Would Look Like",
      ],
      guestRecomendation: ["Ramesh Ponnuru"],
    },
    "Short Circuiting Policy": {
      author: "Leah Stokes",
      episodeTitle: ["The Texas Crisis Could Become Everyone’s Crisis"],
      guestRecomendation: ["Leah Stokes and David Wallace Wells"],
    },
    "The Lorax": {
      author: "Dr. Seuss",
      episodeTitle: ["The Texas Crisis Could Become Everyone’s Crisis"],
      guestRecomendation: ["Leah Stokes and David Wallace Wells"],
    },
    "Under a White Sky": {
      author: "Elizabeth Kolbert",
      episodeTitle: ["The Texas Crisis Could Become Everyone’s Crisis"],
      guestRecomendation: ["Leah Stokes and David Wallace Wells"],
    },
    "The Ministry for the Future": {
      author: "Kim Stanley Robinson",
      episodeTitle: ["The Texas Crisis Could Become Everyone’s Crisis"],
      guestRecomendation: ["Leah Stokes and David Wallace Wells"],
    },
    "Liquid Reign": {
      author: "Tim Reutemann",
      episodeTitle: ["A Radical Proposal for True Democracy"],
      guestRecomendation: ["Hélène Landemore"],
    },
    "The Three Musketeers": {
      author: "Alexandre Dumas",
      episodeTitle: ["A Radical Proposal for True Democracy"],
      guestRecomendation: ["Hélène Landemore"],
    },
    "The Principles of Representative Government": {
      author: "Bernard Manin",
      episodeTitle: ["A Radical Proposal for True Democracy"],
      guestRecomendation: ["Hélène Landemore"],
    },
    "Mortelle Adèle series": {
      author: "",
      episodeTitle: ["A Radical Proposal for True Democracy"],
      guestRecomendation: ["Hélène Landemore"],
    },
    "Red Cavalry": {
      author: "Isaac Babel",
      episodeTitle: ["What It Means to Be Kind in a Cruel World"],
      guestRecomendation: ["George Saunders"],
    },
    "Stamped From the Beginning": {
      author: "Ibram X. Kendi",
      episodeTitle: ["What It Means to Be Kind in a Cruel World"],
      guestRecomendation: ["George Saunders"],
    },
    Dispatches: {
      author: "Michael Herr",
      episodeTitle: ["What It Means to Be Kind in a Cruel World"],
      guestRecomendation: ["George Saunders"],
    },
    "Patriotic Gore": {
      author: "Edmund Wilson",
      episodeTitle: ["What It Means to Be Kind in a Cruel World"],
      guestRecomendation: ["George Saunders"],
    },
    "In Love With the World": {
      author: "Yongey Mingyur Rinpoche",
      episodeTitle: ["What It Means to Be Kind in a Cruel World"],
      guestRecomendation: ["George Saunders"],
    },
    "Loving; Living; Party Going": {
      author: "Henry Green",
      episodeTitle: ["What It Means to Be Kind in a Cruel World"],
      guestRecomendation: ["George Saunders"],
    },
    "Scrambled Eggs & Whiskey": {
      author: "Hayden Carruth",
      episodeTitle: ["What It Means to Be Kind in a Cruel World"],
      guestRecomendation: ["George Saunders"],
    },
    "Tropic of Squalor": {
      author: "Mary Carr",
      episodeTitle: ["What It Means to Be Kind in a Cruel World"],
      guestRecomendation: ["George Saunders"],
    },
    "They Lift Their Wings to Cry": {
      author: "Brooks Haxton",
      episodeTitle: ["What It Means to Be Kind in a Cruel World"],
      guestRecomendation: ["George Saunders"],
    },
    "The Hundred Dresses": {
      author: "Eleanor Estes and Louis Slobodkin",
      episodeTitle: ["What It Means to Be Kind in a Cruel World"],
      guestRecomendation: ["George Saunders"],
    },
    "Caps for Sale": {
      author: "Esphyr Slobodkina",
      episodeTitle: ["What It Means to Be Kind in a Cruel World"],
      guestRecomendation: ["George Saunders"],
    },
    "Parable of the Sower": {
      author: "Octavia E. Butler",
      episodeTitle: ["What ‘Drained-Pool’ Politics Costs America"],
      guestRecomendation: ["Heather McGhee"],
    },
    "The Color of Law": {
      author: "Richard Rothstein",
      episodeTitle: ["What ‘Drained-Pool’ Politics Costs America"],
      guestRecomendation: ["Heather McGhee"],
    },
    "The Word Collector": {
      author: "Peter H. Reynolds",
      episodeTitle: ["What ‘Drained-Pool’ Politics Costs America"],
      guestRecomendation: ["Heather McGhee"],
    },
    "Double Indemnity": {
      author: "James Cain",
      episodeTitle: ["The Senate Is Making a Mockery of Itself"],
      guestRecomendation: ["Adam Jentleson"],
    },
    "Master of the Senate": {
      author: "Robert Caro",
      episodeTitle: ["The Senate Is Making a Mockery of Itself"],
      guestRecomendation: ["Adam Jentleson"],
    },
    "The Great Gatsby": {
      author: "F. Scott Fitzgerald",
      episodeTitle: ["Should We Dim the Sun? Will We Even Have a Choice?"],
      guestRecomendation: ["Elizabeth Kolbert"],
    },
    "The Complete Stories of Franz Kafka": {
      author: "Franz Kafka",
      episodeTitle: ["Should We Dim the Sun? Will We Even Have a Choice?"],
      guestRecomendation: ["Elizabeth Kolbert"],
    },
    "The Song of the Dodo": {
      author: "David Quammen",
      episodeTitle: ["Should We Dim the Sun? Will We Even Have a Choice?"],
      guestRecomendation: ["Elizabeth Kolbert"],
    },
    "Global Warming (The Complete Briefing)": {
      author: "John Houghton",
      episodeTitle: ["Should We Dim the Sun? Will We Even Have a Choice?"],
      guestRecomendation: ["Elizabeth Kolbert"],
    },
    Cosmicomics: {
      author: "Italo Calvino",
      episodeTitle: ["Should We Dim the Sun? Will We Even Have a Choice?"],
      guestRecomendation: ["Elizabeth Kolbert"],
    },
    "The Phantom Tollbooth": {
      author: "Norton Juster",
      episodeTitle: ["Should We Dim the Sun? Will We Even Have a Choice?"],
      guestRecomendation: ["Elizabeth Kolbert"],
    },
    "On Empire, Liberty, and Reform: Speeches and Letters": {
      author: "Edmund Burke",
      episodeTitle: [
        "An Appalled Republican Considers the Future of the G.O.P.",
      ],
      guestRecomendation: ["Yuval Levin"],
    },
    "Reflections on the Revolution in France": {
      author: "Edmund Burke",
      episodeTitle: [
        "An Appalled Republican Considers the Future of the G.O.P.",
      ],
      guestRecomendation: ["Yuval Levin"],
    },
    "The American Crisis": {
      author: "Thomas Paine",
      episodeTitle: [
        "An Appalled Republican Considers the Future of the G.O.P.",
      ],
      guestRecomendation: ["Yuval Levin"],
    },
    "The Rights of Man": {
      author: "Thomas Paine",
      episodeTitle: [
        "An Appalled Republican Considers the Future of the G.O.P.",
      ],
      guestRecomendation: ["Yuval Levin"],
    },
    "Conservatism: An Invitation to the Great Tradition": {
      author: "Roger Scruton",
      episodeTitle: [
        "An Appalled Republican Considers the Future of the G.O.P.",
      ],
      guestRecomendation: ["Yuval Levin"],
    },
    "Freedom From the Market: America’s Fight to Liberate Itself From the Grip of the Invisible Hand":
      {
        author: "Mike Konczal",
        episodeTitle: [
          "An Appalled Republican Considers the Future of the G.O.P.",
        ],
        guestRecomendation: ["Yuval Levin"],
      },
    "Social Democratic Capitalism": {
      author: "Lane Kenworthy",
      episodeTitle: [
        "An Appalled Republican Considers the Future of the G.O.P.",
      ],
      guestRecomendation: ["Yuval Levin"],
    },
    "The Upswing": {
      author: "Robert Putnam with Shaylyn Romney Garrett",
      episodeTitle: [
        "An Appalled Republican Considers the Future of the G.O.P.",
      ],
      guestRecomendation: ["Yuval Levin"],
    },
    "Normal Accidents": {
      author: "Charles Perrow",
      episodeTitle: ["To Understand This Era, You Need to Think in Systems"],
      guestRecomendation: ["Zeynep Tufekci"],
    },
    "Laundry Files series": {
      author: "Charlie Stross",
      episodeTitle: [
        "What’s Happening to Our Economy Is Like a Natural Disaster",
      ],
      guestRecomendation: ["Paul Krugman"],
    },
    "Merchant Princes series": {
      author: "Charlie Stross",
      episodeTitle: [
        "What’s Happening to Our Economy Is Like a Natural Disaster",
      ],
      guestRecomendation: ["Paul Krugman"],
    },
    "Plagues and Politics": {
      author: "Fitzhugh Mullan",
      episodeTitle: ["The Man With the Plan to Beat the Pandemic"],
      guestRecomendation: ["Vivek Murthy"],
    },
  },
  episodeDateObj: {
    "Trump’s Legal Jeopardy and America’s Political Crossroads": {
      date: new Date("2023-03-28T07:00:00.000Z"),
    },
    "A Radical Way of Thinking About Money": {
      date: new Date("2023-03-24T07:00:00.000Z"),
    },
    "A.I. Is About to Get Much Weirder. Here’s What to Watch For.": {
      date: new Date("2023-03-21T07:00:00.000Z"),
    },
    "Why Silicon Valley Bank Collapsed — And What Comes Next": {
      date: new Date("2023-03-16T07:00:00.000Z"),
    },
    "How China Went From Economic Superstar to Faltering Giant": {
      date: new Date("2023-03-14T07:00:00.000Z"),
    },
    "The Men — and Boys — Are Not Alright": {
      date: new Date("2023-03-10T08:00:00.000Z"),
    },
    "If You Read the G.O.P.’s Anti-Trans Policies, You’ll See What It Really Wants":
      {
        date: new Date("2023-03-07T08:00:00.000Z"),
      },
    "What a Poetic Mind Can Teach Us About How to Live": {
      date: new Date("2023-03-03T08:00:00.000Z"),
    },
    "Our Brains Weren’t Designed for This Kind of Food": {
      date: new Date("2023-02-28T08:00:00.000Z"),
    },
    "Is A.I. Actually Creative? Are We?": {
      date: new Date("2023-02-24T08:00:00.000Z"),
    },
    "A Surprising Theory for Understanding — and Healing — Pain": {
      date: new Date("2023-02-21T08:00:00.000Z"),
    },
    "The Inflation Story Has Changed Significantly. Paul Krugman Breaks It Down.":
      {
        date: new Date("2023-02-17T08:00:00.000Z"),
      },
    "How the $500 Billion Attention Industry Really Works": {
      date: new Date("2023-02-14T08:00:00.000Z"),
    },
    "The Tao of Rick Rubin": {
      date: new Date("2023-02-10T08:00:00.000Z"),
    },
    "How Liberals — Yes, Liberals — Are Hobbling Government": {
      date: new Date("2023-02-07T08:00:00.000Z"),
    },
    "Is This How a Cold War With China Begins?": {
      date: new Date("2023-01-27T08:00:00.000Z"),
    },
    "There’s Been a Revolution in How China Is Governed": {
      date: new Date("2023-01-24T08:00:00.000Z"),
    },
    "How Right-Wing Media Ate the Republican Party": {
      date: new Date("2023-01-20T08:00:00.000Z"),
    },
    "A Revelatory Tour of Martin Luther King Jr.’s Forgotten Teachings": {
      date: new Date("2023-01-16T08:00:00.000Z"),
    },
    "A Guide to the ‘Legal Fictions’ That Create Wealth, Inequality and Economic Crises":
      {
        date: new Date("2023-01-13T08:00:00.000Z"),
      },
    "Dan Savage on Polyamory, Chosen Family and Better Sex": {
      date: new Date("2023-01-10T08:00:00.000Z"),
    },
    "A Skeptical Take on the A.I. Revolution": {
      date: new Date("2023-01-06T08:00:00.000Z"),
    },
    "Sabbath and the Art of Rest": {
      date: new Date("2023-01-03T08:00:00.000Z"),
    },
    "What I’m Thinking About at the End of 2022": {
      date: new Date("2022-12-16T08:00:00.000Z"),
    },
    "Time Is Way Weirder Than You Think": {
      date: new Date("2022-12-13T08:00:00.000Z"),
    },
    "Three Signals We’ve Entered a New Economic Era": {
      date: new Date("2022-12-09T08:00:00.000Z"),
    },
    "There’s Been a Massive Change in Where American Policy Gets Made": {
      date: new Date("2022-12-06T08:00:00.000Z"),
    },
    "A Conservative’s Take on the Chaotic State of the Republican Party": {
      date: new Date("2022-12-02T08:00:00.000Z"),
    },
    "The Hidden Costs of Cheap Meat": {
      date: new Date("2022-11-29T08:00:00.000Z"),
    },
    "This Is Your Brain on ‘Deep Reading.’ It’s Pretty Magnificent.": {
      date: new Date("2022-11-22T08:00:00.000Z"),
    },
    "Bill McKibben on the Power That Could Save the Planet": {
      date: new Date("2022-11-15T08:00:00.000Z"),
    },
    "George Saunders on the ‘Braindead Megaphone’ That Makes Our Politics So Awful":
      {
        date: new Date("2022-11-08T08:00:00.000Z"),
      },
    "Inflation Does More Than Raise Prices. It Destroys Governments.": {
      date: new Date("2022-11-04T07:00:00.000Z"),
    },
    "A Powerful Theory of Why the Far Right Is Thriving Across the Globe": {
      date: new Date("2022-11-01T07:00:00.000Z"),
    },
    "These Political Scientists Surveyed 500,000 Voters. Here Are Their Unnerving Conclusions.":
      {
        date: new Date("2022-10-28T07:00:00.000Z"),
      },
    "A Step-by-Step Guide to Becoming a Trump Enabler": {
      date: new Date("2022-10-25T07:00:00.000Z"),
    },
    "There’s Been a ‘Regime Change’ in How Democrats Think About Elections": {
      date: new Date("2022-10-21T07:00:00.000Z"),
    },
    "A Legendary World-Builder on Multiverses, Revolution and the ‘Souls’ of Cities":
      {
        date: new Date("2022-10-18T07:00:00.000Z"),
      },
    "Rachel Maddow Looks Back on a Wild 14 Years": {
      date: new Date("2022-10-14T07:00:00.000Z"),
    },
    "How the Fed Is ‘Shaking the Entire System’": {
      date: new Date("2022-10-07T07:00:00.000Z"),
    },
    "Interrogating the Stories We Tell About Our Minds": {
      date: new Date("2022-10-04T07:00:00.000Z"),
    },
    "Ethereum’s Founder on What Crypto Can — and Can’t — Do": {
      date: new Date("2022-09-30T07:00:00.000Z"),
    },
    "We Know Shockingly Little About What Makes Humanity Prosper": {
      date: new Date("2022-09-27T07:00:00.000Z"),
    },
    "Why Russia Is Losing the War in Ukraine": {
      date: new Date("2022-09-23T07:00:00.000Z"),
    },
    "The Single Best Guide to Decarbonization I’ve Heard": {
      date: new Date("2022-09-20T07:00:00.000Z"),
    },
    "Now All Biden Has to Do Is Build It": {
      date: new Date("2022-09-16T07:00:00.000Z"),
    },
    "We Build Civilizations on Status. But We Barely Understand It.": {
      date: new Date("2022-09-13T07:00:00.000Z"),
    },
    "The Subtle Art of Appreciating ‘Difficult Beauty’": {
      date: new Date("2022-09-06T07:00:00.000Z"),
    },
    "A Grammy-Nominated Singer Performs and Explores Music’s Deep Power Over Us":
      {
        date: new Date("2022-08-30T07:00:00.000Z"),
      },
    "Why the Evangelical Movement Is in ‘Disarray’ After Dobbs": {
      date: new Date("2022-08-23T07:00:00.000Z"),
    },
    "Is the Remote Work Revolution Flopping, Succeeding or Both?": {
      date: new Date("2022-08-16T07:00:00.000Z"),
    },
    "How Do We Face Loss With Empathy?": {
      date: new Date("2022-08-12T07:00:00.000Z"),
    },
    "Three Sentences That Could Change the World — and Your Life": {
      date: new Date("2022-08-09T07:00:00.000Z"),
    },
    "Gender Is Complicated for All of Us. Let’s Talk About It.": {
      date: new Date("2022-08-05T07:00:00.000Z"),
    },
    "How We Communicate Will Decide Whether Democracy Lives or Dies": {
      date: new Date("2022-07-26T07:00:00.000Z"),
    },
    "A Top Mental Health Expert on Where America Went Wrong": {
      date: new Date("2022-07-22T07:00:00.000Z"),
    },
    "Why Housing Is So Expensive — Particularly in Blue States": {
      date: new Date("2022-07-19T07:00:00.000Z"),
    },
    "A Weird, Wonderful Conversation With Kim Stanley Robinson": {
      date: new Date("2022-07-15T07:00:00.000Z"),
    },
    "Michelle Goldberg Grapples With Feminism After Roe": {
      date: new Date("2022-07-08T07:00:00.000Z"),
    },
    "Liberals Need a Clearer Vision of the Constitution. Here’s What It Could Look Like.":
      {
        date: new Date("2022-07-05T07:00:00.000Z"),
      },
    "The Single Best Guide I’ve Heard to the Supreme Court’s Rightward Shift": {
      date: new Date("2022-07-01T07:00:00.000Z"),
    },
    "The Dobbs Decision Isn’t Just About Abortion. It’s About Power.": {
      date: new Date("2022-06-26T07:00:00.000Z"),
    },
    "Jan. 6 Has Surfaced America’s Disdain for Democracy": {
      date: new Date("2022-06-24T07:00:00.000Z"),
    },
    "Two Years Later, We Still Don’t Understand Long Covid. Why?": {
      date: new Date("2022-06-21T07:00:00.000Z"),
    },
    "The Stock Market Is Plummeting. Welcome to the End of the ‘Everything Bubble.’":
      {
        date: new Date("2022-06-17T07:00:00.000Z"),
      },
    "Is Climate Change a Reason to Avoid Having Children? and Other Listener Questions Answered":
      {
        date: new Date("2022-06-14T07:00:00.000Z"),
      },
    "Why One of America’s Leading Socialists Is Worried About His Movement": {
      date: new Date("2022-06-10T07:00:00.000Z"),
    },
    "Thomas Piketty’s Case for ‘Participatory Socialism’": {
      date: new Date("2022-06-07T07:00:00.000Z"),
    },
    "Why Reihan Salam Thinks ‘Antiracialism’ Could Break the Democrats": {
      date: new Date("2022-06-03T07:00:00.000Z"),
    },
    "A Debate Over What Roe Did — and What Losing It Would Mean": {
      date: new Date("2022-05-31T07:00:00.000Z"),
    },
    "A Conversation With Ada Limón, in Six Poems": {
      date: new Date("2022-05-24T07:00:00.000Z"),
    },
    "The Ethics of Abortion": {
      date: new Date("2022-05-20T07:00:00.000Z"),
    },
    "Anne Applebaum on What Liberals Misunderstand About Authoritarianism": {
      date: new Date("2022-05-17T07:00:00.000Z"),
    },
    "What Does the ‘Post-Liberal Right’ Actually Want?": {
      date: new Date("2022-05-13T07:00:00.000Z"),
    },
    "Donald Trump Didn’t Hijack the G.O.P. He Understood It.": {
      date: new Date("2022-05-06T07:00:00.000Z"),
    },
    "Elon Musk Might Break Twitter. Maybe That’s a Good Thing": {
      date: null,
    },
    "Putin May Not Like How He’s Changed Europe": {
      date: new Date("2022-04-26T07:00:00.000Z"),
    },
    "Emily St. John Mandel on Time Travel, Parenting and the Apocalypse": {
      date: new Date("2022-04-22T07:00:00.000Z"),
    },
    "Can Democrats Turn Their 2022 Around?": {
      date: new Date("2022-04-19T07:00:00.000Z"),
    },
    "A Ukrainian Philsopoher on What Putin Never Understood About Ukraine": {
      date: new Date("2022-04-12T07:00:00.000Z"),
    },
    "Fiona Hill on Whether Ukraine Can Win — and What Happens if Russia Loses (April 8, 2022)":
      {
        date: null,
      },
    "A Viral Case Against Crypto, Explored": {
      date: new Date("2022-04-05T07:00:00.000Z"),
    },
    "Sanctioning Russia Is a Form of War. We Need to Treat It Like One.": {
      date: new Date("2022-04-01T07:00:00.000Z"),
    },
    "I Keep Hoping Larry Summers Is Wrong. What if He’s Not?": {
      date: new Date("2022-03-29T07:00:00.000Z"),
    },
    "Margaret Atwood on ‘The Handmaid’s Tale,’ Totalitarianism and U.F.O.s": {
      date: new Date("2022-03-25T07:00:00.000Z"),
    },
    "How Energy Markets Are Shaping Putin’s Invasion — and the World": {
      date: new Date("2022-03-22T07:00:00.000Z"),
    },
    "A Realist Take on How the Russia-Ukraine War Could End": {
      date: new Date("2022-03-18T07:00:00.000Z"),
    },
    "Timothy Snyder on the Myths That Blinded the West to Putin’s Plans": {
      date: new Date("2022-03-15T07:00:00.000Z"),
    },
    "Putin Is ‘Profoundly Anti-Modern.’ Masha Gessen Explains What That Means for the World":
      {
        date: new Date("2022-03-11T08:00:00.000Z"),
      },
    "Fiona Hill on the War Putin Is Really Fighting": {
      date: new Date("2022-03-08T08:00:00.000Z"),
    },
    "Fareed Zakaria Has a Better Way to Handle Russia —and China (March 4, 2022)":
      {
        date: null,
      },
    "Can the West Stop Russia by Strangling Its Economy?": {
      date: new Date("2022-03-01T08:00:00.000Z"),
    },
    "A Critique of Government That Progressives — Myself Included — Need to Hear":
      {
        date: new Date("2022-02-18T08:00:00.000Z"),
      },
    "What if We Respected Toddlers as Whole People?": {
      date: new Date("2022-02-15T08:00:00.000Z"),
    },
    "It’s Not Your Fault You Can’t Pay Attention. Here’s Why.": {
      date: new Date("2022-02-11T08:00:00.000Z"),
    },
    "Why (Most) Economists Got This Economy So Wrong": {
      date: new Date("2022-02-08T08:00:00.000Z"),
    },
    "Let’s Talk About How Truly Bizarre Our Supreme Court Is": {
      date: new Date("2022-02-04T08:00:00.000Z"),
    },
    "Democrats Chase Shiny Objects. Here’s How They Can Build Real Power.": {
      date: new Date("2022-02-01T08:00:00.000Z"),
    },
    "What We Gain by Enchanting the Objects in Our Lives": {
      date: new Date("2022-01-25T08:00:00.000Z"),
    },
    "What Biden’s Chief of Staff Has Learned, One Year In": {
      date: new Date("2022-01-21T08:00:00.000Z"),
    },
    "The Pandemic Lessons We Clearly Haven’t Learned": {
      date: new Date("2022-01-18T08:00:00.000Z"),
    },
    "Chris Hayes on How Biden Can Have a Better 2022": {
      date: new Date("2022-01-11T08:00:00.000Z"),
    },
    "Timeless Wisdom for Leading a Life of Love, Friendship and Learning": {
      date: new Date("2021-12-14T08:00:00.000Z"),
    },
    "Every 8 Seconds, an American Turns 65. How Do We Care for Everyone?": {
      date: new Date("2021-12-07T08:00:00.000Z"),
    },
    "Predicting the Future Is Possible. These ‘Superforecasters’ Know How.": {
      date: new Date("2021-12-03T08:00:00.000Z"),
    },
    "Why Is Murder Spiking? And Can Cities Address It Without Police?": {
      date: new Date("2021-11-23T08:00:00.000Z"),
    },
    "The Case Against Loving Your Job": {
      date: new Date("2021-11-19T08:00:00.000Z"),
    },
    "How Far-Right Extremism Invaded Mainstream Politics": {
      date: new Date("2021-11-16T08:00:00.000Z"),
    },
    "The Mainstream Media Has a Republican Party Problem": {
      date: new Date("2021-11-12T08:00:00.000Z"),
    },
    "Two Acclaimed Writers on the Art of Revising Your Life": {
      date: new Date("2021-11-09T08:00:00.000Z"),
    },
    "The Life-Altering Differences Between White and Black Debt": {
      date: new Date("2021-11-02T07:00:00.000Z"),
    },
    "Why This Conservative Wants a More Radical Republican Party": {
      date: new Date("2021-10-29T07:00:00.000Z"),
    },
    "What Living ‘At the Edge of Medical Knowledge’ Reveals about American Healthcare":
      {
        date: new Date("2021-10-26T07:00:00.000Z"),
      },
    "What Keeping American Democracy Alive Looks Like": {
      date: new Date("2021-10-22T07:00:00.000Z"),
    },
    "Why Does It Have to Be Slaveholders That We Unite Around?": {
      date: null,
    },
    "A Crypto Optimist Meets a Crypto Skeptic": {
      date: new Date("2021-10-15T07:00:00.000Z"),
    },
    "Lessons on Living Well, From Nick Offerman": {
      date: new Date("2021-10-12T07:00:00.000Z"),
    },
    "What if We’ll Never Truly Be Free?": {
      date: new Date("2021-10-08T07:00:00.000Z"),
    },
    "Warning: This Episode Gets Really Weird About How Much Good You Can Do": {
      date: new Date("2021-10-05T07:00:00.000Z"),
    },
    "‘We’ve Become Too Complicated’: Where Eric Adams Thinks Democrats Went Wrong":
      {
        date: new Date("2021-10-01T07:00:00.000Z"),
      },
    "Richard Powers on What We Can Learn from Trees": {
      date: new Date("2021-09-28T07:00:00.000Z"),
    },
    "We’re on the Precipice of a Post-Roe World": {
      date: new Date("2021-09-21T07:00:00.000Z"),
    },
    "Covid Showed Us What Keynes Always Knew": {
      date: new Date("2021-09-17T07:00:00.000Z"),
    },
    "How Colson Whitehead Writes About Our ‘Big Wild Country’": {
      date: new Date("2021-09-14T07:00:00.000Z"),
    },
    "Can We Change Our Sexual Desires? Should We?": {
      date: new Date("2021-09-07T07:00:00.000Z"),
    },
    "This Isn’t Your Grandpa’s Joe Biden": {
      date: new Date("2021-09-03T07:00:00.000Z"),
    },
    "My Reading Habits, Explained, and Other Questions You Asked": {
      date: new Date("2021-08-31T07:00:00.000Z"),
    },
    "The Foreign Policy Conversation Washington Doesn’t Want to Have": {
      date: new Date("2021-08-27T07:00:00.000Z"),
    },
    "This Conversation Will Change How You Think About Trauma": {
      date: new Date("2021-08-24T07:00:00.000Z"),
    },
    "How Identity Politics Took Over the Republican Party": {
      date: new Date("2021-08-13T07:00:00.000Z"),
    },
    "What Trump Understood About the War on Terror That Others Missed": {
      date: new Date("2021-08-10T07:00:00.000Z"),
    },
    "The Good and Bad News About the Delta Variant": {
      date: new Date("2021-08-06T07:00:00.000Z"),
    },
    "This Conversation Changed the Way I Interact With Technology": {
      date: new Date("2021-08-03T07:00:00.000Z"),
    },
    "What’s Really Behind the 1619 Backlash?": {
      date: new Date("2021-07-30T07:00:00.000Z"),
    },
    "Ross Douthat Has Been ‘Radicalized a Little Bit, Too’": {
      date: new Date("2021-07-27T07:00:00.000Z"),
    },
    "How Blue Cities Became So Outrageously Affordable": {
      date: new Date("2021-07-23T07:00:00.000Z"),
    },
    "This Conversation Will Change How You Think About Thinking": {
      date: new Date("2021-07-20T07:00:00.000Z"),
    },
    "Ibram X. Kendi on What Conservatives—and Liberals—Get Wrong About Antiracism":
      {
        date: new Date("2021-07-16T07:00:00.000Z"),
      },
    "How Octopuses Upend What We Know About Ourselves": {
      date: new Date("2021-07-13T07:00:00.000Z"),
    },
    "Critical Race Theory, Comic Books and the Power of Public Schools": {
      date: new Date("2021-07-09T07:00:00.000Z"),
    },
    "Wilco’s Jeff Tweedy Wants You to Be Bad at Something. It’s for Your Own Good.":
      {
        date: new Date("2021-07-02T07:00:00.000Z"),
      },
    "Why Do We Work So Damn Much?": {
      date: new Date("2021-06-29T07:00:00.000Z"),
    },
    "Republicans Are Setting Off a Doom Loop for Democracy": {
      date: new Date("2021-06-25T07:00:00.000Z"),
    },
    "Sarah Schulman’s Radical Approach to Conflict, Communication and Change": {
      date: new Date("2021-06-22T07:00:00.000Z"),
    },
    "Welcome to the ‘Take This Job and Shove It’ Economy": {
      date: new Date("2021-06-18T07:00:00.000Z"),
    },
    "The Freeing of the American Mind": {
      date: new Date("2021-06-15T07:00:00.000Z"),
    },
    "Sam Altman on the A.I. Revolution, Trillionaires and the Future of Political Power":
      {
        date: new Date("2021-06-11T07:00:00.000Z"),
      },
    "Employers Are Begging for Workers. Maybe That’s a Good Thing.": {
      date: new Date("2021-06-08T07:00:00.000Z"),
    },
    "If ‘All Models Are Wrong,’ Why Do We Give Them So Much Power?": {
      date: new Date("2021-06-04T07:00:00.000Z"),
    },
    "Obama Explains How America Went From ‘Yes We Can’ to ‘MAGA’": {
      date: new Date("2021-06-01T07:00:00.000Z"),
    },
    "Violent Crime Is Spiking. Do Liberals Have an Answer?": {
      date: new Date("2021-05-21T07:00:00.000Z"),
    },
    "The Spectacle of the G.O.P.’s Shrinking Tent": {
      date: new Date("2021-05-18T07:00:00.000Z"),
    },
    "Status Games, Polyamory and the Merits of Meritocracy": {
      date: new Date("2021-05-14T07:00:00.000Z"),
    },
    "Michael Lewis Is Asking the Right Question": {
      date: new Date("2021-05-11T07:00:00.000Z"),
    },
    "Elizabeth Warren on What We Get Wrong About Inequality": {
      date: new Date("2021-05-07T07:00:00.000Z"),
    },
    "How to Have Better Conversations About Hard Things": {
      date: new Date("2021-05-04T07:00:00.000Z"),
    },
    "How Chuck Schumer Plans to Win Over Trump Voters": {
      date: new Date("2021-04-30T07:00:00.000Z"),
    },
    "Shame, Safety and Moving Beyond Cancel Culture": {
      date: new Date("2021-04-27T07:00:00.000Z"),
    },
    "Noam Chomsky on Anarchism, Human Nature and Joe Biden": {
      date: new Date("2021-04-23T07:00:00.000Z"),
    },
    "That Anxiety You’re Feeling? It’s a Habit You Can Unlearn.": {
      date: new Date("2021-04-20T07:00:00.000Z"),
    },
    "Why Adults Lose the ‘Beginner’s Mind’": {
      date: new Date("2021-04-16T07:00:00.000Z"),
    },
    "Your Success Probably Didn’t Come From Merit Alone": {
      date: new Date("2021-04-13T07:00:00.000Z"),
    },
    "Did the Boomers Ruin America? A Debate.": {
      date: new Date("2021-04-06T07:00:00.000Z"),
    },
    "Humanity’s Awesome, Terrifying Takeover of Evolution": {
      date: new Date("2021-04-02T07:00:00.000Z"),
    },
    "The Author Behind ‘Arrival’ Doesn’t Fear A.I. ‘Look at How We Treat Animals.’":
      {
        date: new Date("2021-03-30T07:00:00.000Z"),
      },
    "A Top G.O.P. Pollster on Trump 2024, QAnon and What Republicans Really Want":
      {
        date: new Date("2021-03-26T07:00:00.000Z"),
      },
    "Andrew Cuomo and the Performance of Power": {
      date: new Date("2021-03-19T07:00:00.000Z"),
    },
    "Mark Bittman Cooked Everything. Now He Wants to Change Everything.": {
      date: new Date("2021-03-16T07:00:00.000Z"),
    },
    "How America’s Covid-19 Nightmare Ends": {
      date: new Date("2021-03-12T08:00:00.000Z"),
    },
    "What Does Toxic Stress Do to Children?": {
      date: new Date("2021-03-09T08:00:00.000Z"),
    },
    "Stop. Breathe. We Can’t Keep Working Like This.": {
      date: new Date("2021-03-05T08:00:00.000Z"),
    },
    "What a More Responsible Republican Party Would Look Like": {
      date: new Date("2021-03-02T08:00:00.000Z"),
    },
    "The Texas Crisis Could Become Everyone’s Crisis": {
      date: new Date("2021-02-26T08:00:00.000Z"),
    },
    "A Radical Proposal for True Democracy": {
      date: new Date("2021-02-23T08:00:00.000Z"),
    },
    "What It Means to Be Kind in a Cruel World": {
      date: new Date("2021-02-19T08:00:00.000Z"),
    },
    "What ‘Drained-Pool’ Politics Costs America": {
      date: new Date("2021-02-16T08:00:00.000Z"),
    },
    "The Senate Is Making a Mockery of Itself": {
      date: new Date("2021-02-12T08:00:00.000Z"),
    },
    "Should We Dim the Sun? Will We Even Have a Choice?": {
      date: new Date("2021-02-09T08:00:00.000Z"),
    },
    "An Appalled Republican Considers the Future of the G.O.P.": {
      date: new Date("2021-02-05T08:00:00.000Z"),
    },
    "To Understand This Era, You Need to Think in Systems": {
      date: new Date("2021-02-02T08:00:00.000Z"),
    },
    "What’s Happening to Our Economy Is Like a Natural Disaster": {
      date: new Date("2021-01-29T08:00:00.000Z"),
    },
    "The Man With the Plan to Beat the Pandemic": {
      date: new Date("2021-01-26T08:00:00.000Z"),
    },
  },
};
export default testData;
