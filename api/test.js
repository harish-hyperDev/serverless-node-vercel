// exports.handler = async (event, context) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Hello, World!',
//     }),
//   };
// };


module.exports = (req, res) => {
  /* let who = 'anonymous';

  if (req.body && req.body.who) {
    who = req.body.who;
  } else if (req.query.who) {
    who = req.query.who;
  } else if (req.cookies.who) {
    who = req.cookies.who;
  } */

  if(req.method === 'GET') {
    res.status(200).send(`Hello!`);
  }
};