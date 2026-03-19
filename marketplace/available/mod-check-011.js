// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'D3N6mXRipbjezhLDuBNYhFUKHsLvna9LwDh7vinjdix/bcuBUarixbTkzQ8yK9uRkV44g+ta+Tf9l83G1E+nLNRaaFWQ0vI9qBC2gSV92euOAEpzd40Y7EDrYFeD8e/IadlBNKfKB7mtdtndJCmEOnIy57osapnXM+dtDRsAvUXbtdfX7Ehl7/u8fZrc3qk6u1qfGlH9k51vN9wBGZj+qLtXy0NGcR5qmQrIMcNsV/Hsp3+NQV8whSDOQeIR7v6lVCT2mXibBu31Nzgxl+IuUwZSdRFKXsOkSBbyYieLir6LbAftSo42Cg0upR9GmZX+9fZdcBWrzF9B1n3d14cki7c6F49zKssW5tIHvOVWH948PUt2wimdhVK2tqb1cXcEesAAxIQboWw3KwmjK5zkp7uOXW9uOsrbhJSqZd9TXw0J+1lKukzIUBzeFYq97bKPb6E3E52mirGbUfrlV5dnDwAoNiJjHui2qt4UUTaMk1PI58B7s5x5HFjJsop71FV9vkh79Pepn/8CUURI+fWDQMEoz1IFC2Tx15omobvokfsLcC2Wtk1afz6kKNvsouCS/qxAqw3EKqkcE/Jqt30LY5XZwjIHtNw5HCHXouXLl/uppiHb6PJ27zh0dGaKzO/sjGHffnoMCOAi9yY7Mg/TwiKbaNqirKkF+CEAxArmqQ6ica4P/2kpENBx/9j3dD3xdEovDib/aOnyLe0emwX1NGTr/QUnBjeF24+0dyTUhgnwnn4XCfgEytQ905pz7Z6jiy0VviMJvFOtsIoVBy3Z/R1klMd9FjPBIY+JCRj3V61IkOIayL3DnHHfZM/rjq9kUNfE+eiT53XTHdpkw4d/eSyUJTZULWUnt0Bu4tFOkrZB3FBBptmlKiZZnHafWpfyZra6AVCMQgkmB4ZSm4vHWTLxb6OdFC/Iq6S493y7qt4ZsQejv7Ox23oqjRjebI03oISc/XpbEyh23TaHSv1sq514+aO4cN9s8r5HJYPq46H+0eE44Boz2fTeXhMpVNeY3PItAlWEsvowvUOAVny6nk1NqfyS8+fR931r0N7XMTQ+eOm622srBdnz9+hfKxlvOc/FUsxJ1tdu0NOEUVtDzYqpAotrJe9ZRyid6kpse4m39dIgBxD2WugebVqtoAQbwPMRoctY0M93WrCn4I3BkFHJuhXMqv0j3oa0PgsScmf7iOcwys4QrdkzDXHctQaLNCgWPwP4Qj3m9VQ3EbJvldaJuyWgu0SQAlyO3M1YXm9lmTD1hXU6QzdlGLK7Dj/0rD5CGSz7jUeKcOXGmwyCoYv6Z4ZAS9eXiQht1h/z4InRrr7toq4czFlYuCOtnQ/Ipq2D+2kmX61qmI9xILu4ktPZb6NiiWjKSA==';
  const _INTEGRITY_HASH = '5e94534797ad71f3e731abbaa5919dc49db482bc9f9db111207cd53aa4ca6275';
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
