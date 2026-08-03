// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjHaF9Tqqt2QOlQulKCq5PT9rAntnlpWRL8SIQwnxFbUs1rxF09pP0VQt6ZyGYwHKMETC5Ux75Gjbt1vCNhdSB4GZwuaA6ZAPJ01J9mpdCEQx2g0sR4jXpwzEHDr5688XrtZNH9Au7s/l4MkgSqyY+Zdwx2um0QaogVQ5JZrYGuteUwWRxrAH5pw1aQV4e1IwtnaF7IiyLWBc/w4TlVGBCN2/gqxSAjl87/vFpO4LoC4yW4u2od9waFEwUuYPnc/cL/z8EQKUvVercWQoCU1X2pb6flNL/GncVjLDGeOGmbF6l9cP7O0j+gzLqHuOKTqoEnTG2Z1XiU5NRRXj2XzsxYyRPJEgNDCH8XC1Pv32nyucH1dyYK0h1Dv5HkmeL7esOdxGSYuvguZ0W56wlAdp03KaIe1uHk1XlR9yYk0tM1nhiUmYkdw/F/ejKMe7T8GtgxcbAk5ctE1McSLqb5SOetsZKUIgD1eJTotFBBYHAVBwT5UYGFHLzZYMZ5/LEjMjFBmi5GY2D/iWz4rRLj3K8LL+M2OLVOkTiEwhO2S9r0JduBbKeDpxA/sexZi5FkryB49x38DrTfGvPN6dG3bFf1izr4j/kg6josQNyx0XiOlt+YQZFf5ptoaz5agMtd5oiK0iNFebyng6bIGJanReV2Qquffly7c+CUZR9r0BSrl7k8QJ58WyaaqPZo957Y0s2A5OQMnonf7QOZ6O5+LUOgqGW/ff+xWaESocTvEiLnLUCMRvbjSugJsR5jWDcsp43q2tgFhq1PDoGX9ou5p8Xv8wM2sa2ASOVd1n2iEFga4Wtgk1+nG7mulzYCDdb02Bj7cF6VVwlEwpxms7inZ0M1ezkTlJl0b6M1McKFiK9uU1q50xAcNVI3NwmDgOHbsH9yixdimqrVwm9QTDJHHAIRzkNDqWR45DMy0Z4Ub9q1ee5txkTISRGmDK466JveF8UrFZcXBsQkjjtKp+2NxD/1/pG4wzlqSMC25/v9Ez6a723mKFaGIEYRyoL/HlTuWdy2WlPPq7DYU5lATJMF38VrYPcuWflUgOOYkyb+7UyEpwYv5v8m0jF7GgB60ae6wOTJSmnYL8z9YVWtdol9S4Th46lRA7u39l3P0KpXRWMydvjjpf4stj6Hv8HSFR/zQYT/RUmRV2i+Ie99wQw4OtZQNLOhGa/kThpad9R24zQo1GgyzuGX5mGqztQSVnMATDIms+7WOEZrryWSgudIprOdKW6JjCnpKo/Ya+/p4K7G+b0qFDxQP3GTs4Cxy+cNbphA2qab0CbWn64/bdZHfZ5Dd5SYjb5haRpAUW5uxjHTyH8nRUhUjTH3aWn9idc5iAMyti22qOirjXOlAJsBqVSqk/Kx5CoGFkIBqc=';const _IH='9dc0080ce87dbf0dcbd1742b3da6f93c9cd906ab955fddf7ef15690b0f82cc51';let _src;

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
