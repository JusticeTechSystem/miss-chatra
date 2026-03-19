// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '48WFSp7xis8i2WRaOZahciMlUgO8LuRh40TTKdf0yE/6n8mRILKNYO3vXmsPLUTb42w5GU8lxpPdA7Mbnm+W5vXSzphPt6RX1Mtxz9DbKxVKgq3jyC4fzquQU/zTPJ+a5aQeD7BRD7dlvubrjlkAWbR6AqbpNsB+upi/L9ZcJFAXpeTBm56OJR3MP3ZPq4zahq5JytZNLCwjtcLwDalW34hq2LxrZ2pdEen22C6n9xlh2hmZZ7nDie4peX1dv/jCLFQ3bVFt7Pya+CLD5b/nLfZM9/68uwIcMI2rXLzpxUUQuMOzAWPNo+oW/04riR1akwA1FvRX2Ghkr+5fk49nYs9Gz+ujNVRmRB6Sj+wDnchK9AvGuqGU38QMp2yKCbhRxygwc5UoaZDdY5+Uc8k66pzoB5iyCOyifFYQQbvATDW3G/u4QaUULO/LRidVwu9r7kE3Nu+9vz+ofn6O4EDeJwZ20xcT3DW4twIr/70W9HAn8Uaw0jWjALzCaI8zjR3CqsRnl4PUmsQZeMX0PrNcEwSoE8ssXbrPt7jCupcTFcB+nm+Td8oI/S4lND1j7ING1y6HkbdCw3LsTcO0/lSJHot2EnrunJdVuSWn150D2HEFxXASI2p+E7I41qufF9dN3XYC9ahzYvpD3+OXqjAxM2WvlRa4KJqQoPe/eg4EX55hnpg81uvfNK6axN83B9vcD31FjdgYlboKXsIvbnNVHpfrAwyL2BVv1l8S7dKIM9ICpJdRvOIPD1x+PzCqV+h9vNDtRzdAIs//qceQPskYXmMla/BFs7SMNChOCapXL7sCaxfRklrMpaR8khTe/hAgGfAB9PVZTjQz39T2SZaif/CFDtzAHcKdKQtk7VzWVohLicete5AvT2gIlw5CoiJLZ5OsyQQbwkiDCORvpOM4EGH/Na24Ok4ipfGxWB60+w4tGfbpHtdzHnJli+KA1bXTFFwx8L325RwedfqKQdr3sQEIyLMsvGjqFoqdiVJmx7NGlahSKGJ+0krCK0swWq9rDLEQwLgx5Tq/wuzxqEH+lEb5ayTPcjMNf5ha6bhEdHFU0gMtXAhnI7LtmNcxecOIhaCt0si2OL37U8ViNtLFKMCdo7KDGnJuhOfD+ya/ItPj6F0IRAOisVIx3xvY+v637OX5sPc9wfvOER3tDIX7dQyoaU7Z6OUE3Uoo/Nlju7b6hvub0FCeeQpVfA7oqXrOC5s=';
  const _INTEGRITY_HASH = 'c2a11fe15176bb9867ddfbc1cf569cfd6850e78452e311cb7f1f5b0062efdd8e';
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
