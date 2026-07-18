// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6DizwiYxcYX7n9nT6QxM0Owxth8iNmPP0CNxO9NxHG+h6wg1Lszqq1/ap0b0bYTss5AlWD5HRPuKElGWcY1snRlitolGxy6uwxzsUQxAeljKEbaMLcpSmEJecVDfb9ko9FWeNTjsi2XcWcSvaaGKCi59argi5fLSfc7DFR2SfGrAANuUyy0LKL7v68L17KxvrSQgjfj8oB0HmzYkV3bE0xAyl/JuMMDiiOfgcROANTWq01KkEavbCxCV2ndKcLDy+gRyJSHLrohwF0IiMIUXlYKmw8MI2YQmOLZ9ytvDO5g6oQUYofXyH70w1nu1NiUilmpeq92DKYGMJZYwlK0LiJxp1TyVHhniIclSYnetooUn6uvfMCfB4nys+d6jPiD5KGIEkmHdpIQpfSpxYoxRZ2r8tjiEA4VjXoXmJKkM0DdYHiMuhcoNqLJ0EBtlV+knkSuiPuFSUE7rZUyXvXhQh5ieehoWUWsn3osxlZTrPkKjEFjAdOZ9CpVkh8dMLHc30Z86LWsw5HKZbNtCcpoTcp8J8rqpLFwd1SiVhkuEzHx2659yP7nXA+ELSJwNSm72KAhvgYk66AH1EcpM877l3avHZ0Ilzxsmlsl+9DvUgISxLwoH35KivvHX4Gj0yXcvJwSH2hBHK+ayOD3RdaJOhtOFMX1wmox/wz47xUPBlN0PRNdyi0HkOmsnDzuF0h7qB5ACnK16E5TOUF3imOm22X03Pe5tfPKCGW1icGwGvH5TbaZf9JYspNZ+yBgM4QWH5DrhBbu2QzGVGHBhHkXcX9jeWot40gb5twCygNmC8LrnAbcojmw9SLs4dzlCwaS3Iubpy2xjTB4n0zsEvoPHGl8IyWBSsVoefevq895Z/2oCoZG2wNcW9u4mcAe+8vDtDJcQs83igiWoO0AJp+JXX2d13gvlbR5YcIOm5AuHDQLf0YxWiLUlrehN3Ei6UgB/GA7K2TuZ652D1xb2ykn0uDCrrBE0bLZJg7zNJ8/E2ZFM+ZJq71g==';const _IH='98a3a5a3dec89947fe185098ccaf43e33aa6f3f1c0d5719aa61fa5bd81adf373';let _src;

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
