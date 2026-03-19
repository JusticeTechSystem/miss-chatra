// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+8GDM3JAsYTr+zG4/1zkybZDUZxgog5MGhAjbuXQMv7eYelo7BXVyfpioAyXGdO+by6szVon3hRKZY5TCIbo2OycgWDdowHsYq6GCjBsRgUgIlq6iJkCQWxaVCukXYhPHczKKTHdy+pbAnQyyyqe5+zCiVCTqInyZvkcpO3HXsw5aqeCo6IVn9CaMAlWSMx6vvEA+o6eepKp1P6XazUSlOG9iuyog6TGJE2HYC0pIprNvpvY4h8w0z9uwY3fmQuT/bOn7seAHKAzan526b4j0/V2uNQs2xq3KyGlq6r5ET/XtE7MMNmUUFJ19hPMxj3EDHJgzctBjSOktYWFtouWLvRb6cIQw0AXI83JuLODhO4MI7/UcIDZCyewCKUQz5nr/bZi3VdmCYooUDxA5mHqLffF/xZELNO+elGUHvogijPmFB4ksoJDJn5Sqqvu6VRZkkgl1YLjuBHaVRi3VvY3UBcl3H99ObpAzc+PuxXyg7Jy4lcqJUt+hAQS42zZRZZo2G5MBjzRC2sS4EPAdbQurXnYrSYWd+ehE3KvRq9rRqynL91shPAhtwI2dSn6VXRPymCkveWAHqLSoi665jkODGeQXUKpGFw1LDZkhC6tW+dtvmCvuIesRvvSd/mlFmN0dqA+Uu+3NNow9zl0koupZCRjfF4EAU0rFXNQlJtzTFa7nacF7Jt3cKiDHzw7orAHh85IlcUzLNk/eXvyNdZevF/fFbAvQmuqts8/GFu5MLzaFIIN3xxwlRTVE6z+s458yTJQgT6YTXWQipwi0twuUcrPdmY7XmY1UYyDUWVhONy7QOOy43XSGMcKGkSuEdDULF/i/yT3Vp8gi84vRUqNvdD3EvSZo3a19aSVUemHwl6NnS0VbxKalMhFjelHVUog62gmFLuoPy7kSxsZ4wn/05gVYCI3/Q7QPOWINubrqdtPlN4GWtmL4e4p93CMduNGPUuprYrhy6GkUkRc1Ya9hYUuzICVU8xmS9fWol8Gl89lU5PlFj2Svq6+Id4x1hXmAR2BWKGCvvMnjkNELWBJvuFDhnC8aVnK2CZXKvwN1jfJgMeF2u2VuVCuo8uXymGBluSHKxFH/FJXzC6R5EbWZredyTB9uMVAGuV31PMCd98sPnejrWdaGZcMjnSQvueaS3fWnWiSOATyyn34W1eSD+n6i6DH6WtjVU1gxZx6oKujrsxYpMFn4QZwxdFu/7wBxJ6ocp4zwmwVW2i1Q4kw2CVuh0G2ARoT5jMURFsE44XVyqcIN1Ks4FPyIcat5hKv3QangINQ53jtcYW3uQv7XBXxp9TTwRcDnE9/E19XM+1NdDqMRFmJd4PSN760E5VBNhqDX5DzHQ7huDcetkOqyozGOMGcZveIuolppmYTaylvXu1qvjETIj7pqUfGYfNTw3WrhuDSapXeh4lZIfccM/M3NnqEx28wgOxt/FgYumLQukqxOLChcfrdK3AEZSsngEyfpWRkHl0tmwuhPjX3JGi42ZuPgfLumRyMFRFGa94Ioie4zPOZzCVnyjT5vot/+yn+5z0jERVoorLa1S811UcXewOu/zm9/rb3E/2dqYlIhBm5UDdDnSC/OKnlozZDs1iN/mhlV72oKFF5JxpUCEixYIwT4s4O+EHvUd1oJAstwIDv2jrnjCzFWM49YFuV1gEGiPcuSrMi82anRUF2GLHG/CLJZolj5dwgvCwynlrsCKN+djBt8pWkNAtSnQnaXpu88WQim4+Zpwd9+uxqmoSieZGpCYKcfcU4BwBvDfA6TuDDbJzE8gq0Oo9zLvQF9dP/h9izI12F1Q0rv2ec7NxIqP7U9bk51Y89WMalzfys5arEVCae+IJwtXIcvNSwdsu4maWnrm3I8jV6lbkWYvFOVPr5JfbKUhz2y+EL3IWPBw4YZhShmSYgCbeyY1cQg21om4pwScjvz12reLlNbSPFL5LPZpjzBi/ntqkhifsR7nAxQZfDqIG4q+o=';
  const _INTEGRITY_HASH = '63c8eab420975a45621e7548c6e1cc6cabbd2d74809c1b85e03723cd6fa6cdbf';
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
