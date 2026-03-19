// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pdw4ylkb8qhfGHfraRYUI3wt9mGaUn8HuUVCl5JICkxJxlrfWnw04uLFYLia5wmZqcKE51jBK9iqXiMwTF9Gg0IqO2n1FHNFNZDQDuKhCdvVRSbziv7uvLZDpQJco/DsmDltbr+c4iMBDbz8rAc+QxbwB2Ju3ZnTtY19a3K1KMsBblLTeF8KzN94inLhyWhvaeG1STVmXyWLV+Wo/PY4DnDPKsDXI94tHBLQbyMQ+6wAQi0cqrF3DOHX6QLaui0oSyLW7OmkinLIxEhoepDPgxACztbRbFsb2IEF83jaC6J9zx/acWimI5V0SJdOb56yaAaz2TxoA0bduSGuQuXMM6XpfsHSKUGL0EFkmiuVBHQvBL4CcUw2kgil09DgWmm0zWNdYSYkgWPha6Ar8BwlBzkhmRyZGPJAUX2RB5o1J64MPqOPgIbLhcukWJ75CvoDJ6Antge7Kg/LRObN32gzUEhz5uFy5en8tNNCiiLPIMCqzI3gzfMRvw/RrMA0IA5zcSiUaYhuawHRQVV78ZSMV5UFOMLwOH8bVzhbcS3CuT3zbt0RDFs1+B30jDL6y91ajDNGFOkmMCYCZLFwpJ2uwZhaoLgHyH2G8cAxJh9BPbJ707IXBHZK8SsYElX5h1ivTObxui+sJG+k9r3iYrZuruMP6JTYpakyYAePL/AMO29lMCmomUCdqhLGcKS2uOIQ27ocbUW2eG2wAZby6+ecasIXVscpbUqDbU/1l5ZReUQqk7CbdhaliMvlmckCO54ZdGgAnTVzRUvwrQqRBZDZooRd+/zELiFMwQ0IpyJG6m2jPmThpsT19M13QF9IuG7KkLkJLa97FRbQi543J1hC9ltXX49hh68N5RjDpYeK2F/QaiAn5XUYx5dLrV/fdr+3RSkeaPZtxl4YwOjdjP1ZeG+4QILzmd0RQCkCJ+Cm6njmzChczKWjoYwTLJaBDFvn6GR6RZVCi2KriCIH26q++OGAzT2a/C/a8sbBrOOY65nQQEzLFyS8S3BVLZ1T797F2g==';
  const _INTEGRITY_HASH = 'b36a874393ae11b37667a5629aa8e9995dd187ee4778d16ab7967c71b29fbffe';
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
