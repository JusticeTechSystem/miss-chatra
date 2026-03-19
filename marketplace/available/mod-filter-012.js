// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'B6zwZBJsVIw06d2VuE24QWw/5OoSA6Cu2olxGsyaU07L9rQjRPM/Xeh500BEycIkL87lbhQZA8GdZue1AHvoZzqPv96/rLiUHU+MxHH8yA7UEdOyCIrivF6tbwghAsOXGqU5J823uHTz+8I3SCKar5ZXGLD/jKaBnuTbV+S1AT1fG0sgaywo+9X3eWiGpewcGvrr0BgRCZws4AdZg5GCbds0r2HgCfL4hDKDSrDagIdfeaXXHa9oDlp271ARr3/OmvFIjS+skkmBMCZjL5lYiP1iCjdpwDQ+EHMsn+00t/Dz0sjRV3lfiadfpvdCR7VYl0am2HmuJ64xZK0hA0DDu1RJBtfRPg0I29bq3eIK8SMNdqUjR11Xl8h3m55d8IE4/35CKsA2ecDkeWp6WJSJE1PWdZYEoVc/qavf1b1BRkSXAqdBuz3mJSfK8gKVPjZSdpNsnzP0OE34zVNLBlgVGo3zdLUTCgjumGK8CZ4MnH6C1Jv3iwB48T4XWNRJBYlEyJVYc57wyiwJ3z4oX7mtaOn9A7aaVN6qpBlj9KkMGAsUYzV9IhZsnm2D5mRXz2l1Q9GYJnq5LF4Fy4D0Z2PRldYWTxBuCkkVfdCfYVaiZHyDFgkc2jT1p/olUyleIIi1kHymSee5Ehg5TFYWipKlMrZQJop139oT8R0NPjLuZIwgpQGsWjESBW5K8UNC1cbcX0k1Fa+JNIheQ0yVl4q+2anRgMJ9P6KaBY1KycY9BccmKgl1I80YIFjD8PW39fUJvd4gUYn0K+Vz03gl5iF9cBXy69vltD5fskypSYUd7fmC5MvVay0F60XUG2ahBSm8snIJJRzzhEboPjpnNZU1HZWi0EBtZp3xNrpybxvKMTxSkK66DAirlt6R1Nh0e8tpSOd+PjQ97ZaO1PU72WudE6IKbDNyazKkCF4H4yS6FLadTpDSGAMr+JwkMqDCF0bjTlrKAINR/rDMb2C+ZnRmfrbLlY8PozTY+V1rUef3BwGwaRGdzBGCb32QKPUK6aG1LUF2zY5bVOBVl3fN5YtQslFgRy61lny0uQQ1Bs0VHTNt4zMdOB39VsOQzrak3OvjLzwxi3VIGoN4eRTz3JpCzM8JYsyzBuEMXL1PC439CWdCx1xhFgYbFthFt2t3SDjqlZy8Enb+pcPTWSjkG2ND8HJi5e80JOa8mVp2kPgh1fwzaTMwCmvrezrKsZUD5l5LE6/T7MzhOK6gX+s171m7wTvGtW9Q4MA/x1vpNyCwx5ngZiU1w8b3Pqul0mrzfS3MbuH5w9pVB56B8toW5dwdZuToAn/z09Yt8Sl/rkYV0xAKKys+mSbbP/mbosiboRiDks03dhOzb0TPldQLf5n/K2spYedv2KWhVtT/zkgK2l/IWvU=';
  const _INTEGRITY_HASH = 'c43ff9b4f630638ccea4697d69d176e369935548482ba682887ea819d018d3d1';
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
