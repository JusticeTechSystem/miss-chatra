// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8L2/JA0IRyDg1S1a5XLFPMG7NUam9Wu2FMfnfzqhZp7gvu+7Gpxf8IwVQT//gVueH2EApnDWLjfd63gzyqfTwB2h6OTDUmNahxgIi0gyL/0KHeavNGuIHnMDDivTEdU8OntzPIpgdZU4cnNOGxDXIGrFdL9MSMKQs+V4lwntTC0q988bqlLE34FSu46oT8iUodg8qWLKeQMzXau/AlrZ4U6m7HsIdPOegMiBSee0x0U6OR7P11RSOxsA5yekGToRu9SBX0WSKjXUX3nfGrbDImW71upoGJCiECcz/1mmgRIpqnZmGyYGHU7P1wiFe1/suZdVXuf01MhGbmY3ORXne66Zf713Pe2nPNs5UxyVig8iAbmlPGvEiQb08rESRIgLg4dxbW5fMWRy5pnXtYQnIspp2wrGAHKCbu0EBL33DtB8dpHAevng2KiMwrpbn7Yj4Pp82wCR+TjDkxPqUit77JnHc0k2Tr98FhGyQuj+2nfdJYNauYmvhW3pJoE2B5NhjGGJJQqV/qUVGHl+Jnkvwt+H94DR8bHmxgIC0+bTFVxAfJDndKdilC5mBYgob9eGyfBr/NA/vwWr9Qn/a4vH4rNtycww8ctANqCZtmjgBY6TBRwQ=';const _IH='0873c80347317132ca396c66fed684c6e0a2e294a170b8adb9e4987d480edbb7';let _src;

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
