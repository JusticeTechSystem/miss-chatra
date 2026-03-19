// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'g+cyK+tTxdh0LPjsON7tDmUjaMlCB6l8oUVKoQtLcwFPzWD58Mfap+SKZ7itNu0d4VcCzbuTMrS+bN7GTIKVr+89pjWkW8VQc9UCJG/OQEN/V0LkzPqyAuMI2WR59g+JB8wk0WptZXIw5VRHH0E6LeLrNeBUasXnXzR6bgER1zbHoOokhThPxCqrlj65N8DslxEQipdRDAyJgUkWR0KivFxCaaaG1Vi76Xkj80ehoDS1HHNjFM/oaNfkcUPSpD0pmT+ukL+PpdT5aW8VppWfzHeJ73Q9opxZZLAh6P+kAtht0qNWlgFyG0d+ZqXNpFZ6F7citqrlOXzeoItQ0H+VHVVaCz8Mw5zO7cKRjwJZeB/8SevWi+utcnPoNTYGUrmAdgra/KhN2f9XcVvMfq6NIqKsHlLdsSGBsuAQ98uXkfr81CVPqdFftncQqWBzK2O9IQbVn6sMMijug5wxyZ7nZkONHO1C19QfuaDbaFh+KQYYb38+AAb8pz14frKTaCFF9ArehcotZUgtytbMuzAZh3qrcmdAsLxNQufnE0BWQ9ZL2Q04k0dJ4fFY+x76CfZhYStva/SVyp8w5hglQYIP6Ux5jXIVfn0jU/zPd9kKHepagvYcgmuaZuxHCLvtUzN3wbMM7tbJbe972CNXLBgnG1C06GBfYrsb4Jpt6tMiUrm+BpR7t8tYiaYqQSChF4iNisVz7njYzaEp/QljTpv2DyMohhIYYGpwKC2P9XlOa1WAxgAyo/dexKguoippV7hEJKwWKNt6gtwdv8d/3Lxe/kHfRMTtdbU2pILtuIT6pf92DtklPLyAAht4OrvKsVTn/VPAl12fqs2Jho/5Lpcg8nN2I0JRGmJhitRURjKEgrKeaoCr0jt/A6iXKvbldhGKjL1C2IqNjFBvIC/DtvkRNxzIT0ucIgRnmKmvGhF84H0KYApqO/ZjSJeQ4Zq9UiVOk5erDE62HkPJjV4d8GT7e0aqRo6EDw6PV8jECNPiCF48h82mcChGVo8DsFeo/ffufgkmCWWvpa0=';
  const _INTEGRITY_HASH = '229d4dcfd50bbbb4b144038c2c3dbc739796547a1eac07279e6dd3bf3e55c343';
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
