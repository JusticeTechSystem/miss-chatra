// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGhcY8nv4xiLMq2OMA01k316G99/BejEDSPBwCQhEmbGUh6PN+9OL6sXBQZXdzrkWcRGHLTbDuEIHDEF1cQ2cirVs18a0VRh8F+3P3u2l0nrAEfoEk4M3hLQibzPA+d3ur20CQqkJllcMQ9WhM2OC4VUfE6MPfr3YLDSezozAhnRF5buYs+ZstsRMZVp2xSmdNPSE1ahnJwQN2A+QzWPM4HRaCXvHRHq595yGgWJ0Tw+Se0wkCg3J/U0Ol1AUC106t8gWm5GLIgmhR0T4MScogJwck9X0AuFdPvubWpGVYNsrWZEh4j6KpsVMdINAlw5nvToqR8PEhJMJ81ea9s14xpuoupOHa29StnPr5LA3iQasppBI4TZYom4uWkk7Iu8fmj3FQGxam7NIBKQfcntVvJ+eiNO12gdaNt2hLajmlBVt02AupX7NtRP4IIfsS4zqTk6WquJv5HmMLVtzTNx1mIQm+VrRNUzFsq2If6ILSwKNb2ifH1AG79R6GEvTtq95YZxC6AMJkV1wePLUqxfWv0jzzzN9rgSV5EAmiW0bCPFLFHnciqVIGCsdYOAPNlGeDxXL4JtxUHKgMS2yZ278fejqBgOdODGfVd/RXbkK2LYAld4qaQMleZ1LvV/1RyeLeeZXWITk4PqXvNAT8rGnaZ+mpmT/q2VvRvKrcvCz3G/GQyZolCY845jnOgwONhwTDC82s9ov+QwLwtLqC5H8Afnm7eTM=';const _IH='b9b45c4c79740b0f1e0f4aff68e8e83fc533a0124dd30e7aa3c4855fcbf82fb0';let _src;

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
