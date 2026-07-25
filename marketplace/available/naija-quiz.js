// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2MtXPmYwkjYJmPIeorzdY4F5V1TaTV6mnBkhx4N9JEg1CH+zG0TpqfsatW0IawyF13ULy88iX9DZzH2Kiap8up5sNAangEsU4kWknVR9agJ+4fcZtj8xKr2fyP23O3YHv2IFdJsvjuyXbJMms+M/wDpaY7/zOBehViERzfutIpY7Z6/KOiQoyojQ6mfykxAgltdmbUc87NhSPkBuDTpshs57u+T9EhVrk1lCFixGYiFCi5HJ0W9e7JndnoBggo24E3zNtyhhOuwX4NS/gub7AQlWm8UAIK4d0GLMN/HQUksWumDzsUTo/6bVhPynnrGM1Aq2zR1prKuu6fSmGJZxBQAJYbdGm2bxoek02hxm9LdBl22ie/rS7ubqlVp8VGTJZFk1zg7f5b0Mgowx5lYvbYtG1wrDudnZBYHvmkyiBRUZFTP8ctRK3kzCAcszH1zmGSLigIaQiCGh93OIV7eqSISky8EpLkfSMwLAlKELnOt0kHgZ7pHcquFIEwY3C0fKnBo3FVvCQZ2sTdbv45WVY6sST2Jzza+hWFvcDs303DnHT4Vy5YwDPCO2sbaxM9jKW2TfUlopEUvUICg==';const _IH='84b0a6bd886c75f851ed4b6014376af84b7a3b851ae6468038cd38aeb24241c6';let _src;

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
