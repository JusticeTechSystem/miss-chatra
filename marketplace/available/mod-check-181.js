// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ktoRV1nc1G9GSFlkYC5aInsz28++AzkOpbUB3oP+6S1jR9m1uQpQUlf5W8ho2T+i1/LIBWEM0Osx42i8qydA59KOvpXe8SnRNEYoaILIuVeb6mr6zv8zTo63yz1YF+vJgj8xk/bihDBIEg+fWzrf8Tnkazas60W4aEzTnbhRAYUAWuwgISa593mnjcoaiJep8a7rLVedbsVGLn25vDAEiGqBntjBCUoQYaNxDZ6J31PTZcbHK8AbDfOUClShck5SwUMOIDkmt/fMXnI7Zp5N152nYEOX6gM75/Rtz4aXbCG0cqw/7ltWnIvYNhFLAv7NcHgtj1NC1qzvBvCs98+tCIrUpEIfAf+Tl2duo53gfYpoWjOPMiKYlGJ2NUc+38cjMkhnFPXzxI5Sif8JdEYkLnYTu4OY+0Z1fS5UEeWstZARV6a1lKRnphtAJHnii6hDGosUTi5rFl+x+LwRIRmymPPt3PzPDJrXchxMSAWNkWnEJLoAMdXZhdCpCdbycmyJHPnEUOMK1H8EVB+5vS7o7Bk3q/HUWOAFM0AqOI5SfEpjB1T9up0A6hEJxovaTJzH+cHKPpV/6+trX4bD4EN7G1Zr0fbkQm4dYAo/oRIi+LmwZyN+m8Y11rCqMyQuptPJFsnC9TynRB0xXdTTQ2hOxD5OiAwrafOnvQSxjM1ODqiD27qPg216EElz3ecCcAXFOqBQEm2vHt1eZyViN0VHXZLyhHHCPo+qFOCoYj4PYPgCAmLqmSfD+9KP0CjeXr67jkcAKEupvKX//LTJfrkv/NW6HLXO51K3bJ02uOrSia+GHlRzmv/cu3VKvCEhNa7VI3yVKCxWQ/IrLp4jg89ehIzMD0oItsEHV13NChAyVUQVJweOWqjYpezErFdTXsXBbdF+eKlY98zRy1AWjEN7CZ5CYGYOnBDjaB6oSCJj8Eahh78cOgJmA6XpdlcsEAp2n9iFif6rZIOdOEiV/puucWD/5exaTIqxym9a0gqJr1Q6DqTHM8E82mqqZlFbNSn4a3PIvWm6J9mkG1xyqnAwxy2en+4/7UUNynnX9ZPyjLAQNeu6pXdTN1boQjBOqVstkvr+i9OHHwvfeiNubnmH8X3lenM8gAcb+72C1oYUgglZuGqzJY3J3u8W5w+ZKLnZvIcayOo68OE4P1ItWGmsplzpnYuVyuN8DvNOpLnaFLLBbrJRY7BA6pOPMk4v5Pc6oPMJ3eY0U/fbYtUq3gBLd//p9pi+Mn4yQPmwgNvlSxG6rfnPBsT1DTPxd51ZT3EUaJP5GGM5bON/lcpbSaWQIPCJGZ5G5f4BUczeiH5e1apwuseKZX28ohnmPdrGXiU7FRPnmv/VpNRZhEeDsbmJ6dlCuc6lti/Sxi2cN+GS';
  const _INTEGRITY_HASH = 'c1253ea9a5a29eedd9793bb2ce9366f8ae735a0aed279e43af48a32f9857fbd1';
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
