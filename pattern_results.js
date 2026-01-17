/* Enhanced Pattern Profiles with Psychological Insights */

const patternProfiles = {
    // Creational Patterns
    singleton: {
        name: 'The Singleton',
        tagline: 'One is all you need',
        personality: 'You are consistent, reliable, and believe in doing things once and doing them right. You value stability and don\'t see the need to reinvent the wheel.',
        
        strengths: [
            'Extremely consistent and dependable - people know what to expect from you',
            'Resource-efficient - you don\'t waste energy on redundancy',
            'Strong sense of identity - you know who you are and stick to it',
            'Excellent at maintaining focus and avoiding distractions'
        ],
        
        challenges: [
            'Can be resistant to change, even when it\'s beneficial',
            'May struggle in situations requiring flexibility or adaptation',
            'Risk of becoming a bottleneck - everyone depends on you',
            'Might miss out on opportunities for growth and reinvention',
            'Can be seen as inflexible or stubborn by others'
        ],
        
        relationships: 'In relationships, you\'re the steady rock. You\'re loyal and committed, but your partners might sometimes wish you\'d try new things or show different sides of yourself.',
        
        career: 'You excel in roles requiring consistency and reliability: quality assurance, system administration, brand management, or any position where being the "single source of truth" is valued.',
        
        growth_advice: 'Practice flexibility without losing your core identity. Remember that evolution doesn\'t mean abandoning who you are - it means becoming a better version of yourself.',
        
        famous_quote: '"I am who I am, and that\'s enough."',
        
        life_motto: 'Why change what already works perfectly?'
    },

    factoryMethod: {
        name: 'The Factory',
        tagline: 'A solution generator',
        personality: 'You\'re creative, adaptable, and always ready to produce exactly what\'s needed. You believe in systems that can generate outcomes rather than fixed answers.',
        
        strengths: [
            'Highly creative and innovative thinker',
            'Excellent at systematizing and creating frameworks',
            'Adaptable to different situations while maintaining structure',
            'Natural problem-solver who can generate multiple solutions'
        ],
        
        challenges: [
            'Can over-engineer simple problems',
            'Might create unnecessary complexity in pursuit of flexibility',
            'Risk of analysis paralysis - too many options can be paralyzing',
            'May struggle with "good enough" and always seek the perfect system'
        ],
        
        relationships: 'You approach relationships like a craftsperson - each one is unique and requires a tailored approach. You\'re great at adapting to different people, though partners might sometimes wish you\'d just "be yourself."',
        
        career: 'Perfect for product management, entrepreneurship, consulting, or R&D - anywhere that requires creating customized solutions at scale.',
        
        growth_advice: 'Not every problem needs a sophisticated system. Sometimes the simple, direct approach is the wisest choice.',
        
        famous_quote: '"Give me the requirements, and I\'ll build you a solution."',
        
        life_motto: 'There\'s a right tool for every job - and I can make it.'
    },

    abstractFactory: {
        name: 'The Abstract Factory',
        tagline: 'The family planner',
        personality: 'You think in ecosystems, not items. You understand that things work best when they\'re designed to work together, and you excel at creating harmony among related elements.',
        
        strengths: [
            'Exceptional at systems thinking and seeing the big picture',
            'Creates coherent, harmonious environments',
            'Excellent at ensuring compatibility and consistency',
            'Natural curator and ecosystem builder'
        ],
        
        challenges: [
            'Can be overwhelmed by mixing different "families" or styles',
            'Might reject good individual options because they don\'t fit the set',
            'Risk of becoming too rigid about what "goes together"',
            'May struggle with eclecticism or spontaneity'
        ],
        
        relationships: 'You want your social circle to mesh well together. You\'re the friend who carefully curates gatherings, ensuring everyone will vibe. Dating someone from a very different background might feel jarring.',
        
        career: 'Interior design, brand management, product line development, urban planning - fields where creating coherent families of related things is key.',
        
        growth_advice: 'Beautiful things can come from unexpected combinations. Don\'t be afraid to mix your metaphors sometimes.',
        
        famous_quote: '"Everything in its place, all working in harmony."',
        
        life_motto: 'A well-coordinated set beats a random collection.'
    },

    builder: {
        name: 'The Builder',
        tagline: 'Step by step, brick by brick',
        personality: 'You\'re methodical, patient, and process-oriented. You understand that great things are constructed carefully over time, not rushed into existence.',
        
        strengths: [
            'Exceptional patience and attention to detail',
            'Excellent at breaking down complex goals into manageable steps',
            'Persistent and consistent in working toward objectives',
            'Creates solid, well-thought-out results'
        ],
        
        challenges: [
            'Can be slow to produce results, frustrating faster-paced personalities',
            'Might get lost in the process and lose sight of the end goal',
            'Risk of perfectionism causing delays',
            'May struggle with spontaneity or rapid pivots'
        ],
        
        relationships: 'You believe relationships are built, not found. You\'re willing to put in the work, but you need a partner who appreciates slow, steady growth over whirlwind romance.',
        
        career: 'Project management, construction, education, therapy - any field where patient, systematic development is valued over quick wins.',
        
        growth_advice: 'Sometimes done is better than perfect. Learn to recognize when your foundation is solid enough to build on.',
        
        famous_quote: '"Rome wasn\'t built in a day, and neither am I."',
        
        life_motto: 'Good things take time, and I have time.'
    },

    prototype: {
        name: 'The Prototype',
        tagline: 'Why reinvent when you can replicate?',
        personality: 'You\'re observant, practical, and believe in learning from what works. You see no shame in copying success - it\'s the smartest form of flattery.',
        
        strengths: [
            'Highly efficient - don\'t reinvent the wheel',
            'Great at pattern recognition and learning from examples',
            'Quick to implement proven solutions',
            'Humble enough to learn from others\' success'
        ],
        
        challenges: [
            'May struggle with true originality or innovation',
            'Risk of copying surface-level without understanding depth',
            'Can feel inauthentic or like an imposter',
            'Might miss opportunities to create something uniquely yours'
        ],
        
        relationships: 'You tend to model your relationships on what you\'ve seen work before. While this can be smart, be careful not to expect your partner to fit a template based on past experiences.',
        
        career: 'Best practices consultant, franchise management, teaching, benchmarking - roles where learning from and replicating success is the core skill.',
        
        growth_advice: 'Use examples as inspiration, not instruction manuals. Your unique circumstances might require unique solutions.',
        
        famous_quote: '"Good artists copy, great artists steal." - Pablo Picasso',
        
        life_motto: 'Success leaves clues - follow them.'
    },

    // Structural Patterns
    adapter: {
        name: 'The Adapter',
        tagline: 'Making incompatibility work',
        personality: 'You\'re a natural mediator and translator. You excel at bridging differences and finding ways to make incompatible things work together.',
        
        strengths: [
            'Exceptional at navigating cultural or personal differences',
            'Creative problem-solver for compatibility issues',
            'Diplomatic and empathetic',
            'Can find common ground where others see only conflict'
        ],
        
        challenges: [
            'Can exhaust yourself constantly translating between others',
            'Might lose your own voice trying to bridge everyone else',
            'Risk of being seen as "fake" or inauthentic',
            'May avoid addressing fundamental incompatibilities'
        ],
        
        relationships: 'You\'re the person who makes unlikely relationships work. You\'re great at adapting to your partner\'s needs, but make sure they\'re adapting to yours too.',
        
        career: 'International relations, couples therapy, legacy system integration, change management - anywhere that requires bridging different worlds.',
        
        growth_advice: 'Not everything needs to be compatible. Sometimes incompatibility is a sign to walk away, not work harder.',
        
        famous_quote: '"I speak both languages, so we can understand each other."',
        
        life_motto: 'There\'s always a way to make it work.'
    },

    bridge: {
        name: 'The Bridge',
        tagline: 'Separating what from how',
        personality: 'You\'re sophisticated in your thinking, understanding that the concept of something is separate from its implementation. You keep your ideals independent from the messy reality.',
        
        strengths: [
            'Can maintain principles across different contexts',
            'Flexible in implementation while staying true to core values',
            'Not trapped by specific methodologies',
            'Excellent at abstraction and high-level thinking'
        ],
        
        challenges: [
            'Can be too abstract, losing touch with practical reality',
            'Might come across as inconsistent to those who don\'t see the pattern',
            'Risk of over-complicating simple situations',
            'May struggle with people who need concrete examples'
        ],
        
        relationships: 'You can maintain the same relationship values across different relationship styles. You\'re comfortable with different "implementations" of love and connection.',
        
        career: 'Architecture (both software and building), philosophy, strategic planning - fields that require maintaining vision while allowing tactical flexibility.',
        
        growth_advice: 'Sometimes the how matters as much as the what. Don\'t be so abstract that you lose the human element.',
        
        famous_quote: '"The map is not the territory, and I know the difference."',
        
        life_motto: 'Principles stay constant; methods can vary.'
    },

    composite: {
        name: 'The Composite',
        tagline: 'Groups and individuals, treated as one',
        personality: 'You see both the forest and the trees, understanding that a whole can be greater than the sum of its parts while still honoring individual elements.',
        
        strengths: [
            'Excellent at organizational thinking and hierarchy',
            'Can zoom in and out between detail and big picture',
            'Great at building scalable systems and structures',
            'Treats individuals and groups with equal respect'
        ],
        
        challenges: [
            'Can get lost in recursive thinking',
            'Might create unnecessary layers of organization',
            'Risk of treating people as interchangeable parts',
            'May struggle with flat, non-hierarchical structures'
        ],
        
        relationships: 'You\'re comfortable with complex family dynamics and friend groups within friend groups. You see relationships as networks, not just one-on-one connections.',
        
        career: 'Organizational development, systems architecture, family therapy, military/corporate hierarchy - anywhere structure matters.',
        
        growth_advice: 'Not everything needs to be organized into hierarchies. Sometimes flat is fine.',
        
        famous_quote: '"We are all individuals, and we are all the collective."',
        
        life_motto: 'Everything is fractal - patterns repeat at every level.'
    },

    decorator: {
        name: 'The Decorator',
        tagline: 'Always adding layers',
        personality: 'You\'re an enhancer and embellisher. You take what exists and make it better, more interesting, more complete. You believe there\'s always room for improvement.',
        
        strengths: [
            'Creative and continuously improving',
            'Great at incremental enhancement',
            'Appreciates and builds upon existing work',
            'Excellent at personalization and customization'
        ],
        
        challenges: [
            'Can over-complicate simple things',
            'Risk of never being satisfied - always adding "just one more thing"',
            'Might lose the original essence under all the additions',
            'Can be seen as unable to leave well enough alone'
        ],
        
        relationships: 'You love to enhance your relationships with surprises, gifts, and special touches. Just make sure your partner appreciates the layers you\'re adding.',
        
        career: 'UX design, event planning, marketing, personal styling - fields where enhancement and customization add value.',
        
        growth_advice: 'Sometimes the original is perfect as-is. Learn to recognize and appreciate completeness.',
        
        famous_quote: '"But wait, there\'s more!"',
        
        life_motto: 'Everything can be improved with the right additions.'
    },

    facade: {
        name: 'The Facade',
        tagline: 'Simplifying the complex',
        personality: 'You\'re the master of making complicated things seem easy. You understand the chaos behind the curtain but present a clean, simple interface to the world.',
        
        strengths: [
            'Excellent at synthesis and simplification',
            'Makes difficult things accessible to others',
            'Great at managing complexity without inflicting it on others',
            'Natural teacher and explainer'
        ],
        
        challenges: [
            'Can hide too much, leaving others unprepared for reality',
            'Might enable learned helplessness in others',
            'Risk of becoming the only one who understands how things work',
            'May struggle to ask for help - you\'re used to providing it'
        ],
        
        relationships: 'You make relationships seem effortless even when you\'re working hard behind the scenes. Your partners might not appreciate the effort you put in because you make it look so easy.',
        
        career: 'Customer service, API design, hospitality, teaching - any role that requires shielding others from complexity.',
        
        growth_advice: 'Let people see the effort sometimes. Vulnerability and authenticity matter too.',
        
        famous_quote: '"Let me handle the details - you just push this button."',
        
        life_motto: 'Complexity is my problem; simplicity is my gift to you.'
    },

    flyweight: {
        name: 'The Flyweight',
        tagline: 'Share and conserve',
        personality: 'You\'re efficient and practical, seeing no need for waste. You understand that many things can share common elements, and you\'re brilliant at resource optimization.',
        
        strengths: [
            'Highly efficient and resourceful',
            'Excellent at finding and utilizing common patterns',
            'Sustainable and waste-conscious',
            'Great at scaling through shared resources'
        ],
        
        challenges: [
            'Can be too frugal, missing opportunities that require investment',
            'Might reuse things past their optimal point',
            'Risk of everything feeling generic or impersonal',
            'May struggle with unique, custom needs'
        ],
        
        relationships: 'You look for partners with common values and interests, understanding that shared foundations make for efficient relationships. Just don\'t make your partners feel like they\'re interchangeable.',
        
        career: 'Sustainability consulting, shared economy platforms, cloud computing, resource management - efficiency-focused roles.',
        
        growth_advice: 'Sometimes the special occasion deserves special treatment. Not everything needs to be optimized.',
        
        famous_quote: '"Why own when we can share?"',
        
        life_motto: 'Waste not, want not - efficiency is elegance.'
    },

    proxy: {
        name: 'The Proxy',
        tagline: 'The gatekeeper and stand-in',
        personality: 'You\'re protective and controlling (in the best way). You believe in managing access, protecting resources, and sometimes standing in for others.',
        
        strengths: [
            'Excellent at protection and security',
            'Great at managing boundaries',
            'Can efficiently represent others',
            'Natural gatekeeper and filter'
        ],
        
        challenges: [
            'Can be overly controlling or protective',
            'Might prevent necessary direct connections',
            'Risk of power-tripping on your gatekeeper role',
            'May struggle with transparency and directness'
        ],
        
        relationships: 'You often find yourself mediating for others or protecting those you love. Make sure you\'re not creating unnecessary distance between people who should connect directly.',
        
        career: 'Executive assistant, security, access management, representation (legal, talent) - roles where controlled access is key.',
        
        growth_advice: 'Not every interaction needs a middleman. Sometimes direct is better.',
        
        famous_quote: '"They\'ll have to go through me first."',
        
        life_motto: 'I stand between you and the chaos.'
    },

    // Behavioral Patterns
    chainOfResponsibility: {
        name: 'The Chain of Responsibility',
        tagline: 'Pass it along until someone can handle it',
        personality: 'You believe in delegation and escalation. You understand that not everything is your problem, and you\'re comfortable passing things to the right person.',
        
        strengths: [
            'Excellent at delegation and routing problems',
            'Not burdened by false responsibility',
            'Good at identifying expertise and escalating appropriately',
            'Efficient at filtering and triaging'
        ],
        
        challenges: [
            'Can pass the buck too readily, avoiding responsibility',
            'Risk of things falling through the cracks',
            'Might frustrate people who want direct answers',
            'May struggle with ownership and accountability'
        ],
        
        relationships: 'You\'re good at bringing the right people into conversations, but your partners might wish you\'d handle more things directly instead of always referring them elsewhere.',
        
        career: 'Customer service management, triage (medical or technical), HR, legal intake - roles requiring efficient routing.',
        
        growth_advice: 'Sometimes the chain stops with you. Develop the courage to be the final handler.',
        
        famous_quote: '"Let me connect you with someone who can help with that."',
        
        life_motto: 'Everything to the right person, nothing wasted on the wrong one.'
    },

    command: {
        name: 'The Command',
        tagline: 'Actions as objects',
        personality: 'You\'re organized and systematic about action. You believe in planning, queuing, and being able to undo. Every action is deliberate and trackable.',
        
        strengths: [
            'Highly organized and methodical',
            'Excellent at planning and sequencing',
            'Great at creating undoable actions and maintaining history',
            'Natural project manager and coordinator'
        ],
        
        challenges: [
            'Can over-plan and under-execute',
            'Might lose spontaneity in pursuit of organization',
            'Risk of analysis paralysis',
            'May frustrate people who just want to "do it now"'
        ],
        
        relationships: 'You want to be able to plan, schedule, and sometimes undo relationship decisions. Your partners might find this too calculated and wish for more spontaneity.',
        
        career: 'Project management, operations, macro automation, process engineering - roles where planned, reversible actions matter.',
        
        growth_advice: 'Not every action needs to be queued and trackable. Sometimes just act.',
        
        famous_quote: '"Let me add that to the queue."',
        
        life_motto: 'Every action is a decision I can track and potentially reverse.'
    },

    interpreter: {
        name: 'The Interpreter',
        tagline: 'Understanding the language',
        personality: 'You see the world as a system of symbols and rules to be decoded. You excel at understanding underlying grammars and translating between different ways of expression.',
        
        strengths: [
            'Exceptional at pattern recognition and rule systems',
            'Great at learning and understanding languages (literal or metaphorical)',
            'Can decode complex symbols and communications',
            'Natural linguist and analyst'
        ],
        
        challenges: [
            'Can over-analyze simple communications',
            'Might miss emotional content while parsing syntax',
            'Risk of being too literal or pedantic',
            'May struggle with ambiguity and context-dependence'
        ],
        
        relationships: 'You try to understand the "language" of your relationships - the rules and patterns. Sometimes your partners just want you to feel, not analyze.',
        
        career: 'Linguistics, code interpretation, music theory, semiotics - fields requiring deep understanding of symbolic systems.',
        
        growth_advice: 'Not everything is a code to crack. Some things are meant to be felt, not understood.',
        
        famous_quote: '"I understand what you\'re really saying."',
        
        life_motto: 'Everything is language; I just need to learn the grammar.'
    },

    iterator: {
        name: 'The Iterator',
        tagline: 'One thing at a time, in order',
        personality: 'You\'re methodical and sequential. You believe in working through things systematically, one item at a time, without skipping or jumping ahead.',
        
        strengths: [
            'Extremely thorough and systematic',
            'Excellent at completing tasks without missing steps',
            'Patient and persistent',
            'Great at processing large amounts of information methodically'
        ],
        
        challenges: [
            'Can be inflexible about sequence and process',
            'Might miss opportunities to skip ahead or prioritize',
            'Risk of being too slow in fast-changing situations',
            'May frustrate people who want to jump to the end'
        ],
        
        relationships: 'You want relationships to develop naturally and sequentially - dating, then commitment, then moving in, etc. Skipping steps feels wrong to you, which can frustrate more spontaneous partners.',
        
        career: 'Quality assurance, auditing, research, data processing - roles where systematic completeness matters.',
        
        growth_advice: 'Sometimes it\'s okay to skip ahead or go out of order. Not everything requires linear processing.',
        
        famous_quote: '"First things first, and second things second."',
        
        life_motto: 'Everything in its proper order, nothing skipped.'
    },

    mediator: {
        name: 'The Mediator',
        tagline: 'The central coordinator',
        personality: 'You\'re the hub in a network of relationships. You understand that direct connections between everyone can be chaotic, so you coordinate and facilitate.',
        
        strengths: [
            'Exceptional at reducing complexity in group dynamics',
            'Natural coordinator and facilitator',
            'Great at preventing cross-talk and confusion',
            'Excellent at seeing the whole system'
        ],
        
        challenges: [
            'Can become a bottleneck - everything goes through you',
            'Might prevent natural direct relationships from forming',
            'Risk of burnout from coordinating everyone',
            'May create dependency - others can\'t function without you'
        ],
        
        relationships: 'You\'re the friend who organizes everything and knows everyone. In romantic relationships, you might try to mediate between your partner and their family/friends when they should handle it directly.',
        
        career: 'Event planning, project coordination, diplomacy, air traffic control - centralized coordination roles.',
        
        growth_advice: 'Let people connect directly sometimes. Your absence shouldn\'t cause the system to fail.',
        
        famous_quote: '"Let me help coordinate this for everyone."',
        
        life_motto: 'Many-to-many is chaos; hub-and-spoke is order.'
    },

    memento: {
        name: 'The Memento',
        tagline: 'Saving states, enabling undo',
        personality: 'You\'re nostalgic and cautious, always wanting the ability to go back. You save moments, states, and configurations, believing that the past might be needed again.',
        
        strengths: [
            'Excellent at preserving important moments and states',
            'Great at learning from history',
            'Provides safety through backups and undo capability',
            'Sentimental in a practical way'
        ],
        
        challenges: [
            'Can be too attached to the past',
            'Might hoard unnecessary information or memories',
            'Risk of living in the past instead of the present',
            'May struggle with letting go and moving forward'
        ],
        
        relationships: 'You remember everything about your relationships - the good and the bad. While this can be sweet, it can also mean you struggle to move past old hurts.',
        
        career: 'Archiving, version control, backup management, historical preservation - roles centered on maintaining retrievable history.',
        
        growth_advice: 'Not everything needs to be saved. Sometimes you need to let the past go to make room for the future.',
        
        famous_quote: '"I can restore us to how we were before."',
        
        life_motto: 'The past is never truly past if I\'ve saved it.'
    },

    observer: {
        name: 'The Observer',
        tagline: 'Always watching, always responding',
        personality: 'You\'re attentive and reactive, believing in staying connected and aware. You notice changes and respond to them, keeping yourself updated with everything that matters.',
        
        strengths: [
            'Highly responsive and attentive',
            'Excellent at maintaining awareness',
            'Great at keeping multiple stakeholders informed',
            'Natural communicator and updater'
        ],
        
        challenges: [
            'Can be overwhelmed by too many subscriptions and notifications',
            'Might react to every change, even unimportant ones',
            'Risk of notification fatigue and burnout',
            'May struggle with focus due to constant monitoring'
        ],
        
        relationships: 'You\'re the attentive partner who notices everything, which is great until it becomes exhausting. You might need to learn that not every emotional fluctuation requires a response.',
        
        career: 'Social media management, monitoring systems, news reporting, trend analysis - roles requiring constant vigilance.',
        
        growth_advice: 'You don\'t need to respond to everything. Some notifications can be ignored.',
        
        famous_quote: '"I\'m aware of that, and I\'ve already adjusted."',
        
        life_motto: 'Stay informed, stay responsive, stay connected.'
    },

    state: {
        name: 'The State',
        tagline: 'Different modes for different moments',
        personality: 'You\'re contextual and mood-dependent. You understand that who you are and how you behave changes based on your internal state, and you\'re okay with that.',
        
        strengths: [
            'Highly adaptable to internal conditions',
            'Honest about moods and states',
            'Can optimize behavior for different contexts',
            'Natural chameleon in different situations'
        ],
        
        challenges: [
            'Can seem inconsistent or unpredictable to others',
            'Might use "state" as an excuse for problematic behavior',
            'Risk of lacking a core consistent identity',
            'May confuse people who want stability'
        ],
        
        relationships: 'Your partners need to understand you have different "modes" - work mode, relax mode, social mode. Some people will find this authentic; others will find it confusing.',
        
        career: 'Performance art, sales, teaching (adapting to student energy), emergency response - roles where state-dependent behavior is valuable.',
        
        growth_advice: 'Some core values should transcend your state. Don\'t let moods excuse everything.',
        
        famous_quote: '"I\'m a different person when I\'m [in this state]."',
        
        life_motto: 'I contain multitudes, depending on my state.'
    },

    strategy: {
        name: 'The Strategy',
        tagline: 'Multiple approaches, one goal',
        personality: 'You\'re flexible and tactical, believing that there are many paths to any destination. You keep multiple strategies ready and switch between them as needed.',
        
        strengths: [
            'Highly adaptable and flexible',
            'Excellent at having backup plans',
            'Great at choosing the right approach for the situation',
            'Natural tactician and problem-solver'
        ],
        
        challenges: [
            'Can seem unprincipled - means change even when ends don\'t',
            'Might switch strategies too often, never committing',
            'Risk of being seen as calculating or manipulative',
            'May overwhelm others with too many options'
        ],
        
        relationships: 'You\'re adaptable in how you show love and solve relationship problems. Just make sure your partners don\'t feel like you\'re "strategizing" rather than feeling.',
        
        career: 'Consulting, coaching, adaptive leadership, game design - roles where choosing the right approach is the core skill.',
        
        growth_advice: 'Sometimes commitment to one approach is more valuable than keeping all options open.',
        
        famous_quote: '"Let\'s try a different approach."',
        
        life_motto: 'There\'s always another way - I just need to find it.'
    },

    templateMethod: {
        name: 'The Template Method',
        tagline: 'Framework first, details later',
        personality: 'You believe in structure and frameworks. You like to define the skeleton of how things should work, then let others (or yourself) fill in the specific details.',
        
        strengths: [
            'Excellent at creating reusable frameworks',
            'Great at teaching and mentoring through structure',
            'Provides consistency while allowing customization',
            'Natural architect and systems designer'
        ],
        
        challenges: [
            'Can be too rigid about the framework',
            'Might constrain creativity with too much structure',
            'Risk of imposing your templates on everyone',
            'May struggle with truly novel situations that break the template'
        ],
        
        relationships: 'You have a template for how relationships should work, which provides stability but might feel restrictive to free-spirited partners.',
        
        career: 'Curriculum design, software architecture, management consulting, franchise systems - roles where defining frameworks is key.',
        
        growth_advice: 'Some situations are truly unique and don\'t fit any template. Be ready to improvise.',
        
        famous_quote: '"Here\'s the framework - fill in your details."',
        
        life_motto: 'Good structure enables creativity within boundaries.'
    },

    visitor: {
        name: 'The Visitor',
        tagline: 'New operations on old structures',
        personality: 'You\'re the outside perspective, bringing new ideas to existing situations. You believe in coming into established structures and adding new capabilities without changing the foundation.',
        
        strengths: [
            'Fresh perspective and new ideas',
            'Great at adding value without disrupting existing systems',
            'Excellent consultant mindset',
            'Can see what insiders miss'
        ],
        
        challenges: [
            'May be seen as an outsider who doesn\'t truly understand',
            'Can disrupt systems you don\'t fully appreciate',
            'Risk of proposing changes that are theoretically sound but practically difficult',
            'Might struggle with deep integration and belonging'
        ],
        
        relationships: 'You bring fresh energy to social groups and relationships, but you might always feel a bit like a visitor rather than a true insider.',
        
        career: 'Management consulting, guest speaking, interim leadership, auditing - roles where external perspective adds value.',
        
        growth_advice: 'Sometimes you need to be an insider, not a visitor. Allow yourself to truly belong.',
        
        famous_quote: '"I\'m just visiting, but here\'s what I see..."',
        
        life_motto: 'The outside view sees what the inside overlooks.'
    }
};

