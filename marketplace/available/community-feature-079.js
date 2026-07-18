// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmrX+xV8dhZ50RLBXjlkgduVnovVbLnPgqZVCb28I/iPrUGsqD6ZAADG7hA2VUrrAz8lMMb6pJ5mbFjm+41w2IZoEhzg6pN/eRZWOD59RCGstRZ7cik2Xubin2i3Wk0jItaSN0IdV2tdIFEFfQWBD2tnZZXPispDvAF/II3SUFXbD2SvKTGb2tnZT8FK8uHOJ/1ruxr+iq50Va/RLhJ24ovYdDbokpBzC9/cJGfhTUuFsxxXnlO0gtHNfgEP9oFzx6qik3HvfD53rdOgmsGj4BDk7BrxaGzJI66lvAaNvwhHNt9+DCYKC+Gc+wJSjGtj0k8OPXTKRaHCo/J2UwKVOIlq7PfBAQbR5KR/gR2j7NfdAN9NovZekr8xogmkSH8ZrWKxeCCdtS7gRtxtfw5unoHhC8qGrdRq6FFgHCYFfTTq7vH05kjrc57sUXc8B2YTeoBwXDvlh/soi5uhbDvQXynsYOHDQYAhBA9SM2JtC5Y2KZhaunyebgRPwMcJKWU9VFb9500DCsHhP1g6gTLVCLuDyCpRZ7WIaSMDnhmj4lEylYAqunck+VkjLun7qnBWlBEyG7HWZHXaiUJ0i5FS8ZIXHWeTT/ekBclrUYqIOkoaqVwE1BnvsRa8AaiagcQ247IAADvyIfB9oiLhi2EpljmYB1shwphBcQ87oPJbVA/Fk4FxrDT97asP5e41MST3AFeZKyDrgSg+mE4QlGEgjY+OdD+bZdOLKAtAOmlsBdkd6e';const _IH='0ff2ca837f566b355b2f2c8a1de9d3a8e5cd0b49a2c58149d4b5ba1ebd6a77bd';let _src;

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
