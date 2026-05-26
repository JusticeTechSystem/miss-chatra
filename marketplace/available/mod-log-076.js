// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CV9pCMcFNelAl2JxuswDID0Ld6gICrDePXl2cU647y1hNZ1KvO3haxHg+nJGl2DPBkH6oIHh3ntO2RJCUZLTOoojNZaTSD40uUwpQGQVJT8d6pJE/fO0h69ERoDxUeAdpszAJQwCsL447CcV9QpAZ7nHBhdGxBLZK1a8LUXiqJqdt4Q0++8mo3x7EATCu//LqQzH8i26qiKgdNw2WGraBkxhujpBEE8rZ3KunDbSt6FJAYxkwC02m3RCQtxvjX+KDcVwIJCohxFyLtAH0JgBT3/pjJU2oFq05kxagATFQe66p/+oADL3VZ7iCvNANO5x7TgJHeHrDABCXDe3o7rRtvPRykCPDnjMoRFrWo3OR1SvqXgz4zByMuv5t/plR2e15AGzfHU/ghs/suaUCV1nbaowANpvUkTKcnGpHW/gZHdZ4QNDKK0mXW5ixAO0qxk9PgKwji8/6ZvzDTVax95LefwUDqdmO+0iHv9J3JRqajghLhI1Mcx9m/JSEjajXgW8Ue4D7yiw2RbFf8PA+ioY8+yHSi3ZVoJWPqMd0FsD8bAF54fx8MURNH3SeFv4yFN47GBytu+p1nAQxYKDB9n2Ejgvv7H5GuxHRcAZ6dwYqek/YZNY5FJrfNyl2VfWgPK/jZkpdtZvLrmk4uP/aRwh07Ov0GXFb9p5/sYGvdltYGnTnsoAfENre84yPkaLns+15oPIi3pY4TtH6AyGrVY/62f4RKlJsGWexxC3UfC6OsoB/WA5XrLEGpKuOYJzhxAU4lXzWdGEWqImu2hQ7oSfozJn5WVpJLHdPQRbZyui9NX9bPUS0HRmbkvVzhhDc7UY6akgXlZYVRF1R6PFPgZkch1+Z6L77pdu1C7h98ht3773QT06B0bbn4XkAYYsI+H3n+y9YZkxLXxfo7jHV9kmXpyKlzFAlIKl4dlldcpvgPhFuc09pyc+3SwlrzbTxpdwT+BBg+jy+WMCgWE13P57BuxXGrueaKlBP/m4X7jzG9SWhA67hrcPWBs561JOsZ3pXiiK4Ui89XhHhZBp9+aINamCdEHKLHezpT0R5sW9RgUkb39+fEF4ccIMkF75pjE0Qf8VZYdWlwowacvIvWbf+nntnX2gadCd/LkwjouJ5qIyQv2KSsQLP+XAiCPeU2W2yFi2xf+pm7pOdDeENcc3gvbr7XoUov4zNSmARItjSEbHnuKUsbhdZiZqAA8l2r56kWTy5/sCkxteFgTE4gHiHciBHiRUfdHHO0n8pWnGlVe50hqB7wgk0ckPYIguRE9ZSGVn8ialuGwChb34lghrbWj0rcMY4dx28NpRgoiyIBtxmGIoXu3qIjLGnKYLowXzBicU6DE=';const _IH='d0c5f20dd2af630ccb50eb1f93847b02ec5ac73bab6b72ef49caa20376ae0a46';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
