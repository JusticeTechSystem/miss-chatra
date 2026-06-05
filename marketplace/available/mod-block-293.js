// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H5rqGaL0u1BsgKTfbU6inB4Ks6/efvMSqAy+j+k9eUG2dzE/GzjKkrE7f0NazTRAZv6Cn4uYskcasrbKFNdm+0BFHn1oBeSp+bGpNBftWq/h/xtPGmtYZbBTZSmxmGH661Q0pJ04vj1au3trpS6eq7WPyy8ZybJIS2fCA1XKi2i8YbkYPvQhdvsoKavoM7jfr3v4pQMCU58l+CS2JaPmxi8sTzxVcKnK4VCZ7oAmmO91JZR9ib50xvjvWqRQPnIb5BziLi8X18B4zRXTs2/cWMIADPSXuWMEwADSEMlHacA93jxBvk0cNGYgbhK8VaJ47dcLmKdnpvPsy76vomlPOl2yMDpo5eDNs+81CXmtMhiWgrQ8eFtBHQxdHQoEcjireYim2CSOtfHMPmIW41pBsHNcJIRPBuifCe8iLdcK2vVmSydTd1lqUspee2PyrxYCGQX0l6TG8/KiyZu3V8jnuqv6adjEGSsJMvcB1oiWtuOvUcuwsraBtfhNWrR1H8VT3emDlJ5+iuGL7VzEWzfuyVeSff9hG/SmSfzmgKx1ZNVn8aGPcKoZja0F4jo0pjRH4HrO7jUV+LIspGF7BjDy4mD8Qp4aM+VGolZIHG4CxHT95ityedC6GfTX/NI/mk6/wrE67I+6NjBXP4oWOsUzh6WCu1DkR06aEiivJKwtcxrBka+IFZ44ah+IbouoN5UuYeDWYFg7L2L+upk8ULFUqQm3cD75sWy0fNY4EaWWEbP65NxwbVaphb+9+m+M8IIAV1ey92ytcnl7fnpTA6l6/uwNbl07VCazXCW6brSMydWAek8kkZhvz9Q3fKwFh/82fU/QGR4fj1JWvcdV4PZYd9+k/EW1RAnXAO/ABnR8fpMeRy7qXmRudySaYCW6Pf3Yw45BnBmGNgK4Hkvm+WxJ5KuSKfAO841k013w6dJ0SS2umUB3UDhw91XC0faxQ9oteV2vuClER75XZawQZZQVH3nODarV8lbnCXG8FaXuYpt/6sOEC64hO3hn3zYy6DPwcGPgqPVgEKNN5AI6NiOTJP+5jGOipfGGNJn10/+bMieo3Zc2/R7M1zDZChgOrWxd+B2hvK4EISpGW3WOzg4+HX3Td2/6UJk5278VIKShTDg+Ql/k5oc6wFUE08XwF0ik+40qKuFY6EaPy+whh1QpWkML1Zf3y2ilJES7NQ5nLqyWRraCWob6ikkhoMi9YvOfVGLqheWJaWyTYohr6QuIq3SbMKSpbsBD5V5wx2qyT5YCSUbCxbg4Qdt8y3oBrxRdIbzq+Re2vEdHhOSCx4l7PE0PARq7rd8AtgHTM4MS3fc8luubgZWFUVbZy4cbLdakfHY6M37HZlUX86yk0y5aafrJoI+mo5n4HW4EP4uv';const _IH='6907f91ac58edd60955fdc6bc98fa9651df11c1f0b895c569115785ae8be6a7e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
