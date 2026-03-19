// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:03:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TWhKhrg7RdOIdty2bb5pvqrwnawz5PoCqfqyfroDzX3SZHQKvIkkp/GXHnHnyQdgDZoksZICXlYQlMLV22S3Qn6jS60IjkYa09ixr0A0Ur4OHc55vmBMd2rQuJmMI47WM/vUQyI+gz13mWN8g7Wb8YwSrYO5JQQ5MqUCOdmhQOhU53d3TXylnVmgkJQrBmXo6APZp5iYFnTgYkRJnjP+LC/UrxtIoOwDBaPhM4ZnY5dhk5O44ma/+fsqKvIdPppsDh/xfa/GOnPCHYcH5WqWsAQpM+xiN5fx8FaoZ4Wp5iJN8BiBcD0IaR7Ksmem/Jwf9+1z+mtxcp7SWNFaQILBNrMSv7Q5jaE/TLUst0DxJSXNl2DsyIEdUSRaqed5IVBX/59YBvCyY9DY+hg1L93xgKugFaXGX1LoGlVoxEJ+rpWZnADlr/VEeYS8bf1qZtKQIkccht1f65MCRh5ywhAhEjoIagHRdiq6WJH1Y2yhRL2IZT/UGqfcM3JnfsIT5DpoVwQUnda/+1YxFtIAn4xpuoq13kt10ev4+eNw5RjOi3CXXg2tuDnQb4iAw7f8A3LVS8p5N5UxXXjTGPZF8I2Fz8n2awHs3wn61b7josyr7+kodeT4CirlVsaapSdPCLangDGkQFdBZg35jho0iMVhEow66nGpNBUSDetWh4T3vdgcR6da1FsHQT3BYwzAzDX6aj07HWLhOuwQW3JlIXZJ8oNEcsRN8PBB8XZVGskj6NM7/Zb43le1le/Odr85R6Kux6xNSuiFI80LUdnk5oGLSclzKNg4/a2s0KNGs8XuVmGpMEE22fzsXfyR7zwAris/wQ7MDar9hnNmgdOJtyOqt1+kfF3h5Zit76yx1a9qUIpHQA3sB213e7/HefcNOx0MkqcthKqo0ztrLWDMJdfLoshZt74G0zuqECCku8As+d53/2/PquuCl4dZWSHYZfbCLRinUmKAsOyG3ge5gZjnbTUS/+68vvsGtIdnVo0v3BbkAvroY3go94IwCPJFUWU6a9QG4j52FRuFXVuKvc1Wxe2xN/dJyBfMqDWIXml9vQU/6fSbBe8LhtRHzgJa9+ZB/0/0WzEjpOBeH5jbzQQ66iiKAvLW/CSvehH2YlJnXhLdXxiBP/O8OmvteUfGL0sWFnt+HCtDTxO6BFWlgisaFlbGSYuNaKOXyDULIC9ZMHNc4jVw+jEZ+pTv1hNu2VismKO7L9AJ4VuGfz4y/TbxneBWPbDZAgiGFhtFAbdAwT207eigGTc6DV8iw7NAf3k3okerR2RVzmgy7duhKJPjiGc2cnPP+uvjrci/kuFa78xWjT5tmffglqE/Kqiv7fEk44veuCHjEhej9Kw8+hIOoYKcECV4VniHPLTX43mfsPColMYj11HlJ4LRPfx5XZQXol8dzvG5pVluhg/P';
  const _INTEGRITY_HASH = '1af26d2dd8a1a90510b8c827ac83b2e1a33fcf7a4ac6bf047f9000029a5db41b';
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
