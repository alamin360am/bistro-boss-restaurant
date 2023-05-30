
const Menu = ({menu}) => {
    const {name, recipe, image, price} = menu;
    return (
        <div className="flex justify-between gap-2 mb-4">
            <img src={image} alt={name} className="w-[100px] h-[100px] rounded-full rounded-tl"/>
            <div>
                <h4 className="text-xl">{name}</h4>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default Menu;