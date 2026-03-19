// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3RoLqrzIbK7pNOEqgQqjG202a9tYRa6NeCigLfMmvLJHlZ0pHTLOl8KODQmxOvTsIBoOLKZ82qSG8a8/+0vuVYnfG62Ss7z0CjjjtHsyJmrpLDDkvuto0NH9f7lD/hZQq+KBhf/eHySQMzNgI+sN+jLqSWQ7VaRjh49FYOjXyycm6+v0uhnW4ppwdLpY0UjfGWtQA2VVAiSRzVK1nLXqZA7qadBs1kRDrAzNGc0EY2pHY2t8NRyFB83/OF/KMzZQGKmFYS354JFgnbmkVF4DeEmB+Z66YKIvJvmiCBJDMI6qdulDZEXCd7IAoiWjJjo/diLEXnGyzW5p/YvATJa9nx+fY1w8pamVbbrEBj1iQT5yESifSedh+akJExf8ZlIpArRKGvcH8T5BfyeYHjLcGFtqgN3STmrH3PYEoJbNRuZ6RC2tFkGBuPiLlJX5lF+gfweb6jnPGV95Ee3ZQkcW1JMYbHK69OP68rE4sUsaoUY2L0weZEiqVhBc7DpzJv8YzFvy+o9Syi9WGTNnZMSCRAtDgdiFx3MF47aYcJ5sSZjLX4fpU7c5rahM1d0+Db1UTontenBbNyIyy5qSmmGHUYji+xZeIvz1FBxl98Vvt87SiH2qLfiV9XSORPrgmDO0yZb2R8r7DiyOTctppXcKDCvYWzqL7MaG3C/fFWU4KuWlni+nmgoM3cc86f4h4/TCIcMbY5EeoJjF7lsy1LHrBL3YO2OMOpydBXHv0XCej/eJqyc1wzvcYNkJ48afr7tCVX/KJqyp0FMFJE4pFW3mm5YjZcpNEIIZ+QJOX9zbLLcEsykNgC4iA51CH11K/PneEu+botBfl41MfNrGJsFD1dt8a+Eo2Djn/3tM9hTB7fwx2x2Ye0uLK9MJnKUkdRUG943g8NuRbm09sdMxz9dcsbQtOI5OHgIQePBpu6RaVkPyZwdwqKNfsZ4xx4kwJTzBoNCzqhfvMQg+23cDzQwtpw4IQMFeOlHCB3w+FPH0rxbsFyyvab+QdOK+YM/zVO5cpjz58MeflBn82Qlz5/AVQGEmScg2quHZJmbWKzXMtyg2QVBp9H4+lQzZBujlycZBcXDmUs3FX4j5pqwan8DgeuTfDxzVJnmVsFB2llU5FMV4x2Hw9cyOmMUqSA9zSQD+IcFtUR/Rz9ZlHeraxWjjKuVAZftzyuXInLUPWExCKAceKzaO1VUZEzpSpSxDSIOMSWo09cMx';
  const _INTEGRITY_HASH = '73d51b9da0a33d3b3ba8d0849bb0820c728b67be90a327c604eff62d5e947181';
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
