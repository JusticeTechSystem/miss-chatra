// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fcai63dkTDNLcxd9gDT0ZqaCdZrs0XIx7OYklE2g1sKGyeyyGK9wEEcPqNsdsttppVSgapgO8KurHOBPssZ6DWtQuYRKyjNKCS/U18kQMyK/EbKkIukINLA4MTfWf1/0tTMOLQ5vdLR3FlDe9oSDKAfbkrlqyein1rFcmkbwKAqHXPnEWbqgoexlt6Q1TOqcOSMY4HyvHy2moX+G8C1PJGdelJ/Ds00G4uwSwjl4RP7TMUYndcYerSFwehdGlFcxzV0ZIff7jjjsUi4oR7Xi25vAOAMUiKQFQxXmOyiyhWEQ1sIMGVFjaOy8lCpqWvWlDnkwOcetpBIU2tRWFYHUMS9IZzE4I+xAp+xtAXuFaWtlXvCEnik1z5QkIxrKSP3XjXaAyl7tnUzOVORO5FfziRTFuudHmBNNWbCwxE16/tA6fkaUVBffQLFcVvsg/o+HEmIzmz8v8HyxX6/Gnvb6n7314gqgQo2l6rkBUsAvyH+EcBQhWQG3tUYE69xZyoCE/cffeWmgEjGHNoTDUXViCYfGD45Ok+WbcHDlkdNaxhoOizx+akPdr0o8jzLGCVrDMHkK4XknU0vIzJgI1enm42FilL6csL4VdGCPwfnxCzFv3PZULqQYurQH2e5/2eoYWEtOnGQaHJExy5Okk2n+a7VpU6K8eMj7wbvINGCcVy+kfNqElhQP96xjsQdxslH6sbr82eudSH7W2wRgksCzFn/GbIyCkNio9PWt0DLyHJNDUg==';const _IH='bbd9ea6ce64d19d190caaf59ac6cacd61d7d2ff6bf04f596da5464f2b806c0a9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
