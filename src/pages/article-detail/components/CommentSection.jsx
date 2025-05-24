import { motion } from "framer-motion";
import { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: {
        name: "Sarah Chen",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      content:
        "This article was incredibly helpful! I've been struggling with optimizing my React components and the section on memoization really cleared things up for me. Looking forward to implementing these patterns in my next project.",
      date: "2 days ago",
      likes: 12,
      replies: [
        {
          id: 101,
          author: {
            name: "Muntasir Mahmud",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            isAuthor: true,
          },
          content:
            "Thanks Sarah! I'm glad you found it helpful. Let me know if you have any questions when implementing these patterns.",
          date: "1 day ago",
          likes: 3,
        },
      ],
    },
    {
      id: 2,
      author: {
        name: "Michael Rodriguez",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      },
      content:
        "Great overview of modern React patterns! I especially liked the comparison of different state management solutions. One question though - in your opinion, when would you recommend using Zustand over Redux Toolkit?",
      date: "3 days ago",
      likes: 8,
      replies: [],
    },
  ]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: {
          name: "You",
          avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
        },
        content: comment,
        date: "Just now",
        likes: 0,
        replies: [],
      };
      setComments([newComment, ...comments]);
      setComment("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-12 pt-8 border-t border-border"
    >
      <h2 className="heading-3 text-text-primary mb-8">
        Comments ({comments.length})
      </h2>

      {/* Comment form */}
      <div className="mb-10">
        <form onSubmit={handleSubmitComment}>
          <div className="flex space-x-4">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="https://randomuser.me/api/portraits/lego/1.jpg"
                alt="Your avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                rows={3}
              ></textarea>
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  disabled={!comment.trim()}
                  className={`btn-primary ${
                    !comment.trim() ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Comments list */}
      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-border pb-6">
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={comment.author.avatar}
                  alt={comment.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center mb-2">
                  <span className="font-medium text-text-primary mr-2">
                    {comment.author.name}
                  </span>
                  {comment.author.isAuthor && (
                    <span className="bg-primary-light text-primary text-xs px-2 py-0.5 rounded-full">
                      Author
                    </span>
                  )}
                  <span className="text-text-tertiary text-sm ml-auto">
                    {comment.date}
                  </span>
                </div>
                <p className="text-text-secondary mb-3">{comment.content}</p>
                <div className="flex items-center space-x-4">
                  <button className="inline-flex items-center text-text-tertiary hover:text-primary transition-colors duration-300">
                    <Icon name="ThumbsUp" size={14} className="mr-1" />
                    <span className="text-sm">{comment.likes}</span>
                  </button>
                  <button className="text-text-tertiary hover:text-primary transition-colors duration-300 text-sm">
                    Reply
                  </button>
                </div>

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="mt-4 space-y-4 pl-6 border-l-2 border-border">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex space-x-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={reply.author.avatar}
                            alt={reply.author.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center mb-1">
                            <span className="font-medium text-text-primary mr-2">
                              {reply.author.name}
                            </span>
                            {reply.author.isAuthor && (
                              <span className="bg-primary-light text-primary text-xs px-2 py-0.5 rounded-full">
                                Author
                              </span>
                            )}
                            <span className="text-text-tertiary text-sm ml-auto">
                              {reply.date}
                            </span>
                          </div>
                          <p className="text-text-secondary mb-2">
                            {reply.content}
                          </p>
                          <button className="inline-flex items-center text-text-tertiary hover:text-primary transition-colors duration-300">
                            <Icon name="ThumbsUp" size={14} className="mr-1" />
                            <span className="text-sm">{reply.likes}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CommentSection;
