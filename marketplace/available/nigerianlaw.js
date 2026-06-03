// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7rUln0PWlRMaoNDrZmj6gp4GRVhK1Z2f4icdfkyo+mKMBGQCzWWu/cA2orGL6DYZmr8Aw2i57UnFD3xnLQ9KEcIJ1H5ZMKt7KrEEvW8OmFfBwMQgl6wxjxWw68HDesPY1ucCvnVznlT5u/ZijLmeMRwA2/48OZdE+5agO9SF431vgTM+oQlQOd3WLBU3w4S5+9LX62vTsFVBWwYdYtEoemjgWuf4Dl8MuBpQakMeDZIJBX/4xI0hq2OjJ4LBFp+WasA7IFfXbWV0h1CQtvwqPQ9mzwWpmXYfL2Mf2jukqbY6y/SB8SW7rVDGEhL+eA3GxwQys9WHWVT/pesVFZvP3D8bjNmeDSKxeQ6s0kDxBBf+Gs9HpQ9REIk0H3dFSJ37zKlK9J+9PvtKiEJHv8CKj5S407ME3v055LqROElDbk9RIilMuHSNFXGHSKS0nu1YqNaRj+DG7MWmvpoFg4sCH/ek5D7+W3NTnzETd50MOIzXCoGK8ady3+3oFoGs3PBRTvluCaF4YV5ASSietBb3/oHf5/dvzLWC6meVIw9G51JcHoC99y296YQItSxcPxifNPcW7vNrzpe40R7Tsn5I8ZZKxHxTN31s6Wv1TOYaV0e9UY6JVXLf6hUBFkjeSTzzE1IgIx5v6Hdwath6Lan+AA773p9zXfEtkz+lEH038g7ec79VBzqQcwjYJleigSiYtjKZQyGrtriA+Qrt2JS/ZfBtnwq9BKxOYBIwATVAiCNSyAJ7G7U7B1iTihUiD8oAXo8wku4xrV6ZZjIroeG6AK2iERoOaqzS+vc/+/X/ctbhPc9tUFbMe9noh+y1t763qsZfsVB9LCLiiHpwkQEqYguJZC7MsMHk87njrrSp3I35m5j7Zl472maC8nK/RTkV7rVKxDcFD6HLTBZIbZE36B+a8Oyybj2Ey3oWDR+zCZYMxjedaMvjoc+xTgvxZ4FB8kffFAz8EYcBIFQeus8G+XM8CefT7N/Xh7erX1TMF9jNxeKNN2owaiAilPj8n6wLc4sGEfQup+TFBFKMJABkWuZujyDTZuqc8EC0naGSo3s8Lw1AX0oMrNdTeii3G6duhFtmRFS3BhOMKG3T5SwU3G1C2VcPMxUNhDWkpzPZ4pYe3uSRbuwN07GW3OSK423HBgx2P/RZrXsZgnkMLMeqNkX/Kw5+YVhF2376prVJ0LF9evGRGgnB2qre/E4mD4IjnpvyfsSHYxpMHw==';const _IH='af8ece3f7b47d72f6a8ec7d835a5955547f2995e27264d1d1db0dd240f0d6039';let _src;

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
