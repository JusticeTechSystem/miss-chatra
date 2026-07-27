// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6fUkHFvMOUcM/883JWK9Mth6/CqoUw0WfKB0JmLAj2EGFtINf+BGXM2f9sgyyIJgtF2dpE1kWhFOkmnMIikGFloAkXuXBo++4AdzUviV8WaSntTLwBY9+ED69NNIXlJFuxNCQaaS6fEt5/jd2Dzi7/FfUH07Y1O5VS8ahn1IticBWJhwUUq/07Nuk4/iUleDxmpgG0rT3+/RjMNc7Ocxyf5LXhA5jXrhWypndpsrXtLmZG83MCmB4ERnkbZF6RFTbzB/+4EbrhzaSP7/ZoCgwJlUEF24QoElZG49HAOBgbygRvgDvM/oYXPrBE0L0tWRyIFemZr5tI/OfYqnVIqGkDD7nIzJA/kownEYkBh6cAe8ayQR321LCpbYSCuTxfYjo2LbvT60yu2fYzwCtWD0cK4OEpkXZdsuNHm2iFSFWLqhBH+ux3YcepxZlKKzebbiH6T1rOWo1ofAfw564koe32I1eJ4LbCUikPWU5lVVvLacaM02p1DPNXJH09yV0cgFgEAgFeEMmDg+s69YjEBx6F/Nw39TxNaW0eBxvNvC9JFB2wktB/V05E4Yl8WEyGv+8tb0hOf9bgUhRyXVFGGQ2Uy3kzefB0qkCGb8aZ0Yi3tA0iAutnAQamVgte28DrNxRdHlK51wpgYw5pHEaOerl2KDHF0Bnvssh+9N3QzlSPH297tuqnB01kJiReX5x/uu96w+B2aEQ1m8J+OmoS8XGFtT/plqKuBN9gD5TDswpvJDkV8BpzwxBqVARoOSbuqjxk6f3dKyMpvzx6/YBj3oNp1rDcaqulqbFdyj99jr5jNGlHuEvVwsaO8Wp5VtMXeDo3L7yhLlGbO73XsJu8PQVGDkWOR0xsm8XPGXa6Dn8Io8X/gv2F34TtD6SDgbvp/NZuWmGkC/arY2l8qLHIQBoGcgIAIxsFM1Sux3sbXrKazbrdD5oG5jUV4VWNzEY5dCvT5rQ3vfYhv/xkainscwOmam/R9fLBmkdtmA8FCAH1tl3q91XFoftObFLwwE7so3vkmem7y+lbc50nKkKNKVtiuT26mvooilsaDNPoI9ymHnARQPpmhOzTwZGVkPsHSoWs+93uWvIGbrsGBAb9kZFF3Slr9VKK2VWSqMTbS2mJcUkZy0wJaHJ+6Au4AX7Kvveof4Lwvo38Cu6FegM949VpLp4yenMDaoUUbfwJXxTXWBB7wIsM1zaZyS14W5avIHBLweB2+xOddtnZUlUVYyoSruuIbKKr6NiQxbC2MaeutpCXU5YnU6V1qjXxIPNyozz65I69bgF/3iEuhyRwfDAR2q4IiLPjMPuW+72Cg3K0k7Z0ALxx6ZQin2Jjl8HskTiJfJ8ysowskxPgOSqvi7XWVJyTKrU3m9ampVA8o4=';const _IH='879a7f085e5fbf56a87c7ebad41decfc74f80e8c7eccb40a8b8f99500200abb9';let _src;

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
