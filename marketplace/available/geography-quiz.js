// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TTESEKeqh3lh4oMNwndxvS6Pn+amn8F2UNS988j0TqiswTUgJzOQvI+MDNc4dTjlKkc4ZzQw3wOHKgkbryWIeYV/lqvhAaou23TEyhTDdB7DSSjM8GKa+mNDFVEEjucSKeLg49JHGLE8tUyq66FIP1vkeEDkqfJRuguHbC9G53v/xNrnrsYW7nbufVwOqsXS2tb8mgzbdj7rGblQWFiPLjyEmzj3hHrBTZ5os7LQPxAXijj005SBQfgLgIZenr+P9wHwhvYwEij5+T/8d400gWTlIRxxXiV8rfaW9Zhrtxkd0zKSaIamMNVJyzBtF6TBqYkKn9EiE2MkgkodDFk7H6bxtDNSGY6evU5tE8/S+MJvMK7jezeR9r8BbFUtDKz3uggou9nasPzXZpjhVLiQdleziWE8C25sovypFs425FFqu98V+TGqG9q8UZ1NhH51N5NxW3+F76kB7gdJTnAOWa04GzKMIuN4LBbx3OYdBDYT1825SXEfHuoUHVSuRAkxldD/vm+3r9db8gIfGpH4V58EvI5F+vcSNQFitos/0dpx+RUBNEzj4ePdI98gAgNpYw0McPWFxoiu6VcQ2BdMddKknBxQyistX+tkBFvajOnJQ2TCNcIWYEjxp1EUsnj2kKiF/mPQ3X8/PngTak05kauig98qMj00bjkPeyk7R5WhBG6Hqe1KqhV5XrmeWsicpcEdMFvdRk/RK4+rWJzhy9sdz4PeURJuWR6BXvc0xe5IKsusVTJ5u9kOhLSG+GNPnbfHxylEqLAx2okTU1bNOszt6e7Ka30ID41U/MdlDnC4W3SEeh/Yk5OKlyFqF6kgfoL9hIcFSQ8tnm9CY9LJOS0ndkgsXv38svW4Km78FT48xxK3ESjQPpVWY9pdmv1LeC00OCec+HYELOzngfvNmNXU6j/aAxJ+ssYAQyOryYMs0xoGGCXf71Y5jIhh+KcxpuT7ZtVruPdHJfeWcxBIakJWvNbVAPDLNGoMNgaU4pr5vtmnWQ6TyrLuGjJjQ/gmmnSCLCKtM/obPQtHFoQlXaoVLtbRNkNSKAbfZwODJzab5xNefGjpXvoIFZ6FC1XTP4GMADPjm0YqHe38tm7WnM/Kl/q+dqsZoPd/iM6Ra2cODZh/l2ZOm+r+/AKaYcpHhn26FTFmbKSLKiwKh2aOBG6WlkCI54GGDfYSGtZ4r6sG8anAwSrM7x91uMkHDIREmkxzDdmtn5Dsn9ob6YnDVM6Su0BICvUpxS74YfvTAYRED2DskGazZ4/UP2d1ayynAd5FtkA7UIRe9v4SEM8cyBQyB+FeX3dcZjjx2pOYux06rgnAX5jowzu7IOv7w9KEmk4B8yW3dDAgNkuoWrYFA9ckmWkn7yPXlh2Fh1Epo0dJc4eegHZKLEhGmlePvoIDD20FChRM5C0sqifpnrejhFRBnIugGTG15WDAUjSKRl1Vkfji9qISWlhdEuayViNK3+best41iGcOOu9twFd9HZa0z7Ay2zya6LlHk+9oN+4brXrcw3P6aSVUugI/+W0+OuIjHpoVFdREmS2LO3y7hPBATBp5cCjRZxFKxM1oh0cmOv7mQSGvepSSqln9tw0/EiEhfXg=';
  const _INTEGRITY_HASH = '26df6546404afe0f98f92df7dcc5f9e909ea9fe5873b9221332350dfbed660b1';
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
