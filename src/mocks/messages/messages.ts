import { Message } from '../../models/message/message.model'
import { Profile } from '../../models/profile/profile.model';

const users: Profile[] = [
    {firstName: 'Sid', lastName: 'Sav', avatar: 'https://www.gstatic.com/webp/gallery/1.jpg', email: 'sid.sav@gmail.com', dob: new Date()},
    {firstName: 'Vas', lastName: 'Nel', avatar: 'https://www.gstatic.com/webp/gallery/1.jpg', email: 'vas.sav@gmail.com', dob: new Date()},
    {firstName: 'Samanyu', lastName: 'Sav', avatar: 'https://www.gstatic.com/webp/gallery/1.jpg', email: 'manu.sav@gmail.com', dob: new Date()},
    {firstName: 'Sammy', lastName: 'Sav', avatar: 'https://www.gstatic.com/webp/gallery/1.jpg', email: 'sammy.sav@gmail.com', dob: new Date()},
    
];

const messages:Message[]= [
    { user: users[0], date: new Date("10-17-2018"), lastMessage: 'Hi'},
    { user: users[1], date: new Date("10-16-2018"), lastMessage: 'Hello'},
    { user: users[2], date: new Date("10-15-2018"), lastMessage: 'Hey how are you'},
    { user: users[3], date: new Date("10-17-2018"), lastMessage: 'I like it!'}
];

export const MESSAGES_LIST = messages;