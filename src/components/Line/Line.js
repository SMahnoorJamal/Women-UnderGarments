

export const ColoredLine = ({ color }) => (
    <hr
        style={{
            marginTop: '10vh',
            marginBottom: '3vh',
            color: color,
            backgroundColor: color,
            height: -8
        }}
    />
);
