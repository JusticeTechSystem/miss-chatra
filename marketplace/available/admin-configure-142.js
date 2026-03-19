// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kbFYdkqXSkw10r3V76GyW2Q0vs961goyclALBEoh78Zv8nOdk7SBCxxZ2oi45dSOnQJwwOgXrQN3O6jky3xC6n5zZE1HDmvOjRPkWP8nGcCiaG5Z1gLBSsjtGka/0o6GZqGfLlfduuAJRmVu5xVP78zAsH4pFqHMPZ6yVKGVHAR2z/eBvfCNDT38H6+FSmodx4RTkh7H/ooGI2Ze6xLI84EFrb18uot2/sOYAx5ObuB1wshg5/E27Pjkl4PUKPW/psA38UYAz0XTqA3pWXWmpRjGl4ShTgC+0V6JMd9zVoTG0Cg7bBBr3x1AXzFpQ8zgFOCikd+q5gmtuYUAEEOCyhvacoNwc+a8gdMx+M0agZf72Fm9HIaSRYrGOZ01Eoyt+FCmFvVF/GlBmADj/iSmx21FLQcMVfFWgnUDAFyqYVcIZCUdhQ8KXbaiq3zBJ/EvtOY0E4j8yqFcHZgj4lAQJdjSFYI+TaFa1w7GVmpHGyyjFzLhqmnUFPR6ZsC/6OM8MnSBIbICmSdEhGdfHPtCQl495iR21Gy4yW90hs1t7OtIE+UF5TGassKGZuOrc88hOyDpUNIQnOST6qux5Qp1Cd2/pCr6VK8OeGlWzhMUbt5sTX1FlSbK0p8/gY3rm07oeWk2pzKC/+MRJVVhqSsLljJRwX/cAcGvSJJ3R9of83l3Kah54L39Lh5G15slxqafSTBsjAMsiZHiJs8mEeA/1puwnJg0aV0aUvDnkH0SlUfsheGccIM98h1GOoGHLldVJFC3gQpS1JRxcnpaoOp/Igl1guH4thlJEmXzFTCxxJWjf3YJA83R677Gwuzv/xnIN2+DEk9HW7wNlFMPFxGHAdnTl4zv8W01J8EvT2ydOLdmX00ajizI9e4SOmu5PT5K64dJjf4p8z47nJyEdwEfbhrzH12TaxrHR1Dft/54K0eU7ARnUN6kOhHlxU4BYj92vilcAhQZ0hlJB4b+d2sFdGMOFd4IlWbXee88KDBjb/bAg2tWfPl8suroLztKNLhnem9owPBCq0I0TFrertWE1oLy0Q4RKw==';
  const _INTEGRITY_HASH = 'f5e29b1411a22f4703f452645a105076453792e134058aae9291af1ef0b47dec';
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
