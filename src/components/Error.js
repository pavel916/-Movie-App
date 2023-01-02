import React from 'react'
import { Alert } from 'antd'

const Error = () => (
  <Alert
    message="Server error"
    description="Оops... something went wrong :("
    type="error"
    showIcon
  />

)
export default Error