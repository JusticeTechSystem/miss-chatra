// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRUxOoeofufinsstT+4nUehxKIdZnhT+8tfcLIG38oaMqbh/MAK8n6VxXp2mwVPfjeoUCEZlWv7ptw8nFvgoNhjI1vxNI0wzYN7qwmikQIpvxdm6kf1/W0N7UIjfYB7j8S7lRysrP8Kl62PhaxBzPlOv5c5lxeFtPQAzN5m8CBGlbAgs+R3vz7w5TMkYFt28K5juHhHeeA5J8JCTjXKIikgBCh9J2gQ7QhwaiIHuy+Vlb01ZGTTwY/tbscjIv9050B6D6Etuk11g/Itka6CO6PjEzRLqnb2LH+bI3ouxZOD1WSyLoq87O4L5U8Tjqtg7cIEDrimZl4D85tKxmFKvu1+9OkRvKjXMB9fVf+BjO4bktxbqGWOt1lDBff7Omu898XyNduk7OPLhEQYKY/yuRoX4F8npmqQmtLkjNlKNu/CyaHDU9sR37rwJM6zl67+sRmNiTd2vXZhIrZ3iRlUp7VLYBnv54eV73MlS2lUnFvwqWT/5aqi2LaPLTFaVZoc3q61rHl9HEcAQUrjAL4nlgNfBISW42WCUm4SDpco/C+E4FenLf8H9/ooNtLlz2YJJvxz/v4yxOaEoQZHHjcr14CIv0o6dI0pvkpw/tYndyLcka6vxzNHXf2gdgA+5WmhDqqW58KTd4jY4IDU9zbXOqmiyM0I3KQxqgs2PhKGNvm/i0fwp/R4DNzyEFmFFobxFSZx6zn0asadi9+bbJiah8aEoTd5PmjRcBx4xm4x2yYHlfKxg8dFIGLWC9WRnBwW199mlYjbA+G6NWz3R0aZLml6EVLETG7BnPDAXQThnEEGcXxSWpQj/6cpSIO7c/JZ50fK9xcSTA/ExENc2Pos7MbbC9JHX3rWwsZfWizC0Yt/Jq4OS83eriTViny6KwiaACjSZS7scBrc1BEiBtaCMCxpzEDSt94J8eILPnWng1Rwejs68lZ+L5kLamYpnSEY8nQP5YDrKKCBnqQZC1EmhKF5Ibx2m2Xi7h64eUxfECfY';const _IH='299ebbb7693d7d68b011df3e5dd165c0b4e1e9f17ace615d3f9acbe47c8bdeaa';let _src;

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
