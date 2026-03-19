// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sVhe99rXK8FaBA9uP56jyklv8vEKuSCfMyDDjdRqqfp+Oz5dZYZquTgY2a1z4tnHSaN2mtUcQW3EleDv/evuGZLeu9YalcTdlBlKgGheriBXjagkLz6LpFMLYaxnXzg6K1wR1dDvcSYRK+ZTqyFtORADfi0RnG+z6WxdN1t+tunjR6whTbJLT2RuBzjN7Ipyxe1CCzdk07yZHM1LmesX6tJG4riJmT06J64T5N5z4SHgkSZVWzDqfKJEGfDMm6ArQ8Kck0ehPRjidK7QFf1sYTKL157nJvdsKyx4rV51kkSeMzhZno/MTV7O6VFmhQV0HuN9ZbKwDl5fviDWDKO1UiPfOvonulqDkr8WJ6Srn+yVMwfjKBpkZEMggGPFoBv7XQRsaRvBhnVNNQ8ASL40krCNX6mig0n6rAN4tHwkYQsR7zo7K3jQ0wQc9GmoJNxir7AKlEHfDJyLNcuOs+4Uy7K0qG19RyCXcZIaHklBErIr273rO44rnTUnYxZto6f9RH2kyytbeKbGuLS0+3I7AT3TSAZ02b/OVb2cPPtaSevmDOP5DQEQJV9drixnWCHfu11Mp22oYAi345O4MATvNbHLLMb34MNUjlUnCh6Xd3HCfmKtW9qUtgwTGUtkqi336CtyYoawqrSzILIo55wNshtArQE86aBDPufq45ge5HnxlSUPvpb+YIpMkNZGWL682ix1BBn157GTumRcQUKfJVjIJUq8UHI7wAg6hz0VOyS/SQeyIvmkh57aS59/rmEIws30TqLkzzfuMObNmSoQ1Lk9K9zpwygBbPQl8+9Fwcw6dzI5UzMvL29oH8Vz2hOmgPdMxog5KQ+Z8LvUYIrTirsbimVtsfqpf+g2DJOk1fqK74xUi1RYkoNfd1K48ejKHN290j/oOpcjOV/dOqtooxO52pYgcMEtEkjW3SaeHZkSI3L+aSK4UktlCRc05+9+arRtm4ZXyLbD/LTXIVYhJO9e94aQDjlnOV76jo8mDrrswsvHnnjg333Zsk2voGfUmXjT646NY28SFKEfTVKv/BrgfgSjosg402STtZItfCj24ovfT9lBtN6TNIUfJtoBSEpwl0ppPNBnTkRe9gAEVmexmX5+vs9vs97hu211L7xLyHCp9WGzri4eOxPEsndGgUAyHx4C4FaEWaoYEpExH0jJyANNXd2wtJWD/UUUXcqUC3NcWKh6GBD0r0q1wczGB68HraTDDkMRb4TxDaruiaM4f6PaVGT7cUi9fP+7qZbh2BwogCd8pspu9kRXobVbRHmuhGSDOHBplzSS0dbuz60O6ZEK+/OHCEWml/3OuvV0U5cA8BRqoJgaTHF0ZRm2yf9W0fvkYum3Z16Q15sBLLuo6QkY75EPKcQ93cqBb41RvwkMpWvP74T7YbMGHfWmLFkYlLw2HGWN+Gfm';
  const _INTEGRITY_HASH = 'c8590dca18fbee6a6263e24de3b337ea913df7cdbe1b430289f50c35d345f1ce';
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
