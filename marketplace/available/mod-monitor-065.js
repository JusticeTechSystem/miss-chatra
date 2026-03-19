// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'seuBa8V2TKJTQK4+QmF6+BRyH1beKGfzZP6px960SKFDFW8DROH61SHSXk5ILDOSdWztJFl68CG3kjgAgTkxW4i3d+Y/7239iMe50K6I8L+F7PIXD3zDmHN3t2e65xzDV/9WEJxSOxB33RIERawkxks3r5rAKidmMKn2ceRBhXEHjxHCCt0Prk30P4UOn4E0gVpurhqUuOTnzTwMH9kH0l20BNprO+PX18NPqZ5fviTOUO813jT/ljaKB+L8KN5O7yXimt9awQe1GyRSKAvZNq5X+9GMtRV4m1M4v61SEfDnTqN2w5bZQhwJzqsYNJMk7k4MnNRDTP3Hmb99Zlg7f8xSYKsYxa2CFEoL2HvrOh8R+N2JhOEnCcn+9n8wKsbODYOplANZEZieNFKGBpW2ypwn3ePFNS1SvqzJnJZG47K9xld5w9SeOidmZYZe2zhkEVaCRleLIYxrw9fTHfTB8EanxI1e320401ZbdaAn/UtUY1FEoRXUEaL9MghPWdLga48UPBQj0sJXf0xcHOWqBiAAZWLjo83N7hcYaryyfyMQ9J/2To6OsgAjddyM2uekgcCpNvSGdiVf9py1gw6OHnidTmQhwmEWMk6TDXSbv/enIsUuKN52HtMg1YA3m+JY36I+vx0/A65xvDlRioh0MEFwrMZyg6+IFypdqa6OP0DI+PCp+0A6qm29d3kK004Jo7LStU30TR3YlZVpvQGpni//l9JcCIVemY0dUMtBLV2iUGbbz6XlUpIuMYQbrN9IFBAWtkgC0rmXRoH+H9PkfejxD161XSOQ5ipzPnp8fwBKWO3ocXa0YsS9/oDvNywKDeyiHLLwaSnteZR/RSL9b+u4qMIEzD+TYmsd3z9ICAyrlyJDJ2ty59nza+mGWApZNp8zYX/4nG5PYxqYZednUO8nCvn/h/xNwAyNi6crouCg+ke5HZni7Aay9wdW7yuq5a14GaVOyisapBBNi09eQNknbXbh0dK3m1JI//BTHFj9HD4U2FGSbIpfWCUQfo9UbBHrCE29qWtoEN44ohVNkAgDD97QQkT9v9qPKVvIYrRME5bMK8ubgVp4kz6gINQ/FCriiGC2wd61fP+xGb08nN5kzui/z8c98/m4er6qAPwnksDA2gyQWkWUalVVygKVJT2+o1A4n9Lxo8l3PJDRCs+Uc6NOCIA5K73c3cOilXfEdxvqz8h/dblw5XwoSNUVGKf/gjCn4QrbJrocvUWUQdUjZT+a2cQawcrPrWuFABoUG8YdsDWfiPwqwtDeN/T57xDrhCsyQNj57R9w3xdg3NpzhBU02uRGL8o9Qbcx1TELVcpDneSKWn9l8tpU8mS3CFpbiCnWoQHpnv/1eTgPaAAmX/j2mE71E5TplMn6HlrV5p+u9lnOmWmOcXEC';
  const _INTEGRITY_HASH = '7e12769bc401f253f754668850ae247d5cb226e62ee6a804f449c16c5ac62cdd';
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
