// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4TezUUw5FhK0xkhOjMIFd7jz9o5ZNQUVrtCYBTki6wArm+ohuYw2huqF12xsAGU05p5augUFCFxSZX1OcKb8RFO6nT5cYKbMLN39iDRfiOXzMTwyMVerTx00Tq4AeCAXoXNbPVGIfm70dN5UnW46dLSEf4RF7e0/64Wr6wFaMHxuvt73zyP3bFtSueDsD2mSUE41P++PCsyQiY09QgODK/kaHxX19p8rWung+5HHY29P8Vm2myoz8Su7WigF6xA0oz2b1BAnYDLC5uwh5Tm9xVBxeEWbYmHVxYFMYwvJrdebmtcknJ169oJJGR5ktfWAYon+SpJor+OvD6BYCd+yAZZPf69nYNkdhrX3HFuWT26yDLaofhlJwBXrF2aNjjeSdusfGfQHm5w6vhsRuGFR6IrtZNbIb97eFMz37vYW8VO98BqQXxXcx9DRr6YzsiJ7/O3EsfaxuYjIxBu6EsowqaNHkKjuTprkyWciqcAnsEv63tiLImN1Ol8BFUD6Ca1LhwRjlW9E0PD8G0/hh/QXxMH5uzKY0BlXzubafFoI68zmlF9h1nKkrnpQF5lFyeS6f+rnhWtbspwesUKqVthVVfMaCVbd+4HhgXhJG4NihgjE4DBJH8qKmeDnlgRRxXTd2tkEoMAo27bsOrvdu5O0zYussFzc4R+ekEKTPYOtq8NnfEDDkt3yaY1mEj/tYv0dxgSjJfH+j6c8wOs1ZZXp0lwcCvz';const _IH='a989a69e50ce1654974a24aa17b8467db6549e78466588ad395964df527310fd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
