// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6VrIccz1H7+tNaBpzpo9Eb9XGzGwQ7uxDAvlN/L6mqfTsGX1UoQOmLnozkT23ANqWAuOazp7XUtwmNyaog5odG5AQPk6V6UdM6qXyVJ1CQW87C0lt8x3xbHDEYSWXS4J2yyGHPq2fRofShIenu1MvLtZAmyPegQxaCR+DgDz6tJuI07uX7q7SaML4XMOCyfQYalcPb0Yf9wNmbiihAhcQd7vzPzB29VSeo/XZqbS5XtvMG25jwIchwmiAosWC+Gp6ko+cYrQUfW/VQYc0OuppfAaKn/Fl00eOxU5qyaKdJx4w+TcxKQSRETK5EaSu0YLtTbAoagjAf/E0DTlagnTeiuVtzwwawvAxCCWZzBe/YbbbDAhMlQFI0ST5sh4w6GiddxPr4joWyL7q8YDamxFwC8fL/oigTYY+rbPsM1qEQogkwtM7YCJOWaZNyvmBfVnMijUtc0UD9nqCNrEFZrjPUsC//ve+7+SxcQaaTHnQWjz4Gn8nT3psdY9ImQ+lG+38UyzOytjC1H7MBSl81gUq4XfsL4ijMoRFtTIWHISagBiArsZs/+jtQRjcnkUUj3sLUiMpdllk5rLd6FVmif+f5KEhi9wMAZbdAXFkkFCKZAmQv2vgLiP1kTuc59TOIFMluZYEr8nBnxBBINhlTUterv4q3BTO6kO+vEEnCGBfcC2HS1+8WZownbhC3q57rW2kAl9IzPi5s7Rcm9m4s95OW3ZDu9ajF+YOh3QuFh92fIwgySOFeDy9tvNXUR2RO9N0oI/SUefrMHEzlxaP6C3yraf3WiR4RiNbBL8cpVndqDCmy/HobeFj1Rn0coiCq8GPZH2do7IDiwci6KBoN62q53qMjsvS3D+Ymkmq5LTOt/vovXUgj0sr7fqu4LwJGtykGnhLsNHnCBGwrSBOneLLbW8tlyPMNtOeqO6RlI6Z19vzSeGAv6AxQLUZK1BskJ6Lt45+G0T3k9IDfI2JRFv30/TtpVqmpe5HPZptEAIVFYYYgc7te5QpzLgb7BY2GFn4jUlEMI5z50FvHOw4R7H6Y/2UsSpMwsYmsMJI++P9cc7Z+iMxd3u6kQMY6gNWo2aXsWuhJYL1hTu9OtMDg/zcSiPuDdX36l2gKkCjWVzigbQOA42T7nfp3T6WLfieaLNkDFbhuejSinGT2wIkbKhRrWTtAOb+RFJcZaNPKDmotwm5ZtvwP+iP75EOQQ/FzESUF9FjPiiAgz68x5hE8slB+FErfahwHs4La1aI8rBPzTlrV65afO6rC/+rHsH0qeTxm8CxkAmy+ZQJuWbaeKauRK9Y+0Fjq767ahqPnMxtA4RrPsqS5IR0f1H0DI2PUqjnQ0ySp5hbouv6KKfLiiIE76+YjnJpRzGVWL+SyaZLjOL1A1nHQT+VGaVDDh64A1XWo7VhWgTZ34V9yVuECw4FJF6NAGYEVxq+4qT7wYeiVBjZQeghgS5+b0fHO4g2IMoT/zZ5q8lgw0Xkd8FfjP30sYbXM9JongYy+R4qWJzKwG8pMLNfeB+GwzDdtG7vtGaaM06i9gxJsMrPUbdDatwqfgWirrkL5/fGNN4Lx2DrG/b0ZB0c3z7+aV/5PoNNaWLAjI7zfxaCpP/CJdO1d2bRvAVd74h0Uut6vJ5INh391eWhSnu6AfnLjHGIimccmwdy7VXhTZoUbNYf/EX/QslJUkIubPxwqRp3Q+t8MnMIfdsk52iYRT50/o9M22VGDPRSnVYMC8vNYpaNJ4j/bTnJ15n+LMySBtr1c74s7EGprRWQR+eaq4dCmiGN88F2iZGJs8NKEP/N+5Mp3yyyYN3lPPvaA69sVFZZol8EnVG4g==';
  const _INTEGRITY_HASH = '74a2c27b88a59f76aa978a37b5283ecc4c98ba373807ce9382dadbb184f77b9a';
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
