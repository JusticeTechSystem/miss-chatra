// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JO/vuISBsBo1Nhbv2F2q4n+ukMwzSmNhhRzraILxAgWjQdeYsePy6eF3aVuc0MB17caoIw6RcTOkimABCLQpaoSI8nqXim1uyQ8jQXLL18dXLgr/7RGHV2sSMRPxBONmyDfqe0qOTRGVKzyWk/jetYc6rHWMK2VXadiBR4Zl9G4x/RIhAECNshLYyk3KBig4x+KxqShzIa/hlk5tKZMc571Y/L/M5/dY2Ht8m/QPQh3EBx9GVuuwy1HmProCANrgpZcnf3f1I54ZU2ToFYR6oQXM2USQsnQUbJ6NpB/TLuVx0h3WQU1FX/K83dBLQ8ebr41N8Fjk/5upAY9AoGlRYvh7C3hEH2CQWe5WYXHlCcPnI3BiiV8wlCkmNUv/H6IjJ8MXnrwenyvKOlgCdSbj7hHGEf/2AkS09CtA4H7Wzxt8+941tsfNUco3+eOvdzblXdOJdos3lLBbnAoq/W2BkoDBUm7RhaJ3eqHaThwCfbktoam6DIn+Zi/rikX4TE8nllXllu9e3fLvJjxfJLoUweTtvatBvyx7OM5WO5ZGw6DXg3mV20CJogM+/kRREW/L1dab4FSaM+iseblfFLiZIX2uNlRnkh5tZYtJKLt6kS2J5rJUTwJ3TVTcLie3am2CLsjJgEGosUPz5CSCgvy/0/1JI9KP6pRIvldUExbsOsH2ErpepITDa8F0SuKMzaPA1yvEsJkFNSq5+snq2nnRLSDd0B5QZ0vLeKsoQvy4qNxxg1by9vNR8ULCUuxIb0p/q1R0PYTTsXEInQx/zlVT375i8t8BU//9qE4xkNnWWQACeircKZnDAoAtGV+jtAMqXmsL+lY+IVCNbC76ybozZ25IXv5v2eac8tVJXgdVTSUGhjKp5FiNxtFq0tjaq5nH/cXaB4qYr7C4g2JdpZMpEb4kPkRaErQqIMYMo3aabDTBlwy720wPPpT66ZvM3mm+zbfMC/V3DNF3+Xuo2GIblxldPOv3kEk6qtMdsRuMvZs1ZV/DgLqH6Bw0+vqyldmncKKz88J44WreFDjgyPwPsO/l4hbThcYhpqg1c2qEHyqk8nUdQW9+6OjVCSWMk4peBAVLNDagOPaCNusRVBf6LpG20aA95BrGhWkNUVJnbrCNLeDjcTffsnsX8N0NLEwD7EdNtj3CnEUy16aftRMtRDVkJVwX7tXMvkVd0QZzXLckKPbTbx64gPN5ft2xbXQ9MUuuUh/sLjjLFfca+BFOHoC688tRJ9ZCD3kbnXxrfOACeMVam0G8EkRKu8rXXvL686pkAgXgX/gQioIPxxR8lopW9mu4CZzMv1H7+Hwx4T6fBAwTrcNd5dGb0ivAjKmEX+fGT2eB2g7MdXMqHBqI0MT5tnyP7BKq0dQow817RcwMRElS8GvPeKToQtk+4sfMjVuSF/njd85nrhON4KybHShvZJlrchmp4GYXwJtL8G52RVVHbMoGkxEESBkMOhJIlEqVJCcX';
  const _INTEGRITY_HASH = 'f7ffb5b13e379e23f5eb6d6a12cbbd84ff4971237f2eafe2e841825eacf7d912';
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
