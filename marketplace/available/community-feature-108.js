// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFrIMyqs+snVoCQdBdK+9rKc+NeYD7Uo5zMnlhzhA9mSgaq/o7EQ7imlmvTaNGFQNQhqcA+8vmbzRXzE0O8Wv0NnNSGReV+gkxLgFOSElIvp/QmS0gHtCmYSlm2U3MvvD70dE1lrofADo0DY7OEE3STW8jhTETAEe0IEvUfGkSOjqqlFvI+imS6dxUMRaCQUlSA4ctQD3ra8V1NHLvCOGSYJ0fGLLKq18m70Ap4IqB+u0bjOHKAIGh2VsbLGYb1/AW8JU/fd/2uAbRLG538j+MQkJPKI/28iC7+qdj/VrlUVoTIDvobRol8B8lHA8xnBq2h22uswJKizec1EzzE4X7cBhzTDL/18a1AVhvkW/MDsMQgjDu3NhK0KM79QLEDBDT8CzGzCDHKeoCH1ZouChzF+H5WVm6tNoSOMXfR3aQu644rk8ycVQ7ucTTfvN7n+3HkASkJo2LzjJIG/tGuP6a9CsY/dlMhaT2avGE1MeBALTNmpylIDtv1Jgq1lDvHgfaCom21/o/pqjhzV87QbC3nLWt/kaza6DI/YYJzrhtu+YOCj0PKOJpNEJUPc1T8EbTbL2JWuoDam+eeaMKPb/mToDNEAksYRm6/WzaSrVrHi+PNYTxlRcDa8mxdzoqWYSVOrMFCkH31SmhJJpDmoqMze+ckpeTKqjLsXA04on20dkMWMxqKCSaDZN2bQMpKFDIRy0IxRLer/w67YEI7e5GqSsfBy9/yBOvIVHtYw==';const _IH='1e419bfa774ff6cc6b164e568315e0609f48d1827d23b392462baa0e86545489';let _src;

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
