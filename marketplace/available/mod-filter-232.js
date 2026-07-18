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
  const _b64='T0JGdjQ+q6AdEtst2e5HHs5eswXaGIyV1mvhAJ/YntKomrIYUef1srSCH67ez6fT52fGSxgzieS8BNqdV6MVsW54DS7cNJSX4JpK+hrCiiw+WssQiLE4bAeME/OqeOdG3hBKUdDRn8YBBs7fq7UFQRprs6QUNHQ39u4ZAnSmG/OprfvhcrPkJ7oJL8AaNbSXPfSfvglnuRBJ9kK9zB4d5NItulBVpI06YXUx5tjt+Vmq7KC6YMA7bmyCtE/mv+76JCXQwdrsdbo87+ugIjQwLrpAOTtLsW0t7zYCeWimIuxB16tQ0vXw9yli3BUKV8/0KFrqnpKBJJOm+b0LKO4LoQbEmc//75X9gRPDf12mPOmdsc/wpmXRMhv7BSO+Fbt7JOzmqJmLWfYdH+Hu9KsyYiNnluyYhsVxLumcRAf0w7guzxSZ5ZBc+NHDgYsNmx61Pt8oXQS9ySOW49VsoufK+WiTNsfvLz/EIo2/ziE6fJoSJhPaePkwOhyebN+t1vsOmDlIktb5mDUNdUBHLnI7JPEa73u2MM3tJHsbq/2UurBR1te4ADFaieFLiR450jr4emBSCh0vTgKozu/R8RvIfKrkwoRWoJ7DVWpMKJvSONrE3dj6JfQ0DJyHuiuwUw8edcapz1Bjx+DIgrz50A4pGCrgOgNhfMWPgMNWtG3w7cbdspL7qVmALY7GZ/sL6//vXiM+BMkDK6STZYeavPG9BnFsSvPC2PW2S9wjdIpvUVTJn+vOsIUA1Spo0XtLSWgRmIz3+bdAqHmHGzF7BDCzRkRcd+wlXmmY/a02xTeqB837vrdsErj49g/hRn99yZK/+nsDyN2hA/CKU4tZFD69dL1uFIv38a3+MZEknW7Ol9EDLR41u2gg0Ic4dqLfKAfyHCGL0PeAzYgiCSWz14clUUL0wgTQ/cdV+UE7sXR5EOIPm8v+11xTbjhIAmyW5Ffcb2ILIa2Z7DBBskU0VTJfXGpbFAvcK2Yvw5LjyaaiZkZ9KudyG0NZQEJfBQLCAOEAjpK2vbCLTWsX3YH2eI0whcUxWDIBy7YR3JQzTBQcgK6imsEvuYCZuyLkMWZPhIsC5B80RD6NOjBUQVRbO4MuhsOsuOn0HhYQCcQ4iyiE9tUx6r1d6AsHKN+Aahpd9iWgCHR6fyan81ZVbAAARI5USeO+NxLK7KpOOZNInDxIAuQtj89NSYMcj09MuxClIkxdqjOEcp5BXh0S1NjL5A4aAdAXQQxVDhfV8Dfc1Z9Jxn/1tm5Nge8mqVwyfsTGbpqDnbtAo0wR837YY9GH/tF3Gn2VAR/kUmKnKBYbOmApp/J8CsIxvvAHhFahlhXSR40jgtdPeIW2NRB6y4vhBlpgOS6695XQ/b8ZjilMPxHqlIwLpiPISoQQfY2eW+RR';const _IH='5017d2bba412aca0a0f39172d5fb35a04509adbcc553e119c930f5a3c851eca4';let _src;

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
