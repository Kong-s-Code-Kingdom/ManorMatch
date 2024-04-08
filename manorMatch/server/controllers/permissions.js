import * as models from '../../database/models/index.js'

const getUserInfo = (req, res) => {
  models.permissions.getUserInfo()
};

const login = (req, res) => {
    // Funciton needs to be reformatted, Just to make sure we're connected to client
    const { email, password } = req.body;
    if (email === 'admin@admin.com' && password === 'password') {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  };

const signup = (req, res) => {
  const { email, password } = req.body;
  console.log('signup in controllers')
  models.permissions.signup(email, password);
  res.status(200).json({ message: 'Signup successful' });
}

const logout = (req, res) => {
  console.log('logout in controllers received')
  models.permissions.logout();
}

export { getUserInfo, login, signup, logout };