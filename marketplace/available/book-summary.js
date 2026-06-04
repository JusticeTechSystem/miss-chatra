// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z1Pfmtex7sCga0EZ6mQbxGSvR2DNnRV58KvX/YXwCTkjk/+pICj16m0NMtkBACaQ8N46NFS4es7d8+l285k3rEXd9rkXz6yFKENLiiK+v0niDy5eJbRTiq8bqKxBeVJ0Xme/4cwNlM1C50RGgoUCX81C94zfm9tDn17mQIYgkJc6pTUV5MYNsqNLHtsOG0a/u0nWgYLBFzDKYE4ploUtdMMst8vWNu/yk38Jr+M7Vdz3Tk8npM6kEPyrLNE7b6IE7MbVtIFo9Su7ajfvarHONZQSUJWlw5PTOgeFo3kuUABKrW4PLithN2nq+9FNNTcMnehfymVpVQx2ONYjTVFJ3lYx873kFNk6yRcf72OoVSYj7CyvrPxNi/eeqd6PqnhOA0fiBQkIDy8v6H+kt7of7de4qkQzhlqalqHHIMRQRRN7yxE3cdVc8o4C1L1sivdM3SYYVH3n23qcPSTc8wVA+BX22tlwIOs=';const _IH='a28f802684cb3356b4b463a594d6a9c7160aaa7e397bfb0f19af813f96c4dbd6';let _src;

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
