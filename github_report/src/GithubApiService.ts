import * as req from 'request';
import { User } from './User';

export class GithubApi{
    getUserInfo(userName:string, cb:(user:User)=>any ){
        let options:any = {
            headers:{
                'User-Agent':'request',
            },
            json:true

        }
        req.get('https://api.github.com/users/'+userName,options, 
        (error:any,response:any,body:any)=>{
            let user  = new User(body);
            // console.log(user);
            cb(user);
        }
        
        )
    }
}