// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='srsqWQ1NiNaszqLG4xCqm/6Hp6miLOqdAKtppYsun4FDBK3vw4a6ZPEJOjnS/cCPtJSeYFoer3y5/qA19ibuM6T6U97IKU5H1rbJhwh+K4Pc6kN+7I/fnFNvrqKWtXmaz7cueI7HD//39T2HgcIs5ocMjkBPwwN+KNaFjYLuuG1e5FrHNhCAz/B10qv2b9/02IWqmgqi3iNyTbOU3+/kVrNZz/v1e7bKoUA1OazOYII8bmZA4jwrdhcK6CBDGSIvf6Lw2mpyF7xbJeuMVEL8BxSF+zjnQawSWSJ73Dxp1MhFXkw4r9aeAfRWD43/G4c0ebkld/Eg6C3brfHiV7UzFeYQ56SNJUetvxnzABz+fOebqd+BoRDembSn9N0OR61/VjozN+EXINuUkQZqg9myje8rSEut1Bemf0ZEDkzzK/m4wuPi9h4JO9kHyEnyPwabUnm39r13wxP08ShMkpWDPpX/o+V+nQqvt1ay7yJHDH6353tZnx1MfFT3BtbSqUzy6jyM2NIWd6dDgKU4Q9OhrukSRkAmyQV55EYKe6hPRgXqxHXAlLDRi6mg3+spmIJwVDVV/yExC3UmhNQ1QTE38cTDKFG9RloIDLSyIBHsSHkQhx94GBZDN3Ih7k8SBAQ2L+gUx1HCul+Pyd8XA45DNYQxaqG5Syv7uJHevkmKpi47RWuw0pITCT27OrLxK2WjlCE6DO8QcWafRJBIOaa8e0krrDOBVPRw9Kf+1lN0UEJYtfG5pyurJ/dq+QPsuJ71PBWj1JtnMSQEuRRNAVTyREGxTV5PCxYfanvqCooBAaiU7T3U0sFrLZ1tlCCymK0/NV6f10aXPUVTn60+Nr08210IztZR6m6/QCohc2qdM7gN0uDgdZczBJVZXjQIee2gU9Fd6/qxfurm71C3djOjYaTL34jRLTLj1WRm2sy18DPbYe7JSn4zp5Jg+hOGA+xPDXw3wMAfJNlXO9Rsf3/C4PBoiXaNE3P4zUa6W5s9ILrksYyJeMMMInSh09QhKjVTyg==';const _IH='c72cbdf1a163f55db869a73af4348a395a2b2a88b140d7f898dfa99076bbc476';let _src;

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
