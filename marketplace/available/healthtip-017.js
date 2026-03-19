// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hJO0LuqubdwncdMDVSCKFsa3BgS9SM0wLgKohNTJzp4qOg6nZ4O8D1ymmlGVy1MrucGxwLfgnLV0lKMs3XEnyWXriEuGL93y1FZNMwcTIIiK1LAEn8/gZIPhXdqAw++02G7QgPUqy5Zm8lg7YR4h1gUEuSD55ITYPY9fTgpHw67z5kPhdtUJCHD/XTOE+mjYKralknlhC9Cpq/QrV+6fWb/hjoKKpUs4msBhpBvhV+Xw1zwcfHneoQeW8IHyZjjJQ/+0bcGAN8BdVaRBGxm30FDMtoOn8P1auJq6YLDZuZy0MPr6+Z15EMEpcRiR8Lkf9snmP+ckiibov3fne9nNQVqArRMYbIYL3dj9W0tv2UiZAAV+Aeu53JfokONTg5T7N9j9DXwGIcTuN/OlZSVqewpAFY+I6sfavPknORv1bFe04ySf0aU9kY042Fct++RMs+LontQasL23a2nKscQHOM9EhreJE+s9Qdt6Bqd/6gAfOGo7u9BN+2fbLUkyN+rjwM00RCiWaQ9Ev597oxW0TeH6YonOEzczjM0229UxZ56FiRGXCjY3tNh+DrvWTYrRqGO7Z232WYgZXCg0QroMvq6gDVlOzDl+cEAqGTQdPom1Uc0yqcInUCiIIbzLU1G7Var+iR0kJN5xG8orB68Py3aL1ZPJwH1zOBrkFg7+PlXq1/IhHBQJ0ALVBvW/Z6fxbdZEO4WLRz3wEVTpzrQUJJRByxfzkeQLEQ8Kb9KejoLBvraJ1HkrqHZ2V/G9GbqrXplXqJ5w7B32BMeppvepDTKxTwxNxEbgr5lWUVIBXJbE0gFfbSP97wPvJaHKbdPVI/C6YLoJsTnON3RbVhZKPzAJ7eN/4nlsCTk6rlkMxIf6rKIdO5nrguT5wxHWca0cXFXfw0Ps4v7VtJBxM0xtZ79yeTL4XfgzU/yIIh4dKbI9UJzW3zu1umKbMWg=';
  const _INTEGRITY_HASH = '8654680e41c11379d9a419bf648a377353d319b2b1bb0903f88ceb79428ed1b2';
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
