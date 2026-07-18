// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROqQ1sQ26zvijTc3hKmpic1/nTLcmhKyAhv4uMuToP0QxSdsUfRe71NNIiWoUXiWHAS1F7kryFwyIjMkZ0+AIorR+qV5/E6BPdHfNqJ2sQ3kywh4N7uDqRYIcoIAKZr2RG3rWc0GxtfJ3b5Z+3Qj2vHhThEGCqCVmEd2n1sEitCtsuQl+SV8zFcCobL+2ivOgvKGv2Disp25kScZAokQxoUa+JgLltGNxOS0OverSzXejrY6HcTe1ChYXl/tQQE2lvvh2lTG3/gdBROdNtcFKlWQCpTVu9YFpovGPvc6vhxSKeT3swFEW63D5CQ2yNsfrjgceRDdyenpWJhrOld/a9GfgfOIcV35Jm72N6eLw3UNd2tTY2Idi7aZ/wHkYQfhcZW3YhLdwWoLoPp9JMF6ybUQzv2Mu1TUCCXAgdMEOaOjefm4GP2drkddFjKL5AuBN/x3M/3Y2YaFmfxtVYjg4g4t9XULWKolCxOX1B++GB3OSw0Xr1KMQABXsKRh+p5My/7US2/UFSgCJSkbaweAfsxj1dxPTTNcmgRlZozco07dfU5PWYSX4ScG1T3ysrfBuLjE3NLNlSd3aOOr4DlMMhmef6XUF0TW0mz83QOMsqwJPpCDBn7qQoN1cxzkLia/ZtdqaN0gfa92p7i4SM/FmTwtURkCamfWp4gr6Xk4qwCrJXmVqeZxstcSS3XyBuYAx2YFhc8M7zef2kTAc211H6RwzAPmXPFKwNRiExoQ==';const _IH='0b84a795c7fdfad030ff0b1125b6a3ebbc88b9fc51b5056ab775ca1bf0fcdeab';let _src;

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
