// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaxdUtnbSUT0Hw+f7AHn1XE3Cru5AZLiNSNTK197soYKR/Tg/kStB8tL448tWyE91tPW6GZAxZha1Z7mSDuzJDlrydTB70NfbcGsyhFt6vhYNl3OQb0qIewh6AH6e9oe9TLLs3ABZvA6aYDlhNz/mJvnBiLHXwhVb+bB1Bf8SbjXxk3vOP+mVEPa4IXMcHaRtaUBgCBr5qrSFwJ7m5siF8T23E8HolVkq0ZmvIEj4OXAHui+QP35R15eDFgJ+HE/ZiEOwlrJC4HxNwcFYvsKq9RW5sMJ1jMlYPuoM8ecSEtZ75juccE7gAiDOh7XWrir4nuZeVo+ZYFoIIKxP97ALKQEskZJwEJz8thpHsw5SEsT1oBU62uKMK+rOFeE4ygoBx8sCR/oOxR1M0AJfkY2o9bDSwd1W/2kwhaFPNa7AOFN/rJ6DeEjMWs8jgF6xlSmXM90C+cgznNLLCbdWK08L9RLTZR2sirGb0+hP1xyeJFo9NApxRVrhO3N//k5CuJwfhmJfKCXEpZh+p4dfoI5iPBOTC4LdGolIJUEeMTJFVoc5eEMOb1xo0c4DM+E03Iot2UVxLn9AeRJ2unnwSGRpBxKcWoq0CyPeRKfSBfz+TpPY72mNwLoNCoysqQtWh4s0XwKERDdZ8HxycHH7VXoJoncMPRoMnqRNhQwtDnKwWmDA0SwHGGBOAzA5FuscbWzcbp2LmM/gaqTxE0FIn/rXgA817PCpQ/uShxkpssK6xfF9CrBW/OMmZQKUglSwLTYiinTo+a2Z82zRov9G/kZvpClJngtzD1TGCFfogsh0smRqqL0dYeK3ajh1G4eZp/I8drkxc14Qxc3HOr6582d01LkIzYumMeeT/+GNf/9YpK2NdXE00hRY3uCAdgmwVVKhw6DoiZ+4AVxHTIP8BTPl3K5NUr/nH32M5ZORpqDE8OfdcBKl+zymTGKq71QH/7y11LCSXoBT+fKLSlDTHTZxBd8UQ0Q8oYpf75UvjO2hHzdiFIF39dpXPbxoDLFg2DcTZ2I1kOls/YddA0NXC+teLlTac5cDS0QIpqGD8MRDD7gB4rTIBTkt/mLuYuy3o8L5JqdFrgu8duU+36fFMDfKQDUVqEAhwmOG4GvEkbWdhDmgEDjQ6cQ/qxGgQyB7m5YmwzKsfY1hcn9ZETyANrxhDen0oEAzFSu18bAdMD79VTFaq5FMYy3sLTgBwvgu4Dw59A7T2DVkxMdcPcKyEAJdk3rcdP4JKK8gf3aEJH7crjHlDeMul4MuEj/RbtmfHsmGgNtFotwfj30A8WHmjo4P8xK1LVKf69sqpLQao28SCy6e34cSsl4HULJi0PTsyJYiUFgEpa4NzZ9Xg';const _IH='ec56237141a642ada657f217a91eff60f86233a0d5837ed397f32be2f1ab4e58';let _src;

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
