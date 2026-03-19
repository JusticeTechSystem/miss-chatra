// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3nLUTShkAo2mnLhGQYqCE8ufABHmn42loKmNPUMGlwctc/k5joU+4Y223XUdIDCldhZ9Hcu3mdHHfP/WCDn0wGwcJPNAiuzpug8JaOlEO5IgitelWQzRJfeJP2O5hZODjtYh8Fi1auE6kR7E8xQ7YztYe9RWeOEve8Zt/i7WBgwC9zi87iYTZU+MhhnaZzZIJIypYOhVGXj/Fs0BQJVs+FqmsagVCCElbXX3fnp6uqXS4Avdl3jgSYmIyqJvH6pWYFQBX2Bd3BfVSKMqRIQpSPdD1IYa2Z7nOv080d4aKrt4b9mezC1fVXcg6rweFTKpMnoOlElKyphnGmrxAQ/ybRLHJaV3qce95x0FZuzT+AwxhO0vzpvkMg3dOdnkpTI0kwhima07JTU7B1Vrb8Auih3PtS2i+shEiwkrXXoMy5JAbKPG89BAcmFyfHUQWpOOUKPuDHsq5qbc9a9TweMK/zG8txhL8x0F1M3eixjIUu3b3dscwnPpXqBhd6mzJEu+sgeXJWusVmryJ/wa77eCYgixlilEqfY02ETREizHm5sI89OS1Aa9nB8VaYnpp8efvmzATbN1dBt+pl1nNq+B4ASjWDzcDtmxj7PiAweBf/jJIcDTnbyHkOdH42LofL7HZ+pKV8CFovUbs6ZYuXD1fJqm3VhlWu/NXSNwFJKsuC6X4JHodMalwEV46kBLkjQRHegH5p+ZIwFOwxLwbe3We2wLXuZU03P9I2qQzTmTJcuj0C04QJpvjRhLzVU7JibN7S3Sks8b18x/rNRNomH9BQzX5/R8HEiqWrbmXrVTroqvXIaxzK9apD4JCjDPiiHhKrQjVoVxrhR2PHsAACu/s3RdcVosZ2BOVANDpTF/saUCslkgeZjVYhAhhbvWIcL3Wa/VtrxChMMK0prt6jgNt3OFvjArpzTdKWUlb1wiY/TDKlG37kvF3RmWcdbhwAIADFAonRGjt1WlQQMVUy83lnrCgCjArjY9OJnRgVe/RNdQkfKnNVkVn0PAtnFnoBrv5h0oD2wml3LbTaJxnff6o71npzq9hYUaF2J6OsiIzpWU26sshLGpdu7627zcyzmAJMIiDrmi8D+u4JfWgO/wOvx+KUjwUQYOyaWPHRjdvRVgad3VxzUWCtP++VBU3OjHv1eZygpDWjd4wDw78vsmDxhSc1/hYXYaVM1iqyIJFjxa/ElL5Q==';
  const _INTEGRITY_HASH = 'ec0590de8f681b6d74bfdbdbfa24d723e8dfea5fe927ba738c22729be3ba2a4e';
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
