import { Outlet } from 'react-router-dom'

const SharedProductLayout = () => {
  return (
    <>
      <h2>products (SharedLayout)</h2>

      <Outlet />
    </>
  )
}
export default SharedProductLayout
