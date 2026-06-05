// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='35zPkbH59uL+rFlS5HHQx/AWYHRRDukOM0df3vYmmbUiCjTAYZOKZHHhbQ7RjyE5jzjZ1qI8jfuKx+pF0/OveUJHLm9a3mrKKUceT7/NEI5iLa1k/2Ni7TV8RxvuJtfu+XyFhw0lpdmRlAl+wA6mqFEyZ0bwXfvrC5y157vSRPF0kCipkoKkmSG49KrRPwUTzSlzfx+JgC8fFYI724ltqOfo+LWZnK/ikSDp5fas/D0+nHU3UG2bFOsZBSVauwGJMpICwGXv4xyXwZcT9siYAo8saIPfBW28o94XuI5E5seyzLa8ClWzVHQqspBlMcs3JTAnzG/uwsPddwD/MnPFehw0MAg2+pvsfTlFHdfrqzHSZKWzTSBEBEtBHx4ajUJOtuxTZAbDUMSGm/gSP/PUBZR4lFPBqcTg7rw8kQWKgTu+3LYkhcB2HdzfXqh1HKmlt7yciDId4dc0qD7yTlnxmR+qkLcFBhdUCPDFEF/497vCyD/34oK/7xT0g4dVvueRm7RKtNAlG0Thm1pModAFg9Vj8EUJxaQOXbXSpiWPHaGoi4p2/TLtCXHYw0ulc1RF6bQm1v+HmejJGQDKdzBl5fW+1F85XGVrkOaOzwyLgg+k9igKX+Zmj6WgHv56t89vtRgeXkPqNzporTnqDaU7fyACQZH8E4nh1KDLrezJAYMJ8p0GGThaHHyxttrBIW6cgFJDjGo0p9RXTYuTdNvzNQVwDRItPP49LEK0Xeq7NR4eEVvkl5w2eoCfL0ggYXym6F42WraUckVhJzsxV4abLfUzA7wyFjZVFPzC9Euvz8AWMdFSNbSfbevZp+5AyWUre5lUb/cBam2Wl3TyXXpYElB16XXZluYWv1drWUV3nb3dqpaq0PDIIMKNk93ezzJ2tMe/tfGDMecQoiJN8tLNG/xK6JIwu8CTnMfS7Q6AJBIhu8UqE/KE5/C0rqqxxhOEEZl4thESJJvuv1XEC0S+CkMdYklJcaRjiFleWE8uB/J+RBr2eVX6rCCWHVW0TQwRexQVAA4ai6hR5nhD8TPNp04J+oAEKfRa19Vs+x3Z';const _IH='8385b5cbd169c2d26aa6f45003a639d3c94f75653191fc2c83d1bfe0a0c137c7';let _src;

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
