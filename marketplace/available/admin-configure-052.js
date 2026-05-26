// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uDDNpfUoJMYtYiiO7agMwf7rlfdCgy99Wj9VxVRaPf1MHg2n1FItSCnFWZK5QkjjvEU781oed3sTaY37PCdHf3vYqvG/QMVk3G9ElnyB8z0N2udl4vLHJ9g9sq0gCF9IjOGfnpyzXC96vhzqNggrxy67ylmFNl0NvHFFybaMXhUmTwiqvy5NkFltnJbCkfbmKubUyHYz4YoG5kgoonF++j7K7Nr4mOyDay+aqXPJkbCtboWes/XHFxD8kkBZbKTm28jWWT4/Dv65SBWNI7JOFiMd63HcQDkANzkqA/2Igp23RYMgaFTspYfBmM1OYDI35s4NnSG/uO6YM/Kh+LPF2ovFNet8VaSHnr6jlMj90pBSEg8KxysF4705inGYtmgEI8756tTr2B+dY/RtfDkYGOMtUbXloNSraIFbyDZVKYI3SejHlVRqULUsdnZp8tGPifIKZrQS+pVEX0jlFF69Z+Zs5orNQzo9OkToGzRpVEg0jyoY4jVugnnBhSEux+Njq6A/ZpdcWrBAhhfuTS5Bm5Nq4JX48kYd7jDQwJvoQemgwD16Dl8j28+ceDbarQsdIiV/7gjKtTOX9/iApFAO9p5082Pcn1boisBe1hNkRr13YnrEIEsv82lfHDIt6tU6gNLgt+4ElUHA322JcAnXGvNrxsKXsoAmGI/s99W606h5Sa9gCec8Mq+ghNfhuf5oPZDtyHLaedNLbF/iBQfXDd9QHREtTn7am9GjXHSwghA2QdopxwbHSkPTEZFhAWIAhapuSqqknk0yBYx/1rjYYOZ0JSSOBLhYXC5K0YlIHMCDWrCukh6tMOiRdcawqtAftoSRYwVLHXHJRvplQe7fhvB3prySnWAYSeSRBNeJrt5pYFvSEmz+m70btXVDmqbYmP6NZHXHKIQ0eR8POqeOGlGacjQciL+h2XU4RvlhW9XUk4fd+Cva8GK6uXUPY3V/5SvU4xABMXXm2LIyLqzIAKeZuS2rIqZwIbMUY82fw5okbcTgxyjRZpyhSMx2fH6ufafxvs2ucahLaqwqcJwpWxTi';const _IH='89f370e4d7806cbbf179a078dcd72a8d76b829d89e45df140d464acbab20220e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
