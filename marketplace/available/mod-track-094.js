// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'V8tpMF0uSnxz/XBB/BgRDFWlbkesq4I4SQMOonFk0Zy6gRUtQ4j1SZiC8mtjQQv8GlomLMPU/DZX6zsQ5b7kBGjmCwS5hqFhlHFUhVJKxOct7nP7Oga6Xri2UaFbIFVHLLe5Hjh920M1yv1ZnkaQZJeqkbXIU0O8rV0AJf1Pf5pwzNCpxJxB3mDeDgEppKId4NuozmFnOIwmJjW+e5MxYkzwFFKSHjPFURDChUvjU57YPwwG8Za3C2QLLRU62Ca/j2Ja7BTs9WWJtVcd+OelAyllspPWJvLf8vc/+7h1LNH63RSA02ph+ZozVGSy/rrp/0duu3y5XrW/rdeA6dwS7C6jGDqj0yk40nOdJa7gXOUZymPOMYVBwxaqwbhQqyVw+vZf+8aomYoHAphzo4OhNQ6lpRyz1nExP+i3sir8wBTBUU7dAwMAWgq4g/ubpX2j754/FrB2uHsEJu/YUtOUL7iwWYwXHwmx9C2Zygf4WggHaHqHhnzZehLf/PAhYSKQeViJ0SdotY30jTlgIUxLx+IOrriCKk/+8d/A0fExZPdUhgHKjmuSWdhT7emCUdmUVKi6LIlTl93n7dlqb46OmrzuNhxO8JyjPt46FjbGiMD1V2ATU4vpLNi2PKPbx5NMP2Ypba4V4tkOHfHc+KdoN2Xg/Vl/v2t+d32znOqkQA7PxsmnhCy0jTNfeBTrmZhYF+o2Kd4aAzVsa/hqHnWjxBg1CQeCoTQGZqlyW+OntLPEdjJBYm52x7B3/kwl2v5bPRIARu9YWS7+YB+cul8ValDjNI+e6jytXQOA/wAnfY4tEfeOBcd0KESmYEYmXY/eD2H8R96V4SOz1FZGeaIhr0DD5qxeA40YHffrvbmiQY8r+J3st+GaHA0ZSNbs5kFauNhTY2NyvoDBkiJGR36k838ksRyffMa53sTLZ9UolCZVf2ZAKVQ8VqMPS0ax3Lneb1mEel3DCURpE3E3SQZ+4SvnPq8dFe0AmMNW4OLOGlkeZBP5rHAsDKaU/pkWoqgbf5t72hMo8nTZqWbmFBaAo/dSbSL6zObbY2ih1jEdiKnPo60wcVOWg1O74aCuF/D3LrEOIL1GZFMhYEh+s2nGkkS8wnWtr+pK8b9yTmYLtwNG/jMoB2gR4fuvskW3JdPcr+zSt3mY5gDu8I01UKZiavklIox7eForjhhTHvgs6qMiC5Gk6RpppGHredRcU5Wk5n5MwwJCLZ1CmXL4tmKRKahTUOG1yhIvGYf2AS7Q7gX50HSrW0LoE8WDtZWDL531CcDQT8vzPzicup9/WwgkYJqY/ErShlncjW8TuhacLIPhVi59w96ertserL6WOkACOGA+JFY++Uju0jy/BIjzDNjsjF5LEJdPWQ==';
  const _INTEGRITY_HASH = '6ff07ca8cece04710f1f62a9b118aab7cd377759b56de5c9d261c71cbf05f7ea';
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
