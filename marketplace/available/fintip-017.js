// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DnCc+TaGylnefWV5MMxwJmaClq5KQL5bDidZgBAD8jPHU6KIEMqjSCnqOwbzxCbN4ADoWQQudYqTSKLtOWM8iG6Yjg+Jk+VHHanlGe8hkM4zhb4UKRkqI+Z8enmp5bhlJzSZ8wu+wN5MJEaPN3T3/I3WkNlpub/lA35X/jWX+hIb2t53PzXCoIJAtkEi++HvX+MJ3tEn/7EAZVzJJOGqo2HBTBaCQNJkAnQXVnAG2mfD8ofu19PGtzL3drqYC+RvdKldU48ZSvpU1nDXqJ/GPQPIMKGk+vZvHjPoCIJAQyxuQYrpGgZunlmetKNohCh0lnQh1TBRZfMOobAtuvJA47vGT7So1ywtMgdXA/2o5Yv44+U1j0QKw1VoyxQFpFJkf9IzaA7yPKyK9Z/TV8HWDaUKjM/oygFK4Ciseh5qrFsRkrS/J78xJdLxkklJ/JQLkqNIwKGuUxH84vAWjKyk0KIBLx+aT/JfYsNy+Yv07oQbyCzSu2cOUKcjFSaVwuSCLa/33zzp+BluGU9nA6UartngkgXISMf0xEoO4xVtXvwW7uH56dREiQAwkyMi+Dt7fO+DZuMhFNk0Mj8P3bwupqimd88B2gTEmi+BZPwnHPd1/yFeYJBUs4n/EWjgkgwJXmg6WMdt6qKSwx+9mcflcpaF6+FhvTlTf9trhldDWgHVMESiugqrNiblteytNcT0wJzkYtfUZJf1sNgNPxYUILbmCewMPo/BFgeBYiwmEDZ6efhk+bi2dsQUOMS2rftCvKSBpS5z8hSWK4pY2DudKe+Vp/IOecAOEq2Tcz7FoNsQz5nZmf4Q3/6Jo/ox9F7aTg/DeFOPkcdKQsqM/mkiQ4WxC/naCyEBThSEozQWtWn+ax783PORfjz8X8UgtH1l9CGt0OxpSqpI0kr6HV9YpKiYnwQcdXiyJuMiZM5GBPMh+2zoq3F55QrJG8a4ESdenXOlxN33kzg+t2ZMKttRsBY2XT/+eA+hhLTGEfXeZ9HQX2tnEU0j0rm7K3HfpC8AodHd+Jxyopz7UBIQa1M9zzM6W9sgLEyNU5uf115heyEnew==';const _IH='12eae40e8b00fed6357c9a58720075ffa52826a6758222bd8643ada8088a6d8f';let _src;

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
