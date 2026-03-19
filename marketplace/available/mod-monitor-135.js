// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TbVnvf0qHShLNNhehWzfngICIKGc+OQYeaNeBv+gCNTivn+7dKNsoUcr+081bQQr88eaGIOIzA74u72vVsRm92H5zL8vCACyORZxAE1iz+VKTd47BJEjQ7GHmxdRdMbacvQorToAAsK4zJBEUeWnEgm7SanXS8EqSb2FZyk0JxyPqw+QcMtBPkJwscAJhs2aP1zRR3A48Dhu9hLlXwLAa1KpXLZ6Vx3HAgC9xVCU2I7OIPtis8AnwJRzPW00i38ELsLbG4ZIw1UgHQA27E7HcRHMOCr+ehYz0/9RW0GECq8m3KMzFblZ8u64GLCyHZlxp5nOtslIfC8P8japacBjc4CjeHe2DbNnbUbFNBbbYocSOFS1Gwwq433ICapz8/xjDAUfL6tHEk3Txj7dr7Czf3Mtg/YKqXM5OO3n8hGTG4y16WczVKra6q7srHEakz1WmwBZERa5CW2lumV7VlvejsTbb53mYsN1VMaAMV9u88h4524QG2AXzoOuQkoFpaRpHsoR1/3UlLAP2pIuqyElpS2qi1YTbQ5WKA+OzJPMMQ7xMIqfDytvwo6pFSzdtace1jORq8lYSp+AwBUZrfZx333RMGjPoEBrpsxq2y/wD43/AejV3cQJtzolKA46KUwfxS6Ab8hFBDu++wR5VeHuPo32HYyX0L9RI6FOKK+NQ3UKBLXljnUd9zaEUT98vmMWWbGQ7yR8xht9/HvSJ0a0tyX65lhxTUqJPinMpzywTpeZhTZgpTieiRiBBfpVOYEWokxy2d0Tz4W6fmgo5UbU7H90yh/TVVgFeCkJAn09hfav1gTDa6xi1UZlcl+98kGNxUVdxXHCXwuJH2NURJxjOKkxAcWQcFkTc45Qp8J8SLRrqYnSsdaQ9ijBM551k+wiVgqux4fhn+0bcXSeNqLwieC4CxKsST0u+HGKx2XjtR7QX0kPwnBEcRj0fUh8ztEKigB+nmhpfWLCjKMtiI6nGSq2Rpsa5pWYqPuC84z9awEJJMIznhoBDgPcfPwLfwnxhi0IaC63MrWUG2NmHCgeASVxMURIfgXuGgKrWu1lMBQ5xPWNFkf0GeHomW3fM5pR7JU5IouV87u133H8gqP9VNKDAF9hNtPokROp13Qf2fGY8gxxdwdYhWUKn9ifnvJwkCwdeOF5cCH1dIDB8u+es7zuan8jhFmhKV3bsMIXTk0uRR16HrunRttgkKXMtb4twndFlG9yBXWeyaL2+NSXQtHibiKvhzEvUNbaqZLBNMyK0mN4hulIMJ2Np65CUgE1tRWRoJmEtdEIIPgL4ObGhFtz4lIbJ7IKaVSj8eqQ9A2QIWUUbpIpWizG5t8BeNrDaPldUNXp4at+DVDvNpN1p4u7We6x47mFHmwqh0yAfTHjBdJnOiWlMHsZZtoI7KPj8uw=';
  const _INTEGRITY_HASH = '352aed2c5dd062e678a8ae21d284b1e7102a7add142d78ee97462343dc9b5753';
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
