// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxMhTcJ3iXLzlpQBxoJE7Slz+ZZYQC8piNNArhiU33vgATVO71l7yoxJdSh6+qzWJo1ygK0B6TH74zbUHJFgj//D8oFwyKiYHjSFm9raPylvIRXUQlW8Tgcy451uK4Q6ROUKwtKnd+4uETZpGLSZXYsL2yxguQeu6g+lZIuiJQbnCi+Dt/yVt9hoYnlECq6u6AWui2EyK+NwB/hKNRP/4sVrvngJIWZFs9oMOVCgf5W7rUmXde5cCzvxjLZcUDr+/XRVB4DhwE8N/B0Tcc3KL3QZtBT7FpFRwi31+x3zlxCslxMdFujPIsnKUaTbEl74Nd4mCi+EtTs21auNLP+6hqr+jjlJNyYwmbYcLcImCJxIyR2RLu/fca8GNMYCf1T37AIFUDE6aNO3n4JYExP7uYvz2SOhtsUZ6EPIbEOTJAfxjmpC3vFHjDh6YohU9iycXgehItLUZPNvN6t/jQGgOquemAda9/xe6utwKpuCOe6uMvStLY0Zri0FGwqRm41wS3ejGLSQZwO6HWgSReyfQeAYJ6Fm5j9HWGwW1KH8RuU9WLnbkTgS7TJa6QzxyzxoWzYx4xoGyQJvrMb6O53JGvkIwaNEb6eTFsAAFxXuHgfaA43yw0oTCdNsQ8G0xHNsbyTjHkNVAoUfl4aKEfVHMyZotLN9dAbs2qMZB4BKUjnWpwTe1OmABV1OYc8tdjiEOLLH2WB/dsPbuPyKbrzFOg3LMBzFw=';const _IH='ab29485c9a649213947ba14f5e0a0b8b1757f69b59573ba78f8c3529595326c3';let _src;

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
