// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RgyP37eLNVKS8dZ58t+xLJQ0HtJe6H9/XRDvCuqPHKWUqvL9xFEBgwZEIJjwl0aDtMXoVY9LipkuS45vTdlFypiu8SFxuEZGR016mTP7a6curowaJ38T+sFyVhxpLKZqNteEtRqebtCwc4bNbaWchWZwhiSqPztZpGxSDFa8jCJXCP5zw2BQr9FVI6B30C67huB1GC6K8wawIqSILQ/PRn4kiSh0GrJnm7Zk+mrAnlY6MGNapRHGMbnCIz7/nHPppWOQ46FPJUFCY8i2uzocGtfhQdLTbjtSWi1brViTBE1VDsH2Lo1bdGKfDKHv8iWx7knPyaMqDSkN+S0c16woIAkF2xmcUN9zoy1yNj2JXnYJrMQKqCDr8SSXT3lStEWIfI3Gp8oMPLE4YhB6wITZi0I53NwmqK3aRBjNaZX4qQw5jogmMCX306EwjDFO34RDjStpqNcmNmo9WaGVs09JPBo9PIYFUyl3WNRuBL7ByVDfayEYKV3uh5RHqEInH0Dgd833rVj6ARI4t4tsx5vlgH3Gxjv/DbkPfwRRvDofCw/iFKwlsLgJFKf/hnxF+bTIbkp3TjIdZzDIK8PSsr+nlVllvcX+Eu1ybPnYZEFulR+lEoQaQbKyQLsC6h0BnLVtWjTXVjRU4z8nTUTCdyU4nHuhtMS57MdkKo32vEEZnOth/JDzcvdcYJX9yoi4TcitbAZUWrM7mqqjwdCZ0U6eQ7vm6bdyRQ/99B3fEiJkDsTv3zMJ1aDAlYHgZYed1YmmfwycC0u/EAB8O2Mbyfp4qQ472wqVWSbpv/GF5AkTqUXIptqfKKHRWBbCQLKQuOFWrJ+/FElMSPeaX4VVpIqE7b1lNeID7lkvDjRtytgYr3s6M61V/fkBAgqQARl6bGH/aWY6At1F3xXbo+LtOzuAzjuCxGHovVhSxAL1LLOBohpHH2lDHAbF3E+aoH/hWCCH/uxWk1wLDd1XjjM4HneP+7VQ87lZ3QauBdyXRev2b+UAoqiH4SvbVmX7+nqQaVVWggtfG3jRYHGKWGpL71vfuipiDACucyelVxxdOu4+emvl19VUbybx9Cq5hmliUhTVo/LRlmJTwdw/CprRerI/da/0AWZnqNUlbpHo257Xw886xOSUeMyTQhtEDi+evaCaPRVAMz/iD+vH9cjkDaYczmodNIZCOxSwr+EzB/qmY47QhCd5BNRs+4ys+PM=';
  const _INTEGRITY_HASH = '0334ca9dba4d7de279f9cc0f562745d5d812631a77035231b8f1ed2b7880aa92';
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
