class Api {
  constructor() {
    this.baseUrl = 'https://norma.nomoreparties.space';
  }

  _checkResponse(res) {
    if (res && res.ok) {
      return res.json();
    }
    return Promise.reject(`Произошла ошибка: ${res.status}`);
  }

  getIngredients() {
    return fetch(`${this.baseUrl}/api/ingredients`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  sendOrderData(items) {
    return fetch(`${this.baseUrl}/api/orders`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients: items,
      }),
    }).then(this._checkResponse);
  }

  sendResetemail(email) {
    return fetch(`${this.baseUrl}/api/password-reset`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then(this._checkResponse);
  }

  resetPassword(resetData) {
    return fetch(`${this.baseUrl}/api/password-reset/reset`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: resetData.newPassword,
        token: resetData.verifyCode,
      }),
    }).then(this._checkResponse);
  }

  registerUser(signUpData) {
    return fetch(`${this.baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: signUpData.email,
        password: signUpData.password,
        name: signUpData.userName,
      }),
    }).then(this._checkResponse);
  }
}

const api = new Api();
export default api;
