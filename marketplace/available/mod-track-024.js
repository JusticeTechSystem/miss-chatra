// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kBoC2GTDlD6sykMdveK38gPZoMEW8107uk9bTBATDy8UHHqBb9G0noRiiyWFwvRSrJLCcoVwx4mdGgvie2OYiHAa7sPi6otEjEQ6UJ59MLtoe/n7gK0+ekOgKKqK8xzvzYUbCpfxjvDXvhTCkpjnW5iQ41bZnWt6td3cz9Cu3kU+GmSD0C30Ps761SFa4q6VMKmMGIeVBE9eoLK896G9siscL0BDzRExIo924v2g9jBI0MYQjJ+4nT12nwynNk69+o3ZMQb8PaKPf5uJC0MCe+fGQBq6VqZHhZqOEoQrHLhwfQl09duRlz9zDHdJ85Cpq3K8wtgRHaNo1k4Lv6fyIb2Jm0YBuwi7ehDl8fWTRm9sqE88eUnyvwazql0ov33uwIAPhts0BR2bsSzntrePISZAnvKC6WEW/rim1RQzJXp9NhY9+J9ALgRSuOVSBYtfUI3t4jbbRxux2cVrg+OlgModPm9QXvC0tN0pfeQlko2qH8UFNyPeHeR/obeKx9J7sjh/lPxXqafd0wsOZScMDzzEEXw70cNAyR8HhATDDbfucfbeG5g3lFwfjohi0wKLw5EBjbkOr2s/S8SAckkHleok20fMMqUQvjmx49wRnET8JYNeouFfq1KysGC9tlweC/tPSDDe/V2L7NV6f2djkzZzSYO6DZrEALdk9fVnX5+HFq0C80d1KpRHFEcMANtVcEROCuW6WXgjl+GigsAj9FFSFGcdKOnrO3oSvHAZ928M9nyqOZR/lMRY0MMQBkvc1cPaST+5fLwyDBDeukN+9zIZS3H9wlVaxRIBV2YFeHNIVh2WNVzMwEHXpRZbaDbj3Fdo1CZreUBtZF6Qvd4YJ0Cr5e+/XTn2CvjwQ/wXkfSuSRTupQA7OhJaGzTI+9Z34FuRSIbY/Z3pXuXNM3sIVlcCqnBOkNLr01tPLjP5lRRnzN/XYwMSVKJb5AGSgIBCUHZ98QEdGv62/r/uLy9pt5gxqkFK8jTV7fMHfWAvwGKo6/ki4z11zRhPOSejjE40nnA4wQo7d/7rI7IbMOmGlMr+7dEubXjFtSZHaDZRXz8hG37TL8BMTelhTA/DDdXmZVpd7PtjRONe54LfnnuFjrFVFHyHBSuxIYR/jQWni1kJolEmtEoUdHjqd4dFxtroJLwQ9j0alazWUuyQO31S1WIbk72NFZXpYF41ZnkYjZ/g7LHDCD6qcy5GDgRS5ZbPrlVRdewMUvhCYlQpXgcHPJpEnR4swHt0WypNxWpvPA1ipBmkpTtIRqDZFqgSMSJu2NQ4R8pxKaSoLq8fqWWK6BAToLG3v/9y3RH+b2xa2nTLqxdGdGTTqOErxsnlNgbejz2PX1kBIEjGYBfeseXGLu0WGbDmf7DevA==';const _IH='104b698e35bd32dcdb45bf5dd4d282bc70e754f91af759bf3106d5ad32db0b39';let _src;

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
