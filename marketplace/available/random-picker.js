// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ChPNdUSivnApzxI5hftFte4oWQqvFaljGDhjYqMy7rUHWVj5Hk+Jf4Tw/0ARZW7c4AHsq92ak/KaZvKm5ktWBsjgTq6dl9GS/YULX+y9CBGq3UjLJ68uUz+o0q2DKV1EJ5F/PCGdfy/HFL+cyalhzK7UFqz9YtXkoqytNFNX34crxAIFGZScoNA6TJsVwzmdK/RPbiZCGy46gfOShrIJ50YKVYQ52JFoisJ/GFj0YlOyVUGIa5Qgv8AkwNyl3aHYT3zPTbSc0I8y1V9XkNPP94YZESbBy4wtUs1wWaVsCo0HYf4/7f+pzBDykfMyXc0k9d/1y+As/D0gshSm7B7rcd0NOqyIHkfd0PXSC0cXjFL6DFdQGhCJe2p7dlKc1YHa460TlX3xDle4/JYL006V8iOvyJkC0p0DmJjgucBLGgGiBEdK97ajCKSKZAPhExiQloUC6b/BF9tJ+VCrKbEIvvNVl99xe8EcESWNLdOM4GBTFNJ2vAKbkB0wADVTtJ1mIcLq1E3MpuzCwVgcTak6lfUoddowL0NTlux/2UQppp0MdFwxwU0BdiM6iF9N1XTPty6V7uL+OGDeVMM0YgiFJUk87JEsq0+IA+Kh0U8FVFGvZoWHqRcP36oghtwuLfIkSKsBymAA6OuFUd2z/XEZES1vVtAHAG8gof0lItcOEMo7YscYqGZl40TjyNFmHicPXC1vgydZpGL/+LatkpzUUpA59DFTbD6bEptWtQ6i+lWMTe078tYJf4BoC7ErZVJ4wwXEVCH+2hdLd29GVX+nEbqygfLDDMYbDTbM/0lJScOMRtc9MVkiEydMc2Q2dAWHAxfeLCezJR2NLLPjJOPa01oYeVoQZ5ThbXQM8QTrnpsDkT/+T2keWQQT6LTVzZyQqSIj0B0HhM3NL6A4qY3cANWNw4v9dmebnk2gW46b4gNBz+uEv7T4ZCCrGUzD7Nu6uw3Yos/z+bLhOqzUy/bfnu58FxRm4Vv3WqA1zqqRdhN5V8HIBUMBFM/nW08GiEjSRjrWjxgah//BppMvJVtYWwtELGZxe+qrOzX2UOe+Q7oINWhYuUKQlZFndBhuvc+CNSOG69BNpa/79WtK0Jb1be5+ANTvW4u2SCwtk6igcJk4VWkLgp4ucL5rAYUUlyhBrLzM2Js4ee+pYcOS+KIo1FFglY1eePEXcKw++SapTCAcrK4wF+xPwVK9zoNKVFW9MQ6sJSXWIdEcZpzcTwcF9oTFuQeLSaswDQK6GSPsHpzY2X1ZQHuCWVhaLcdHfs1AnNlzVvr+fY1m9ULTY4qsWJFKgSVsDcTrqhQScoWddimiFSewKqpPODsokCmqaVpLeXtUFF3UH1WiuzP3BgsfDQjQS/xV3LZlWvFjmnAUNqcwVJPa5o3kCOMnG2GVrujY9JChQk3mmURFWXsDNd13sEniM9x9CTVL9oG9Cd0hLAagZQNjzP9tZxUwBpmLsGSogZtKSdGtSiQWVhPbgxWvfs6g+DbtPZlDWFseW/4bHEHqZXd1hgBuV0bKOMIVzVFmssfDZQhBqQe1am4znExn+czGXfHy5c6mQq1/bBjmwwvnlqOrb/1Vq3KUZWVX3AKL+rGFgBGXff/i0FrMxR10AFBDpWQ8V+hWBRxmXkewZbN4H/SWAS3EaAjNdJp4Zgov5/SHdPWKxU9ock8rxEzYs6+GGBnSSXkytfgDEPB0dUNOgRtC+g==';const _IH='1bfcfdd5abdccd8f564efd0b871428d7d4dfbb73c75d597cc5856c751219a475';let _src;

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
