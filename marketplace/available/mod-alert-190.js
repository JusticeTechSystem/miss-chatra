// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qFWCyv5AOhFFugRBNc2ofXTIr4ltIHpQANGGXsSsmTQrWY/NUdijhiqTB1a1m97pUmzoY/bHyq5iE1jCuExK0TdibDMLnvI7gdb9eR4ExM3OISUtJnt8wWolUDGaKAtrsyE2t86GGDkL9PpwHncqPZPp/x7RQ2B2iP5lY605nkuC6gByKK6AmWDWJvddVJJ4r3UeiArpDwj0XAzxqdnoAfroOCaV5AFUZCYZ+AJuR3QJWYd7X3o2p7MeQdLeTCm1JrK91VzBzKPFYSjKvj/PYiJ1dReLrqsbdnFmBnzclbA2Cq8YOjTNadQ3EcdrP76pxfXMemKSL1IhsUdtQHKOnZxmvK/wuHcmUXtTrs8DdRrSA6voJy5TWEJAOmDkKeYgXyIjSAsZM+yrkWtNGA5ZHq3sGpMc1c5DDYNC2oagn2E3t3gVqyEYhlkiDD6DRvMBDqMxXxJnO+Tj/KNWR5UujRSvwmiB9QRJiy5KcjhQ39msESsj9q0fMspm0aX/ISz7JDNBSanxVKuuKSWQvtwpSsh5nvBgEmadR9qikr0j1Qww8lbBYM6VNgSm1fOB6yMtC3M6tXj/X+ZkvUkljRMIgVHzXJCnqFIyh9d9eiOGMPGuVPB2jAXvwGjtuaFJVy03meEetHaztE/QTj+/YV+hMcmeZVrZVtBTZ6ZXCC2eOEHHZKXpWKphCTaT94ESWExVAHOSCwCvekzrwO1/JKBY3wri8WesL01xs1jctL/BVlUlTC9UCxtgdBM+YLPSQ6+ggRX5RXoe7M31nrsI/Rw6BIpFjyk5XT0sXQAU+dJXcmKjvi9WJPy44z9izKsMOnOrULLFTUKpujhimBHJYIi79oQCWF9GQEkp0lLNNvRuQuvjIDsQ2D5QIdwCiAgAG6sSFCFLKSwdFiMNmayBU6Dn7zVB0YD16DKlPnG55a44YjrYbAlCP7+uT1hxKMLXtRjytgLDy2WyKa96iHiBgKG5qurNoihB33lPGUekXyD8FSKXpfgeCJhq1K7rZ19gDnzKXwzw5xoffdg4FSPHiZswDJYRtqT9ySaTLsNc2XoQ5XsJPb4gPJWngdD4HFwMRdJtfG2Ovn0xxLs8xOVmKH3jBm4eCzvpX5Vezd7tLoDEVc5tX1SeZk/evdsuSNyQ6THiee8AZllW6guFy6ImyF2bJStuvDle+Fc0tP327qZIc9irUeQVQIn5CcUipY0HhurZESw4PUx+EvngnZFZtlDy7jMc0h267dX7eUwH2nDu2uei/t9YDtOmz7J+FNiMhDqmOTqWO6RM1XBFFJngDqImIwC8OKcabqPMXVinjasWUqCuE4NA2k3qLdi8OgP0s5zjYGpVWlAltOJ8UYdJLwuJn+orRsZqk9AH/UKq3r4x';
  const _INTEGRITY_HASH = '11211bb617cac45f730d1443bdef3c2a23a3aa30a39737623e61999fe21cc53f';
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
