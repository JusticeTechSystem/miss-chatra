// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PPkBgIpxKjPIFEVcC7SFgshu0YeMuWWSjrIlf1hAUwgV1IuaNthEgteOIuZl72Xml2xOaTTI+bMMYMgAYDFHjYAROQTmuEzBC3gjDNggxsQcHd+/FERFNzH+6eovUlRPDHrXWGjOenw9z7lNmqccOBjqydek7WirZO1BBkf6tgojCLSMlt0GLAuPbZQ80xq2WEJqw14Dsc3G2SPvZDXIf2Z0Hy3fKemaKgRmHdZS5Cdo+aF8zfrWQdM3/IhBai79ZG6mxkP/qHquGZrycXT0XyC/t1U0pl2faWLJppnKdPWDbWpipgP5OqvWQtU/EfBphtV8br7yVwQb2UdV7UckVGvGRND1Z6C2MRyu5lXZjS3EBIGRgFR/HWqPEGTb4M4JwPLof+jZMTIDlf48WK2YaO4nrnGHe/ed8G+Ab47/oqcGCJGr4gbsXVeYQYKrjNMPW5OYjZKA9KNbRLmxWrvvflxZRSAhBA2iB/HpsLxGLpRcCh7hqTfZEf4ubp2KMpHCEmZ1/W6u+EOODbLdusS2gAk66OaMyXQ9W3vt53NSPt2YjOiItV/EV+XyEmxzhqmNpEl/+t8FDKZRelBqmwNr2gcfJ6bURBgnndtpL0WFOe61ia8pEHaxB88maRVCrqnhe5OQ9B247lNW/FQvPw6Z37HYE7jZSvS5QjOMaLEEQ9cFzEsvwi/aQAOUZZ3ukfrCfvXSlxuBPj1nM2b50qtQvIT2fmTbHrN76NQWm2aNSIML0SroeVkmu+M1';const _IH='e98de443357812cc3feed0690a172351a025353174a06d23e9b96897934d89da';let _src;

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
