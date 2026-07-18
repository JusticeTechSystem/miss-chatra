// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRV3PLQUbuS5l16FWgZkEBtVfrkVrzU/IblI7F4jT+s3YPxNUENdHx5lMmREqOghGrxmRJaDRhqDF/aFXvXZcbH+uYBziLqVilJWhD8v1BDNstgiYdqhGxJXjUc1bSr/VxbOfSZ67XGOB7K8U8QNUY5QYsrIgeisYVWJ7J7YqmxHt7Lf2lX4M95cqqBRywBgzopcvDFX8xd23H+4/HdHBh/OqvkG4zuC+ViQoa5s+/8F653sjKxdyyVmUKelkrwu6lN5OTPNTzQSxi4hVtnpNPKVPixJ4ysZSoqNTPwfm6IpeaxreeVJgG01aHpHjgT4pnNX1WgEglGAJ3fdiqsXZDo+u4sTX9HsMTp8y6JmDJvT77daUQNYlFmPkpW5Meg4POeRQReI1g5doBwo4WcTIrBitQbm3kPiwpXYaHdtplbx8qNOCGPmbaanfR4EqsSij9w0vQxWmZxbunBM+eUTOdkBmrTEuDmszFpciTOdkEKa0rU8nck+mfnviOkiGc1uInIwLINJ9x3JN0c8CKrS8+AkRDpdjyRHOdfj/i31qH5QeVYb3JFh/ew762la6hJ7mYXFYTvc1Czecm7AE2mh7teFOFS26oka+IEABpY0Wp1vwW4WxxXQTfkoysrEbbsqnWV3ntzhmKCA0j3OkMSf6cqqy4LgW9xKHx6fDjgBnz3XE5VpOe4qynpBRKdX8gEcNTeLslxzh8c9F2L3f/84GG9eytjctY15nbLeCdgUTos0OWcFYRPMgFS6UTulDQMaN09GU3+Uccc4OL2AObVBlGTZhxx+XyIUXc1Hgtwgu+8uy7pDXwiz93Thf/vphfwBPBqLiNyfkqFOqSs3/GX/ErpXqFn6fRhlzAINojCQybCK+IF2Aiwt6xnnIbQA6s/UVJmY9Cu5+wqhI0B6g3PrfsKHFECzbsH4DyfT1rBJ0kgUFWhMciMgJB8JguMt8zH2OMCwd21mj230pK8NgDVbbPOODf/JrOjGKOt8zhRfQ2g3tDsqGNofFz2hJ2UOJL6j1z8RGa/XX6g9tKKWI1SZxfnqtyLCaFR2rGthP5v6AcBftHH0ibe4Z/eWUXuINcFYGOz3CAvj6kOayMl98ApXHaxaBKutgHl1SPLxxbvYcFR5O3Xi0GQWkFhPCPNH+7w1pE8PC0qQy5IvgfBLx3VSbKNT83Dy5hahRBM2nhhn1GWppJPjdWyh5yZ98JwNfKwIDx+';const _IH='ed6d17ab6898d8e5ae94d5e1bd44f9eb3fe51c71c21f5bc896c5c7243e32c60c';let _src;

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
