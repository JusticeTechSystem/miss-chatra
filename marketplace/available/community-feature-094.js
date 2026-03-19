// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'y6ZrmTpW14XOeihaAym9Ud7Nrdx/M3pGaagehp5GrH5+MHWhldNbg5zqG4S2qmg39VPV7GdOZHU5B0I4GjZyaPv0zufmmxUX5NrXaJvbnt8OHI6viZqQwfN9RMrs+VNbNHRsZ1G6v0tCuHLZhY+/n3/pbJdKxOkaEssVH1o/bQlaeCqKeUZBzR5OD4KMFlpXNmVO6pbFzylbxhz+WjBEDlAAGfbwXUx0Z6tzT82sKJjiNjRyLmCEwaajZ7KIlzea7ByPAs7QTNgrQKJ6nKXrEdaIFGO3t2JrPjiPbwT09cMoxSb02ck7K/RUtiOdqfeId7yZQuiSDCHuZIek2V0ZZYaWy0B+MTjuPped4SQMxgt+Pw9jONk4okpOQbkNQt1EoU6xWFT5JIpiZ5XpyFVXDgOZJihyo/Q7b0RBjjsvXkIdVMB2TPec37JgXFXF5anD9jle2YKAXK7J04j5JykIBzQ/Wje5E8hlYsG1UBAwhqaMexrr0/BoqVm7YsFMUGzEuexwM/F1bJ2WSZrcMvMb/Bjm/UCkskRK8p2C/kpYWSHt1JMcNdr/aVnUP5w2jJsuV/FfxHV2SlYS7yYRX2ScGH2C9GnCKmbMb/W5UXKjbBLm8W0h4KSlguY6USwW89m3gCj9YTAaL+d5X9yw/zXxENNWcvP2/ZlL4lgVjjQ3ybbn0y2PnPsnH+hyhNFHFO7fEub8pRoy0yuruMT0rnsekgX4y+oFqokQJmg5/db3tPklhQ==';
  const _INTEGRITY_HASH = 'ed5cecf0aa1e30f782c591c68ca6354236cffb67c8f02dcc353e74dabdcf3394';
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
