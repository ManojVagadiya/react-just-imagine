export const categories = [
    {
        name: 'Cars',
        image: 'https://i.pinimg.com/750x/eb/47/44/eb4744eaa3b3ccd89749fa3470e2b0de.jpg',
      },
      {
        name: 'Wallpaper',
        image: 'https://i.pinimg.com/236x/03/48/b6/0348b65919fcbe1e4f559dc4feb0ee13.jpg',
      },
      {
        name: 'Anime',
        image: 'https://th.bing.com/th/id/OIP._dscY2Od2Np1uNGB8LRFkAHaGI?rs=1&pid=ImgDetMain',
      },
      {
        name: 'Marvel',
        image: 'https://th.bing.com/th/id/OIP.1ITnVv9wwdifX82yfP9eTgHaEK?w=323&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      },
      {
        name: 'Nature',
        image: 'https://i.pinimg.com/236x/b9/82/d4/b982d49a1edd984c4faef745fd1f8479.jpg',
      },
      {
        name: 'Art',
        image: 'https://i.pinimg.com/736x/f4/e5/ba/f4e5ba22311039662dd253be33bf5f0e.jpg',
      }, 
      {
        name: 'others',
        image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
      },
    
]


export const feedQuery = `*[_type == "photo"] |  order(_createdAt desc) 
  {
    image{
      asset->{
        url
      }
    },
        _id,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
  }`;


      export const searchQuery = (searchTerm) => {
        const query = `*[_type == "photo" && (title match "${searchTerm}*" || category match "${searchTerm}*" || about match "${searchTerm}*")] {
            image {
                asset-> {
                    url
                }
            },
            _id,
            destination,
            postedBy-> {
                _id,
                userName,
                image
            },
            "save": save[] {
                _key,
                postedBy-> {
                    _id,
                    userName,
                    image
                }
            }
        }`;
        return query;
    };
    


      export const userQuery = (userId) => {
     //   const query = `*[_type == "user" && _id == '${userId}']`;
     const query = `*[_type == 'user' && _id == '${userId}' ]`;  
     

        return query;
      };


      
      export const userCreatedPhotosQuery = (userId) => {
        const query = `*[ _type == 'photo' && userId == '${userId}'] | order(_createdAt desc){
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
        return query;
      };
      
      export const userSavedPhotosQuery = (userId) => {
        const query = `*[_type == 'photo' && '${userId}' in save[].userId ] | order(_createdAt desc) {
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
        return query;
      };



      export const photoDetailQuery = (photoId) => {
        const query = `*[_type == "photo" && _id == '${photoId}']{
          image{
            asset->{
              url
            }
          },
          _id,
          title, 
          about,
          category,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
         save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
          comments[]{
            comment,
            _key,
            postedBy->{
              _id,
              userName,
              image
            },
          }
        }`;
        return query;
      };
      
      export const photoDetailMorePhotoQuery = (photo) => {
        const query = `*[_type == "photo" && category == '${photo.category}' && _id != '${photo._id}' ]{
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            _key,
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
        return query;
      };