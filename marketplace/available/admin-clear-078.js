// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRJgMUv9yF79VAMRVJwq0YUTEKkkgs0xxlHEnpq+WVfPjtCPjz+pdFevgj11o4EFLOk2Zpi2HJfYUgRM0sHOEO0P5mcG1QAjBXgETa9NZDSCZvQOd3/4qX46qwd3a/PmK18eMiBVmebBPhInL4I24xknGFsitQenKJ5f5er2KEq8x+IKJoY1jOy+VfEnfmvBnuWDeicaRTPOtGsePVH0a8nQ1lDmPHGuUKc+WKVmKYP2fgpx+UC9Wb3Y4Qomt9S/tpWPqKIu0H6Id9yF5LEBtvt3xYHJ8XFXRRNEIbw+cxZ6PLCDBIy7W2hdSR/Y/8p3EX94+SYt0DMxKwZlhn3s3l7vnSQGHMlkNiQAWgHRi5SUFemcaCdlynWjaojhepd72UZYZyNp/+74yvoAxX6t5UcqxzFymLVn9UwSbLLNTbKJXLCzUr3y5OkvEYoqHGnE3lIDDG6jKQY6RX+coccGg6flN9PNoy5ky8WXK7oQpEfoRAUJMl1RFgKQje74zDB2FKIF6uuezO9DbgBItDQOud6Bo3Uh6jO3fm4UpmQzFpJg2OZmIfN6dBn9LOo8rEfJwbYbe6XhOiSMwexXk+jr7++syBsSFiJQTw1Ww72k3jAutU8rBHOcOZlJ9DHuGZl2ahbcWHCoK/+WtGeDuLLN29FQG69q3TExOfSmBOeackkC0gSwNN1zYHpiXs/dISNJRMHQaCIh0My4N8RBFK5xYclG2cWl9ungWMR10rV7Yk4D9sPN/n+lgW6YAgAOxpZXSCD7jWTSdRdMwhB4xhz2D4NCdoSQEABqlcp2P/fgAXKnVF9Xm+/GwcYSdpcbDEb/fMhPI7e1AmfuQ7jPZDDWuZatWPRqa+S1Ub5T/OwWPnBjlxiVkqdNExR0IXA3ONRDsHS0SvKnd+mDajA1rFaqBK4nI+iIytiQLakcw6v1QlF9C2+aVbXGgOrHQMaUmmIQfoUw5ddXi6JEk7NiIfP795V54XR8V5/CB+vdJDPMHeXPjww7VcRzw==';const _IH='6020b1a61bbe0f01967d7514d51f8b128373db2ca65655c00cd921be4257cba6';let _src;

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
