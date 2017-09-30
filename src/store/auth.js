import router from '../router'
import jwt from 'jwt-decode'

export default {
  state: {
    profile: null,
    accessToken: null,
    verification: null,
    isAuthenticated: false,
    count: 0
  },

  getters: {
    profile: state => state.profile,
    verification: state => state.verification,
    accessToken: state => state.accessToken,
    idToken: state => state.idToken,
    isAuthenticated: state => state.isAuthenticated
  },

  mutations: {
    setProfile: (state, profile) => {
      state.profile = profile
    },
    setAccessToken: (state, accessToken) => {
      state.accessToken = accessToken
    },
    setIdToken: (state, idToken) => {
      state.idToken = idToken
    },
    setVerification: (state, verification) => {
      state.verification = verification
    },
    setAuthenticated: (state, isAuthenticated) => {
      state.isAuthenticated = isAuthenticated
    }
  },

  actions: {
    signout: function (context, payload) {
      context.commit('setProfile', null)
      context.commit('setAccessToken', null)
      context.commit('setAuthenticated', false)
      router.push({ name: 'login' })
    },
    authenticate: function (context, payload) {
      if (payload.verification === null || payload.verification !== context.getters.verification) {
        router.push({ name: 'error', params: { message: 'The verification state in the authentication response did not match our original request' } })
        return
      }

      if (payload.idToken === null || (jwt(payload.idToken).token_use || null) !== 'id') {
        router.push({ name: 'error', params: { message: 'The authentication response did not include a valid ID token' } })
        return
      }

      context.commit('setProfile', jwt(payload.idToken))
      context.commit('setAccessToken', payload.accessToken)
      context.commit('setIdToken', payload.idToken)
      context.commit('setAuthenticated', true)
      router.push({ name: 'home' })
    }
  }
}
