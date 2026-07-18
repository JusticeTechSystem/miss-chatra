// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTcTzuI36tncCJ6TJClWRiq7j5nND6AVL5HzlC5C0wJSS84fUqbOT04R0n3cJZuGd1nrbwJQaf6BIYtEe8p9hNKuCpTmguYMxGesLSBz2tQSXiEzB/CFtn404pu9j4KzN2pkngrQZsLtGaPbwXhC6Mk0vPpDq3DmYatM/3zcyZ0c8Nn/uRgl9t6PYqGA7/0kSwf2qhbkzoXb1mHVs/zZyFCP+s2kkJgcHougEgDZqD8oaNRbnU0HXgb87WMlAaFwrO3znosVBCxQtLAdimIUaOobBHL8RmUWekK6VB5WPctirwyvAyzb+9rCbLANrsIcBkCuvKa+uB9L9qvqnEUZTm8GD6VEF+wjroR+6MsX14Kek0/Gv5g85HrIxxWcNTWKi7tj4EFWCPWrQic3qT9P9WCM9cW4CnlcifgUh6635/qRMYv/tvqwprUkvnVuZ7MeXYfcT2nCC9ZZF1CZY9thehJ4Eg39n9ApKvZsTXlyIao19VbT+1Nq9axuuLuWxL/FVNiIKvlKWa0I7XSbm3EcNYZHlfwexM3mH0MLX6T13a4lWP4tP+PdcSi+z+w7VLssaXBzDIMh80s7mGSlYrI2xLP4Pnsubyt7LEy9dnF4n1Fsbu75EZcRpgIJqRv1R1qekyqhUYALMMFLzzL3qfI2VmtM4+01ZTyrnhjgu3Hh5JNxrZvBcKiX3Kp0VhZmsw4rWmTq6i0W+3MI0AmMbUnhqVJLxOfNTXFdH98uAZLCCTBfkurts8ca/9MTq0=';const _IH='18b013f9dbad0950ba2f5b1a50a8b41f40b7352c830e1473fecf2f99dae221bc';let _src;

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
