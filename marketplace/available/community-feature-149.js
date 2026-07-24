// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRosz50rWM9M0qXUQhL2LLo+6xKQtFoNCkpdQ/LwLwFNhuRyhg4Lk1ba00Y5jqZHpYlaS9BbA9jxwoEPWX3EORQ4THKUPB6VcM2AgEUQ/NPYrVgflTPuwnaeW8giC9eWQbhKQn2zNo+wQwcMnJR+CFNEnyP8cXEZEtKG+dWqRtVIHr0/3tpf/KuLc+VKiL/ve1y1jb+sWCpud2KXQaMIg3CLIBhyFGgcL5/kBzjYrrBgBjOajjD1XvvbOpU632LNP7fDhgS26NSn9xRSlJ250nl+6vpgowI1HSVABYuzf7RwEJDTe/KDs4YQkXCebguLbiNYJtj5V1CAOVVl0d5dI530T7J0WiI5tczFYc9Fyqc1BzcsuTLR94T5+yIN2l6kiMgs4Ww9EkiN0UQ9RFdU6Jg46XlESoUsllqVFnlSmcVzImVii96ISvqbLnv5Atcxg8cAw1vF91L13cs0Y7MGaDVTbsQdlbx4KlTFz6rm52MATGBTwJmBNstEN0Xe11ecOeTHal/+gsuAdWl1ns3XcMTEOZbqYm0vrgqkqbO3DwyxHsLapSf+nReJAIQ2smI0NPW2bSdkHBRrSiSdGqmyIrzVhZTFJu+6PfwLA5jICkEMnSvXvTV5/HILDUA5tidDfwJf5QSZHHku7Z8ptQx/1IKd8gBvfP9aeh8E3msA0h62F05x7oRrMnbeAgI7vEfC0ltQVtjFAgm2pBb086EqradWA/5V3MVykiqTzye7R9i7w2nl/qmTA==';const _IH='a0dcea5b4563481ebf3ded3b2dd725240f3148fb4d68599783fb1c78ad9186fe';let _src;

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
