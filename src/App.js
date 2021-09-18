import './App.css'
import Home from './pages/Home'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Graph from './pages/Graph'
import ErrorPage from './pages/ErrorPage'
import theme from './utils/theme'
import NavBar from './components/NavBar'

function App () {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/profile' component={Profile} />

          <Route path='/sign_in' component={SignIn} />

          <Route path='/Sign_up' component={SignUp} />

          <Route path='/graph' component={Graph} />

          <Route path='*' component={ErrorPage} />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App
