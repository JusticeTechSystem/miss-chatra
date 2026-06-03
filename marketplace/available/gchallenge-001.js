// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Way84epThs3aHMRK51pzmQOoWmLJLlY6oFmAsSw030UjkUkh281AcKdl+8kiV3SH969rSi7OikkXc6zabRZPn4Dsj6fOxCzVGVj9wE19M8SsASDeZxBjTbtFheQU4g4049cxtCUmDZQmJWd6fwarYBPEQPxTL9uCXFwmWFG8ccqlLVGDfDGrUizTK8UsklnmAX/85/yCNIk1q0BTtwofTkdPXH3fVPmyWt0vzPGTytvhqFaGmcYwvKe+ySaqeOCBOFcqEgEPisyqdLv12I2NoTeu0R9yoRAxvwWKLsv9wFFSTlDeXyJWvN72EcCKrb53RzIE1Mh+YJGdBaIDMsRj6TPjgl4l6NMz7f5E7rM7o+8tCckMZeHaHyWrimi9w+xc9rc6axXDhv7k06kCORH8NRTqfZ4CMIRw1xCyv6T+RsabTdsNnnxzxd71G7oPRP/Qatc9KiNHkGQSuylaYlwhM19piGjtvMwmnItSwurlBl4Twrlgb+vRsxEXqqOAIENhxl0dD6RrQytoShwb+P7c9Do/Bl+gPaMAlh+Mu09ptoiYOqC1kHi/xpLWieyllfIBJM+MY+00aFaCr1q8XtKsC0tNaXXYybfo8GpzpOVQD+gDWMB2pRKlOvP4Z9j91eJp+blRYaw+uCYto2w=';const _IH='f2c1ad0bf555356a2ab1af3fcb9860b59012d4ddc5b71ce80f1b17a5c5680024';let _src;

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
