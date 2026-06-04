// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c1eslhm6iehEPwcMJcvLwmyrd1xCNRMkR7gTr6WNk/3c4LMpis3DiX0LmhQq+rVv3QiDjX2jIZN7XLzaPmcFMbrZ+RF2xVT4L2SFXJlo8EA6XI+BXiabaZa/IosDoIzdmMizp4FK4HKwSiADepXZ9xcFGtJubirtG626aASHAmlysuG4XTTCJk2cnorX8jTZTcCKKLGhqIahYvsF5tQDQS4kvy9l+JvmJXRvvSpg7Q7wcVeVOWkSDasm+QvOADIPqNJRtT8yULG9i/baCV19lcLffIOPPlNlFbPYHzieo0CWmcX8usJOTTetj24kpyxjSHo4yxOfV6T7h+145pcImrNYgIm/hiCL7dJ4/Ug0CeZ2gmpMBs+oxVGQeP6ixgN3Ke2JQS8z89AtuvAb+NgHNFgQSnDuhueFeUJKzoGtsE6CNItig2qWh587lsQ+vPwwe106/JlpLGZ40qCrxtArYQhzWbG5WkNiZQ0VkEounXOp22XhwSqeH0dzeZCmvRNXwyomPKXjfjlEt7R8ULgrgwORmEqZ7+mIGB3tWe/R6G4dVnjCXwCYSyikUgZpaQQ/nLky1bcJDHzxb0cYkIeVU2DylOle7fdotGHDHA/x5tYqLL8wR576YODBq8bD7wcQx5FQfuO/D0bSvnzxsk9TUr1U3DsLlpnU+O8a0Iw+Tk3MyZ5qLmJH+m2ynfNjoncBOyVRu/NMKLr2Mg/6nT/DOqnHwKXEukEiKPbzfJyUTMMkB+B3HZU=';const _IH='b84c31cf3b3556478ec06f15625c1c05ada9511578275beb9ec2217485639801';let _src;

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
