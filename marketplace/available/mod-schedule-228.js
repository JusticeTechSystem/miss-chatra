// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QvFroAo1Bvtg1PO7KH1HgrcIE/uaZe2Rac+P7Ac9WBf1FhfbK7sTCCJvmjkfJ5towJi6OS20XnuIv7y6zTKVyLdj9e3pXCQ/XfDjZ6DOqxDayI5+4XJ/0ihyOIN2xod2o9v2kKWsOCXdXuvup8A2W8rCix8VszSXWZGalvKLLEqhF3HMhnG9F0cu56iz5tJa7A5dBV8b2ZDcAcOgKsCfBdeRfxNgEgCY19lYKFDNUzaJzMOZNJQG6fFBpSWI7bJHY7i148DN84RwrQAMb7OR7o5jr++7EmGTxOEkZT64AbAPY4dstpn9K2KgLUaBWhzqAQsBnSh1ob3mCFFskW2qtEkaTHlnBVCUiRudOsdurPS5a9TJbkeWbV9tk2NjyqJl9RYO1azOdhbwHjVnUYkKTXvXICqXdM0t1PSGMpaH5OXEPPOHeh0XWz4eZ/AJoCSpzdeEDF7z3UTO1hqU5oEVHejcJnBO1OP/k9SSiAJ7t6ddnlar/aQCCOV/NnmUuA7ZwW9MFQAjDQ/cVG7pjEz1ULm7V6cmr0t44EkwAk6btu16U8MFK08elLbZhd4Brz/sNq5A9jnZDIIxwws6tOdNe5sGfdfjPPCUiA2J6iXayON1JcfnuHqVKth8XjkhpJvdrbVQCwKqWBIyC091VDCWbcGi0038DPBT+6RpWn8P2hnqz7hcyeg761HbeYVkuRYUbu8h3ytL/Ywu3cds7ucRQM8+GFjkq//AACarylvhU/Evs2up1sMyEwR+/VZMhbyVpUgiGfUHRYmQm5lR4W2CA0cqv40ry+IbNHVB7vjm4eaIx/txc6aexeEgMrf9dwa/yEYG7jp07XDIVz6bx4Z95l9/URTvNT1uU/6dSgmY0s6LWyHbV/ro2HGRlmBZJNA/eV2N/vRyr2xvMO2qCsYHzRn44XZF2RXrWrUw14L6Wzz3au0evBaDSLw+G8zwdrKmweiUtVDTwcJEN70zUYqRufz02/0pNmE9poJ/H0uWg9giIWoN6tthwEDp1BsGxvPfFEs8VJgK9kAk/8XagEj8D+8bVcbGIkvAFg8zuENHjNUlITMqr+G4LCHzusXfSSmt3SFgumstOYAJS8BDzc06EzJOyAgvBwsXj7HgBI5usWDjEMxzm3x2ZlmfGJ97hhLQR9rAr0sll46XCYDyINesAfv/FVyJtUYplyUGdRGqpfxI246j6Apy+9eylyyEq5zr8BVmbHFSBhQTVneKu7Hv5eTKWRUhau0s/Mg9nyqcaIRKEFerTrkmXtL33arAn8RZsybh7j4pGHz4JsjGTkNtAwnoqXrE9agxS5VxsAskkwRDkxsY/EyoQ0tBH3c4T6pZdskin12iiBfdIJ1sJ5q1rjQoJGwLVr7uD6U0j8Sc4ae32MHXosN8r/fxamrXNTgoTMGcVUuVWclWJ4gh';
  const _INTEGRITY_HASH = '7e9408587572af90a298642ca52ea325ac6bfcf5bca27cd84041ae0a76ce475d';
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
