// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1l6d/T7BwApmqxGf2nAu/P6p4UBLZ+PfBSm9F2xA9ZsgpjgCIkw1WK0xwZEE/jaTpV//O/eEYIF9ICWl1luU/Ac27uiTbgyWNtqj5dk/6/WPcfO8ilNivVq6oyldFv6rjyq18El3jvvPxkoNbsK2nIoF2X6o4LAen8Qtv9zIcphZynak/ov+nPEDN+5MqXLzIsWFV6wCzd4962NbLhQu/oQOAbDJs7rBRcDv/LlfHvgcEB14p8+qZ61U+Qev0Wv8qdnAueeozMIzO6VjtLxfH0K2ly/9jqKAgIlnAIrrJgbIRmifGhEU3UKdgcfNUpb8d0CS+95/D/8fgyZclbSDlulAqbZI46ijGCxtGLjzqRh+8fpLWx5AZVPU0xJC2u56DgNu8HC1NTW//hlA3t5lMFMQX7RB8sgoV6j+Njm9iFGmSjfLsLPdOI/+8umIIRhi1tx4twXB9pZzJjqgZgNXYIt4lQLJ//1JmzN6HavgKAitT3XAWLz0VX6+Uw7Ml4Ds0B2PqPcJzzPI0/JbRHEwY4pqwQAeY1FTHo3ldlPADip01qpAasCEwJuunKx3MmfoykflTgtXWBMI1xyYTMZ+bpIh3lOMKUwoF+pkzO+KiJB861ZJo2fPKjiLPRAQqRcaCSs9MfmVEeCJvP72qVc67fvH2w4gLX7heEALB2Zf0bJB0L/h0jmLuL3+Q/VBYGS+Jdlrd1Gc/M4g8acN3chCporZw3s6jGZ69iAZ4iX0O20be0gdF0o=';const _IH='0ab31723435221f72a094a7982bbc35f91a99d9f1b063d8ea4b903f5485eb358';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
