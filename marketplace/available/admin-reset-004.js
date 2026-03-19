// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MMrXj43jqqun8gV2sqMr+YcYUg6c0Hh5Uzo+23rnmNUoqpTh3RDN8tGyAo2pYqJAvCBP0oYWms3RwDaggvbImfnGW9o7ji5F7fAvOnZHBGzyjEWjfc03RyV4AYGDemDyss5mWDwVYqvAmwj32D8OGVj6PN+nrrlWJnTmdvczxaiE7SNQ8C3oEZx1tkzNqjauzJbJ3800GJzcIZUsTiHTkFoEoHKELNVEQR2rMJoynu7AoPsf1Ma84QSS523jreUijavQ1Gg+ocrrXrx20pWDVnBfDCKf5bRK9UMgFkKADeWfiDSGGPkqx+TpD3AyyMHugW3rhq5lDVoK/2nwWzBPXXpo9deP/frN6UaiLwgUC1LrL/J0rKoVZiqUXWnHvvSag4JKUrKq78QcOM9/9q4BvDi9oDDyY3/UfYhZJXTgytYN629UteBCHCatDyVRszwb5fYbP5tw3sCr4qmnG5jmoi0Yo6wlEt3MOp/vVD+UwissF6MhzCFG57YvQpBgc/NhtDzhWBjxsK9d4Quyb6hTT5k1tTKayRnAZSp+GJkNqJMw/0vaO4skwNcIxYsNWOnlRtEVXx87BDYfLcJNYH94W8NDwZ/eKmgCHL/Ar0/o/i0rLJxmlJgrDIgSYJx2iF+JcJQ2Kex7ESrblescpPboOvIlnzNSCMXy/vTxlxeG0rZhxAfAw0q1hST1JNZiU68t22FsUdK8EvaPTp5FKCB/5erfS1JWLWtDc5FoG2WEfwsmrxgTL1l5pSmUDoGDp4mo/ygB3Rcwd8f1Roc1wLtMuYrJnIyOgEXUdzFF+zZNJGYQ11Mmj5+H+qbXbGlMfEP3L7bfvlR+rZTfcWkd5W9rGGfwvThc1xCmkKHSVB5OjsPTdtn6NeXLTWw2p08UqgC2HXcT96mNOroPWKzps3Dd0iuCwS5P9/EeRPlSm24X/vz9k+VtHux12Ac+uHGVcvlQlELNYHBjNkQPBlVIHn3WIq/2imw9o4VDAVlod8gVIeBNQA==';
  const _INTEGRITY_HASH = 'a431a75ad40f68b9e20dc1501c7e75d657847aae821257ae1177ff12bd8f0a07';
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
