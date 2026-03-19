// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4JAh/zFSQiIZ2cMuLZyLmf2KeSaa/jYtq07OVchl9GH6Tfy7pGWlnUMQgbygRuAm6kvUx27GsQOV0XsKMbxfTUB+uJTLo1zEwaiOku32i2QZgrKynouuzCMdIZG7Wa7PEfEeFl8sGh7/+N7lJhN9g25LJEKzuFkQJ3Vv9IR+B93pGh0tDsN+/x8gxb864YB7eG9T08aSGbDfDVF9JjiUSopVUXjf6ew/RozDz26EsaWCCOzKi01c+EE4xUqqIypTIy3dr8SCtyonKjx8e2IYZEhUomsdXrz1ZyLr3LGfLTvNI9Wmn7aXxfCV0QRVWZEHrq5RMuUu3z3XUwuspBVXEkoqj56WgHZegLQ9uXY+2POUaRaYdqllBXGSFdWP+Tttkdng6eOJfG6StdM6aLPvHBRsEeqgY+NMUZJexalABDnCJwbwyCMVBkVAArzHwbLVdDzAYXQDyNGnux6u9sprajK8V6JtiAzkN4LJt0ge19AqWvv4L1jxwLxeP6/y5QjQFNNqIgHTfLbjYMhedb8mpGFpCBKh0XY25qkrw0ICufWQuez33I0Y7LHDvWeUrsJ+l7nOAuadOOEc7LUtkObObpYoxroBgzNWjz+ifNs1m44ZGDRWt3IWY7ubBNS+jKU4eIkqNpQh5Ijnwn6D5QRXzm5Kpq7lXsExBmq+MUc7j+dkLUwGRqsz/TdoBCj23cLzZL1r82wu0QNFVy5dAuxSSVLVSwANP1+Nv58C8QAG6nVq8iVA1g0/iGtHounuvVl7ux6yGPMFzC8pkHjkS4DvKleNjLRkDSXlLllAlz9GWbvsq6cjtfdksxFzBFg1zsrNFUhEyNq3/yad9owSQsDWO/9YoboW/zqd93DovwJ75MUxKVzDgL39+BRsGY+JZ46hTFcWoxhVkJtg4h7kndaMwy0ATL8ILOxTona97znHoRPoksNb+3JXkFnWALz2zDAY7mIl8QQJRaUWoflR6+Byg9PniJuYdWyow28tpFB2HPh0KMIETfnPwIa9NNOeFrmQvyUM/8THYSeFbG9EEvwpb6wmPXirVYi4YwhRt2EiWB6ffXfnz8GQ5Qiz3uCt28XCUyG2K+sZH9DZeptJgmds2eH842+V1g4IodnrhQjkLJi75YpVoXrCG87gVygJe/3x351i3HVQmTJsUqD8Y3Yao0josTYJyl3BchWAAdldxPdMCHbUy8LoCD8KNKPfdiZxoxQAyF/FDjpBoR2I82cZ4Zqo5ugjjLa9i/Kra3NG+pK89l03rg3TJqCj/n09h1eyXVyYgv0X91EdFPGQ9XYk8bSkCu8dlJKbOoqMEEogqhgeOym8gjP2YzA041QTRMyENhZlDmPv3hDA/kRSKhZzdFj+uEMTrIuZ1uumEMby3mdv9jBWjOpqww==';
  const _INTEGRITY_HASH = 'a838427dc0936f3f77e336adee201c5e4d93e7cc9b982f8dae2296c06e08ce8c';
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
