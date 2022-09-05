import Cookie from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="bg">
      <button type="button" className="btn" onClick={onClickLogout}>
        LogoutButton
      </button>
    </div>
  )
}

export default LogoutButton
