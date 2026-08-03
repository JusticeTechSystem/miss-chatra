// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThdauSenjUSjyF/DmFEEbZNkxdepx9NoUGJQ6mflGASE3c+uohHvf5ksg3aI2chXJjkJOKA8BwY+OVKzgU/Cv4tcOB3NKIHY3LJr9FrqeqSCTZNaCNNddy3zpasa+DRKeH3gN+o85emaDbUz9/gNQHxpDVFEPbpAi5Kj9sb2TUkjFt/aqGrqMe5sUuVoACguZEQO6w0ZmeNXJel0V0qO9pnFtQuaLpOwOtXoT9xCk0dJp3hBP9qzwtMKp67iikqBg61YKl5RIofoBc5bt5ybde0qRTn65LvmXP+XKMFBEMRea0LCVn/EDvvzgxFzL8UdxEniTSiSKFgmsjsq0hQiqchugf479gKfgmQ8F+JEexB930kC0w3PQDYWrBjJ5Pw65hvbsmK3hp6qS9DlidSBoo7ZZibSygomWgAZe5H9iCJkMa+xhUSUPXi82+T4q3cQUEMCF5G384fysKbtXnuU8dxuEUaFwwQgrgqFCA/6iLrGP9WA==';const _IH='21c9104ac0d4fc3d0163800b13d3461dbd914d7f004d9bb57ade864fcdcf1c12';let _src;

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
