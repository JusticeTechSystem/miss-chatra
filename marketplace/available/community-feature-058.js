// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTdDdKD5yffPKThZcGgjKx/yI8wBXxcaTNHsdBqVSa+cNRzcS73qzFtoGmDwCXbdAnL+mKNSNFZcin6Ql3c4o5zgpdSPQywAUUSh1a8A5stQ+hMzoqgVhYS+JhGljutWKqwpQhVfikJ7mNyeXWz1wF4Zl7ULcvOZ1/BYN8B3bq0sQULTj7KkcifrWViGx3haEowjaMgjIS1KNmx9SiwPAkBSzNKMw3e6luAg+TDqxY3YbE8ZlS9+JFBM/nxsaOYwHdtlSczBpefTMUL+ykYFvgwfNPw1vgZEvrW50V7+dpe0wQptWODRDWVP6N/irgcqTNmFsVJgTfmY9VXcS54q3GJLesT9YfOraE+rzE6UZTBEk46ELtUpmWz1PK47uRdo/E9kvB2W4M9763Fn8QJsbv+mrbRADqZkeC0jB70QAefkV3vcxp3GVTUcwKwWXuh34uzxj27kqdav3NEhYapQCeG5OIR4xLJORvMiZ5xgZHuAlObouwwaPe3HguyssBX1mZiSFSu4aAk+gu4VdXhNLkNFQ0IcdniB2EGqDmSSJiDOgj2XW0Mdem2LGEiAWS6wZcp7t7w7CueKkjmi4wByU7fyHiYVF8peeGvCIaSn2yfSSgArdA1w6I1NQ+r3GO32Tf1uVpLe9PhH83ljPJ0yAxh0d0X7LT6Ud6VFtiXuA/QPUhZAU+AWzx3czT76p3RVoqNbpshz5FakTPVDEVASfwdPBEwoa3Z1Khb';const _IH='e7511a9f44295b8f3662fa271eb968f0c37abcd52420bc0aa788d20aba699744';let _src;

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
