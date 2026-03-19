// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vL9HKnMKVsot4RQSeBaOBtni+kesyulCPZswEEwYyaEZlLBgS7qipL4jW+/i/tWLkbgkAYcvHplOpk8BR2vBBaqAGBnQFI6SLlibEgGUd36Gxtfmvwz/F+bgCopvqceuym7wMCHb2AeHxWmCB/6Fv8CAqisRSxxrNAOBHSNj/wKJivNU0edKesTlzmWgVlE2NGtJ1AEvGDE9issJEHYF3x2YRnpmUIharKVI0zKMKrfVgK5pX8KKR2LiwVJF0d9W95gc/QAJ35xgOMU64Wstu8UtaVQzvTQhSFrAbGmzigqqBaaq87RmBodtf50jSttcFtMYmVZH9ktl694jbgC3ZTcJeE5xB7IfSANIauGi0W22q7KBF/zHmjwANkk/ID3lTx47wnhDQcdl2TckU09msDjn6x3vT/Pcn+Wa0Th5Xjt1/eHw3HDpwgofVXFTc1DdsA6tgYhd4v9HSVkbyU192sWPvq46qZGcpPdpMtK97uYtx9IgHjiMt7YLkqfvqkhahZNEtgbpNyEv8TY7h+BPj/uwcRqEoCNvBUmPNvucrqmIw6h/aC9o+UaaewmLpit2lC2A6tr7jaltEPo9u8zfsHNZ2AwkzFqvVDHLXvO1FPC3RL+NSe2GyOm3ousBOf2OH5/bESy3DAYtNGjuLe4n57X+6pSg8yXlajJwGvvwA+2YIU8IiwD9vQSaTZ4E03Wu0iu0AB1tOJ5e2LXmw6gUbN6Pplvtug5bwedCf9A=';
  const _INTEGRITY_HASH = '4755ecaca21e2815be6ff36048bfabd4808fd017c88a90645fd5cbc3fa6ed2fb';
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
