// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OBIBZdIIl2c0dSpXGZJdf4/E79RcDXiU2U5RcEpYpsT6+U34XtOC4GzrO6ONLsoLjP5WY8r94YJ46FPO10nWBAlTL1VC/n2uYudLITWelX9r91Yo+9aYnEL5ecPcv64Bu0jpzav4yq86Pxm26N8A0cRJ1PLY5i+1GwrudbQVpBxavxmzPDCrf6PMJwk86i/8lCbAu+7N4CbgNDdGiGf+8IZ5+7Pd4rlvKhEDgYfcysKfHDGhKr8+XICbcsdGH2iZnt2zg6kH3f0BsXfrrWg8RZRBvY9EbyNzXS8WShe6WMmbsYCcSbjTQGW6vUw5DCH0MIt6mb67fYcymeLhtVzUguPiB/sTnahYpZelD3kelNAo9w8VO2aLD/t7Y70veSPOUfxMNAFTYNHtWjjZ7jj/QpVx4YLsmiceIgnkjje7qSYJ/fhWpbTSjGU4YrdEs9p15Vr08vvVicCDBlT7t6bYTmAOxbPhRXF84S2kCfnzIJrg73tyJjqJlQ3jMux/lXD6Ofz6FlN97Ui5fSaYCEgr0wWTGwMUBO4hYYj8PrhOLqrPuI6bqQHmt51vrSM3sSBClkpZR1eckEsD5urpgC/8yg/l388cYog6s7hKA+VMp35jdSQWHj9Ev46axFJVBg2owiGygI54/sQiIKHbyEbKsUO3sazeY2WWm6w87Ovp/ckuYP8lJhTv52xpYlsliu/Yw1YKSXMkT1hMvIhGaOYK0Y71YwC/n8evLpGoWfCs7gEcS6iTtwoMJq4xy6qSGAcwUyxeK+bg0TMQAohk53jr0LIvoaBmrga8oRllHYiyd0cTgU2+ki/xAjPRF8bWj7HidchPJ3yWTuqmtx9vQjoh3P6uI5N9oKm7Zl+E47bXQGPGeobbZ/0k0yGXZE/msb4T3xjmDzS7m4z/CXxK1EW2OdQuAlQ5RQXLxogCRKD6rLpbgGLDTnNj9/RZFQT4DJuG44UbViooygk5n2e/74T5RG18wwB9obEsVNJZfWQ/lJmFFFEa4DwZLdWT5HOYm6hm4nRaJaFnreAF6M/hLQ+D3VDNSOk+QqQClH+rXajk5f9lg9GZwnLjMln6g9axN48qq/06I7ivM+bhmvxx1mVCwGbmJWG8iMHm6EGZw0zC7H0BZKsKTBkOy4+3wTYasH80RVvoOkkAwHkWwA/k1H3bFTvFyJRamhDpLxEI9xyX4ojbWxd0i6FWB+/vgmbtb/BE9KtmaeOOlSpKcl17r9h7gmcYNlzIO8lBzjcnizsekpZn/tDB3nU/REyvt0tV/oP2SCMtIHLLd+MPMwQPz3OSQP/33r+a3wlNOkK+MwKy3Eh+hg7PjbhEGbK9usJH5fCgVwrpmrv1UcLcPfQuikpPCfezVlb5Tbateuv+xFl1VZjRLpfLikyUe8cMYpouOPKvImSCaX3+V4jxnyy3';
  const _INTEGRITY_HASH = '48b0ef51e0641ddf858760d8252cc5fc563f7e69a7a9cb19e73b13a837f9e077';
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
