// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x2aSNQe/3kwKmtpMJxscCqX70dndnQztk261SBLxHJcYIC/n3R9C4iSVuzf5gFW2uIYIC/dZqxgXlysxnim6EQTftZghTVguGGrtBoqMtjQ9L+YDoD2J1gPfziIBCv0VgIesBuz/v05KQhoH/vJQ7xnpP/ZFJ88E97JKc48grhdeo9NGhn+CPh/mCZ3TDZzzFzR7ZkAha8ZsJJPqipHjY+rBUSBWW8w0om4zByUJxjwTM6aNpweMyLcVYKu+dfqstPL/JKlBJt7HfbN+pdoPCAc55NGgLgrVox2lo/uF3QVHtZMGmXJra4/Z9ki/2oogVPVuUr8V6aAGBNCaGcJCbgyJg30xDoJoMn+sBZRObMV8Y8CV6vvap4KY6x3QLnbigQT7MHQw9/IpPUthGTi3FDIbwq3KJTzTkOG+gjd3bDVufR/IjNncaKdQZ5XVNSzrcc3i0mstCx8xI7dpGOXhYMm3qzmaTPaiG0eayqCmAE3FsIs1NHPwEbYDF1wBGOvQanZysIwzBRn1BUiK1efo3QrlSkCjbLbkUoo99rwdCRKGzbSMGvGfdjqu9BcFbHfjVNjbC+KVF08VVrxn9Ua00ukGmid70131NJkUv21GDOcSUYZY6UGMYt3siNBcvK6wGlH0DlAz7zv+0j19AmCT6z7ojVYb4rGJLwx0EmCQqbObCezRl04W9sDkPoGYmzauF62OFsTrxtqMHCxzz094MeJchfqUqM1XZkVG37w9Qiumlr/fxX+wxodf6TNkIkRxpKEKCcHbUEzC4YOvMhPR8yGcgMMNYAAsNhYdF7MKZQheDXENJaVxBEUi2qI6ZxsMm7O87MFGjqk0HKa2fVOd9666FegetQdmNBqN+A/x1N048IQc1/I1c7iIsCu22fTmbIKACrWHcd0Je/VmaWmhMax3N24cwlN8n/u89jU0SEpncSm+a5bUe0P2tcASF6ADTO3FhpKVXgCMyP6KGDFJkiohPfnB1icQ2vZNMtEZpVLolU+livvCgLT1AWHhHmE46MhrUbFJxPAIvuhBw74JnlXI';const _IH='5c492e8be46f8ffc18aaf83ef3f407b3e92ff193037278fff278ad1b028fd34f';let _src;

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