/* Function to generate result page HTML */
function generateResultPage(topPattern, allScores) {
    const profile = patternProfiles[topPattern];
    
    // Calculate secondary patterns (top 3 after primary)
    const sortedPatterns = Object.entries(allScores)
        .sort(([,a], [,b]) => b - a)
        .slice(1, 4)
        .map(([pattern, score]) => ({
            name: patterns[pattern].name,
            score: score
        }));
    
    return `
        <div class="result-container">
            <div class="result-header">
                <h1>Your Design Pattern: ${profile.name}</h1>
                <p class="tagline">${profile.tagline}</p>
            </div>
            
            <div class="personality-section">
                <h2>Your Personality Profile</h2>
                <p class="personality-text">${profile.personality}</p>
            </div>
            
            <div class="strengths-section">
                <h2>💪 Your Strengths</h2>
                <ul class="strengths-list">
                    ${profile.strengths.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
            
            <div class="challenges-section">
                <h2>⚠️ Your Challenges</h2>
                <ul class="challenges-list">
                    ${profile.challenges.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
            
            <div class="life-areas">
                <div class="life-area">
                    <h3>❤️ In Relationships</h3>
                    <p>${profile.relationships}</p>
                </div>
                
                <div class="life-area">
                    <h3>💼 In Career</h3>
                    <p>${profile.career}</p>
                </div>
            </div>
            
            <div class="growth-section">
                <h2>🌱 Growth Advice</h2>
                <p class="growth-text">${profile.growth_advice}</p>
            </div>
            
            <div class="quotes-section">
                <blockquote class="famous-quote">
                    ${profile.famous_quote}
                </blockquote>
                <p class="life-motto"><em>"${profile.life_motto}"</em></p>
            </div>
            
            ${sortedPatterns.length > 0 ? `
                <div class="secondary-patterns">
                    <h2>Your Secondary Patterns</h2>
                    <p class="secondary-intro">You also show tendencies toward:</p>
                    <ul class="secondary-list">
                        ${sortedPatterns.map(p => `<li>${p.name} (${p.score} points)</li>`).join('')}
                    </ul>
                    <p class="secondary-note">These patterns complement your primary style and show the full complexity of your personality.</p>
                </div>
            ` : ''}
        </div>
    `;
}

