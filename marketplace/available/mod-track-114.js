// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dzB/AsvO4JrXc8qe2+kaHOBS0g65oBJ8M/su9COBUTT01G8ANOLeywj38JA2BocxASNyX+4iosxJvsDXeCDUxpWY2iQ8tGxbntwD8J6ZkZpPgV7iBFktpr5otbAr3hH2nJZ46sY4tcWgy3G0GFV+STW8/w1jYdNwgPJD/dAYLSU+yL5wBb9SxyZYU1cgHm7HxDvCVqme6CwzqN7fhZ6FBu6KN3507QBWWiVbKIHvdroxFpfgtoEyQNXiDetvTUOOYaOKFUZ4fXPB4Q2eHhbYJlG3PlsLT1QQDZrh+WJVWOtDcZ2kZzRv/4322RMQdjClWzP0x3y8CDXZlXkXeqv7IKgmgmSTvwPe+9ToC3EiJTlouwyF4GaFrnu9rNyTc500SVEMe5TrE/d9EgqrcGkCBn9U+tf1v1K53FIEHkXP/sLJ6C/IlRg2+mfaGvYOW+8pH5QF6rQuGJKTSH1azHAwlkOSKclOWfN72bWD56x+OfoFKDP/PC+ZTurss8j6wLvxoN8QnkgcoIqASNnapMfe3+YWR/V4y7awxgFjV/g7Z37dX5gRfGHYtjG6vV8IJ2G6fjQrbaQVFMxhaFy88VitsH2vJwdGvDUG3JL77QUj9VqGA6J6jkGcvRACOcs0bTzJU2S++AwbI8rl8PcSaGlHT8wXg/omp9gqQ/KD/Z6IYjWytL6M+LCYB/U8WcSWiibaYmXe97PDDlZIQSJpN1EJ4edv3odsFkHRATYD9sPXtsI81a4f7C+uIVQoFjdtXA64oaRgwwdQZO3QPL1vL32Hz5kYnpad2jp7BdQqmSQsPGUmae6Ua/Y8L+rwWBiSnCXrCP436b752GXneTlxyoB7p2wEdYwDXVf0TWlg2U11F0idN+tijyTH/IVtSfpsm+a4NT+odj/7Z3xD/lRiv6Vkdh3+cXbmSr2rQBpkENTlguUP1SFTonwj1I2W9RKAwo4HZP9FSlcntVGARzk2Ie9QNiSejQSPP1XkQVK3cdPFqYXPVad/SQsrP6WUUZqNgR5iZ2KAoSrUWpu+4gwPr1g4e7s2XsRxwiTBCHSBYz1u+tPWL0+ZjrKd0mo4+pB8dt+WrTv0CIvYk1ogrIHoUj8f6vNd7zHWo2lIeQQJqE6MD9VfI8ezCgkWLnBrzSYH7Pes+a6XFBy6qny5/KNizUzBLBCtboCOc6en8f4JAB2px6N6Ef1hkh5wGvuzzEpo04sa2C6nbm/TF7a9D7n6L+6iY36YuwJ54I++Vta1ETd/G2MPyAW1JVBC85a3fo1wmREjZbpV4Mn/QYa1hVb5XjitD4j+KPg4bOWsJcH3U+vkDg9dZXY1F9z+WSuh+QYGPLSjXvyjeizpDsI/l8NsgrvRZyX5FeXw1JMg3+8AtGxn';
  const _INTEGRITY_HASH = 'c382c9426e0e172c67b1dd37d34ec595ba34bde2f6d52d3fceba6c7516cd9142';
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
