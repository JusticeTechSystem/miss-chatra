// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0B1jRNYsnXnnMu9Cak1wdqtR+SbRUoDU6HiQ0UW6tvkarCqO9dvBuCD9XJmJkvb4G4xdyXj51SLdZoUAXMtfBeuIhNRjOTSUGa7eNxlIhQhncqaMEeXe/vBgxaiOzONtKrVuZFKjeRocvdP5DkRCUHybBZPFJdRZjXv5GPdNGrR2NPXrfV9E8qRQvcz6NLRvvzSC2y5fx48s8QdeXzsnOAXwe30Y5t1x5cnODzXC+cBIutYyg3Cp+eS8Zm8Ij16T5V9p7YwEDKJvBVw43xT9yG/Tv3Q/G9hPHUaFKtua3a78eLHfsZhq2D44y6mMnxEjYGGDGseH4zxO3UCgSR/3A6phKnsasWT1oYDbcqv1indbydMBzMutGpEU93EN0oz3AiuVIuJUNP91z1bD5ckeSagcOJU7PBk1GaZDv+lKNIgMAUrdMTManihxRW6EdKr01IGzh5Z1oWmzKBH1KD9B6rLpfb9tpsXu4jaDw9YF1iddYAMiLAfYJ2XxCOT2naBYWMa5w7chpJsJj3ce5EIIl3muuvf7anWwISeRvZ7NE4PW6MnVRKYl71wRo3JzA8s4Il+x5+wWE8CzC70E4GygGgw3fccflQw2dfGyP8smsVQbox56FrsFdNAEVFUOnyq+T8Jc7hN5g4UjjArP8i/gO4wh5SeUDhQ0v9ThCAxDc7nyEnbUy5U/CpXWfiKAjTe7xkcGvBtQOzYfB/IS0RkZKQh82Z2EekuBSgFGbGMSqOHYOENQrxXNjbyUaNXfGt+j1qzLqY6eFliwmP84MDVAPym735Y8kwHHMZ5OyV6McEXVKi+0aaPtmuIk+W7DN6ROaep3sNup3kPH/cMqxqlUjFgoE+m6OwJc/YJgVLKpgFWBclroNY2FVnMp1l8meY3mj2DkK2AFJzcl9Sjn6usJeRhoIpCtPYYlbC4piLrufUDALG1tQkG5MhCjzpec86NyLkBE2rCV23ZaKB7XjYOcvJgGHd/RLobighb8fDr1N1/uy11tjDkUANu1LWxy9/iVl6TiZiLMNVz1ODXyVuiuxZQxD2AKWWQxbg4J6kSyd0SqKab90iJr7GhP76y4opgkv9DdmFxZQwdHkYm8Z5uundfYT6HGdz57n6MFzdZkK8kXcBQ5nBX6JjUSiDl+MjsFxC+DGkfy/Sln9chOVitDz4eUupPy8/Ph7vE8A8xDrxOYmjCPxdRGc5pslU4I5h1wa3vgAFVuykLZtG/FE';const _IH='a580d2837199adbf5b6243563efa4337f6dd3dfae0bf60378be65dd8e5997ec6';let _src;

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
