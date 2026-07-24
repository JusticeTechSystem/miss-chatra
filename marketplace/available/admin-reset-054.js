// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR82Vb67xl7kH3Ol3/rhL1Y4au0Ji3t2KwrRGd/YMvYOkhBfHlkGAuPciX3PArlNYJ+FNHxRGuYfh9hNY+CG0Gg+EzRaEwZXtLYhMO7POYgnkn3zZhQcnE/70QDG0+ejFqSORzv6yXN9+0AReKRp0aC+AWxDHTcGcKKjhXJJuHo/Qy7I1wpfKW6WPIH8N0N20yD9WPUMqzmn6rDLm/Do31i6qR0PxveZc+idbuyoDulEtPrmPb7tOErEI+2a7yUoMPmmD4M5AiD3JgrJIHGskGTADN6VMNBT+1I/aZbhx4KYjwaNw/I4pynMs49XLc9xugjTtyKHLYfMCdPNb6WEkMc1uoi74XHI5+tGFhywLOuwhauZCj9rx9/1kAbcHiKxYAKGqyLWJ2Wwh31tDI8ZrvjmXbcq//OR9yEPYAv6etY8GSLUfyhoIjv1bdY/0brP5g4zJqcb1b/kBF1tbQ+DI4VXqrFk6BpiVTJQ8eVnyp5gYdXmzb6OQqcLd4zQ1LaJjAr/wpngZAFqAeJT/AZClw6qWyULl3INI7cRZj55QqM1PZU1d/GntoUtNlxJ0J1N/utahsXKbQbExWQBcgS+/L3LGF9/L2uJhYg5c4/fUQsuDi+YDAyxprTRuPBM18MvcjdCK0rDmOwQlHZpqE+iKCbS9zn/0pTmiioL9QCWjC+HjORiWcOh7kG7rzeG7+XGTMtY6kpHb3wX609Yky3n6iJANzKLL5dNo7nla9ln/KbVyBaZo5nQASjcanVg+b/k3xo9oZEq9RtrruOAu/7AlZvySR8/l+jeIwmMtkdz0lzohh1JUmipv02TD4y526ndFCJRdIUAZzRG6cDhFrmuF+4qgSkOeOQjdkbl+LY+RzdhvUwz04ee2VDEqG5HHJJl2w7q1NIgtl1KNoL5aN1d17AurYHm6YgmxUGaeeobMMz0o3TGztT5UKMbwqfa/xc4bF7LK3dkpH8Lka6TmEZYrhvoxc8Pn/Ix0fq6DXU0NLdHOznF3y2oA==';const _IH='d2676e02859b477ee3022be549c6c0d773f361b89221415bdbc5fcf68d02359f';let _src;

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
