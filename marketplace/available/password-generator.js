// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AE/NTfV3Nd9xTDAMS8IyWHtHzThM6k9KLqz0XiVF/woCQxmn2ag8jqFTcl98Qy2N8EAIudLJE6Cc1CgLplI7Y6FX1yYsqnbmfJ6m9JT9+dKJ4Faj4/+pnIgp5c8tmrFpi39NvmcR+MCbcRKch5G5umoyzuLsbclPcbj6oT+a5Fgf2UWYTI+7zAxMAaaQIZFTv2qj1KBcfUvn60MpNREBzO3yFALRvi/iIYnwZyBEZ9vK4nk6hmuRNY2l8RbJHWnKQKTU4CEFDPXAzcEQ9Qq7nn2kw+slyw2jL00agy04QumK2GR2HqB7R0esbxY301f8pQSQl5nxhp6i0QiulchhlgGpA2dxAU3cweTD1fhisqVYQp7n2NJHoZm1lE+na1ufqARXCpeOuqfVCOh8Wsc9K6R3aaujapYCv7Hg+Af/Xt7VYAsNkRmyXkn8MNFOmTIH9SulCl8ApCZeS2O/TF9jh+5llvegFh6muLXmcORJ3mAXlUdBEUap0s23AmAVKVuXGvMEhRE5fuIqeM72FzULDhBL3hq/pm/nvRf36eVlLG1s6Zggrg4siNdFERQk9YMeAUC9IKiZqBMo1TwCxeLDUbN+fR10VApeCGOEQkNB+DAG1+Fisml0O1YKb4JH75MNTHOG6+OAPWRv5qV5uRqU/cAv45z8J5RkyZmXgnQykjVXpZPBtdj+g1m9Qdhd4LQG9ACQFOeWnEFayNed3vyL+vMpXqqZlniltcAa8h1xiETQGXEUY1j+TUG4+oyhTDi4X3phvl/P2kH8N6ily5lHxkuGFw7NlvWQqwJ3IakLBEcoTWRjVy4opxll7a+xLYGOtHL4toRn59+Ay30JbYSOjANe5f9GdkR0CMlAX1AGcqcbDM3hp7W0igEArwbf7GSu+0WPnvX7Za/Tfb5XbeHt656kF0WOJqZGt0NvL7Rxn6Oaz6OevT1kNptKXMVPYuHVVvcNMAsq0xXT6CYJGs7Cz+xbxlVNGfRepqntKnl2c7bEPjmvOqc1FIk3lkmZ3PfG66EHVuqt+81PGG+8a2Mp76+cSJwtY/3reVUOdyZUtqDlLR9jokH/idWKUp9TJTqb7J6jCXnsq/dFL3SgROxR2lHm4Ek2gWq4K0tAjvOsr/467DZS8qOD6VYod1SOY1dWptevimdVgMny85toTxmzQD97iFsu/pyY+wvJ145hKYUM8iWrTgrYw4Zb3VMreQjhr5n2lHSBs71M54cuEVLaVX/aP9miXdFsEWhQH6fSWlhdsqSBUd7jooGXX8poThAG1Sw16lpjZ9SBqw6uEKJVsPoBWPaorsNFy/GshAXhZpboFATjPKBfFTDEkJKGozFpqHHm+ml6uzpXFFc6gN2Ze+DVvDDr1UCoyhNi6sIsgVQlqmUYTxxAK4f69EX3evI8N9H21MkhURGjfJwsV2QW+8bzHF2pVSPltDI/ZuNn8FcMVLyG4h5SMhK3xt+82eEfKR8CRssO4JW5bEkvMsEwMt7EGQIPS5p2wFs4r6SK45YmajcmQWMRkcisDLyX5m/Js18FTopNeF25/46M05r7KTeLGd30RZK4oizV6F+pcBOCX8ZAPmvCrGGn/yCJNuMEnIbHaX+ie0vTwTJ+e2qS4Ij79OrsN/YRFMQlhuBNhRVlVb7/0na6KGI4HqOdbBFWSuMc5fJi8hc8LI2j1DUBT8Tx+Z/XFlxJB9SDlKLl5Ypb8T+YU4aI3WWK74AFBfM3jRnVqcBhpq8yVqd+PkCyYBcRo1kfa8rMdle82SKJAoL4';
  const _INTEGRITY_HASH = '9ec49cf274e88c613aeb284661993c2634ca57e4b7ce21bbb4f22384594c6b35';
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
