// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0wlb0LOkSrEqyOXhvoWzCmqqpK36sjvCYkJZS25tpGXjGF3f3XbMiwEEV7l/beA9b00cESOhJFhAlQM0i1MKy5OOAP1xDx3ZskVHW98incFIbRsjhq545oaU39GV4z00+16q2raoF1Ocp+WzNBG7/A2wLeJuqwXfEfl+3ODmoNhnitaCkWauAiAYU5brRSMAJ9JvPOSCkHPuSmZO6mFfTh7k5aRMeLyOZ8pzyVOhXTmKTV7K1Xl+lBK2szUqmxmm8toF9ZI/NPO7l6bP9LlB5Uuw131AgvLwpZeFEtSI44aABSv9Ol476Wc85zewTKcWBWGpRyShYrcsCXk/qo4/xuMMlns7J6GAIlfKE/HykUHJDN452bQsr/HVmkCBYSZdGeRWHZSBAgfVie283hqGkdVmhRLdYK5Uy3AiBg9albqrCnNPI283DZkJq4tvn+NyU5XpIaTkkKUuYBCs+jFf6xZppwIz+6fz/k+Tv7IEUpJ+sPIjvb0eHAWlpaKtPrdmRr2X0sYpJzZHPrF6NnwaEMGZpSU83IBzd54yo4U/YyP0KfiK1fUNWoJT2M+l+cdqSH6cTW9Dl3Xlur1e00+NoWGqdBz5RylZclr+KcNnptuWG4WkTyPKqnYG3jhzjvzKtMDBR1CZ+1oT/I6m+v4yBN2CEqM89wZrDAnGmkXCK2hSy+Xb5CH/mrN8mYCAiv/FDr2o2prh3QIlQJ6HVxLiZbAhF35/RQ4AGmywMfkPgpth4M5mskIKuC6WDe21CWqTDhEnpBOrZ2iOE12vvGiaZtb2VwgdjAwaJtM2iisrQ8LfoQK5UPScibezp4OXQeSonj8vbLAxTGFS9kalow3hWocTZ3q6TLahRSTAUJ8lEGqIbukA9NS7m4kjnq0Ww7IVqbsGmGFEQJAs0UbdlI5yl0pShE8mWVxWw5XsJ/8taBcUZf9UHxLg64IWK0ZOD64FUkEqc/7vZwpu1m/gDnEwKV8arRLvwdUBs8IsaYMjG4=';const _IH='8e755718b84abff05732e040ffd26c735d4ad6422afd89597cdf512baba3d47d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
