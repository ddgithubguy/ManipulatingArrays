const _ = require('lodash');

const origTopics = [
    [
        {
            "COURSE_TOPIC_ID": "195",
            "FORM_TOPIC_ID": "21",
            "XS_COURSE_TOPIC_NM": "Form 1 here"
        }
    ],
    [
        {
            "COURSE_TOPIC_ID": "195",
            "FORM_TOPIC_ID": "21",
            "XS_COURSE_TOPIC_NM": "Da other form here"
        },
        {
            "COURSE_TOPIC_ID": "122",
            "FORM_TOPIC_ID": "22",
            "XS_COURSE_TOPIC_NM": "Mental Form Here"
        },
        {
            "COURSE_TOPIC_ID": "132",
            "FORM_TOPIC_ID": "23",
            "XS_COURSE_TOPIC_NM": "Pepe form here"
        }
    ],
    [
        {
            "COURSE_TOPIC_ID": "122",
            "FORM_TOPIC_ID": "22",
            "XS_COURSE_TOPIC_NM": "Madre mia here"
        },
        {
            "COURSE_TOPIC_ID": "195",
            "FORM_TOPIC_ID": "21",
            "XS_COURSE_TOPIC_NM": "Back in Form"
        },
        {
            "COURSE_TOPIC_ID": "132",
            "FORM_TOPIC_ID": "23",
            "XS_COURSE_TOPIC_NM": "Communications"
        }
    ]
];

const topics = [];

origTopics.forEach(topic => {
    topics.push(...topic);
})

console.clear();
console.log("\n\ntopics:",topics);

const uniqueTopics = _.uniqWith(topics, _.isEqual)
console.log("\n\nuniqueTopics:",uniqueTopics);

const sortedTopics = _.sortBy(uniqueTopics, 'XS_COURSE_TOPIC_NM');

console.log("\n\nsortedTopics:",sortedTopics);
