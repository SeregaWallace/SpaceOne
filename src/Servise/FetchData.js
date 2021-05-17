export default class FetchData {
    apiUrl = 'https://api.spacexdata.com/v4/';

    getData = async url => {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Error: ${result.message}`);
        }

        return await result.json();
    };

    getRocket = async () =>  await this.getData(this.apiUrl + 'rockets');
    getCalendar = async () =>  await this.getData(this.apiUrl + 'launches/past');
    getCompanyInfo = async () =>  await this.getData(this.apiUrl + 'company');

};