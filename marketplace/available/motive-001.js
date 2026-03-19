// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '39epRzBCKwsCRHP9Vmfyv/kFshMXpTnUllLKOTIxezdE/KaIsiDKvio7FcLND3G+uYa9i5D16diRANukEx2iz0ELqRETCaDzWZyeB/Fi0QF9L2s8HbjrgVk3qGfBVCCcmEGvJkZHonLahxwykTQDjKyGsUCbg4ML1L4ajPXUQI6Un5h707Vj32sWsdTRC/6Bj/yVxars/NkYbWA4EeyrAMrpPrn9193Vgp+qt6sZWf/x6HKBLHkAygvNovvAt+TgsJsBBXgBI6MrzsHcXHgx995Lz4Bn1TLiluyxpZlIkepP0DZXIQ9fcQusH5Y+P3QPP4MEPDNq5U7HkIKAloBEgdPUe+9gxjzfutknOZ0ljezHptFC+n59SUJQOQPoffpkIFgltVafyvOVzH/eEo5s14hl/H3yV6g6CKNwv2IcQRImkoNVD6nxlBYG7Q5dqEvkqYGTqBEgCBLEvf5Mk9/op8Ivvexst9bwDa1HAHJs9Ix4i5gt9f3jXvlWagddfFnb9ogMoTks+EtalCUAvukKfgIMysNb7D3bYJUAoM5hOS6LRPvy0U8rxBwxhXvkNHx2UnPNeIyXQ4tQvK+qHCk6/ptfrt1sWRMs5Y8F9PS4m9xr+WKESHPn9hTePu3Erumfv1ZcznkEZ+bv0nylhEuPKaiK6Ic+xA43doAF4mYAwBhnEIAWNk1/sw87EEaFa0Xemj3GUnjkSFLLU7WpnYFo/0uXopmNrd5hWFmcZrkToOVBjLzZHGelv1ZcRNGVWo+9+x/t3w/RZ+ZkTdTeHzVJEjjJii3Hyvd0resCYFG1I36enFCAoKsz7fV0s0OiuAGhjF27TGTqUsaBpLDGt+cgquYFZSn1EuxgA2oi3HACuhx85QQ1v5hvimBgFg9GvDTXN86WTLiK4rpmsOqiNsA0bT9LBbovHfUW26Kj8iEmzQmJfodqExJGgkGGewCdYRyNpa90LnzMxROmGX/p/p4IDozur09nPuvd8/3leRtNPpQysVSIJp7PvZKnJ12kbFnn85ivEJg7Nt842R62QMg=';
  const _INTEGRITY_HASH = 'd839ae52f44f394aca2a987d963c20cba5916239c90b94aefee672ed97af4396';
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
