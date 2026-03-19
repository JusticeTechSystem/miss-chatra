// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'l2VW9LIat6748ffA87Rf2popNljf/aTBQu/oNRXnumEV5Vx07HCHnV4lVuwf21DubO/IyxY53Qj1pB1Eq4kZj5JAQ9zpbGBM0eXNUhYnnJw4c4DWurpbTN8BYDvQnRJhEsf4Iu/VEHWYZDEhaKaH/eD/2oMdmN0WxvLR4FmBhs/rZWDcsbc6zql2fVSp3tYhaioRDvRovwdiCnxHKnKetjRGkyjiPram25+cXKf5LGotHKAEvUtGZuzb2TIB8jp9RTECiDK+XHTfhB8AmYp4/35Js3vCffSTLTFUZchQN/HUoIvkvkftIwRJMj7eFsoPtWKC4KgQnXUMqL5+VMWGNzeQRmp+0kVKEKrsSNuJpc+mdI8ouhRHpoSVkVJlCILTfVWWjPywHQkRhR7GEDI9iAcnb+NuZKO/PQPWb4lsLu+GKYQhGos6b75oldaUIPhesEtSyJ2bsNamYr/5iEH6afM5H/YnR8speV75PcAc1QpOAyVnlSdH8SMCSZXDvrw1K/iFjFo4oSESTFVNuxjb0nW45hx7pVm57PvxY3oP1tfU+mfelTQVGtStClW88qLEKOCWCuz7aF712jqqBvFxI+cgSbw6ml3qQF8RQL8bbLTmkVaw+H9gCFDge6AdoXLE+NinhsthDqd5QnawLjWfZLK1Fdg8hKtyNKHTid4183moSmbomaITY0PVOzgJSFIIw9ICvSvV6ZJBraaNsXbzjmj0kTzs7krMJUHLxWDbJCugU1pOuMnzt4rJoZITnE6tahEmkr7UdFng8WxipFolCKbTcyT8Wi/n35QHEVKekr3zCQA9Jqwig+Xp4mdHof45rkUSDYxlGSXKbER/hsK1WRYzEvGLGv5Y8ZVHj3NpCa2W5+8hs1AzEwedf9d2mivWvufL6qVaEa2rIVGvA734YKa0xoq+vFv8YM3+7W3lfXjAT7db9OrjY2NK1KtvEA+gr4JZ+UGj2BkgjLZZt9BOckFy0kh8E9h3EDwvPy1pEtWtwfSxG8SPtswypCxVk+OWmU6WaG/Z+VVndikUHhtmsyCzesEAC3RwObBDhRCaAnzb0zmOu602zC7lbSMQyXS4Jc3OIGxQ2EY5e7JNUlhJG6x/6T2V7lE1r2NVMF2o7S67SChPsZsPzKln9Z7AJyXD5/K9mmP/ot2xmfd8BbZCHYfvtkIkFIKjAcH01PgX6pQ08x4SdOAfKNi4fio3QjTN';
  const _INTEGRITY_HASH = 'd77b4e3cf2d29029f063e4af9c3eb9f354a744aa5a3263efaaa851cb96246266';
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
