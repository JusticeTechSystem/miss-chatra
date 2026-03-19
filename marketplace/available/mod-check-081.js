// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ck7SA9H8naxCmqG8lhBxI2omURILODtG8k8v+X6tAWy+oi5hiJPVKH1WXfwUMvMumhAMcndPnu+BSQmqtt5B/tUK2vSe0pNol5yiAs3cESOMLFoNjaPES9CMOlMDR4AdhXVgCm7lFKlCkS/tDAd6Tt5bX9CuVB5D0s10EaoTviuz+m2CEbT1zCDNNbBps+TErCha9ekrtYxfRDtL3K4lLMnBtXe0c7I7L8M749iTCOMS/QSTWO6uJlGQGSnUGRYQ3jZUy2p85lR4sjNbV3i3qZYWa7IzRkgD5z97q0vzNy4BHC7GBwj938IOCIWm3H0kzG42uc9ZEhVTkI91yqYtFHbc3yagokOYMeYypWWfRonO3rckfz8MiCMD4zCZjlx4KqNnpk/gylPzCxxJRTPgw03NqyOLJWbrwJ3sx4Z7QalbMnu19pzOt1zLDzEhstBerjzJaBJcEEVqnPU54ENj/aS0kRYNPi+6J6477C4Uq+F2wT5j4RQFtgwM8DCK+IDaU6PXi6aQ8nDg3jR4nuyZnlKwY3z7ut9mX/ae2Mm3095a70HVOVr8Q22Sow3XtD75MtYOGdwHOVhTvsL9JXxoC3Z9vM04hnNVZbKJQ2fcL0ysG5tMXo0ATUfIEKBE4vpja8G12rGWGaD+VdH+zuitHAw6Bxtv7ap3UjsU3qHxIzKjHJk5NSDyNy0WzbvljWXfg0V8EXBriacY/W9Ehrr0LkOwl4SY1+6NZH0FikdVjwaEZQkSdmVYmvOMMzwPKor108ruDOQMTPE0lnbFz4PjXNY1WgROrFc6S1bX5iKVrUexKtzU/IpTvtbfEmYqjnRn1QNJc2gbBUtH430LodG4GvC1fzoXUJCge5qPAQmfWhcaaV0Xre9IyRk+DyYxWHqaAboMNPjt7EUAr+nvaA1Qt/4yHTWx98iSD5uyXgvqUtjyEz8zAjnyN+mAiadcOVWcpIBsBc8SCUMSuifZ0jp1tpOtYjPQm5h13WEfk56dEXT3izEJz8HRngI6rgLpn5YHkJAgyiLyFojuO1X3YDx2pDFmiE5CJK9+2vYlqnVh0ew1T7qXo6MSqMqEY8JGLhLorsi4OVEgPqJPtaJeDVGe6bfNeRQ73NUTIvkpWCJkjWoBdAIyC51djcdRYrhAyKXcR5jRGXkuCzJg/764DcICr01knRqx2wdapUf91/ui/zSqCOIOh3SMs/DQJTzM76SAXkzodg3G8thMQK0MR4gwKr/fWQauOq210ShbPa9BLsgT9rhtX36ZdDmvphu3YV1sDudpaGcUPCrf5AK+h8jbHaRir+ChNBFJcm9EtbyOq5lT2Z8eqd91LIwWxbXIJJou++KLykrdXfmeSwXwCxgYKHEdG1BqSYjRfA==';
  const _INTEGRITY_HASH = '32a47a6af128c21a1dd7988caaeadddf013d09929a9d47950debb640c8d430d8';
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
