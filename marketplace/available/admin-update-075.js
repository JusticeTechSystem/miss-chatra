// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pHNO2p07HdU9/mucpMsgdch7iXEucQ8O3Hy7h4liGA0D7U+nPxR71xU1MoEH2NoSWDI+D0iJiuURv6WkE7gQcpfpgoflua7mQsJUCjhqjo5vE1jy+1E7psAKphukcihgAV2VkARpeTZAXE10xnPT0ryIS8aUP01Eio0+/1dxf5FHaT4xVkwM/+j6U4p5j3s+Jsexn1RABhjWQ5wD1T84DnqTePbguj5ketTPOX8fAq+stcikC2NkgdwEc4ehyEbgJqwGUDZ00Omsykx/u76cGiz0QqiCSiBm+ysnEnusySs+IXYH8sad4B7Ka8wuM5GU5Mtj+3WZgqp3FfxhqhcYKJIYkAYLY4g1vGEgmyhyCCAjfc3hricnsZvWhOURh5bznQncPyPr3D+dH04VJadvAOBs+Mfl0aRrmmRkqhV7yVfO6vRqhRN53HaSvMsq5vJMZsGgyNFwcYVboFYg5glTFr8okSqjVN8ADMWSonmoq7vW7XIL3yqEOfpSN28QZiHn0RvAq+IEetx1ghaCE8N3g92P7mYX58LEuCboTrGgCbHAbZWZLIesaLz5lqwEMwYy/WKpEMHF7MUcswDhsojiaVlGY0GVy487B6+q/+lIiGZZ5IOgfllyhxm9qBDpU1Y88p2nt5faqHRyJMEvhObX3FJ2tmsotNAM8U8PiVLUoKDo6WG7VOBqy5GgYxLCjuaQHHRzG/rZyfN0LIfKNmjdA6AXISVYIPB4dtDTXUMXfH1HoQp25pCrRu97LcvlNeykioAPZKChc6ssunCoPRBfceBedYAfwJvsCZ/n3GBV4cK7vESH7kVNWg0MHxGpWwXeg+eejgwIM9zOY//AHa+Q/Ryfla/UA4Lg3QnUuBik/Wy3JuoXgYmArMPUqqwwrpR+lY9FMxUdrD1fRJSgPHcu2R62d2k/Jkr+txhBEvubQjosj65wJG+WuSudHV0TlnLDrTwxs1TgotarfIJMoT1onp1pwZJrbSrQuSDByliUXHNqtDbvZhFP2lMoMBZy';
  const _INTEGRITY_HASH = '84495d53347cce4268707ee8725b6dd9c1b129c742a3fb38e4ce2418cd42ad6f';
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
