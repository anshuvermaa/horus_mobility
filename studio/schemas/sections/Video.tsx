import {MonitorPlay} from 'phosphor-react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  icon: MonitorPlay,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'localeString',
    }),
    defineField({
      name: 'micro_heading',
      title: 'Micro heading',
      type: 'localeString',
      initialValue: 'Donec',
    }),
    defineField({
      type: 'object',
      title: 'Video',
      name: 'video',
      fields: [
        defineField({
          name: 'video_url',
          type: 'url',
          title: 'Video URL',
        }),
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'localeString',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'localeText',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading.en',
      subtitle: 'micro_heading.en',
      video: 'video.video_url',
    },
    prepare({title, subtitle, video}) {
      return {
        title,
        subtitle,
        media: (
          <span style={{height: '100%', width: '100%'}}>
            <video
              style={{height: '100%', width: '100%'}}
              controls={false}
              muted={true}
              loop={false}
              autoPlay={true}
              src={video}
            />
          </span>
        ),
      }
    },
  },
})
