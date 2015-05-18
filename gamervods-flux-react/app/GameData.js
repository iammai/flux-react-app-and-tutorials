module.exports = {
  // Load Mock Game Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('game', JSON.stringify([
      {
          "league": null,
          "season": null,
          "split": null,
          "week": null,
          "home_team": {
              "id": 83,
              "url": "http://api.gamervods.com/v1/teams/83/",
              "name": "CJ Entus Frost",
              "short_name": null,
              "logo": null
          },
          "away_team": {
              "id": 93,
              "url": "http://api.gamervods.com/v1/teams/93/",
              "name": "NaJin Black Sword",
              "short_name": null,
              "logo": null
          },
          "id": 1080,
          "tags": [],
          "videos": [
              {
                  "url": "http://api.gamervods.com/v1/videos/1007/",
                  "id": 1007,
                  "name": "",
                  "type_name": "Game Start",
                  "publisher_name": "YouTube",
                  "date_created": "2015-03-08T05:41:52Z",
                  "link": "http://www.youtube.com/embed/NKj15IefeMo?wmode=transparent&autoplay=1",
                  "publisher": 1,
                  "type": 1,
                  "start_time_seconds": null,
                  "publisher_video_id": null,
                  "publisher_view_count": null,
                  "publisher_likes": null,
                  "publisher_dislikes": null,
                  "publisher_author": null,
                  "publisher_description": null,
                  "game": "http://api.gamervods.com/v1/games/1080/"
              }
          ],
          "characters_played": [
              {
                  "player": {
                      "id": 214,
                      "url": "http://api.gamervods.com/v1/players/214/",
                      "player_name": "MadLife"
                  },
                  "character": {
                      "id": 43,
                      "url": "http://api.gamervods.com/v1/champions/43/",
                      "name": "Thresh",
                      "square_image_url": "http://ddragon.leagueoflegends.com/cdn/5.4.1/img/champion/Thresh.png"
                  },
                  "team": {
                      "id": 83,
                      "url": "http://api.gamervods.com/v1/teams/83/",
                      "name": "CJ Entus Frost",
                      "short_name": null,
                      "logo": null
                  }
              },
              {
                  "player": {
                      "id": 216,
                      "url": "http://api.gamervods.com/v1/players/216/",
                      "player_name": "Shy"
                  },
                  "character": {
                      "id": 31,
                      "url": "http://api.gamervods.com/v1/champions/31/",
                      "name": "Shyvana",
                      "square_image_url": "http://ddragon.leagueoflegends.com/cdn/5.4.1/img/champion/Shyvana.png"
                  },
                  "team": {
                      "id": 83,
                      "url": "http://api.gamervods.com/v1/teams/83/",
                      "name": "CJ Entus Frost",
                      "short_name": null,
                      "logo": null
                  }
              },
              {
                  "player": {
                      "id": 215,
                      "url": "http://api.gamervods.com/v1/players/215/",
                      "player_name": "Space"
                  },
                  "character": {
                      "id": 28,
                      "url": "http://api.gamervods.com/v1/champions/28/",
                      "name": "Lucian",
                      "square_image_url": "http://ddragon.leagueoflegends.com/cdn/5.4.1/img/champion/Lucian.png"
                  },
                  "team": {
                      "id": 83,
                      "url": "http://api.gamervods.com/v1/teams/83/",
                      "name": "CJ Entus Frost",
                      "short_name": null,
                      "logo": null
                  }
              },
              {
                  "player": {
                      "id": 218,
                      "url": "http://api.gamervods.com/v1/players/218/",
                      "player_name": "CoCo"
                  },
                  "character": {
                      "id": 5,
                      "url": "http://api.gamervods.com/v1/champions/5/",
                      "name": "Nidalee",
                      "square_image_url": "http://ddragon.leagueoflegends.com/cdn/5.4.1/img/champion/Nidalee.png"
                  },
                  "team": {
                      "id": 83,
                      "url": "http://api.gamervods.com/v1/teams/83/",
                      "name": "CJ Entus Frost",
                      "short_name": null,
                      "logo": null
                  }
              },
              {
                  "player": {
                      "id": 446,
                      "url": "http://api.gamervods.com/v1/players/446/",
                      "player_name": "Swift"
                  },
                  "character": {
                      "id": 115,
                      "url": "http://api.gamervods.com/v1/champions/115/",
                      "name": "Evelynn",
                      "square_image_url": "http://ddragon.leagueoflegends.com/cdn/5.4.1/img/champion/Evelynn.png"
                  },
                  "team": {
                      "id": 83,
                      "url": "http://api.gamervods.com/v1/teams/83/",
                      "name": "CJ Entus Frost",
                      "short_name": null,
                      "logo": null
                  }
              },
              {
                  "player": {
                      "id": 632,
                      "url": "http://api.gamervods.com/v1/players/632/",
                      "player_name": "Limit"
                  },
                  "character": {
                      "id": 2,
                      "url": "http://api.gamervods.com/v1/champions/2/",
                      "name": "Jax",
                      "square_image_url": "http://ddragon.leagueoflegends.com/cdn/5.4.1/img/champion/Jax.png"
                  },
                  "team": {
                      "id": 93,
                      "url": "http://api.gamervods.com/v1/teams/93/",
                      "name": "NaJin Black Sword",
                      "short_name": null,
                      "logo": null
                  }
              },
              {
                  "player": {
                      "id": 14,
                      "url": "http://api.gamervods.com/v1/players/14/",
                      "player_name": "Helios"
                  },
                  "character": {
                      "id": 101,
                      "url": "http://api.gamervods.com/v1/champions/101/",
                      "name": "Lee Sin",
                      "square_image_url": "http://ddragon.leagueoflegends.com/cdn/5.4.1/img/champion/LeeSin.png"
                  },
                  "team": {
                      "id": 93,
                      "url": "http://api.gamervods.com/v1/teams/93/",
                      "name": "NaJin Black Sword",
                      "short_name": null,
                      "logo": null
                  }
              },
              {
                  "player": {
                      "id": 235,
                      "url": "http://api.gamervods.com/v1/players/235/",
                      "player_name": "Cain"
                  },
                  "character": {
                      "id": 54,
                      "url": "http://api.gamervods.com/v1/champions/54/",
                      "name": "Leona",
                      "square_image_url": "http://ddragon.leagueoflegends.com/cdn/5.4.1/img/champion/Leona.png"
                  },
                  "team": {
                      "id": 93,
                      "url": "http://api.gamervods.com/v1/teams/93/",
                      "name": "NaJin Black Sword",
                      "short_name": null,
                      "logo": null
                  }
              },
              {
                  "player": {
                      "id": 200,
                      "url": "http://api.gamervods.com/v1/players/200/",
                      "player_name": "PraY"
                  },
                  "character": {
                      "id": 123,
                      "url": "http://api.gamervods.com/v1/champions/123/",
                      "name": "Ezreal",
                      "square_image_url": "http://ddragon.leagueoflegends.com/cdn/5.4.1/img/champion/Ezreal.png"
                  },
                  "team": {
                      "id": 93,
                      "url": "http://api.gamervods.com/v1/teams/93/",
                      "name": "NaJin Black Sword",
                      "short_name": null,
                      "logo": null
                  }
              },
              {
                  "player": {
                      "id": 208,
                      "url": "http://api.gamervods.com/v1/players/208/",
                      "player_name": "Nagne"
                  },
                  "character": {
                      "id": 55,
                      "url": "http://api.gamervods.com/v1/champions/55/",
                      "name": "Yasuo",
                      "square_image_url": "http://ddragon.leagueoflegends.com/cdn/5.4.1/img/champion/Yasuo.png"
                  },
                  "team": {
                      "id": 93,
                      "url": "http://api.gamervods.com/v1/teams/93/",
                      "name": "NaJin Black Sword",
                      "short_name": null,
                      "logo": null
                  }
              }
          ],
          "name": "CJ Entus Frost vs. NaJin Black Sword",
          "date": "2015-05-17T00:00:00Z",
          "game_number": null,
          "votes": 2,
          "winner": null,
            variants: [
              {
                sku: '123123',
                type: '40oz Bottle',
                price: 4.99,
                inventory: 1

              },
              {
                sku: '123124',
                type: '6 Pack',
                price: 12.99,
                inventory: 5
              },
              {
                sku: '1231235',
                type: '30 Pack',
                price: 19.99,
                inventory: 3
              }
        ],
      }
    ]));
  }

};


