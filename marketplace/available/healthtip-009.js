// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UBpof7Qqx2m5cEsNP4bi3r37+e1IKnqwAssiWp2Ii2HvhD44W1ivDX+/nIgL7uSlPYHpHGWku+FiWtbNd8OJPfjGjFHW0KtU9ep4ZwF2ZFn95Pt4TagzbH3dOldl6c9eoCNr6T1Xk6kiWzXabQwJedGVRDB32UNVX6V12sKC+DwXwtzo7maBlSSoc83FixgEsXP83gPU+vdmYNPdyySoJOmGtAUC7z2y94w8mCZ23I0BDQXJvAA0DF/T70s/6mebRt/N/Ac2fQWPCztMpu350Pe9yM/aWlJ5VUtsjnyXoNciB4oKJg29RZGt2svIW6MsIDcrKDiihkeovLmsMN2igfGyXMmxqIjst/BW8MsN24KROka4oAKLr8sZdm/ES/DwEXqlrTwalT1Db4ZpKE7fTOE91Nwd6dSFWvNdLD+N4rfearTVMB7QVjpK3oJP8cY5rUd0SwlT4dZbs17tgYwNsp9xWMnPcKZ4b3VdtN16RlulvE3/NP2k2bEKJfrFI2WR6QvkVCp0Z1VguYjHo6Ra5prI0lwE1hHcYC51QthEUFw8mOUrtUdlIqbbFzSsAJHpPVTNomoSwtPBn4X9eUowrf5QCYHOEN0T5OWgxnISQRh0WCjb3uLHFD39q3J5RlDu3QPmxIJ46VxoUXtXjHvbSKT8PALpUgykplM4/hvfQ1x/PN56xaCsSIKb+1ZG+0SePMlf78QUcjYglahFEMFOQrftfT90bx0USidBA8VOw0OEBl8A0WJkF1U0Vrylfbr8c3QyygdB4Mz8v5l11tocf42IhrAYJCRJer1gtitUgSX4uiKfguL8cKI8L+bZWcn5UuwAp3iGUX1yDfqBPx5ngskwd/YDYVTAVtOyBQ9eSMiqu3Ubf17ERSwMKdR8/xF8XoOmxzMedIrUMdIE/e7IlSv4vgaM5h/QoyFEkCZGRUh+cZ63FFiorQ==';
  const _INTEGRITY_HASH = '1723238b0cc44bc0d8021dc3465c426fc3c5cbf707d9989f1965e7c5a22c7b9a';
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
