import Card from "./components/card";
function mapFunction(contact){
    return <Card {...contact}key={contact.id}/>;
}

export default mapFunction;