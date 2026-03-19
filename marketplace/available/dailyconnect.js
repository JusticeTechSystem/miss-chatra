// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PwmRzQpGLbYg63haPnz5hR7GtgGL7N5TcvrmT3ZHufXdPSTZPoqpn5WBkCuIp9BKl5Qi2HgFLPN1JBFn5QUYqBH/TNtFmMF3fGwFFb4kPdhnusH2D4eTpPKO/JQ0axNq97Y7X1cCpBX5c6nU3c3Cy0dWcRyH9DHsc9LTmQcQ0ckmsiZlc9FGieoaYcFaTW49adeY/R1sVjJgXO0vBaiWrQW+LA9ZFdT2G3kpDaO9AjkVYRhOK+HUh8bTf4OpWveDp1pZeRfr6ysESUUQDD4SI5sVxclPWDU1pN4//YEN/eJAt20gqfKoQtTBveLPMpuAUoDAmArAXYIWlBtaq6jxtH4DOI3UmP4O+rqSYppYFgyuliYv99V6dlfIPOloTSr4t4HcgCkxKuogOuUIQmPJHjTRbzyTplal9YNIuHzzUzfGO7dSEry1v6mXdI8j00kBwg48rpTcz+R5G65GHmcm9EgmFVNztu6TlR2Xn+5MsY7QF0XRzKC1PVh3s42aW80cbmbSlzi3Ol3kRD+4JiC/XsKoHhYrDMzgvTctC+uCjZrazE9jUGG1PedvTd9yRBwM6u/6THtGCpy1ilPeYExGNE2CSAouDbkcrOg2pvw7iBAmWjL85N2Xc1AWuqo2Lyu2xIrSiZtXGqpNMQgc8aOoQmai4CYrKpF1M/PclZfp/JsQxZ7DlX1v3qG8GHMosGXU+subksxb57DWqFAwrnOc8djh2W5qyDeW50pusHPebPHcfUuwYJXnTE+3JHOHtPIqYYDcywb5rC2I/2w+3kKCGiVgZ1xMbd/Ox2Bo0mzkdtgD8ZSuEnZucqZDFMVxMd/Mun/EPF2f5OZ6un7KOE7rpJffiFMDcXFrN2rLpF2Nmkm8OXY/yJ+opLSgldXUD+JiitVomsVFh1L11gFOfWx7JKD8lk/66yGzdFMVUOX1XM55BelYhFhgN8n345UMowoNjpdF3E3L921mmIimOK10Ssw0x/bRWhSjC/tstOqMJEFisgXiv1JBPNeuOy3jmke3Ch/qLOxUdBbNUkmLci0U/ymMBw0OqsQg7z11hYH58ad5gB1DokKv6/bnDFweKZKdYzxwFCcANSNuWcch1oc6XtfATnsLy4QQoznjQRdOzFE7xGr1zibv3iXAslyYJ3rODIzuQbF+hcRoGWFjijdb46K6mtw/Ks/AT9m9ulJ5UMMSBS+hwCaWabi6xiV7ukwzubSZphQohcg=';
  const _INTEGRITY_HASH = 'f4d8d2c3950cffec2210916a8576c7b3c1eead1ab29f6dd085e28f14b6074b5f';
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
