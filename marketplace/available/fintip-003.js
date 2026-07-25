// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ813HLUzaIvbTzfKNgIASoicNYyegihA4It/qfYmWcMfPsJB8rNYYrazdIUnzr7I33XsKe+yUonKWjhnHWuhU2OmnL7RA/UMkv/iO6SmFlgTv/AYFKcgcRUYOgITwgw/f6+xAii0P84sJkfideQ7yrtiz4xFx04e63ef4glqH6iu8ARGCualJhSZ0Fqf3nUbKVn85GUFC9jrM9VKIRRpAOLs3/g7kgFz7ESHkWUpWLAon/ijLv7KpCfj4IjN1v25kUVijNEHDQccfA/r3UljTZmfo+9WTI1EevQGSAPuViyQhuo/9XGNTmGtiffjje1yvE5R2yMMyIjUrSPngm6/gGDXfyZx1wfJlcFxr1fRyGCJRu9e5Kv6QaO+WkUEE6DAYoRnYvYpKCpS2g8SJle3ViOQB7LO5ir2BpE1yuAWWM4T5XRx5HX61KIfTMeHG8CLPnXkBiBGzDIKzO/WshPLxTNOuyDusGq1MeNh4ITa0f7OSw1RGj7OHOYAuuOPXBQdiytq3LdR3g5j/a3H8dpZSNizJ5QHLIkdXhlxY9xv0TNvhrXkmj1sOnJsJbQmZb4ULukJEhGk7/DQBZ/Sn773IJTEYU/XSqw/88Tpmbtn1+GBsnkFvIr2IkhF4xpwJfvRSTm6hpq3HQTYhWhTOXPqfL8ws5D8u69N7GU4BfcMN3spFO5XdPd+FBwKOQrhVp92nedyCExPh/nSG2g+VTlVZz40B9KmzgeYZzKaIMeTfKODirIDT2+oSmRoz11EvqwXfHCpfbuItiCnNNPdhYQ5WEkzUx7rGk4UvalinZZcUSROQt5eQUYlpdfiqUTjSygfEwHrDR0kGIGi5qJNedUj4INC+JPjNkwuJ2iE9CahEQiQqR5URu1cTBAUAiqSuUFiHbkf68unhx8Yux1RBRRXNnSCe+cubz3y0x4z16q2lizE657e2JJ1P1CHcFEYKG0Iy7Z+E37JbhzHjdhI/bPyIXVGB4smyfmw6aqEZ2IjrELmijExQCBnaxM4Ho4eQEotSxRWc6CYJSEqAyn+/tQ1zieotqPKZuEVpkga1phVY=';const _IH='fa316d8ccee78578db3d9db163c7f4709cc0166d6cd8f4d454b276fdfa93a5eb';let _src;

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
