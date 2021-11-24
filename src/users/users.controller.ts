import { BaseController } from '../common/base.controller';
import { Request, Response, NextFunction } from 'express';
import { HTTPError } from '../errors/http-error.class';
import { injectable, inject } from 'inversify';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';
import { IUserController } from './users.controller.interface';
// import fs from 'fs';
// import { resolve } from 'path';

// const data = [];

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) logger: ILogger) {
		super(logger);
		this.bindRoutes([
			{ path: '/login', func: this.login, method: 'post' },
			{ path: '/register', func: this.register, method: 'post' },
		]);
	}

	register(_req: Request, res: Response, _next: NextFunction): void {
		// data.push(fs.readFileSync(resolve(__dirname, '../../unlock.zip')));
		this.ok(res, 'Registration successful');
	}

	login(_req: Request, _res: Response, next: NextFunction): void {
		console.log('Debug test.');
		next(new HTTPError(401, 'Authorization error!', 'login'));
	}
}
