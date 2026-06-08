// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FzHpaxPzuUVE7V8Kqcdsq4IdIwhbgz9s6rnUTt2At4WL19QxmdPvlagVEMPRCiHZ7UPQFlRB3Y7QZ9tOD7qPe3lFRnVahr3lSHjGxnKybib+zuMIMHebz0dRNesFPJshfCQ/rsYzDHokIr2rd7Y3qs7JmwVm7oQESIM/Cr91GHgiGp8c7gPvcmSdVrbwgYyeCgx9GSo+z24tK4LPNnZhp8xxolsuemxG+134GRc4totOA1fCnR35MOXcSRJhcpKSj8wiQLMoYx/m7yPEx8j5Xz725OJM45nva44r4H7mX5pyzDGXF038zzpD36JxBESWkubMVGFiDsg/do1u4W5WW1ILeEMyxMtxjfgVJ/xj9wOJRfefFfN8v3c31Tp1RdW6zL38zKqDNHq7oTFbQNISnXmf3zhBfepyBrkFOeG61ifEVMxs7Z4eruA3KI3wrAbxvRpvCHl+M/ZkjqJWGPoc35KXvKcoFX3o4k6aBxqAnREFidsFt+Kqm2h6ckpR6qcLJMCnIZB0kXiVpwWYGzlqvHq/Hgx/Pw9Yp1GQ33piNH3gO5IMhFBAntifawxab+ejYv8vcB0=';const _IH='e142890d4e0b066c1e6f806b9870680bf82bad9c9bb9fe26c117d9f1872e2003';let _src;

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
