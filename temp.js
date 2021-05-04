// should be sent after successful login
var userData = {
        id: 1,
        username: "",
        email: "",
        phone: "",
        balance: 0.00
}

var users = [
    {
        id: 1,
        username: '',
        email: '',
        phone: ''
    }
]

var tournaments = [
    {
        id: 1,
        status: "upcoming/ongoing/etc.",
        name: '',
        venue: '',
        starting_date: '',
        ending_date: '',
        prize: 0.00,
        edition: 12,
        logo: "default.png"
    }
]

var referees = [
    {
        id: 1,
        first_name: '',
        last_name: '',
        middle_name: '',
        started_at: '',
    }
]

var coaches = [
    {
        id: 1,
        first_name: '',
        last_name: '',
        middle_name: '',
        started_at: '',
    }
]

var players = [
    {
        id: 1,
        first_name: '',
        last_name: '',
        middle_name: '',
        birthday: '',
        country: '',
        coach: "(name)",
        gender: '',
        photo: "default.png",
        ranking: 1,
        handedness: 'left-handed',
        weight: 65,
        height: 175
    }
]

var userFavoritePlayers = [
    {
        id: 1,
        first_name: '',
        last_name: '',
        middle_name: '',
        birthday: '',
        country: '',
        coach: "(name)",
        gender: '',
        photo: "default.png",
        ranking: 1,
        handedness: 'left-handed',
        weight: 65,
        height: 175
    }
]

var news = [
    {
        id: 1,
        title: '',
        content: '',
        author: '',
        created_at: '',
        image: '',
        tags: ['', '']
    }
]

var courts = [
    {
        id: 1,
        name: '',
        capacity: 10,
        location: '',
        ground_type: ''
    }
]

var events = [
    {
        id: 1,
        type: ''
    }
]

// All matches
var matches = [
    {
        id: 1,
        referee: '',
        court: '',
        event: '',
        date_time: '',
        venue: '',
        player_1: '',
        player_2: '',
        status: 'ongoing/upcoming'
    }
]

// Bets for particular match
var matchBets = [
    {
        id: 1,
        title: ''
    }
]

// Bet options for a particular bet
var betOptions = [
    {
        id: 1,
        name: '',
        odds
    }
]

var userBetHistory = [
    {
        id: 1,
        bet_title: '',
        bet_option: '',
        amount: '',
        won: false,
        odds: 2.58
    }
]