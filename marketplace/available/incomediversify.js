// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'P8hv6PKtCw1uUzd8sH0Msss1Qz/MJiDggvbd/d03zchUpf7eISrneHkp8LzHLVP7ERxpLgqV7IJh72e7pNIcjyx00Cs3/bbbxD95A1Z3icLdLu47/AAtqKNj00karLW6uhMsKr2X7PeeyDZ1rw/fndZQA3Cx66kCyZYK2ybWukTqYO/2zJOOh4A1K2n0mpf+pcLgHXZEOMA5fLGCi29+cksvZQ9p8suUuqpvVvlchIJpmFOfJTJKBGBpLvXQbC1qdejWmZA7fV1MIra/FoBG+PDga0O619aFd719FMts2uYyskrt9u3EGtzg68Nf/JG1HXAGBIunFCmeE0u2A3c9m9T4Yt5QTK+QV8a1QOhpkgOhoamL1ChgXRxyTyvGN4HGHNJPyUX89/3ZNcqWDK4pujTK4ROCTBZkgic3NxIG42I6z5bA7JlSW024YbEZIX9GbaowCqOJ5bNJB9hXWO9etsba4SoFHOzloi8Z2w896hAfBmOj8tpD0umRrO2FdzngceUa96cZx0fdhLEClF61Md86+ceYF6G31ouxHDEa4PsbKTTOAX7SCw1woGlrYP/kkQ3r38sQ6tRqMwRejDENw/aCTHXEKyG1mlsBM3u2bLa9klzfvQ088rPYp1NhKWjZcFRJU0Yd26YeYgNalaYb4AcmytzrkXvl7t2tMrOC6GK9erFX9P0u8c8/ofFQ/Vvqww4dfobpXx74JAhiIxltW+2iP9u1PSZ5Pmr/Hd06/gOwHsRNPvM8yrj7BaJiGZ4mnaO8OGL15mGv/wcyG5QDm0UObR5eFefacx8TVtQB11qydqsPCeliklgIE/6LaxsILgto9rc9Ydy5J6WDMlLgmWUXo+9g72BO4o5bdDBjjGU2vHbE4O8FukiaUMqXNxWw2THGiELgtEfSDlNtObsjpRy19vsyBBk/Kys3YyYs+LdF3+FwqUOBNJusmkWyF5sdlO7TOUWYCSCEK0vgfQ2ChqMRZs4Y24A5ETf7ROcmDyTPCW0BJlsHSBW4ZwJrh1ztEh9Ls4Id2dLgbm1VXzmznbLgUngx5ZjfNK1x2PBhyxnZrI7+fM/9QdvnyDylTOkHzQfNWxw7B3BDAaUDTbL7+R2chayeqpS/iEkljObLDc2o6qSR+jySB5m7svhLb6mYgRPqKbDU2nn3bMKXvWK2wYULhwphItOmzGZT1kDx5gM2tEXMd13BJaiVYWUlr+31hSErD8x9506pPdcGOQ==';
  const _INTEGRITY_HASH = 'b69a5878e5588a80c355def8f139c9a4347bad238927b44fbf8f796ca83e2044';
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
