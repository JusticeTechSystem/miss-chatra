// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4bjT6kGImdl2v3teXHpmZkCUyWZzuee5xM7AAwHQdB7cRoDVHQ3ghHYc5qVe0nwTJOH1/iOMkM1wY+d+eJHMEmtxKwjt+eFaVQDcXxJ4yIFLKlbaso+erp1Jw53O4O1hrmWpW+pI9vZfoslEfr9UgIhKDQHJtwmm45TzFvG7x/uiy5jDcx2s1J3MlJh9a/iKa2OZ9r2VSiM7Eck0dLiA11ArB31BHqAkpXpwbTEt48lVrioZ/xWMzOqF6Ok8m8M17wokxigCHNo98xAZmaEKS372hW1qzRGYnKZWGA9loi5MOWFzo7abg/+qvbT7SD8HrqcgGxKmGj5qnzH+ka/7EjFPbbS+xHcmKy634ir0o6AtfM2+FliBbrTKwD3vgY0NYtOGpv7DHuJw1nNDdWLuJ2eA7q3ChoszpfIDBMKhHEnsEnmZujo4e5LkF7ckLyJl1UcIYG7kjBdi3p9kRRAgN29e3y0fEMmKF7yRLnCwuZg6Q/HFgJOzJFhz9pzzvr0d2WQqUIuST48fMgb75PxX+Y7zWqBwjU6o1J6rVHCq4EH6/qgSfsAXPEaaLJlJwDBNwSXhc2cEf8aGmMyCGh5V+691Of2mu4NXQnlseWDB3h+kuOLoSOK0iy9CF1YSI5f5ccadALS8OlL93m74RWu1YM1GaFjt8+ENQ2jiuTX89K9fzk2mU4CdDqAxPKHzO5CI=';const _IH='45db1409b8a21656eecde20bce861408a80ec234df855b52878c2a3b39105e12';let _src;

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
