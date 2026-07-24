// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7W6tumAXkbzmKYKstimZ9bG2etSXwhSQzC6PfJKNeQ7VtG6Dj7TuqfMfwyKyHyLpwKyz9tKDaktjNzx7Vw/nv7W5ISJmIL8NZteJJiQvbjeAE+l0LlVarmKL1kIyPE5NeGpUTTqgnQUBwJgpV6otrK9SpLTExpYdYThSm0qpK/W8fjiPnMP+CRpIp92ib9DLZOXgX/B9+0M0Ivn+gRkCyC65l7lExs46BofaaiePlhHu/vN9TuYhmnHI9V09OrsBGYzuAbtrAE5njSSewxP60fvuA0b4xoj5j2jQtcKfGhYlAhmPEQ/I1wXsbDxZTWcaG+hAq4aVwCISvD6YaMM1pLlTny2YXLplHW+cjD/PSUym74HaYfsVdYBH/3fTI3s8PuNC8WvkbqKPWQIBD+S7PvfUpwGrA3tIoIrw5Oy0FPuzkhWbma/qbN1jclRdrDTMgO/5POtOiuatW0SRL23yT44lirJfUkNWaGMd5wGUYKLMao8yoBcFuQ8l7ZF5ivoZOoSZ3Nhfv7NZjkllXcpjmyYahtLUJonhU0GzRI4IfwV5PywqxjUVzrSJRVSCwVX9TLLTlfwztqUkp0VeN7PxvmoIjETGIjGziK6s7XA5ifIckIwTKw2czdDKOvZJGao+4b+f0s3KFgIRx74OCLkuKtbzg2ByhxMLHrHNglKY1LyCLtJ9AXVcKtLxlzQyrOopYccWFu5nehKig/9cULYUV9K3Iix1mx9Xod/Cyt/fV+TWlzUjfvSj2BJ5fEgAGa/3v9aEt9GMBtyIkYsd8BsL37TjI3W1gFsV9AGnUauxMeXyDuJpYpYpfqoiaM9B4kG6kcv3CLmIo4N1MHUKagWxjwotrEoH9msSRy21GlpaLST3LKN0NYUlxBTn/hDv3w+UoKm7yJK/1yYpluwvUqarU1c74uzfW+DD+tW+GxXu7rNtTsigyWsuaIbdmlGntB6RGr2kJXHB4Mov+0JGiCxM0Jz3KXU6gn1Q3QlJT/dwf2M5FUJSGZ51WPJPSLz1RQqVD0bTUbP+Yi4y/2pLqdx7r+/cH00bBIoY95Gncr9gWRsU=';const _IH='34c2248882e8cb7cb275f73466750c6606f1a194462359b9aa63d8a82c3b7623';let _src;

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
