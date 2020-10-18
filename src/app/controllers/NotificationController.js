import Notification from '../schemas/Notification'

class NotificationController {
  async index(req, res) {

    const isProvider = await User.findOne({
      where: {
        id: provider_id,
        provider: true
      },
    });

    return res.json();
  }
}

export default new NotificationController();
