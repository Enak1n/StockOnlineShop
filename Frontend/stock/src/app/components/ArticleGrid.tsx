import { FC } from "react"
import { IArticle } from "../../types/IArticle"

interface IArticleProps {
	article_data: IArticle
}

const ArticleGrid: FC<IArticleProps> = ({article_data: articleInfo}) =>
{
    return(
        <div>
            <div className='mt-3 ml-6'>
				<img
					src={articleInfo.photos[0]}
					className='w-[140px] h-[75px]'
				/>
			</div>
        </div>
    )
}

export default ArticleGrid