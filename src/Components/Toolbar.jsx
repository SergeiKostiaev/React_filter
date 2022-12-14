function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <div className="filters">
            {filters.map((filter) => {
                return <button
                        key={filter}
                        onClick={() => onSelectFilter(filter)}
                        style={{ backgroundColor: selected === filter ? "#666" : "#fff" }}
                    >{filter}</button>
            })}
        </div>
    )
}
export default Toolbar;