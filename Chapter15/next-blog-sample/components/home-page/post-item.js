import Link from 'next/link';
import styled from './post-item.module.css';

function PostItem(props) {
    console.log('PostItemDetail', props);
    const { title, date, description, slug } = props.post;
    const linkPath = `/posts/${slug}`;
    return (
        <li>
            <Link href={linkPath}>
                <a>
                    <div className={styled.itemDetail}>
                        <h3>{title}</h3>
                        <h3>{date}</h3>
                        <h3>{description}</h3>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem;