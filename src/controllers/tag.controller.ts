import { NextFunction, Request, Response, Router } from 'express'

const router = Router()

/**
 * Get top 10 popular tags
 * @auth optional
 * @route {GET} /api/tags
 * @returns tags list of tag names
 */
router.get(
    '/tags',
    async (req: Request, res: Response, next: NextFunction) => {}
)

export default router
