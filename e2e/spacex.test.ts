import { describe, expect, it } from 'vitest'
import { FetchClient } from '../src'
import * as schema from '../schemas/spacex'

const client = new FetchClient({
  schema,
  url: 'https://api.spacex.land/graphql'
})

describe('SpaceX', () => {
  it('Long query', async () => {
    const result = await client.query
      .launchesPast({
        _limit: 1,
        mission_name: true,
        launch_date_local: true,
        launch_site: { site_name_long: true },
        links: { article_link: true, video_link: true },
        rocket: {
          rocket_name: true,
          first_stage: {
            cores: {
              flight: true,
              core: {
                reuse_count: true,
                status: true
              }
            }
          },
          second_stage: {
            payloads: {
              payload_type: true,
              payload_mass_kg: true,
              payload_mass_lbs: true
            }
          }
        },
        ships: {
          name: true,
          home_port: true,
          image: true
        }
      })
      .run()

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "launch_date_local": "2020-10-24T11:31:00-04:00",
          "launch_site": {
            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40",
          },
          "links": {
            "article_link": null,
            "video_link": "https://youtu.be/J442-ti-Dhg",
          },
          "mission_name": "Starlink-15 (v1.0)",
          "rocket": {
            "first_stage": {
              "cores": [
                {
                  "core": {
                    "reuse_count": 6,
                    "status": "unknown",
                  },
                  "flight": 7,
                },
              ],
            },
            "rocket_name": "Falcon 9",
            "second_stage": {
              "payloads": [
                {
                  "payload_mass_kg": 15400,
                  "payload_mass_lbs": 33951.2,
                  "payload_type": "Satellite",
                },
              ],
            },
          },
          "ships": [
            {
              "home_port": "Port Canaveral",
              "image": "https://i.imgur.com/MtEgYbY.jpg",
              "name": "GO Ms Tree",
            },
            {
              "home_port": "Port Canaveral",
              "image": "https://imgur.com/NHsx95l.jpg",
              "name": "GO Ms Chief",
            },
            {
              "home_port": "Port of Los Angeles",
              "image": "https://i.imgur.com/7VMC0Gn.jpg",
              "name": "Just Read The Instructions 2",
            },
            {
              "home_port": "Port Canaveral",
              "image": "https://i.imgur.com/ABXtHKa.jpg",
              "name": "GO Quest",
            },
          ],
        },
      ]
    `)
  })
})
