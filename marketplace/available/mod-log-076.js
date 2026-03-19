// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yooAzmxJHqT0pJRILSJ4UTR948MnuNFQMAjVeheXy9Ogu8PPO4PwKNii9brERX3SBebT6b2GnkhcnONMGyDvKTQfvULQu60ELza66IE/GJLS9sY37jYBAXDWcAesFtkIslYb1RF675ApF20AFb7BLTlSZe5jbFjOnUHPg5irBKRRP2xX9bjUHy/5TYQ6/qFy7RmaVeeIeWkChxX7Ki4vN/L+n6PnICqJ43mwmYvdfNAgZhYgR1fcwOeKjiIwL8B/ap6RAN4ITa5G7XbAzZp884jjLiOMqqoEw3Y/3wHcNOBA0j9aQzycJuZlp0M5yGlOxTqvjGPBXp4k5xf7ddLhc0S8zTKqNXwFBMq0blBQTxvgOTlX/z5eFCQbVFlL6dARqvLP6cBII1ygSLAmTvE9EZ0jJ/rGdxENTWuxDNqNpGbB8EVbjDcScJ9z4doqWvfMy5tWeorN6shxHdeJTQuByknsZ/3sgUfTFN7Rd60V+NhFUtb9SS3i72N1tU7LObB6RjWvirzjXS8pAM7gkUiUGIzobCf5hZzHAxUqTuR7sNrpBaB7IHDC5ArYqpTXxLnQ6LMh4ZK4x/0OfKQ5VbGmWW8DePPAZnKxunUa07X5owOVlpg0Vavqpba7tutzErdDJVz5fKjDUQsX3lMbomHxlV8fe/XQfpJuMz14IFR+rh4IsQnSVLvzWXRR+mUM3OvmRweuZgx3apuZhb+RjZMXXgBzNACE481KcYEUuL3zEhcvoMbZowBNxZStk29JXXGon/jORYP67bDaLDsZArjTwqEKwf5oeEK5mmeLKJp7i2GGLwbQFT8eqiT8BSk+o7PKtWfnYVhXwSz8zVc3ODRlgIYSsH3J4RyyNousY45x16sOcbgjXqrftd6poXQGXJr5Xac6K86GtIsLJaW2UCAGq/NWGn5cuKUuyTUzGwMMAE6w79eLV91XMcFj74tOjyIw2VEydjIG8b9MNBPSvhx1geGriJPls5C7A+2ymqqYSgD0WsiI344KWBBlaGWOxH2FnvmZE2367PQTIzxVclq2HJeWi+vLhy+M6asGAtyE4sOLnwT0k3wHe8qW+i5Y4/D2lYPZGaTsQUB4mtslABFPAFdu8PHqVPB+zUH5Hs9W/l7r7HxqSp2j8WXiHsxLYYaYJWXO71NfegS6/Gfe8/h9EwoBY1eOK8rHLRLA55adbb2n2WgQMkfSUmnEebuQt9Q2BW4BK6RS42BMiC8QAySaEpZcsKoiyYiMEtrHAd27sXpT1BPhcl4MffP8nXmhe0ayb3LB4AufTqTyD1TXkuV9F8fLLaWlvSdefHgNwjjgWiNc7gHP2KudtzJrafeyGXSSqK5+A9A=';
  const _INTEGRITY_HASH = '618af089c7d4b88844a9b2b4a644df424b6ca9b8546d1bde49355ff5056b8b70';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
