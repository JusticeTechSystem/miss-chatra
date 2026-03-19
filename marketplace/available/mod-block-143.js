// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Po77PiiO16oyQhRcIg65vp50NWLUzXbomVT8c9duj5aaBZfHIlfiggfWl4oK4CIk5ifZJP1q/ousSX8kxuzQICDGhiOSA8SFFflKvfw2zjjuEFqUFyrMipuM8NYKvigcSoNjracs34PRiCM6iT8QGecDTwXXVhi53PvUi165JUWgmbSfATGpU2eKdc089WHLhhtW8sI3L0QcrC9HZ1vvJCFfc4VNRGSMtCKnylPlVzIQ34yLM3ZKW3j3t/LL8EpIMa2MRc0bLvQz2H5mgDJGvUcCMcmmKst+tAD8Xq1kzmNXjI32Vq3DO65vPbY7SzMV5kmElhHPK3KOIaznTgSJEVkTdZc4ghaNc3BqLkqE+9yTatD6xMGS7Rj86N201AXyNER7WOF2LlrAwawJenRQaRMWx742Ac52uKqLVfN+7nX2MITUT81CD5DSokfjj8uF1v07BCnBOM9HMvPsJ9pldZ4nRymPva7tO6VyjVlr//muggCQdCGzE6nxtKZCcIlg/qXJHPgcHxfG4T4nGCxAeimBS0gF4vClK3AntCv75EvGHPVdSi5ZvORuZG6cdFeKJ5SneELs0ZGFnHA+s5DO5b5llkGD+m4SB14FwPgOpW5f20zu0dLbOLvjTvG/wo/pxJCwpzluXZ2lo8ogSiK3njQaZP6noRkv8uQSLEzE/QhAel+N/x7fTvflDcMo+D36BVhQhNDruh36f9In2jtf9bp9aN2HpktTDFFbo8xX5FxZ5QInA2D5c/ozKUnDxBCKIALyifDe3jmFXW012Qkfa045rJ6SOflN+5NUNVHtw+Vqsls4t1A7IbGa1GFwatUxkM5+au8ZIe+JQvczvmud7GQrkbuyDZEc///t3nm+TVU0e0CWqrzbfE7SccRzKj9WTGf2x0LalL03V/QLv6KRNtBiEWXc68+eLE6FmQBrFSFkkGc9D3jqfcm5GVZQceM/an2k2TWhbF9zvbfiZ8Q1jUQ93exiaSG20BgAG4Hzdh77JS24RmLkpHIm5JYfkpXq7Ep1w6DtAIIn/SjkGe2cTdovpLA2lHGaCGWgWr5XfMTk7xX9J/a6XTXAYOfL2JqqlO7CbExZOfrtEsYpwMzjqHLgs054csXZewszhwrTZSw/jBg3MqttnjghLibS5JpxaM4wHqsxsHWmpIjiHX9McY/NBV3ZUCsoEtoyB32FZD8yBGGrip7LhtKXkt9rfbAO35blcoM0nUwpo2A+42rX76xN1LsaFvnzBzbkQSA4zeMFKPogPjDww5z6/RG3ZG6TrkJMcyCyIVKvucUtY60TsVG/HiH+3uBT1i6lFCsKcJ5KbI1AxdYdQaODvTRshHlOVIE9qgA/YDtbrYmqmURZohAq+g3boenlIslLLz/L';
  const _INTEGRITY_HASH = '6e6d50f31f1d3f3707797ec8170f742d973ed279433e6f38420a9403faf08ceb';
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
