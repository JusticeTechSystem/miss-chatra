// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLc222+BWSlu6QByIENl8gg0aK8VqHbIV3R6EswRZwPJz2TLjlgOOJk/qL9sEV4hGa2fNcoJNwAAzS4AzroY8WpkBsx4Q/IYfvcUogb8PptVg9fkxLlCR8rBGbXnhTO1fTgWjahlg7Lf13SXCLv/UzkieZN9MlmKEyvVFbcolQIad2L0x2wPSsG1RyZqtCPJPz9rgKo/cYohU8yqMTUIRvcRNLBbon9RQdayJLaHZWGqda4FRqceZZNiPnQ1PH0Kvg7MWVFJU6SBzsWkXAcXPWIow7yJFz/FnpVBz5LJMtK7kVVTfINFnQ1F/fWzUAUGsfHYowiOb3jZJeqlL5frBKi13e+wxmQlEKaXqMUECGLUpjoztkUYzGQ4zcYneIKNsbZ4eb92aYdqRz8Nd9DsxUbui43eIejHOiM6FBXJDVQIlLT3DsPVE2KxFbVgTTonk+WrPqlupYLlveN1Eulp2NUGoIdGlwEQNwJEvSGGzTnddzaKxpmMArJn24F4D7ovE3zJkX2vci7tKCOsSgDWgOpbV6Le0gjBWMEJXj0wm6GlRRndaGIF+AyhyE5gds6mOPv8Ku/LwoYpt1S6tfuYeh+wBcRGNYXlBZeOk=';const _IH='961ca3a71dd8a79e5464333fcb7215885a793986ee97b588552b3c2bc99689d2';let _src;

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
