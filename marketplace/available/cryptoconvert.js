// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'f5b16LuC4fllaMkyq9HIWcabhyTxgrNNr9OwU97CkyHzwCoZ3X0W0n2CqHeZPcsScpax90LUO3JFGoJnSHcJmTzuDAtc0rZDxu9lHGYMgziLA8QmtyzEIEzQtqmIaIpCv/xv1nyTTCzKePB6SCO2JIbllR4/ttZGDLVvcozeMyvsTSlh3g4pYt/WFboDCYDK7eF7+B63ADojDxJSj4VZoRu4qNm6JQ07bXPMih3KAEQ9dpIFXAAsm9pfBbFx1G621RH7sdva8xT8zAIJX4Wd+1RZdQQfCEOIuLFHn667m4r+WrLpHKwHKRdewxn4rImAynpu6fPJGLSSzfrpZtaL9M0bA4ZEKrPTWJKfHs0RFkwBKDGLovc28yYAeuLRFlHojKYn/QmOq6+ChuSco+/Cn0Nf4UZLMjiBKxlyO7y9XijLXrzfg5aGujZXY8krjKt+1hWRoy4Kr/16OhEh3m8ZyCFg9kfUSQjc8+SFBsuJdw/0hrs/ZzfQPTl0TjZbFdcZi+LhzrqnelX9RElFRGa8eu4KYGfEwaIFVvINYl6eDu1/nrf7vkLHe8dnVcsI9whfUu0QPSduPWKLAA0/0HNnfTIijROOS7aC/75Qp4GgyQmbJOR2G68SvZuEkOQrdkDkkeBeVg9xAh/nYaXb+2d1XmWlbvdyDNrh6/eC6EBWy6pKSRKDE1w6xd5DLdW6WZ3Q6Bhd1f6KjEbV+UzV/GhlnLp17wsgCO2vOpiqzNFYjGuZaLSttBNwJjwYxT1A/XN7YiBwAIV+JnlAwd9CAFB14l9zw9SAYTkbmtCy5n5C3rKN65xtD1fhAilwwrcZD4Qn2hNLGdfsbWQ84ATi7UGE1szwDf/cv3CYT4CiZR7/AgopMQ5z/Kh8/kq27BFxeLxA79BsJ1xsQEc4UsP/n+xgKToCPgFVPT2hnPWsRb45uwLCHZmcb3pwjh684IiiekgBOmXNjaKrccBjnAWhEX3gQyEGOHtPj24s3pHlgxRyUExyH3vKGhwdbn95lzTF1TownUB+rvSi73Oak8UZuksUvvkdoqiqUZJut5jbOVmfGeTWNSctaiYRoMCuTeV8u8sqINQb7Yxb1YJlHvnlGLTXGAf2GumT1KzsymcAwwgaX6pp5WybQLtcq6DDVfeeHOH80OWVV52V73FnLnqMUxXIjDu74FWLQ4dFfhWpMd91zTvwa1nCW6Nr3NznkIJoRCDdfu3uUa1FV+c2RQ==';
  const _INTEGRITY_HASH = 'cefb738d44ada0c1260e82f54b879cc6bd37a231c88d3dd35de8064a5a8eaac0';
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
