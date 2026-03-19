// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'soVHAibTDY29tjn9vy4vGSdJNgVI5M9JTUk+y4CoQuF2+IaIByV7o/jxgD7TQ1PPb4pjaQRAy8mSNbyoIoxqfM2Osf4IvsfMvEWQfZGjm+T4CI452o8FvN75nVkte88k16gbmNzsBkkZuHKpvbK1xCryQbKHiZ2OaGj2IrqVBKFUAb6rG7Tv6OmnuUjCPTXCmWNjG+Go/tA+5lUe8g5bTQqzcYxaQ1o+CM8SKQuLIuGKYDPCkMHqFrq7zrwiUtQjVhF8XmWo8XuqYigjvDeovQzLU2db8n8buCr47VSd8BYcPyiZe5py4BcHwuzY3HW6bxBaHGhvolll/5jf2uiYdjDxdMnl+wYBggiLMJQuvHqB73tTIhsd7Z/W/GRT3lmCjem3E333QWwjrtLrvTSgnIgeZRZ3JUqsWOD7V/rIqWlSo2VW27vko8WrfJU+ziGa4/ayby/CQmX/J87XUW5gyDP/EW2hN82nvFSX0AP7PNghL0bXrcTdkcUrpZppAPGZGfU1AEEYNDmr4cspCesR9WmHdaFRQfA+AyzwDWpAj94P77nIvyVbhkOb4ZMYReabNceN5xSqZNozrjc6k31hxgS3PDdGMzsrBvLYVaPJbiWlgvQOwXB5ptZkt3Dez55Rkz6fRI/hiTNnZdGDyXv7oqsLtbDSsoYU3zrBeYa5tOxdXLG+Fy+pKThB2OdHY///V5Gn1UlczzqLXE3D+0jTuq5go7twdQBc5nJeTXiQzao9eEUerybL+JQM3JwWpeq9JKcLoVa4RdcQwMWYEosmhPchhnCqXEu62YoMU5nf/k5lZWOQqan0QKUvFmHSjsy7MbW61ZXR3oXv9Hi8Zs/msYDNS+6hjUDtt5ML3mpkpcmnYj4N0klxDbAxXeVdl9GV+IWzvxx+3OADwoY580I+6eWmkevrwTyZmMkzaEmmyoq3uZgHO2cxIutVY57xVQMCNUPyy+hQllC33wrfUqOYic0MSZ2CGIpMZ6dJ8coISXy3vA3DhE1oGL5XGft+Sm8b8Yi9YHHPQMJAAlRsjHcIHnjXD7YOURO08YJhAnznMRnJ4ICpe/aA+Pk2Dddc6ERCCqa+PcuJxgB/VByk56ohrAvi7A2m93nRoemXuXE8KfWd1DBJ1+D/Bc/645PhBscdPcAM0rl8h2fC8fM6IDAJ555fAtLh2h1EIIWoHh/0BWLtqryypcdGDHBWXUtGOG6ktFV+p21ND/NDfeasm8/uJ0BmupZH7dWciFbokiO8DauKzqiieFnejRmJIFmMzmzG/4QGRddqYzac0c+BkeNKTl6eVPsZcxc8LIL2yN23z5mYK5EmoGdPX5gFEQF3k+ZwRSzC+y9khvF1oNrOStqet8t1kbwHcoP/mTfu5SK6PgDOX/YUS575CQ==';
  const _INTEGRITY_HASH = '7c8d7b9d8bbd56952823237ec3113b5c1b82ef247675364e9c6feda6ccccc347';
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
