import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './commentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail 
                    author='Alex'
                    timeAgo="Today at 2:00AM" 
                    commentText='Great Post!'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author='Sam' 
                    timeAgo="Today at 4:45PM" 
                    commentText='Nice blog post!' 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author='Jane'
                    timeAgo="Yesterday at 3:00PM" 
                    commentText='Excellent Post!'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));