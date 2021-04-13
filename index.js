const topics = [
    [
        {
            "COURSE_TOPIC_ID": "195",
            "FORM_TOPIC_ID": "21",
            "XS_COURSE_TOPIC_NM": "Back in Form"
        }
    ],
    [
        {
            "COURSE_TOPIC_ID": "195",
            "FORM_TOPIC_ID": "21",
            "XS_COURSE_TOPIC_NM": "Back in Form"
        },
        {
            "COURSE_TOPIC_ID": "122",
            "FORM_TOPIC_ID": "22",
            "XS_COURSE_TOPIC_NM": "Behaviour Management and Mental Health"
        },
        {
            "COURSE_TOPIC_ID": "132",
            "FORM_TOPIC_ID": "23",
            "XS_COURSE_TOPIC_NM": "Communications"
        }
    ]
]

let newArray = [];

topics.forEach(topic => {
  newArray.push(...topic)
})

console.log(newArray)

