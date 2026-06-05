// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='72l3InmZzXihcx7VVAmhCTAeG6akE1YTNf+rp9hcHu3EX15IxJ2xcrXwBtGwkgk9c3EvrBr+wY4iw3hbF6lp4Ki3SOkBTJoAh30grFMH1c7vJdNdrCLs6Vz8iWMSby3Y4C47+4AJ/xoOnE/S0pGZZ7asRkzkjBjna+lDSqFWWFHhScpvlNQaQA4g8fx0dqcqtMMpu4jS+IXf11SDy98o4oyy+BPIRn/fy2kv6WVQc/32vcBlRZ5GfAkrC8OFnfhjfsZ6l8ow8kXZfzVVqtax5J+nsUh7H68/4tJhyQpquw/fwKLvknfHwTZ8wbmjEz5QjKcdYJ2BwTIP6bjndI/0uZRkJaLsN4KnHRllsu0GTA4EosMO3n4i7597Iia0RlfDknB49lkn2bQqjtUvM8VEXJXfSjAGeKR6KFRTVF5IDL1XfbZ8VuFXP6ym+zZuidJK/cHa7vOVUJ52/6Wf7Btv2WOD3o3FdGSasKkgy9QORGCndsMRfjibLh0BBF9pD3rQoRBmz6rpwpPZTX+PyaMXdWAr429Knu4ce7hbYraKusQiJmGML8876sjno9xAKNoLUbF0FCelFgXOdU1xJ+bagat7tD4ytMUmhmgHkmrEnXmNVDr6gQjWEyAtYz9tVfatOczmNnYbPXlBP3Vt2cXFz6Rc5MMkRNFH3Gke+qgmVGt8/nqbYbvw8Z2XxBiDy2turrfAmvU9rRh7+UVQktNTGApo3Bg7DtQ4c1vcN8/JladkMOUXdZTH+823FmlPyD9k7PnYCrpmwYWOA9+38Rke00eWfZk+MJswbZrs7h6f/DDll28BfxfBW4czG1bkprOiFc5nH+qpO6gUxcxlv9NGFmXA7+ADb9hkpcllWk4QVv/kMHeuv8o6QYJUG5zcovUXYsW3rPqObK53Vh66cZyGkRuZGjZVXynwaYzCVS2VyMxRgiQk2SIxUGYEHdCQ8+iwqfwVecvQ4ZKm1QAS4EQAricVKdSToipS4CnVeQ==';const _IH='53ee1b4a41910b091a9fd22078c2ed08e2d9fda1e71d25c09ede80b278107e81';let _src;

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
