// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rbEyvXNoIMBFI6GO92N0UguLU41NYSONq9wJ4BzOp/bluzX0ZifHopxbEl+WpZvCJ+uVqFSvOzw176sANBhmkHLIDoiLWwujhS2DG9qu0OzbkRaC0TG3PAzxPc1LJEL1NfBO4lWoKX+vukAfuK9f/xb6Ppu9EcPU1RPxQKb5WR8AvnhEuVV1+iEszpcr+yRrygeOhh3uaDSsuHzZY20cGhIoOk5fWW7Cnc0YX3O/OHMDa6g4soT5ivz6pGuCOs9CJrjnc8PLR7ogoVZtpoJrZRaMteOGI8Ee2UAG6CZMmRoBt5a8Q4J9fZbEcHQkBCDlYeEJxn3RZ0m/ciMnKVKtM5YlQB3WJoq+ffYVS1cSIMReodWSv2TN9iHUt+GjXwwyNK1QZmE3g8z39L4W0ON5Fh0mbmqpGRNh5jUFfbxTUFkh2sMawPco3D9p8fKc2iwaNnp4ihl5OwTlGlBk6ZYI9JiYrOnn51ESkHmdCifv5xJRzfTLK9lTabT4QgLl0B6Z6p/OXNEhKad+DETcGvYouNonzBzI9SFvl6WHuh/FNZybsEqhuDomyw76w27M0Z0ueFTHY//83Aja/ysqJHj+0YJ2O37CKdm4s/k2e8aW6g+W4akDwaLrfNqbVRzi59y3LwagZUxjjW4MlZp4Kd2XtqSwU2NBqde9PMrnseDnGMkOdOyNeBcQ9YgwSH944jhYWX4xGZBA5j32hX9y1KoeQFzhZ4DFLai6+yvcTnb7sLLjp1eC0wemM+cq8AO+yQ5F42hDfmlICw2dvTIdJvpEWtYdmkxUuYfQK87mUgv+BfAjQjnBfmQCiO/kJO0bdeVSAH2aYgPmKbUeCSNVRj64f9AWCKgZVKCzu4glzeGqpoI0GxOCwNBO0E3RlpBVIFcU+7KBBKKBgSRiJBNte+Nx09R3Ay1wQSudBOnAP9gYMVcR+ExAYgGS3aC7PNKUT4yBySXg+8ogWM1UFb+ACvRINbED8PMY9s/mKH/EAsSRPjInC1bB58BrlA/6LK233wrm0s/PSKq3QEK2M3wK7Jb2lKyz+5VXTorBptCiSiSemyz0YQOXUVR2MpD+Z8XAksUtij0C2jnECy9wkrQBMD10K7u0fYQmfHVLK0DQY7u7PgruRsIKzw1gnaa/G64EO/xz3GNB1bCVFVj83SVxw5w2+cW8aykCN1PBdUBew2EL+DijdApPxcCUcw+vlxJ3qdlh+6ZMNiMVu+JDaY1XOzKVZJjutvUTRqrhEGRVPsIH5xFeLep38QJJOOc13IsnAA0wC/hgGWdCtoJHPaV14Lv47xylILWOvSSHd46iKQWqetNFoEQaClSlF33U4rU/riC42bw4kT9yEi74qlqy0DntNX2Heg0xEIXKktFuf7rkwe/C/Yx5Z+Wta3g6H+sZ6s03cIelEMlRGLEBl3XdLs9L7VnahFoDxwmPfZDiZ4hgS1dMg492Xf0oCQEbYHO168nfq4U460ZLZX+BLOFhL7OlQLsnX45LrpvWr1IKNBOQqhC8zmobKW/fIJ+Tu5kSHtDf05SxHi8eylR8+e78HqNS3WRP7bUwwxLWIBSGs32DuqrSielqoQUWtKMgksYXfQ6UytQn9OuGPQ03k7oFCt7DNau1WDxxTzwgFVKe43pkB2eWAK1ubnRs7Hx8EgmLFMWRORA3qtDlYOhgWpWyQvdFQUPIAZUypz8gWYM+I1aLFcHY2b8=';
  const _INTEGRITY_HASH = '02853d7534749c6d1740731c86c0a8cd1d56320ac143f76018be9d4607629d21';
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
