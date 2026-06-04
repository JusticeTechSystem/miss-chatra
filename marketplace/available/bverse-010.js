// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zDlJIc/Um8Ca0x4i51GYAhIc7nxJpESAeALBQwzakkEwDocGAj/cPkwqR6XvRp+t8EjM9M8oreJScSQEXHpauefILjbKqBMOOanAuG3O/GprZ9L0J7Vlwx07KJakPET0kejuG/raGlAZXZNScd5u/UQfFeGzNpy6mGXeR6Im40p904Q+Ec2pSt6mNbnhS5rgNEwmXj4P+u4E8CgyV8uyizxUcz3GlEAuGImedn6YDmASLLnz4zJPEeGMcR0BKUJOkI/rSDtYrNIwNZW0FK2lJBr1xizfua7B3wD7zwRaWze0yEeclqNCqcdpsG6TPDcKuk6pgoXb1UEcfcTqqKbgV1jaAR3w6uNBdV2YHrMHiOZPigIF0xVeS/xMeRcPKXjf5W4Q4apqZ/nXFWsWqxhvmE+jhIAj67skUvyTmbGpeMhfjRMLXr4ouuGboSCqKtaRwVK+pz8YunosYweb5RJ1ngqkYDjoV58qjUVoK1QSS8tOMlV4FjsDUEMgCA7JJhsWbEfGPdpOepfOotz4cbl8ynduMkDWLfkzpCRs/fgISwGLsRYWCEdSwb6ei7d71iiUUMiHP0Doj00GtJzevzzqmvkDRmI1LfVkcGMq4WbbwHOq/OATQ5hBI9TV15RPfXrhwnAq2xazt/bEu9P9u13tQfsVqb4VmYG4VRKa3F4MovQAS9e0Zz9a48fV/d2WQVhbgZeblCmJ1l2D5BfoT5Ow7ksvgD5Vmw==';const _IH='8b15185f981d82007744ece6e624b774f1feed7a8ca5310ebabe2775bb1c5fae';let _src;

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
