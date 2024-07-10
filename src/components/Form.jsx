function Form() {
    function handleSubmit(event) {
        event.preventDefault();

        console.log(event);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>

            <select>
                {/* создаем динамически массив с 20 элементами */}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input type="text" placeholder="Item..." />
            <button>Add</button>
        </form>
    );
}

export default Form;
