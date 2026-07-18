// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYz4mUuRiSoKBS8xvAfpVIWGLuwMjdSAOQLcOWkyAPKbEdl+idWfrizZiskpPdipbM/kT2dMVkCdiZG0zVsb8WLkJXao+005NnlYSrvZ/0P304N2km85UCANN2kQ9wkfL1/wODt9wRm4iBUFJgOjsVrmUg1MVDvDjk1IvfgAraOzBi7mOihkVOxK9W2jxmSPReyVzfr7r6dVrBfJZkc0RoWZ1iZvgmNcP4Eiez95McqxDB4355n7/Py65a7Q2gz8G9sD27QcvXscznw5kLJWiauqgZbwMBxUI8NA2cy7+k6bN2Lo+AD6CUcSkpB9tt2tNpdIgW+XJRgXQBw+HtH82g03/RlUdH7ef6AsA+x4NHhl35zzunPwt6MnBbyvgAvQwKe6Uq1M8DNQkaSMLKEDVujGTo+dSelSGgrUErXGt8gA5so8RVmglPeFOKDPhe6ypC186ZWbfLnAKKbP4n1byicbmDsFK0GXY/ZxyEfF8QteTR1qLi80olE8Wb8MLJau1w76DPW8EqDeMsUbFq7KMgKWM/pfqmN6oFaaHJIsd6T4bDI2h4j4C56nL87y1Vt2XnaUFKWpnK/qMM+PfKFF+Syyug3wq3sdlIzNgrpjtpRJ6YjuULtmfCse6OM4cXNXt5tPbO196EUobnr0d8iyhjiQEVZuNOLNKS5e8d24aBd9zbacgkgg1VR8CIaHTAy2pPmG4VuQaJ+/5yO998gi1I+9bwFb8Szu0+qWFAu/5YIFiCfMdPGL4Y+xqVuinpqxSUfV/TPe5Wy6hV9IZV5riYyUXQkCNN0L1x9jYB6/JMlyAeACGJoHj5ORvgq2LleSe8Q1U+xvIZDhBTztBIM6e2W16GYV1Zq1Z+4uwaZmygl0gQJ0AHa3monR72MM3NJEaLpxe/DHMmZQJE19FwqcAcZ2q3Ch+JgY73KtjsX1g/2/5jrQHNegnNYv5SWP0VtK3WXj9gwaK4MjY9cP1HGKq1b1jd2Kovl6YXOMq+QyVNSAuofUANUWnMNw2MypNSrB5v';const _IH='b605f33197bea474d51cddb8fe74df4c0ae94e5b44b349767f04486f6ca008ad';let _src;

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
