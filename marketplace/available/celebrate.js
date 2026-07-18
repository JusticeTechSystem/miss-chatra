// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTeIY38PFvCc1BJCQKdJCGsTC1CaG1PPzXtnRxvgdu6p3rGdsgLyvl9xrglgSLeqNGyBAYnFUIgKN0cyXxNGMO6kTOSalNm8Rv05phB2VsJT+SaU1jvVf5/uIsG99P7PfGrKgtoabP4FDoKDNQvG3Jw03ZPzH7peB0621u73jOPH8xPM30uFScdgub+3Ld+c2p+uEYSG0Zs/EQ6skWposWBJFcnvNb498NhnE/N2jxQWOdaO2kVLm1+pACQjqVyTdqIAZ9LxKYfCIeOHvRhmOkkVWfHnoTx6uejBrOzEjMFKingeGNIOpyKjBb1xJudXSeETu/0MySFR4nlFUjFRS+kLu80TsXF+MLP2rNcVvj4NB9qxu5bpWaYwC1aDPDbtUphyqmJuaT1yv1xCh3qUn2OHCM5XJgksN0MUCH7+bhyWMI5kUZp+9P1j7/c3e79NUAtGVuMKxYwzHQ5HtgxgvsfT6hjqey3K/V3neextzN4ono28uQi/ctXMe/FUM83rKOisXtlGh2n7aXjA75Yl1QmeD2a5NxZWxxCtPYaqsozyTrAaBBlKHC/aClV9ZCydeZ8Wpz1xUu/oYkii7CgHqS1LNt6tRRDF54xXjChHBv0JiCFVfehjGDKyHswRFM0dCSZH5aP4Ng/NkuKOzJxOGKtyP6z3NzhFOVuQvV/jxsrGKZdYljzEwrnFV/ONcQJpWGdXSVopJE1X8nNGKyJNhu6XzstZUiQxw12V6hLOaNjaVdUM1wIHWKrn3v1PNMP0NViSAkWJmPs0IIW58ZALI3W3RGLtxV4SBkVLAD9s0Y2YpxtKvzsLckeZYY/FY0JMinb/KZXMD87uoL6EVh41q7ZH5HAaBVc0Tx64wCmRkigM8dbnmOVgpHLvdBuJsPtcFKwytQQsVOeGfiD7RMvGCvdYK4jTsZp9IP3TcvPlpBd8H7S86X1tbFVwhkibSsMDJDHTAvQmLx0DLu6Piwdc8v7p7BaA1delvr5+LSG3+GRHudKA4ki1wZp3Bl5l3STpRMkUGfTHpEMYFw3MSwTq7/vnNPx+SPr7vOyjJuWhGNTpSU0bdkbQZytOt3AkdFaQPrKIfVWh1F18oGO7b5rMAbMqG9x/gUQ0vegljPPY5JxgK3uuToGxApOvPFMjJPbXMWFxl+DkFxOIy40iIHSb2YOfnuGcenAkYQvN9/PxjmzYHvpVAAzvZ4RlQ==';const _IH='b2f425bc73e54371adbe31e64f9b277d9940d53b27553f686b17e7fe3e608b54';let _src;

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
