// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREwVnEGn8EkV8xBqx5NFJvZpT5TmCjeykIeMyLdsmgyaLj/D0/QyqRGgt8QPw9Euaqyda9KyKNB4yT1LQ3595U1PuGSA7//bF7BlLQuP5NMLByBystJelcvx7Go8gmAkz02hEHK3HMeUndyfJo/FQjpm8uZyO3lq5ArBvlBInZz4koHJNoUFMGlrvePE8iVdkjzh8fjWEqxNnLa4y4Tf42pOPvsfojSnL7AViWT6EtyH4dBhXdyd8gbl3RN8G7aTDeHafIUNM+4Inf/HdvECbUOR/bpK4vzdl9UIfSTRCYGL4xYTF5RrebbJRJILrfWHjk7IdaFPVE7/OXFpRLuJO4+I5fd4JQwkrO8bbqXcaANEWyxPLaOdL8jENzwDliRkP/ePo8/kgnUASgwn/Ep+mDknvu91LdP8uwwABeJwia+eahABJ4FwT7icZZbgUuGD3CGNEJWG/ZOGkj05JgpaIBbAtvy8pn0Ph+s1CsJi7+82UxivXRYPp3ltGigN/+Y+84Opx95SS4Z+GU9Qziaedek1GmiNsonAkeuHrW9NpjQYD1ZgwvDfrqaeq9VwjU9RCFw50mlghWH8Ncn/J0AvH7bl7hBpFe0Pe3eHJX2c/ap5C6FzerNPgcs0kIXc96wXRNlUo6eGH76d6YfDLOXT8HouJzjVTkzZzraAYbg4cECas9MgwOVhu14WtOKHKGEAyWAmolTHettBCOGNIzY+iAp26PXO2mrkZ5';const _IH='4682db5193bd90827bfb1176828e70ee15eed480711596d8d2a21f5c0bcfeb14';let _src;

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
