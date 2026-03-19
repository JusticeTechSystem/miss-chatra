// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'N3h7SMLwVMMYSfcCmfUODK9gwTd4NfNB1lFIblZtD5HKgHsZqIPIgIEMvmx4APd68sgL3IQMVSSAkbESEegcc0CSa/BSroTuG8dFogzGOzIYyyR7KqMQTU0MxuZx5X7JToMNrvu6XnQn4fpTryhPhWLeDOZH95jPVqmhj6e8jm9g+esVBvnfiLZPl9/7D4c7HT6UUB4DHt8je3wUvUxRKDK2bKBhJZLlnw1YENovxxA5KObCS3xGI0XznC8yLHmQYyHPu+63appOaXpBeMYEKakR5K594lgTbB2bfK0g5r7iXVrsaXph78ypuDv6lBrr7TiewBkSXcIW63XIQjHCZ/8WFcH/DCG7fCeT7zn9fcWUH/j7HpfCuu0NWWb+Ef8lOOe0tcFQFRtD96mvOyzv5KJLv6Vk1WWe/BcmhFN0sA4V4a7VOFr72PL+HgCZlyDrzTwSZd2fowoxdCJr8sbFOPQA2Jq4N3/ss7adPbN8ARpA74YklLslCCfkP/pBvJ1d/qlADYH1puiRLi+N3LojNSzvd6HCYF6QOIhFmIebllRKFyNXJosgM15TpBBOmsN8064mRX3pe56OVPRWlLia3xYDCA4zLN/F1e8Yeu6jtGDewxHz/sYD4L52pHPfaDG/IjVS61wDdZ9vWTi/IS9nv76CG8pgaYIC5VJ4bBJgcWufp/sAi8HMoJQAOJ/HljC12eJZPkefyEQ1MWTzRVJFLChwI6Hz+qTMLx/kd2IGoRJFEQZFEqpRG4QSO7GXrDBwrR5UzzwyRl8C2XCXI42llk0CGDWiBld2qyRF5QqRa6IkU31/j729XqqnP5vYO0eGj8pLjFHl85UJTP6nUzyHzjBP7FPl8BWMMhxui/R9ne5t9P+PwguNi0D451BkR6CsqYsYPFDaEspj06hlfCAd9zY4zhp4qp1L2qoULw+mJliNaM3KW76r13EzufqhkOLfNukgAYox6ceJd4chvLdiBkhQwR7c4TVPpmc5NuOtIxBFLwzTr2ll5Q3woE346VixT3TtZyfsOiDJ41xSJCFtRMSxOzJfIJ145DaHglHXGbUgqQHm4W/TB9sGYgpl/sTwUVw9jrevDDN7LxhWiIJNRk+cQk49rFb+GA78AVNFJpvP1KGYB7DUs6r1a1mvsfuXbC8CGL01Pukq3NDyQ6UHQqqaBV26PrV5tvgoI0r2DSeCVFGgkCiBtjlXyA9SIZ6BVKbizV+FxaGQlvCu2GEjdLfuRawgnBryXzby17V8c8kCI9Z3ltjwm2+pDNcv5x30LgpAEMMdi65uoJ4ihz6ZBNQ5dD9JlQt32Q4p2xD7UvlJQ04GsinoCzk+kvzDVijtQFP8R1X/34N+hxfD2zl/ka4VK8kv9vQdyhMVjWP81PArrBd1ccQfTQ==';
  const _INTEGRITY_HASH = 'ee832c7a4436fc0db2a3c5923055fbab3da172d5e5eed6464a02eba24821b77e';
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
