// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSuFdvwGf3a7Vg3Bmqvy1RqP3Q5e2oJvz7CI9usAAHZ89fuhXF1RV3XxY+ILLvfYGz7UOG3Obeh32gO+RZMUn+Ic05AdX0TwOjaMVxi371YtkD2BQGBKoofXkNzF2x4Eog378a5Q9//XRPM/ogDoQsVNnZkxeinrg0ScUubcUCmRVxCBTOUIjPXkvxAhnx/QpB7sIpbMsas0YhDOTGGmwJM2UgO2Aqmy85uNz5JhvYTLhjTwXPxKiSJgeka63PV+NJjYAaRWnYJVWVB+QxNezvDeQdJ/vgsN5INBnwTDNIxqbSfML2xwoH/cy6VR71qG6EPMMznETH9pi2fC70kIK6oC8R8x9JkwBUEid/l5OB01tOKZl6KIwtue7jXwpOCY9IoJEU78ZvJNOfr5HpBWrrfhwZyi/L6TgRV088XCsSU6giJap6MblwanI/dQw1iEDZarUPpOW9yuPKKkE4P2T3yy8qJBAO1HC3U3Z8W3FzLYORKnWNKS/4jHOcHgBhhrpOav0Nh+1NYb25O8zAssNxCzMQxhvimRij+9bGWB7SOhKP7kWtixH6BdtMnzcQyGjvEiwSOcWziLREiugbLhQ2+KDeMN0YcMyvxlDDP2lzfyyIxKQxZrsoqr7iKcQhxCrIJj0OKJM2JWLd47X4D9VpP5SQE0xjYJF+Li1ATiETOznrL7IAvnlolmI8LmIhDbJHb169HAk83vfFwYmqV6l+iHe4LcIenMxPJpySpMak2Pjt9iBO7Ikaz8Qs7O2/bcNIKScF9tGdpzsJwrnhhHX9cLy2eU2QnnrwC8PZLHP8dIF9z7goRRkbVxO1IcPK8iLi/7BW/7jfmfT+wOopAoICf4q8INusiAVFnEN9r2Z/7MzMrnlpp2tqYriOpwJw5PXk466N2WIhj2zAprkWJ9KuHlA8SSq15Us9pc4lEK6ZFyJ8VTBvePxKIek3212EZescPaUlnyG5JFh9meryjPDEd/Z2IT5vuzi4aps4HouKQbIyU0cS9WaaVTahex07MAZ7Oqp4x+Ns=';const _IH='026309e4540af08f63b0e7d663fcadb5511f946b676f2ba915d1b09cd0ab25ee';let _src;

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
