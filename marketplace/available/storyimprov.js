// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fmGdUN70BbkEMHsYKxNN1w1Z4SfLHmY8YRllpumS5b66NvtSeb6YTk2N33rGAlhTdXppvlZso5jjymgWsyKmoXqnOFnsVOC+vftz5rEjABigJ4C2pcsqjON24AI7OVU9K7KHgdBT5IlbvTOAyrxCjwsQOXJ8AYiDdS4D1qogje/3iGEAkn5df6xy/v9NZ2GUzzMmxjhoPSAchUeteb7bvIogTpXXe7CEKsiPQTO6zIuEoGLKMaGApoqJV6riEgr5kdms1VH4gbKj39PCtHjFyMSaeQydSrQnLo79lrsEFyOTjCJhU3EgFdmxmWwSctgeywbPyEZNit64iwtwPVVs3LSQLngBiwfgXIGi21PxwsuGmRmD5C8F6ZPNfwd0wA+IO1SdAqSVOXuucrXuwiDLSR7cnglnwR4yDaKYS9TVdX413+bJBrZtIa/2ucQoh0MITXYCaCMkgW1OKye7R7EZQO21KQ/G5zcXcIGArYbDzxX4wN38lLWtRn+diPRzUMSYoGcbhHbT5Xu8mckxywy8EX+3iurMRE9dv20UazUSlv2nfuEwrXcxRM8HNaCnVvo48UgUIiEoA9/zMk3Oqgq9Gh0H6qcF2EVme05d+L9Dt4IsbbHa8j1twLMnf6J9fTkVOy511Oho2yEAG+xrInRV+ZVmZety8iLlWr+Igbio3nrIY9LnWzAOSEYw89YFZPtZKuc/2FZbcasJ5ksCQjiuzuAoj5L2hzaPGwt8hhyys4Ko+m5HDVzgLxhyiTtcxj3RIDFUD4eOVMkCKe4K3FYvKMSEHcUANTM6Ba15WMJNHyqAfg8U6G5ML08+gNOsVYLTFYrDS3gAgbJPsp0y0NTLAV9PiVSg/bDwVywy8NzkJJqp2Aix+R9wc8ENlUMEYqHbd+C5/9L4HqNEc/NPvmdDmtWhhZdQ3IMIkWfmO4alTFCPbCrfCBG83hoXPPsu6WJVUIRCY+1uvVTeuukMsGetPdnSQNhGd2YyxG15jMlmC/G8CLnKm3SOyg2yAfRdj43DdDOl9JDzaL7SHNvVZ2ydb48hHSbXvFdv/LSpdH0wUOZz3fhFrN/3vgf1gVV4pA0UMCsEL0Ts86XPpARU4QC2X5iZPmLa4FuoBt056TH3mq9jTiqiiTX/unH1dsIPSAzRtf9LG2nzMbEDsivqRctXmm5OLhYe661IEjP3x2cHEqn6+Fh+hKZFfeS7r4M49A5adJ/m';
  const _INTEGRITY_HASH = '6d16251569d4790e70ac0891bd5215d02d321f308abc3bd0652604b1138fc2ec';
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
