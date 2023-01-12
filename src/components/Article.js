function Article ({post: {date = "January 1, 1970", minutes, preview, title}}){
    function readtime(){
        if(minutes <=5){
            return "☕️ 3 min read";
        }
        else if(minutes <=10 && minutes>5){
            return "☕️☕️ 10 min read";
        }
        else if(minutes <=15 && minutes>10){
            return "☕️☕️☕️ 15 min read"
        }
        else if(minutes <=20 && minutes>15){
            return "☕️☕️☕️☕️ 20 min read"
        }

    }
    return(
       <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <small>{readtime()}</small>
        <p>{preview}</p>
       </article> 
    )
}

export default Article;