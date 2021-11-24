export default interface Event {
    name: string,
    location: {
        address: string,
        image: string,
        name: string
    }
    begin: string,
    distance: string,
    description: string,
    confirmed: number
}