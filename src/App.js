import BucketList from "./components/BucketList";

const App = () => {
    return (
        <main className="bg-primaryBg 
        w-screen h-screen overflow-auto p-5 z-10">
            <div className="bg-leaves-pattern w-screen z-20">
                <BucketList />

            </div>
        </main>
    );
};

export default App;
