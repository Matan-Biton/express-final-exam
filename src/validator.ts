import type { NextFunction, Request, Response } from 'express';


/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
export default function validator(req: Request, res: Response, next: NextFunction) {
    // TODO implement me
    if (req.method === 'GET') {
        if (!req.query.height) throw new Error("height is undefined on named incorrectly");
        if (!req.query.weight) throw new Error("weight is undefined on named incorrectly");
        if (!req.query.heightUnit) throw new Error("heightUnit is undefined on named incorrectly");
        if (!req.query.weightUnit) throw new Error("weightUnit is undefined on named incorrectly");
        if (!'0123'.includes(req.query.heightUnit as string)) throw new Error("heightUnit should ne 0, 1, 2 or 3");
        if (!'012'.includes(req.query.weightUnit as string)) throw new Error("weightUnit should ne 0, 1, or 2");
    }
    if (req.method === 'POST') {
        if (!req.body.height) throw new Error("height is undefined on named incorrectly");
        if (!req.body.weight) throw new Error("weight is undefined on named incorrectly");
        if (!req.body.heightUnit) throw new Error("heightUnit is undefined on named incorrectly");
        if (!req.body.weightUnit) throw new Error("weightUnit is undefined on named incorrectly");
        if (!'0123'.includes(req.body.heightUnit as string)) throw new Error("heightUnit should ne 0, 1, 2 or 3");
        if (!'012'.includes(req.body.weightUnit as string)) throw new Error("weightUnit should ne 0, 1, or 2");
    }
    
    next();
}
