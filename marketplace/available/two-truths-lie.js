// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LcN6+wZCHLjIrRjtrmvlym3nYZax+GNGcuuukDLk+MkUBSBPd77CV7UJKEsmww1NDX2xEbemIez5RxTAOd4NwRquGljDUdJc0j9OQ+bRZCZvHfeHllngRVAYOjniVDnA/oKIlHlb5hKc0ByH/8zvZ6F0N1nXi2vnYxXzy+kbjGB4pHBfB1gTnB97aUFP790s44QVPTzLVzP6NXIYk2LptELDKpqbHX4j/YY7x1HEPIZJMKSD3FNyZQ0CLuGc8K7arGAg3nyU2zvesiLQQq8mfsIuMJhfYG6LgTrr6UArol2Ohn4vSbg6GtdmDqho5sb2KRmsh6AfUjupTKpgUAX/sWs6SD41k0JIoOlq4vZeIauYotpKDR5cLzxEoK5OZeKzcEHESwy0tdi7uumviL6n+dIaOPiSQYAR8Gim4D/DpOKbunyvvX4BuN1fm+/eok+NHxhQHp5mk89ZOFT1WUS/+4hhMC6X2dvw/FJyvhbAOq5vtXRZQbe1eIArhjpi+2UsQUe9N6ZqOTlSBab8eIMi402eqXemkKgt28zyal6X3aMM0VsPUzEfhO2ZAyR0N7cspO6pt5lCA/FxnYpCR6eSOVpFKRiaG/9ug59N5i5nzB+UfYzH2Sx3YU2EzALRLN/ecCR02grU9nXKFoxRQDJrbP3SGFJYw1vG2mwYG+uoi/V83ow4t40tBNsP8Fwrp0kcEgtZcqLZ7hUpB9qzEAXNjEQCw3BHuLONmPc6ww9bPQ29p+O0C+gJFcezyWnRp/ywwYAQIvJzLwncfOplVJwnecQjSbDf5sI72A/C3agtraznaIzYrA3hnAwDGVLDR09iMvayhxlqVxaA8FzkMSBUUORA5nHvnAqcI+tbw+REb5WtNFmsAhVDPnZy7zB3Q1VeIetcecKIRp+exIKPGU3U5xVJLoWqUEOcfYyl/UHoKc+vPj2qvUFCzUIc8z3Rg0BipyRFsyFKWjrcjGl+6rRJmip+6cDYmeP7J4MUhUa6+rc4/EsOIA8nW5fxO2kam8WCNfvbi3qJx3zZNskgsPterI01AKr9li6rmU1CeDmJZV9A9DuUgzxaIKbI5m1MSa8c/4LLpLKHZSh6dzfj0mroY5+iSqdoo3sKXriaJbokMFM3ZaolmWDAACP9UbEtLMxtOnB49uGWe191a28FJPOmPWm7xiN3VH+2OeDjmb7XNyVHxuPUaqWgonGdSIrsoZOmJIFVtTI56bPyfn/Di8AhyJBgRyzAmTFGOh4bglwc5x5xwCpV47obJWjsJKnOiXIUlLrHq9pIy15vlclUBkmTT8d26VwXm69d4TDzYIaIb2XFonPEpPA2bOUc7Qo5qr5IzOiysfJ7N17QXY7nk0KYTDy5zHdaqH0IEMlwK2uz1MvamYI/f3oyJCYJg1hDI3iR74LFzxX5pwu0+V/9RvYvanuefpH9Tjr+PtwmV6Zxw+5PDJXXXnVvdBUoz+UY7tMAvIqNrA==';
  const _INTEGRITY_HASH = '6859540cad08bd3f8dac5cf55b94137a59c5a9c4c26757980a407469e5fc653b';
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
