// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ya1of3680ih5NdUlMv37RolojOg0rrg7kZuaYDaR8oOtBELW9BcwyXbfV+GiVy3A+azLozm5O7YXG8o6IeFvJcuU+Tn5rMD7FIcL5HL5kaQE0oxXY4buKAFjaedIB+iPxtIXIZ37wNuc4zesbSec3/cBJVfaXwRsAEqvu81EkGuku2OUDlM7d6rTv6aUo7uKAR3TfR8HQItOyVmujk5/dc3qQHYvJ+1gE9YmTCCx1ZlQuxdAbcMFxS0+uC8PFPRNBk4DHO2riU2UyChrwYn5KQ3Q87Qa7Rxb6B1l6LS2yRoZpy4VoOUe/+FWAKgFhAr9f8tn77FcqW4hbiq8JfknpoTnw595JAxpN+o1Qdez9GtJVSbe7/rDZB092mnrK5/3lOs0kbAYQoEtR9h8wyA2dslW340PXwXmqi3/KovM2za1kScaQEG/ZAK8nfH+uzY8Usnw7WnzL/JpzrFbIKVYaRNorAq636/uG2gRVN6jnOISQ/MX88gxAqchRiNJeA2PDg1NSiXfVN9YXqgF/LLrHUMlbVfTnJn67AXrJYFei3DUTRzS3aMF8SWqJN6J6hkEeKV/jv7YdLwyw5itmeX4QjLFgIbuUVQ6ipoGVXh101G8H3UuhjewfXc+wiOhg0oWrFjlJJSFakh1E0KEndPw/0AQLipgoCgIabBLNfYJbM5SukksJFVn+MQOJdGZigfGb+w82Ced1d0ZmoDTdAO8lj/UhCLgEXczuNBje3BDwaBo6Mez0yU=';const _IH='ecedf8c9c851c3ba33bf0105a73bbc8d2047ec75532315bac71020027d4df422';let _src;

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
