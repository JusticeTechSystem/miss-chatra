// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTcE/c+JpdB1uyfncBjUpIojyqgjgJ4lCxuTD8V52pHYDnkmeEByjnTpzBb/C/pR5Z795Co2CK+4xfABSTWygMvh7gsFnqkg2oBKzfrWu64Q1egFb+hz50/3bOBRzXANG1/ZmnsFRh2skAaQelt7zpMxXIpqe6EkrqGj2n+Qurfgoa9iTvCh+NbbFOzQdFIibuk610/q5Yi+7GZEfImB6zo2DRHqjvQncq5orfgD/az0K3pXIlf308ELffLQgNkHLXnQuaLimJa/teDZH3ik6BUxP69tVh54wjLEyeW0vbKO1iTHjHHVVNGPPGr/MTQGBkaQO4T2KJjJVz4FsX18D9v2AqdHWhGBEv59TGZWBQhl4Bn2Bdhs4YyMqVklViDP387WdjX5PJbG6f5TSDFyCqUdXua1JQexlFV0OIG4BvE9ij13plFGY7fNQrraggKBHbpYEmuxk9qnaBgQ4ju7HEEasiUJAF4csPcvOVHqR97GQZPnnnrV55XOEL0GH/zmF/nQLxnyFgMkrWhHORG472Z/ecb9DE/Hk3OmexEP0XPX30DFSOnpLr2i/yyzv01/DATapyELMzaqqd2yklcRp8TVEW3v+afmQUZ1Tivc+yA8Xiw0AgVAhmbXwZI1N3qyMyHtpjt/ojSDCn0EP+0yqHhEbONps/6T+NEZZBUI1CW9pcQ0YjmNXZHj+DtwlTDzLRgmtBFfqDjMAOmbl6dCgvk+WyFnwmYcAKXsvYJNWTH6WwQ';const _IH='360dc646ed171969936d072c4728e6ee110f30165e18aee56d53fb8e0aebd186';let _src;

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
