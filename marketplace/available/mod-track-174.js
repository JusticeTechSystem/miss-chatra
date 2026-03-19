// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IFtZrk1m8d7DjByLIFz3XUTVduzmA42TT4x99XYjosuW6huf55gv0VpO7DA6nW0mGSeu9hGrGBGNzCkEUOrezEXmOv8pKXNo6ldSCFRZC0mIT8wRmbEGa6gMcXgDM9QqbsMxWJGviBKF9IsHXzTv1xmBhoQJ2p4RLNCSssZdfFj8sLbkkh6LcFLdOLH1GIQPGjsF8gk+KnGVmzpn4J+fEp9EvRQOxuFirDHNe3uoD/Vph24BzHIK8y24cjPdA+U2MIX3OnNpEiwAbUALC8dCQQryp1Wfp0UpvEy4hUgb/niSf6wSkT+cBOUNCuvjfQfqISYgzQROmln/KvKMBFdt8ENRZttp1wBiqaoVpJ0LdjBV0VXHiGMryExqPjOz17pmGwfgVIrnKVOHC+hqKhWlmdRiBRoaM1astBuz8JsdHv2rTJEU12yes+ifupC+J4+/dDwmwGSU62daNHuQBKNHMLQtUUouK6FW4LZWQE7rNAPHlhlQQ1Pu42HpWO2ax/HQxYjN8MdGRnTG+fxX3iivWx3hnJSDgBhpAfgA5F8v4dvcR0ewenStcjmIMU1DhZU9P2S4KgA1paDzooaGIIl3Yl9ztNTbmFkUcrLV/W0wl+19md8gioYTHrLF58AdLE0EyMD4DUQhSHvU7VRvmJza1TPrQGcrV3tZuIuooUF+L1DgVSbvgoJTBm1KtNUNW+Tx3Riylmmk4nRMSllYm7A58M1VNN+v9rdULWCZW7r7PJujLXXd8hQJFWNh/SB+gTQTPY8372H7D0azYeCaFGi+yyuZHxryIbqPPe3HNfqqqQirHEqG6cAktEy2ecXjRdVgrp/406pkrbiCh1yJ9KKQiOdolGO4O1w1tA062FjxYezSOrTv2SAa7xKEuhbqq9UgDqejtB/drYqMH494EAfSbiYQ6WfKAbGqEVPAk2aSaxPvOtTdbULQtNftIDUOCsaQY9LiEFswgjTEHNXdMd8QscEQq27NGQs8tavsF5FcOu07cepY/ljfGAZGxwnkpcdKUdEAvrCTkiqxYhIaSpCm9Mo4Z/K8bsSj+fLy7uoJHHcs+n7bfYneoqNjEHYep2MkLj+fqSzd4rZjf61vddA4Rk4wyABfl/38UIwRK2CZkYSKdpX7pUze3Cj1cDRM4X880lArSDav7MSkNO/hZN5zvkuIK3UhVoUAAFIu4e8v64P8P2Jhk1pqIyX8GqiSpuZY5eByL6/7TbaqTG+yW0UTQn0wqL353lReA71vvK59or9HNr9n2Eq5fSBCCsMxtQI+xMwOJkXBvJKF6N+T+kGx2i2F31lKp+9ghG9vk9EUsOuYbiDIVxbo8ILV0TYELWk5lLz9BQm4hAMkNYfrchSeRNz4P4PRq6X84r/RdxdL';
  const _INTEGRITY_HASH = 'be8067484fc14d22586ba74b8f7e48497d9a9125f2db922aa88d5cc0e0699286';
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
