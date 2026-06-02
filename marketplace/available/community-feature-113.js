// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d9pdsKpboKsGEpv4ZFiH5F/QCRozI7v1iLBTrga53DqMxDrqHHqYx1Bv3EPWCNq9yMIfi7b16eSUrUyyr7A0KV1MyFO7mFyHZ6RPgxnDoCtwiwH/hNUjMXK4bBqIb2XnRikyfy98X2IS/dF4sD8q7HgpZsqVsJAHBttT2IMsbk/m9iBUt6psyqrLYNUwoUtAq2zqcQ80i1/COCc2/pQCzooZpEsOY+qyyB8IN34Kc+RiC3ZDclD4Z14HjCIQn0+8vZmrlAeGSbryjKmdsij/j40ZHheUPOYKTuaDhwYr27g4861tokxqIALQYRFzlZn+20MWpysHXAyc/xBYq8R1/9sIMznIa9XtL70V8nlBPc5HKv2bJvw50oCmhXaETHceDJsMQVby/v0ESmtLIAH5cSPjABQGO9cMt5XIIwxAh6O2Nr3w8/TMAnBZQobM7jfNR6WZ9j0hF382fqcim+0ZpOoGQhCel54MI+WRvGkt0chCR2XzOAbDMVON2Wdb2AZSzK8cqB1+jFLhfMnIQ2NB+r/EKYURpMNyONMrbgLtt3zgudnPPAg84TMKZKlidRuvZfAizR5/CKqH5YWr+oKztSco9ZLa9ayO+les/p/5bcw3GAw0rr9Cev1tAJAv6bmI5dIQpnMTJ78bgwh7UOs/gDi5BEAWhu1K7Zi5quVuVDwxbi3K3UkKfsP2FA1TldPwRym1+GAWZPJomtbRpVubOBPCQtkuX22703fz64Y=';const _IH='f9cbf089eafe428bb00108013919d6c8a33cffdac98383cc932388a56060f6a1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
