import React from 'react'
import Title from '../ui components/Title'
import Input from '../ui components/Input'

const PersonalDetailsSection = () => {
  return (
    <>
      <Title title="Personal Details" />
      <Input inputType="text" inputPlaceholder="Enter your full name" inputName="Ioana Franț" text="Full Name" />
    </>
  )
}

export default PersonalDetailsSection
