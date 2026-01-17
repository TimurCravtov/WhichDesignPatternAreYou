class Question {
    constructor(text, choices, patternMap) {
        this.text = text;
        this.choices = choices;
        this.patternMap = patternMap || {}; // Maps choice index to pattern points
    }
}

const patterns = {
    // Creational Patterns
    abstractFactory: { name: 'Abstract Factory', desc: 'You provide interfaces for creating families of related objects.' },
    builder: { name: 'Builder', desc: 'You prefer step-by-step construction of complex objects.' },
    factoryMethod: { name: 'Factory Method', desc: 'You let subclasses decide which class to instantiate.' },
    prototype: { name: 'Prototype', desc: 'You create new objects by copying existing examples.' },
    singleton: { name: 'Singleton', desc: 'You ensure a class has only one instance and provide global access.' },

    // Structural Patterns
    adapter: { name: 'Adapter', desc: 'You bridge the gap between incompatible interfaces.' },
    bridge: { name: 'Bridge', desc: 'You decouple an abstraction from its implementation.' },
    composite: { name: 'Composite', desc: 'You treat individual objects and compositions uniformly.' },
    decorator: { name: 'Decorator', desc: 'You add responsibilities to objects dynamically.' },
    facade: { name: 'Facade', desc: 'You provide a simplified interface to a complex system.' },
    flyweight: { name: 'Flyweight', desc: 'You use sharing to support large numbers of fine-grained objects efficiently.' },
    proxy: { name: 'Proxy', desc: 'You provide a placeholder for another object to control access.' },

    // Behavioral Patterns
    chainOfResponsibility: { name: 'Chain of Responsibility', desc: 'You pass requests along a chain of handlers.' },
    command: { name: 'Command', desc: 'You encapsulate a request as an object.' },
    interpreter: { name: 'Interpreter', desc: 'You define a representation for a language grammar.' },
    iterator: { name: 'Iterator', desc: 'You access elements of a collection sequentially.' },
    mediator: { name: 'Mediator', desc: 'You reduce complex dependencies between objects.' },
    memento: { name: 'Memento', desc: 'You capture and restore an object\'s internal state.' },
    observer: { name: 'Observer', desc: 'You notify multiple objects about state changes.' },
    state: { name: 'State', desc: 'You allow an object to alter its behavior when its internal state changes.' },
    strategy: { name: 'Strategy', desc: 'You define a family of algorithms and make them interchangeable.' },
    templateMethod: { name: 'Template Method', desc: 'You define the skeleton of an algorithm in an operation.' },
    visitor: { name: 'Visitor', desc: 'You represent an operation to be performed on elements of an object structure.' }
};

