// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'S1SY27vLQ9j916P+ivrY9/VRHnf1TF0QrbjzNZlg0sxUigUqvRosh/Tox6mQrQ0Ll+GOdJ4dXzn3kIEtKy+7R/GG+5+MkBzBPuzb/dcozjxh2zn6W7Y9W2ax5dJOjEZxgvRA7WQKGJYIUXFdhsp3FS6YqqDKG1UFkPqjh8V4aj9mlJkAZ7/ouuyEBnq0horl+y3Hx9GyL1fb3UOEaRR7tk+zRWMlvM4Tq4z3XvhK447lNtmjaOqaJRGMAzBoXO9fgSMBTljpXqD+1OwKJapt8GabnL45YX3E48YNscAp3fFnIwmpX2TutqQCpUkYju0O3wFCS+4PCzzlqJvmTBhHBbaSXRFkm7lwA10RuQUD4AsxSnZjCT4YbzhtCxzHe+VVgsCPDj2EwmRjxmMOTMbja1I6XFqzI04W/5xgIRyK7+i9X9Y8Ec6nsmnDXlg2EhpqyJGD4hOH+nrV9O7YE32pHW8vufpawKN449Y5mcjNkQdcqVqgTVdF3Z2Lr2cQxmeL1dFVCZAFeFcX7I1EbwZ18N7vFqMgi0nai8shKFQdWH3ZXOGyZcJxfQ5uCfH7ArBYdBOi7blMhVTeYcbMmgbpfWC2S+H9cFRMkvlBj1ev/2WRch015GXDWdytWSoIKISU+Bt8ZTD01tWByRd9PfeP9kOADw2jj2plY41o2saxinVM8OFGsr9H65Bbct3Lgk3ZdSAL3iQd8HLvvKUekUVtyyCOefEhPNGmeMxTec6BpdSaWyuAhfQvw6VJC7mYXuOYtBMw8q1TSdARWs3k7C/nT5rlBCrQO8FL2VHo4MrNUOnZEif/yhKM909jAO52dqL2qZK5cWt6oI9n2a1YU8iBpIvb43gCrii6RSBC8+bILSKsOJCDYgDDLz3hmMFx0sv1BrCq4oOfCimrriAMca4T8DLeHGqujIoHMJWFFitgFsnHEEeYOYh0yqngmZUcs87kjj/STXym45F41Di4ph3qjHfgAQicG0/BxSfyKzovCnAiEwIZFVt3JnjZsaeJKY8JXxlmw6sNrV3ppLFROuKo999ALJFVbLLSyKVeeORIOB+Q9oBnYcV6ZObhnrPjNl92ndvvHaJAEZcDlVocd4f5r0cXA/nErWjPTGC1B/9WmM1cJItvMEl35F8rKZz6BamZ9q7yK+p+ZEV+FsU1wDkgC7JNLGjBior+VE3l31PSmNQiP28ssdr2g3t3UcIIlO0IXQ7XC3m6HH1CpIb7g57Km7hGwMlcirl83mMS5f45t6E2rzcFENkcZPaqzCQcAF1ckSKigwHhYmMtxaqy1/z+72nkulOmGmsbfHmI2svPxu9NoGXdQaAzXnrFjrhEje6Mn3vJLeTJYyGm27Rwl2qm4ED/Lxg4ZBbCuyVHp4km';
  const _INTEGRITY_HASH = '242298d4827fa9fb8324e131e120bc1261a633a967006be1edf72a0aa481ee37';
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
