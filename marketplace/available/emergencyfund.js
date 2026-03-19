// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SF/Od9CFzYXdAduxR+XhDuUmrc6s/6EP54e86DcRH7fQHMUYAdc5spGqLv3P9SY+UXdTzytvXQjAJ9xrMWZaguKdymxcQbZ1GlhEeMEQKio+P2G7J+62fXpiVOzVPbogEenNAOxXIDafi4L5LPyOvLYVUWo80cIJKlGzf8hM+KEr881xVTx7unPCslrNKrHLaudBWQrg9AJ27RA8OC0vHn5y2CdIN1BXdJD8iqw/nRok2XXNOuoOUEXcIEsta3eddfoJgjdhdKasDKFlPMvg8Jtqs+5/GQDTr1IU0NCcNCyRqHGLCBYovFTgooSc/F/2EFcepjq7zp5GH8wea7hkn3RCTLysBHcKa3VJLLIrDWHrRaooyDLx749whGHaVWhEvthb3EmjLTB6jZHzS9D4DmBTZnjeCUpCLXGquhiEOaV1ttyQtyN8m/I/wIY9C5Uq/6HcUIEd3Pt+Rp7Eu42n5G4ONKhfm5cc+CxUp3IVSI8d7pIWB6OovxSGPVRk2qHZ0nQPl9RHk+Nqo1eZFTwKXqk7zDjYpHdU2Yz2PlXPZ+tUpyvzJrkiCDrDfX3r1675RT0B77r8mKjnfIzz9fhpttg61hi1C2LpAyPNrRqqSpuE8M9jgGhTveg8+k1ujp5MVgnbZ7gqTVIl0l/Wnn0oexTFLdjrApL6kjl0mpTSFWJ21UPPyYOx8TDmjgTfh2Xjcu7y+s2w4dREvw5oIQWNltzHi2PUgipiqlEjZPt87AwzMdIMAbFciWrV1ky/01kmBq1gozZixG/lhJ13lDxNDgBkKlJQ4C6HVHcplG0IKT/Vgip81Vqo7TnXLz7WboKywV7d88fRJmb4uXp/SfuhDzIU49cg886ikNQdWONVmBJUuAVgj9cB+YwweqNbep9K7EYQ7NY+Oldl4jdcee1sn7oRp/T9lGuJv26h0gSSE2Uqp84x5CkwVNQX7o+aQTnRo5H3VZmw9acEkbCBzoIBDcQO42nsdZMjxuIiUuPQBXZbJsyXhA92NNaolPU+xwUvEuIk4ai2Ye2p1WHicyg5ir7TmeF0dJh1xTesVSK8BJwnGAwzqJNo08lHnk7K1bGEfonREBoV2eW7im1JR53XxbakQeF5MD5U7scHtihq4c6cqA0vknJ7ZlKWRmq9JV3jiHOwQDWaaRkKLwwJ0Fl8hhiXN+r1aB3/bLvZwci3BlvZjqeodM2AEOhUmjAOvmiCTK4ExA==';
  const _INTEGRITY_HASH = '1abf3675df300f5e4c8240fe0ff065b4cdbded989bafafff919e23e19ce8a5f4';
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
