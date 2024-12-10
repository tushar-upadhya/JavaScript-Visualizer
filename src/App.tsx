import CodeEditor from "./components/editor/CodeEditor";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="w-full h-screen bg-primary">
      <div className="mb-2">
        <Header />
      </div>

      <div className="h-[calc(100%-64px)]">
        <CodeEditor
          code={`console.log("Hello, world!");`}
          markers={[{ start: 0, end: 5 }]}
          onChangeCode={(newCode) => console.log(newCode)}
          locked={false}
        />
      </div>
    </div>
  );
};

export default App;
