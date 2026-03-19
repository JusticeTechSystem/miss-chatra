// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3GxoBVBJToXXuxHzrMBlaMbsU1M9Nxp3MDZi+Fdi81HLvmpSigKc4fu9ffYjTuC8L99+YnQO3oUkLa0GQ/XqnLwh1t6/DrpP4OCKQnjHCEqEltovgPI1kRwRm7DX0yovPdXRb82kO7IRiuzcfNM8ICtQ2sl6fLk87yaDL/dv5gPPBEtDJ8qODdePBB4vcngGEZkgq8w+8SWQge+DE7LVz2n2ekBPUZbTEYzWLOMcbqgAHga976P1MqxDK4OphxKVYp46SwNw45nIFELlwfNhgBbk6vY+6KJV4Rr+ZQVSz+6Un4P+i0L7BXsvphi8o2Cn/GsmdX1VbKCIo/glVrCvmXJkG6xjGIa5S4bF/KF01zSKLftu10oEMPVzkyNn/xe538KDP2hDaS9adQd9XRrWmIPWThLsW6oKtU3NAC+ygUSCR9B8eNrasIQYS4C+RR1iqyMqgWSrK53vxXkr1ZJi1J2CkRoW623x2Inj5N/PafBKSzhyf5CH5d14DnSt38Jny28MyH4uoXXgwOhP4NomUZy7H+VK5yPvnT8gGoXFSLoiFzcY0+te2me8X8aTKKn9PmqU+byj0fHLxaquNvkjheq/yQRFToU5ZDB86wwYKvEmtCp2MfN8pleA2/A0ccCCOols4x9FhZFgrLfRFe4OOKt2PgLEneudninaWt8l1CuHM1Bq5hiTOtA213SRtO71gAG8TmyI5Je3triUuNOoKZGtNjR5loOedAVePcRjJSJZ49cusVPD3ZWZ9v3HkYbm3kHG2JQKqFv1FBWsK/TEN1BJCPcCKXYeeC8MXgQiZ4IQdmIJoM+xWhOG+DTI17HNw+WDP6fYYHWXg5d322VpPfolT/WPaXwKoVYW/NX5Gtd/b/S3H/71Ppn0DmOdzpJWmFB7TrYEt3UafAHn6URSgqCyIviG21DIsT0L0/lbuIyW9J4Q7KV3bRr8/Eeudn6FNUXtQlE6DxHCIxiMMu3ipY7MSqfXEvHC+qRf9qSw1pPctO1knthv5dc8dheQPLNw/DlKX+N51EhKcLjeMtxJ/stjkWFgt9QRAankocYpEe5y2qnW12e/D/yRbU+2/4dRRMfmbSIHJxwYSj6daxNIC52jBIITuWV/o9QbQTuKVfqTupCCO9o5KKKmOGuh4P+otjZcuiIrlH+cO+pHA1WeRlO76wfMzswhaWcwjgnoLffNGvvOhfRjlqhFqgGDsDs7VFq76vPp';
  const _INTEGRITY_HASH = '13eeb8470a0d9bdf5f7df3de0a5ec55141a5c004a73819fa7a65ef0df19b4b91';
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
