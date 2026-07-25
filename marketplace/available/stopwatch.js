// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfq8XdDjZ0tteniv9rgVQxuQEe+X/mgmM1//Lt3Bdoi2LzO9mVWNwszV1BqlcoZOYi7LMgb+SDWCtxx69aId30j1fPE3E7t4ziVfFLm4BBVSP1LRYWU30d38mQt3cTzoGQetwMQWX8Vn8sqQo+elnj/0Sz/78J0/qEDBkeYsigCO8wswXJ1PTBMB8GuHV5Gg9y+jM/b9VOAdQF9QSgwAgIP3nZNoo3SKLgL/RTD26zdIERlLVGopwtu6sP5Ifm2yV5FWRO8nx0JXrHgR7cPvE6Yo7zXKcKDxT47WP40YeNzoApD3BQMu1UzdAVAQ8l28n3K1faXBEcdmj7JNdpiRXfiqcEp31YitkF7MQxMUdrEHGbQlNUr6PJFgD0HyRNPO9PwKpVKxDXozE9+S7fgvbIySb7tVcpVhP6TDWstsAfbaJY1ZscaNxjtUAtEBQmcl9vJgfTSebCXWpIWnAtVLAKpyjY74ggbIiqYFy3pmdTZMHcg7K4fiqeJz/AmOMsnA62bvoUARSaLTGtyZ/ILvCKEkAOX2RKvd1stQB4tdryKucwUF3zDYcK2RPlT3GogwvSCrZJ7wBQ';const _IH='b4598473a353c6fc230890b992dba8bf23edb1b5e130c14dc3f21459b7d3afa4';let _src;

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
