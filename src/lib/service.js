import axios from 'axios';

async function getData(userID) {

  try {

    if(String(userID).trim() === '' || typeof userID === 'undefined') {
      throw new Error('Please enter a User ID that is a number');
    }
    if(userID < 1) {throw new Error('Please enter a User ID that is high from 0')};
  
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`);
    const userInfo = userResponse.data;
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
    const userPosts = postsResponse.data;
    const userData = {
      id: userInfo.id,
      name: userInfo.name,
      username: userInfo.username,
      email: userInfo.email,
      address: userInfo.address,
      phone: userInfo.phone,
      website: userInfo.website,
      company: userInfo.company,
      posts: userPosts
    }
    return userData;

  } catch (err) {console.error(err.message)};

}

export default getData;
