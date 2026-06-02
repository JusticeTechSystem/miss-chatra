// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nbHYRDlAaO6PWQJ0fOu5k9dfC7SI14VoEvceQooBDF1afutZMvvu7qP7GBXtDWsR0dDH8SrCPngazeCTrwhuOCX3XdFj8sLhu+8Zu1ayBY/uExUmZtkcmseJL5/N/2snUxSqqv+53pPqv1UFCWjC0OjYVpjsDhYSD2IntfE0ZnVsY9F/PCThpE+IopETHkT0Fs+w22iWkhWlr0dTqRBDnp+dlxNmVCnJXAVu/F+5f94PJoZEkGKMMMh8TUvfL4IOQYkMTzgiXZFnLpRnn76m7wMfCHxvvGIX2X3RPBqToZIKJcJlR5Efe9K4XfMFTa65PZf46Cx5YPoiiEkyjjDfEiUmow2LqktMvgJXYGFx6w7H4vomVtC1y5IcomDFQjPL9JZs/k6xYO/MVDl1JBzhcPIH07msEdaCkjkzhLIm/Shg6zCyG5cJ1lHazeRotIwe/eQR9q+VkW3rQB7JTncBt5ZGKsIwAnWqbpxbisZ3EJ6HJ/ZqDLCctsWAcM97qKsyjNh1lNCVXjWBet3K+05mwyK/YRjHE1S5xk96KV7EVSX+4qzXGcMGY2tdjAfZF+NNx+8vXiPheHFqoR4OZ8HSj3moW3x8ko93yMWbjhmF4adU6D2o/Z23+uFkWKLDcXVR6RTnCZHyO9vFyYCid3ERgXzOEWp3wJnNFYbNoQqIPN7e8J2b/sSuwvyUFMqyvs6No/71G+CJc3XRXPAilN9RDkEXrj4wDxeO';const _IH='a335e938bced16cea87a4a8cccf5c8d2281a592fee8d4109dc05023ecc5b874f';let _src;

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
