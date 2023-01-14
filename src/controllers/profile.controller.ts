import { NextFunction, Request, Response, Router } from 'express'

const router = Router()

/**
 * Get profile
 * @auth optional
 * @route {GET} /profiles/:username
 * @param username string
 * @returns profile
 */
router.get(
    '/profiles/:username',
    async (req: Request, res: Response, next: NextFunction) => {}
)

/**
 * Follow user
 * @auth required
 * @route {POST} /profiles/:username/follow
 * @param username string
 * @returns profile
 */
router.post(
    '/profiles/:username/follow',
    async (req: Request, res: Response, next: NextFunction) => {}
)

/**
 * Unfollow user
 * @auth required
 * @route {DELETE} /profiles/:username/follow
 * @param username string
 * @returns profiles
 */
router.delete(
    '/profiles/:username/follow',
    async (req: Request, res: Response, next: NextFunction) => {}
)

export default router
