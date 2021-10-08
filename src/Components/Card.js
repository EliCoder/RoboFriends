const Card = ({name, email, id}) => {
    return (
        <div className="bg-light-purple dib br3 ma2 pd3 grow bw2 shadow-5 tc">
            <img alt="robot" src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;