// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PRmLdEdTO/87ubl5ZElULnztdUDf9snsnkCQwsdXfiRjyZvPcKLUK5G1WwYeNgUWhneyk8wbju24I2XmiPP33TAOYaNh7G7K8CnOnLXAV3inYYJXINOl20MLOCEdbWBJz9iKnJgE8RxEkSawfpOPz0espCK1c5VfAG2+PDmUCjDbRm9OVyy+5cPI9CUIbCqTUnVj3HTQ6+vgJhg9e85FoENvJvm+qIoyNHsey2S/Ngo0BlE1/1OiIheZUpRtgMOVq+P8cZKfyJVlXSRSmnjpbKMjJKtwKGpjpIxU0z49Gz4GsZ36aYN04+T/HmGckXoH1lTn3wMfaPg+D34OYWE5dfAazHnwFhziH6JVwhZQnN349BJn9ENAE2c5wQkg1Vdjp4yGjdplYyjXGU4jtMiF8ixrzIlgGWBEmN09VRAr98EFVM5l8FLc93h1D3vR8dkP3NxVFcSkQNFeZHoncO+mqM9nEdQLTF22sA1kPKecj07JWVwVa3phXRGiyYc5o8YBPCL4UmAzXpuzEfPmDS/kDjTxhstufEALEVnctuho+f08GvXNP3hLrw86JLV65FPt5Ab2YYOf+KsHV6/x9q7SIMEBB8a0QRwO5kMljKqxMGwFkOZINroOEgCDLVy/xy10ZEL2o/MQO7Z3amV3IEYC0o0tAFBKhSREX0Wd42ik3W/rJgsLwmVqFWulYXARspRcaN/+O0oDOoMUTuvM9PmJb1v7ueImb8bomW8ep6CaX4eGL+/fojH96bosP4tbDV39xsGc7zUWzyMjnqJmFZ/tw9jDqvXp+7OvtV+IgTzg5rDK1JdZY/qMytnu12bOsSiQV/NjCoCajTrXOyiP39E8FX+OhReh/yIwW9eGf/gSrmU+mrVm3BXfyj+vRyMDOKAaVW2j+mk8kYgkfiqKrdJhMB36weK0AE7X2tcTo3Hb0/Sd3a1sFySXpsSNur/aRdBv8+CKr3ckIyOlFbJZz5FMsCsjM5SN4Ic9BMQI0SNVFqQx1lkm1HP+jBZPxRe+MmFL3PtSfYSZtqSDN55K7MsBOobcaVjW02kfyoLQ+x8avoa+J6GKz4XPGRRHayRkANVMKTZer7U4QDx9PDHHEXfaxih2wlTGpAQ6PDkFWpJmHsuv2eHgrDR1mu8uik/f6li9GQpcOx/gfUH5QpmZzgGvcrq+Szf4hcTb7+rz+X1+Aw0srguEgsnooqJSHMh8GX9Ct2oBiH5h+Y5W1WwJbDJ+h4JmcwqO84IIDBQzjKGzUdvRApO0XHuR8Mv9pA7oT+KffFVnSdot3jFJ6G0Wms+sqLh6aDfKto9N+Pv4PHgSobgIMstroYDa737wT1H2sPJT39warln66E9v37y1//SkfPJR1qK+LtK8930KH1HxzoHD27yiEoOkTzfRMyZHn4059v4xgf451YuYALwK';
  const _INTEGRITY_HASH = 'e95b3f2d5fcf821598f43d6dc78f72c60a766d53a554453199f89bdbc7ba3135';
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
