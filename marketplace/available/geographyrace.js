// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4wmgKNOlyZA+rTp497FvkyseEiMUn6Er+G/1JGpNObtI/GDqLkGUHh/BDyv5A49EQIW8wXpBuWCfTLon0skBso4vblOP6tolcQMaBnlvHbR6j+rBw4nzpX/ka4srFjDeqdZsmE2VX1IBVvCj8NvI3cF313J6jyZHV4+cvfeeX7PV1EfIogHgin9uOMr3fIgRj7iJl7qdr45pg2I1ZmwJiJ4uYWPzxmeb0Nzed49eejxoDaT2y78Z1W8v5gbenNDIPtMYBMsKmUB1v4hpWSuyWEjqx+6+xXCxYW501RCotgX2H3b5fzp36LQvz9T4wC6gOeWQAaTFNzwQD15xGNOTnWqvnKv8ZLVsIVfsbHOG5ZAhEnRCgUjao4/6Q/CXH0gMIXBnnxaFFaxbu8AsT6twjmWAyhJJsegloNJi3jApMOYeBQcO6wHI0NNwYrY/fumQXGe9Q3iECU2ZP/9WWuQwgBycmQgOXzqODG2eSd5Yjp2Vw2VxVJVNPgQng0f2phk8IdG3hkhGW8NHhR+rdXETtEgENyHpJVBeJ3EhsOL/2cJhqs09TiS7W6pkokUpjoP7iR6X4gBNexmuTnKKrB3GOxcz87DadVbGvs4GPLKnw7UYvCYvcppAC90AWMdYNHymKtSqsjMHcdPj+yFVwEDL69+Em+2QJ0Muj99rvVeNCcNan3b6iP65Rk25mymstMwvaEU1qNVRNXcfPQuGhgF3fjo1CmxuwhpNpwnwGpuSPGREiSIK3CiDFwBtp5I9W4EVxSxZjx6oN9aMwZEFYBtZ5r9+TlWPvMn/+HZc1eF12827IvDgVZ5mdtkMYM+0vj2MCVX+1QkLHISrQsUKWcmHVTjQrahX8Nj7kr+f4ENsaOUV3S7bKGlnWzOcx2WHF6EYeoXFQQXi7+9kd+rXvUSlNtHzwvY4L0pOnz3GKF36piHLyxxlkZcrAntY/OFEaClt7vMAtEqx8D3USsarafonbdm3yE4GRA6H/OCaWoUWtMiaHuVfrKu3QGJia7opDuhSedx1FjypQUnkGYD6qa1XvkDlZ1d3+Memrg7O6u3yfD4nwJ+dwOkdeLC2jMD+FOsiw+sNZsni8fZDwH4lZwuOLxnLPWyBurbYNvkpANWwtT54QHK75RvpNVVkZhU8qiER7GbALEWxRg9taCF9IMsZOo7dD85WEfi9VIH9liRGMvjMZZbejRp0rZk0+rRAbry65g7juC3xfDemAUAb2Uc=';const _IH='e2b02fccd4a0fafa837ffeffb61eb1e2dedea266eef0f9c27b8f9b290b22a63c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
