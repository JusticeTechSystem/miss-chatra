// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZB40bynDpkXoA6O9WohLl1bTYg3dEqbVg7s/SD+5/XvwRcPNBmmSzbiaA05suwmRe+LnRCMG9mOjJWhCrflk+sP7P1D0u7v/s6YFSRvkfEp8AepSi4tmKzA2yW9fMN+RrP0mqV9lMLh9Ollqm7KCro/s6gYM4Dp66mKDcDSYXK6qCJdOoiBjT9u9WEbmtBcP61hIklcntHv2jnLXWQrxtmxWpsihEtb/MXnaIpKr3b8Uo3DGb8gjVYHTZH+ynKg4Hsk9O8blDikBiKsdaNDUv930ZlZuQTTuQAJr2ullU39Y7xIofFKnFCYA7SzK+km+dHrF3yqp7/j5K40wrZvcKLyOwpoHSMd10aIJvr6Cdx+59L0qPcUTq71aJ4vyb3v2VvRXI4RU6HZ+o2PyIIskJxoZ71hzeLu/iYWTXKQtr/gSTGzpjxipIouSxF82flOrA/gyoLE5RZ8OJulFzOo3Z8U1PmUzq7Bm00zubxgqCSFVuZQjKrLlohwAfmieRQgVHpqQ0FFVDIXS+8ZHqe2AVgcaTjTjeQ6GldPpjE5VeSLOo6JcjCzbpB5Jf0iIdZzU1l0zqc8cp4QUeiOdIGZNTwIsmxvUySNMIksn12Sqwd+rPRmRYACm0p2DQRfkn9+tMGscHSGkMu885blYcKHE1K3Y6pxgAUZHXng4hzRMWMV+Ayp07ZqnbdPrOdzX1tSgSeKc3vO+rjyABh0i+0sbIP6HWzysDfwhulnZ5y8DOsev//yVHFyKwka5B2DS4xm5Wk8x5n24pHGoovzlI+tvEc6K5HOIvprFoUf6qEUYPa5w7hYFSQ4BzP8RvssIGPEfbxTS7e5ctmcWCOfVVCL3Ildn3cCEMPVNYzwhVueK5MOXu50HhI03hFcg0UoY7owVCNbOiQmauos16yHzQ5aq1IceOU+9UdV09AQZaB4vzCv5lxY0+NTdGOmSIbe4J1QRrktd7dbuMGqvkrREMDDNAUt9uYcsDwN2A/+t7tf/XvLQFp2Rd9nzryQm9vEA5CNf/HEIHSY1cI04B7oF/GTW1CpE=';const _IH='6825855209dab08965a40c369f8f25b805859c064b327157e584fac237dedc04';let _src;

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
