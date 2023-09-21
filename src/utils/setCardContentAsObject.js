export default card => {
    const cardCopy = card;
    const cardContentAsObject = {};
    card.cardContents.forEach(cardContent => {
        cardContentAsObject[cardContent.type] = cardContent.value;
    });
    card.cardContents = cardContentAsObject;
    return cardCopy;
};
