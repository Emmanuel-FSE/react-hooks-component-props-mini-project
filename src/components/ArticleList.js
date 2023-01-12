import Article from "./Article"

function ArticleList({list}){
    const singleArt = list?.map((item) => {
        return <Article key={item.id} post={item}/>;
    });
    return(
    <main>
        {singleArt}
    </main>
    );
     
}
export default ArticleList;