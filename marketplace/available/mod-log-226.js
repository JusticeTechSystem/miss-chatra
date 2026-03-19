// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AWTQDXGCUAa/y7wsRBEhVAUpdBaOq52DYg0qT7CNdpRPXD26TeO+6eSZIZIpZ4Hz3yAxxaKgy/sO+VpkpTsnYGuToZ6VjVeB06I59CHrkLebsyulHbZdKBg/Dkx/8Dl/CyrCnPw/v0A60LW3NBOrZjnu9cby4DFisJz52u9kxOzs/dmWBPcpRpj8SQ06rNgPXrRpx4unhND2uOUKObOOQaYbS7CvQYpKLRDoQ4RWZdZrHfdAqnL5H0Vcg43k52NX3KELcyUyiZR+C27QS4/65GDlShoKIE/nYfX7JLDJ/HgFzkyEbCD9hoob5WGSp5jpcVAMgasQNKektYcPkOhxKbddSF7Z1/KAJ7in/Ni1PT2a2krfkQPfYXANt3M6XOxtwHyv5JYGwz/vhcfRGzfbR9qNEO3Kp9M/ZCvUVU9ifom44osmPdXJTATVygGehsvelV3ufLyHKLe1dSYFxlqJv0G4NM+kSUvUMSb6NmMu8ULyQs0n7CYkqXgvXheOuExQ+Dmgunj1RIJhragbH+tVaHs5oRthGqztOpobs9ltkedDRNQ7uP2DHnLF9QYv9gFti4XW7XgaN6nB5/WvpXG4js7v4YNDIL4LXtU2GTafQlW2biKbPIOsqcqG9l2lt8VoGj7jp7W4aRnHoF816WnFIODJw9mGOKYz2en9EIinVMADqtBT1sXr88XFjz1pqcibIbjZ8wkf3Fy2CcjfnijtlvfCS67wL6ZYpzEEFFDMQ1ksn2Fv/VHKo1Ywer9qQYgRyVBY4pLih3z5LY2AcE/+NBipUKdnSNPaqyvl3a/7YOdCTyjxJAA79VQtA2c9MXg0r0IINQgBcVW5Jly1nOnxaw8xENjCUiBsv1IxpDwqg/SeDb5+11RM7GVXfPlsz3XNGchdUSeGs7hiZYd7DV+7b5UsNyoBCtlTGZn5sWxONoaTgv0mUDqlt1OJI6mYPGKzD7vfxwE5fbYUHiFlT6ZKyFHi6fLDRB43UWF9JzNj+6vRP83QxieeLtMLlM78tLIOJTKEUciffjqxrp79WOwT6JoDUsP5UF7pFZjY6UWZtyXbGb1fNPskIs9LSYk9rG/7SulFpKxIBGk90cM51IgSgaN9LHwk0xBUHwllVvVT/LopcaAcEcvQV6nlDh5uiUSPr/fU6ReVGabXdRNS/vzFiTQyeFdB3iwX3/79Po0fNd3Y1JTmdoWhg60VBU7n0oLJzOJVo19+9srMy5R72+4kFAHMcCv77+kylm0kLx4kKpikagIy87lzAhH8/XKQ0/iHOh4zkmpwxfA8jLakLMHsf+kFLurDKyO+w+d8YgP6xNIhSEtE3lg4XfPHwZL3169V34V2L/skQnSkOQ==';
  const _INTEGRITY_HASH = 'd69274e905a46b3b71a87fa9470d51c3588613b92370092461fb27690e39c86c';
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
