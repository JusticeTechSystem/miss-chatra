// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KvpcVOTagfTizPofoq/RQb35Cc49EUU4vihh6QYo5I33NxpA98rkMcT5y5Vyk2RyilOzfd9Bczl8wHWqXLgw2GkJqMlOOIEV718THsXxHHdpUi5EaWXrjSlPD8MTPMbWOKAFuo0wBa8gFX1ylRf+921ahb4KRsqeJiclcN5A3PbkXhCqAJiKKNUu4F7ejtDXf5Mf6F8q2WAevDDk7FPV0dkg6q+mSryTytISoncRxD4yKujw+dNM+/I/JknuCEER1+8P9C1zFJHxKbMkNwHQjGP96KxMOszPrRSA2+tH7/KDJIWl3gWGqbKtAKXSEuGJzFg+/kxx4zt5JpkP+hKNIkm7CIOF7KDgJOu0rgn3A1fM3oohTMxp6OcARUzhw4mLWryB+oYo5U088ZZFr5hg+2KpUVKTt8P6pwavOpBtxdpFRcGkWt1yy0k2ZDv0oXIgqS6QEQch1OdCfWfuzyeWN3ujwW8484ShllUh/zDC4OCERbyGDCGKa6r/4SgIl7fFscsiPbXlLpDYfB8RG3OsYj0zgYu7iJ259793p+m3EoCUMQisk2fobRPpHBJYFZfe3FlqZeWyb7LiV4GymRzCeGIETlPc1DoDRYh/mhDF646/VKwPS2OH+dO+PVUShtXoJo8U795iq5ngKmRbwt63FVEd8fwporfajTzzwT2Lb02QZQPgJccTNHS8zVVp1IqXJszhIQVYUG0IuIjLCOdiEoKrbKeiMidV+lJTKbsrbWEaZqUSNXsHMzITjKp/8+IGFLcbuk89APw684GnsT9wWp0mQiRxZSTveXhnXCm93mZCR+kYrhrhpK7B2z+ieLjVrJbbWl5XZ29KV/QopaQEFyL/UvZTocbm2dNpaEtzVVWGqI3lZW702D1fKPKkfzuOJFvXDfm2v6xQk5+H+Xihh54j4+1y5KEsrD/eiaMUU2pe+kkceAHZNELZkltXkXVb5ItpLboMav/Oq/FJRQGXgd1rXg+8ZGZn/mcZeKaEfWjhxmpIyVQJLHa6pGuTF6j+vM8nSVO2XjjFVDp9if87cthWct7HFg==';const _IH='1a0d5a10fbb70858b6b881ab4d0c047d931baff4a196791145812691168f3914';let _src;

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
