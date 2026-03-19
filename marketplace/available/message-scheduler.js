// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'H1C8ORc7ESKiewhO6hIPZ4jVlVKz9FsydI0bC67h+B+ZeMJpwtngCIQkFKKSsDt6RX/53VgoSGdsXJqlRKn2NF76h23rdKsWFPqRKdESZKhZ5wTY3euRj8khL5CKTBA6/7pd31Q5GI/gZmnH5V54KUnsIfrwdOtaWre7XUA1BB1j1bX4L7GgDet8CDOOLRl1HL895ZcRSWkMiSWaMHarWCPiuuw6DxQyUVddmQefoLrpPsOcqclliBZ7JIfaqXwnaoFZQhkaN3XMp501hONLiyNzRj3fvjRa6c8TDxB4ifPLgSFDBmO5rkQJ9yhAZQjCZZGkHBX+wAbIIHNkpSQuExLK6AbGXXaIYjavCIFEpAiqG/dbqPUcXEbPbBiKzySrIkdm6I7K0j7NVcK0wkYuu/DIkSmQ9P8HDbbFyr/DY0xx7k4+CsXfnrqHutE/z7YYAJrRAR3unZHEovpBT1ACua/TTUCaHlfG2Dw4SzEv8WAqwveCU2BLFzL1Qxxbi55HLIs8E1ktROG/JyGvnbTTw9lBOdbMNqlqdVVKwmTjg9ZbKCPOJJIgfPREF2Dvvf48iL+HdO8faVUBOV0lwHjOnCHb82mAjYLcNGnnSMcGBmd086biMnRAqYYd6V85kB4baZgc0iRKxyGObFEO3HNTaVDH6um727jLbzZbhjysUBnVoUnVxqJ0sAViJPZ8Ndet/JeYyP4rUeBnUfJ89BtR8Ees6hREDbTmoBGPhHuH9MkY89vQIiLyHpflRKPZBuwnpnNH68VrTY873aNsgCRCa0dh+PjNR5kR1PS6OZDbUx1d/32mR98CopfISPgeLKRKBJUeGu6v+StSWaTspJcyArI8M1hZx/OwC93v3hgEX90jOIRl7iYFE1jeX9RIo+yihRdUxn1B/G6c7WJ3sF8b0q1u5kjX3JVVhRaLtT673mquMF24k9p14jxnSR5eF/ReiKK+OiqG/+C1qKAdLCF5JHp080dRs3SGsENk4pc7Yd/TU+ojdil32mHNQdLH1LWlB+Wd4s3Oyzr5f8KluSKXMJ9JoWn/+f7gYox6fQvZF/GcwwgK17dUcUUI4TKg8JedIX3h6lI9Ut3+uiAY72t/A0OW3jgXpvx4SbNM30uOgTdN/gM+9JlT2Uqh2SYJz61lytsIQMxi3cXGe8jtk0QWIeBYpqfPzlbnAhYe0LbGTEHO9U1YDoRI33xYJMqcZsGb8/pAedx/dUVZBUTidwgg7STQY/kBnf6K1JHfGKcGDeDLzqyhNRlKsM/3tJ4TxaeVaGHannr1QlT49nfTKY/zEEnl7+HJzz8DusRKsPxrMLA4/0s9q+tooBW8G/45C8YvK6hXp46mo11eEt3BgTInBMrgBmsTo6g/MxRJHXl9v3/pbH5LcYmz';
  const _INTEGRITY_HASH = 'afb225ae68385845f86ccd9f697b0cd9a1b2e4a854e342084a2c99dc25049540';
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
