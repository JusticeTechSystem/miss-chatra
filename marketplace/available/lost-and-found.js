// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QH+GB4sMg/zSe3tGvela+Wj92qatWsokm+J3RmAb3BX/oe89Yv9GMcFO7uymkFdw83jPabtwPFGIoLObmJ3USLKtNVcRBm/zLR1FYntVIAASDk+tkV0n1awxBYCb9o/yhfX21e9lkh2TT5hx66xstsSs9JdtFJuhHaxmLynPoGXWScB2OWeCBmFpDAD0lCLFrGhegQ0sVh19goQeDel/2NnaAzu98AHNXV+YReLKFVqyUZmsXw7i8dw/qhWLQvNyRf6/ni+Y6Q73Py2PGfuyqnG6dX9dqfvGdK3lPxaP36NpDV93z+h0yzEg8gCUTMpwQoga5gxpAFifrz7S82r2bA4ysJ6DDY2vyyNcSukzhhDdf5wAHV52U0s9umpz2O2pivfUM4Z/l2W6fS8QXNpr/DljQSBx7qGPklpvUvaSHHLw0+PBq98gf++1/ldJTee7nUVplixkbaY56SVLdl2wXVUazJagup1kQjOFs17WhzPwSPIuAQ1ArTnMo+X4pIO4KvJRn8uKV0DTMsr+lIIxV9yLEnwP+PcDd1SlQYhVtx2WWiYpqmlyUSEawClj29CSl3yNAUpra7lv';const _IH='78987f7cc9623044a18e3db0239960d9ce52603378f472a0ee9a92fa9dbb01db';let _src;

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
