// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1S86pGgQBwrbrsRli5ErFVeuWo7bYkLfJ530z6gRpn/FwlulzXVvsW6Nytw5Og9TdZMhHeQpZR7OGn7bKNZkX6B1ubS9cmkN/dJWu80EFIUGPScksHwpNJZ5LjbjZD3/Rw2aZN3yWtjpqgGMbu3pSO7UlnrAAYp/loIQ+7MgH5SuiZHdKsNubh7GfyRykXqDkZL6HqxkJizbsOMcALL4T9qZ1qUkoSg/DhN9M29ikuExlffb/7boznQdvvSpbQziUH9+WFmebABqHqaiqykNSqteK7clcGS9V3DQEJAnRbjjtyKg/khfivnyOxyMsEBILabEu99+kYDjiBzupsZAEhn8K1meLmDoWXCD4LqRH9wG4BYRG22yicCHEeHQzPSMU2uNF/fh8OXhDJ8bB/2TOjv9yWvkepvH4JuOTAD+c9hn7K106PZG4RiO+pIfBMFP1BDkXhyfcUM+RcAkkX9VvoPm+455E6sPZfdT3c+ks1XjFVmVevPCxnIKLJQvVvtimrvtpOB9jYqe2duM4idwgOdFwWReLLl2M+bkPpr/dE8ZMwgPe/98V47aSosTWt5AJtUybD4fa4UDziIWwi+uzeQSSBzqWWsfOv33qwOb7PqqB5xBLHCmax086etLk9wX1ac01/BRdFSKnAhJKUzG7P4zBKNL8fbZSKjDBGbzJdlGIeFR/fbjgaxfcjA/JPxZWHRibbkt5F5WzKJs7tkDSVP5xenVYjMfAFyc6Dj6rhVSReEc7gwSN0CS74KHXQ1Kg54onnfzXr2TSZNAVUwey5DdbCT+lxSCWtX3aXjq/FsHfyQoiS1QUNxGqQVpRgPwmjz/fwRGWfGmQGlZAO8=';const _IH='39bf63a7e798dcce10ea5c5bf99484cc417928c5cd8d8d52d36d400f9c3c5d69';let _src;

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
