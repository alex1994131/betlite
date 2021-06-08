const collapseItems = [
    {
        id:1,
        icon: "M1.705 6.337l2.839 2.767a.542.542 0 01.155.48l-.67 3.906 3.508-1.845a.542.542 0 01.505 0l3.508 1.845-.67-3.907a.542.542 0 01.155-.479l2.839-2.767-3.923-.57a.54.54 0 01-.407-.296L7.79 1.917 6.035 5.47a.54.54 0 01-.408.296l-3.922.57zm10.564 8.684a.545.545 0 01-.252-.062L7.79 12.736 3.562 14.96a.543.543 0 01-.786-.57l.808-4.708-3.42-3.334a.54.54 0 01.3-.924l4.726-.687L7.304.453a.542.542 0 01.971 0l2.114 4.283 4.726.687a.54.54 0 01.3.924l-3.42 3.334.807 4.707a.541.541 0 01-.533.633z",
        viewBox:'0 0 16 16',
        type: "Featured sports",
        color:'rgb(10, 183, 88)',
        
    },
    {
        id:2,        
        icon: "M14.716 5.832a.382.382 0 01.255-.475l.485-.146a.38.38 0 11.22.728l-.485.148a.382.382 0 01-.475-.255zm-.398-.725c.145-.268.385-.464.677-.551a1.12 1.12 0 01.868.087c.17.091.298.23.399.386a.375.375 0 00-.088.363c.04.131.148.208.27.241a1.127 1.127 0 01-1.662 1.022 1.112 1.112 0 01-.397-.388.38.38 0 00.09-.364.38.38 0 00-.276-.253 1.125 1.125 0 01.119-.543zm-.694 1.433l.019-.003a1.896 1.896 0 002.229.933 1.907 1.907 0 001.342-2.011.376.376 0 00.174-.43.374.374 0 00-.38-.264 1.895 1.895 0 00-2.23-.938 1.892 1.892 0 00-1.13.921 1.892 1.892 0 00-.216 1.091.378.378 0 00-.173.431c.051.165.202.27.365.27zm4.314 9.994l-1.403 1.404c-.292.294-.756.363-1.132.212l.466-.467a.385.385 0 000-.54.383.383 0 00-.539 0l-.523.525-9.297-9.3a1.032 1.032 0 010-1.46l1.403-1.405c.2-.202.466-.302.728-.302.265 0 .53.1.73.302l9.567 9.57a1.034 1.034 0 010 1.46zM1.79 2.463l.68-.681.016-.001h.124l3.474 3.474-.823.822L1.79 2.604a.1.1 0 010-.142zm16.687 12.072L8.91 4.965c-.591-.591-1.572-.664-2.262-.222L3.15 1.244a.883.883 0 00-1.218-.001l-.68.68a.86.86 0 00-.252.61c0 .23.09.447.251.61l3.496 3.498c-.194.292-.3.636-.3.996 0 .48.187.931.524 1.269l9.565 9.568a.003.003 0 01.001.003h.002a1.78 1.78 0 001.266.523c.48 0 .93-.187 1.268-.523l1.404-1.405c.336-.337.523-.788.523-1.269 0-.48-.187-.93-.523-1.268z",
        viewBox:'0 0 20 20',
        type: "Cricket",
        color:'rgb(255, 179, 25)',
        tab : [
            {
                index : 1,
                title : 'In-play'
            },
            {
                index : 2,
                title : 'Next 24hrs'
            },
            {
                index : 3,
                title : 'Future'
            },
            {
                index : 4,
                title : 'Lengues'
            },
            {
                index : 5,
                title : 'News'
            },
        ],
        data:[
            {
                index:1,
                sportCountry:'Top Events - France - Ligue 1',
                title1:'WINNER',
                title2:'HCP',
                title3:'TOT',
                events:[
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                ]
            },
            {
                index:2,
                sportCountry:'Austria - Steirer Cup',
                title1:'WINNER',
                title2:'HCP',
                title3:'TOT',
                events:[
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                ]
            },
            {
                index:3,
                sportCountry:'France - Ligue 1',
                title1:'WINNER',
                title2:'HCP',
                title3:'TOT',
                events:[
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                ]
            },
            {
                index:4,
                sportCountry:'USA - Major League Soccer',
                title1:'WINNER',
                title2:'HCP',
                title3:'TOT',
                events:[
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                ]
            },
        ]
    },
    {
        id:3,
        icon: "M16.887 10l1.082-1.873c.142.602.225 1.227.225 1.873a8.16 8.16 0 01-.225 1.874L16.887 10zm-3.431 5.987h2.12a8.166 8.166 0 01-3.187 1.85l1.067-1.85zm-6.912 0l1.067 1.85a8.17 8.17 0 01-3.187-1.85h2.12zm0-11.974h-2.12a8.186 8.186 0 013.187-1.85l-1.067 1.85zm6.912 0l-1.068-1.85a8.178 8.178 0 013.187 1.85h-2.119zm2.734 5.584h-2.734l-1.379-2.389 1.379-2.389h2.734l1.379 2.39-1.38 2.388zm-7.57 3.599h2.734l1.392 2.41-1.366 2.368H8.62l-1.379-2.39 1.38-2.388zm-4.864-2.793h2.759l1.379 2.39-1.379 2.388H3.756l-1.378-2.388 1.378-2.39zm2.759-5.584l1.379 2.39-1.379 2.388H3.756L2.378 7.208 3.756 4.82h2.759zm4.839 1.986H8.62L7.241 4.416l1.38-2.389h2.759l1.366 2.367-1.392 2.411zM8.62 12.39L7.241 10l1.38-2.389h2.733L12.733 10l-1.379 2.39H8.62zm4.836 2.79l-1.379-2.387 1.379-2.39h2.734l1.379 2.39-1.38 2.388h-2.733zM1.806 10c0-.622.076-1.226.207-1.81L3.058 10l-1.044 1.81A8.167 8.167 0 011.806 10zM10 1c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z",
        viewBox:'0 0 20 20',
        type: "Soccer",
        color:'rgb(211, 48, 48)',
        tab : [
            {
                index : 1,
                title : 'In-play'
            },
            {
                index : 2,
                title : 'Next 24hrs'
            },
            {
                index : 3,
                title : 'Future'
            },
            {
                index : 4,
                title : 'Lengues'
            },
            {
                index : 5,
                title : 'News'
            },
        ],
        data:[
            {
                index:1,
                sportCountry:'Top Events - France - Ligue 1',
                title1:'WINNER',
                title2:'HCP',
                title3:'TOT',
                events:[
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                ]
            },
            {
                index:2,
                sportCountry:'Austria - Steirer Cup',
                title1:'WINNER',
                title2:'HCP',
                title3:'TOT',
                events:[
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                ]
            },
            {
                index:3,
                sportCountry:'France - Ligue 1',
                title1:'WINNER',
                title2:'HCP',
                title3:'TOT',
                events:[
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                ]
            },
            {
                index:4,
                sportCountry:'USA - Major League Soccer',
                title1:'WINNER',
                title2:'HCP',
                title3:'TOT',
                events:[
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                ]
            },
        ]
    },
    {
        id:4,
        icon: "M10.403 12.841v-2.438h7.77a8.143 8.143 0 01-1.96 4.924 8.89 8.89 0 00-5.81-2.486zm0 .806a8.1 8.1 0 015.257 2.263 8.157 8.157 0 01-5.257 2.265v-4.528zm-.806 0v4.528a8.16 8.16 0 01-5.26-2.266 8.115 8.115 0 015.26-2.262zm0-7.293A8.094 8.094 0 014.339 4.09a8.165 8.165 0 015.258-2.265v4.528zm.806 0V1.826a8.166 8.166 0 015.26 2.266 8.115 8.115 0 01-5.26 2.262zm7.77 3.243h-7.77V7.16a8.912 8.912 0 005.813-2.484 8.141 8.141 0 011.958 4.921zM3.786 4.674A8.887 8.887 0 009.597 7.16v2.437h-7.77a8.145 8.145 0 011.958-4.923zm-1.959 5.729h7.771v2.438a8.904 8.904 0 00-5.813 2.485 8.15 8.15 0 01-1.958-4.923zm14.716 5.759A8.962 8.962 0 0019 10c0-4.963-4.037-9-9-9a8.967 8.967 0 00-6.501 2.794c-.006.004-.012.002-.017.006-.007.007-.004.018-.01.023A8.96 8.96 0 001 10c0 4.964 4.037 9 9 9 2.55 0 4.85-1.07 6.49-2.78.01-.008.023-.004.032-.013.013-.013.01-.031.02-.045z",
        viewBox:'0 0 20 20',
        type: "Basketball",
        color:'rgb(179, 128, 74)',
        tab : [
            {
                index : 1,
                title : 'In-play'
            },
            {
                index : 2,
                title : 'Next 24hrs'
            },
            {
                index : 3,
                title : 'Future'
            },
            {
                index : 4,
                title : 'Lengues'
            },
            {
                index : 5,
                title : 'News'
            },
        ],
        data:[
            {
                index:1,
                sportCountry:'USA - NBA',
                title1:'WINNER',
                title2:'HCP',
                title3:'TOT',
                events:[
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                ]
            },
            {
                index:1,
                sportCountry:'USA - NBA',
                title1:'WINNER',
                title2:'HCP',
                title3:'TOT',
                events:[
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                    {
                        teamName1 : 'Brooklyn Nets',
                        teamName2 : 'Toronto Raptors',
                        startTime : '10/09 17:20',
                        scoreBoard1 : 1,
                        scoreBoard2 : 2,
                        WINNER:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        HCP:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        TOT:[
                            {
                                name : 0.5,
                                odd : 1,
                            },
                            {
                                name : 0.5,
                                odd : 1,
                            }
                        ],
                        OtherMarkets:10
                    },
                ]
            },
        ]
    },
    {
        id:5,
        viewBox:'0 0 20 20',
        icon: "M6.798 7.39a9.64 9.64 0 00-.393-1.051.403.403 0 00-.737.328c.139.31.257.631.36.961a.402.402 0 10.77-.237zm.352 3.339c.03-.37.034-.752.022-1.123a.404.404 0 00-.42-.387c-.223.01-.403.219-.386.42.014.337.007.684-.02 1.025v.032a.404.404 0 00.804.033zM1.806 10c0 2.194.873 4.186 2.282 5.658.11-.113.224-.223.327-.342a.403.403 0 01.614.522c-.112.132-.237.25-.357.374a8.157 8.157 0 0010.655.002 8.97 8.97 0 01-.582-.654.404.404 0 01.067-.566.402.402 0 01.565.069c.164.207.349.404.533.596a8.155 8.155 0 000-11.32c-.103.11-.212.212-.31.327a.403.403 0 01-.613-.525c.107-.125.226-.237.34-.356a8.155 8.155 0 00-10.654.002c.196.205.392.41.567.631a.404.404 0 01-.631.5c-.162-.203-.341-.39-.52-.578A8.161 8.161 0 001.805 10zm1.987 6.52c-.009-.009-.005-.02-.013-.031A8.968 8.968 0 011 10c0-4.963 4.037-9 9-9 2.393 0 4.565.945 6.178 2.473.006.005.017.003.024.01.004.004.002.011.006.016A8.97 8.97 0 0119 10c0 4.963-4.036 9-9 9-2.385 0-4.55-.94-6.162-2.459-.014-.01-.032-.007-.045-.02zm2.467-2.557c.165-.33.31-.681.433-1.039a.403.403 0 00-.762-.262 7.887 7.887 0 01-.393.944.4.4 0 00.183.54c.2.099.44.017.54-.183zm6.936-1.382c.107.356.239.71.39 1.056a.403.403 0 00.737-.326 8.332 8.332 0 01-.354-.96.405.405 0 00-.79.115c0 .038.005.078.017.115zM12.82 10c0 .125.002.248.007.37.011.222.2.395.422.386a.402.402 0 00.384-.422 8.082 8.082 0 01.023-1.022.393.393 0 00-.369-.435.404.404 0 00-.435.369c-.021.249-.032.5-.032.754zm.494-2.95c.123-.353.269-.704.435-1.038a.402.402 0 11.723.357 8.15 8.15 0 00-.396.943.401.401 0 01-.511.25.404.404 0 01-.25-.512z",
        type: "Baseball",
        color:'rgb(114, 85, 80)',
        tab : [
            {
                index : 1,
                title : 'In-play'
            },
            {
                index : 2,
                title : 'Next 24hrs'
            },
            {
                index : 3,
                title : 'Future'
            },
            {
                index : 4,
                title : 'Lengues'
            },
            {
                index : 5,
                title : 'News'
            },
        ]
    },
    {
        id:6,        
        icon: "M4.338 15.91A8.13 8.13 0 0110 13.626a8.11 8.11 0 015.659 2.283A8.159 8.159 0 0110 18.194a8.161 8.161 0 01-5.662-2.285zM3.784 4.673A8.907 8.907 0 0010 7.18a8.933 8.933 0 006.216-2.503 8.151 8.151 0 01-.003 10.65A8.908 8.908 0 0010 12.82c-2.34 0-4.532.892-6.217 2.504a8.154 8.154 0 01.001-10.65zm11.877-.582A8.132 8.132 0 0110 6.373c-2.14 0-4.13-.813-5.661-2.282a8.156 8.156 0 0111.322 0zm.88 12.069A8.95 8.95 0 0019 10c0-4.963-4.037-9-9-9a8.965 8.965 0 00-6.501 2.794c-.006.003-.013.002-.018.005-.006.007-.004.018-.01.024A8.961 8.961 0 001 10c0 4.963 4.036 9 9 9 2.55 0 4.85-1.07 6.49-2.781.008-.008.022-.004.032-.013.013-.012.01-.031.02-.045z",
        viewBox:'0 0 20 20',
        type: "Tennis",
        color:'rgb(179, 128, 74)',
    },
    {
        id:7,        
        icon: "M14.623 14.623c-2.166 2.167-4.662 3.08-6.863 3.41l-2.61-2.612 2.14-2.138.617.617a.402.402 0 00.286.118.403.403 0 00.285-.689l-.618-.618 1.237-1.237.618.618a.399.399 0 00.57.001.402.402 0 000-.57l-.618-.62 1.236-1.236.62.619a.401.401 0 00.57-.002.404.404 0 000-.571l-.618-.618 1.237-1.235.618.618a.402.402 0 00.285.117.403.403 0 00.285-.689l-.618-.617 2.14-2.142 2.615 2.615c-.33 2.2-1.244 4.693-3.413 6.86zM2.665 17.906l1.913-1.914 2.154 2.155a15.16 15.16 0 01-4.067-.241zm-.573-.57a15.13 15.13 0 01-.243-4.073l2.157 2.159-1.914 1.915zm3.284-11.96c2.167-2.167 4.663-3.08 6.864-3.41l2.61 2.61-2.138 2.141-.62-.618a.404.404 0 00-.57.572l.617.618-1.236 1.235-.618-.617a.402.402 0 00-.57 0 .402.402 0 000 .571l.618.617-1.237 1.238-.618-.62a.404.404 0 10-.57.57l.617.62-1.236 1.236-.619-.618a.404.404 0 00-.57.572l.617.618-2.14 2.14-2.614-2.615c.33-2.198 1.245-4.691 3.413-6.86zm11.96-3.284l-1.914 1.914-2.154-2.155a15.17 15.17 0 014.068.241zm.572.57c.167.814.378 2.295.243 4.073l-2.157-2.158 1.914-1.914zm.611-.915a.387.387 0 00-.1-.165V1.58l-.003-.001a.392.392 0 00-.164-.1c-.076-.022-7.804-2.315-13.446 3.326-5.642 5.642-3.349 13.369-3.325 13.447.02.063.054.119.1.164v.002c0 .002.002 0 .003.002.045.045.1.08.164.098.034.011 1.618.482 3.864.48 2.745 0 6.48-.701 9.582-3.804 5.642-5.642 3.349-13.37 3.325-13.447z",
        viewBox:'0 0 20 20',
        type: "American Football",
        color:'rgb(255, 179, 25)',
        tab : [
            {
                index : 1,
                title : 'In-play'
            },
            {
                index : 2,
                title : 'Next 24hrs'
            },
            {
                index : 3,
                title : 'Future'
            },
            {
                index : 4,
                title : 'Lengues'
            },
        ]
    },
    {
        id:8,        
        icon: "M14.623 14.623c-2.166 2.167-4.662 3.08-6.863 3.41l-2.61-2.612 2.14-2.138.617.617a.402.402 0 00.286.118.403.403 0 00.285-.689l-.618-.618 1.237-1.237.618.618a.399.399 0 00.57.001.402.402 0 000-.57l-.618-.62 1.236-1.236.62.619a.401.401 0 00.57-.002.404.404 0 000-.571l-.618-.618 1.237-1.235.618.618a.402.402 0 00.285.117.403.403 0 00.285-.689l-.618-.617 2.14-2.142 2.615 2.615c-.33 2.2-1.244 4.693-3.413 6.86zM2.665 17.906l1.913-1.914 2.154 2.155a15.16 15.16 0 01-4.067-.241zm-.573-.57a15.13 15.13 0 01-.243-4.073l2.157 2.159-1.914 1.915zm3.284-11.96c2.167-2.167 4.663-3.08 6.864-3.41l2.61 2.61-2.138 2.141-.62-.618a.404.404 0 00-.57.572l.617.618-1.236 1.235-.618-.617a.402.402 0 00-.57 0 .402.402 0 000 .571l.618.617-1.237 1.238-.618-.62a.404.404 0 10-.57.57l.617.62-1.236 1.236-.619-.618a.404.404 0 00-.57.572l.617.618-2.14 2.14-2.614-2.615c.33-2.198 1.245-4.691 3.413-6.86zm11.96-3.284l-1.914 1.914-2.154-2.155a15.17 15.17 0 014.068.241zm.572.57c.167.814.378 2.295.243 4.073l-2.157-2.158 1.914-1.914zm.611-.915a.387.387 0 00-.1-.165V1.58l-.003-.001a.392.392 0 00-.164-.1c-.076-.022-7.804-2.315-13.446 3.326-5.642 5.642-3.349 13.369-3.325 13.447.02.063.054.119.1.164v.002c0 .002.002 0 .003.002.045.045.1.08.164.098.034.011 1.618.482 3.864.48 2.745 0 6.48-.701 9.582-3.804 5.642-5.642 3.349-13.37 3.325-13.447z",
        viewBox:'0 0 20 20',
        type: "Australian Rules",
        color:'rgb(255, 179, 25)',
    },
    {
        id:9,        
        icon: "M4.39 14.323h.319v-.32a.36.36 0 11.72 0v.32h.32a.36.36 0 010 .72h-.32v.32a.36.36 0 01-.36.36H4.75v.32a.36.36 0 11-.72 0v-.32h-.319a.36.36 0 010-.72h.319v-.32a.36.36 0 01.36-.36zm13.383-5.638l-.549.55-.348.348c-.686.686-2.08.45-3.047-.517l-2.907-2.913c-.966-.967-1.203-2.364-.518-3.05l.348-.348.55-.55a1.732 1.732 0 011.228-.51c.444 0 .89.171 1.228.51l4.015 4.02a1.742 1.742 0 010 2.46zm-5.411 5.418c-.653.654-1.804.654-2.456 0l-4.017-4.02a1.727 1.727 0 01-.505-1.23c0-.466.18-.902.505-1.23l3.414-3.417c.014.827.386 1.733 1.109 2.457l2.909 2.912c.72.722 1.623 1.102 2.448 1.118l-3.407 3.41zm-2.888 1.494a.632.632 0 01-.87 0L4.4 11.385a.612.612 0 01-.18-.434c0-.166.064-.32.197-.453a.606.606 0 01.434-.18.61.61 0 01.436.18l4.205 4.211c.116.115.179.27.179.436a.63.63 0 01-.196.452zM5.55 18.13l-3.68-3.684 2.283-2.286 3.68 3.684-2.283 2.286zM4.285 5.975c-.014-1.138.96-2.026 1.902-2.884.233-.214.46-.42.663-.623a1.12 1.12 0 011.585 0c.437.437.437 1.15 0 1.587L5.381 7.113c-.143.144-.26.306-.361.476-.445-.414-.728-1.007-.735-1.614zm13.998-.26l-4.016-4.02c-.925-.927-2.55-.927-3.475 0l-.549.55-.348.348-.434.435a1.823 1.823 0 00-.516-1.07 1.84 1.84 0 00-2.603 0 18.23 18.23 0 01-.64.6c-1.01.92-2.155 1.964-2.137 3.427.01.891.458 1.773 1.165 2.317a2.5 2.5 0 00-.066.551c0 .263.05.515.128.757-.324.016-.649.14-.902.395-.434.433-.485 1.084-.197 1.595l-2.587 2.59a.36.36 0 000 .51l4.188 4.194a.36.36 0 00.51 0l2.586-2.59c.202.113.417.191.642.191.348 0 .697-.135.968-.406a1.32 1.32 0 00.38-.886c.24.078.492.129.754.129.657 0 1.275-.255 1.736-.718l4.515-4.52.348-.349.55-.55c.463-.464.717-1.08.717-1.74 0-.659-.254-1.276-.717-1.74z",
        viewBox:'0 0 20 20',
        type: "Boxing",
        color:'rgb(211, 48, 48)',
    },
    {
        id:10,        
        icon: "M9.59 10.647h.82c1.802 0 3.48.891 4.488 2.385l.098.146a1.63 1.63 0 002.666.054l.053-.07a1.62 1.62 0 00.317-.968v-.934c0-2.862-.64-5.746-1.852-8.34a1.42 1.42 0 00-1.282-.816h-.26c-.4 0-.782.17-1.05.465a2.547 2.547 0 01-1.882.835H8.295a2.545 2.545 0 01-1.883-.835 1.419 1.419 0 00-1.05-.465h-.26c-.547 0-1.05.32-1.282.817a19.838 19.838 0 00-1.851 8.34v.934c0 .35.11.684.318.967l.052.071a1.629 1.629 0 002.665-.056l.098-.145a5.408 5.408 0 014.488-2.385zm6.758 4.374a2.753 2.753 0 01-2.284-1.214l-.099-.146a4.285 4.285 0 00-3.555-1.889h-.82a4.285 4.285 0 00-3.555 1.89l-.098.145a2.752 2.752 0 01-2.285 1.214c-.872 0-1.702-.419-2.22-1.121l-.052-.071a2.74 2.74 0 01-.537-1.635v-.934c0-3.026.677-6.074 1.958-8.816A2.55 2.55 0 015.103.98h.26c.716 0 1.402.304 1.882.834.268.296.651.465 1.05.465h3.41c.4 0 .782-.17 1.05-.465A2.545 2.545 0 0114.638.98h.26A2.55 2.55 0 0117.2 2.444a20.971 20.971 0 011.957 8.816v.934c0 .593-.186 1.158-.537 1.635l-.053.071a2.767 2.767 0 01-2.219 1.121z",
        viewBox:'0 0 20 16',
        type: "Call of Duty",
        color:'rgb(92, 51, 207)',
    },
    {
        id:11,        
        icon: "M9.59 10.647h.82c1.802 0 3.48.891 4.488 2.385l.098.146a1.63 1.63 0 002.666.054l.053-.07a1.62 1.62 0 00.317-.968v-.934c0-2.862-.64-5.746-1.852-8.34a1.42 1.42 0 00-1.282-.816h-.26c-.4 0-.782.17-1.05.465a2.547 2.547 0 01-1.882.835H8.295a2.545 2.545 0 01-1.883-.835 1.419 1.419 0 00-1.05-.465h-.26c-.547 0-1.05.32-1.282.817a19.838 19.838 0 00-1.851 8.34v.934c0 .35.11.684.318.967l.052.071a1.629 1.629 0 002.665-.056l.098-.145a5.408 5.408 0 014.488-2.385zm6.758 4.374a2.753 2.753 0 01-2.284-1.214l-.099-.146a4.285 4.285 0 00-3.555-1.889h-.82a4.285 4.285 0 00-3.555 1.89l-.098.145a2.752 2.752 0 01-2.285 1.214c-.872 0-1.702-.419-2.22-1.121l-.052-.071a2.74 2.74 0 01-.537-1.635v-.934c0-3.026.677-6.074 1.958-8.816A2.55 2.55 0 015.103.98h.26c.716 0 1.402.304 1.882.834.268.296.651.465 1.05.465h3.41c.4 0 .782-.17 1.05-.465A2.545 2.545 0 0114.638.98h.26A2.55 2.55 0 0117.2 2.444a20.971 20.971 0 011.957 8.816v.934c0 .593-.186 1.158-.537 1.635l-.053.071a2.767 2.767 0 01-2.219 1.121z",
        viewBox:'0 0 20 16',
        type: "CS:GO",
        color:'rgb(92, 51, 207)',
    },
    {
        id:12,        
        icon: "M15.695 8.48a.737.737 0 00-.41-.125h-2.25L14.254 6.5a.71.71 0 00.101-.555.967.967 0 00-.878-.922c-4.825-.449-7.418 1.836-7.528 1.93a.967.967 0 00-.125 1.305l.406.539a4.523 4.523 0 00-1.675-.324 4.53 4.53 0 00-4.516 4.523 4.524 4.524 0 004.52 4.52c1.605 0 3.015-.84 3.82-2.106l.004.54a.967.967 0 00.969.96h.007a.969.969 0 00.961-.976l-.039-4.676c0-.207-.07-.41-.195-.578L7.988 7.902c.793-.437 2.219-1.004 4.258-1l-1.168 1.782a.73.73 0 00.61 1.129h.59a4.507 4.507 0 00-1.317 3.183 4.525 4.525 0 004.52 4.52A4.524 4.524 0 0020 12.996a4.524 4.524 0 00-4.305-4.516zM4.56 16.3a3.312 3.312 0 01-3.309-3.304 3.313 3.313 0 013.309-3.309 3.313 3.313 0 013.308 3.31A3.312 3.312 0 014.56 16.3zm10.921 0a3.308 3.308 0 01-3.304-3.304 3.31 3.31 0 012.422-3.184h.691a.737.737 0 00.39-.113A3.31 3.31 0 0118.79 13c0 1.82-1.484 3.3-3.309 3.3zm.395-10.366c.941 0 1.707-.766 1.707-1.707 0-.942-.766-1.707-1.707-1.707-.941 0-1.707.765-1.707 1.707 0 .941.766 1.707 1.707 1.707z",
        viewBox:'0 0 20 20',
        type: "Cycling",
        color:'rgb(255, 179, 25)',
    },
    {
        id:13,        
        icon: "M15.75 8.609l-1.073-.322a.439.439 0 00.266-.116l2.682-2.682a.43.43 0 00.115-.265l.322 1.074-2.311 2.31zm-7.036 3.716l-2.91 2.908-1.038-1.038 2.91-2.909a.591.591 0 01.815 0l.223.222a.576.576 0 010 .817zm-4.36 3.544l-.223-.223a.58.58 0 010-.817l.012-.011 1.038 1.039-.011.012a.58.58 0 01-.817 0zm9.349-13.932l1.072.323a.433.433 0 00-.264.114l-2.683 2.683a.44.44 0 00-.115.266l-.322-1.073 2.312-2.313zm.738 5.49l-1.293.047.527-.527a.44.44 0 00-.622-.622l-.527.526.047-1.293 2.439-2.438 1.94-.072-.072 1.94-2.439 2.438zm4.54-1.13l-1.15-3.834c0-.006-.006-.01-.009-.015a.43.43 0 00-.1-.169.455.455 0 00-.178-.106l-.007-.004-3.833-1.15a.437.437 0 00-.438.11l-2.684 2.684a.437.437 0 00-.11.438l1.074 3.58-2.672 2.672c-.565-.372-1.324-.336-1.82.16l-3.545 3.544c-.497.497-.532 1.255-.16 1.82l-2.22 2.221a.44.44 0 00.623.622l2.22-2.22c.242.16.51.267.79.267.372 0 .746-.142 1.031-.426l3.543-3.544c.497-.497.533-1.255.16-1.82l2.673-2.673 3.58 1.074a.436.436 0 00.438-.112l2.684-2.681a.441.441 0 00.11-.439z",
        viewBox:'0 0 20 20',
        type: "Darts",
        color:'rgb(211, 48, 48)',
    },
    {
        id:14,        
        icon: "M9.59 10.647h.82c1.802 0 3.48.891 4.488 2.385l.098.146a1.63 1.63 0 002.666.054l.053-.07a1.62 1.62 0 00.317-.968v-.934c0-2.862-.64-5.746-1.852-8.34a1.42 1.42 0 00-1.282-.816h-.26c-.4 0-.782.17-1.05.465a2.547 2.547 0 01-1.882.835H8.295a2.545 2.545 0 01-1.883-.835 1.419 1.419 0 00-1.05-.465h-.26c-.547 0-1.05.32-1.282.817a19.838 19.838 0 00-1.851 8.34v.934c0 .35.11.684.318.967l.052.071a1.629 1.629 0 002.665-.056l.098-.145a5.408 5.408 0 014.488-2.385zm6.758 4.374a2.753 2.753 0 01-2.284-1.214l-.099-.146a4.285 4.285 0 00-3.555-1.889h-.82a4.285 4.285 0 00-3.555 1.89l-.098.145a2.752 2.752 0 01-2.285 1.214c-.872 0-1.702-.419-2.22-1.121l-.052-.071a2.74 2.74 0 01-.537-1.635v-.934c0-3.026.677-6.074 1.958-8.816A2.55 2.55 0 015.103.98h.26c.716 0 1.402.304 1.882.834.268.296.651.465 1.05.465h3.41c.4 0 .782-.17 1.05-.465A2.545 2.545 0 0114.638.98h.26A2.55 2.55 0 0117.2 2.444a20.971 20.971 0 011.957 8.816v.934c0 .593-.186 1.158-.537 1.635l-.053.071a2.767 2.767 0 01-2.219 1.121z",
        viewBox:'0 0 20 20',
        type: "Dota 2",
        color:'rgb(92, 51, 207)',
    },

    {
        id:15,        
        icon: "M16.887 10l1.082-1.873c.142.602.225 1.227.225 1.873a8.16 8.16 0 01-.225 1.874L16.887 10zm-3.431 5.987h2.12a8.166 8.166 0 01-3.187 1.85l1.067-1.85zm-6.912 0l1.067 1.85a8.17 8.17 0 01-3.187-1.85h2.12zm0-11.974h-2.12a8.186 8.186 0 013.187-1.85l-1.067 1.85zm6.912 0l-1.068-1.85a8.178 8.178 0 013.187 1.85h-2.119zm2.734 5.584h-2.734l-1.379-2.389 1.379-2.389h2.734l1.379 2.39-1.38 2.388zm-7.57 3.599h2.734l1.392 2.41-1.366 2.368H8.62l-1.379-2.39 1.38-2.388zm-4.864-2.793h2.759l1.379 2.39-1.379 2.388H3.756l-1.378-2.388 1.378-2.39zm2.759-5.584l1.379 2.39-1.379 2.388H3.756L2.378 7.208 3.756 4.82h2.759zm4.839 1.986H8.62L7.241 4.416l1.38-2.389h2.759l1.366 2.367-1.392 2.411zM8.62 12.39L7.241 10l1.38-2.389h2.733L12.733 10l-1.379 2.39H8.62zm4.836 2.79l-1.379-2.387 1.379-2.39h2.734l1.379 2.39-1.38 2.388h-2.733zM1.806 10c0-.622.076-1.226.207-1.81L3.058 10l-1.044 1.81A8.167 8.167 0 011.806 10zM10 1c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z",
        viewBox:'0 0 20 20',
        type: "Gaelic Football",
        color:'rgb(211, 48, 48)',
    },
    {
        id:16,        
        icon: "M8.277 11.557c0 .268-.22.486-.49.486a.488.488 0 01-.492-.486c0-.268.22-.485.491-.485s.491.217.491.485zm3.928 0c0 .268-.22.486-.491.486a.488.488 0 01-.491-.486c0-.268.22-.485.49-.485.272 0 .492.217.492.485zm-1.964 0c0 .268-.22.486-.491.486a.488.488 0 01-.49-.486c0-.268.219-.485.49-.485s.49.217.49.485zM6.314 9.616c0 .268-.22.485-.491.485a.488.488 0 01-.491-.485c0-.268.22-.486.49-.486.272 0 .492.218.492.486zm1.963 0c0 .268-.22.485-.49.485a.488.488 0 01-.492-.485c0-.268.22-.486.491-.486s.491.218.491.486zm5.891 0c0 .268-.22.485-.49.485a.488.488 0 01-.492-.485c0-.268.22-.486.491-.486s.491.218.491.486zm-1.963 0c0 .268-.22.485-.491.485a.488.488 0 01-.491-.485c0-.268.22-.486.49-.486.272 0 .492.218.492.486zm-1.964 0c0 .268-.22.485-.491.485a.488.488 0 01-.49-.485c0-.268.219-.486.49-.486s.49.218.49.486zM8.277 3.79c0 .268-.22.485-.49.485a.488.488 0 01-.492-.485c0-.268.22-.485.491-.485s.491.217.491.485zM6.314 5.733c0 .267-.22.485-.491.485a.488.488 0 01-.491-.486c0-.267.22-.485.49-.485.272 0 .492.218.492.486zm0 1.941c0 .268-.22.485-.491.485a.488.488 0 01-.491-.485c0-.268.22-.485.49-.485.272 0 .492.217.492.485zm1.963-1.942c0 .268-.22.486-.49.486a.488.488 0 01-.492-.486c0-.267.22-.485.491-.485s.491.218.491.486zm0 1.942c0 .268-.22.485-.49.485a.488.488 0 01-.492-.485c0-.268.22-.485.491-.485s.491.217.491.485zm3.928-3.883c0 .268-.22.485-.491.485a.488.488 0 01-.491-.485c0-.268.22-.485.49-.485.272 0 .492.217.492.485zm.981 1.942c0-.268.22-.486.491-.486s.491.218.491.486c0 .267-.22.485-.49.485a.488.488 0 01-.492-.486zm.982 1.941c0 .268-.22.485-.49.485a.488.488 0 01-.492-.485c0-.268.22-.485.491-.485s.491.217.491.485zm-1.963-1.942c0 .268-.22.486-.491.486a.488.488 0 01-.491-.486c0-.267.22-.485.49-.485.272 0 .492.218.492.486zm0 1.942c0 .268-.22.485-.491.485a.488.488 0 01-.491-.485c0-.268.22-.485.49-.485.272 0 .492.217.492.485zM10.24 3.791c0 .268-.22.485-.491.485a.488.488 0 01-.49-.485c0-.268.219-.485.49-.485s.49.217.49.485zm0 1.942c0 .267-.22.485-.491.485a.488.488 0 01-.49-.486c0-.267.219-.485.49-.485s.49.218.49.486zm0 1.941c0 .268-.22.485-.491.485a.488.488 0 01-.49-.485c0-.268.219-.485.49-.485s.49.217.49.485zM9.75 13.62c-3.316 0-6.014-2.668-6.014-5.946 0-3.278 2.698-5.946 6.014-5.946 3.316 0 6.014 2.668 6.014 5.946 0 3.278-2.698 5.946-6.014 5.946zm0 3.526l-.723-2.838c.238.026.479.04.723.04s.485-.014.723-.04l-.723 2.838zm6.75-9.472C16.5 3.994 13.472 1 9.75 1S3 3.994 3 7.674c0 3.165 2.24 5.815 5.233 6.497l1.16 4.554A.367.367 0 009.75 19a.367.367 0 00.356-.275l1.16-4.554C14.26 13.49 16.5 10.84 16.5 7.674z",
        viewBox:'0 0 20 20',
        type: "Golf",
        color:'rgb(179, 128, 74)',
    },
    {
        id:17,        
        icon: "M17.262 10.438a.85.85 0 00-.871-.872h-3.356L10.707 8.11a.88.88 0 00-.402-.406.803.803 0 00-.45-.125L7.076 5.84V2.61a.85.85 0 00-.872-.872.85.85 0 00-.87.871v3.727c0 .25.124.621.495.746l2.774 1.777-5.75 9.774c-.25.37-.125.992.37 1.242.126.125.372.125.497.125.371 0 .621-.125.746-.496l1.46-2.485h5.122c.371 0 .621-.25.867-.624.125-.372.125-.743-.125-.993l-2.777-3.625 1.133-1.925 2.27 1.457c.124.125.37.125.495.125h3.477c.5-.004.996-.5.875-.996zm-8.082 4.84H6.95l.96-1.633 1.27 1.632zm.5-9.813c0 1.117.87 2.113 1.988 1.988a1.964 1.964 0 001.988-1.988 1.964 1.964 0 00-1.988-1.988A1.964 1.964 0 009.68 5.465zm-.746-2.73c.746 0 1.367-.622 1.367-1.368C10.3.621 9.68 0 8.934 0S7.567.621 7.567 1.367s.62 1.367 1.367 1.367z",
        viewBox:'0 0 20 20',
        type: "Handball",
        color:'rgb(92, 51, 207)',
    },
    {
        id:18,        
        icon: "M12.447 14.28c-4.135 2.727-7.742 3.501-8.396 2.492L2.69 14.668c.134.015.263.033.411.033.532 0 1.156-.094 1.867-.282 1.732-.46 3.785-1.437 5.786-2.754 1.999-1.319 3.712-2.823 4.826-4.24.579-.736.958-1.405 1.146-1.996l1.357 2.096c.652 1.009-1.502 4.032-5.636 6.755zm-9.53-3.5c1.06-1.35 2.707-2.793 4.635-4.063 2.981-1.964 5.687-2.914 7.212-2.914.59 0 1.003.143 1.184.425.316.487-.058 1.494-1 2.693-1.061 1.348-2.707 2.791-4.635 4.062-1.93 1.271-3.9 2.212-5.55 2.65-1.469.386-2.531.326-2.846-.16-.316-.488.058-1.495 1-2.693zm15.84-3.7l-2.134-3.298c-1.182-1.824-5.782-.203-9.51 2.254-2 1.317-3.713 2.823-4.826 4.239-1.222 1.552-1.583 2.81-1.044 3.642l2.133 3.3c.353.545 1.01.783 1.858.783 1.993 0 5.038-1.314 7.653-3.038 3.727-2.456 7.052-6.053 5.87-7.882z",
        viewBox:'0 0 20 20',
        type: "Ice Hockey",
        color:'rgb(15, 117, 189)',
        tab : [
            {
                index : 1,
                title : 'In-play'
            },
            {
                index : 2,
                title : 'Next 24hrs'
            },
            {
                index : 3,
                title : 'Future'
            },
            {
                index : 4,
                title : 'Lengues'
            },
            {
                index : 5,
                title : 'News'
            },
        ]
    },
    {
        id:19,
        viewBox:'0 0 20 20',
        icon: "M10.403 12.841v-2.438h7.77a8.143 8.143 0 01-1.96 4.924 8.89 8.89 0 00-5.81-2.486zm0 .806a8.1 8.1 0 015.257 2.263 8.157 8.157 0 01-5.257 2.265v-4.528zm-.806 0v4.528a8.16 8.16 0 01-5.26-2.266 8.115 8.115 0 015.26-2.262zm0-7.293A8.094 8.094 0 014.339 4.09a8.165 8.165 0 015.258-2.265v4.528zm.806 0V1.826a8.166 8.166 0 015.26 2.266 8.115 8.115 0 01-5.26 2.262zm7.77 3.243h-7.77V7.16a8.912 8.912 0 005.813-2.484 8.141 8.141 0 011.958 4.921zM3.786 4.674A8.887 8.887 0 009.597 7.16v2.437h-7.77a8.145 8.145 0 011.958-4.923zm-1.959 5.729h7.771v2.438a8.904 8.904 0 00-5.813 2.485 8.15 8.15 0 01-1.958-4.923zm14.716 5.759A8.962 8.962 0 0019 10c0-4.963-4.037-9-9-9a8.967 8.967 0 00-6.501 2.794c-.006.004-.012.002-.017.006-.007.007-.004.018-.01.023A8.96 8.96 0 001 10c0 4.964 4.037 9 9 9 2.55 0 4.85-1.07 6.49-2.78.01-.008.023-.004.032-.013.013-.013.01-.031.02-.045z",
        type: "eNBA",
        color:'rgb(179, 128, 74)',
        tab : [
            {
                index : 1,
                title : 'In-play'
            },
            {
                index : 2,
                title : 'Next 24hrs'
            },
            {
                index : 3,
                title : 'Future'
            },
            {
                index : 4,
                title : 'Lengues'
            },
            {
                index : 5,
                title : 'News'
            },
        ]
    },
    {
        id:21,        
        icon: "M16.887 10l1.082-1.873c.142.602.225 1.227.225 1.873a8.16 8.16 0 01-.225 1.874L16.887 10zm-3.431 5.987h2.12a8.166 8.166 0 01-3.187 1.85l1.067-1.85zm-6.912 0l1.067 1.85a8.17 8.17 0 01-3.187-1.85h2.12zm0-11.974h-2.12a8.186 8.186 0 013.187-1.85l-1.067 1.85zm6.912 0l-1.068-1.85a8.178 8.178 0 013.187 1.85h-2.119zm2.734 5.584h-2.734l-1.379-2.389 1.379-2.389h2.734l1.379 2.39-1.38 2.388zm-7.57 3.599h2.734l1.392 2.41-1.366 2.368H8.62l-1.379-2.39 1.38-2.388zm-4.864-2.793h2.759l1.379 2.39-1.379 2.388H3.756l-1.378-2.388 1.378-2.39zm2.759-5.584l1.379 2.39-1.379 2.388H3.756L2.378 7.208 3.756 4.82h2.759zm4.839 1.986H8.62L7.241 4.416l1.38-2.389h2.759l1.366 2.367-1.392 2.411zM8.62 12.39L7.241 10l1.38-2.389h2.733L12.733 10l-1.379 2.39H8.62zm4.836 2.79l-1.379-2.387 1.379-2.39h2.734l1.379 2.39-1.38 2.388h-2.733zM1.806 10c0-.622.076-1.226.207-1.81L3.058 10l-1.044 1.81A8.167 8.167 0 011.806 10zM10 1c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z",
        viewBox:'0 0 20 20',
        type: "Futsal",
        color:'rgb(211, 48, 48)',
    },
    {
        id:22,        
        icon: "M9.59 10.647h.82c1.802 0 3.48.891 4.488 2.385l.098.146a1.63 1.63 0 002.666.054l.053-.07a1.62 1.62 0 00.317-.968v-.934c0-2.862-.64-5.746-1.852-8.34a1.42 1.42 0 00-1.282-.816h-.26c-.4 0-.782.17-1.05.465a2.547 2.547 0 01-1.882.835H8.295a2.545 2.545 0 01-1.883-.835 1.419 1.419 0 00-1.05-.465h-.26c-.547 0-1.05.32-1.282.817a19.838 19.838 0 00-1.851 8.34v.934c0 .35.11.684.318.967l.052.071a1.629 1.629 0 002.665-.056l.098-.145a5.408 5.408 0 014.488-2.385zm6.758 4.374a2.753 2.753 0 01-2.284-1.214l-.099-.146a4.285 4.285 0 00-3.555-1.889h-.82a4.285 4.285 0 00-3.555 1.89l-.098.145a2.752 2.752 0 01-2.285 1.214c-.872 0-1.702-.419-2.22-1.121l-.052-.071a2.74 2.74 0 01-.537-1.635v-.934c0-3.026.677-6.074 1.958-8.816A2.55 2.55 0 015.103.98h.26c.716 0 1.402.304 1.882.834.268.296.651.465 1.05.465h3.41c.4 0 .782-.17 1.05-.465A2.545 2.545 0 0114.638.98h.26A2.55 2.55 0 0117.2 2.444a20.971 20.971 0 011.957 8.816v.934c0 .593-.186 1.158-.537 1.635l-.053.071a2.767 2.767 0 01-2.219 1.121z",
        viewBox:'0 0 20 20',
        type: "LoL",
        color:'rgb(92, 51, 207)',
    },
    {
        id:23,        
        icon: "M8.032 3.469a1.735 1.735 0 000-3.469 1.735 1.735 0 000 3.469zm7.632-.117c-.347 0-.695.117-1.039.347 0 0-.23.117-.347.117-.23 0-.348.118-.578.23H7.223c-1.273 0-1.734.927-1.734 1.735v5.317l-.578 3.816-1.965 3.582c-.23.461-.118 1.156.46 1.387.118.117.348.117.462.117.347 0 .695-.23.925-.578l2.2-3.93.46-3.351 2.774 2.312-.695 4.395c-.118.578.347 1.156.808 1.156h.23c.462 0 .926-.348 1.04-.926l.926-5.55-4.16-3.47V8.325l.808 1.617 2.313-.46c.117.117.347.117.46 0 .23 0 .348 0 .461.117.23.117.348.117.579.117.808 0 1.503-.578 1.503-1.387 0-.808-.695-1.387-1.504-1.387-.46 0-.925.23-1.156.579-.117.117-.23.23-.348.23-.23-.117-.347 0-.46.117l-1.157.23-1.273-2.542h5.203c.117.117.23.117.461.117.23 0 .46.117.46.117.231.117.579.23.927.23.808 0 1.504-.578 1.504-1.386.007-.703-.684-1.281-1.493-1.281z",
        viewBox:'0 0 20 20',
        type: "MMA",
        color:'rgb(255, 179, 25)',
    },
    {
        id:24,        
        icon: "M17.654 12.877l-1.06-.536.518-1.097 1.06.536-.518 1.097zm-2.489 5.266l-1.06-.536.518-1.097 1.06.536-.518 1.097zm-5.95-4.37h.001l1.433.725-3.27-.453.46-.97 1.376.697zm-3.939-4.17l1.06.537-.519 1.097-1.06-.537.52-1.098zm3.55-4.73l-.519 1.098-1.06-.536.518-1.098 1.06.537zm6.265 4.532l-1.06-.536.518-1.097 1.06.536-.518 1.097zm.037 4.37l-1.06-.537.518-1.097 1.06.536-.518 1.097zm-1.89 1.218l.518-1.098 1.06.538-.518 1.097-1.06-.537zm-2.874-2.814l1.06.536-.518 1.097-1.061-.536.52-1.097zm-2.332-1.181l-.519 1.098-1.06-.538.519-1.097 1.06.537zm-.23-2.292l1.06.537-.52 1.097-1.058-.536.518-1.098zm-1.696-.858l1.06.536-.519 1.097-1.06-.536.52-1.097zm1.371-.121l-1.06-.538.518-1.097 1.06.537-.518 1.098zm2.214-.24l-.518 1.097-1.06-.536.519-1.097 1.06.536zm2.874 2.815l-1.06-.537.519-1.098 1.06.538-.52 1.097zm1.697.859l-1.06-.538.518-1.097 1.06.538-.518 1.097zm-3.068-.738l1.06.537-.519 1.098-1.06-.538.52-1.097zM9.81 8.907l.518-1.097 1.06.536-.518 1.097-1.06-.536zm.749 1.195l-.519 1.097-1.06-.537.52-1.098 1.059.538zm2.874 2.814l-1.06-.537.519-1.097 1.06.536-.52 1.098zm-.83 1.755l-1.06-.536.519-1.098 1.06.537-.52 1.097zm1.312-7.222l-.52 1.097-1.06-.536.52-1.097 1.06.536zm-1.697-.859l-.519 1.098-1.06-.537.52-1.097 1.06.536zm-1.696-.857l-.518 1.097-1.06-.538.519-1.097 1.059.538zm-2.372 6.684l.52-1.097 1.059.536-.518 1.098-1.06-.537zm.811 2.586l3.27.454-.458.969-2.812-1.423zm3.448 1.745l.52-1.097 1.059.536-.519 1.097-1.06-.536zm3.587-.36l-1.06-.537.518-1.097 1.06.537-.518 1.098zm.83-1.755l-1.06-.536.518-1.098 1.06.537-.518 1.097zm-.349-3.71l-.518 1.097-1.06-.538.518-1.096 1.06.536zm2.326.36l-3.074-1.556.674-1.426a.376.376 0 00-.164-.49l-3.39-1.717h-.002l-1.694-.858h-.001l-.001-.002L8.077 3.68l.544-1.152a.374.374 0 00-.163-.49.35.35 0 00-.473.169l-.7 1.48-2.49 5.265-.83 1.756v.001l-2.93 6.197a.373.373 0 00.164.49.34.34 0 00.155.037.352.352 0 00.318-.205l2.775-5.869 2.755 1.395-.674 1.427c-.008.017-.01.038-.015.057-.005.019-.015.034-.018.055 0 .004.002.008.001.012-.002.025.002.05.005.074.002.024.002.048.01.07v.011c.002.005.008.006.01.01.03.083.087.152.164.193.003.002.003.006.006.007l5.087 2.576h.001l3.393 1.718c.05.024.102.037.154.037a.354.354 0 00.32-.206l.828-1.755.83-1.755v-.001l.83-1.754.001-.002.83-1.754a.373.373 0 00-.163-.49z",
        viewBox:'0 0 20 20',
        type: "Motor",
        color:'rgb(211, 48, 48)',
    },
    {
        id:25,        
        icon: "M9.59 10.647h.82c1.802 0 3.48.891 4.488 2.385l.098.146a1.63 1.63 0 002.666.054l.053-.07a1.62 1.62 0 00.317-.968v-.934c0-2.862-.64-5.746-1.852-8.34a1.42 1.42 0 00-1.282-.816h-.26c-.4 0-.782.17-1.05.465a2.547 2.547 0 01-1.882.835H8.295a2.545 2.545 0 01-1.883-.835 1.419 1.419 0 00-1.05-.465h-.26c-.547 0-1.05.32-1.282.817a19.838 19.838 0 00-1.851 8.34v.934c0 .35.11.684.318.967l.052.071a1.629 1.629 0 002.665-.056l.098-.145a5.408 5.408 0 014.488-2.385zm6.758 4.374a2.753 2.753 0 01-2.284-1.214l-.099-.146a4.285 4.285 0 00-3.555-1.889h-.82a4.285 4.285 0 00-3.555 1.89l-.098.145a2.752 2.752 0 01-2.285 1.214c-.872 0-1.702-.419-2.22-1.121l-.052-.071a2.74 2.74 0 01-.537-1.635v-.934c0-3.026.677-6.074 1.958-8.816A2.55 2.55 0 015.103.98h.26c.716 0 1.402.304 1.882.834.268.296.651.465 1.05.465h3.41c.4 0 .782-.17 1.05-.465A2.545 2.545 0 0114.638.98h.26A2.55 2.55 0 0117.2 2.444a20.971 20.971 0 011.957 8.816v.934c0 .593-.186 1.158-.537 1.635l-.053.071a2.767 2.767 0 01-2.219 1.121z",
        viewBox:'0 0 20 20',
        type: "Overwatch",
        color:'rgb(92, 51, 207)',
    },
    {
        id:26,        
        icon: "M9.59 10.647h.82c1.802 0 3.48.891 4.488 2.385l.098.146a1.63 1.63 0 002.666.054l.053-.07a1.62 1.62 0 00.317-.968v-.934c0-2.862-.64-5.746-1.852-8.34a1.42 1.42 0 00-1.282-.816h-.26c-.4 0-.782.17-1.05.465a2.547 2.547 0 01-1.882.835H8.295a2.545 2.545 0 01-1.883-.835 1.419 1.419 0 00-1.05-.465h-.26c-.547 0-1.05.32-1.282.817a19.838 19.838 0 00-1.851 8.34v.934c0 .35.11.684.318.967l.052.071a1.629 1.629 0 002.665-.056l.098-.145a5.408 5.408 0 014.488-2.385zm6.758 4.374a2.753 2.753 0 01-2.284-1.214l-.099-.146a4.285 4.285 0 00-3.555-1.889h-.82a4.285 4.285 0 00-3.555 1.89l-.098.145a2.752 2.752 0 01-2.285 1.214c-.872 0-1.702-.419-2.22-1.121l-.052-.071a2.74 2.74 0 01-.537-1.635v-.934c0-3.026.677-6.074 1.958-8.816A2.55 2.55 0 015.103.98h.26c.716 0 1.402.304 1.882.834.268.296.651.465 1.05.465h3.41c.4 0 .782-.17 1.05-.465A2.545 2.545 0 0114.638.98h.26A2.55 2.55 0 0117.2 2.444a20.971 20.971 0 011.957 8.816v.934c0 .593-.186 1.158-.537 1.635l-.053.071a2.767 2.767 0 01-2.219 1.121z",
        viewBox:'0 0 20 20',
        type: "Rocket League",
        color:'rgb(92, 51, 207)',
    },
    {
        id:27,        
        icon: "M14.623 14.623c-2.166 2.167-4.662 3.08-6.863 3.41l-2.61-2.612 2.14-2.138.617.617a.402.402 0 00.286.118.403.403 0 00.285-.689l-.618-.618 1.237-1.237.618.618a.399.399 0 00.57.001.402.402 0 000-.57l-.618-.62 1.236-1.236.62.619a.401.401 0 00.57-.002.404.404 0 000-.571l-.618-.618 1.237-1.235.618.618a.402.402 0 00.285.117.403.403 0 00.285-.689l-.618-.617 2.14-2.142 2.615 2.615c-.33 2.2-1.244 4.693-3.413 6.86zM2.665 17.906l1.913-1.914 2.154 2.155a15.16 15.16 0 01-4.067-.241zm-.573-.57a15.13 15.13 0 01-.243-4.073l2.157 2.159-1.914 1.915zm3.284-11.96c2.167-2.167 4.663-3.08 6.864-3.41l2.61 2.61-2.138 2.141-.62-.618a.404.404 0 00-.57.572l.617.618-1.236 1.235-.618-.617a.402.402 0 00-.57 0 .402.402 0 000 .571l.618.617-1.237 1.238-.618-.62a.404.404 0 10-.57.57l.617.62-1.236 1.236-.619-.618a.404.404 0 00-.57.572l.617.618-2.14 2.14-2.614-2.615c.33-2.198 1.245-4.691 3.413-6.86zm11.96-3.284l-1.914 1.914-2.154-2.155a15.17 15.17 0 014.068.241zm.572.57c.167.814.378 2.295.243 4.073l-2.157-2.158 1.914-1.914zm.611-.915a.387.387 0 00-.1-.165V1.58l-.003-.001a.392.392 0 00-.164-.1c-.076-.022-7.804-2.315-13.446 3.326-5.642 5.642-3.349 13.369-3.325 13.447.02.063.054.119.1.164v.002c0 .002.002 0 .003.002.045.045.1.08.164.098.034.011 1.618.482 3.864.48 2.745 0 6.48-.701 9.582-3.804 5.642-5.642 3.349-13.37 3.325-13.447z",
        viewBox:'0 0 20 20',
        type: "Rugby",
        color:'rgb(255, 179, 25)',
    },
    {
        id:28,        
        icon: "M7.153 5.066a1.859 1.859 0 10-3.718.038 1.859 1.859 0 003.718-.038zm2.886 1.774A1.806 1.806 0 1010 3.229a1.806 1.806 0 00.04 3.61zm.028 4.781a1.876 1.876 0 10.04 3.751 1.876 1.876 0 00-.04-3.75zM9.53 9.133A1.866 1.866 0 007.65 7.289a1.866 1.866 0 00-1.844 1.883 1.863 1.863 0 103.727-.04zm2.91-1.844a1.81 1.81 0 00.04 3.617 1.81 1.81 0 00-.04-3.617zm2.286-4.059A1.752 1.752 0 0012.997 5a1.752 1.752 0 001.769 1.73 1.75 1.75 0 10-.04-3.5zm4.945-1.109A2.292 2.292 0 0017.656.988L2.29 1.164a2.281 2.281 0 00-1.988 1.18 2.29 2.29 0 00.027 2.312L8.164 17.88a2.292 2.292 0 002.016 1.133 2.281 2.281 0 001.988-1.18l7.535-13.398a2.299 2.299 0 00-.031-2.313zm-1.047 1.707L11.09 17.227a1.06 1.06 0 01-.926.546 1.062 1.062 0 01-.937-.527L1.39 4.023a1.065 1.065 0 01-.012-1.078c.188-.336.535-.543.926-.547l15.371-.175c.39-.004.738.191.938.527.195.336.199.738.011 1.078z",
        viewBox:'0 0 20 20',
        type: "Snooker",
        color:'rgb(179, 128, 74)',
    },
    {
        id:29,        
        icon: "M12.357 15.524l-.391-1.207 1.02-.743c.01.088.029.175.029.266 0 .65-.254 1.236-.658 1.684zm-2.885.61l1.029-.75 1.027.75a2.49 2.49 0 01-1.027.226 2.49 2.49 0 01-1.03-.226zM7.986 13.84c0-.091.018-.178.027-.266l1.021.743-.39 1.207a2.503 2.503 0 01-.658-1.684zm2.003-2.467l-.395 1.217H8.33a2.514 2.514 0 011.659-1.217zm1.213 2.918l.303.935-.794-.578a.356.356 0 00-.21-.068.357.357 0 00-.212.068l-.794.578.303-.935a.361.361 0 00-.13-.403l-.794-.578h.981c.156 0 .294-.1.342-.248l.304-.936.302.936a.359.359 0 00.342.248h.98l-.792.578a.361.361 0 00-.131.403zm1.468-1.7h-1.264l-.395-1.218a2.514 2.514 0 011.659 1.217zm.903.248c-.005-.016-.02-.021-.026-.036-.434-1.277-1.629-2.203-3.046-2.203-1.419 0-2.614.926-3.048 2.203-.007.015-.021.02-.026.036-.005.016.003.03 0 .047-.094.303-.159.62-.159.954 0 1.064.52 2 1.31 2.59.01.009.012.024.023.032.007.005.017.003.024.007.53.382 1.175.611 1.876.611.7 0 1.343-.23 1.874-.611.008-.004.017-.002.024-.007.011-.008.013-.023.023-.032a3.227 3.227 0 001.31-2.59c0-.334-.065-.65-.159-.954-.003-.017.005-.031 0-.047zm.115-3.019a5.205 5.205 0 00-.68-.458l4.179-7.642h.853l-4.352 8.1zM10.5 18.28a4.44 4.44 0 01-4.43-4.44A4.44 4.44 0 0110.5 9.4a4.44 4.44 0 010 8.88zM3.943 1.72L8.09 9.308a5.147 5.147 0 00-.779.512L2.96 1.72h.982zm4.805 7.288L4.762 1.72h1.095l3.85 7.04a5.095 5.095 0 00-.96.248zm2.91-.185a5.111 5.111 0 00-1.156-.143l-.018.002L6.677 1.72h1.096l3.885 7.103zm1.57-7.103h1.225l-2.93 5.359-.613-1.122 2.318-4.237zM11.93 7.824c.002-.004.008-.006.01-.01l3.331-6.094h1.097L12.48 8.83l-.55-1.006zm7.019-6.648A.357.357 0 0018.64 1h-5.626a.358.358 0 00-.316.186L10.502 5.21 8.3 1.186A.357.357 0 007.985 1H2.36a.361.361 0 00-.317.53l4.718 8.784a5.137 5.137 0 00-1.408 3.526c0 2.845 2.309 5.16 5.148 5.16 2.837 0 5.148-2.315 5.148-5.16a5.138 5.138 0 00-1.41-3.526l4.718-8.783a.361.361 0 00-.008-.355z",
        viewBox:'0 0 20 20',
        type: "Spacials",
        color:'rgb(92, 51, 207)',
    },
    {
        id:30,        
        icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2.049A7.951 7.951 0 1012 4.05a7.951 7.951 0 000 15.902z",
        viewBox:'0 0 24 24',
        type: "Sportsbet Specials",
        color:'rgb(10, 183, 88)',
    },
    {
        id:31,        
        icon: "M15.44 16.11v-1.967c.114-.216.885-1.77.87-4.1l.001-.044.002-.034-.003-.039c.008-2.313-.756-3.853-.87-4.069V3.889A8.169 8.169 0 0118.194 10a8.17 8.17 0 01-2.754 6.111zm-7.215 1.884v-2.37c.54.088 1.122.151 1.776.151.63 0 1.19-.06 1.717-.143v2.377a8.159 8.159 0 01-1.717.184c-.61 0-1.204-.072-1.776-.199zM1.805 10a8.167 8.167 0 012.726-6.083v1.997c-.191.389-.857 1.896-.841 4.055h.003a.48.48 0 00-.003.107c-.008 2.136.65 3.626.841 4.012v1.997a8.167 8.167 0 01-2.725-6.085zm9.94-8v2.373a10.9 10.9 0 00-1.744-.148c-.643 0-1.214.063-1.747.148V1.998a8.195 8.195 0 011.747-.192c.6 0 1.182.07 1.745.192zm2.89 3.287a9.221 9.221 0 00-2.095-.76c.003-.02.012-.039.012-.06V2.218a8.22 8.22 0 012.082 1.03v2.037zm-9.94 2.699a7.71 7.71 0 01.553-1.702C5.607 6.044 7.292 5.03 10 5.03c2.665 0 4.354.994 4.737 1.244.008.009.014.018.023.027.104.22.36.815.545 1.684H4.694zm10.81 1.977V10.039c.002.42-.027.807-.07 1.17H4.565a9.215 9.215 0 01-.07-1.17v-.038-.04a9.28 9.28 0 01.07-1.17h10.87c.043.363.072.752.07 1.17zM5.336 5.302v-2.03a8.19 8.19 0 012.111-1.053v2.31a9.209 9.209 0 00-2.111.772zM7.419 17.77a8.167 8.167 0 01-2.082-1.043v-2.03a9.222 9.222 0 002.11.772.397.397 0 00-.028.138v2.163zm7.333-4.055c-.359.24-2.044 1.253-4.752 1.253-2.693 0-4.392-1.015-4.753-1.254-.1-.206-.367-.81-.554-1.7h10.613a7.671 7.671 0 01-.554 1.701zm-.118.998v2.037a8.144 8.144 0 01-2.11 1.04V15.48a9.229 9.229 0 002.11-.765zM12.33 1.317a.397.397 0 00-.181-.048h-.003A8.953 8.953 0 0010 1c-4.963 0-9 4.037-9 9s4.037 8.999 9 8.999 9-4.036 9-9c0-4.155-2.835-7.652-6.67-8.682z",
        viewBox:'0 0 20 20',
        type: "Volleyball",
        color:'rgb(15, 117, 189)',
    },
  ]

export default collapseItems
