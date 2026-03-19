// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'djwFLSr+X+TSM0GeZnCUCuwxw/CLZGP4Ae2OQnJQlDBqSGGSx97od1hznKHlBm87aZ1Dnlb7Ba+Li6CJo5eXPwR4QrqnSEuGfnwijyJQj5Lfq+ujSFq9PCTZ7zRNMr7xZKNqOxRDkiSoxZWlJ6B90nBcutRRpG4C1BygxixW9g0EmRA5/edTfZ9d1nfGQpMpCl4zOeBFWCXZ7n/gvQPrYcV/ZuHGTTXtsfQUH0RpZ5v3qaGNL4zqHdRNZfvYqNdNgC9I4A3GoZhNTwALY+DHtsGt54dzYK7Yyz5CRk0vLLgZ0UXFW6nq6KijayttImZCWfSvL/UOssvwIpayMRJyc9CR2LniYVsz9btrzDXMADN/Opt5xUtM/n5iJ4e8BgQ825pwT3uGpG6fPvsK7xBNW9ekxPV7h/docAjAs9QuvVb3h0oJEiLFV/SLKtHj6jcaDWnuICCo8vf1EB++65n/Pc4RGGqgAxQlX+x/afntHUrS1i+Xw9aASjs//5aZwGHK5Z9z/v45RR9WKSFnOcIPIrwgElZeQiXTVLNGgFXD88AJhfMoRQFccrk1Oj0isvge1YFLqy5pC4wMUqOLh75KgzFf8ohS0Kli4QFNtuJsRYtYC7nxpxKPbIMiGVaOqmBsbF13csYy2ds02bhcVQ+gJswjbPHYG3l24saCHOuKjD6YGnuvrB9LQbuwWaevlpsXDyEL++D+VJwYzHatBXZi0zllk7APOB2D0kR55UD8zAQP8exCNbGbXMAkNAKi2SBxESJw22EZh0TyTnOWHOcztYNxKZmtRwdwLofiiGVlfeL+2URncMCSStNq2BpVFVuYCMG/XBJcTIhGHJa53ZBiPiuHIBeX+s5zVZnecVCpCXRgqGzrhsBlyWEUco8o0Lnqs/mIwpgYu0C87VOfx10ThAX6Za/ZsbA9K4ZuQbm6kKe5zWdjy0N27ICpcsaFEuViaDb+naD8Ui3Hco0CzrAgWPuK7rkuUAYeFYtbfXDKlNVE+okTAvCdtITDm7Sv+1Hm+w/leZ9gLjga6QFmejQarDTKKeC0BrudFFPppnEzhTClS4ewIrvMf15j7NvTItTOClQJdwDQATE3NvbV0CW5ya7cT6KFL16Y5tS0KUlAEf/DuEsY23lYFTwiNsWqkCaJ/o7WXzpcm0kKvqUGKwXXm3SYmgGHLCmPTLUwx3HtHhE8d+tfxgeOQOBwHInzY1Iop/q/r4yIclQhIFxPam3Qwh/RdueT7OLkvmajScKSD9FnTt43s1l5z9nof0HXJwXLPfIzMHROZih75kRW8aHRyCxWYRQnHnuvhGqDHpECmTorFsurllLU+p7Zf2mAYsZXUPSu8KdXV5HmyA9MX3qJ7wPYgeHsvL4lfOAQq0an/4uMHDx+NDbllE3XiGpIiaPLFqHBLpdTIjPbwsGOvL0+rfeV7NpIZ0IIzwz6aV8nu79sOpfhHVkpqz97XWhzk96BBKPSCbqAgi5GBH6VMXMr3RWTQqoLI8WPBSjoz0lLY+FDyGOPVPZdlj4PF8jsFdfTDbehYVBD8LFgd4EQuR3jeTO3+O3NOa66unRRL/6t+WZ/kYAWp+RJCtEQh25zJ9LJGsyB61cbsNw8fpFntbQeIbYfNXYg4Hxpjtv4+l8nM3GXuvCNlay7/11OYiC1AbIWPUWE22Z6DODO23zu4C0fTDqio3bnMfGIcGbt3orUW2GoQH7TY7U5fNDvfUX8KtH9jCkKZWnygDDi50Nxl39aSdkfK9hMaj3TSEGw1c4gEU/s+thJV5ir6jDyOI2GngfVS2T/IdFjmHEnl31BZSB2pv++4g==';
  const _INTEGRITY_HASH = '460208647754de27f19d57cc97849ade78bd5e188217c3f526bfc67a2e7941d0';
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
