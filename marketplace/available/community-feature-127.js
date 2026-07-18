// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5dV3YC8wUABRF/OASGR+cTL0QIx+K6M18evx8w7upymu+dGl5VbYN9tjVEolm2YQ5cSvqhneaYKhuw0ldm3j1DxlRMAkNO2Lspt/1C4ZEJzI6Rg6+et61vrwKi721+cuqgBZ4l6Qz3NGfDu1jyhSi/ucBboZZaT2yAClcXzbvxBZfd+8YOCGjZq4W+qj5bkO9CyBkFHSt/Ls8DuXxMAO84POcm+m0ucOKid1z74arblND/RiT/QphBtxITFT+WLyJgz4s0X40SmMmx80xP3BseAMGkl8KikpCFi4oKdOMO1uTGX8OVmKQ0h8ns5zMoO+A2ZNU4U3ci8Edu3ZeWNQxKMALi+1ideWmQ7m8fIAHdvbXNkNR9wNWWuMXB460zobWlN/KL6NfQ/bP303LkIOxb9ZJQRrlqdW0BUnFxwp2aBZYJTU4Mj4Ls8qaPbc1zVlrvAhQ5hQNN4X7tVtN8LYo0rhirCCVHWA8UEAfwTdWbSQJ4cZ58uk6KJeOZWeLI/mdpkm8qcHADQx0n1c5nLD+QoHtV6+4dGDNttOaeKTjcn9+L762bdEFnErJxPIlzD8g0JitUrNzo6uSHu6Cv0Iq1TrvBm4EbnMHdDLdOG4HWgB8z2ltiP1gxxbS99VEIeR5tb/HkvqHnO7F/426lNvbkSV8hcHJcrw56NShrYPZ6rkUTIz6SHBMkpDHZMwNLFil9pZsEpQl475QBxEQZ1/GyGCpvwdEMrZ6R90GTfjZBoWFbQ==';const _IH='a5acbc6286e6648e1334a0bfe0bd6c4cb6d96f0667e1081587f433a09b6b0c4d';let _src;

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
