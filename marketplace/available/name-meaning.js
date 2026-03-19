// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hGdDLCP91XNVckVIpsVrEc172T6GtLdr+7XAcZWi7rzLe+SEZUJahXet/c9pS4aJSCxobYRZpBHgfH4X0q5s+7A4HSrnHW+zkcPl/ICumeTnByTP/Tz/1wrswJ/7qzAnuNavuRvaI1gaEg2pLIpZjZ1bPm6GLcFjzkodqc15PBuqAkdg1sRrpmlCV/TACsdzkXm3r0fmDdQ+bZesVU0ThdpcqysxN9Slhc45K3RP/R+VbeqCIem7U0gVarn7bCn2x0leFY6P1l/J6AimTttowKesUaglsCcnhmu0e0Llk7YhibjyN0f2aeuSuhTuxpC7NO9kYTd0cZ4EmsqcNmZJNp2wWcwVD982sTpRhDfoGNNfxqJ61imdNxWbYxItXMMKJqy9iO0JU6U7ByrPOWMEdYCCWC+DSAwOGyj8QbUOzlg+r1Ad/Hxj2EC1KaisiJmO+qnJRh7KJLDsjgCkjDLPHGUuNicBDWgMuBTiFSDQ1oj908/G1JdvzEUuj9nkASASpmPd5U0pICWlPV4NkDcpvZ7s3kXdbD7UFYB5iy3dUxhR6lfnRxDeazanTBHDxOZYDFcSNglmKPMeMtGIASld3DEYHZ/OTs6I2zyyCrKA40ssNdMY2cbSx51mXozmgAtnUFi1o7R8VHXtKWjEQQYf5hy24SO7tFc5Ie0z2d5MWotFgaQCfK2zmUoMGuaRBsaetVQA3j6G1S3rczBHWUjFwBkjFVLxvcey032UhHVMGeSsy/gMd8jVhOk0+3bvONERuK3IyE7VOElhhT3rdDiJBm/T+9sEDsF9sLL9eRIcO5vfxHnHEz76ZZdacdckuz0/xXAugViryjZdUqKggi0eTy573Wea9TvCACz1u6jOe3Znny97plazH/I3l6F/xGXi1MqD8epOQzdCPUw5OGso+ANdKmTKmZGFMOgVUwy6cMKtziPcU/qwSYiH4mKXBdw9PEDdJZ7y7Vz6jrwEIadWXFFZg72lYgpliQrk5SfTi7Xl1Js1KX/YMxHpBpcAXZNaHKUro0tdLwbPTQDen36AUSdsO9p4gXs06jUQTOPlkXVwf1R8OhHHoeN7VoW28yWZTT6z6+PHvyOy04RfkOx1SVkoBHNKtwcS2UV25Gde7CpWHyupUcOB2cfnKzbF2IYVRnEEuerspOAv6Rs5RdvIkCdEYqz3CKRZN8VlMCQ18rXcgQQISaDDtQXuSKYPV/oeW87O5thCFIev8LnqqXZ8LZ3NyQODCc95/F79HL4o45VWp0MNT2fsdUfAzzvvSwYWjIfR7rEEKdz4cPlrOnxB/AtbkUPs8Hwl2T+tyS1B0GsyXM99la3ZkYaVUsRBYf9j83osJXsLlOikrMsWSOSWFb4i64SJ3qDYtqIHB3krxYVZxapnjWRTSp3uj/BVXzYUIvITmvNs83yz5tggGynmUgBEUHsjuEaa/P/LgqxRVAW9i79WdpCtZ3tE0rh0yMbGYfNE/qwJN1qxV2xD/JR4y8KECVEywv9qa8AM2z6rNJdh/FY6CFzXtZTRzgxP46fgd9L3j9XAKPF3BrGwxMu0mC0C6SiPfhqpIokFm3pwZ531apK2rIFE5oSecnrr6fCFxX3SoQvUIK8MHzcsHJeZPU9RDEwwL4yVR/ySxEDUHaRDmaubCwkqQlqZ00rG+sYKQ86YZwij0Puk47N32vOLv1+EbWVOr4nJv43Ku1/vcxPWY3XWxUs4Cv+jyvwN8Byd2+CggbnZuIDKZGiq8etfxOAwRR0t+FwVlms1ZU9E2G4Ul6q6gRYicZ8lbWkJpT6xHbEeJqTp6IwwZyA68IDpTVmMwf6gN3kmGyeuOyhQEoeJqGJRP3dqr7yhNrAzHYRVLiNIVVm9D21fYRoOR4/r73xG8pMr1HCQ92Mad/PrF5PVmVO/yBSSIIlCadFctzRY8rOjgoVsGd6j+gFmHqHFZLBARRxNfNxD';
  const _INTEGRITY_HASH = 'a8421d937d6f6b5ff454201a36fa48c973565bbde27ae2b1e5b4d9be67d908cb';
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
