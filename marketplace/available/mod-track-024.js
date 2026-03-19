// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'D7lWll1cWZDpc2GlOtXkzcSGZSeuj+NlXgplI8jttl0B/kyw7mbAQA2hZ0XufxM53rj3pZYYJcnzhaWE3RaM6qy7szzklw08dlLc6cbysaKpF4an0yd3YfzlJsj30rjhCep8uyHAlp/y+ujxCbLk1p90rKYpl4hVQlkNL1XP/SS/358K966ZvhDgUBaOvlEVAw4OQDPI6f4h+y/ORT1nmvhxGQPqXfkmlLdAf5x80SN0WIl2xYQ0MD8LvT2sp3P/QIX6iZLevSdDYcQpFOEy8InXmhKppix32CwAVQh1qnuSs1MmEt7bBgEE0xyCzS5hn6tpm4CuDFaCOJGav3QUNDHlG9/jUZdlM4+7uadIyglcvrp8oyZv7m9iOLc//Xwerib77cZgRlwd6Cg1pkr745eLjCV/O4e3VQLRV+PtcnYT9OzPFcaLW1gB1QylWO+3eO4bZA3YBxxYWpReyXkZUJUHt5gPjzY2LdvSOiVdTYoxvhQA0vRBmMnAmz2Izea9ItIPHVQWUk3JwpldMS6+nEYARmH3Xu+RTyqDY+RKofDAhlNxbYlV3+PIF9ZBwYR7PTNVaGQOKCM9frIgTnr4g1+0dwvIV7k8Ksg7IZulvX/qlHTmVulkT84+S5tDi56UZZy9wmqmwvF0Nrr8A6Wb4NS/4ChAWfqJetepfd3coqBMS0/hGRIhM8mFeS5t9SONKB3hoUTyJCqcOfM3H5wf4qn0pfqHUtjA4R2U2GMYZS7gFYDprJcTQnw3cJCEcspZgmkeu4i3ttp8b0uotcs4KqC65sFw3ackSdBCVAgp53EBqA2nrbXtWqnbTNxDx0YhfLgbKEl719JaRU790C/v2yMGvKDyD5/lhEJ/XtNXfy3xXs/FkP4dKAijLhxdiWLKmCAciUs/mn048CcGdtVylkLjLpeD6BIRcjoqzTMa+8drnyhOM1hG7neFs8r+aI8uHoD5aLR/j61Af6jVuzkcYndmXg0rAp+5FVMEMFGqSqkDX/uRxwJlVAhUKoqVPbRTDzfP+imA18lIk9yks7sFHLGBTfKY3Af3rENXxhofRTZjHB54eQ1JBQXrB44oHcO/2Y9Plou0RJwyeqGhZmhteL8+59RTUK+sGDw7T24MypngRH1e5YzXC0j8wyhcCqKBEiVQcCkZMYXKA13VivTI27udz2ZefhKi/s1GNYyEIbRqId+yFk2EK+cHX89SwMcWSjTfiM04kgJS3dc3HffiYmNq06SpwyVH4OgrhXOkMlz85g8wcA8P5FXG+nRIZ2JNC+Jh9P7dlsMC2iSDE97hh6WtQwS0j3DyUPMDn24qGgih86z0HTlkdznqJFqoJhv2F1D+ItGeysns4Sjg5L9Gguak8jJKHrd/TA==';
  const _INTEGRITY_HASH = '06ab8903efcf8a987229edf4c2c01411fd6380798be6a85867e1be0e94336cbf';
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
