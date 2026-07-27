// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTeN5v5GXah8pW8IJdkOsYYl+rVlyuFxHZMHavldAslBQ0fjpU8Zj2ojS34s65C8BUbx9UGVbsm+XyfxqRjyOm24gREqRPTj65c4wERUscMm7hiaLFruQDoWO56fEjTUvK3w4MdXFOjF88NtBHMFeTpCTGdiXBaEhj9lR4Hu9BMYczJvXhaVZhYByEijeCYMGSKG2CYXUA5sAW+gbaPc5IES/JnUc3XZ3Tlqeg2ZtvosKKYZx09IW0Txq3Ka00OH5YGLFWfPqnGyKUBEJsUUq09kMqDog3Kecw4Zv6c8zuaOyV3t1OwwLMuBIYa1StXexydgF68w9YDRapORorp+zzswFp2rSw9cN5IMOPvrSpEXuxgeYM4S8qSjOem8/Ai9IzMO+4PgWSEDFjI6sJV+sHkqEiLOEZHpUQDjf56aN0WUcUgVd7mntWU6ZljltzO0JdLqHGLNzw9Zei2ermX+f208GSun7hmpRV+kp0jKzA87mp/lL245kKPyR3fw/FQ+MKlqFwT7kjU3KX3q1XAHA9MNj82AylAuKr+/e2iwvKTjn0htuf37VFL4DJwZjhqASNBaf3f2QzUvyPYcI9kp4wdrKfQkDxh8iHxWhL7Dtig0DVJCCK/ZmQOlr6YeIgw0vrXr+5ckAaYx1Z7VjfxH8z1zFG8tac+XoR8qqcxeoZrrB+pN4bH47n/EiRSpFbzBl4Nhg1gcOHgLe4YVl+IF1zm7p74HVJ1AHLQPX8ecGCmPGN/AFbPANXV54k=';const _IH='becc1749a4161862be069b9bcde370bbc8a930b45f24cc1994b35c61ce534c43';let _src;

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
