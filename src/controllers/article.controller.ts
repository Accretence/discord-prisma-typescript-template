import { NextFunction, Request, Response, Router } from 'express'

const router = Router()

/**
 * Get paginated articles
 * @auth optional
 * @route {GET} /articles
 * @queryparam offset number of articles dismissed from the first one
 * @queryparam limit number of articles returned
 * @queryparam tag
 * @queryparam author
 * @queryparam favorited
 * @returns articles: list of articles
 */
router.get(
    '/articles',
    async (req: Request, res: Response, next: NextFunction) => {}
)

/**
 * Get paginated feed articles
 * @auth required
 * @route {GET} /articles/feed
 * @returns articles list of articles
 */
router.get(
    '/articles/feed',
    async (req: Request, res: Response, next: NextFunction) => {}
)

/**
 * Create article
 * @route {POST} /articles
 * @bodyparam  title
 * @bodyparam  description
 * @bodyparam  body
 * @bodyparam  tagList list of tags
 * @returns article created article
 */
router.post(
    '/articles',
    async (req: Request, res: Response, next: NextFunction) => {}
)

/**
 * Get unique article
 * @auth optional
 * @route {GET} /article/:slug
 * @param slug slug of the article (based on the title)
 * @returns article
 */
router.get(
    '/articles/:slug',
    async (req: Request, res: Response, next: NextFunction) => {}
)

/**
 * Update article
 * @auth required
 * @route {PUT} /articles/:slug
 * @param slug slug of the article (based on the title)
 * @bodyparam title new title
 * @bodyparam description new description
 * @bodyparam body new content
 * @returns article updated article
 */
router.put(
    '/articles/:slug',
    async (req: Request, res: Response, next: NextFunction) => {}
)

/**
 * Delete article
 * @auth required
 * @route {DELETE} /article/:id
 * @param slug slug of the article
 */
router.delete(
    '/articles/:slug',
    async (req: Request, res: Response, next: NextFunction) => {}
)

/**
 * Get comments from an article
 * @auth optional
 * @route {GET} /articles/:slug/comments
 * @param slug slug of the article (based on the title)
 * @returns comments list of comments
 */
router.get(
    '/articles/:slug/comments',
    async (req: Request, res: Response, next: NextFunction) => {}
)

/**
 * Add comment to article
 * @auth required
 * @route {POST} /articles/:slug/comments
 * @param slug slug of the article (based on the title)
 * @bodyparam body content of the comment
 * @returns comment created comment
 */
router.post(
    '/articles/:slug/comments',
    async (req: Request, res: Response, next: NextFunction) => {}
)

/**
 * Delete comment
 * @auth required
 * @route {DELETE} /articles/:slug/comments/:id
 * @param slug slug of the article (based on the title)
 * @param id id of the comment
 */
router.delete(
    '/articles/:slug/comments/:id',
    async (req: Request, res: Response, next: NextFunction) => {}
)

/**
 * Favorite article
 * @auth required
 * @route {POST} /articles/:slug/favorite
 * @param slug slug of the article (based on the title)
 * @returns article favorited article
 */
router.post(
    '/articles/:slug/favorite',
    async (req: Request, res: Response, next: NextFunction) => {}
)

/**
 * Unfavorite article
 * @auth required
 * @route {DELETE} /articles/:slug/favorite
 * @param slug slug of the article (based on the title)
 * @returns article unfavorited article
 */
router.delete(
    '/articles/:slug/favorite',
    async (req: Request, res: Response, next: NextFunction) => {}
)

export default router
