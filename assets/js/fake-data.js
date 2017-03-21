// assets/js/fake-data.js

const DATA = {
    rooms: [{
        id: 1,
        counterpart: {
            id: 2,
            username: 'alice',
        },
        messages: [{
                id: 1,
                text: "Hi!",
                outgoing: true,
                sentAt: "1 hour ago",
            },
            {
                id: 2,
                text: "Hello there!",
                outgoing: false,
                sentAt: "Just now",
            }
        ],
    }, {
        id: 2,
        counterpart: {
            id: 2,
            username: 'john',
        },
        messages: [{
                id: 1,
                text: "Hi!",
                outgoing: true,
                sentAt: "2 hour ago",
            },
            {
                id: 2,
                text: "Lets go Netflix and chill!",
                outgoing: false,
                sentAt: "Just now",
            }
        ],
    }, ],
};

export default DATA;