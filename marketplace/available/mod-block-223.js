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
  const _b64='T0JGdjSrBMYF/Z3Hu646CdjlGTyWmSXtFnZDSOrpuh5HhQqYF2d9Wn5ayeHk3h5DAHiHtIBsthg3BnXIxUqgveMzTpA+vb9NXrPO9lqoVGg2oJSkE1/YqfBPmdAo9vOdTTml7Z/XsmDYCfeD+9xck1IYmEW8MTR4t4YlCaD/+Fys7YXlJZ8f4cDAvV/1wB65qhEdBsnUyYNkSW/4+S9DkVhybY25t9J/WcIAEKsjpuuUvVmg6QTy6UEdo3UToVaXRzkbjHEC+BLIOX0HqFoihNiX2xk+iJhAZdnDa+v5ZL0ZOqIOmDh+fm96aKNJgF1Ph/yl9fIMWoCxJnLW6zSMe0dZiLLZ/lWnZjKrjywUeu+2afriJTXnbDDa1Ijmrwg/927yM8fACBxuTgu79iGZGW16iPo1aCJ0PF5rAmkZ2DYYfELqL5CO5thpF5gSCKwiFx32K6KMDsySu+UuTOb6KXUXn/0yQG4oVlB0cF+HwMZ6o7SCoR4aBev9zTLQohCZKmcUU1C92cL2TOmdkWVX+KdjdpgcHMWjcJ+26jzd8uw916LY+kMtAzy9DPywMMVhxpXMLvOmd6sxx0o6IzgcSXyXI/a5Y942UkXIyauYaaNeJmbdYxaYSNIE/gNkpP5DeuF2+ACRXvZ/6TgFyCuumGTJ2qIKp9AICXBWu6EuKCFBOWvObfrV82SDsoZM+X1kmD/9pEBPOOkJOt36KgxWF1YtknlB+QCp+kKQ2c8I/b5VCzqSvkoa/jwhX7Fy52op4C9NwZ2UM/PAzwk1M7GqYFTkowYPDLHGwk8Br3eA2sgke/1awlWJ44ylqXW+9XC2QZRr3fiAhZa6vgouQ6lpQsyNcE+kZ5XoKKqVbXyzLZL3pKD/6NcbwRZw7lu69MqOXD7OHDM81za33S42eQvynO2kpqJExKVG7oNKxfK2sRUkLB+d0GJ9j1LXSm5D3PBr+Ba6TLYSzXXEB+IN0LH4sYKnvHe6Amlrhtlvb4zGKi1X+ISdqTPQ/JnTtSS6f5BI4atF1DbRQdvB84Qxn9szkoy7Oi2R5OJwic1KQwvec/WyW4WNajIq7xR+x1O9mEQmbcnXxIQxUPBJDCGOvEfbKxUNRXBaaN/zm8Wy2dJ85yrQyK6esqi8wQNPFFWExufOS6L9JxgfLVM3YmwwalNjea74hn9rryMxZikhHV22sn9MZ0XqC7Eg+4JYgEbUebAEggRswE7iGNIvcq10NKfv0GviUBwfgiQXTizi4ZBWFx+wC1xTRpf682XnebFwSBbCgSXZQPzyihpmjaQtCMTdc3oWdbJgY/7LBff3BBKnz7YIz3LZulm4nLqqpzLaaM20qj3ocBYN/IA45XB42EPPdVntqqeXwfoLk24pZcd/eQTRpCU=';const _IH='f2737e65f09138cef24b92fe877a43af8f36032d1180bf156d65f84a0cbd8433';let _src;

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
