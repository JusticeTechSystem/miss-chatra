// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtSXjkFjlBM0UzvE30VuO9PQG/McaHlSFE0rpIJ/Qd90BPFVKYn4mgmK6tgi139Tvs+YMoSWuYC7unYxBOx6V5QHc42UTJuurdcwsbg41XSoqCRKibSqSUeD5/XpiKLMjiykyA1VhzORUud6dTC4IwyOVI7NQRLpFsJ/YFsPU02viF0dCt3xS/lLveRTRGqg5VEZfYvLMqV7e9XxnhjxaivJ5V8UfkuMpQkp0uQCpU0V3YiWIJ621GV3woQryJIGBOvmd5PhbJA76bYz4lTvph4KcqpagmipEsZX4sDyW+3IwBW1ggCdpsg2vZxFq7SJRidKM4iUFHd3UjGYxiADJPnsqu9YBEe9HKoxyYyZxbGNNKd7oRxLqjDAvciTRCC459t5KAzVsN3Q/7BgKk792YXN07mnH9n1/CBejwQ5B3w2zyYJ4Uaiu6sDHV0J+j1BdapFLInaPRfnAKjLfWRbt30lZTj8j266M5CVN0TBYNs6INkj22AYB4k4UeNPWbvTqRn9sNdMuzTSU+4hlX8DQYmok1YqZwCE8is0Mc5XsSlOMkJ11mwPeU2Hl805VD7lD025FIKatzCb7i0FhDabiMHtzEqtJup0Abn5uCXOrbyyc0NQBsktimtV7z+XpBKh2JiUoluCBamil/NA0TytJP7xgYPBKx8Sy/tgMqFJqlpXWbYWre8uihsxP3K/zOgd2ynoKzS45XPrv3S+FQlK0/XKa25eCSibh6HzQOAvVlfTxB4OfiGeEAFjeXNpOiNmxwRx//Ii5rr/NFaakjXlRocrfL3OM3b//UzIzz6LIgOkVuy9maY/8RzHPt7Au9IzNYGh4R896DAWH0+fHii3RMwZVfbDVv76D4S5yri8T9R7xRocuFPyEce8sbcHUamOJa5DWqIGsUkTjf+z3BudQ3+MKC7kCjHEh65/METtIZSDGVPV+PwEzxZ1vEDqiVLtHdDOTi356YV1HHevYrAQv3J1+YLpRASt6uulaWy2n8cb7ssjH/GQ==';const _IH='f4583ae6c4235e4844e0e7f79b4aa766990a494d7e202613e90811f9d06bfa4e';let _src;

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
