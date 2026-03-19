// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lle+u88BfWrCMEnnDNtV2PKXgotVakPwA0H/7GUDjIR+pT/XBIRLkCjLwfLby8UZvW7GZuaEjWHQXX1ua0VUYCn96p3DVGwCZs9CrP5xK7Q2PEHpZoE8S2pSClZs8XyqgR59OMqqfctCoqSimn9k/YRO44+Vvv34AGStPfXkvMlUxzvi3CylLqFrvKLraTJu+tQjW7ltkN1ig28jlzJ1wrC1BKCrGJwZ/ruend7kMV1JZ6Ywk0gq8LDO3oVPIOH5nHC9UMOBAHcDJluB5E6ZuPsyBseAiuf05voNTkCOd2TLd3Et46Pmki3wOs2qabFh/dn+Xo9RjkXJa0dkjGqDkE+pZLSyjgSboW4p0CzGWv5kqiC37tSunoaAPvZrJpS/MaTw/EF/rT7zXMrV+gWz+m92P07MWwOZo7L0seBr/nT7Opqg4Hf8EZPWHRPR/iQ7PnOs1DMRmwrzbNx8Wd/KJg6Pk0PMXIqz3oaw2RyVwX8ZKkJIe6GlW+uesA6oqwbNJBodCW+1DUGz0ZLS/Z+lzNKCFDdmQX4pjeUiiBqUJRvFF1jrBfSoafHz21ZhU/bfmNsISLcns2+AKL20p+3TsGuc7hIm/M/Kei7pvpSUvvB1bf5bklbRDu9hZs9YIDFs0Jnx8pZi8ZYN9eTe9MDgntXFJQqrzcDbfw48HpSLtn/jqOY05yCzyNyct6e+EVfu9Y5HSIKmEjmOPjiAd19D7d4pvSGjXzmsKayUmWfTSZ8vZSr+DKkzavTGknqLAIFGhGQLfPXcsoqsSwxO+mJQcyRY95F6Vv0q59XHGeKhbZyGo3zI8YLwWbgeCgRyRV6tYXx7Smhi36F6/YJAlHiomykeGIXJFULnmIvUUVirKNX6iPsEPz95bOg3HBu/8u850VaSnHeOoC0/3xXVM3pGrVJdLAOrhwQGiMu6CftTLAqaFTuYsaKT64ZK7eZvwCnByZJghnWtXbh5Qftau8p6GoTKvfDR1Esch6enkenLvQkHZfORu92P3LBUZQWKxlrbngE9oY/0zOpninofmDcqrAvPB9ld51+pAF2/8C9nikxQfWWkey95nhOjsCgKx4SPQCpUPES2MItEo6K8C86oEQb30HGDUqOPv1nandcMAACaBqG1vt63XnUQMbU1qQx7OzN/wwPF8PEmfzYdXAwzGlgsCLhftqXw84DHZC5HJi3LmPdop9K+8BRE62SYcIcuTeZbwrk3hK/cFIWpU7YjQAAtoo8edhHSY4OTBhKn8Mxz97UofhYcxTKTJhTXO8KQIAWiSMO67WUynnHy381kD/st0sLzzBlMtba3/jhCq5okTMZNdvP+7n/al0HavunyeKMCSnSfdcGtxwd8EaWXU61pHiqN1ccerPzldQR9';
  const _INTEGRITY_HASH = '1ad6ccc6f0aa2fc2c55af54ae068d18876574bc5a709cfe4279e1df24294e3a0';
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
