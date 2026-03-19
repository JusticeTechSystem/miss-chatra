// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Hxwrf8lReK1+QoPK+zFQwvxU0c8lZ9a7S/afq9u6YnTDR2ODJAx8NjAEwYp1oQMtN9KSJJE6G+lNpYwpg1lJeOq4ia9+fFEJMqFyjb4n+OJ5pmHxBiuQT7zYtN/ANmgjyg3N+oF3Oj2QxoFxGBf6QUWU5v9s3IoSPzg+0uHfTygo1HEYKDzRLh+q27USP1cXvlFnMF6iOIn2VQVFP163Le/vjmP0mM+WAQMNwjSlTaNPQjZSQYpytfNwfkKLdeTRUtRxmVB+OExNc6jBYZUlUu3Dbu5I/rSaYQxvscPZ/NNOKTrzajh2+1CTyUygnWVqKzo339V9VIrDTQEyGVo0Kzm+eAQw0kP8gzYsXqDIonXg6Lr2RqqbpXcgj7PUZs3ymTHOKce8hFellFX5pBKu3Dk7X2JRv4mi6NPR2FYtpK9JTOt0CE+KynT8TIO6ottFVZnZ9ad5wCyAMQtL2i7opBbyKGpml9IyeNYiOm07KVP7DrtnrHGEemPZ2TB3KNcrsdaTRsP6SXyAi6PqNW3ElzeK1ZHazxMY8V7ANSa1W7CfbHL5AaeX7JiC85ENCBr67ql8sd2AkgHrReQewLIrqp9xsplrKHmZoKvn575QUGMJtZU6C+mdu9RAEFoWuPat95kW4VenS3clArtWnD0JH2mVOB/X5u2nzpFX3BKS+DNaaON1EDhOFSOMK3cFftcr2x56tH4FDWyFg/j94AQAUIdPLrlzGa+bxQNdfMdRQ5pbSMhSEvHV7gKucwx28GQHC0i6SOp62gQxhmOXQgjJGrkAEAL+hbxl+JyfgOKP2+nPlMZ0e/Cx8xvFSJ8WCWvZY42sjz8JG7wUQCnaHpz+ih82PGAPRKm62P4HdcjD0rPq9G1qJej6eTuE2+hf8IWuoFf1FdwEhtCMBb2D6W92irOqmd8ysH/HEX3dJlIq1PZox3wOCy+An3/koP9+yZUc/uPLTTaPAAI5mPHh4J/E+vTxinKSm8+2ibgTffmavKZJIZxV4NUMZKJPYUi0wrvvisxNlqz0qA68GtWBcnIpFObVrojGKQMkLQIXtJa2NU3MsUMyDv1xPXVSixv3MIZUhGA8z/EOtz00fk66ktEDAwsUZl5kreR07ymStrtLVvUN/wXLWoh1e+7BYJqLcv66m+sFWSL3AoYfwrVE7l5Xw4z663zsGmvnDsQQ2bqT0i2PXjMT1nOrBZ6I6iT9k9MzLX2AMnX/ix9wXXZnQP3i1R+ehyM8UA0zMkjCsmr+kAuQGsmoQrqRvAiywxs0dOEGr+nUyMJPES8ATDs1x79J7vi6P3CowC8Jo6ShPB05KiDtEyJ0eWfFIaGETO9JORTRM7zXb6aZzdmbDSx2i1NwGmUPAifUOSLRGIMSbaK/';
  const _INTEGRITY_HASH = 'b38127d271d68a7a92a4c7284d23ef672dbcfaa8f8ce922c8fd5c640474012aa';
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
