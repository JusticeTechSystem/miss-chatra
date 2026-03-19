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

  const _b64            = 'dS3IJtgtkBPeY9IsgcVlBEDRNEUSwfCXG7Jn/vHwHcogpUSsLU9yt2HxR1rpjbV8BKhn/3DdRWkY2EOPkxqjfjE6iXqdXO3P0X7TCwWjVNDomgz07LO8W9C4Fe2g4qIVj6DNn0dwlWGSnM610jxVjaOPPTNyNAS+luVBHNObzskSQqn3a6Ya1PbSRHp6LEaVq45l7mSRy5MxHmFHo/PaGf/SktWvd0VyqpyT/sEzMI8ZK5OEG/TPmNmk7+v2FeF1jXrSU9tM/tGbBDeZFBOTpnnLM3DYT/Hw1LgX/ea57FXHcjJ7STqO4kYXjWBSHhROqeSSx3JaRzjLWYz6zgw5sV0PJcohpCsJBEKuJ9sTaZYWKjn1G3XeSJ+U4OS1tL/qnQMy1mKGA79QkaZ3WIEYMlYlkNcrsKu69CkdD6I3G69AzDT1k5lqyjQFUmj96PYbnvP99ukoFl+9ETOZsK79IFZooFWurkddl6Au571neTZFxA3BHhxk262Y8MZ7Swec7c/REk+l7Xnwl1NAa+faZV8pdLoswU71QxtJC0A6XE4YdF2DMJzFzuZcG5d4z9fhOgRqsLTt6YuRSUH1eruMvFbAdWNzxJC8iR4VrUI8Fmyz4JfWbgsVPFTZ4OjyiMCD8+oB7P+qEiPE4OljrktPb0myUwzVPJw8euxt/bvrITJGNjurfZIgOopwm5Y4kL4mfiveozVmVvspvyhEvOf2Q1TCS3GVWX/XMNDqia1YO7SoCkVtRmyDSue4rryLzFOP7E6jWjNfNY1u+F9BCe3ui5/hxlTBa3P6R+H+qdU4pkob/aculbmOqKdCJXBPBS2IhOfmqQU9GOKpsRSpZ1FLKxTzHbzBwfHkw0N3hfvhwfPRwusu7eme8S5HlsgaWh6MoI4/XqmsdmtBER961VulJ5t3wpr8eB9Hu+OVLXPbbkJsaBPADLEmv/Gxl/904DwFUWx2BZRGTBbDC8V2/5HYjOBBPdXzOc4piqQZi61HJct0o8n6hsJ+tWwnN10v67OkFu8r0Z7OxkjvOlEryXx6JDLs25/dcsuEJ1q8bk6p0ju53LqzJ9733FbfOLB9N36arfVahsB18CjJOApwl0uhHoUeYuTWbVWn/5QQhHzF825GwHF/c5r/sDOT20N5UMr+G3aTrz5qpixKbvTZnhHrsgSw4zASOwhbDRqQ0jLKeghsWjQQPUdQ+ztnk/0wBumUzQ03YNaA887fvl5qAM57s3ODdbYCy4G5VPsVwsgN4EjS9N8BrmRX1Txu5wa6oo4naJ8xSUn2G9F4r60RLYcoeqU70YVkTptaGq0boGK+SMshvxUXGdjMJcipDOrXclWwhVhzIkzO7c6Hhsq5rpo4tiMk4QyEc9AyFxF3sBLfyiX4eU4IWJVmkwhmyEtMaxgfTtFtIE73bdW3CR2JGX2dgs+/F6DQFNavrQ7FTuwToB5lE16GWzRvTA==';
  const _INTEGRITY_HASH = '568d6924ecc556dc84049ad7825be6960445df096747dc6c1431127704417254';
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
