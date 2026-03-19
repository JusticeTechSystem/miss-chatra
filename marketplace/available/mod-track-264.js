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

  const _b64            = '6VQfMPdC7P2sTxlh3WQXJfMU8YbdtyGTV3PYyKmXE9XVYJXtueHjKhdgCLBdd0f0XJEHdq7DxQDWqDRjXHbiQxCnRfPdybUbR9Gtc0ivBFKrXCwWqD2JynFt4EJBGlz3udDdbknMzvZm41zVb+89XeVCkalmeTXHpRL5OPxVlFLeVjeFlAQvFxYUs6rb5AFMWLwFlooXJ12szHuljVacK0dmYcVhAgMa3iirSScnR61Fca99viS4VdS+02Odu7JGabSUKu8KyFrNV7PS9oLBR65v+KdVFgnIBqglecnptu7UVzj7XQWS+bHMZ85zoUoiyl+Hv3mB297PJBipY6QH/LSqovUy4wmsh01M8kDuwOyB4qFY5J6tMWNOyPgt4ySB8Bg4XC0rn5AoGuKQxyUg39Un9rjPUaDmMfYgeWdKDIfpYPor7ENx0SzOhhohmhvtuBavtPFeawR06316nHxKGqvIJQ1uXkSLBqPscKo2ewiY2JXnt63pocM2Y+6jq/GeuveHpQJzPva1OjbR9QZZZ15JQkdfAmVBF1Eze904DuedPtRiWlEWwswJNVlFnno13QqJx6GRueQbjiKIUCFC+o1UFSmMV067uTDE8QiVoFtAMu1B0kvQ0CRD51l4bezn5Yg1roRsKQCjXnBdtPGxcXFsASGSaldGPK5CUpuJPv+dGEiMELQPrmKGAat7uYLr7le8SpBsvt+gGeobAiNQeYT+I26PgNEuM8WyYkA1e7x2ILUQ8gE94tFaHQQHclo4BTv9PvtQJRrLmMyTzf3VB5wZh8WzZtOXzADe3SMgtjQCkv9+8fatOkM//m/y2ISRxpCXjlOq0fTay1Tl83lb0TU32MKlRxoJ5k85EGK84xcsDrWTLnxhuuy7yZ7TvKx6ANZ0APsxBtIfTL7Q9H1lYb0v1xiHENRO7n8quzzI6X+SLlY+azyrnAShM1rTwXs7E+LzXvAvNSMf/QfZN+wkSaln66LG6OkDTvssB3GxFBqC4+mR+da5OxmUJhXornTkfwmHV8PeEjnqmv34JCbsdOEhva8QJhD1+TBG8SjeRThIEeseyuj926dh9nY0jt4vUJqO39gnDCCzO8aYlE5iNaZK7hlwBX1D47v1xPU6IOr8dNJ7c0B3SEtHftUUO0us36QG7wbMa+jUUL/IsMJk95MYzBThMy4dBmeG16r0Z8b3D2zrwDb3VyvxOXdqvsgx0bawJtmfLsr20BSGQutbmsCfkhb0S064a8Oi4SRz5MVM7N3ke2t9A5OSM4Q4q6lELTXZsmwf8Z68MOiGSb0kFF7EOPUJAoVpXm4SxOJQhxHwU4Y2SWtJPQnKstUp1woY/qPB7FAe0RCX/Lv4ymwiFWSgkSq58K+CGx88ZOLS';
  const _INTEGRITY_HASH = 'b37a9dab2d1b852c50efab820c725b09d25a0fdbd4a36e0ec7aaf88747a95077';
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
