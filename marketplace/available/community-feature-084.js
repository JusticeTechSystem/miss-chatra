// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTwy0MaUlmE+fACLGpG7UcJgDZM2K0jmBsU3+wxryOFjWh4ShlJbPF6Oydv0/SzMV09Kh1RvKaq7/fmhl3iEPWRNznZQSxDrIKtUDPC4GmRrmdBWxwTIjRU3hCD2JFFbQ5KPU6XzWw6eBcNEfgK4SvmxfNxtxFZD6ZyyKvFcZysaWT+pZSSxJjccDL/dZf7fl3mHGa+xi9uLYP5KDJzbR9wpJJ6JgOhnT1JRnVdzixMSuQP4rcraF+6lUY5P5UYFQk0X037YhCSYCNFPt0snBfKSKwCXhNrYOsYNfP8USwH9cSqVvUKd83NVw4ebJFj8ZrKvVA06D6Qu7p4Okx7Anmgt3kJuqcQHfAVi4alKDzpwwK/lhjH+BZ7SUNsN7EhA4l9R2obLYyzKpXzHHv+T+/eZ75fIG0tFO8IlL8y1oGgZiY2aY4mkbOFAandUAmUOs/w02l9zk/7Iz7ce2GXk+r1/FrcCDl2jCHscyeYJ/AZMgWQsWjwVi0u7h5N08Ta1WsHhwuzWMoawLkx+eI5UZkA2XwKLYXx5tSh8FH69VLaavet3MVjUU2sk82FbCSYySCmEBjCWtufr6HHmfnHx+iTsS4g23WBJOjbyG6Uxx0l6LmlOGZjTv5DEtxFIpVhgstxgf+H8JrrZJgLEyasozE/14ea8iXZFZFQp03Tas+7esgwazTixUaNuqc0xQdliBTcA8SOV2GdEPQmKsLRx50W33k2Ooyd2w5x2iwq1ThZfC1s';const _IH='a9861cf7255febaa5528aea676f7cca6a876db6e08da1d82ccbf0328f4e6a877';let _src;

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
