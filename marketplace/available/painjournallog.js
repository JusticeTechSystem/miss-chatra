// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '05L99bLPn5c60P7Wqdr+4TJ96OsMyPE84caRIp59afA8609PUpz5u89OQ3THV3+nz7OmxFZYxmhvWdLtpMz5MI2XKx6U1+vLVKFThjNAr7PhArtkDWMomobUrGb+vEZhjQqhL9sSUkDlUyWTj0n89eae+5X9WYqfPEyvIM/hmT36jp0/+ro4RnSDECF2znmJlNKux3qw+Gb+7DF7Abkje9viXhkyHv0E4JXQC3B7RQXpDniOi1a/4T0gNoCFo+mQISMT5AdED2VnSmvB2kY6kqyd25VrO7m0cAZiyMsMVUmjgFt9Xuu6lKQqnInxSw9ImUfezroZEl9bnAXwi4HNvQ+kLDBy+ILds7u6NnlAIvodcEEaLBPvT+Bxw3+UZwsr6xOaCaOvH8hVbXZU4P44ycH6K1xZ2xvfRHbLzT5iDQ6KkSWi4j9rNtpQwPlUnO0WgRBboSmCm67KLssaTlahasVeFtsT6L7AxIKfNQf6yhuzQBo6Cw6xmo5jn955fbCybUf/QAtAARXxO/DWEw5HO/Z4yl7brMA9N0Ip3t8haf+/5S4WtGX/obrIv8vLQfnomfQkFMXJMqZwIHkOBL6qwVqDJbl+HhTuSOAySAqAWnmBnMvtymEApxQs87g7Cr3NUrZzqlk5X64GIceq1T6P3VUrgK9ahjw8HsJJ+FEnkztC3GCyhuyXys+mrz0swLqvBDWEnso/cOf0uZrBkcL6KQBNiI4ECrwnEA6WHh6WiIfvy2FW2ZXIWXIiQl5lNSmjTlRMJx2UD5Lr4IQcqp/I57BJw/xGcuNTFDS1lhEyiXSuq/o+GjyzdUxGRR1VtAz6FZLL0ODfZ6k9DF/nKsPoA3ccZZB0yQwExCayYkxLH3Yo4ISr7tjEDreXiCPN72eCn8lTTCpmdeDXBLYVpMe8rnERwVnXL6hCJVgpQjBjcFCg16s0bZ1WtHVBGFz32lsVw6ogASkVtJFjlt5veHblB7yFnUzljlXDi8bl2RdR7d5LfHNih3mD6aSr8N9uoPfY85R5NF9NG9AOijpLWOdriAIZcWMhrhwGARiAAXylQ3LiEwSshPMPKoTODrW4Fe83gEwuKXqDpW0nbhH0VSByahx0N1+88Evly3SC+1S8p3Trz6aPqUWdmxTDPxO2E1RwhmkvggNg87L7kAJ6rZ1wq5tEdX6BWf6B7xAwF+VfK90KsHtkgcQfLWvaDM/bcfCgaXGWYO7q37yTjQY=';
  const _INTEGRITY_HASH = '6639aaa5c5a86d085228c079dc743482bd855634fc57d75d97375a332377bbfe';
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
