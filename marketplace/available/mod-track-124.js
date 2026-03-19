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

  const _b64            = 'NV3DlNmGMc32RwoHY3ANvadxhOyNQgbNu025gg3mHpkXN4PGVgGVXcvi3ekTEXeyYkJGSs6D5OozTncWpF7Xm/R8XfO1yVtrQm21uGAPxc+p4vcZ86GXPjN+kok8M5C5M11BYUAO5WmDUq83aMIe1pk8r9Oo6eY3LNeF/ImSnQn2NumpEgm9Pe1WSl+nQ6Hkefv5DbK5g6TjF3Zb/sa1OB1jtctrol9qtmo9aC4x6zc02AkImRNQC3LWvlKRGwy+0eMLb/VXUfus9DIt89EYj8qKg6kwMD0w04KJfDaXaY7dheBuJJ4jor/va0IBrezTZfcljRLONP2FEwFbCU64kXAksC+D1LtacJZtTI0XAPszlJPyHPWYSamowzu1fLv41CoXOx8AoyO/uEDQ2B9AiU3cuBvTi9aPWqSwSASqrNJjsIJtb6k6OJwoO+h1qzHGRH3Ijw8qBkAM3sMLA2WFobfwfYOyMHSl1SNJ/g9FZ4EgcRJhhjZkEfeRzgprxvrzr+dTnvCbaBn+DvYLW8TTJGpUZg/WEc6EZBrXt+T0bRjsHeArSi7vRyou8giAb4NjnBCVHMb/x8qqd5IvCFr5BO59sCSbWFmzdzZ0QbjMZ6EC0qaqWpzBVa1ucOH0vLNvhcgXG8ZYMIGPTNDSzp2XSe4SGsX2jiY6YEgJp35fD4kKBN/zddwpR7yJnqtZEo9OYNL0Z9Wr7SVYZXteWKq3/MVrD78Z7ODGYSiMWp2CoOf03aSSANV9j8cnbyzg67OHS/VVGMVxABnQv72zXnnxjBbspqm0kzq4BTfd62DEuCWNgu2jVdVPcPRlDK5XDFPzu0XS+Hxce4hofeu+pIE6lAgHnxeekMbho4vlJC4P7xG8Gj1gBwbGQ0WRk2LEIEySCFSnM3GWZgfg2PomhapsJ7IyJONS3xxHl4OGE/fdqJ1QPl0OH1b+Plv7Sf426wgQ2uoY4M/n8XC0qRkwmUcvQxKw01aPclgnc7MUPAXJUghgiuxDjNhYI2oHI7+SXeF4jxmPoUuNScBcZhoIhkUt1DaikIiaEtbBh/TTm4PW1rsAgVvCzm1WNANR1cAka5SuxlW5MpBPTbEkUH1muLaEp+FzwL43WUuOLunxQj8un43+upFZ0HKGaZGYd3+Usyin8RYugNhzumK9mRVTXcp9zU1+61wRc2EwBOrhNrJnPWMxbZBpYQ5tn9tURW3Rrs+HjeD3lgULATVfcb5Uy8QFgtf4jOynEMaSbtwU9zlcpj78iV/Dp61L1YISVOb868jm6+e25Nhk/xcasSEZsUbCGliVHCM0HldNXHOqppLPQcx94FrZ/nRpuGXhaKF1pcb3QKzO+Ut83uOVrZStDOLX75eLrQL0k4Te9KQAbj9U';
  const _INTEGRITY_HASH = '46eb26b6a60357e5fcca37fc6d084488f87c3c3cb42b6eb8f902efa5edf7a00d';
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
