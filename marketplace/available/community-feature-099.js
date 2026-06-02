// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8+K9L2oFj9CL8Ia69I8NW4sABqNsvBjOOezl5CQExpLrZjLP4Xmx0CS+tnlggG9FTPybHM/f57mm4Z/5ENfEg/LSdrQuh9tIOuiqqlDPJuqqEAqVYyYCboPGub2kf+pHqE/HAvEaMNlakUFHhHCtWKLFZ9zCgPHetCTAsWK8nUnXvfOCTK04dABX+wWGuHVj/HAjA+qJZaPLOmhUnU5kgsByZoVX5tYW+s3QPwYh6unqVaH/7jC872i6n+l96mxEnJGK6mpEgq1zQWKSLAMs3jw+OtPM8Dd7Bh3hIf6gGmM9Wcr0OmkqaiIXgdnfU1pOKe4WYt0i/Rgq7cphCEvPW1i6RSwvRcAmD/zmxqmZkBkiUDPT08MdrkcYn3tO50Mjh5HdixxIhiMTrWn/VXt9zU0H0Zi2FfRICfqi1CxvgKQ5YjmoY59u8BatbyIXrtNGAzJbx7pDa5Ma0zHAr9usWRhoBtzpXdOb9uI/S4BrYeQTESGwvZrAP/6wKixrE+pZbSb11HhyZrkiVhdGVLzFeI+7Xe4ZLWx065PQvN9l3I+0pG5Eto27T9wuuTPJI7FXh7xjQVvOK4WMDI71zH+19EFFlMGd9xkhHH3gkz8Yk8zUqMQrJAIoWyki6rChdzbZ/DdeIv9DIvH6Ib8t4S3VbY/uAuDHjr9k9HN0ORLvufrjG4Dfbtup3BSX2EAzepjTwzwo8nkB9nKjBsp3BCVtW4Aggd0itF4AYfntFMu3a6Kn1ak=';const _IH='6074784a9282321fab4d2d20ab8d51ccebe110797d0dc4af71d37fcadcbd02bb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
