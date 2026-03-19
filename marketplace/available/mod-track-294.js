// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Fc70sqFD8QCpxwx7ZmCJlmoISh+wxVepd6MGJjwZeWjUJd49O2FRziF8ihAuOG/iwXbuxC7XYggyrjH5UhP72LTiELD0od7W8q2pN/2G0/PbuX023Z3kSLXqz4SCHF3QG52JItKWwGQ0O6HDEvuBTkKrYPJyux1yuWMHrnxifRbzqW679u4Eusffb7ERwdJlZte01EhsHOmX3XdEsdZBKpE4vXmtnoU+4jvaMcN3cRP2rBHHNI9jEPZaJdfvOIy00XgKvYVyIf8NkjAKP0vquZqR3yT22pGqeT6Pbysb8/dO1+XGs4vNr1VmbexCmsH9nheySGT7Iw9a7VTFWvRjI2ZsAiuajWnN2vubBiodMhUNcaDpIIqsdJtzfk2mIkxwuvd7diW0VBEKpmBY3oJA5sUG0SN2iptYLnz2GlJ8tmKlQ903v4lCTO3jk3xGwL27YeywV5/hQZhpFNhZeDIe2JFg1JM1IyfjpfePRFDHJowFSDajDJ6itqZg47MuMxdGEA8/lmiUiD9DxUQ+rAniSDXB/VvelcHNX6/LpPV2j4U6WUim8eL5tPElDcpKgxt8Szqz6V9iOknsDbF+7zxv2mAwFKlt70TAwCow6U6XlC3Uc63KQ7GuSBgnfKj72vROWuospICkyzjTYHv/2b0uXsvP60OHfiWYLLTjPSH9NjeSwIBBVXPsyXpa0Gjf8X4zbCYSWBQbY6LHwd+sAs1APHuaH3akL2bAg1yBJyxlASMXirzcJKGap33vDdPj5G7l4fMF65jYPJWjDXvTdMQZMIlbZYVI3na93DgA6fbBEC7okOt3E8nqc7h9c4/ajR6TbCSe6VrwMWKrwrMKJCv39/ZWSWfTmZaZnF1gqdNVG0fWgbrbiWCEUf5ETUsDgAYIo/NxeyhLg61EK9F0Cr5cc/pGqPz07Vy8B5pOTbXklU3xuTbR1qqRtYFLea2a1/16StUlGQ6TJbPLqwODdMjvh29ZcjTDb64cW/B85OEaZKukgYDvB/LnTA0uraxWG4KvKbQfJKMp/YqAZYFMrM7VMblQkmeG/o+iK3EXsidJYV2ya0ihzRzp9UbXSAFpz0QtUEZycYZjJHM4e+NkouePRbndetpMn7ENR/d4zTtR4/BTLAas6G2NXFMR28zco7/wEMhB8fQDMG0lIxSu3QuZhAYaG7oUnaQQ7ljT+UK1CJcof5UGAuQyym1Z5Jk22V9ec9LRLeLlWdhjMPmJqhMHDzQzAzOdiCfYmFYFzjaG8bAhaF3WQ0XzwQlj9oD5zte92b1NrUdGats3fSMDlVNkzumkZU5z5gHt/MKNZbo6Yv0tVYqLo5qazqBe+ET6tw2JvUmZG+FsrIXv4+Zd7+ef80TVnrSObwuOHV3XumUJ';
  const _INTEGRITY_HASH = '4ab94b4425745ca7833a53e1289488b4da3846f116b648f78c5452ad5658bc1d';
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
