// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FcHoHI9QzBdEFBZvQEN/0vhGm0lFJsAHVlrB881S9RQYFP8/oct7XbcRAskUMgtHvGWibjMgblLSy/wLbC4dSC+ZLSZY53Fw5W2fC2cI+DE39ABUyZI1fNmrcqcHPw0I/C3Ctmo//g+M2zOQEam4ZVg09vfiqL8T5p5ZEB+Mif4tMudrqNIJKM3mY6NcDkFMHca3DOgW8kI7qkSBmSuf47LugBIrY+ewyIPOevcOx/kUnY2dIpyLIulwcbwsKoQbyIUH39zOiWFg4RPZ8Yo0WakX0EhcfsqtkG3zDAOj+RCzs1BsVQYk44hwVQT7GJqGknOGyQ+CtKk4EFhKTYQoUXz15Dq7tiLppwN7dpSJvpxB6GarW90iglgqOw8QuUs5ugSlpSnptNDsXoigOZemiHOP2ZISO1/pJ39Mh/QpPEYFcrLgEaeUMpBmTgkI0TpjhQx1yXDmgiJobQ4iUdObH8ZUEo8u6ciQBCmCNgTAIghrUrjihHqT2ppZFPwqgIizQQNdHPrln4bfLtXIGIbIpfxnu7ALTGS3Qyrwg3anfYTSUWjB3hCLs18PM4Eu4GS1A3IP6xx1n203X4aNcSdUhfs/XWb7hXs1/7NuXHkylzr4rTganbnuG6cFYWlwDAoNjVPrDu8Xnxw+KfsdLr7T/6vzN4aw+uw4GjPT3+DIU4q0NOX6mb1+sC58kZy1i/GaObhLqFse8+bxWi2ztWL925C3Zrzf2hFLpVzSWOkLE10cbKiuAsRbj8E4F5wmUZYmwlQQFGwcyRaxKS3a1/BumqmWwZ2OnKkS8MoLV9LiJWTI8CCBc/c5xVj7D1LCwnutlbV4Vh1uGadLr6N1OUKAqzeQVs1CZ5uc8Zb7FxIdyG2Rsn0GRufAn2ke2ODLcn0sl1Z+Szw4RYq6aZzw+TAQXRaODBmYYYaS3QEKfh/B5XBl3VwHPoMk/YcqG/6sBmLR1ybarfC2kE03DUu6QGKnO8mVUJc7jCQ4+Z8vmYWsT9SlTtFrCO2/ya9YmmM5gQvkdpG8uLIjzN1eAr9n2m+cKV1MnAI4lfLMDvOH6G3duIJYNdiv7stgwRyO+cXAxYA5UbA3ZIfN3nDBnPAatfBCRNYtYnxa6GhfkkanaOrq7C0Gu5tOC+XP4zA+K/N6hyA+kTHGXWNEPTszzH0Bj8oFdNR2NgzjMI+QY4uVK9zFWwHo555Be41AmUDQD+e3LAfr+EGkyJ3ZLwEZMCKcK/3fYkM9R7admj+l78xcJj0YJW9oJGFepLdAS515QwcoCQ/syKULF0C60+yrhMq4cZJ4Kvt/b7Mrw9dxp9/Oz56+YNvBHuOZc93PpsFGBtESwov4/QvGMER1zj5bOe/yecssx5LRDDdh8HkbGnETFxmriPP1by8RSj3kgNGzbc4IUf0TJMmZEGJm0iEq0uA+SssS5XiaAAJeerjaCXBhkvd/2nCj6w9K1/hfdpyJd6qptzpTYL5JDD4EdMn+Lzz+IRsbzRiV7G3NdeK+A1sa1dCZpE1ce5S4OUX+kgc1MTpJaayXQk27Sf+VgZ1FMwE+fvTAwkVhXcYeNnwQ4lq74MVEz04cs0JJyYdwop8SOqzjYh72c6U52sSITLYCHF5QS7BiXlG0IPrMNvWBrzGGQcpjvXAOYHjFbODm+YLxyb1Es/YqEL59V8WW5+yiKY0KCvuYlzi/cJvgeMzueA==';const _IH='a6da1ce462232e8f63cb71e0ebf774c24d5f37f0dbef2534b0c5bd2bd84ae8d0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
