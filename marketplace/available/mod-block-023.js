// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8k3GKfE+unbH1fTJ6x140WIEjL8+BrQQ2NNHpJMFZW8SsiYt5u4Q+f+9JVQP4GJrxu5vYJ9nZsc8Qt0x7stjDhkWL4a3nIwXnR8halJi7vdmzvNJtWnX1Ucvg9tix3eHgJJJtx0BNz36DocLvwPXI7yq5DyjtzvKKeThYb1nZMDK6ZA2F5Kuxh3AOUxyLH+BD4Mlg+f+XPfudni0TI0URYHSvF8ugPkEeLJW1+ZPcSJv7XO8yb5H7Pyp+OgdCSTXFlH+25CbV9GB52TBJRWRHjC3x2td5UJBa/l/V29QKZt0IbHWCCjHj7o/t1boiMNrpG2yeRfhFQcJVkdF9BeLBd7M/HpXtahBsd4ILrY+rUjcWoFB+KjAxkMwwauWAQ24GrUyuo2MnTh5/d3D0KKKD7iUjz3nzHdaCrf47feIcFBCEIazsA7mSLnQSdfyAfdsIXyiDqY78P+/CIElYNKzreJp03Cak7aJOpW6gVhpRdNKrALJ3JeIt2wxM+B1WTPQacBczDbj4vDVe5KoSzxPcKXAyxcDQxFspBJ3CW0yLVAH+Mp8CvxMpzcJEYWrquJbeTkRo5cO4aLBQQL30jwRJQoiMYoKnVHx4s8HJKzl7Y9/SGlrbHJaBtP3rZzMZjk9p0QFUN6Cyi52qZDZfvFkiUU/eLCxQK5zgn92X0CLAItY3sgVqyc0shK2VmgBWxHIMHOm3HxepJZWTWTFnxF+nFUJAbqsAEVweuwp/0A77vFK3lduAlOSm+Bl0MjVcHqRGh6SzY1N3sxKIgFrRaA5GxSa6BipLDiC21EDlF+fRkkzfoMSewxPqL9pszlbfvB8BYnvIacyllWf1xB4PlMpQawqJpNRX4B4AyEwU2QWwhVLl9eWmh1/NXIzCobn942nt48l1DQKouys3ZXgWajupowd49cIWj38ADpc0vy+XMGO2XoL+mNQI8pK/X5+Dh/nWJxEQyGoEngRBNQuEqp7JNVbjliZVFu9Bd4t+6M5Esn2iEgHMjUFRZiHRT9DDX5uUNFXXbMFwgTw4NLDTMglYkNhHT6hVYdXZkAkmpeYFnmgCpjVmsrHXIZpNx00D2891AP2aCeo9BwjwNKRcOoAva0h0b2xp/hFR0Exh8Gh5h38qFzLWSua31LFbwpZmESrMXBLQCMmTzr3pNrIVzHbyyYAWi2icEHrnsupiwZGZUZAejMRMYelW/3veYV8gGoEeBVQdB7CcVJZgmube2Z7BFuFNHVUe35i9p94B0EoOBUpMUWzLT9hw5EY4V+w7dCVjwNWCgU73GHJfLJPSL2XT4V2rIwIYlJ6yT3rpcHLqb9m8Afh2hf2qmEw/TjBg94fn+43AsqDEAYkTEsxT3Ml4A77+fXyD';const _IH='f373882f2ce0dc3e0eee1e4d8c6b3db161a314d1f09aa803573a95d83c2577b0';let _src;

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
