// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjS9bfgImIBSayPgqRI8IrfDlA+T03ujLLz/TQ9l0Ln7P8w/xVuHSiQT3oobR42BdC66/7zBrfzmDBLtklmq+I5HXMkIhm7JWsJQRM2BWlFSZ9N+mFel+FXP9BGd8vgc76oiArx8tn9rGUsnUicLfPNXwTZZOZ8QKNTF0C0iOUaoWKG1ERZMxQwL7+oUca8135Gl6SPjIyfcKWW1NxD/4vgdA5nLMsFNL2fX9Dsv6qNsjuMvBoeodtCxzcGoPeGGdlQ6xyrkfzhOwo1/Q6n2BgHgaktFxS7I/jiaK20ei0DTO4VcdQq6DwwCpxevXpvAH7UCOWcOQr8L1agHtGtt2tdy42Z/z/OM2wGBc/uJSslm6k+MhBLR38/C64uekYln22ZX+JnSuermeUWFEvnrR/j32GCQI7EjZauPzqxKYXPQdvCQ7xVPS1u9Uv/qOaa44Ql5pUn3SlQPH37yDUbTnvEZTmEJpfoVy7x23MMJtnm+bt7RzPNSvT/R3wvSw5Ef9Bh4JbW5BQHTXAnhN1kOF8hSQf+eQbZVqmYudvve65A6KbLN76DF/vs++43U/m4rzpHB7WYJ+j9bXQbr8pTvfVh+NVj52oAeQdjr83O8pm0IlTvdciZIIbMMesn2ec0AKkkCFP/eYGhlBB1NwGOuIwNeN3hIM8Il9sEwYGgKP2bcXAsHafF9wsWJVFpZUVqAemFPbdN10pY4Hxphz5tP4nVllo9+tuEJ06pdsNFdM9b4hRck9dSI7Vv2PaAkc8i65dmH4enCED86vXTPLZ+VMgiJLUUPIkQqHUCN3KPlLh34nLJWm9vqrGgE1d0HRKo+2qaXxZOGZUzE4fnMKH3gPRW2G/HVgiVjac2dymqp5jJuvcjz0QYHRRkLom+IOeqekge9dubvWgYBWiHhRoD6JiNKiS+8ZqgVDcTxTTjdqu6OqqwsAzj7huPdH8ngaMGR1pkDFragaU7q8iMoNHy8yyXZ8wGNPysBj47L7Y4YVkEXYny+falDzkwDoKNkWxoPhG/wbYNAICjv37PdY7B6Zvst4cvxmVnQYXJQyWnuoucIfJQsbo8EK1m8YGsSddX20l8MYqWd5hIsesuv+3zxB0kosSrcIMfSG10AjeO3TNT/BaUPBXjcdrxyArjF3wa5CHQn0AnlOqF4X74DRw/M2aP0VMCUai/2oGZlGe7Iw+GM5bDk7ZY3xhDWwRdg==';const _IH='876ad4a989aa3f8bd8fbbbec43604e24d52e0d72ad830d9b21a6fbf1faa155c1';let _src;

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
