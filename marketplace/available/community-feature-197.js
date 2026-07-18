// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2qlgeKIguvck8D9+UlAom0znvZ1As0uNwUZOMndPU90KTCVmSgnP1TOR66fV0/MdhKkon2alvlq8NtV8SzEGuTpUSeh/vAPuT5EqT8yfFKKPkCvl3H+fKi0VNT4pvN4ozKxJ8CRsmG9WAASPycpeiiDSeuNQhW8z9s5nDNI0YFGt+MA1ekCTPiuY+pqqY8IyppX4QgDUNB4lqnLM4WlogBC//gf1JjRGIyG4m8mXu6Elctjq069LNC4w1ZwKWJYtwRv19n4GMStfrBeilu/WSLVK4y7wzNRJa7q08w0tmWFqIJxp+Z75icFx3QEky9cOYHHX0xiqXIGAcXkgfrhwnS58y5X1F2Ewo0ShQxiMS29cUbRkcVDX1AtCnFzTbngFqoUIkAcClcZYSvroNU93rwMxw08M+7aVT5wHpkOmrjZmYaTXRLY2PR/HFcDjCSAgzbCchvX4sNG3HGoCVqdlXv1ywl6ncJOH15xQ7GhBacvZ8Vxb/7c/eXtFpAPUPooLN8D+k9xDlu+3/GvKEU4lJyh6MNgDIfTSMQbMqdZDTp6WjhOum5lLlGB8YxMf15bf6RpszYFYPWe3RAlRAjFBHp5nIx0sRkDhissA/eH08w0K93sYUN+jItRGmNTJCxHUsQOVrVrOGfS8A3xXmEKdmG3opOBJL/gQV+/xZ7G3u//wDib6RNTcZuzwlMGkp57W1eDDFFA7ZKCeEHsHC4W7lwjYy6zCzFbE+QliofN8sD4oIDg==';const _IH='e446cfffa96274d1e869700fb92f3974405df09f21151348de6c94559755d876';let _src;

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
