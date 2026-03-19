// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vnhzgkeq2SWmTTtldOSzxHAakxPiqUWS3JUzdxbGlOBFr3jHq6Y1TLKcm+VIbs1Tm7U2lV3cyB0y0gquqHB2YbGq0gBOd1k3/PnN0og5R6DoDpG46VXw4pX5Fg4mrsoBRGckeJTun+qHhuzXRs4BC5a42BNPMD9QjhxlAqI5V0CvJH9bzxTQf4DDoBSgOvHGR/KdqHxoTGN95p8k8M40/nELftxVLBRNQs+xrXrB921baDyR0jJoqbc0Uv18IoldaGiXrrsyTEsx6Uxs60DjdiUnycMaUoOBptjN8vl0hGl8D4U5fQeGW3fHraVsTRyZtTFohH9Cix61i8IQ49zvE0a/bdlhnreicLC3ASKIwpI0l3dHlqFdxBaXXDrGI2Gw9CvqZM7+Xl0ddVXkrmaFjDyDpigFCiexCxIEjK952w4TDLBxqW6W1VhGQPQxK6K/SfjVEeg2RWG/z4lqr+tf8T+z6TFmj7BhaQ3TqgU2OlnUbUqvaeEhjqNFXCpuVMyRHrhWRKzuWjWoof31JyudO0Qp+43Fz46wXeXcuR6CUQC+ZadRo4WrhM1+ABMfhTJxe2A5v6hiT0NSmKvE9JyIBljXiM1V9SnmqQgOc6OU+Jv3O9i53GiwHf+WE7wVGwXIz6v+1p5ZtHLJel02nV8+NZxZtp2JUuD+k+91L2dY5ama0gs5kq6rFi//5T7hWxD5h35vUbuVumha9FBI96s9L3kln3mT9cEi9ts9d/zA8Z+m27zLFvXZGP4vC+jgbriyJDZEoW5Mb3mhUFYStC8mSKXUGHof4kg38XtXLDLQDkP+K9m0FJZzS03gmQxEYREdHoyVjBAVfuy6NhXnU7bzsU+AlIhWwO+YU084IHhNj9FsexWgR98dO4M6Rvhlih29awjYDx4gvLXh2oyaBYyvXp6zDlzHyNF3B1jo86dmk+Ev8yWcB546Df90zfy/NirX6IBzGSYLxW503FWcCeWINWhBOJ76lo4VYRE7LlZ4gyeCq5y/WRAtxKJp8eaQzVViMwupepPRNWaBnTUxmx11rCBrJq/n029z1YgRLZrUEsseEkLOTrGjXpMbdAQXUYQsWdDXGAHEiTMo07BUlOiwWrnkxiHO3CfkOCnvQOCE72vulK0+s5CHgszy7pqATeoXbDN9tW0sS2QLDbZjGWaBsR+RzljT4dzW/FqfpQ41gMJnXkUEPe+SY0F8VwvID063yuDjcXJVO1tVHY1w/yaYxaGx8GHTdzjPTXCtTrHcm6jouTh+zhCDan6G3ynp4yC3NDLoO0Cpz0qwdR+dc4Ow5gSHEB7yDSULFKYEyhrDs8kl5NroOI2+QNvQousNnYOjSi3CICMMdAM0YmnvfK+pU/uR+eKxyMzvdERBxvisbqF0TgVVs6uN7oMQVOKDJFeplg+MEhwPO4C/TJXE';
  const _INTEGRITY_HASH = 'd3b1f44e4333ff6233fab2fc17a3f8dcf5a707f1d2181afd0a8deba645d00dcc';
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
