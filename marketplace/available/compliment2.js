// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AjyMWnGpnwCt3hDoMw5SZTMtoRHhqnHWOP9yg3ixkV3mKAWEPiEuwlZpeMAZU39QjmdAxVgTEzASd/B8LPgZQpTbp4haFgLbM4vewt3FYf2We6KEAiGBSYA/f7+M0/QlO3mFOfPZa8J13g87+7k0o+DZNSHqStfWij4NrW8jCbLa0+xK78wmxv6sWAlqh2wNJH+rIqyHg2dnDrih/18aABWBuItlj68BRG6uspPFXFN1iMe0/g3jVLd9YiVSRfrlu+PZD6rafJbEvQDDwKWwPpioQCoQVnJEsbA8wduuZ+AtS6isGobdvmPIfgVVeg1ihO0tTReEjoMD5Z47TMvSGkXAkAxUHgzJfebpjaGDc3CCM9EQbmsQYCaIvxnlK/3RIFVf63hvNfbz4fJCAXfqEftG2i85fKbJAvDMlMm3FwXVkAn9FwP0r9tgDYyCYF5/960Fi/jLT6O79RE9fxVOwRUUzrJIlDNqosW5AE9TXSpqyN+6OrIQYYu5jRgMH77RVTH+cnm9jnvGC8IvkxjCMYmLe3/tAj0CiHHptpvpKcJD09xxKnK186Lzmh97DiR+AAnuP8Bago5S8m64by0U4cTIYOqCw5FlrFjmaBMHpd18zsmTisot1MYlZwOKwyEsyy54UiDc1sbpQLxxe+Ae613GVLYKKv3D9zyEijHZMdDcnEzkidCru2KAUQztKG1Lgvudk4FWwJZxQozfIL9sai24Fbr6Ed+ykmRsbbt7bzS49e0/3bwpoLydIRhk0UgS7u6WejpHs9GNOLE5/zth0dSO+iTez5xN6Xa+YS+4PEsj9lJkL1cp3fDEiMeAZ3VOxE619opA3w9h0hF1c90zQIV6ojEVWGGNdj1g4IKvJMTAlZmrv9hmlxGs6ajML4jhLNjXi6UuXvukgntjFUP5GI4H2qtbjH5RmK2ZmKOXlfmoMbUu0/wXFX7B2cfDEwn4nChJxnDwDs5JRmSlAuXVns1wlOI83bDkHkIOii/lZvIxqB84hv/9k22Szz9pwpj6nZe7KtIxMLMYhWoNL2EBUQMAFr+N7qgIw8048BsZ+zV5P2GteYr1FhrtqoRlOK+wvWu/wYYycsbVtz0mXH99yfWVXNF6MzlwgCD+s3wOE7MVzk8VSkZ8X5V82Y6KC8ffvYJ3ATRBPDnpdX1H7orLV/uLMyfsxXGzj+BQRlg7ps8TDR94tuBB8k2aRWAiroxblBg3jT8q8YRi2FmLbEIdWEtk+lr5';const _IH='8bc753de1d37d03efa143f50d5123732d0d0dc5d7b164433b7f606b0d4e15f31';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
