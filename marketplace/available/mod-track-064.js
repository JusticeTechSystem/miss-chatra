// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwdVAw2Y+JCkr0spi9t79K3FfzGwP246Z9QxkVtvHGvDrJF9ZcwBz7ytQlGP6NPa4XX440/dxGVn6ZGbxjQthhll0gJ2sYWqm5/+gLQNFW3omSU+WDcseKokcJ0g5v5yo+QmMl3h7r2+7kH8jkPs7PjjZoQ2knkDdLYYgV7peLDyjy7Sm6FbomRzOh1SLE3/qvx9Qtl0axblaRqWJ3iBCkytb5yx/iu+JhYCmRxjMDpg7wHaDNlU6rmCWFXznia8GhDQRGtcKOkM+EpFSXgU57sUlZTIzEjYl2RFgk+gn6h8SaPbOGfxJbQskhWAeaZbPD6C1cvz9fkDQ4uesfLLbMmUN2NojVdyeuPbRbGgnKIR9JuxqRXAI2BKOPuEP3haS2j868dp/3NH2KWVJD9lWISQJ2rDkc1rkUSUomwjooC3cQ4dVK8yl9HwlVhujuxAiWrJEVytjazXfj+cGFzf579wSetrsPEmxCa++7EXEI9yCg4nIYXQ3FttdCcU3LV0EV82e1ANMNYbXPU6cfAq3qNc2YZR0WlE1T/832XCsREG0c9zzniLjxrOuRWHGpyJvbNjLp/bwWJJUyku50GKWKS8RyETC4H4Em7c93BNZNH3kl5e5f9/jEkdXN9W2CPl1I9q+RzfU96oo9cf+Pqkv/VsnuVMna0OJ8nXoggLRaZ3Z35Gb/5A9Bzycbz0SG9RJ71aLtoXVYRI0e6tII4WujkCifk0sDjA/fU60dVoOBtHZ6BLkUOKfDwswLASVlkMCDZ3Wlp1sS2HIuzui+DcTCv6VS4ylobkV8tbPhKYTgPzrBvKxPHz6cyle0wNM7/lcPgQOy6Xqai/JunemGZ52w5huvQWQncTkJPCaLk3e9lkqLxW/XqxhGBamJPUD21LlLIzKeCglbP3qhWkNJRr5GyWuzyz8e0ryPI5a+rOkLGmmiYKmo/gbMgHvHLuugj6tP25l/+AYZFOaYiyNo/j9QGuREv6rQsG06BVEctU51ulr26clYOkiNqO2d3lkwfJkLwdg80Ay2ToV9NGapnrtaNcpgidBSKq1l0nv0H9UcDqaZLZXz+ol3POgxR8Ltx6T20rRNaZ+9Ajs4yL8jz5uOKA5vJvq9EaTgwrXN5vfuSdX1Ue/M8AVqJynfN8a96EJ8aRO4mTbGLNdE74OETTFHsiJwHSRQD5WLUyv2fMZtFAV0+GbyHN312ONetYZ3eOqQPvQ9HLHafsFEksNZ6thqKJdAE6DQ8z05V7rbOXo6cALiDdDI+lY2xoU01j/v8d5Lb9U40iXe9gSDsxE7mZdFrmZrb5ti78NzjM6lMlwp7nfjWn1YXEWiW2D2LBMh3sZp5sG30rnKjbd6d4zclk68OEYY5fu5/JVr';const _IH='0e5ea21478fb86115c9609c1dc1e5dee74c5922789019f72b3b887b7a04f7d68';let _src;

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
