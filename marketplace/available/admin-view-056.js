// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RHh8NypLEp2iFiA/EGBit56AMCMWRhMM+Thtj1F2342YmkuRutlS1RMAn+6eoCnIZNI2HKUouIU+GQCJ+Lj1v2PbkBuU7+7pP/mysR9UaDdr20yxA2GRbZ4NvOXAEBfRLYVlQd8WnVKkPYd1XS+JvEIX9vac4GjoeQ8njkAxbhWuUP8IqLMw2235bjCNf+uCiA3Qs5IbOej8aFWOeSBFjDRQMc1kHS+HVRYaLE9E3VllSzmaNiQ9yu6eiaHkVv5VIKjxYOhM37b1KXeVvJetv12fimlP3GR2lFth4V7pPvQgHMTasTb4cM+yJQ5SeIMtWmofuRx0GYbFkFrkN7jt/IFyF1tAlPYTlIYzDMcUF2lTeDIdLLQKhVrBokkQppmIvDjN6GGBA3bHb2+wJOiEXu7t+uAG1nh6NiKsnBl6Ryc3Sqce1ab2l54QSGD7KHrBbQ4oHNun99fSZvPwdNeviqN9XL5L8UtkDTrdvYKIm957xyuGmI5oa0rOi+K+NlPk3SzDEDYYcXZiTRLAayrKR531XxAfeYmj0HOlaa92ybkLYN3DgUqj1/o5XW2TVcsOzarjlgUlA0r5DXXJwcEWaGaTF0ad/CSuA9lr4wZ2Rt3KJq0dGiQ59S6mewpg5VypQt59Wpr409+r3xdoKs9l2fzOmBJPI76OUKMV1zERjogkrHoGRY4hB0mIFLwJ8j+E4PYAxeDhPkUfzTCU+TLVjxD2k0YbAQlV07i3Mg82HUOIaaxQ6it+8oc7y/wnORdJbDDB5sej8M9ioeUzVLAtTibdEuoVhgiuVyVwHyjH3aZXwhFrWPm7t9E76xMccJp4YN7ggxUHjUfVMnMXQ8KCa1Xqh930JgAGRb+sYGCWNs0Y49PjkXFllVoVKJXTEB5YV1thjeMa8We7i3ToYYBPs6KnMZGMpy9Qeafm6VsoxRx/okUCtqdJ9dV6OsLSxnM77d5n5LwOtWDcUrDJdcS6ZU/aNw/iE9DNn2Vcjkxvxg==';const _IH='b0d80ae2cfca05d41096807fad85376f74b28eccd974122b5df9b0a8a221d406';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
