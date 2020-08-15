import {User} from './user';

export class Forum {
  forum_id: string;
  course_id: string = '';
  forum_title: string = '';
  forum_content: string = '';
  created_at: Date;
  updated_at: Date;
  user_id = '';
  userforum: User;
}
