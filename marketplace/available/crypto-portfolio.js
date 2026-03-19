// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8qRuPHKXmTRfG7BauaZK5QceCSmMDa3D+ZoFy/FYnehkwUALbnXqBGJEnPuvPXQOe11RnbpEFVmeARg+1O4v2CWJ+01AZACx52BJPvNy/+A7DaD5J1vwPuCUjK7xON8oMWCxMu+2i2/rDmQ39bI+dmmODf8VnisOUr5V4e0x5AvWYt+tj+7oJZvno8IeHLLLT1HGzfiaBGDPoAeCFj6skgBOT5YsCffjfX881EiUyn3v05aPkiFwVPRezsx2Oc63GmrU59vC1oPsTfW8VVK4/KSW8p2Xu+gPkOkcYAgYu72wKMQslSO9998JquWHASHj5A9W8ikaFZKNyUgYiAYOSjFh/+MM8xGMFP8a2L+uS+jCiTPY+0kvpTvlyuRYCdZ0td1xLphGNpaJEY7sgvYo9aBI56ZPJtKDl5hsR5dyWFoOQWZ8ttbDQ+FCsb+uTdw6Sl/8nrI/5ybTNIKgBUbCIKspHQ+lSqJK0w2GrQLdAxqlqRZpfOz9+22elGq5Gan4M8Xz9N6hD7G0RkDkLWE2ZEQFEiTAAd20UzwaJX/+i2Ev+bV3nK53VtRR1sraw6HR5hjfZHGz69YIkso6tvlW4376pY92rM54MY/cGYPCiTlgN1ZFVkSLoBptwSgvmqY1WWXsFRLYJCpGaeVdqzF44cINWCthVIeuEKQ+Q0/6y+boXakEaWhWPmZPidsnI7g/80FjA7Vzd40qHD643yaSxKhDvp9t4WwL16wLUU89NmuzxMLBsTZ08yhQEbrMH4e/QG8LOa5rUSTsjfaHIkxrk/1y6yxNZRWSfi3rQAe58lKMu/+inBUPt/B45a7sw+1AVUiMGzPBVp5DGc0lieWiLFHX/SvDmP5NfPpYqUmw00yM2Y1TkrouoQyXhOlZZlg+FPGxpm5OKi92btZvcUfM/Mu0TohFX2SPzLpUdW2Eqv5SFwRtapALeflegTYOictMYRLcvNSrNi4T+L3r3TirWIR+llgsx07LFss06pX1zv5YtFLI5dtlgXmkIZFNmXYxA88PNIGnzYp6qZlQO459ZZw/VrouBefVkQBlsPWDOVl9v8hOspNXrzcJezo0DKmZpx1Xio/oG5Tbul8qnahzQ8DhsPrrEMzr9XfBAhvlzj5GrBD3wK+OBvsJ33dR2dgkDlbb9b0cgdzAXZ/94NxBAue4BqySd5ljyq6sNu5qIVl6E0ZeK0mqPAkU5tTrN3auMLSTUL7kwRurxd5yEBbeBKrYwbffVDagxoctMl2p/wxYjHq6OU8MFfNRwGlfPMPiM9U9TtDNpmUrqAowGzESlIwtbab2W+1tfFSPleqymvDfdfI+fEM52UQQGIJx+d8Hj0pbTAQgw4WznDbtSeYrewYYW16MFgsTVslVzZokTLlQmjztfxUZ7ox97B/63l5cxWWCJIN/Dk8shGzjSs+o/E4mqZPHYsNvVeOXD3iRDnOFBRr9f+8953kyALKbBE+EXAt7hLvMGDHhqNooUwoUObyvOQoaIBJOkegquq0WMU/v+o7ZY84y+UeWaIC92INN99J5dKcydfACr2pRko4BPrQQ48kN3g9TS+H9qyvaoP663CWBZZVG55wFgIvRMnd2WI7fvdhm5rdegc52zt1/si7e2M9T+sCkGQcAbAn+6hWzGCAmVZPHy7cEKzNG0nGjd6uVXEtxu536YZt+13BbQ+Uxsf52PlycmMXc04ijAQY0eM+cEk61iFQWxgYc9Au6ppnlfuomKgDR9ZNZNY/SSMVnaLCoPqIvPdwUQvummupO4XQYLOCnsjv1v/AKwXcFF4VcquBUylo40devXaERnzzZfwRvXIjs2CBkZpenc7XtDQGojdg=';
  const _INTEGRITY_HASH = 'e847802538e9bb6d291f9ec1a7905f55187b9d513a66099ed02edfdd57fee68a';
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
