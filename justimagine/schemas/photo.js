export default{
    name: 'photo',
    title: 'Photo',
    type: 'document',
    fields: [
        {
             name: 'title',
             title: 'Title',
             type: 'string',
         },
         {
              name: 'about',
              title: 'About',
              type: 'string',
          },
          {
              name: 'category',
              title: 'Category',
              type: 'string',
          },
          {
              name: 'image',
              title: 'Image',
              type: 'image',
              Option: {
                  hotspot: true
              }
          },
          {
              name: 'userId',
              title: 'UserId',
              type: 'string',
          },
          {
              name: 'postedBy',
              title: 'PostedBy',
              type: 'postedBy',
          },
          {
              name: 'save',
              title: 'Save',
              type: 'array',
              of: [{type:'save'}]
          },
          {
              name: 'comment',
              title: 'Comment',
              type: 'array',
              of: [{type:'comment'}]
          },
       
    ]
}