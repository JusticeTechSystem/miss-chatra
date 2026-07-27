// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSIYlFY5jb1VgKytF0uGr4wly7tTVF34t1+D83x7qd4BxFAQ9npBru8RzsngVOnxBOXH92WgxGCsK2L+WNAVNbVQDiObrduxcqjm82yPnJ12r4AQS1eFCj/qdBuALLQruU9q/HpG9M6hFN/61BI1sLUhAPFq+QxKb5Wkol3Cx3xrs8GjRIuayhD6Whx7KMUqLXkb/F5Dl/E143tvcH29ZvKGGh9pOpySGWMrJX1e5q39MEWnLVUcto3zBXG7jFIcVLY9J03nW4iltv/82AkxRQp9Ro6Je5DrAc+vFI0IhoMhEHXbjIRy1Sf0g5ozfpMuf1IJwl4MMJMYKgWH628A63CB98yr+USYJvwbKpnP8oI/PuZivCbS3WDf+OyOR4HY65g48/7hjsC4ueAAWoT8OFDUDatQuJdDYNIUuBu9zaVj/bT8k8t3sW3DH2+ppT9ud33pGKeYo43kM0ttgyNhjqrsfqpOZKvCDCCjYKxRoluKIEB+5iW1gzrJ6GCWtZ8HmMzI9yx1IwZ/g04PdJPVIpmz69e6eYThfuY9MePJgDXz6aQ1R88vTzI/y4wxM3sINkioNDL2S09R8qyVjc7Cxa2XKPvj1M7kBXeDjn5KmHRYPS24U2yjwKMAV8ScxuzCR1G+eSoTu1J1KEoYlY9hJ3o8jxlEacnhXef+jfA2hozwgJxVZagSevzXR21hdvAUbMb/9jatzh1rpaocOHlTfEhGUF9kX+cpWbMP/Qq6035+rxZv+9D5pDp9e08F15Jd81CTdSLMiY0hCWElzDop/El9+an2EyeVUrc32QjUFCtQzzUn9s5hdgNaP2S4YJGFV89VgpKOwrjpMrjCNekIwQ47mZLa6a2L6gxkw5nhoFoU95zE3FgUUqVhD3kH/5hft+0/sB2zwfRg4U5aHuxM2Cjd+0c41Zg8Kr7ndCFKc1UMaVJEFpOU/8zmIwCQ==';const _IH='66159501a44cde3fb9d19a053b096ccd45b258828b7a980c836d713561e4c72f';let _src;

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
