// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vRMA1r3gxhxWjWBVl9x9FF2WzEBrbd067245oWgnpNzqbWMYoatZMJiFcamg6/+nbOqJDV/+VTFBwx6jgDQsXm2Tmj8Kvv6GIyBIwO7/2Yvx29bgFhOv8C6w3QgAc8Da5EGa3OI6e1MXLIXA1XdjZyVBeArXg4ia8CbDfm1XLtPAIQA71kPjOFKfFP91b+EhdQf1TBILKtc4qYQz5XeaAYMinmJjfgm5arhtD+wxIAWifueJtIFbkCMu8ZHkvoAz6tNiYD9Z4TRwZRr74hZgGEFSqWUb3x1dnTMPPOKsN5/rytOaIWXgXuWs1MijjVEi/4A8/SoZLtlJf27JpDwzLFoGfMwzUn9J7GAo77008AKSk1i1E22oj6GrWXRSZxH2P02q0XKIQ+CqNwID/y/zqACJMYI9sbfHekVH0SPUQNYRiWM5am3OXOwpDLrT7gpzVjzDjLR9btlF2iR/ikPKQAQIsu9494RhLOLs8AB776OEnqKLqlNsg0xHce+QD1MwNNR3eEd9Neeea53wap1is27INGPvnzUsl3P6fWOvBcZmLWVV1iS2/P2IeIObEcFZtDUcd1BBPhYFRws6xIY7BuAprEOAyn9Tl48MFmi7FSoBQkzgzcON0XWyUyKimaE3K+ei6GyH8nW0sUACFOS+5KnhcihkE3FQQ2yPzKPSnRiul1lfcK8Hc9F9H36k9EemgrI6vX1w6S4zjUU4wYFienyLe3j4XQqL3Gi7dx5MRmKMcY0JUguBqpNeKwOS2UtpInDfDJVqXtA2ZcYRir2epWt2RzmvtcRomdnXFOd5MJ1oZnxzjPGNLxi4yGgI30Nr7xTGsnjavN+F3ohnqljuusdjVI40SHQByTY6Nj6QI+DBiRxFhDHkslqf3wR+Fn6/k1cNybBMgQsqFjii04wBmaCvTBI+/4wlJ9A5gcnLIAttjRMd0rFcoklQKnEpkmNIqWgpxe14EOfzUIwYFEF/hiQmqhozWr6riL24WknKvhog5OXy3Qc=';
  const _INTEGRITY_HASH = '69009d690844666cee54a6285a7de22eb041250d0a6fe37c48fbae30bba701bd';
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
