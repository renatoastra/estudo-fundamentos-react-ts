import styles from './Comment.module.css';
import avatar from '../../assets/avatar.png'
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import { useEffect, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {

        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    const commentPublishedAt = new Date
    const commentpublishedDateFormated = format(commentPublishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });
    const publlishedDateRelativeToNow = formatDistanceToNow(commentPublishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCommitDateChange() {

    }
    return (
        <div className={styles.comment}>
            <Avatar src={avatar} hasBorder={false} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Renato Astra</strong>
                            <time title={commentpublishedDateFormated} dateTime={commentPublishedAt.toString()}>
                                <span>
                                    {publlishedDateRelativeToNow}
                                </span>
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>

                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}