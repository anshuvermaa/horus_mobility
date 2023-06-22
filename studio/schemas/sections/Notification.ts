import {Textbox} from 'phosphor-react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'notification',
  type: 'button',
  title: 'Notification',
  icon: Textbox,
  preview: {
    select: {
      text: 'title.en',
    },
    prepare({text}) {
      return {
        title: 'Notification',
        subtitle: text,
        icon: Textbox,
      }
    },
  },
})
