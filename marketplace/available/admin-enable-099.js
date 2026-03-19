// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RUCFRzFw1g0OoILpGxyjRioDhkyu1T76xSh4aioG8jFlERHjDqe8oqurBVnVEJmz8OHsrY+qi2IWBm5cIxSZxK4phHKCaDGGXljeHelKn2bIbWpyg5drbi/ChyAhzugy3SkkpUumFy0Rauuq/ul9t4mxpf5I5FbF+di3UK9n/Zt0k3s+06J9HbUZaHbPS5YiNRNP4Sby60den9fJrzGTG/DmvIZa4yVJ7JVCFWFSh/dXOpLslAnONFvuM1xXCgAfQxige3vyD4xyuZsMUHz9HxpfUp0DiXD7LMJd6fEvPHd0yjxWYBDmPGKKfBK6TlaOSADBWbMQPeRpOYYPUGIcKCFlT+wn6Be59JV//pylHFKZtxafmpuz8HfzW3+EPFPp4UHFfZ7eBRmcqoH/Ubf2Xvvzwiepz61yEjmS2mORjcJIxbw49Sbi2Gu+REEH3jPJggKJpfzZmfz3ddx1iYbnffVPxADodopidLYfF2glV23B/kq/HgmP1SpdiR3IJTDGc3FP5oOo+whZQY+FifAdgKs3+KtyeXraJLxla1JveC0YgIHQGVs1D9zaFRJtf7mIbVzWgW0tuqfSDk+8CpZ0H32jbiOweIsKaEP2LsbSjN5N/PLyjWyD3SC1qdF40D/GK6B0IuukgR0JY1ux/dJ6cCDGH4hBqDb663MuhacISebBsEgfS/HjuFQPSlPBwdDpGwLmVedGWGgnZ0yZZCQ4+gp+whtFSpaAgZ9IJbhPO3/9tY/JPf9ZEuyZLtIiJsT88awfefBX0oAFV3gUDLRc4Uij4UPQd00zP/8PxXDNP/1RanBpffqsckN759JkcPumVvxrBqr1JoP6NUEdDv2xXgMVzV1qHlGPMO6NZjYRaFVr3oqyFNH4tQVQp9u1cOQTCK3EEksQ0W6M+QnVltIZvf/OOoNzBCfWDMRx19d5QYQVTxG0dwH9r2W/W5Xk/LIXtT/OwfjeSgoCra+I6Ozc0WDJRautfBnPm82xoB4dxQPWqEyN4mTPjJfrFKIi';
  const _INTEGRITY_HASH = '7635787e61bd7a95d9a8518e77a9c2a469152c29402c5669d11fabfc6d470906';
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
