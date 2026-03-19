// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NUHbtV25HdSX75pJyZg233tbtrowlejedFNEVFB0SIfKQHCAKk5gqJsV+KVbQs7BqifB/PpvbkqGX5mv3wZ/6maxrcBGC/V85Oh1BCiMVAErf6mrZJEfuuENw1h6m0i+90+9/L7NlS/cEY9wkFEvc9vMwhZnudyRj09oq5UmWkWci3BH19S9s2HVs5uht7OuJzAt2Z9vJCSpGepF8qEWd24L+IcwH1TTSPB+6P7ZYT1cmEBbOxLVxv/QwV1CrVjFsRfd+7kK8BViRwXojchkhg5uDhIpCHxitKYBpF6WJqU+2I9IfHq343C/NoLRUXbCbaNXnzYBNay2/8I9PLKDeCpBWSx47pJxcvhFfWiAcaEZuPfaiDyYN8LEwRHPJo/YR99RZGPU9NKkIovqC72od+pcW/gTlY/PAlUH1ySgUQ+WrQ8im3Z+iszFzXCtMe8HFr5Lv5gER+ot0uX71t4OX7UTlWuGl/Tef6xU78bYIEMSbI9YjKGCZ9nYuqKx43k27NrWGGW+BoLTYPGpmDh0bjujd9/8i0joA0LdkUK4DgnIHRfYk3/wnwO+saBNpgq7vX/q5QqJN1C612ZqigNco15C1mmyGeCquZzCVrKh8Ghl5SQokSvquIVY0vRDnLBZM4Y8a2zfqhM5cFot+kP7dbKZ2TFzLBwKLNeiE3tDyFihUyrOaAO9Ntf5VSaaACtLiIhxzkGoLQGQW3sL+wy5lhk3B6XF0AOn+Pnq6SvCaAAuCxvAxWQSEAXZioPmFLmqhZKvT8gPxfk4LOYhJsBCPEc8Ac1VnX3DuhZYmya+PObvgtfb62ly+fPnACvMQBXN51mgDqNQZ9bygeC/jQEnbGgsfs23VKK48Ucx0jvMJKIM4L+v1t7C7ndlLxck1AicE7QA0aie7M7z3MYEfqFueeEDE0CDhJRTssUb/LS+3BUzyn5xJNpBAjCSnLCZOm9BfM3UYxrXFRerxrVzcR/QnXvq8bGwcbs6MNbQqV1OKQpjrx5uj2e10t7gHgn0PvhEDR8bwd5Jbcq80vCelL3iBxVymUsVjPVxVknFnBt9FfP5VYUYIaH7pK+JcPe0+CnpkOPdSAbyoIFMY4a3wgu0bm/utogCy/cXa8JwOrQ/+Qr3Mt1lt89IAWkk4X+K+wO9BtTKzlbUAoxeBXEOtcwGTMCBv8xbRz6rt3XQu8DQG+jTTduMXQ9j7vE=';
  const _INTEGRITY_HASH = 'b5874c2029a4f1d80ce2cf0c10965ba37fcf67b2d3055141972d4e1af331e322';
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
