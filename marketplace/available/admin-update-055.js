// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LMAU9LCYnXyCFJDkEafSONm8zr87Q91WrjnYwjI2mtdjeKJThRFJc49CysPqf6L4FcyXn/cnoBD48M/4mLezKZiVhN+p9n1LdRSCSYsbRuV/aMyrSG6MizTkiie2VNyFffVYSOuw+ORgKPJtr1a4veaC9rXBSQvDLg3dwmrtwZNJ3fatRy+kXq0zTp/egHuaeYZDNBNU/sHDgKf1rZOo88Rc4JfVa7uXxc7qccuYLSGKKDwjj/fhHB3NRMDnXJ2rSw3AVgUlMik7+MrU/3fG9bGczH9o3okJHHRYBBf4nKcNaZUMVAoOaZ/ZnW/DzRPK6xYxFvKU0DcRZHgvDx9EvAKo7tPBeccItyI0j/SdJvUTCirC9XEKPa5/SsNzKUaxUEs0s6feKDo9oFOp8L1WzN+uteAlhyrMSurO2aDwQNa2hgTG0J8pZJ8pO9HeLTMBd3o4IiHElQELqivY4yZi9Xmpau+rwJ/9PtGX08CgHK2yGTXnZyO75Qq8P2Yo86vjGxJt3GyjoBnoTg/TS/UyuVhNtYdCIjKzFBUVFaqR2VFxiaVLQm4T0t9zzN0Fj4L9DgaayJsXBv4whBNWZRlQ3KEUmCcuSO7DzqWhalhkghFPqtvIFWFPmtp5/tFnFn3L10BurrEFe4B3tlpSsI6bQLIvh/8WZSZ1MvxlZRn49yRV3X0y1OFFKd2ih7TDA7O8K0acNU1ZszOlepEy3qAiq3mr9oN/WhDUx60o5bu4cB3sglKye1d2fDiaqr8DbuCUSDZvbK4DPccUOhumF9B2MWD6rpyiovmUr6cRmWZM3ZBXN5eY90lgwCJrIHUWXJ7HvXpDWR/oBuoQAdiLhqNjPDXskOGDwG3OVHbxWzHhXeMHmFoZzrNkn38Zp7/RAeTJMBIqoO0+gYuENk64bppqHSwb1Elcj6lxPsCEk9H/SKOvYiscHaX1+IrRLlRzQSni8ItAhATIkE8aX0zttYyeMGosOP729dlwsP9BURkUt38xc1Y+YcLVG7nxLa6k';
  const _INTEGRITY_HASH = '2f968498c03b4c4a083f5872daa9b2881ee27dd737f7272761e0c139c7934c41';
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
