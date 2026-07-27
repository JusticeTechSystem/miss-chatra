// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQr/pLyy/vXykcgtoCAIZcERGiWdpX5xk/3zVrvQomTmBSu97yJvAMyI6ljBC8aZfbeOrdptVAre6CwrF/4HSvGP3oZQx8cTcYZx4nX74GwoulI6NRkzt287tKwxqb7OEozzLEQJ2kVYrLRsy+NDutmU34KaiQWk8YQqfgorb40uk5pE+nhSt/7W8x6LWqIEGybNOWrk1yrkg6HndNgMvISlmYVwsC0SAn7kUchAMVsE5sV3dT4czl5Z60HKaGX0lh+bK4ME2/Z3xTu1AXooU2Wb+7Kdf89y4FxdhqEaICzTqYn+VfjN2Q4VIJ9rTyaAv2riiqAorDvA1TW60zMESqcULgqLQ6PZ4Ex9kE0b+RFg2cN0wUKav/FKPLcRUHl6oMwE2RNSOhd9W9OvqyBXVdRyanfmdpuLn/x8TaAJhBH6QcD9SxafBy0IUcg7OL3wMULlQXQcCJFMl3ymyuenFMqv1YLfqu/8F/aBb5kU+XMQ6lh3liR0ZPAtUe78xbE5Ldaiblt9eNV9AV4+A8TXTYuFJ1HGiWX3ybAfctWV4SjStD2vnbnXTavR1+oek6kRZYkG6NmQS5KmKwPeJr3QyesU/+1Ln6O04HhEttTNrihQsnjKlN4AHnbLQ5V+y8MqWtnIgsMU0uXPvOp6d5C5Wm3iyOt4EjOvz2SJr4dSP21mRMrf1NVjwxti1SIgnSknYjDDGhMDr3gC+zq6Y+XlJBRgYMN2vd3srT9DRklFtkuHA0R8BnugGo+kfJkFfh1AXFXPTE2OuImGOh0staT69h3vAknCaJUR4e6NiuNi3DsxapeA4mGnMtnHPl+Bt0lW4K0UQtvf/Wfu0WsoBUDU94FyiJ9EeJEnhyvSsEl0X+MEjEBXx9JmtuiwylJsODDbDCaeAj7j6OoPF0p9Rl0LBSDPpU7f5ubXpLrHDp8NdMlbVCzYp1kS1uf9bitAROQKLn13XSvGi276cs/gbTBAAVl16Q3LDWgWavlaqCXy+08pZdXq2QjFUeCCN1mYCqQMcLPPkhTU1FPAUVJN/+QkQb2DwCe3UbNgYeUEOLcr7u5PycCjVYEDeApRGdjXtOmGhNPwfRPH0e++MbOqQz/0kMQ/79aIl7ZAweO/4R/DUsGCLYV3vWsnmpQkoMm0e8DWi3DOciYWHEBw9TgJDRmQEVy9mqDZvLJaXtUd0gIJkQd04ygJkCHbp7bMDvlJo6JtssLYFRAFyXL4ZsM+f/imyLkS/K0D3PKh7fGX6wq15Y3B21VX0g8+JcCL/p/aR3drAAbJwBf3/P9MfQ3+HTxiw5eQndXsDPB0rKqe1a5uSig3CQUe0bzxvptLfiaMfJ2M012sLrM+SiKFdIH0OjFG+CUX3G6vJuJBc4+fDJemQvw6bLqk8qksZxliXAIBV3pj9xAX+OcBZtqZYMAcRP4Ljk/iaQq+kVwb8mgK5YkR19/hKIRgDHvunWIbI7TBvNsFidKgiAa1TpTSwAXvb+1fbBYam5vp/DV8K0kTyENSgqG54TnhIeJt4ADv4EcdQa1uBUECm/gh6FCM8eAMv59V2CV5RoMPeBG7luSAVRQdEaZhDywtv1Q1kERi4Sljr7ZrG+4iQgSAvm48FC5zAoy4D0CYWZneNXuI4KGrnLsRy0=';const _IH='258837978ac5aaf7f7ff7be7d6355c642ab52affc7b19d0dc705799470de8666';let _src;

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
