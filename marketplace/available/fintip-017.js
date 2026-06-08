// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cX3ZfMri8G1fWl7qCRJwlQ18HkiH34W3XZOw8AFbcm/KQy9WiWEKDPd5ovQAorfAyH63rL8MFz4vGmBgmPwQNb0y49t8CqfIlktW/oejGGBfAMiE97btT6/iEcdPqvAYHQAJkjyICflR1bB1sDecVV1tUKZ3wJ2O8Pv0Unlu0cgg0ww4lXiycSkzwsFnfoUaTBjV78Hno0BWxi+CFikoINNoNGRUIb1l9etpTXVhDOzKm5r14CCUnNnrPQC89xL3F6h3LYx2DQfXZJ2rGPjVtuIjmsuabilfdj5AdmaLoFdJ/4ryC50/4qzh1RMUU9nN+/T3xwTg9h4td4NJWBJtiN23CtQf/nmXaSj/l7et2sPtvJhih1mqjKk8HFM6km0vyG/i3TF51uwBHz1llAGUsvX4GZXM0hvJ47lhBeK17tu/WjIPRQe6ZDjB3MTtzqHwTM6F3I1JeuCIAbo8prJNu1anmfg5NeR8VKwBMnIzJs+BVwuR94FrU2YiymEVx9jPzLRs7vl8IXjM5XUmFRqfuqMyNl1caDXNH58qy3z2TU1/NBkeHDHzCa4vE0ZJNuMi8yRDptBt/PWSmgpf39pa+aRwmHwH4BMJWasyBkURWiGHPAh0xHql2Yk7G6QfGig/vZn0saTLef6mnFrQIRrDqb5tRWPRXAJ07h9YnJOc7+hkuIaRd6tbnPowlShF0IeGmYmMkE2/mKCQT6gBlQJUE9A4n5+sNFTmAGoCHm35TwJzgP/tIf9ir8moTMj3YGX3mi+gA/n4n1we/qUVjTXJKnM9DxaO2KPLzP11ReBW6e97MzdMRx4hQvefdm5MC06Q1BKQnI+5wnX85xxzYXM+SWQGAFiwveZgE/f4VXs2bdZH1ga3DYG1X/oThxTTI//z72v1s+W9L/z+sSVVuAy7ppCnTva8eFdW6Nq3jMplHwHN/Zq2hKgXzIEdMepz2rAxpBv2baX5j84IiO2thKb2gUPjhSezOt+eNdvsIUxMBCAbO+3pEZ1SYQ/Epk8KFgl1JRLZMES86DTPSGY1qv5+g/ms52sFEJMM4UjElmyotcwOBA==';const _IH='fdf4e74f9e649e5a99449cc6076add70ad96210099b32d26851d2f0e8327be41';let _src;

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
