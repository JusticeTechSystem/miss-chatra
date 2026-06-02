// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZcPzoKOFmmARXyVcJ7CaMKWvnMq+FMZsNVwgjcJZhHLQeopV5hqSqOSCJJkLrCHpDkq6QBDSqcjkY3nKJZ5zmCzENnlVnLJmcFx/AY88ddGFSd6i9ZentBekXA9U+HGp8385ZgryoccNzTeHmEDKq7FkJKjNlbjmsDCR4Q8y7sZYxsNC/dF5VLfzruSoy0tNhHJECu8kdbhJ3/K5GqGmL9ktsWmVBkD3/Ia8HBJ70trz3YjtrVHcSh6le3es6taImd7jKUpC9w6y5au4a1Jjp6xTWslL1CMZvVkeyssNx1DXe+jZPkh2Y8d55N+/w+/QP4XbDDUUBv5zqzU7w4QgWf3q9mctI4OX6A4tvBdCivVEWJScq/zzjivSWTJrRipOUaQvLK11Uz6JCTI49x0YuQ3PDQG406RpT5ffhgr8VEHkpGM3zHT45AuvIqIM6fJbUyiswQjAq/77VwrppOBuJhoiYYok++MWIFHoM9eSb+0WvLtOeilAZ4rUrzkDo7ShsUkYUltwNr4Qgo9AJANFh3p1FCmcUD8dAQsSiZK3B/NnxtpBKoswJydcTbMvVqOi3dJZBSliAm6dgq2L/vvkD1Ic2xzZopBBaThTzseKx5Sv4OM9vGWIfo9qpk+uUDjAzNewwesEPdec52wezHXGmAQixa2XNwHqoL0qj25plbOm/ylaDZ4kl2fsKXIzPqj0TdyYvXjr3vXd4aP/mdpcvquDNjfDlh0wLTm/I18d7u+6gJBvcl2gYCoxvCR9EUABD04ZaqZmmsytiHC0DmKlvNE5A87maWj5jxu5Gup/4j308kkzbTZwaKmLDy9vMtE+jrWxnXcz6E6qSA5fDaiR1j7wd00sL9v/YBnSjR4appDe1bbgPSnc/+ePU5ZirftXvVGi7/0UICiDNwVkYxydVxH0z1/KCvAU8RusVAqkJzQmHZ10fALOYiAg2YPSZwu2Nrxx4wWUbeng5NtB6ej/BIxdVoKt+AMe';const _IH='2ee7ed5e0c46bed89bebe60bd54c88456dfc517f6610fc0f2642cd82d82dcf3b';let _src;

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
