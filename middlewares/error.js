module.exports = (req, res, next, err) => {
    console.error(err);
    return res.status(500).end();
};