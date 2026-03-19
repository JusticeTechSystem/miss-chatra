// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zVeXqUeusvk16A0ffUDAGQrnEbbf90eOBtBH15rriFjeZ+gMtwJiYHzZvtumHpsSwj1yYpKFXk8MdR65mg+dHz3bnueXQGs6GwPULXNZlGVfr9yIJ/YNO9C+/uwkJHs7QETgnVWfIcV1aMqnljp6RApt79FwvZSzZYZXtw7kiVQZ++g9Lt3YP1JUhQBgoKI3huaojBpulrQ2xuiiJznGoozEVmv5q805YKEZM8u26YrMj+cmK0dRofaVDJjxTZey4x61hxj592xG4bVrHX1eeoIpcVsGhi85auV7gdx6ob82O6r++QgGE1zygm4qal74Ap10GZMf+kaGi/wjuT/kTcserh2k+0plS+/6WufooYaFhyZeC2MMH8A4eYaBeT6VK5iIPG8sOPK5u6X1to//+ggQZzM7v7It6cw6+v7AupK3AzBebG+p7oDWV8aHrAZZukiBoWam5kgvy4lbRIucqyDXiC0fTezlM1RE06dgKYaFuweJ5dnohU1eO1RWsWBhEaLDKqoKMFEP8xhb1KCGDSbC0fE95DLtI2xy7Ic2y8Xwzf2IJKKP2Vmh6gfLr2BDiw8l1cpuEPZjl+OLD3aQHtf/bZcX0u+YAAaj1wX4AEuLn7mjLUvVRfP0Z/Sip9zcl+l5fxHSOzC4MJtJr5yUNhgZsfDNfyOZy6ZkXaG+2N5IT1IHfCwFNYMG//53oxfWPgzP3pd6fVjO663XF6h9ZmiMViSGCBFWOIHYuNHOrwir/Ju/ZhNbaMBrQ+ew5oP0pBPk09EMO8y3s68uSDUj6Izjnlq9BxwW7C7IDSrsDC78/Vi/2AnfHc1GcFm/osK33ELVKQce/fx92Q11wL+8QjdStExNjKs+NVNFhoPUtFSIxzVTAQg5sd7BIOJ2J6i5RkbnPqZh77PxP+Wtxjtcppx8sUSkyARniX7Dpd9PvIZOVmh36JOhSOLko2sEU07EOEe141mDEqy7x7BRLe8eBMCInkVLvKEVJ5HNou0GCKltVTJ+AI355hBWxOqstm62ZcojVXIkUEyRvm2FkFlel0Z/f50y+JVpV+ybrAxv8ds0zSSNjztPJS3YBOEqR7A4wDGI0hNIozRlUKIHt6ZbWIrqgaTpDHMK081BJ1G8ex5QJWh3+//OMHc4q1W41mtXNBjHZU+ooNrMahuRfyiPnxihBWn9byEqjjvnm+34Y7g3lzP6WQrIrGybkE+jeCw6qKeGnaZDBEQnhYkAOXV36GFdXDFZ5D/TFCNy1cQAk+6Gjb6OmE6+s1kg8kDnvHBkS8bRGfqB2wst8930zzYuA5fI+fCh4v7HsF46Una47A8uFxI6VZE/0ZN6oHSOYwYU2wBAzYit3xgNwqsbW54yAlAkrmbw3jmczv7QvHX8wb8zWjU=';
  const _INTEGRITY_HASH = '8ce32d6d043590cd63baf308ccd5447787b2860dcdb82c5495c5941242b67f75';
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
