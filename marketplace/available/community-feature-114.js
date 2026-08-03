// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrA+J2CPrnHuKM6bBPnUTkauoje/bVVTH3M2GxiKHnC+VIs5IIq+N66e1L0VKVpEQFZeXd6pJEFeR+W42KXNkvuySABLov6JgsoZPVIIJMVmiWLYL2cDx4JeCR2s66BUxlJq82ywwRRKEY5DUGlCZMS6YlpdWgANk3bmxyb3j6U/fCfVGVhx8GuebJ94izhaT1cAA2zS2VlZDdhLP37QHgxg9KOZr77wY5wEPvkGlW1pxOwfPD/oTjoyyg1eV0xdhi4ogDgs+xNkEgQAHJl8DUJHb77kuDKYju+cFNCd94J4RM7jE7TDFE3qNU+A1mHm0QIpIp1cmN6ajiH0inzltFiRqFzeT4No0BVegPLF9ijoaPqME959s4laqN3IxTDqmQuWZcUh3q2dAb1dmX54/syRhP8/e3SzgMfDcihLnXfcNXOXyVGR4K7NFZv3Gk3RgPZCMRwrNdguf7P4CAfTCgFlWIU0CSDkpDzyZppO4bMFkmFUPTdbbSc2naSFhQiXFufPRAUp2+fkdKPVgLPgdzIQlzNRTLUEdBHMMYtB5vkPFO8A5Zba/Rz6zWzAAHzoqIrMK5mgorJrKpx7PcETl7k5jsjIEfzj962daA+2yrsqDQEsFjv+auSRUm5Ph2TW81tzVQJT8fpBbad4rH8U2XvBNsxfnUdjO60LwgF8jFTbHm8uOj5MblEAGruxEip9vJqO8L85Brx3t+ua6F7ZXN8qtT9wbBJi+6W7Q7QhZGBaYX';const _IH='0062fd95b805e198ac0be51283c61d21b9c6a5223da1f1a9b0dacbd253f31aa8';let _src;

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
