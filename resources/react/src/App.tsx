type Props = {
    message?: string;
};

function App(props: Props) {
    return (
        <div className="App">
            <h1>Vite + React + Laravel</h1>
            {props.message}
        </div>
    );
}

export default App;
