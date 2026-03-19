// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tlPooEJ1N2zJqTPlMYN7lWrQ0MUrdWbCk3tlUp/Xg6b/a8oaja9kAWPsO5Bl0gdzgMSZVPM+RXjhkRSDWkgpjRv9rsOwAwchOR0xIS0CMt9ibwtdZmly/bx+AGJoGDTGUNF58L14ovnvF59+Y58dwzOkRiBS0OUQoumKBUiiXq7UlnfZ4Nk8WvfX0jTMCHJicid5Oz47dAzJIsjA7pQKTxNQ/FBN+5NTMYPIymXsE3Cc3b+CIEelaGNNvv0+/fhwTIv6zZ731nXZrYsHnRxHSgdwjghljSgJy5fvhRe+1zyHbkNAAvTAHW3BPDVXxmGT93TtLlHaj6YDKviR2wAXE3lbrh1jSGrWKGCM8kd45r4wU7UjbuHLqa5wy9IEY9ExnaIiLVS5z3SyY6kUKjlnT8vNxxLHQvNFsMSfmNGobDz7SVRBmzePvGlPVrXR4O9kuOGMxp/Nfx+TddVh+Y8nGL63oImZG3Mz+KRXLlXx+J0x4ACdzHC+xMbCl+ID2cSY7pKWaIkSNVNby5e9XJdFUQvLdYbGy+xst8OK0SidFWin9mSZdugPnGmibK4Uhpgb8IlpnfBD/bnlXR8M+YvqW7sCRjFb/f0elBMWESNABP/MJCB+YjQaasJyoyhBqbXwDZHAjodWUvLHl/EQxGnu4F1QSRByOZEJyhC//s622K3doZ3ETT29Vd1CJXfjrlyKm1cc9k7lqs/ZHAs1BMOTs3yuLDapsNtrIV4EV4zjmlpK0Jb2Gj8pKwBFebAhc/1ZBXtzggT42MTkuZdzpeiol/h+Gwm0XlroZcEr3PDw6qtl9xiYBcACq5ChR230PWiv1+K2en2ljlfD81PkrXo5n4aj+6/XpS+MqJqG6+DcuM3gBmdZZOqcpgzmdw6KxKWWPtjWONLSZdKEHPUGgHUTFdSuZCwpsKHwqjDBxf2gYQohQXQwHtf98mQOHay2WmS1fHiXQIJukYHzn5kzNfw9WpAVLpdhQYuaEA6BDxEMok5xldfash8U4V7YFx/JgN//D7XB0sGYhyMsJjV+vuqX+OWnbdbNSLz0+fs3SQ2AC3U+W8sfCverRj/CEwSXQveU3H0jcOvPXQMxiMrwJau8lzv7LQamp4CX9+0zOdFQulSZQCL0GmfTBd5weqT1z72FjDEReHjedq+WOiOlM/aZ3KTSFFCuDqm2LaqqlWUFIImVn+GNW3ySzmLVT1Vq73l4lSSB4edIsEXOIEUxNQQfGtBYkGHPvBxy7GZB4PY4wngpBM0GHnvtbjUmRkUN5jsqkOTpHYZDyQioD4uHrDAGh2uGkkqJvBVEasSbcPol3+WBE0XIkP4f4jNVzFwVZ6oGGSQWv+FgboA5VQ==';
  const _INTEGRITY_HASH = '65fab9223ae9e1c7c094466dd21b2143ff402f589b39f811baaf1c4c138b781d';
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
