// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3T2/0KGgcV6N/DMapce/HDv2wqeZdFA9grrQf180YcGBmGr68o4ctUhYp1FlJCisYMtH0UUUf+LvFC+19chSfyCuuBCkdhQEmqEwpa/OfMAo8dazhSF1AyII+Nkr1h864Aivrv+NdFx8b9oU8mEUKfBW1kbRd9j8UbJ+oQC5gKU0L4zkvBdk1J/DJd/LLzLJIOlfCXIaYd1goKkx+lSaYIGyOhJ3YfoAEjNRWVodhmQgRf+HI0GEGWG363l2tH1kshxYKdVtuE1f9oVfM5ysa8k13SOausafjzEtNtm6nFb4PkQtl7XLhTXvknSl/HLtDW68CCjQNrcX5r16iAX2o7KtiOw9GHJym675nAg3yM1/VHwd8L2quQu37ZkrMWHGKeC6S78zyweNwMHLjrFvkBSLgnYaF4se/LL0h02kBFW2z1JvL3z42v6D4+317BrM53y7XLRbN6VPO5aTNK3Y1gEe7P4KP1Tv1XW1k7in9m+8Tsw94FF0sVzOHbM96JVhFd65HPhXCV87UOZcr7cnpABQmGhq90bmUg7ZXjWZZGwW9FVl9vWQr93xdaBhqozL24ysNcuTOIMHYh57wGd/jFDprFBVO0HJM2Wc0/D34c907Jpng8xdIN/dyIJO9t5SrnBbnJx2O4Zg2frg1k8MRsehfslnn6p5dbAxUFlILnMj/rGOpbYhm9bnGbb6Yqpg4FHRXbZMaeblHIePbfC8DpkZLCssVshPd4kqZWR0Fe3BCAo/nhjfKsKAPBqf6uRPXlXPWKpce/NJCZ8Ptgb07D75xuzvP+OC0PZznGoICi2jeJ7PjC/Dg7YWHZT1sttTq1MIv+uPJzuU8M3OT4a2IoHiDxQ4k80x9oyPuw7pRLTEgDqBfUezPCGHHufYKJFUeryIflGd1ojCFXjzGgVcjRVd1xc6JWplPbIdMWw4NfvG6BbmeBUdQX7HI6t4hSl/8I7ZJOFqQ+y2dqfgEvB6KLqdFLqBEUAvtWrUAXXKVqjbCnfY3RW8qgTHtGJEXvcYatqFp/87BVKx3uPRv+cK/NPXM4vu/l1zdFEHh7e0CZBW0/HhXhAUqeIYn4Br3zBLBMHuoAl3qgfvjDbZBZMVGEImuZ7Y3q0U4WIT0jeZje8HVaicGMPL2uJk4kam8Xt/4FeHuC/kzwKJyYPjtEG7mZHDoAthGhFMn/LkEYKRHFRLdUD4iNECbkR4/adNZudqvA3xrFtBiDuVbxg4mTiaI74fahzE+lXZBqjxVkrRdcllvbRHqxQEHXanHb+IvaK3cNh6uyCgDmdDrFAm8ddrcOW3IjLLtIR6x1lPnupMPw807mvyxBy3OrcE/AmbMoHMdESp8PLg38KNBmi/zUUhja32Q1EjPcjbDxKvTn+P/nIDqJ/Usjal1WElt4PyHyLt7XjepGWPRnJkqRGtsIpgs7zR/Kqc4Sp48bJGP2bF42GOkpKGE0h+WC6TV/d6onK5HLhjaE1aef6rkD+UlH6mX1tbl3oDls6geaNzuadDoYodccm3p8za5exnP641I7/xspfdlg+dwYjl0PJSFh+94BvBS12YbQkdGkRnFA7xTmdhzIwZVPO4BpfWnKHc6eBP90aBr877ObZQA3aoyiYRoL9yvp7RPG6vwp7e2InmPjRm8U+OKQdSFHsUkYhFtUWRwyjk1ZHcoBXwuhLK8QpeLRlDsgE8e9b94ipBlDfeBoa398qypI74zCJqHNhje6+eqaIdjl0TduFPwFnYvd12jcG2XcddcpzoMQSEh0k/Ze4ZnQGnoHyZu3X//M1Co/W/GhhZKnG+jTlg3jVpz4RlzdKDWND/KAllPabwYO8eIjj6JgIT0qLLmRJjW9YC5rqgwcL5cTmwmvoJE4XuXmotDPEMuwH05qsmNOlTKr2Vl61IaWuIsGHjsvshK30VLM4O';
  const _INTEGRITY_HASH = '4b9d6ae39ab70b79b9ea82e6f38703e6cf61d8bd10e4b4ada27e0cd656cfeace';
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
