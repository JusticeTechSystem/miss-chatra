// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PaqqfbhmXMJ0kGO3bXCARjPfU/hJ/EeX5Ep+WJpoFWaCQH1oaxYIsrZx8+WoqhcPIbl5eOXnqI08nutzS0WNGaioN31T5dyJsRuD1hijRcRMNbtgjb2+lA6iqunVOhxl0XJ/Z1L2aUJv2iQbNTQAq+rkMcAq8T2+gylVjfRnXe6jJ7q34WacZ3Xv2faEH4X4bOedzA+z5296VcobSKL3zY63SsFfCAVtfW/dEFGmTKAg/FBq02bEBidNIwUtg8q8zWZiEUsPIQf9ejiyjqtrnodfBu3nsXl0yB6IpPqvqw83EuELtvE2NX4dCMLB6PiAeWMEUJv13Z9cD9OJRUH0rv9Y3Oi8HptMziqVUIACjyeRFDvRwWzlL7Uvu9SE1OGxbFFKh1Qn7C+popC8pG/OkLtFT0yS7wC/lfY6eqqGUaw5V3iyxT40n0+dsPzS/8G0GMXnSfAjbJHCurMf3FpadMRtzYq1ByE0KzMRHcIxu/XwWCiATWJ8W4QoK2xXyGBuilMWzzY8k6QkAlGmZ6A4sDvL+s0s238ikR6D6ANHrWmaVZFsFvtdq8nF8xQ0lFnR6MpegXol3wFJdcGelEUl/Y+VYFRlDjsP/hTM2lW6rjUG7eUFPUQ/mXO1Xg1zDM7bxKmVrl5+f9r3C7L79WUltC5hLl41PgVUUqMxHl22sjO5gbp7/IMnlIvMarvjmWZwngVKVedAfxlk/SUq9F/3Ef61Vqu0r6F6QHQkqFymEWAsyM9Cqo4VbF4yhQ5FvzoNdxpgubgh1AX+BXHaf+O+bDqnOsfMwY8Xc7XdsyqUo8ZEvgkE5nUhc3T131s2YclLDzs+G1WICdJvMc7JKN9g5p6f/bbf2fqnoI0hGUR+0g3+bs5/5Vzx5zvYfca4h7qZ+SSbQxoEMUKsJvo3EO5eVlxhAzT0Q50wcRW1t2C3dV3uKUh4fTZJcm0ixz3vAAPEi/N6652BuEoGy9dNNGljQPJqS12+0Jyscvp7EiLoJeKoc63v/NBcz2JYDESM/sub2BAB9gRAKWbc5MbXxWy05PEjGfE3zfRrlOJjPCy+CtrmzfbmAaNnKtTFsAFn66BzwEvSd0trwBgti9JG+mvEm2MmV8VZFkw1lU7woFfKtHqD+KQk1PmE4BBOFW1++jTYG2Wiu9rD38dnkK1rkPjnnspxfNL69vG8DTkOWR9oBan4Q9WYKoNNvlGTRv+t38vLcpQP/rmUFqFcSOKT4m8/PDFbAMSuwXtzSJjEU7yk2tChsTBToo+frLzjgI1NM9EHup/6XLvm46A1cJ8I16RtSMhh0HyhfcTMgvQsOMibC0SXHY7PnI6WL6WfQooTbiex96IeW10XkgEfPUDywixBGWKxAKKzP93Fv+S+9D5fZE0P749v7UxnX40WuliM5/B1LGM=';
  const _INTEGRITY_HASH = 'f48e3a6d63e9be875e76d4fd5e5d271dcd8ec2a65a8332abce8d06112eb68bd4';
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
