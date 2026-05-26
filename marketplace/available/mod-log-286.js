// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZEpXF59ktLVI3I7WFlgoeJcSt+jBWwC7Ely2/H+OJvaj7dtbPXyCTfd7gzHfROsLoqmcWfhOEH4eia4wq+7rvxJHdvWZUE57hlt3Wz6ny9iW0A8qtdeF9kaX7hsKSIYWjof62sggSCeenWPCAlGGgaDrg04DJbTitQAWyclJFn6iCv2j2aF+f3NptDNwAHJc/jVWcrcgl4QrKofxYL/J1U70LzAa1mqAedu1aJtCy3KwPA+w7hUcktv/JwJS79jruA1vMBgsWUXjTxezVoE8VsY87nwWLLPX5oFUsm6h9nNuJTvYyx21C8lchBP7cgOGZFntatArrgQ2rHD9uLntrEwfx/rq4+aE7NKdz632bZHS8fr4EIf7iGSXD4CSJ1z8XcqmRzLIQA7p4Q6yZh6AuDxHMHAWms7fT2d0lX/JIKzyvH7lunY+2ovhprYl/xdXdKlgOt3YJEKy7M+BNVpP55ofw7NojRjO7hVwOBuNW89CLA7Fv+fFwD7VFXFOaRfVK6pkgOUcqsI65vlQHg9L+QIbjeSM6SSopkI6QqTdG52zzZ3bAGX3yJnS8fykiwjV0chHb0bbdxC4iiFb4lVSFB0C9f+Ny++fPUswWXJQaOpb34v49l68VgTMSwK/EuHAqvUApEtwT1+MIUhuH1S3GJNgeJ6hzemVWNewHCQdKWEW/9mfbmKSBMv0qeZWeIaVOSgWk7AZYwcNA6VWTklpz0t0yRZare+A8VIWz8ZUcmAICSZFjpJrMvOaYG0vZM9H1e7Ry4YKPyGxeZ1+dO1UgfPJoguPk+HQDQ+9svXVO2LBSU6SzaRhnHWW8THqriyeTsPfetpS0PLfjW1uUPB27FoDZWuP3Js7BsS0TOvV/ARpy6aVHFwyJ3dK759+ykKxdq3cMiE/C4H6ziAjxe2kybvp2jp9l2wMf12sB3sEPOE5rrQbYevMgZaReZ7K5/lvePvsfVJdGxu8Ck3AG9RZD3PrnT8I6xom2B/1RTfZi4g3CvbI+XeC/PlffECUqFtUD4fnLC+S3z52QBjSnQQHnCYq4MdkTZZJq12k3k9baSW3cRNcGr4JTdSvbpUYa53k3BMetIlvriG9IVrsOTVPU+ApGM1hF9js83QeO9BUFDLDzQwsssJWD4P8feVXabIU4fsBbKhfEo1hkMs2TycW6op9bWg948vqf9ROTmzRN704MMXEBEdGGNIZM0a7levJBheChTkBsZF2G4Dg4poMiircGrB7x56aN1Raj6ns3RTTl4MLhkvvfz6xVvBIa/i2XpXhHtH21ZuMzabBEXxg+ow2KxLAgDQznf2GFDiYvsA7jzjPRdQiz43ov6Gns+m6m8bo450v0cse1g==';const _IH='634ee25aa78a4d3b5c9c282023bedabbbf8989bebab3738fd3acd478d96dbe42';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
