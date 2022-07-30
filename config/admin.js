module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b02189bbb51c68fcf8d637e300c0199b'),
  },
});
