// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQn9n1BwHnglfdh9gEXk3yjrcmtBKuZoG0/LhwKfal4UlpEaa1X07gcvOqEkcCc72NvFAzxAEa3I5R1aC3SbRAM8VA8OPjtWvvei9O2fJ7Q32U0tje8+0Wnh9agdqaO/OC7DCY9oLvHNyXioduDeS9rHNcSVxoTkQiGaRqa9VQdK8g33RjQ4jnM61aqrW9D7xvSfQ4WlgSI+v4yBNpCg8SuMnVop3Z17qmb7wLxNic8maGuJxdgPAq8jQdea5V8J64zEcnmBFWZUKshxaHnjxYF7BV/g+NRxQ+reE6tzEMHw4K55VWdicIlCZnPgVwtczrxal9qgt+qEhOF16z6SazJ2r7BD3i/TZ5VvhSZopz30Z8F82ai718EkAaKUprsbfhYyXMMoF8DS0Ckoir2vOivgQpvSZjfmFfJgFqwMpp7Rr2u6IMZnDiQE/y62Vv+bS0pHspZXtw+8Lzymf81dfvufNaHCscHM6uyfgwkGmmKxEmhGcHH4kQddt2IV5Ze72WOplgBkYrl+BRZIs8m22Zjhuqf0iDvKrjuemVFc47RV5zc04yD4o3eRTVNogoxcbmJ+gy7atMTV+C/OsYrM9aIX0+nxZK4xo7yiRQDjQAsBHqKAj+MFtzSOD2Xpny8VD0ufQgg4IaADLDiuGVzcGjzLzDrGKIplgQVxyYNnG+iLg7E3eSoVQzgcbN/RdEtNkatZhLzVbUjXTIp0NBraQVndFswZ2yNWJlgqewyoc9+r239lCy9w0CTmdgoYfD1jX6kfAbLPDAsjYn26/LSrWzKbKiy0uVtqKqgvGNKAjfh+rUEvUG6yGOXHH9ErDiz6cwXZZwph1VzpKBtjvkDLQWus13bJZw/wTqNs8P65HAsSJGe06l+DY78m1I3PLIf4JUBRIGEgAV6QLIYzXABy0Muj7cX5e2/6SfmOO39XfxOVejbrQ2sCFd9HLeJBmmPR5DGVruF7Cjw1XHAViyhPOPZB2TbFNpOFZPfhQmxs48m7ToOqdJc/gaic1JoLRTTC4W/Xoi0O9N0lYxvz+nlYVnhK76YFAtAcVlOGTpm/w6+jQCno+jGnw6cdUjEPeTCYOhVxzbZnMxgzyIJpv01C2u+VAEGKqRROJGX6wOMVYhQgzfr7rrl6MbU+ZdErT1rbsW1SZViXUW+MUiFcwc36HITvhgQC801st2bleWlY1urOH5a34Svib2Wj4zbq9m5vVUfLvB3WnPCt1nPtXmuZKjDMAE1BjjhACBfjjtV9uzQu15HcLICMYYcNz/KHtmre9mvwrRW1vU29QIKLJrhEmNr8K0uRpNEKoWY3mzFSvO5/FfjpUMnAY9iGm0PrGkY/6Gv1jvBdyi5gOAG1rUMXerQacvtqPEe5LPkqbBLl2+aHhOcXDfRpNS96bR0NURDXjPNDPL7CGKUU2FFdXXItFOhaMQRGD3ZU+rftODVBVBHNEbVaaeoJp1motgZwEaKz98F84N+';const _IH='99f0c9e33b835d393875cc68adbb6ea53f9073ffabcebde98d8e8af4d9082a03';let _src;

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
