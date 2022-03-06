var admin = require("firebase-admin");
var serviceAccount = require("/Users/lena/Desktop/cmd-f2022-firebase-adminsdk-8o63m-fa0cb3449b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
let userRef = db.collection("Users");
let groupRef = db.collection("Groups");
let postRef = db.collection("Posts");
let commentRef = db.collection("Comments");

// create a user function
// inputs: POST from frontend (signup page)
function createUser(email, name, pwd, origin, res) {

    const groupName = origin + "-" + res;
    userRef.add({
            email: email,
            name: name,
            password: pwd,
            origin: origin,
            residence: res,
            group: groupName
    }).then(function(userRef) {
      console.log("User created successfully");
      const doc = groupRef.doc(groupName).get();
      if (!doc.exists) {
          groupRef.doc(groupName).set({});
          console.log("Group created successfully");
      }

      // GET - send the userID and groupID to the frontend
      const userID = userRef.id;
      return(JSON.stringify({
        'userID': userID,
        'groupID': groupName
      }));
    });  
}

// returns all the info for the user and its group
async function getUserByID(userID) {
  const user = await userRef.doc(userID).get()
    .then(user => {
      const useremail = user.data().email;
      const usergroup = user.data().group;
      const username = user.data().name;
      const userorigin = user.data().origin;
      const userres = user.data().residence;
      const userpsw = user.data().password;

      // GET - send the return value to FE
      const group = groupRef.doc(usergroup).get()
        .then(group => {
          const posts = group.data().posts;
          return (JSON.stringify({
            'email': useremail,
            'name': username,
            'country of origin': userorigin,
            'country of residence': userres,
            'password': userpsw,
            'group': usergroup,
            'group posts': posts
          }));
        });
    });
}

// create a post function
// inputs: POST from frontend
function createPost(userID, groupID, content) {
    // create a new post document (object)
    postRef.add({
      user: userID,
      content: content, 
      timestamp: admin.firestore.Timestamp.now()
    })
    // get the postID and add the post to the group
    .then(function(postRef) {
      const postID = postRef.id;
      groupRef.doc(groupID).update({
          posts: admin.firestore.FieldValue.arrayUnion(postID)
      });
      // send the postID to React
      return(JSON.stringify({
        'postID': postID
      }));
    })
}

// create a comment document
// inputs: POST from frontend
function createComment(userID, postID, content) {
    // create a new comment object
    commentRef.add({
      user: userID,
      content: content,
          timestamp: admin.firestore.Timestamp.now() 
    })  
    // add the commentID to the post
    .then(function(commentRef) {
        const commentID = commentRef.id;
        postRef.doc(postID).update({
        comments: admin.firestore.FieldValue.arrayUnion(commentID)
      });
      // send the comment ID to React
      return(JSON.stringify({
        'commentID': commentID
      }));
    })
} 