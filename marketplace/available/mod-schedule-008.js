// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2ChAxefBD810dTPRtCtRH++TE64ITpFMFRWSgAyc67jhprNhbeGthlkMdSQGn1xTdWYfk+9ifyzMt9DDNFT+AGurUkJEp8eO4HdcBsKuBAJSqAvZo3ATPflRg4xqgD9RmY2LDsRNiyyfj9uGtZ9sdlh1vfP6e3JT8Z+G2YAwMi0HveW4NxQzU3EM5P7iuwfV23exlCCvmsAimITPlFk/obOXMEGdtNMIOgyiG99sx0KqLvMbKAa2lzygah8vC3kr/6C93mmYMc5GhR3KQlYnucwAV9AeKyNL4jCwZmT0tPru1cGab2I+nyQC7sNptqR9jfJS+rzxbHQfoZ/ToX471pAKh6Hneue1TDMkwr/nJ6IaryugfGNfVxnuYhnCvry82CYzagVGuz3VPlA0Lw7ygeGbr14TRVaOZ2vj0m5sxhBR5vD3Beo3RPyc5ELYyifxCdH7Syy6ZzfIgdS6HKuKxwm5o8Iz10M1C7uP83y6q/qEJO9sTPP7CsXGMqqfOC6Ck+UQ0KQKpLfB+rGYPa9LA3aMyd5mykGdHL24NsEhPFIlmBYmj/YPGY7uK+xIGgqEGicE+MQp33kLRCU1U3Pi0icLMeIYI/EGZZtFa11t3PalP4nkS1g8R6XOc+2eNW+Grt1n1GxUn/Glxuc5TfhQGapbykf2lYvmn0crcnOS1r6CTschsu/DVplP7yxbKltOjwZ3t6mYu+5vsDzV2bsfLGB4WlezffUAoyf/5iGOjzoIBayRz7qA/IpZ7INIU0zPyQbtYpqc9za656LJ32d4IUeJlceUoNylQmB372EqiP0V1/HuQASceXmC23AY554SA5ZuEZ8h4S08ElPnePyXpkhIVCpI1NX9RuSuvq3BHbTSIjZz/V6TRoK03KGT84XxDpNUz8xE14QpQPm9+Anc5hryX/tQHEPabaiu1ngBJ9GvZpimbFIfUZ5nNS9dElgA+fDqZPROpIQR2jpYcVzF3G9BpHSFxL5hs06Sx+POZwx1Xe4FaWKO367yqq4Xvb7xhhaAfpTw2hQ95VcJoB/d0cq11TA6Mb1A2zPSZNiJET5fin+tDIxfuDUE3kGvyxhZgdhgRs1t3IsphZLDds60m9WZrEChxjQPdA2mZB42Hun/Eypcau1d+Tm78BSyVK4vEG/VzlEZYw8ltcVHVNbVN75No9peVwUQIqXBDgz69/J403U81zfQ4jIgu9TeqWEMoZaohbcEU+sBwKbluraJU4yH+UkRFgWnsHSLTv3eTmGm+ZRYUbLnz2ZUdiscd3kRa3W7lDb9o5WWAoySrvUSyWFHms7idfXfpPh29OruW527m2jSZG6rFMy6nKPnjSX+Eax1xJ43UrIFQd5WAs/EwipGH3T1rhezQQIhc+5iwxOB48bHw7oUqa7SGZWT3eTHYSI=';
  const _INTEGRITY_HASH = 'bffd774665b2168c25c49119d7d3c689e24f7575f4a78a10822a4f6edd94c1e3';
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
