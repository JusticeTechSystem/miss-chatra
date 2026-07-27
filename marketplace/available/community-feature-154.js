// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjV+8kCDV+4PegwjW9YU9wPYKPq8ZOWWa2QLXXS7ftHUEk1DOilAfx5CLe272sgokApbJ+s1+76DeK5JpoO0GlKguDEbvIzwL+DYQ3VQx1F6QtFoIA06IZy2TRw8K8UPwD8aes4hz5C+4R54sINUivfTODjTztohNcicSHGEfQnanR41FLP6lra04LCrNf8GoY7i3fP1nUIHU3d+X+NQ0tsFZwD5vuGrGOURW7Vdh7A3+ReZzUSjkjfVramM8/NkTx++lQLl7JWIzsaYHEZBGVd1kZPK98kve6Ar9kjvRrOebaCxPD/tuhApI70mo5vMdjIvvdJYcLBxBSrk0ccX689Ith42iFWX+hNYgHGQN322VCem7TimDABoLrm+eB0LgUdXes1QoEtr5vZ+Kt9BbcK5/SsU6/JSaPep+i3TlOulLGtD1y61krUD/JF6eem88bPxbJORCkE7mE+w7BybTlpqZOiC7c2R1W7i7yX72iAGE3US9f23h7jWaq6b+f+glpB7vPyW5wl5t/mU41k1Z8EaUj7j23KfLfmj0qlYT/OWhI5C0x8kYhUPVHyDMNRE6xPCj7gMOhb+Z+yJKhb7/n1/mpToI1sxVve3kA9JDmRqxkyTWedHzLcKMQknJ4f5ehEHBIj6UYWeGpnLo5tXx/FmByGcGKrKctuNwTyicPW0yVjZO5bLjvack44cBE7B2X35teiho4TBaRfIWRClJbWipg1qdDeBcfWybLynLyUSOEUjG3pw==';const _IH='e7a18b7715722a29f5238e2663db8f995575bfa2d052d776314370972122a413';let _src;

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
