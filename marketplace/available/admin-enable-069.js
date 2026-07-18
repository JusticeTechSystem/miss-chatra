// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCH4KW+vMY7pVCSllIwBKo2TbVcTxOH5R+wQv2TFvYXU0IegS6JxNUVkM06Jezd+pacH2jT/Ka/6lqp3SmqGaC/9J51JPdYHJJnm5vOx7r2WH25yfIhKq76Yhg19+F+Kxn3hKIlejLgK8VjgS6PN2iljG2+6ASYqI8Wc7HugCo8jDBWL6IR4DMRxc+sb7zeP+3oK1EoMYu/ymHB3HoHbCBerYyiMo4JX5OcI3Ez5XowLjg1VZ9xT3EpqnU/VmgW0XB2zzWsaK2lIZRbjPbaZjTNUSXMcfk658JzERGq5m2vtB/PqZCe3tPRrMg8oLrdeh2RnzM/1SrC5ETGYOmNALqkuHi1jCxA2Xq49BQ0r7G66GCbqCMPXCAGkRJc9t537gf1Z1qDxQA9RWJ8SqiMkLsrDvvvp0NfuXagRXGV0sm7PBH/2a6Lf+l3p5B9Og0XiW8yY3VSULXzkaXEFFee6GMWWd7+xQCJ7Qo54otzwTrcszW9UTHSnywDdfqYgaK7u17kagQinQUxWM4VMmXAekcwqSaHRDaeRrYjzWN297mNOEiVX8h/v1/yk76EWbeJtrPSzTdmxOFVufE6raErT6SxbVKIxoesITCdZs3Jp4fkdB+X7Qyjc6RHWR9FniE+7DMuCdqmVEJa926r+TQuT3gkc3YOSMS+gKjOPp519LcO2iRJLzIhwE9mcm9GRhhqxHg6fjQuNkcfJ8ToKUevPh9J6oftdR0RdJM5I1qUTaQ9JogBP/z4luGq4/p08RLw9epwHVyhmv+a7wvj9wfOdYcOMXoKWlvII2kGqEwNXRFm9R2nMFQB8vCnvp8F7xlmcaA9XWpT8r84lKh6deKd5VJV3+LLr+TzuirvfXnMef/l8+P8AoQD4KiwJPaUBwDvYsPy+9YI2BUjGVvGIso6yxnylERAHbd9/DfG9lIy7+UmNJJswIj1fsI7AfKkqwppX8qtB5FEmjzaTmVFeFiWVxAvUXEQ88qcI0Ec07/tbfCF57KiF2nZEXr2T7bM/I=';const _IH='3ff8f57691094c03fa45beed27022ee92cf3ee997d39fba8c7d46992a438bf04';let _src;

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
