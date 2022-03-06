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

function createUser(email, name, pwd, origin, res) {
    const groupName = origin + "-" + res;
    userRef.add({
            email: email,
            name: name,
            password: pwd,
            origin: origin,
            residence: res,
            group: groupName
    });
    console.log("User created successfully");

    const doc = groupRef.doc(groupName).get();
    if (!doc.exists) {
        groupRef.doc(groupName).set({});
        console.log("Group created successfully");
    }

    // TO DO: send the userID and groupID to the frontend
}

//create a post function
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
    })
    // TO DO: send the postID to React
}

// create a comment document
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
    })
}  

////////////////// test //////////////////
console.log(admin.firestore.Timestamp.now());
createPost("test", "A-B", "conttt");
createComment("userID", "MOGJrtJDLb24YCocQWWR", "testcomment")

// view the info for testing
userRef.get().then((querySnapshot) => {
    querySnapshot.forEach(document => {
        console.log(document.data());
    })
})
////////////////////////////////////