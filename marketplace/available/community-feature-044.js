// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgdWP80SUK4vtkB8yfg2RChCvHx9usTx5q26/8NxysGVs3rKiL17DA+V3BvdBYmnTBzDuzf17T/4PNLObHOT8E806Fm0IHq49KcPEL9uqhAYSGmuEFjFscgip03UbGJF3efu7EfgkJH3RpGot4mn9ErbsEhWnVWJeXU9Pe0p4dLfXV3iXBJ8Z6SLpeIaTuuyQTRlCuYDydFMb1sEgDXvG1vQg9iE26F9KLU2RVeot6++9KjfvOhjH+EqY++6S+BHcN9wy5zUHM7FNpAp0HhuTEmmSGB53oqNX2+oTi2kq47+rq7nCmAQQPDJeqys6AfEGaHXtpbsgeyVfRf5owAyYoDUxAcHMHF7EoZqFKvpKIlydJBoPOBYdgEO+0l4SSz5eLii97+KrBqksFWUiB9ido+B0VhJcyxz+Bp5LDW43D6Ko3PJLE71z8J9NBfc9CfPCFon9SvYS8CCqpPPa7LEdY+9pc5uf75BOSh1eP8AdCGDlCvEF4c3sKhOtMDVGIzycO+IFqW9qDGS97EU4fb9XqoD3VZyAWYIQeSXlMvRVAg05OLiM8QENjJOY2Q0OBqnCxUSBMs87m3KVcTqXTWEq0h3wyqpurZobw5CQxscqGQcaYYiAOftrl+JFzmtDh8QuaJmdb88vsigsjOAPJ6F+y4Q1hVlJbKtyHY/1V0zudd3iM6Ehr2Xrg1gdAFhBn+5OPQ5K3pozvg1hn9GPQ9wVdkkgpZd6SpcoKynov/d48KX5Z';const _IH='db4f7ce9d97a2de87beb7aaa993dc9574d7560a2b4c77fc34f878db8b3a2b6fd';let _src;

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
