// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tuvzMlCqNWFonyKU2FdpZOUA1hMEHbtNgShbFzy/Yr10fdsJCkJtSQzmpQTLQMpYVzHB5C8YF5GEmF/tkg9Xss5RjI6J/StWsoPqHNRePyI5doGmGuF3Gs4iTm89awRpAXgTbWIKPMw3TOHeqbweE1OXKljc01hxFE3zzmWY+k9/ILsiDe/LwBA3FOCxCbl4NJ3xDAPv19BkbzhAGtSgpdr1WWcsrjjLo6W67lPxaU0bHvPsBzJDjNzUDUW0d+I+YlY+FRZKgwFGNXQzUrc4Dt1NwF1myt2dMiBOHUHL5sGIsyU200fuUOmIllkPziLIhrCmSoNBcfz1MO3U4fTIMhQ8QSVIZTRGuY5/nsxUY1MruvWvG7hFCeUyG+2NeUZ/NoGGrXbEsuJDF7UQFyjEY1wW0dyjsg9yPT7Ws2p+hwekTXUXq4ezrsxBtC4JmLU6p4Oj8Q+vLsYzHU75FpG18QtmOwszB/QdRXilNOGVgkZqoZOA5tApNXt0uH2qolzhuMwpya9UtMpRJK0zEZazZx5/E1D3Hzlst6pvCdXcd94N0b3pmVIKT4d40ADPMErnMW29Se6YAJCJcVflemZluxB8IeIjgu+5+xz+dz2i1+IopTqNIAFjGy+vJ5OeCnU55uaMw/SsAZ6uyLMvo5FbQLet93lVPLtGZDQH3ugDwnRePMOc7F68VPKzxx1HhwSzOhlr6cdT90A4C9em1oElRQiNGdnmD7h1K+rWbXR4BQruiF/hLDsfHcsnRBpT8QNs0MGp6em+6E0fCx3kYpFLGrC4PqleRlVtsnIwtX53S64Q357p2Xog/lglO5XIh44rTdPHTMtKWgf7wvy6dfZLAFu+IDDfbsbZwM7QDLs3rOHGQM/NVtp7oGtKOFptE4mFZ/dgnYMMxi+gBJH7Yt/15VNbulrAXj8qedxdC+Wtm/l5iV/rkIYg6iOT2x0MsW/B+ZjffQ1TSVMKA0WER3yYV9vtoIeSocS3iAg3fkDVMC402Fb90m+i0eaa7j6at6prv6hFZ2exK0I=';
  const _INTEGRITY_HASH = '31c75136487cf96edb267d29722e95620dc8239c920ee84a1c68be72439eebbc';
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
