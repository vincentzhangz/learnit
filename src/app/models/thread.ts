import { User } from './user';

export class Thread {
    thread_id: string;
    forum_id: string;
    user_id: string;
    reply_content: string;
    is_correct: string;
    title:string;
    created_at:Date;
    updated_at: Date
    userthread: User
    comment: any[] = []
}
