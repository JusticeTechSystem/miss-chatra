// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRSa4ZzSmZEnoMusSfXPYbDVQA+QukCvKSS/BlHD/gJKIxEB6jZQxKLjosEj16bBUvsfmN3rs5zYUS7VGuLJzhpazsdRcw0YtaE64qa99Eff2FAAjY3rVxDdeX+2FFXfCr873FCMyuSWURDu3tDEiWQDv1K5MxTLvXaCMCT080YSSdQojygAxKfqNToLWk+VCKe704yhz/wzBZHgoVAm8I9ougQa+qJq71yG2DGQCtkqH8jiocwy7RLFhb0Zl1DIPmX8kTcl/KmflzhHnchoeMzcVXYWm/LPjurb8BUkDu39TnN3tJUtYYpcxmpGfJlryBz5crHEmdUbipNWoq1vypDLVYe5jLsGd71y/yf5EhPBobLD8aMeRAcDNcI9BMJi8JiYZA19fl4Xahd0hxp/+Ht3GQrH8sl5YWAQ5aQv5CFQbjeXWuzmhGUdS6GMKTjlbedbT/g6DSxn7xTi07vCvWlBv3ASEXNF1ckQFczneXRc5D9giXLKadrH+7JA2qQ7zU47MuXTmG5RB9m6rL4gZZkE8ww0NRCn9IqRXlPTak4imug4OcxNYIW09Fkw7JWnw2SY4F6m7/H0LNGBoip4xioHsT15KOX2DflOpVv6OVSs2scGD7M9JRekoV/a4ZzZDfC+cvnSCCqB1MaFmbJVKiwmrueKQGJcEO9ePEpYzP38xRqVi+E/FzYhiTB0eOe5eDKBUWpHscxP4mQY1XrhhswYsmsX5HTZMuFeygA8tpZ7YwKfufRqAw8geDjo/+ekMXjnXt0QV9w2Rl0mcH6uBWPgdDq5n5lY8D6DmBN2vB/lzYHJCmbNcwlEy+mAIMms4pNAG1T+6SslAB15Yj96OMZgYy0LnO3SXTCXot5GjB7COZ9tsZEO0k0V4Ttv2cbZ0WC8oAOhCgVmQhNOHgQAC5F7TKxfAIUH4z1n9vOXTbH79LJJsBleTlR5YVCxFJahwAhMFtPajmrOQo1OPbBSJuXO3NXGdNRPdJVMcyFUyGbXHdZxKL9W3YREogN774jRyqy78lCJvuZDT0rEHEy1deVzMkoeczi/vOYzKSNZ2aB/aJh/Y0nf0Kmd9h7FXCQjcAwMwvuuvirQVx0qACAgLZFL8W1dL1ikngXIWg8Bvzx8hx3rZ4w43KfX/znHua6X7q8g42O9ipkfyWgO+jb0A2VJikhqjASrUV8qnVgh27K6khbVhWViiIttKrK0ZJZfbPOdMAXhrhTDCTcfgFrURIg8Ba69W4OAwhWIjb7di0J+MXNvWMcZt1KxJv8m1z1OrviQv6vDKBd/2ns0MypAsh6KS513pQuuy0pYm0IdM+KqOxwoIF6YfZEmpXac6eu1RY13xmF87+gbpi65OqLlnjFFEiGNwpM6cureNgRcePAfXXrhRs+1NZM';const _IH='ca0b60f217f8fbfe2389ba83a677dc4ec0137a1d6ae28e1012a0ee914b4a6049';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
