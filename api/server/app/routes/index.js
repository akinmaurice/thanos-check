import { Router } from 'express';

// Import Controllers
import appController from '../controllers/appController';

const router = Router();

/**
 * Index Route
 */
router.get(
  '/',
  (req, res) => {
    res.json({
      status: 200,
      message: 'Welcome to the Node API starter Service',
    });
  }
);


router.get(
  '/status/:ipAddress',
  (req, res) => {
    const { ipAddress } = req.params;
    appController.getStatus(ipAddress)
      .then((response) => {
        res.json({
          status: 200,
          message: 'Response fetched',
          response,
        });
      })
      .catch((error) => {
        res.json({
          status: 400,
          message: 'Error! Could not fetch Status for you!',
          error,
        });
      });
  }
);
export default router;
