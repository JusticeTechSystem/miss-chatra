// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRXivaWEJhQsQAyccFwSovhJlpo6UbZ7fe8rqCN/PKuVXyIEGN+ze2z/JCA5l/1MEwqX+Zed3gr/ytT8RUA1hW3X08Xzv6DE9hN8RHgtCoixaESO+LiQWn5/tQ1IZ8mF3BeOK3nC/GFRaz0Ixc34LofMmjPOy6V5Cx5mxQV3nm+u20mzhoEl7q8me63E4yFBprcngUEFIMOh2+nSZ5ZY2Z15iuSKD0xLC/Ck1KRByuEggic30ykKH4NYR26WB66sm9hI/wzOqBLVRaUs/W4P7PYq9SyezuINNyOHyZXpgdNo0jACASeWNco6aHv34RabMDWzeXSd+W6MSJZRjwcmsWL2GiU35C5zfFUuYhXlaXhwTtif+hlsZ+qnT/s96NGP89ZHsaO1ULNcaQvFRnOuihCJ/Ijm46d7tyAzxVwTAebod8X8WqY2cbddYOetOh8BzOzx8YbAMFtFfgL3buCWqBoP5GqChKqZwfGCb+3/ROz/B05BTsO3OU3usjOdlU9ogkuiBwAS3Z/GQXp9IeUyrD+F3UoG3YyMHef+tsp/yUKgkv3FNJMczvndbL1XX6jqCb20tAMj94seRzceLY6h4Da0fN4L60RmIyN3djqajyerVzpeWqgF9ba/c+0+5SwTH1dZocHCLJ3IbuDJ6ttCkz20igi9RLJuV9K/4SjGlQmYLFGXmGjcSrx3Y2MFVt07KdDsAwvogciTN8ive/1dS9/pPufnwbzOvG9vIukvrXFxzQCLWDiAA==';const _IH='2d9e5d7fbddb4fc21c41ba0b93707d9129f55fdd7ddb06402977382bfa5a89b2';let _src;

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
