import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import PostPage from "./components/PostPage";
import MissingPage from "./components/MissingPage";
import Footer from "./components/Footer";
import { format } from "date-fns";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      datetime: `March 12, 2023 11:26 PM`,
      title: `First Post`,
      body: `This is the first Post in this React Js Blog. All of these posts are hardcoded static data though.`,
    },
    {
      id: 2,
      datetime: `March 12, 2023 11:27 PM`,
      title: `Second Post`,
      body: `This is the second Post in this React Js Blog. All of these posts are hardcoded static data though.`,
    },
    {
      id: 3,
      datetime: `March 12, 2023 11:27 PM`,
      title: `3rd Post`,
      body: `This is the third Post in this React Js Blog. All of these posts are hardcoded static data though.`,
    },
    {
      id: 4,
      datetime: `March 12, 2023 11:28 PM`,
      title: `Fourth Post`,
      body: `This is the fourth Post in this React Js Blog. All of these posts are hardcoded static data though.`,
    },
  ]);
  const [activeTab, setActiveTab] = useState(1);
  const [title, setTitle] = useState(``);
  const [body, setBody] = useState(``);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id.toString() !== id);

    setPosts(postList);
    navigate(`/`);
    setActiveTab(1);
  };

  const handleCreatePost = (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    console.log(posts[posts.length - 1]);
    console.log(id);
    const datetime = format(new Date(), `MMMM dd, yyyy pp`);
    const newPost = { id, datetime, title, body };
    const postList = [...posts, newPost];

    setPosts(postList);
    setTitle(``);
    setBody(``);
    navigate(`/`);
    setActiveTab(1);
  };

  return (
    <div className="flex h-full flex-col">
      <header className="sticky top-0 left-0 space-y-4 border-b bg-transparent p-4 pb-0 backdrop-blur">
        <Header />
        <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Posts posts={posts} />} />
          <Route
            path="/create"
            element={
              <CreatePost
                title={title}
                body={body}
                setTitle={setTitle}
                setBody={setBody}
                handleCreatePost={handleCreatePost}
              />
            }
          />
          <Route
            path="/post/:id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
