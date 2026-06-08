// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/iL7od2LgnZKlXW968bNDaK59YECn2gOZt/pk4YAwoNeuKC7hZUnjOSFJYyFAKXDTZpBAhbjjXFjVXbreObpR0CqlY2XpQSFEMSlClNp2lUv5qgY1vnGrdIh6Or02WW8XbG/Z8Iit7xssU+npYEmGnEv3Wus1QiqSaiBck1CJac81U0pBAgFqkCfIfqDrSacXfcZHc6e/PjGOr6l99FJsOk03d+dmgvLvUgk2rVxJmn1xatdhkmTAUWkObAKHcNrJIEo580CLFgPN+bj5+ayE87fd+h4a+oJTTquEWu9Y73BipjAj9xcsyxonLVxStuXoAqju+KkRbTcRHDSFu6RSuRO0ad+HqTcOdyELtgDvgZB7xpLK0IrAStmX1UwhV/dJdoMONEP7eRvE/lQc0bFFCHN/DXEvU9S+6n/20oSdXbRQ4Fhj6kkWLjH+bkItjyED4xNXUBjeIpimXNU7D4qYuO6/lLnF/IGp8+Zi+Wrc58B2JdFLdX4k3BCXDeoND4AC4Cw19rs5vd9Ib7MJbQDIfNLEfTLs37RxE3WRn4rIvpwlP3mBCVMF/LxclEExQm79rdI0Th9JWSSUXINJOfkXISFU/et0cKMdk4L8dRDExW3TAD2hho40G46XNVxjrcf9lOctEp1lWfC0z08QQACHmP2CVKJKbt8sIR79gyO+6vio3xBwGl4u2KqoB8kMTe/pJQDIhY4EeEDHeHNKBzcgWlcdk5HKmJN0GK0UfDQvQ8sUmJcqfUYh5ptlzY5McB6O10AZjBMIFS1ULGTDMXmUqCdMbV5sO+wceU2VS6EZGD//zGuUhoIAPKoMY1GjC4/iWZ/lHDqKbcaHEJDte3Fq2CmsOpKp1dL3KOgZPpaJ57ODVyppdH7JgvNzGEVu+c/RdKQKLYSBFyZNK199S5aqLE9B7WI2ZevY7lVK0JpH9hvyXR2cvr+ep3MUkFPc9miN73WABA4U4fIYyCeBtGDe0OaDxRJy276wiG7XKNsEzs3fAUwD89CaL/KHRTVeIHLGp1vIOWsfR9nBhpceIgUxuZ1CI/JpR7fYD0TjOpLyWycfonL0CV+7WCFLPP1/BvlCgr53r/IPWq1UQxWrtBEEJAVt/pO5y2IZsyund4sNLJ6Prt/jWUboJeUNUbWLktvd+Nk9zwcdTgTWVe4QN2JqspTTwAlAfLHpP+J9UbQvBEEbk6P6u6cdjHP3bJ0SLDGQzmL';const _IH='cf5d5073986ac5ff0ee8ff422b3a72e41ec0ee0d8d35ab9266479a0ab512ef4f';let _src;

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
