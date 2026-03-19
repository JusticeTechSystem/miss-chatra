// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZnYb/McW1H8bsi5OjFsqF0o8Hc9flNr5fZ4dDqS3nujuS/7v66qzIdA31Grf03FwKYV7/OprG7Kry/u7s8aeQERhrw0jbHfGD+4hi6FzfvL7eHx967moVh+87LmACj8TzDqw6aB2W6PRYnKQpZzAem0dkZrQmtRISMGpZ1HiCeCLjbpDJc7ZGvu95Elv5femeSn38Iy+xSsxjUQQgqt+QO+LXnHZbL5PSmWyWdhqXmdLukx9ai8V8YEqDXp7JPmM4KjuxV6Ll5hEfJhaZOn9cJettHIR7UjzLVKjDrg4ilfvMBgxSA9rTnaeBIEN49VVPu6W1qEG3HgJ/ZShOSfUkkmMlIwNFnI9+FpwVc/tft/JvbU920grNmfWLg9i3o+fwh8kAcfkdvt376PCwUxSgXN2a6alEsbPguNaUkzrjqtbJ1YBROlEsHKq/gr9F4ZKPlOZNYgrFGmngYC7e+aigXSsWc9zDgNUSLw1u1fxekGFoaN2ou4fQjow7LDEiPscQARkxjbUoDFL2E7STGXaYPJdfcmfsczgSgIvNBrCdJ//6VM9zu3WvaPQgb98MZTe0EoR3w44W/JixQsUkwUMBNCsT6nJ4DqquZURpdjKWAXXAj3p+75V4o2mnkK6VxTBg7g19TAH8pQwgUr5nqOpPjpajIRFgXF2hcKS8wps8m/3QMDQksE/ZdKIe1/JPAFfkvkoaVGuE3X/fqPswrTdoS+emCYzAk0wqzB6VAkN/r9bwj+IXgTCLxiTlUmPGi8hNtVBE6Yk/2nFTwaPn/R4J+pDB88Q7rKL2P5xBkxm0vyFReZ3g2e6195CjevaU6litDsimSPkmXsDqyYxQa1H94VvViE5FRojcM5K0cjjjKsvhL3VYFNa/uetpgzOjdVjzwXAY/ZOIA/eT7zRjtfPPXh9o4S6VX9rbWxImWF/Gm7C3vL1e1Qhu6tTDi3KcJcDD7nUdIe3fJvVEpdDq+qUW+yg3T2yOd7m3EnPkJzDq8yrsFxx2oOSzeRIRe2LbM0K9VIF2FDzn6JRp/oehbEHBxuGC5A15J1bS5GTj675WBHCvc9Vu2hdZEuoXBACJDl8VCA9QsVgto3/5QYCwUsBbip4gt9wZtWC8QlY73gwV93Zj1CQoZwquh2DGDP1/mpAKsEv/RVrXpzz5/6pI8wjoCO9iezHui3AYJtvZr/uBpyR9hUE1woUaq4g';
  const _INTEGRITY_HASH = '259ce8a082a24de73fbe78fc2df1bbfecec050a0074c45e517abe65c316b827c';
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
