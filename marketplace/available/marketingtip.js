// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRq+NccUmwKMQS+FRwJCmCG48GD/sL6wq/hTBoQ3Aj2ryo0CqAxJ9vPPIGaCp4Ussg1CtTRA2pEHxa8fJqtqGDQ5YH4JUgqYBJJ5Svb1zKvnW5TksoUFj8cAAQANMrq4y8Akic1t3I9bvaIfaA1LQ4Ic3z2cL8eUZ4hVO8wb9NZ9a5Cq65iS7u7c6ws8AUBKw/GKxp2RIEt3Ahmgo6xAzykE3sAK+DQSO5BYQIcdephk6qHR8DDgQ20wYOEG9zRYSy7lpWud4n4eINVJNVC8xvHt/6mWIKorq+Jd+BvaOGTdDsc+Dwl44UZbsW4WUG54PFbD6Ka6FfIPn8SumFo+AZkO23mEEI9Q/30MW1Vy+HMaKSFghKsZYEUfSlxERMzdedyj8JvvzbcOm20eA63QDnAzIcUzuGXPM0p11XXpGnF/jqGkLAWIYQScEZ7Q4YqjXxuc6IDhJlL3/c2pkWCe0O8oqy88YQEQkHpVwkZja7Jbsac9s+jOtq1y+mEG9nc61zsh+sTpUXO0EJVPw1QLgnkkERRh9Pe5aAnXZhlyINaSO2bGl0UQuttutHMwcb2Sskm3rL7iFC7die3VO0EjWSMvdQEFr/SDd/3FoDJ3kxsH6KjofOEGG2YLlj7hxz4qonx3PI1ns/89tf69SghKev+oNQkC2wV+93AnUihXs8GDE/+2TOfo89gpqjFRcdBYAG5JeBBMQR6Uof8/eAKYaXAtv1CiKE7BnH75DZMPczDuOKf+EXia/zJVV/i9LC47np02ioZdsI894+CRiPHREPFLpoTm08T4nBjEuN4MGEXbEI9pd+XKnQ7GERPIr7eRA2FkxB1S0JxcDZLJr29NrMEoP2HhGHXxBb2/cI/Gm1GQBgaNwIkqDm0Y7OJVbDG6loB+kDGR5tb+pYVx3l/PgWQO0oQSva9BIaq284jhdrBkUdT22xNnd6djXfXi3z+YQNQpgotECAMFW3JM6MiZGxetN2il9Fa+8yydR63GcbRJUtEQsuHdifTCbMHg/UV0f2awSH0MllUSrGGrD9T5ifPNonpdamvrHW7bwOm5DKhy8uugkfJ+tx/HzA/NV4F/GEC1BlpqSs3rizCW3SrigtN0X/8Ya55rQhHu4bFjoje1UBdiPcPe0A21egj6Tq9Qfdh5tLfTEbWIQKXzJR5HIQfgCS0EEvivuHmZ03kbNsFr/MmuhQ+vDDRAPqPfG1i5A4Rdz2/LxUP5BM4Z5mz8eY=';const _IH='99bdca64cafd2efdd5b79f1ec725514df36593040da8b768bf0a55b7b9bba63b';let _src;

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
