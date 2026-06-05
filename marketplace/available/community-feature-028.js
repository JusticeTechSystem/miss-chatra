// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='55xk3tQ1LwHWB6WgKxw4mkc4XiNC7EfIO9fqj+8lNw8LMg63BLDdw41MrJv/e3OhjWuN04+XyIN1gZTK5LhyNT5rp1rOgNaB1/qi7iSWY1D7UvnEteQn+HCnkozbud3kzIldaWrzWf4c3MaNUnWj+wWChgJVVVWq4bT1ml3EkafsxHi2cSg7GmXG4TqZ5xixB5EZZMlBhgsGsU8F6Gp1CZEpXIkYRlCQHfUVcdbQSMimdzQ6hwcrdkg91FVLMwDZS/aX0nkcTPDqE2/4mtOS1JpUXoFT301Bhsb3iTbCWo1RFo+BLLLNIikzsNig46YVy35qihQNgUnJDTdvVEo2NdQ+689PTnXGL3CWcw2ta5Xpc6rxfqbkKhEvlN/N3PVnKalsk4CEUMVduYTeBj2HCKcnvp7GiqXTlCb4yjV4Mnu/APxDtp84WOKlbxIxlCiUt7t9S5DlJzxeQCCy7rspQc3PdK2zNz8qOKZEzZFn0/fxNSTMJ22F/LOiKaiMmyBD9bJK/doUzu/xjp0HO/Mg/R6FZTL09Oq2utJHgiVQ+RhmtSyfiEj2q2WrIFHby5F+htVYZGUnahhg8kVRCUQ/MxzeBZd/OiXCB17zQSPiEoO3da2vuhrmIpD2gHPP/aNhFZAUbfXrK2p694lH2Ml2aY3GDi3XmQw5n1Olb+pMQVizuMWMhd3NQXFWYXIjVXhlEs68Ojc61IaTtf+Cnlm56vWgOBtaaqOC0g==';const _IH='b39113d684202ac5a128c912d7283f38a0840baae9aff615d5ee8f5adcc3a081';let _src;

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
