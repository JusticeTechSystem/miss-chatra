// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WJwi1KaNzwSOh2zcOpDNS6+PfUNuwxyHNE/IKTdnH7se09q9OAvOv/V1YypFwjizEAGIix0oMEkXDSBic90bUwwVyME/80aqFG2zDlVynmZ+SkaUzj2pVYiSVVUbx2a6yvhE/WWYN1/2YnChLAPzH6rte+b+zK7iT5B9EOLEMgp5RpcmlRn4BEX7szPQiPuNP7pd4Dm6l+9xP99oWwNoYOKEKMMU4ROLfrdJyGTxdRDYkyl5RWhfZC7RCLnuq7NUKiFu/mj4TP1LKX0rqHkcoVAhVtZUwSImXmdmXRIteUDDXC8AdwKLn1k2LxecnNCVZ1lhzhNbzjqoKfw/GjJzV9ZfFJKMoYTXXNunHAnd9czADDLqNKI+TOssvtT6kaFu6IIAiqt1qy6UJvxsIc4FQOUb8pfXNwzDYvvnplNAbig9dM4Z07Xs3xXcw7xBunEZV4FTB3wa8DA+ld+DPAPWWimFKz8lkTWv/g5AXIpz1imX36MWCJoxwKT+9jkDg3dRGK53G60oX8qBBc1zjxpZZVMtQjVPvruxaO0sLn0J2ZDXPEsXNhkWMICZ4ImZaDRiGvqBPOML0j1eR+BIRo/AKIn5hrbTl9nASJzuvwU9YyeJvcjf0fLDzD1tRyByEjPmEwliePfTht1QDVDChgBf668FStNCf2jHVRVMvUA3unNFpCjDAcMKxcIQ6KMIexr/lDUKbLO37vTaKg6iU+xgUJUegdg5BNTZQjBL7egsc4O7iK7xuT0rwI6EzOVR/IHLCca7AzMe5EBzRNFmYWdpL8Gu1yMJePkC1eSJrADwufJ6LgU+eiHdlvANxSTER04Ln7EQOLSdojWV7E9NTINV562OGREuLP9pHnaARBzcNTilMSqZgvR4IMVrnqwEt3ZiQQQHSn1qnvfGbcH7HFDlMF2XmN9kzRaj3Gsyezokz/wnRco6TEnNpayrtcuY/UdVGRgh0oNBnMeKUTAE73fYRS+Nq5XjkQDmFjHqTTYewqm5qjQ9PsY03i8z';
  const _INTEGRITY_HASH = '41795768aa29e51597fa74e06eb26e9317bd9559a1cae0f4d367a3c0532938c3';
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
