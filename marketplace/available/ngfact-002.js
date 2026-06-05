// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RnmYjkOWrY83X7TjhJb6YlNUi0IcDmBKRROmsbHfW1vdIpXjedOsgg3NHHUVjrjsdyio0ssCm4lzH8gf8WkU/HOC1YWi9veVgr1Ji8XU8818OKsYABfXuqhSoZncfydnuJrTdSwWlg0zea/pjmFANzv3MupE0cXtEG3OzxDUeLRIXcPoYYfRoSs1gVDXewAgbP3gotXFz+OCnXW7Rs8tuttyWpu/thqnNMyH6OcuXYfEYqsXHc7jFoa6owP6313umHR/CN3BNgv+33NlESWZ0T4ZUj85SysWPHUyBsXh67MKZ/VvlbiYXZg0OoXyjVreg0F9Nx4mxfegyEA9zGiKrFEaxfrH8TuOR0tfLUv9i+NPxj+gatn6NaJuOh+ox9i4LliR5vFG38ZAE61odKS+SEn1sy7SX923bW4GrwIiZWkYnf/huQkR2xvPzkVu3+XBpQ3pVPRew4s9dfV1X6IjSlJfu/ka5Z68AyKrlSWRj+Nz3J4lHiueN6OFudMbbQFtNAXrMApIOHIRuonESZL9lYP9xM6TcG1DfccJayKfZQNzU7m/qMqN/P8Kloqd8C/+BAEjV94qoJaGHxNLngnfbgA0ipdCmkPmfohdsJdAY5D3kozN6N53Gqtrz/hClCTej1rGY+O/DW+vqeUd2p2aTIhztWRFlldwyzc2C+JtLRrw0wQ/mNNxVBAnAOAo3QYGJYVj';const _IH='16ed7223224b33c39275063206f6beee854318de47cd3ff65a9f85ff0dfa940f';let _src;

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
