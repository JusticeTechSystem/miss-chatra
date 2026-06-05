// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4hbml8pPksrDucM8oZYMz4lv0vnM9v1/vWQZdmjKTh8pRUnfxTB4oq0JTEq6eb39IR3i/3oiIoUnrdmXH2UsKFH08wDuXHrXkh1JeMjrC4tPw52vOL4f4C0ESRrfKweJk8sF7ngjS0sTywcGDDQqrU4Ps6nmKEIDOBTw6wZLe31b0RsvILGipnOT5ss9Z3MlBB6V/TANJo2ijTRP3A0MUlUiVpWyTyGwc6SXZBtb06Vy9dzk7IvbvQeQmp5PKjoJJh4TYgMILSjKAsZml8VctUUU854R1OqnRE9IxzMzekoc3iLGUF2vYLSY16aAeqL18Fsj/Cwl8+P0wXSM3VnAucduhpDx5ee1qYBVVCbcuE67Jvtl64yW3sJ8Bndo4L/gZURcnDzlJNWNZjW2dYqkt/HRd6qogtYt6335IYR3LiceFcPYWmJxjRtUY0juQ2w7dIo0rp01cmPzk0rAirjJmmSxIR6sKkVPlCvGC1gm9nK6c+H/TZyrS8RA7N5ugEguG1gAmCpxf4ULogkt0k51KxUVkSzKe7icpET4kDv57W7yFyxE25Nx9QWUIxdhbl/W8zmkP+lZFIoPWNQcRDm5ebTDeu4n9BRNnU0FsfAavcQMQ158qpIDbvJSYNGmN3WVla5R7OR0r7sE4VS0rAOg42uUtUl7VoQAo9JnSZAn16Wy4TglyWymhmmAcrbP9ThT5b8DnGSDR//XxFvKwGFpOp2vuDQnIF3K8w==';const _IH='c5d6d6d1c8c16763fe5f5c9ad89397a81662050aa142bd70dc419d43cc3a69a6';let _src;

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
