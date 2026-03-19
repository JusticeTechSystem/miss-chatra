// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HMYMZ7zCCRYE372qocYwjaDP38/r2EIAg6v15e0PHCU+1dh+o5Wcypevai/SzTIsDDUV3eWVjq/USJVlMh30eDqU8n7TjYDCKgXKQ6Ba/hRp7RAuffo9p/jFxnsONih9Jd9Y3P+omsYeRa4WqCKbsAjBKfhTxilJeoX0ArYUB6r/3n+KgoSAqvkXeQXtKCB6CPjmRStzPp75o2XyvfdY7gfWyd86nUix+2mcKXAunoCVHK3Zj/FJdA4C4gXjp09eUDOzSvX4xLcabwkE7HvO8ZgAxFyTKxZWwSwP+GXLXKfVolay3ZRUPN2gGTCP5aXWPUnSF1ln46o75Lgx5scy+sW3mKPa9vP3IZUH0yRAuIlfJXYTnqQqpsrU+fYiUcmqW7QxSJff3GsDSK+KoDyq7tuFg8O+zp79wlhwJlBBOBWiOzV1PhprOk7VHcing0klaq8D3CJo3w6Z20VNW7csL9ym3pdiqx3ZfTyr3TBLwnCS8bu+GwR6M0xRQtiMnLLVb8idM7+MzPXwU3rrVi1SagZzlR/0Js/K/Ql/03voEWIQci3M5y4MQvqRJyHc5Vzcg6OYZeuqqlVgcRhTelYJg1z7EP0ineICDzbi0+0zKUAY+oPBucISAbve1QyLj8dNhZODue4cfGy1GWnzKbbW/WYoDnqVmTRFWST9kXjepzBDRKWpBrK+8ZYGBX9eja7TOKS9TG1EFf1xSA4dDTh4NVlCfhDbEaSKm8WaNAokxYm08pb+SHsUcyaSe7xIj+I9eCjcWaBh4lE5yQ+/fhAcAy9n/kjhFx1kW2PMWo1kuNvuHI6oSHjQDXgaNJvkA2mQr25oxHaYNnI/Z4gtBrYLLBnzikKMa6CEPylf2TQKPF1ijGBs3oXrghCJPL1PX+5qPdf0Om+wI3hBavlJ4psYS6y5P/sOeO7R4netaVYbCDxC9LCHR57hL+qj/O5qRfPKAdEOTPS4QpNVIocXGvTHIk1/uLXOS6dM7Vw2l4nW6egmkc2p3+5xcCN3juQcR4btpiBgTMpUTzWDxXYVHa6qsbJEo2K8aPaWvLvuwL0fWLrWTodE/NkRky+T7Wdr+xtSb/ZWoY0YY3OXHgLVv3myen0RNxv59umXsgazA8SUAmZJttt5S8k4DoKNDXbGbXQBhuXOFe6QyliCDxk9nosVOGrFViv4xMf9eB4agK8NurIKDy0arzM05jvB2UHpVJId1dlEhJvU8efD';
  const _INTEGRITY_HASH = '22dc7ce94090e6b4839bac2845175a26874bd92418b651fdc38be443c3f0745e';
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
