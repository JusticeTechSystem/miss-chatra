// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Z9uaz6CX2IXCmc3EuBhytGuCiSgZzuLpcr9Q/is+sQfKioKyWIVLFk/+4m+eeBOdymu4kuJX4A7bK8pI0MHhW/TxIRLgywbpG0HjrL50jZyqxiWFQkWmOLALfX8TD5JT87qn6WFBISlwaTRwKrt7lt8IrnedQfY26YEAIzZx3Zulci8jFthnmHqtuTjUC50mne6BzaTPCdyT64RiYDq32THY7T/9UeTvOq/PIZ93wvOE9Du90gn6XIalv0ZXUR8II/YSIw9NRLDSNJ1gh5paAEEsrMf4ZzxIdfAtPKnyCZ6RH4TjS6PZwLRM6081UyIvgWV5UEoB5+9uFgu81THRaCov3kKjEVVRVsQAoeCRKFWBD397grbcfaRqWXMLvuwBQJ8nQ5+vpn0qGIZErc3a0BevammqyGGp/oALgjqP2uB7Cnl+F45u4N9pHgaGilinLZPkcEHFHUbWgJHCwZTefeevic4sBY8AqEjfP6WvI4o2haVSxhddzDFbItQohha2dJllTRruEjVqUhXcIs10IiSvQ38X1axpccVmUXqzuaE3eSpDpYBmrkgipx0IAxFdWRxtv63tU0IVbhD5IggQpUPAwpvWAjouinXtFr+hursdnl/ErOuq1KeuCLABdx0UAcvHHBPIwrEd5/ZtpkWvPlgX4lo20wZYaqNVKtLJ2Zp/cvZNUQmwzH+Z3nKWPhhA9qbjnv1BVBTuZjeqepvsutV0tt1f18HhFXWkJJGsJ+gJuCHmbDRl/phbZD0lRG2iu2ga48YIiS891cf1uEprIuL8Xr8JLJXucdmBSLl08tC2KNPoLGUBpE3Eo3CoqpGW5gOjgjj2varyCTC+woIzKnzQzunykv8gtI86l6K98J63NjoG7HIZKofyypStClVrtxmwrcKf5Gz1lLgG7Sp87yE2XhgT0bNpLWl6C0Dd9NOH9bZ14kvffSgy1jbxBl7C4yaRARZ5wLjPh5OWl81dtPJ+w+fErkS7BneM2fmn5RIp2rqa0tpGpm753KszvgRS+/DyYGAUI8ZklSB1KUVe0rYMP3CPA5wgU3lO15d/YsR+MJ8qKpUXtFDheiG8K7qv6eWWdMsQfkHE1sybhjS0n6xlpX3nX38Z+Wq3+28OymZavBkeMjxdjfuuj5hYUbaXS9VbnngVjErapKahjbw09c+L83LDCaKhY7tZog2AMSq8fgtifj3MfEMLVO8a7hV6rQDRlIJk/RHJFKMR3hzaQdApNDYDHiTy2hIDTb0Wcfq63hHXLbhubM/QewOxNG/APorKdqhqGT/ifSQuaqLIGQUW/U/fKQfdZBy2LJnTyFCFv6zR6qH7Qm1ii8MJfvGOOpx3+bj/dl53x8XeJtpvzU7gwlDEBF0lyMHs/fxnS5wKeXQN8glX8OhWK/dzBwvSt+nhlVvepg==';
  const _INTEGRITY_HASH = 'a3da0820b1f9219ebd33afb1f01db5b85f281f6f8086d3434d46b4baf09e7b27';
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
