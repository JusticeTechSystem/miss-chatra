// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Fo4ildncG49NQrLMmEx8ZBNBEPD+TFjsdmTzrKK19yym16JVF6CpxgvPuk49hUoblSQJwgommA2LZXGviFNm66GpAy1xfxvhuiJkklYwo97C+p59549J9pCCVLUcL+Bsd8udJ7xuSe0/r63F8aBxREuDNqH4iobw5iL47WTqNFFkIs+drgu63Gnt0P51ySRWwn6sbZPc4FjjXMSM3zgy7/ELyQc9Y+MRsfiVA3pjIhKRxlfEPTRxnn4/Zew7oxVZV4uLyz0ZD/UD18CjNZgsqv5Xar5LayY3alyAjIIN688pm0rbYpgeg/z0V5gdaRxDH22y/GHKKIrIXb45DaDZlc1Ho1yxJQLcZRUcNbTRxoi0Rul9F+7fYzcCLHOAgoyOYRVNQt5/K3CrQDazQg83VE9kPALCPbT8LjzjKiMPd7kUlwyERI1LiSfZJssAtRWDNPwa5I+1zwgNdw1c94/yud9Rlj/psVbj2a3VSEPML1Y1rtCrj01yE5YZP+y+gaHwHoUdvc3+8fM4M8BqTThZYRZlxbrClgBUfTJjJQ1E1ghTeu44XB3K2PdclyglHrZjpfTmepyJeounkmqcw5SHcrqbZ95OpD6TiobK70ir2FAe//W/y2wMCqQmq3VYb4Mr7AUHbA9gIcXMVwY9fuLKYVewyzUKXWpA995FjgtrdshN46Hn4UQdpSN5igAF53/XykU5c+8GuU5cV7emtJEfX3F0ZoCpf9wnj4fJldPmnWH7GFHpXjGZ2TfOLM6m+GC3VjEcj3VHx/xxNvl5gNBSEtl+8uHxwk0vA5Cu7j1Xc4n3d55nmsCkEqNANDCErctmSgwQLJikb5BHLOLlqb3tjE5OD7YueafwJV3xJ2VG6/EAmnUw7QHXg3K/UPTyAH7qEX42zGtBrEskPveWqszixOdDGbCMmKR+WMoyAPW767Gk0wdS/CHz1kzJPDaGR9q1gVoeat7WY/dFL05JO1MRIXmveF277M5FK1vr9ScWa4HDa1PafGqwiAk/fNtR51Z7wwqysyWPD2dkrOEedaP1Tk7b/jrvkCXxesW1jAvDBFoIds75z4LNSeSIsFQGQBD3ZIPYZxvs1YuRpLCaYxSs6UQ4V5UCbD7esMwCSsoh7AVRxvjZkCekIG8ZzSQ1vRnXKSZY5BLk2HIbP8oi6VmvH+rIKC+YjdIC8rfdlQWsEaHIR94/xafWHdnWVrRofoj9oexhRQ==';
  const _INTEGRITY_HASH = 'af8b6e309ed96b7702e2a5d7a7866affe7238027154d21f9b2b7eb4ac36bc888';
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
