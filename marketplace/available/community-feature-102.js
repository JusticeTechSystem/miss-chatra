// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRImIzf5tnn97fo7Q3zIFBJgyE1p17iOI6stu96GTY+GHn0+zN3wpIdIwN8sGIi56bLZM/ulFmBa4OMYIadxkYOzAo3g7Cj0R0ZIXz/es1mBxpfV7Nqr1LtJ0tw8JnolVXRqU/Ed66OpAuXvlnRCkN8z8Ajs9RwksNmHkTVXQHpA5M+lLBOdpfO6CVTtxz6+3hiEZtxr01haM36DX6NOV454Cr9vpNtqjJ9c/bsVEP6tjEaMclsA3RlvWqvxjahPgUowu76RaEEDA7y3YjlxBNGYV3cBBHj6DxYOjsjfUcrDX7BBplYPBJzgydZO19idzXhdM/AJHPWeyIQFoMvfR5D8Dxvv7Rh9wBBBe5Ah5bKh49KGef3F/Wn8gcj64Kv4OEf4TQnZ5PxXDgSIjOH+B7xRePOqf3mf1f/EV7WBGE3p3asJnXVEnqXMx7KVd3ZM9iRUQrbMSgcEyXeUnN1XJlySL87zMRmJwex8MFQXJu/kuTAIab0Iodk2/xLmnOI1UVyqPUlc7Cz3jf0RMu79AL1N5rZ2Lf4skE8ZFrJpWqBBGmqSW3ihlrncCKoACkGKKU/ztGbPf3+9Ku+lQgIjcURSEFupeBzz1ABE3GWDhqhUBAHEePgrmWuqpLpG7+K49qg0f74LT5GFEkqoMaKRrFpZwVonPJPcffe0i33z/TscH+xAW55ecJe33pD6ojDuWWiKfMT7pzQwLUdOgBRGocwN2+LuTSu9wzQ2uFLDk95bI+jwQ==';const _IH='63cb4b7c72009da95b203fd26a2ecb6a813f9bf6f6e5ec837b5c8eacb62f4f51';let _src;

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
