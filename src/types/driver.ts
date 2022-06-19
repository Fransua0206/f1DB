export interface Pilot {
    id: string
    name: string
    surname: string
    driver_number: number
    team: Team
    teamId: string
    country: string
    podiums: number
    total_points: string
    gps_entered: number
    world_championships: number
    highest_race_finish: number
    highest_grid: number
    birth: string
    birth_place: string
    picture_url: string
    bio: string
}

export interface Team {
    id: string
    full_name: string
    base: string
    team_chief: string
    technical_chief: string
    chasis: string
    power_unit: string
    first_entry: number
    world_championships: number
    highest_race_finish: number
    pole_positions: number
    fastest_laps: number
    logo_url: string
    drivers: Pilot[]
}