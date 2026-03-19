// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SUQ8vxWw/PT8ui3VL2YuV8HAmjQFlZYpvSB/Q/TJFduBDItzzzC25gv/O6lX6yN8C4Y/iyqoXovkD9+2YCHjawSCWyaeXuO+5yRpaQHanq6jumMETwgkq1SoKTIeuTIfwsiTZ0H4ZSn5i/ou6UjznSTcvNSBLdxMGlZaRZyMT6CSmbUVYZOCZ8lcsLGBYfMEZLWVdPKCBLRNhoduE5tzEuiml+WWP40rPDLTY+LTjqZlFsiiA3VgrfsOMf1fQgQMr4PiXUSz9FJuWyfKgYzyHTVmF3UbSdyagR9kb1k1Bcr+d6Hc9pLOUgYrGcNPjlQqBMyTQsNrb090FqN2vKoJbzPjoJraIoXHyrP8C2JrzoUNrD079JOOdCvZbv7arJATaZ91QTvfD0ITNXYb9v0byFPW2O1VIeXtlKyoaxKbgBh1B0ewGYE77S6DQSPCtN/9jm0jsjmaFiTtD3rfOpfQ6dbQ8Ht4O0DbgCMDmrQ2uU781IA9V+M+GAGbiHTUt5tsVT6TzLYit2aILaEhLyZ2LMpdAAATeaILS7aB0L5sYz93FhA284+iY9ZVIOsmEHG6NgEgqFYnQSTSnF2XzFVXDdORvPFvIMNlZvnY6jBgM271IkZCsAvpWU059I8Sc1+7e4k6cKKdLM6qf3pbUS9ZrFUGJDhf9qlzpn/C1VpKUt0ltRh9wPqAbTlad9BwqDwmi/L8PKi0cSr6KOGOSzfJjuX7WRm3ds+j+NEiXjlgA8qAfQ8+gjf2bUPfOOzT7ggsMTvLG5oZ4c0jQpG2F80lcE9tHVYb/chtQmvLlahKkBXoevswDkt8v4ERi2rWzk3JKvyXVo7M6G1dd5nTtWoBMYA6okHAiWX5OwdfqvuN7u1VhSQp25wgCu1CIWStAPRaFGhy29MmUKCtVOiWUzB7JiKp40Rmj8RdCBbqLaMIqMRCKJ1WcwhH+K4/yNmchbgqkLvhQOBtHNKnuVwCJvUhEau6R1j4/AkRgqB6bkCmZqCExiV5T+Z3SlUH78YVuCRAPjBCjmHmhwPAIY1JAHrHFaGuile69Z9Kem7cl1KZxdUsh2KqrYMZ1+D58hL9bpsu0qCjP9yXfOF+/NXjjC0UIWi/dGTOy0gwQcw8z+PFdVy2oAyPueqOmxi18tCV05LNhd8QrZj4VB7kniD092IwXgIitqC+5sJxmrT4sWIazq3iCujbz2K2TIgfrrvXEagvxe6LlgOQElrSPTFC1fLlllXrf15tMAAWQMkPNYMXBuPwvacMuHv2tfxVwV11ZiJsE6Fa/pgRmGlU/oe5K7MBMdFEIso2eCQ7A+v1uyc7dv1sqp38oK8crSUvjlU/urbtqDt2x+jfhZCDyFBPdJ9oCmYzCRNNG9FAlQRl8yy2';
  const _INTEGRITY_HASH = 'c1cc358c63052822fa38ec5d0f081d484b10eb33dcc7a1901de21562fa568504';
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
