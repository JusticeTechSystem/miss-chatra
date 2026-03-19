// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iaBH8KX4dJh1u7bBFp32zMIUDgnj/OECpn+CQdxlPh9fqMEt/J+Jlid8qzeOH6q/s3rcw7bc/BAQpsxy/kqFTztUKoeWtdfwHHEb93q1wm7K+kJq5nYz3kt9w4qzx70YvWXQMfgKXooxxwN6/HIe247brJJn5yn3BryfAm8ZENESxGfC/xK857kL7Z+a/ot89J4eOLBEMzUlJ2F0lVM3X2rc8A1y8AKhOXQbfg2oFecLrVPAxDuD066+CppQSuEsvaY1OauIIbGCktAG+COSUhAuBv5rGToH82Egulu6nzhIZnTvIYyMlftqXnDDNfQgfmBZcBYzjHbMB/evltibgRAlmgyk2mjS6VZ9smQKAcXIH1xElXyBP1vp0+6LpK4+AqVAwbnbHVPSpzVN4Zq46dugLs9ByUCiEo13SUg2wrKLR42S2kQn3bMlTdVwGf+dhZEQpCXyFifcMZzhCKtn5qGFyI569tNsgv5zTDyYcuHF3EOjhOHUb5GLevI4keYhQoLcwtyqUGpn/MxjVWV7kWjjFME/ciMFokk0RnvjIJOk8d7LM7u8xBhU8jIA2n1s4u4Gqxa0GZRiLD2f9jgTNkTYl3XA3LDybJNmTKo+ojUSvjCWUR6kX/zM/TJVZOVsJ0rSsU88qhvyeEJqFhbkILMLQdFivacmhstGi0dn0DzaX0HERJoiI8GNrcyda+Ax5AbsBB8uBOVoyKjYlnWMRu+wlXc4TdCW6dz36UDboxtLcOsPg9c1+WlUrq4XNRnQC6JOoTrrBVwFS2Zk2U695qmZa9ab4u18AGFGCMozbbNo9s/HcloTVqu9KYnlm8w03y26Ki4lXbgnpOM8+K3sGsG/F/rmUV2JHf0D/fGB07bWJZlLLk/fhToCyMpslsrL6btlzwfBDDxsPrrhuKudzV6jI09CFPEJVrZWdzCsjYokjVcGrhvWtqVqy/p9+Jy8ok0GltMGegAO+7oJvnl8FKGa4Xk/wt8FOIpUOo+B7ZtCpey5LBpP60htn9VP0zNEhrtXH2XqDE906xmdY0rvhmeMHEKtDUUMXA6ONGHnaxRcIMV1yZXFRFXj/scRfp0LCNdFy+Se+hdWF+gAhsNZMmoWOp+xcS2BiQgphOPpQQXGimJaLupY19qMIXoLmOKHFvn2flhfxdZ3P95mhRLQXgDNajO+t8kCYLSh2xGwr31fFgjBwrSX2nzGwBojD70sqi3baqF1Z1MD';
  const _INTEGRITY_HASH = 'dff1879587beb225392962484413ba64a792cf2b2053a847b6b0751a5589305b';
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
