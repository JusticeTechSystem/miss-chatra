// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Nsr8pdWtW5Waw/dZclpKJE6TyvejsYSSTDYQUtkHs72ae16chzo94Qu9+UoncKo5Q0PT1FTEO9qVtvBJ2M93IlRLL5tr3/z/w9J3qeJ7KtD3e2UNWRVDezM3zPqbCJY/V2EbL/gudQG/aMNI5l05nkdhQMnOOyphqPEde+TXhno4Beqt69Cv2lVSYqiTLvex9XaMHFeeHfehU2XFyWamRkNETrXVs+TeB7sDNWCBy+NGeYTJtb0VH/qyK4ZxAgsbp4hcEY9XX4D7qZrJpgbM51apRIhf6JYoEp4PK/MPu+daqQn99R57Akf+2WDlcN4wXTnMZDqs0K33mlkBE7oTvcy3PC0e87X8D/g+gubTUGjplr9Kxs+8LXGo+N0ge3ePfQ6RdU2zymYNMeKyVVcbNVVvIwobEuwy5SwsB8eW16BITE1aLGaH5R01vybMa3cPhBlACNvaZ1kr7OK3y5f5Ig4UeLVBRFhqLDnRN000sAvIQwkw8G6xCdqFhf0tkUZOAMOz/olqd9z1L8VVu6oBj0QBCjEF3BhOZ1WJH4JhCbRjVB4FbqYmF57dADFSdEj7kiCHuOcxLMBzXqzaaN5X+C2NWzFJ/pRDM5hZRz0uR4x+kJhIXRWfgC3/yiwvh8lBKjQdXMcGReud7D+D497KZ4XIVD/IDe8KaWyTQgl2jHSO5gN1qfjYq5XH+wRytwmUYatok18ebLUpdjnVDyyPCS6907DJuYi+FJspkMujXJyjWmJW+ZhjFEiEljEyhA3PtFAHrcS8penOJ10IqcWR+wH0iAyBDkJhFeFI4zf2NV+PPgy7BkYh83Q4riJ+irsfVjotxQyYXKvpziDCRmHDSqQ957ub5erSy+vh/HhR/DSiPfiMsB4PGQeguL3A29oourWsbCsAZ3D+Zgz7ba+WilcsLvFFIYY+UJxlUUguczVYnBDcnoCMuW24eCgLHtp4BEsCN57bsy0D2/dZBxSNZRFRNF71cSnpz+aWGt20INBYfACQ9MA1Fe6o+CNl7rfuBvV1EBGylaSOeLmsqWNQps9v8dnM2MZro1MMZMxBjcz7gHkok+gXAoAa3jiNw7UTLAYQl7HJliSwRGt3a25K8XmVpYZIPAub2jyBYPwmMbal/soO5rrk9e7TY9SAkOuhk3RTMFj/3uKns0PTJbTTYCTHBghVe7iN873rNWEEhNTrE7+AzWPMaJrDcPXiEJPqcRRrDAVE3/ABq4+7nhwof/gfebPkZrWjkMT40x1pzRddIV8HSFdtDIAWvsZu/4Fdl9Y0NxtGLAQvDTsK0Y7+IqzDsK7Py/f4MDemXkHRl5nZ71umAXTnE/9dfp5ZzGyZjbqu+AsKzHXa7BnaRFfXiDc1QSbM2ArRKw30PMYIw6iJFKdSscAm9w==';
  const _INTEGRITY_HASH = '2357fc472b6b2b58de18190f26391e0292131cec62042920bd903fec61d70278';
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
