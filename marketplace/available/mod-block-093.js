// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MHFjUGcr1uu9loSuj2zTPB5uEMfQeeekiJEZtZiMPWexjX+gi/nAZIpJWCQqba1sP1hwb4ZUg0gYjoFwn8PrRXTh1LGlcTIALl5SmYGCDNCrzL9MJ3WXyzcF6rYv0+o6LgJv1JjEzu1iyclnmjgqpIPZJ0OPfL/vy+dFJSd6LVjUdQhZfe3w3B3XKoFnqQuqcObFcAT6jwp0nAV9GnL65QoK3wNhoA+P+S7X8V4/jgUHGQg0ETHOGkyjEbDJCVJomBUFlHkRHdgxMfoYJ5/fyJaHYN87cyZstG46ErkNMhlrrnv09EPCaBU1osw2WL9NAGYqZiDsTWgN9jPsbakKInALy0Wc3hyzS0faZGUhlX67cGjXBLf1U7cPAmIvhcwQ4hpLyS1QhiF5u0yRjs18Fi8ReURpy8YpYlykgjkCVE2af0Iwv5qsFiz/x1ZNLfu3REuxV8X/vrxSc9t/3rl5fccovQ5ubrPy5Lhl28LwaO0EHe6YldqcVKw8ScFI3cwXd7Govzk4pvtlNu0stci5UVOFfO/DLMATNwzzetSKT2HAt2A3KQo7kwP53o70LAY0LkzuJb2sh0Nhn4HmmaNzM3BjbYyLGzKwUGRSgvFgxqriVwgfJ+7EoCLUaJmWzMO1dCgJyhg4qSrU/lZBNoyG/JpZP6fwsjP5vsfZyiBxxCfR4Q03oolBjHS/VhjdOcLIIy5mAojb7FQYC/09v1frA21T3Ib0AzXQ51WyefmGCQU5xgSSzwBoGvohcn/afHvlJA7jhcSa7CX79BKpZYqqPgp+NpD4OfQ34NtEG9mrdZ1+FebdoSvW46cNI2ZDKA7iaJDdSKvq2DUtDtzBsLcTh+Ohe1SElfVMMeVdi6W9UYPdV/bwqS4SN+q6g5cTZkn9o/qFBV2EwmwEyInVnSTAVrlxWOMYq4OOSJ4zekhL7PpG4sbHlBTEgVxCQn3fADbgbeZW061qvI/oK8PvZq1PQ1XFdVMRG+1i3ujQDA6ELtwicpIXv4L/ZKPiBxkuwTVgm7z/Cy0RXRl43T017JA1EdQpDoWCZlqOUCp7rm0U6MI2DMc+X/PjiBlk64jV4K1wIo4A9Jr/fAzaDzDRmOiuwq5WvV1FLS7lRD+G5Ai2AYMmBogMjzEYfmRz+/FWX/vQGZXIFF3hPBBL/cWF5f0jlLRljbl8gKYwxNkH6PeTHy6A9XGX/940YoihwT7S677dm0v2vB6pT3rcEE3xcVlWKeZkQQm8FJA5llC0sV1ffrRpp6f3XL7dwNstYcf8Qj9/yIa6H39wbaxPOcXYgzZi2TrjdO2uo4i+jVvhC/joGo1wjexiILEF7OSgsCsw68ZkOkIliM4r+mjRZ5q8rIPDrCYEwcTizp88bg==';
  const _INTEGRITY_HASH = 'fdbc540b28c4617b9214b663852be9b59c1b8cb64356f9ac85601dd15691751f';
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
