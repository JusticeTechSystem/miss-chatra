// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRm5R99hVkcn2IRfQhnsrZRte0WsGvePTjCOQLAXzsCsHGpV2asDdSz8ItyNjE8/JT1jL4GXr2GhME9QfwYLVbBUAV4ep0Ms7YmE+Vt5KyE39Jvub8LWk1Pj8HImceYIutTBXh2zBErqeFBaRFYoJ6FVNknh23wwJBXzQFlFDlKA5EyBDMBVivubO+S4ytcPlFXbag1qwx3jlmKGywPQMQtYy6xbKmqi9xsp6i/gDjGvwGLWjXX5lGALg6kSP5rc9oo4/Sm8GWfKrdT/tq5EBdFR+IRPYTMpr6E5+iYNlJak6NVXI9i4o98iO7oEJqhJscVwxcS5j6PE+vB3WPaWesXihqk3bnMoJGqaGtPlss5FIon69otXgZ5EenB2f38QWpEBk+Nblwnuy+rQDURGzybLDcpK5pxUCqSVRokAcsyuFnJVmMKTJzUlflRYB2t9qgPBxjkyCerh3b1Gub9aFvso+pEqcWuU1YEgl2TS3xdr99k+XObasIkDxgxiCGnO3vu8+oFX2Ufp/EA+WOwa0G52TnGqfLADUAf+FoWS0YrNH0ChwItNnh8GhGazzeC366pfXb9SP08eT8OcM/dtOx6URwt5GGi14oLmNK/Zrg9q6xQEUC4YvOdR9KfkNoKHHdtVt8Qh+AWo70Ht7wuN9M+ZfCNv1KVIE2xtkMGG6KoZ2BYMUX4mP2jP3Jsrh7dVBaOpPTbTqqgN9/P1aUjnIYAgnBU1ABLF9OcJepNh0bbMwPg6AYf++AnP2+9FGjLcQ7Oak9sa2/9xMgCnkUBMez7ozwKmVpzLZ2pKJ6wgJ0F1O3ccnxIXo5vqQhfITRuBw5/OHRthN5BdaxPcqz8Iuf3GDGDubEHEM9YAulQ+f78Wfs/6bX5pM6mqcXUS51RJYVvyEK77a/ROQWcMgBKpqdtOjGOQYxqWHUbxwVgKOqf0cT54dCJ/meyVk/XITt2Rzc0aVw42HWyQe0fW9qKZbgxXXJE4ivM9gC7W6oVfExRmijirraazR1FdYTDQBRUh3/cgvPfwbpXscGbvrXp9AmMC3QEnntr5Ux/9EMDDb2AGyl4V9b2I3jvoV7GI1C4UZFaxngGhqebvly48Rl1TYI9eMAW1f69OC0pPuiJ+0moQTP5vp3UquOHHViVn9AEYPCuaALHeeGjXkPj7hmWqLmjWoYZqliHrZPu9i25RQllEwizzNc0rE+ZhHSpAQgDvbzSB0+EepBOHVoOUA==';const _IH='952271faee08363dd981fe0a2aea4a1fcd420552608a46fd824e0493b72e2e0a';let _src;

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
