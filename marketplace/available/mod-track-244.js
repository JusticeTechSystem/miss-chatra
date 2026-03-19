// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dKgYcZyb0lzHeu9xINeu8HCgPRzEvKGj2Na0eM2Vz/dciKM7rJsgYCcDjre72RiJBSNBDWsnpcMUQRBBtcgjmYcsrlX0BC2TGoq92Yj3FjO8PUM17qyaj3FxJ67it/Y2HxyRHtdi7exYaoj7GUBCE4pEapu95GdGtAIUt9suR5RGWjVK/xY6357Mb7As4nfUbYlfMA0tfx66P8lDZY80a+RdQ0Y3NyMx6ygrQTl3cNlevHUIvVRRwGes4oOxp1qvZP20pKw4tp75Upm0315igInU39XLiK7PYdmNRsBMf/OMzFFvsJETpCbulT1oiAWf9UQL2fJFowtvGesTEsCtVP9O0CYe3hSx1r5JY8tC881Tn8LEjduwi69ozd6zsxwcWpfxPPs08T/2jAk0gvlSQo1LYCI2c0u3tYVBot7fGrox9MgpV9BVagjjO/1emvmaxfvyxsWCthqrRHhoPPp3qR4v6mDTH2EbOEWa7p3LWF/g9RizgxqrqsdlCzjRd2bMCSyo8CHSBkoz5XHBwUFGoldHzruAg5pYfr9CpIIVANI8NCOMtYHQMYAwiNXtWeOm3gckWvyEMTGOaR1RzFKwGgfowalhTVRkWSlQFPN+wgaxuam2geUl8+5tn/VacB2QoIJV9J+4l1QNW6keb9u0lOcx0oPFl/m+9tnKjNN4UhVIkxwhJkOi5zpEWUzTbrXPqU1CyqkuxgcjCIbFGQwQZM7nUQhP8QI5tj8Nm4TO/c5i3XRyuYd9qwyQQ44znW+jyxS21NJSmn8qCeVuuMr79Knm5ivrInDdofz74/YrV7kEf/JN5ljWHz74JhvYmwUDpe1VCj/ACqoPnMXHR5fAEzl452c3xKMoYwGOtqSSdxvngmGlCBoW11XwX2C0/ATzxnUWTEtHw1JUMotNcPUE5MN/4hLlBafbNwl+7Ar1+VvWIZDRPmMi3i0iLRb39bBcwScpUvqLwzmYHM1sb5OZafA/1H4H5OkI3533GHWrGtqH/YPgG/Vr6tK32eg9ZiOSyb46OG3SxsSMpvfl0eixhtyasafkU7z4xSoOUh8y7lfY7uN1Wc6ZoauVemn4PdoV94MnscycLX21N+Nz6ke5fTxCGUw18G0IHBDEhaAwDCw3q0rJMRxoOzKu+zJ4dFzGZ2vDfNS3EiPkcuyQ8PbGyZiYErBdkwI7xo1L7tJ0PKxv2vi9R5NxTUXXvAfXixBl9CX1qcx/SXfMrFVxG0Vk+u95tMeKePcVgW4k1ugv1WUW1IdoUbhYIEzkcBhBiPelw/4fdF5yOWielzW86iZLmzho3LHSztZANCIVDH5ugrCpgTbbL2FCmCcRNSn3+QEzNeE+sKwiNfhxUXaOcV5fBfROlroK/rkMiqNU1lYz';
  const _INTEGRITY_HASH = '362e4e371100acffb5def808baa1294552f95c43a89f20f8a94b37bfe6bdabe3';
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