/* Questions with pattern mapping for each choice */
const questions = [
    new Question(
        'When faced with a problem, you prefer to:',
        ['Keep it simple and focused', 'Create flexible solutions', 'Respond to what others need', 'Switch approaches as needed'],
        { 0: 'singleton', 1: 'factoryMethod', 2: 'observer', 3: 'strategy' }
    ),
    
    new Question(
        "When a holiday approaches, you tend to:",
        [
            "Prepare your home for guests", 
            "Remember how your home looks like, so when party ends, you can restore it from the chaos", 
            "Check in with friends and family", 
            "Choose the best gifts for each person"
        ],
        { 0: 'visitor', 1: 'memento', 2: 'mediator', 3: 'strategy' }
    ),

    new Question(
        'In relationships, you usually:',
        [
            'Try to manage incompatibilities with my partner', 
            'Tend to find partners who have many common traits with your ex', 
            'Don\'t stay for long, always move to another person when possible',
            'I am forever alone',
            'Use a middleman friend to communicate with my partner'
        ],
        { 0: 'adapter', 1: 'flyweight', 2: 'iterator', 3: 'singleton', 4: 'proxy' }
    ),
    
    new Question(
        'When you try to build a new project, you usually:',
        ['Try to reproduce someone else\'s approach', 'Copy everything, but edit some business logic functionalities', 'Import all the libraries and glue them together', 'Swap components in and out'],
        { 0: 'prototype', 1: 'templateMethod', 2: 'facade', 3: 'decorator' }
    ),

    new Question(
        'What\'s your hobby?',
        ['Collecting something', 'Reading books', 'Helping others', 'Playing games'],
        { 0: 'flyweight', 1: 'interpreter', 2: 'observer', 3: 'strategy' }
    ),

    new Question(
        'When tackling a task, you:',
        ['Do it once, perfectly', 'Create a factory to generate solutions', 'Listen and respond to feedback', 'Iterate and refine the process'],
        { 0: 'singleton', 1: 'factoryMethod', 2: 'observer', 3: 'iterator' }
    ),
    
    new Question(
        'Your communication style is:',
        ['Minimal and direct', 'Generative and inventive', 'Always listening and responsive', 'Adaptable to any situation'],
        { 0: 'singleton', 1: 'factoryMethod', 2: 'observer', 3: 'strategy' }
    ),

    new Question(
        'When assembling IKEA furniture, you:',
        [
            'Follow instructions step-by-step, checking each piece carefully',
            'Build the basic frame first, then customize with extra features',
            'Combine multiple furniture pieces into one mega-structure',
            'Keep the instruction manual but hire someone else to do it',
            'Clone your friend\'s already-assembled furniture'
        ],
        { 0: 'builder', 1: 'decorator', 2: 'composite', 3: 'proxy', 4: 'prototype' }
    ),

    new Question(
        'At a restaurant, you typically:',
        [
            'Order the same thing every time',
            'Choose from a specific cuisine family (Italian, Asian, etc.)',
            'Let the waiter recommend based on your mood',
            'Browse the entire menu one item at a time',
            'Ask everyone what they\'re getting before deciding',
            'Change your order based on how hungry you are'
        ],
        { 0: 'singleton', 1: 'abstractFactory', 2: 'strategy', 3: 'iterator', 4: 'observer', 5: 'state' }
    ),

    new Question(
        'Your approach to emails is:',
        [
            'Forward them through a chain until someone handles it',
            'Save every action as a draft you can undo later',
            'Turn each task into a to-do item',
            'Notify everyone on CC about every update',
            'Have an assistant screen them first'
        ],
        { 0: 'chainOfResponsibility', 1: 'memento', 2: 'command', 3: 'observer', 4: 'proxy' }
    ),

    new Question(
        'When shopping online, you:',
        [
            'Use the same account across all platforms',
            'Create new accounts for each store',
            'Make your spouse handle all the ordering',
            'Add layer upon layer of gift wrapping and personalization',
            'Buy from a single marketplace that connects to all stores'
        ],
        { 0: 'singleton', 1: 'factoryMethod', 2: 'proxy', 3: 'decorator', 4: 'facade' }
    ),

    new Question(
        'Your Netflix watching pattern:',
        [
            'Watch one episode at a time, in order',
            'Binge entire seasons based on your current mood',
            'Different streaming service for different types of shows',
            'Let your partner pick, but through your account',
            'Use a family profile that looks like yours but isn\'t'
        ],
        { 0: 'iterator', 1: 'state', 2: 'bridge', 3: 'proxy', 4: 'flyweight' }
    ),

    new Question(
        'When learning a new language, you:',
        [
            'Understand the grammar rules deeply before speaking',
            'Copy phrases from native speakers',
            'Navigate between formal and casual speech seamlessly',
            'Keep a dictionary but let Google Translate do the work',
            'Break down each sentence structure systematically'
        ],
        { 0: 'interpreter', 1: 'prototype', 2: 'bridge', 3: 'proxy', 4: 'builder' }
    ),

    new Question(
        'At a party, you are the person who:',
        [
            'Introduces people who should meet each other',
            'Stands by the door greeting everyone who enters',
            'Tells stories, adding new embellishments each time',
            'Copies the vibe of whoever you\'re talking to',
            'Acts differently when drunk vs. sober'
        ],
        { 0: 'mediator', 1: 'visitor', 2: 'decorator', 3: 'prototype', 4: 'state' }
    ),

    new Question(
        'Your workspace organization:',
        [
            'One folder for everything',
            'Nested folders within folders within folders',
            'Let your OS handle file organization',
            'Share duplicates of the same file everywhere to save memory',
            'Keep adding more monitors and accessories to your setup',
            'Have a backup of every file state you\'ve ever saved'
        ],
        { 0: 'singleton', 1: 'composite', 2: 'facade', 3: 'flyweight', 4: 'decorator', 5: 'memento' }
    ),

    new Question(
        'When giving advice, you:',
        [
            'Pass the question to someone more qualified',
            'Give different answers depending on your current state of mind',
            'Provide a step-by-step framework they can customize',
            'Tell them what you did in a similar situation',
            'Help them explore multiple approaches'
        ],
        { 0: 'chainOfResponsibility', 1: 'state', 2: 'templateMethod', 3: 'prototype', 4: 'strategy' }
    ),

    new Question(
        'Your phone upgrade strategy:',
        [
            'Stick with one brand forever',
            'Create the same setup with different hardware',
            'Switch between Android and iOS freely',
            'Add cases, screen protectors, and accessories constantly',
            'Use your old phone as a remote control'
        ],
        { 0: 'singleton', 1: 'flyweight', 2: 'bridge', 3: 'decorator', 4: 'adapter' }
    ),

    new Question(
        'When planning a trip, you:',
        [
            'Use the same travel agent for everything',
            'Build a detailed itinerary step by step',
            'Book flights, hotels, and cars through one app',
            'Clone your friend\'s successful trip',
            'Subscribe to alerts and adjust plans when prices drop',
            'Make decisions differently when traveling solo vs. with others'
        ],
        { 0: 'singleton', 1: 'builder', 2: 'facade', 3: 'prototype', 4: 'observer', 5: 'state' }
    ),

    new Question(
        'Your approach to passwords:',
        [
            'One password for everything',
            'Generate a new secure password for each account',
            'Use a password manager that handles all the complexity',
            'Reuse the same password pattern with slight variations',
            'Keep a log of every password you\'ve ever used, just in case'
        ],
        { 0: 'singleton', 1: 'factoryMethod', 2: 'facade', 3: 'flyweight', 4: 'memento' }
    ),

    new Question(
        'When teaching someone, you:',
        [
            'Give them the basic framework and let them fill in the details',
            'Walk them through your own learning journey',
            'Connect them with different experts for different topics',
            'Turn each lesson into an actionable task',
            'Go through each concept one by one systematically'
        ],
        { 0: 'templateMethod', 1: 'prototype', 2: 'mediator', 3: 'command', 4: 'iterator' }
    ),

    new Question(
        'Your coffee order:',
        [
            'Same drink, same place, every day',
            'Customize with different milks, syrups, and temperatures',
            'Let the barista surprise you',
            'Different drink depending on time of day or stress level',
            'Order for the whole office through one person'
        ],
        { 0: 'singleton', 1: 'decorator', 2: 'strategy', 3: 'state', 4: 'proxy' }
    ),

    new Question(
        'When something breaks in your home, you:',
        [
            'Call the same handyman for everything',
            'Google it and try to interpret the repair instructions',
            'Buy an adapter to make it work with what you have',
            'Replace it with an exact copy of the old one',
            'Duct tape layers of fixes until it works'
        ],
        { 0: 'singleton', 1: 'interpreter', 2: 'adapter', 3: 'prototype', 4: 'decorator' }
    ),

    new Question(
        'Your photo management strategy:',
        [
            'Everything in one camera roll',
            'Organized into albums, within albums, within albums',
            'Cloud service handles it all automatically',
            'Same few photos reused everywhere',
            'Can restore any deleted photo from backups'
        ],
        { 0: 'singleton', 1: 'composite', 2: 'facade', 3: 'flyweight', 4: 'memento' }
    ),

    new Question(
        'When someone asks for help, you:',
        [
            'Help directly if you can, otherwise pass them along',
            'Give them a template to work from',
            'Check with others before responding',
            'Create a task list for them to execute',
            'Adapt your help style to each person'
        ],
        { 0: 'chainOfResponsibility', 1: 'templateMethod', 2: 'mediator', 3: 'command', 4: 'strategy' }
    ),

    new Question(
        'Your social media presence:',
        [
            'One account to rule them all',
            'Different persona on each platform',
            'Post differently based on your current life phase',
            'Repost the same content across all platforms',
            'Subscribe to everyone and engage with all updates',
            'Let a bot schedule and post for you'
        ],
        { 0: 'singleton', 1: 'bridge', 2: 'state', 3: 'flyweight', 4: 'observer', 5: 'proxy' }
    ),

    new Question(
        'When moving to a new home, you:',
        [
            'Set it up exactly like your old place',
            'Keep adding furniture and decorations over time',
            'Hire a company to handle the whole process',
            'Treat each room differently but keep them loosely connected',
            'Build the layout piece by piece with a plan'
        ],
        { 0: 'prototype', 1: 'decorator', 2: 'facade', 3: 'bridge', 4: 'builder' }
    )
];


/* Helper to calculate pattern scores from answers */
function calculatePatternScores(answers) {
    const scores = {};
    Object.keys(patterns).forEach(p => scores[p] = 0);
    
    answers.forEach((choiceIdx, qIdx) => {
        const pattern = questions[qIdx].patternMap[choiceIdx];
        if (pattern) scores[pattern]++;
    });
    
    return scores;
}

function getTopPattern(scores) {
    return Object.keys(scores).reduce((top, p) => 
        scores[p] > scores[top] ? p : top
    );
}