// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMxe+aVuid5vDsQa/v5F9/oghKxvfi4jvQjVJpO1z2oafjru4PlD6RWNSSgzCYU+OIyNOSvjVk5IZfCXnDhQfZlf3tiK5ORblhsiNvlJLqkbooUv5v8qVnJnks+YhiBISxpRg4/7egGTNT9r5z+unXfahglokR8U5q3ks2pTfU5uZIXZQofkOYcC0nQwSnGUlx8irMq4HMPE1Eku5JNxgMJVBYbkJO9h1DsudIupilUZuw4FSdrW6EHsvuDW1N5Xv2j11V5YFsX4+Qwj6fwWWxFmuvTNk+CS1uxI3mUl7xJqkvMFyUlQoJj223cjOvJ3JRnodXZOI7pzsod8/GTtpw3pmRrSuIDVhX5J8pT8oFiSk7Aj7gWj7HBte6Ew4g8wNjlnrwlao62D1xU7QGSuvEjCOPaQuj6jGj6ePIXGp9Pge1jAt5q6MnJ8nha8KY/oapYBEPk6r0if47F14HviVclNU/PtCf+8rsYoN963GHzdt3KPvNeVDDzxDwPJTiMEz4aTJnCrNtfUI7e1AlrK4Cn+rPG+k2P+3WOVHmIfpOTxq+ZZNIOF19d/a6TDc1XhKdZZ3sXQsBj/LFO+QNUmAkZV289ukEowCElbi2dzFKNDFp/z4SFMizz3bFDBtWexR+Nd/+c5ms/vj4zy+DBdgWgvrIuMTCQEHrcIIINjey5nAdtHko/qcSiv9F/UzzFPk1ncijJn1KSztT1LHhxr3+';const _IH='f495f2554f15bb4b4017c177c7324253aac059e81e1641981608e9a3dc81c636';let _src;

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
