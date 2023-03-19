export class MarvelService {

  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=4c3a6dff7bef89b73f93e6c1bb74440d';

  getResourse = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = () =>
    this.getResourse(
      `${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`
    );

  getCharacter = (id) =>
    this.getResourse(
      `${this._apiBase}characters/${id}?${this._apiKey}`
    );

}
