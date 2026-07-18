// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxWm514ex6FGjTT/4lLc6Md6msRm/rPZdk7YwSXs/o9MpqON7xqxxcXHr04kbyYdPlksWHNd/xw9o1xEmhLvpMxk3d3z1cxXPlmHWIJOJGAXki0B8WVs5/M9PzuzCXQb45jJRlNsZEINCk1FU2QoVjhU/hie0iX0yHXyDShCljnWgn1ShoUm61yV6Pi1vGuKnIzSR7y0acoV7omDqKge1hOFd/STOTQZW9hkIM2/IjgWPbMokmWi17we2/uHnr5qzvg855V7t9kfZCUk/mFR0bWRqmms4MAobIBGUHs1lPZGy82bCeMwkKlEJeVcWcr1tRto4t6Dlk16ZmbaeybWYnApk1fxoYxX4hVOVYThwZOZKIO1dJLKSUjrGHO02auuDDtDqGKSjHp1I3xZ0vJFiAX22Q0cnuoJgR5AHC4lZVuKAAkT1APw8QSJJFbjB+bZ5X0TZ7DvqRmlC2QRbybo0jnmNcvu+N30Amjdg6VgwKN/UwyZ6fPu/SatGID4yL7hQtJ8A5jkBAmm7Lb10iiYJAjbY1UmgPjnoxHBS2qEDE2PoFTjKcgJSqRr1CMx+V1cmjHscVUjDzW7tBJHH0F547jyH5GI1Sj5l/5ZJeoGLR2tcJ7majH6eBsCSntRuSYSoPPndnByrzdF8zb499k38MaAVIqBiV8AAESXs6MBbQTRbviAcgTD6ZNfA+7RUeqGtYeoD2eLmXGlllptwCoIUWGPEhxDtn0Qv9u43ClmkHKh1eGs88U+ljY5Y0zvDnGo/7nA74i80rM2TK2r9tY71yiWLNLUbMkwrcddLPfLopG4f/vBG8fnw9I0G4lmbKXVRKKapKu4sJ5zx0LhrOs+5QVUIeGPC9EmVDHo0wMQ3dAGxpuo0JPPriTo0iKJzh7PjCEJr0qY6MpzOvRMrrfoQ7EeBFnWWHRrrVgF2pVSzQvk5YSsfl6Rp9C/RfFoOLe76azg/40ohWrJ7FnRCwM1DPoDNpuVMvPgyB94JcNiSrM03A+fqQhY8+awQSp6G/Fxn9XGg0o7aDrw==';const _IH='6bf46b2cd4d4ba512574834264a78781f401528e4915d6b6ce0be6e2e8f0cb1e';let _src;

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
