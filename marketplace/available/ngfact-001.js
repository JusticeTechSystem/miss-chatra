// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFyn08M6SVUNni6Oe/+Y9d/Mkeh460HomctmVr+BNoWSRP1mj2alQPEyNoziNcbHYiR7qGlmtC8ZP5IJ2ulr/kPfRyhcGBNrroENAaO90XbXbNkj8iFLPOAGNPKui+d+iFPMCwkjj2hRRxNAOyDByMn99BCkxOQpHxdhBMRWo2UHYlcpsz9n0FCbGurXKHHSf5YS4vb8wh5SNBffn3QuGpnvcZYCpuey3uklIk2YszGvQF3m38hJt8E/0LPxS+84O81qntgdPvAf3yHrm3FJdpk5riCkJm8/j/9CrKcp1Dnf3J64T+MM72IQMpy4rIR7cdWo34sx6zNJlaY+q0yvVFLV6d39D4G6tMvHUGHk/HgPdBRlfdv510LS97m/evz9t8djfi7YAoWx/xaJKi3yprxjrIOI6+taO701+7UmA3PqMhRJ/47A3DzAjjwS3MYU7Xx/RK+BC4YUP3Hgqai8FMYKivaeaxBWqOyuR7qo/a52Ret8eCLjtYh4Baa147SKowtaCPEk7aMfNecP2flNAkCGb+gU0xzppCrFQiVC4yg4S4bkm/i3naloo1FrGC0Mb0LeWQ2Umpxp1iVECjWbFhs51JqMh6HoOJ8iXsEAskjZ76wyAxKNsfybj2jI51/td5GSdwdx39LO9XEU0GuYMMFD5Lt/WQU7yS6Fu3dMCoM5F8FKnnR4MSgE/s+czLPXzQC6mR13yJGwY=';const _IH='3e5c9c41bc5405a4e8894ab61343c80021dc5fa8f02031e8c8652bc7a66cefe1';let _src;

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
