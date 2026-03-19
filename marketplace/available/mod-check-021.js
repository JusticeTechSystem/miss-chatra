// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lui18VS13M5gh7NA2I5faqeg4jUZfxvvibN2etpmkr4eI8ReT/5tt4maH2TLLjGE8xdFZKTarF3pfepgnbDE37FNAXOBLXxcK6oZEt0pCAojwvATV1FO42A1On97oIbS+dgpWtdOJ0mEsAFXZlvJ716GSUviypvild1t0adei8LYJVk5LRTvgqhtMTVK6EXYp+axShQd6dLlxw3QmCNN6VWuY/Iq99RvbJZvxehhv8CDbsLLkE7LLsfc1HrB6VCNrEjfsJut0uYz5HLBtPICyeh98NsgA3/YtQfJC5rcgpmsYtvOTVVF1BzxmINuGH+2d3+BxGEHlP01zHhzG3J+Yit7KMItYWessNr/JoUAqxjvfJa5n6/vaA6IrtiEiD/axxB/mZ3NLDnwlOR40QxaU65SZteXwcou/LXTuFrzaMEWpdlut6NKaGaNPz0SYWWeqTz/fcRCkFHxnrYAMfW7IFch1FbEyQ4A77N+MpPRi4ti05SFS42ETimfe2H4m1FddaoBhMCu+Jc/Aj3bEgnvQTj0PHsrdh+4It7a7d4xHj6igzWUIOcDF8S+CMlzmCWLsc+LZDGM4KxaOpy4KWYI6CQs0Yhs67s47yC+8f31c3bowdN70HBl8hggHLA/EThJzT01yAyYLB+m4aYcMj38qojd+s3Q05fHQrw92csrj1odQb0El21gabT11J1ZSwPH3R5haFKIG+Mdci375vJ8JPOjlp29amMRDaiRtEqcBMjZC0xQZ1QQkBOe8DOTcibERb+K3LMsk0AJ/boLJBolc0LqBRCKjyEXsiFCg1bsono0CICmpjFFO+kCrApWuLKXCNd/VedWSktShb6XEuJFp1FuLJ1IM9Fa5L2CR8swtKfVBa3VakBk3EH55ICvAvI+6O0JSSlFKOX/5jt4UiJwG7oFt1x9et0HY4SpCIT0WceAiUAodW8VBHtO0OhYrm/vVgnuspvc5UoJNiyyHRHWhHbG38UiYYEPDzt2pZWR1aU+cQmzaZ601jOSX0HvQ5fT4QEhYyISnDTjDVgvwLt7mR6Pvn8DjXj/FOeysZCz0HkzsEIkoY45MMaFKObpRO851z/01Ak18itkctekGsj/NG1aRyfT65ulcxfghV2AxqrRf7RPPEwCzAoIcZXl3v2Yw7zu4o+01w21cdcSLqNtchSWeOyu8Dqcx6hpWc7ldxIN02rC+BLCIWXxhSrYG60QumCUSnegJupzTPvWSXZVyPsfLRWrl7oSpHb8DrtNM+Edkyynz5IU71Q/htPCkTJ96XHAyl3/Tzi8ciDvwh5mqfC7ONBVEVXfw9KYnkeMjKb7g6pKL4nsu1dEoSDMmf1cjaYPlyEsCPoK0EIz5trO1KibUaQEF0Ug0Q==';
  const _INTEGRITY_HASH = 'c59ee494e78d0d194a093731fd52b587fa30a69723ebfcd297c8dfb89905a343';
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
