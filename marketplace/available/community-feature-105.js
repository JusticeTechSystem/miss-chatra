// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTAQmLeI3T43SLkPJ0cxjJP7Now8hQBbWB5exow0KStm6dhORSGdQ0u6KLYXEKwrwUOvhQdshLICI5IKcDhCoAECLQrwxlg9Ncyx/ixR9Mj87IYEX1Tey0WAOj8856aiA9I4U6wLsgRBdT8sPecNPvIMyqikjLtSajc6wmNm+p/9RT9+ir5Y92CGZNtpyVqWYsP3uesVSLY4DjWF3pFsTjOJdkqcOUOJwoGd1vBVfRS5P7WKkgiQi3hD/uJaIEzSHlIayjg38w4z5qDgC8TWjE2m1V4plP39X/iKguRwURaI6JHjb664xEMwpfPPzhrX2Q/9dsk+2Fy/A2NgAaE6eoZw30FTLuUkOY2vP+U1AUbYk/ogxMQ0YpvaXmUEV0ylmuFUmbkd/FU9019Vs0I0m1G4ZedWfFYtwKslFcURd0fEJU0J/92zEps2Byw5CaCmZx4ZSiXBHyilu+zgBNZuJtRrrh5IhpuaCvuOq7aBLIgA2t7XJBS9ofJSuefj/o4QbsjHGBe05PcTQsl6ON0mRk9zFyzcLbbJlaqva4rz9FOXLo6DcmqURNTyuAmrrzGTuVH+6PVUP74T3IoShoN42CenU3RQ3UCybXWVZX92oIoNhEPgoNYgq55GludfE+6ICxPoCaQhF3P+1F44QNeDE64fQTwE+GWwLXKmq8XbjcMPltcUXJU22ytukFuFAYuBn85R650KQwKAvtY/n0AHnUD77RsEwaA+Yw37sc3db3t/2qGkV/ucieS5ro=';const _IH='79fe43c0cce16e239435bb6bde0413dc0b15fcaa1a8799746b6b7e04f34ea1ac';let _src;

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
