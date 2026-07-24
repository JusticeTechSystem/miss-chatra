// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSqpGIXEWqRiYbjJhIJiPTEZsI/ju3u9tJwuiECKP8LtYrMYHwUltrGrTgnhx3V9b14yrmbdTM09I/5sjStVRWVFVn+5XmBXio634bmX00hdMuE1zh1NpW/k/8yJH8/TAAj8MgajNcLLD83z3dt7YTyH7GtlCt7OVt/P0UsY5f/wBQIeWVEigJWJYhUjU/CrSUQ0Zv6J6cwJ7VMtc5vKLuBmzj8VFPkoSZ2qGhelDoOTNp8Bt+Bq6K0Jbh6+wsfYizIba8uhd5X8+KV8Uauj0sNriLEHFRcwJstgurYwIuakVYqiuV1rFEnSGGSCXde9R7DerA3dxysNA2nXARI4LyyJk4dQmwODRTNeq3n7tNw5EuGvpPQ45hSGUjGl1XoR0JCHOFY0IklrYZu6l4ZfFEf2gCF90C0VShQjrX6XcNE+9o9kLmLQmMDvV3sQc5taBU7ZZs++hq/4IS1TjGTIwLleXv5NItr9BByvK5bI4DEcjTPHFk1PqdSrEXoCyUZuUAuBd1qjQU+O066RDTPrjcDm0U71OhkSgJP3GTWzwCFv4b3en3tyeC1VRoMKHGIEI2kCrpDy0MdvyKpp5f+Tedq1xqvfXODJ/FaJSj4U9SwN7exWwUdhpBmXRay+SRsjIVZIILsXSYeyn0Bm4ukVuO1nK2ClkapLIw12eTbMUHpAcAdjyAwAMGmXuLHphlLbis/dHG3uZR/R78dmj8IhphWvWABIlN1srUA';const _IH='7d14ba8dba367afadc7a33bf9da6a2f10b503333f58713998f7166ef3a9ee110';let _src;

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
