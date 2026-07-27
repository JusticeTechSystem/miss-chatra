// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9PH9XtaG1+YKIUPjB/XY8NA3ltFtt7pif3esmvqV2BOl/uytYYIlHMCL79bnMFZMZDMXfYFSnQnzaGAbxlxc0ChyOTq71/C7EIhJn6g/xpqG9G4jveTcGm0xenuaG/F9of8twvyAjLSv93H8ziq6qif0ySlLFTylP8aBGYtDQw/SLNlGiewS4WQha/6kA51xfi5OLKKkjfqGl76IxCKElTwQ5z28g0nbMDjSBvrHXu7eq9zC0v72wLrT2a+muwDY8yVlqwAx7TxfzptLviehpjLDrxc39COoDWLDqct7ykzNhvkByYQLvXz2KSBrjMPPsCWl5QQW9WXhl7rp3r63TM7E63DYcRPQYPMQfSJe9sOZ6u5IKKZlR19XQfKIbCej0dcO8hCY4/wr+GD4HB4VUQKliEyUdUFO3o7kbI8rDy/CAkkJUGPSlTOhUZtTSbS3miS62MMqxJ/tsDqCMLSu4a/b0QAAHGYShJu5F7nsDQrIxvh1j9srqfwJYWFe7JsRKiJrETBDRtBava/QfyqyAcVmyrOUkKqxsObaouq6bKELINmpTgG7fXu0bfc2KLYQBvGlJvu5QZ5o/QD2buddFWwJTZgYZV7JczW3OmRwg/PiKK2kiPyC3a3+fuK+wcxKieFC627TfPNmrjgziDP/aHg1sQVx3gYNaudwk5l5VozMyWsyE++5uJ/u17K2C5g4VG7gBz1otnMRNaDomfhYI3fhoXGDfTNUX6m7yufzm6Ij/ieV+1ZJX8tbjhzILLZ4B6eXvW9tlhhdch5GeaeRQsKMDLW+SvcKjsJHA+fHiGDK5LDLiacQJ9y/WTBxorqzxaDzXzTUHr143ErcF7/E8Rf4FIiK3FJAM8tL5MSsTNFO3MeKisFwgf3NdbwjX+KGaRCOlOCbQbrRvHp3SqKp0EQt654T8n/NjxS9nf7pD+NsIQoLG590k9iO981CO6Es8YitJqtGGBlCt0Y8K3wxdoKOp2dGznk29nh25DFQkNcjBlBn+QCRtYGqPjKK6I9OdM+bm5HQiz9jKVQOx1H2IJyu1FrG0EdTmTRcMux5CxiL3deRl5qoGe3qHQLygtv5Q7OwVFrM3grKxffL/oXTE20jlROhlgqi6Y6h0aCfASSakPSV/tqJk4CMUFPetoZmESp/rOSppnaph+YUCQJzeB6sIV7Cdnkmr9yqXUGR6BseJn+E4Zlq4eAvB/NJkLZMOsOLpGY1Ff8ECFLQmAuC2PllbVZHE7OoohSHrFxnJHHkn7uiKHal5GnNSSmFI8/kSPF0PP9UB7C9kYB655T/pBzcs7Uo5MEdzg4P1DdU4sSLceruV0A5kEtyP1N/OVo9VdVz81RtvCW+tn8VAiORZAaQmzXr1O99ZLvczlFXiJRJKOudKz8ur';const _IH='1c29e58093ebd7c89a44d39194a2b3ab8580ba47b7ecbbb9bb9293f67055eae3';let _src;

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
