class Api {
  constructor(){
    this.baseUrl = 'https://norma.nomoreparties.space';
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Произошла ошибка: ${res.status}`);
  }

  getIngredients() {
    return fetch(`${this.baseUrl}/api/ingredients`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    }).then(this._checkResponse);
  }
}

const api = new Api();
export default api;