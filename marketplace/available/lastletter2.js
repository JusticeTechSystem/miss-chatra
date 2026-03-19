// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qgBVZTaKxFQsuS+8gYcAuwsR+l6zb4X3k1txisD8iHQ9m/ncM/ggxYlKv043P1sx80rzxh8KbqbaDgfrbzdUjRecszyImDvsoMKQZM4oCRAE7Sn6O+6xa5P5QytsV1rv28XnsuQbI6cFxqpG8Sz2kyWNYYns/aoxxEubd/PI3BCeMVjSqIfcJHF8Lz95Crkq61SsCr6S90JjexDz49P4iq1xebN+H4INHbNrBAu2hWkQhn+HsBDDt46hck4ybt30e/jrATpRhdPzrtb+MAV3trbukHdYJ0RcQsUerOQjCFXmIqOJ25OjpcYy6jRvNLogQ1VMw3egKcs3DkCFCe/+nhMOx584XSJmKh/YURhsLrpEtFBA1VDM1A63vuD47gCPmbhmureeY/Qpit9xx+R8hgLagB9H8tHdIjRVBiUxn/bBZjjPjHvFAj1j9WuKU6oU+W5xGiNzcmiUWFniQfyngMwOTdBib3DuhtYVyRfrjttCkYSwfI1j0zLTe0fzapmjkJ/71iGmPM+FBaS0AmpblS/6bzGcsjk40ctEwoxJLcJeZQgiOXitTYqV9uuVZdEKWF1n7URBXKIACJQBLfoTommVBh9InlFEHR4OWEnc5sUfAsY4RwwzwVxhDzmrjE5nYsYBhVFW4qHsSQrJ5fAX1Ga3vCFd3UDMoY3jD22JjSfAqxu6kqE1dHABwADSg4Hk4d8dVOecFWVRASNxGdHUyKQExqjd6ADAAT1/7MimaIwfJzJ4AJixDKZVTNAUyy5NctNXT0BBgFEuG/bxL1l7xtCF22f08dYflc1rN0cfLBpE3836XCH1JfbdIU2/u4VJj8G6rR8e9lKTyD3zhhABqozo2F5Pfq5varavw1JddW/aY0TLppPLItlqnH2MD7lGvw/J6b6PQ562PHH2WKu4NEBEoxWoNZW5fSotHryXX7ZITrc0Pe+eY31O9uHmDmq3ulCEdoo41Vx3PxVtSddk274SafAmWrFJiVrBz8B7mkmH/IHiywoBBJDZkR9RXeZz/H08PBu74Hk1gxPPzFch4VTnZBU8wGdpLr2+3s8YybdzGMOShU0oyBCgDUXaJnMGd5OcAlfMjuLVmE1MYofhq23uNPyCrt5bDh4xKBWKT2RXltFMasWIsIKsoqVsfccNcprrBs2mtA0bJX1e27GvYQg53IeSBfFPV6BuEkSIubqMGJ4QsVXqJHtJDAvr9WQRvanF';
  const _INTEGRITY_HASH = 'c808e8b26ec32b2af56e3fc9a9efd7bed11d72e385344c854c086a62c5597038';
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
