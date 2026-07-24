// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTzUwZ+iMUi6TNr1YL8gRz+IgQLEWkLYm41tKVPqUA3N89uxY7Tm2yDHbwl0atbPc9UIjkmztx5NE98j+6uz+58TGDybJnXcooztC/YDLEYAyP587MfbQfdoRI7phN0X1YIe1BbwJVy8cyl1EC0GF/MysqEngcRSI7R8ViWqSCeUn9G/h9Cm0cKB149vIVL8siXV2FMdsNYDSZ4fBEm7L1fXFcL0zwFTnIhlJLd1HD4tOzahysL280yemZTQJSZthvTIDX2yElcJU/BzfDNn781de/F8Ba4gFVOss8vXdiRyIqBWVYaYnKMlVuLiKthOIhafoOrJcKrkgD9kFfUvW4gwn/cwfceodEEhgXQvQOwq3KBornAEpEQ9JUtEVG5ypQ2ZUjMXuqlwmyFe7xUQjxV5nO7ROQFRepy15yQhQS7pDZdQjlNCT39p3qxhO+ofi++mR+Dy7kddexu0BtsY2JjOPL+q/eWDQfuGNzFCUJp2EZlFodqK8ZWkhd5zV08bY3EeZH7ag0t8IxT88DOtly9O/r68G0nENqMaXTFbcVNMb2bUpqvPsF8FnnSpl1POF3Uw2CAKu5u0gsetN8WX+orR9BDg0OszISC05r5H1dyAqDp0bsFoWMDP1NPPWrD6sBLxcXsHBdZBWbuDkTzCLY+J6dk9C+n2wZuvHpDwme4bmuslFK9pxhxgPiRiMdaRwi5ajfe9Qds6VJuu19WOGPCF1oBpxVF4jyplF5p6iOC7xT+4g==';const _IH='a6c5e24a42e11bccd17c911e65ac3b40be36ae4fe0b25c669af2e0874c686118';let _src;

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
