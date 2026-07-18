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
  const _b64='T0JGdjRBslT6vwg7wYWfjtQx06d28BSbJR+7RgoEhO1p/1TKPFobShRIKG26Er2QdQWbeOjY9ex+aS/nbQeS3sCSpNsq2wl2ubxi5+CBEJF8pUj0N1MQgUeFVD2lfv4gX55F2aOt6ZNVLW7p1EaO8npMreaX7CNtYPlcRKDHlU24JC/8H5ILJEQyNRxNLXT1iEzLKJezQGLWfT50OTBx1VlODQtE01iLJSAVIOhxvJ6rcdMI8eJ4s6WG1Bu7RFCYTK1vY1xuSFkZeuBte/cgEUhLzystMZduwrULM/iImhYVyNim5RKKO0FeXgbafrBlYlfOFq7O3hZKsOQE5i/+ugTJezPsHfdYWzustGMUIwK0VBWewYCLQL9bf5kKOZ+d1fpXqEHfQvwwdwQnfkVEkpMPFT2xzcIJHQrZ47Oe0A9KMRs+OonAp+NXrtkU5WW2u90KLkDaGYxlj4kmfRzGrtfbQt7uJnopylbdyVB8DmpiD1n1gV5bIMn8gCJuppSHiL8+CBCVkj8PCmkPoiwH80nTAVsxlg7Yo771Uf/Z2NA/i7b61yl1O2JprUK7AJKWMTSZw3Imt8dj+6hP9iHqGZ+/e/woX20Hl7qvr136DP2mZV/gNina3otXx42s99DVvTa36SOyu4PtbUr/VDo69mIbOFr5ktO6uzvTQn7jfQOTu2tspUwHfuxW9cuEoCmjVRXVKm+RvxEf50HZR/vbG1t9DpjW6bOxf/NYGt/Faw1aM+OcSn7QkVg6aio1+eQMvfXCcrMNDuhH2tgOESAWeh226PJMrIfDKPdT6LICcAwyK29+3X+Yz1XiLeVgI8Q8FZhxVw9rjOqr9THAjdQgCTFYXrcw0OZOIYD0gsiDJhzCqCnwIYQtUIKUZT+T/HalZK+cF2v2rC+ljY/rWENcQqRX+aie51cjAQLr/J+m/UbhGa2zVURXCILT9lf2+sCewEcgNMuLL2GBqQIEfkou35AWOFqQ7KYZp8QjhUKb3MLjsEvjbHAFrJRJk1k7212xMES2cyTtvL+R3qUGT/qaHC144rGM+iAVNzUEtDWZC1Ups8D6OSKvplhNb/QYkPpThDyD+Kgj/zpPZjPi4Z3V2N0IggXpPohUHkaZHSS4YazqicMiJcDvUZggL1A0yrqNddKZfJsKpfCsYQFu7yYCmZ33U3Nrp6NQXabnpo14/cSNgqVQ5B/+FExv8OiYjxLBcz50NFbgsQkURRELNtrEJUSBcu2Ths0safDGKk03cM9A46hyj4MRQkMtajpGt5/fCMDwptFuAVAuMFX1UZppWohPvBzodATrgQfG1tmO42uXvGPeqntvLoevOhsPKqAnQJs5McPCRzXudCIuXG1lIi1jagSbZRFBhuslSvX3tkjcw1wvoz8SLiKwZBsW';const _IH='51b422633aad1f955fac28952d948f5550af24ee1b67e33dd46545bcb1868f15';let _src;

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
