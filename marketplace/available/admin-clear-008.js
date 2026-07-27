// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTcGciNH3/vt4tgBvFGqhaY5v9xt2FvsDZDLas7CIMlBrE6zUNBVx1GK5nA1pAJSHVLFXnamQoX0bKsdBP9nLb+2Rq6sim8wS4XkAIdaGmZ2gPxdWoPwo5cofl9BY8DsjnarmYUdICHq7Fwlcznd+DSkEghizhFvr2tvshea0PrbSdQyKLUO4d2nyzS1v/yPuRea5KqxCqtIsL3W9CJ3YaBTNRGcDJSQCGfyTpq1vssLrdTBOpFThQw01r/WYVwsTOnDW58yhOLOWMPAjn0B33P3QEEcLjzAOXqVOVVR58KeUBvdeDmjHJbRhemr0HJNkNyPAda9mXfqC/K9u7uQzAEMXJ4jxU56v05gwWUOiWexLw9M5/o/+4z3sg3fHDbTzEEVjJCAtWd0bEBJVhDFHLqf7lcR40mm/y7viSKTxjbGpeBJOcfveNIOC9Tb/E6eF+p1i6MqJx73/JSDAJK3r7lucmMgus3XdwdIkR9AFhlZjVsrVpRVbaca87OU2jEsGQwy9eZmcCgzlBJDhOMqC4kw4vgRKOhZNiRjKRNjh1dS8IllX5LIZ/ddYwhjYE9NeVFLu73TURzSh1Jvtl5xwOJDzJu5JJx2eof/t70ww9U9NGJ2kteR6+TA9uQmBWVMXaqtojcgx3KoTlbZCJ0xkwhUBLCefDmfgqbrPhadSl0PUY0AadzAhdvLVWkM1MFoHgYVyIz315ShkOiY0aD6K08g738GozL4Win0GLskab6rcn8ODu7DNuPhwauNE5M2xNUgQwnIbtXxV5tW3zvinbEEYgKL0+zU4ViKM71XrJLfpaZMQq7TLezGBMXfbZ4UeNrlDtJsVALaZLzPlIbRGB8sABKm0LpzDd/5vnhCuetZ9ESxwMKHcVVp8LYbZ/AwIw1L1bSQfq24e6XzW/2turYzKL0fG55CGFSpi5JMedBsubGIYG8jHEeoYpBWTpOF+b0rSqztEfmCdNhZJ3yHV80Z8yXMyxyDn49tnctxSXquLL8';const _IH='ad1f6cc23357f6b85ee768b5a55ccbb7287460f18de6f06eb6d962233c276f1e';let _src;

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
