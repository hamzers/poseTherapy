import {users} from "./mongo.ts";

async function checkUserExist(userId: string, email: string) {
    let userid = await users.findOne({userId: `${userId}`});
    let userEmail = await users.findOne({username: `${email}`})
    if (userid || userEmail) {
        return true;
    } else {
        return false;
    }
};


async function addUser(uid: string, username:string) {
    let exists = await checkUserExist(uid, username);
    let action = "not executed";
    if (!exists) {
        action = await users.insertOne({
            username: `${username}`,
            userId: `${uid}`,
        });
    }
    return action;
}

function verifyChanges(data: any) {
    if (data.userId == null  && data.username == null) {
        return true;
    } else {
        return false;
    }
};

//make updates available **DO NOT ALLOW UID OR USERNAME TO BE CHANGED**
async function updateUserInfo(uid: string, username: string, updates: any) {
    const exists = await checkUserExist(uid, username);
    if (!exists) {
        return {
            body: "failure",
        };
    }
    if(!verifyChanges(updates)) {
        return {
            status : 401,
            body : "invalid operation",
        }
    }
    let result = await users.updateOne(
        { userId: `${uid}` },
        { $set: updates },
    );
    console.log(result);
};

async function getUserInfo(uid: string, username: string, apiKey: string) {
    const check = await checkUserExist(uid, username);
    if (check) {
        const result = await users.findOne({userId: `${uid}`});
        return result;
    } else {
        return {
            body:"failure",
        };
    }

}




console.log("bruh");
let data =  {
     "user" : "gang", 
};
await updateUserInfo("lkasdjkflsaf2323asdfas", "hmshaikh19@gmail.com", data );
var userbase = await users.find();
console.log(userbase);
export {addUser, updateUserInfo};

