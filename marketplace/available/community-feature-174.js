// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '60w947LVZPtq/oZ8YN8VThHtYGB40zGQ0ECliIEUCixctQGRyYn4QQCA6cEOL/c9VN21GMDnVa5w1a02d/vvUpFA0YpzifmUUe/HABuWNz4rLMSsZnulPlZJlf+nTP5CUCfWiCxuYhGifR//PXSzjaO7ue3Z69ryuPnlY4QrqDnGSQYXMXM1bX0VIce2GvUK/xdVSNgwPZkUXDo/YpFmMiGQKI4GprAxHbFcLuZTr7HjL+4KPohTO0h6gZt5qE04S04VtMCmE7PQb5dSn1q6jMiKAimkxgm45GfYd8/3oenFjgJM/dnOuMTiXOb7pviAB8FoTf3XRIe528raEpQf70daiiY1jXwNHXff2Z1YwPo+Dqm40WBt/H6Exnsq8IQu81XVBRzSUiZtwgqUEbizsqCH5FOOLnB4MhHi84YiR2gezMzIUbbPCRtpHjqIvBVPrimbnRfHT1XGbroIAcK5aVUq7+R27dOu/fVTL+u0PTpCAxyX156qWKQfILhNlhZV+/N5hZ+74Y5Pynaga0D3Esh8PXkgD3/J2Bf/phe+rYziJ6gPqkmPg+g9v6CLNgPbG75ZMPp2OLHpVaalhO3O4P/L2/kFynL9axkH5JOeL/4YYAdQZgusjCrqIGtjmP+tXh7ZDtmYR4VV96/sdFoS6iIQ9aLw39UnqTtpWK1eAe9NvXwfbrMpr+k+gRWq5h3uxTkkoVeUWS65CfquM+xHYqDIjBZgN9KUgyXs17BdoAlZAQzM+pQ=';
  const _INTEGRITY_HASH = '0d3888fd29cc2283ace19567eac2d55260d304db91b779f7c5460116cfbb009e';
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
