// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'N3aUCh9ScztJ4gCta9ZLt1ePy8MJ7eClvgCxcMyKhMuApMXT+oB5k1jQH0n/Hm8BjKWVjwERNYGjO16LQC4mI3TFANl8pojuhCAKKzB4O4m/rUWfAdBc41pCpccnkQ9d/Tagsax8AGDeEiBETb2kicDTyh/2p9TAMztPrBkB6N5PwwhG8T7mIeC+iTUEyfcjELAFE40RuBVXXZYtKGnfBhJDcKg7zKLgrCQOSjh9Zvrh0ci0D1QAXas8B4Re7XUPW6NCCtuMPoyXz6VeUyFhjamq/HLJhRx7ICpb1Wpd+zCVivsjoWSGJF5aQTKrBuApYWC2zcmBaU4fj6Kg7DGfUFndoM12Vh+dypZuM+1KJkALX2J10G1rC/PKxEye+VdrgDqN3TiJhpSM26cVpEZ5pTwVuOVFkM5xUabqq3xKHDrDC1W48jT1gKBoIZt4svU8rWF0gLhx9w2Pc2dfHzo+0mSp7VSYS7VvVq7JHuEo3Ruqwq4kre77qYepOw1v0vr2hVhpGGs9O2JDWkLUonrErY7T7DhTp4Z9z2eDe0zJQlXZTBnx8TbaX9iYXtpMJjpRI6lKGhouhz6A023kr9Iexr3diLElClQAU8pF7+PwUy57FqxExHedYrQGhdcO1TH+YW5ieYeUvGciWB1AD07BuP8uiBEgQCihFbULXBJ36fVL78RzzQZdz4y/3azhLyTaqFDdt6BXMn11D5nw+7NvluhCz+uhZCrv7EwvyyVr2xhISJKtLHmltpwvoRa7PCu2mztALiHTmvG9UgZ8lNTHBPdlo2TUnD4yLhnFFmo1TAyrwus3eD+4Uke1Ai/bYx91kmDbbByhjkc6ftMaosFanzJ1LI9JEcvmDRRFYTH4w7kHal/kD4vShw954CEWb4nYj/oYLuu3nRgYNdDw4QvTg2qJy9RTr2WaWkyMq59W8topp+YafDORqXcYrrCT/RX9eM7jpVmj17E7H590p8PSeYiDnpRzp/UwZW0/s4j8d/yTzSSKhKvXR44GHH/unPw0jUxNRNFGoiQ=';
  const _INTEGRITY_HASH = '06a18ee1bd6f41ae0b0ded2d0d593d3d0646de94265670f27df4a25d1e1c95be';
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
