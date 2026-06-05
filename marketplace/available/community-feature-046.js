// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZzTcZ6NsILACZo0sKfFtJtwGREfk9E59JShn3wgDY2K1dfroVf8e9njAE8lXb41icrlpZ1XrdoRdku2tUh2IEaroO0JHG9ThWRnyj0X/O3/HvxVSAQS2QjdxSrik5wLc+tiV2aZxHWp+RpT3eid/V7Pdgj7u3k7Q1F66TOlNxBkiBeVMGRf4RG1Wrpx/xbjl4kU7prnvv1/KrXHkQ+e2TBWAgtITgnELmVI9ebZimUc54rgUVh1JC1vbXxdGqmxnecGO32TYvJTcdbDQ5NZpp5zcMfOZxzVC0OVBbxKinGWz9s9bKe48avchxUAzyixjbdr4znJsDswoF6354xQV7yP7AIFDd2rXwosp8CRjvM+6zpV+RZ+fxQ7WRa703SSoFROEs2RYULMv3kNzTKhx8sVy5T5YFrHilNAg4xRucaI7E3//Zlhu14c3kwnD20Q7HyIFPg2iWYHEcVks1DugykKD0EmL/Z28OKRn/CPYVrortAozpa64gmyhV7nK/GlC3EuOXWubf37j+3fORWSKGZGqPLz5hC2QyeIxnd5p/PpFe3aOrvt/Hfp77hn/CY/RYt2y2dAlgxktfM0NWs1/16VQN5MsLPwA85gldyrRTXvFlS5Brb634W9mENYPje0P/X7zY9Th40OX43YFv5wmJgepbx+5cU7ADPg/JdvOKxBhlamMHsrUHJkhD7Zy7P3ORqbXv7QoK3zMhJXqJoq38pERpQ4=';const _IH='e58b87bbb572c443bcc90e19775e3c5f06aeb66f2c7110fe83deec82835ff7d9';let _src;

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