/* Example CSS for the result page */
const resultPageStyles = `
    .result-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        line-height: 1.6;
        color: #333;
    }
    
    .result-header {
        text-align: center;
        margin-bottom: 3rem;
        padding-bottom: 2rem;
        border-bottom: 3px solid #007bff;
    }
    
    .result-header h1 {
        font-size: 2.5rem;
        color: #007bff;
        margin-bottom: 0.5rem;
    }
    
    .tagline {
        font-size: 1.3rem;
        color: #666;
        font-style: italic;
    }
    
    .personality-section {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 2rem;
        border-radius: 10px;
        margin-bottom: 2rem;
    }
    
    .personality-text {
        font-size: 1.1rem;
        margin: 0;
    }
    
    .strengths-section, .challenges-section {
        margin-bottom: 2rem;
    }
    
    .strengths-section h2 {
        color: #28a745;
    }
    
    .challenges-section h2 {
        color: #dc3545;
    }
    
    .strengths-list, .challenges-list {
        list-style: none;
        padding: 0;
    }
    
    .strengths-list li, .challenges-list li {
        padding: 0.75rem;
        margin: 0.5rem 0;
        border-radius: 5px;
        background: #f8f9fa;
    }
    
    .strengths-list li:before {
        content: "✓ ";
        color: #28a745;
        font-weight: bold;
        margin-right: 0.5rem;
    }
    
    .challenges-list li:before {
        content: "⚡ ";
        color: #dc3545;
        margin-right: 0.5rem;
    }
    
    .life-areas {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 2rem;
    }
    
    .life-area {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 10px;
        border-left: 4px solid #007bff;
    }
    
    .life-area h3 {
        margin-top: 0;
        color: #007bff;
    }
    
    .growth-section {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        padding: 2rem;
        border-radius: 10px;
        margin-bottom: 2rem;
    }
    
    .growth-text {
        font-size: 1.1rem;
        margin: 0;
    }
    
    .quotes-section {
        text-align: center;
        margin: 3rem 0;
    }
    
    .famous-quote {
        font-size: 1.3rem;
        font-style: italic;
        color: #555;
        border-left: 4px solid #007bff;
        padding-left: 1rem;
        margin: 2rem auto;
        max-width: 600px;
    }
    
    .life-motto {
        font-size: 1.2rem;
        color: #007bff;
        font-weight: 500;
    }
    
    .secondary-patterns {
        background: #f8f9fa;
        padding: 2rem;
        border-radius: 10px;
        margin-top: 3rem;
        border-top: 3px solid #007bff;
    }
    
    .secondary-intro {
        color: #666;
    }
    
    .secondary-list {
        list-style: none;
        padding: 0;
    }
    
    .secondary-list li {
        padding: 0.5rem;
        margin: 0.5rem 0;
    }
    
    .secondary-note {
        font-style: italic;
        color: #666;
        margin-top: 1rem;
    }
    
    @media (max-width: 768px) {
        .life-areas {
            grid-template-columns: 1fr;
        }
        
        .result-header h1 {
            font-size: 2rem;
        }
    }
`;