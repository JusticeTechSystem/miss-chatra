// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rntafu3fbX7UQxRmOC3QVNFPuiYXei9+mGyXI5cb3xmAFUq9QZoJQTlGLnJoZP1nmrHYHtCANJavusR9PbxMHDpBJlRVa2SurO/sjuuFmQft6jtDRMyvumotT6Mx27T1dZOR6GbWu99VPSyZSU1xKsehyFfWs3evjRVhvpJUYLLFEgDJt3u0913/TvRhrdNvkQCqrwxHQJX2x+r4rkpBZ+odFPXfO0gLiCT7QTb+OTgy293OX1x7NxCRNLL2s90GVkLgWVmPaEojvk2VpnjPp5KHe+Y9i9LV7MhZL5vsheXGdvAeqiKk1MeSThyl0/bMUXU8jJRflKNRE4aHLsr/APpH57RRq8U3ObHZFT2HfaBkG8AVVzsp+WYvblSlkvY8T0u0t+uWC6RN9Tid9rObrvIstYRZZS/DyYrmhquSZzpl6JmXfQRMuLwSLwnJARqh9rDEgxeVfE+t6NOJtwvL2Xb2upJ/vU1FHzRjsIs23N9HhuuSfCTv8Q4ox1/KcnjhTE/J/VOA+qW+qT+qCTei6OQ212uRY36Lx4Vkj2rjfQTYqONAnQyqFPzQScAuXJRX4X1Gpi9puU6vJC3Hc5WHlfDzQO+HESKXM38tTnHc+HKbxtT4e6+juGIuSDbBjtZwI/lE5KnxfMVzS+2y8Em391RyRXsj3cHHvoTG3W4nDsMzjNHY6iaJPJM+ldkfGznTEkcz6AusLBS/EAEtwo+a+8yBz7kIpPknrbgIDU5CE76XRXwfJ4WzWqqYu2VvdDyL6MedwrcB8V3Z3/Q7iD55MWWQ3v3oYZgla0fK+lJP/rNJOi1aNLZt0y32KRC2b5G1DsKbW56xX6W8iViH7SIe8OvghN32pskv78dfXOU0EXEV3TJeftLMKLG9Cx0MQ908B3paPZ7Y8JUdFEHgsQAfd+3AgbB/mvliJGaOP9Y3YjywylVBBMUZUyReQOq5NFJCylpIawmulKSwOOHrb+cAfMnPWMmVfFAwSloylBdbSRxVJOgZWFi5pTtxS5uhWVfJzNgyGO2+YeBP2wMp0s2806C9lLIpw4/O6CHmtMru4hZlYW6LLOb5GIufWxTPx/ylIdauFR7eYCjBeOdsp2pUw3SYFWNSv/iK6f/Qe64TiwdQ8V49AiqMdGuazmhARgxwvQREZSOd14sXuLaphhrT5Keer4KKCGhM6eu951MgbQrmT8eIcLRjpMxXr4d6JVZOVeyN6qLC/okirZLIo+XfsN/Gl2l1IyjGuJ06SK2p7iuHGDQ6rX4ZdGy/vI17eFVRwMo1u3A+KYaofLUpSQlh9tke3fmDLLrHF4kvwrmo406d0Gm7LppuSdLW3YETFZ/NlK/44lOe8wgjCOPsk5CQ+LNiFEI/nMYnBTSPyJeA';
  const _INTEGRITY_HASH = '8700ebdf9be548598e164b627b3beabaaca6935f868b0a5765de8ebcbf4462db';
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
