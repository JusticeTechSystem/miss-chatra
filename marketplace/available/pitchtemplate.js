// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D8kyfu8ix3E64oOaVk4o5Wn2vJaqSNoekTvjzHlVk2FJoj/X5LiZ1w6rW2rF8b6jmjfdV+WnP1D0LVQmWPKCDUTNLvYrw1cLjywvV1zpKkb+aLGyxEsWa0NRm4vvrYqineEXII0BfaOL8hlmCftj2OGmqoUS0wx8jJzYP9en2FnmMOf0ovmMrRERf4sbJuD0/+6U2as0OKrsuSRgDCCVdB+Ruf5J58q2gYk6k+G0PFDJC8kk7iED23xgurMeu1ARIE4M7cjqxH+/LuF2UwhooH2g6NVVKjJVIEftaCQIQqqtC8bnrNM9Y+VDnHLWMzo3O4SZyb5r+loUdnwIwdNKkwIjyX/aUn2AsIlG4y1hfukpm3IQveXUGJ5BwHTBY8jNSgeYbIdyXATxKKqjDqJTagIznDqXpryfqsGem8qyGV8Sovs4hqWxmrgRwPyJvNo0qnxBurrIceBoNyAp4ZEWQ9AfNw99lLBBS5ofA1weFjN1jr5qVxXWuSVPhRme8EzkSs8YTHsso352/nbOQYTAP6nOPgAuoda9o9flhY5VBuJTVPWXS0wigyrFMILtXgYmYwDFJv6YLEzkcJYTgmjh06/Zut82Ht88ddmOPhsbH+XVGM8iUxjClyH+pVHGQPbWF4TawtoZkwLspJLCPJBbjDBMBtnhuzXzrPiPveqV2mflpHv2OpaSqqjonq8NFr2dH2qENR/Mk3aOVTdiJgqnFgyU2AqeVlHQ6yup2CZLCEoVYLU+Z8r53bt35G4/Kv9wFbdtDgx3T1cEoe62duO455YYHndHm2EiCaBij/0eKRlsYDzWKeIqMpdQUS/81tuOl5ameoYNTI46T5QHGJ0txbky5OJJj633WKkJnC+gp80mgBIqte7dPSzzC14EA3PA6m3A8dKCd6/MstfNqq5O6zL/8DBXCprRakb26qb9XaNqWBUssGC5ZOct60n4Pk0i8Q5LGyP8fjLYdKq6yNKUeOotfvpIQpHJ8/Klsv4xQJiqcZpBVrXVX8q9KIsoAfhV1g1gK+QEnba1dz/MJ8Zy7iGoAbCl36FMg69npaeyNJDJhKIfbngTnrl7nFBLuiR5X1zyI1bwSI1x43Z8zVh8u769sbqpthzTe+Ism+w1+DYt0M68mNsq9t52EvcJdD9tJPOxbjyT7t/KDGo5fIgGh2sMLQRzs+pwcPVzoqeYxtPNn5WDKUt/Qrz8/8STyLd0j+bisUkvusMggTlRVcOO0A==';const _IH='02fd23e5df7818d9a6b0d5b53eb94aca7e189f7f777f47162e9d417628d5bfa3';let _src;

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
