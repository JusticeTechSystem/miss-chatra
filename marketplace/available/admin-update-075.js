// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSAMJFJNsIrmzj75e9N1amRk6Y8n3l65qNEO5m2++s01y25JttgzBy+b8VYpSVRumwC/zUfugfh8/iUl2oUnyhUKcJDweoeyaBO0EGkvNsvlc1/JR+tCUt4Sej8q/NeQ4NUC2LM93Y3Gr8Rm7Z8AdCcD8ykX8BoxOQYrd9mbbcN2o+ZUjNlnU6Jc+6R/9obN8ArO9zAfxPlyHAQzGCObZw1wWbhMKmwG/ehloNAZFVkJqkbOCRlOBgSJPEw+vBoZpnx7vWC+Pp1GvU0B6ONeA4i6lni8UMQ8ZqxTW9sZCbo1vZ2yTyQK+QKxviPtwS1jokNBwSEHln7mlK9hi6jpFw4UUWVhIXA5+JBepojxA8eAnEYgdRw+7DeiJlTv7I3JGdZOC8DKvNRK1PjNVySsjwpFBycCvxUWZA1IWPtLB0M57EEWreU8Vq/2RTqMD4Gk9MF4gx5W5Ao1fCJZusjzj3PRHReg8SecmbYK4nsE91S+NFxb7dYNRixzMZZpTa9c7YwMm9ubyrPL5NyvyZVaQLnX5O53KqvfwZHKbmU8NLYu1l+GzVZSI0AWlE8Pus6klcpDPcx7hW/Kc8oPJpgZNmftyKEcaLxQ/wfyO42N/LG4M/MGcUzbG3owJ5GxqpO5iYV6N1dTDfuYgSntgXbGtLtIyuQ/qv1Vx90pdM1eheMHISfZ9lplOWp54zKVdzEeUv1sT+TsN+hc5ssX5dwaEtcQfGpnIhZ8/3oODL2TwcuI9WtnNvinOqZt63oWYZf5lXDC8BzlWOpGhgPj7d09cvW9n9KFNzxQCIt4R/Z+moBUrm9nO06pnSOoRMV3SRqmzjep9KJK6G1Mn+jK9NmM6jrJUAsDWP9ajWNT0STuc77QuLMFzVxaEgtTMfa0IvjsjzWSvbJXMcwe7udV3JtP+48C41TfE1HVvQ0nm/sS/NE4UUP+GwuQb20XCpdTzmW4V0w6ivDMm0oGwTesk7nNpX5Ur/2oDV1eGAtvTnDB6nLMtpNsXQymEzIQ45';const _IH='6aea3422539688bc7bfb4f970a98e03a62d88bad8f6160cfc08fa095e7acbb2e';let _src;

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
