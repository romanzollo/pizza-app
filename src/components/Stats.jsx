function Stats({ items }) {
    // делать обязательно условный рендеринг, если нет элементов
    // правила хорошего тона)
    if (!items.length)
        return (
            <p className="stats">
                <em>Start adding some items to your packing list 🚀</em>
            </p>
        );

    const numItems = items.length;
    const numPucked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPucked / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? `You got everything! Ready to go ✈`
                    : `💼 You have ${numItems} items on your list, and you already packed ${numPucked} (${percentage}%)`}
            </em>
        </footer>
    );
}

export default Stats;
