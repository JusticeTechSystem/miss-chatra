// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Z34VE/u7EUFx/IbuIflfvXRrOIf3mPGf0AbItXHlG5YZQdscYrgvrcLIe0I70klz0DFZ3j7+6dio6yqI3HqHyzBMBOJjAeW3WOqr8wZ8TGOuIZMyQIkp4nHfn5HXj60wV7Rg//Z1XkWNvANEz47exMNN1KNy3p4AMVYJt0JONAqwFPhBLnek4O+9sLlf/Q5q3opjxUqW6RnMOvhpKpoMRpnVxa/aprcE5kGAZ+XUl8DmdgMRX/JT/iHe4aHt24GjZN63hRn42PvrJdqemq/bG3Q7nyebLaNaJ/1+NOBvlTnTKcfl4sOHLdJwLiC6wIk2Zzd9cUASNyw1ZHJnZXzNWBCH55EFGazQvNLKD4BB4Cih6/oP9BFPzCNPxCLWYFODSrMDG1WRxTCbgPZ8/7sYn2ZnzAWztbRPCYyCMIeG5X7MYam+Z+yRtwQvJX5Q+5KzGJ7UIGZ74hIbRyTZGyC0KiWCExC6Flr1kwuZKBI4SlGKbWsBhuWGHs+c07CsQ30JJwJ1lxMXYYWnq3i4yXBGg82fgYYFNR7dzYQ0CHb4bHeKL7Ifx64LMNqF37KkXWpZ8bqMCmv2Olcs16FMK+4pMAna+Hk5Toh3yds/IGO6kuyCe7jJHVw7XnRVF65g5esj7VBVmOBwogJh6bVJZ8kmzg9Mi6RvX/2MT+hqgd6hjeXA+yPVCyR9QbjGnTSRfTaRfS4AMIF01ztyd2RcP2f156fUzsqXdAxqzGgxNxVV9aAn7Q==';
  const _INTEGRITY_HASH = 'd4cf7b88a56ed568881ee891a40d52854475d1ef76abb93e2834f447aa03364d';
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
