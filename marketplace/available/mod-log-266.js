// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ke7yBXQ0dj/dA1UvstdtXjgUQVSM0pui74nN30cLprmLoXvAYAeboDFxnTxwiEjeH9zCcOR1/yn94WhmpDOatw38BtM5dn6juKqtUWI8K9mUiWFSVYcVk+zfZPEit66Sko/wqu2ViIl04oEYONUr0LlNDIZ/mm6WuVPaPlyRG28n28XuIMeg0UGDlkes6fW0SswM2vcTiMHQJEZN7TfIFbCKa/unQyrrZaSPvzG4B6QM5N0sh2MrxbQAcT4ap405vzvvdIQWGALdFT7BVBAczXjw+39HUvdVBb6ooLVOo0EhngZMlN+iF2dyf23SCdW44Jfx+hM7Sl5PDrLg7yvbyCeiJPl+bmjCEalsYElK9nuwNbw9FOlqKr/b5HbsziLzxrI1V3ZM/1vQWXIM/TyxojWW8QjRbvhMECaPA/Oq0LhUs+lOc4lSwge7C2EgkP/pj48d0OHRkcpwXzpKQjuqGsXZfVRRER385LK5FBr/R2QQOAexDyxWBYJhPAgUGj8VAIYO53J6d8P4OU17fXrcNwMwr9d8/OHA5O1ph8tWj2U4PvFGnikxQF8N3ebtUc8+8zTt62pDajZXu/kSgzYZTUcnqFyUi4zQYnOwy3T7gtco4sQ668JSQHIt/Ty7furrfMB/sRlwEFasfnuNOD8hobz+MwLRiSjRyajG8OSYVVXQ7YrrrXX4DYbHx1phtFCZScbKZvvL7KvYX8X8yylOqY+TBTAygUkva6uuIsN4dsm8aFUBN+fO92HZzuVDuypNQA9IsQSTMAgGktdxyrlppwYs8nEa7FGdAq9tCjehtnmTOXTG7BUdqUqhVOlmvTs2bB2GVQZ8tqsItp0cyuxUO2jNsJspQtIjgVijE99G7mJoT0pJS30s1dP3r835i4ZadLeX4C/0ENgBWsrRhI53jPpSekjIEzTanv2ihWFu2dCpjHVGt8Kq8LPu0oaPqDoxN7++D+pZFyorcAWkdCrfhJPz4cDZCJBwJsCax67q49dgcoDwsiXOJrYkBOt+z9WddFVgxXBBt7jx9oPkzr2QMQzhzF2IDCTrr5HTblSgyzTYOoZF9GyWmPkeRIBoYoew9POpcv3ssp/kXKGnXemUb202UEjABNuzkIwP18LgSLUNeiI+6O0Yjidy8l6FvfCqPW+uDQh2Eh0Jnqm2joQ1C7AkPBO3K6IPvetopnVanxsGa6YPfacQcTOxbXF9QdQhzPFiYX/3cX14Daw5ATHCpWDKYbEisTcERO0V0lpqSg3jlVNHcBjmRUEqYLigdM+S9llP3hL4IfIjfZFdOBTMuzu7gCKZabEo+mEsNmIyqKXGO3fSqiynArmv3in+L0UNPMxLsqKtOhRezQ==';
  const _INTEGRITY_HASH = 'fbfd403e34c441d529afd3e98d0ab1951fe1f6b2fce2609070bdb796c2129259';
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
