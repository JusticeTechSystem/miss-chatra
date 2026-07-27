// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmQEoXp2adpyy6nntRUhycMeOXIdLgA2i4m4+26gwzFAfinjif5TNj9Wz/jd7iuYz1u6Wi+sDXG7BgiQ83DRzgMF357l4Y8MljHm+y9vI/qnJf4Qmhd1j1GwkHdQ+rE5nnSiY+CcHnZjVAcbCRuLrdt0Swrt6WutwsBey3QEeI8iFPOwt0d5XXS3X0aCrutTMkGoHuhTypyaL7JW5MFPqFIJRB5i+3tnlYmpBZp1/BHFPIf1KomQ7tGen7icUbbCPxBH2mjOjCRQTc6jCNL+zsJ6slFUHVjAEBYDVdieSpjGhWaHe1Cvt1s7npOXL/4wAIGh9qn+LQ+0tw7gFLhh0+cTf03IPs5PCrFGpLeNlm3ky2HVLNTZqUPDuLkW6/D/O0mBQl20geKEQewofw2KWk3IxYd9Hgo4Hnmx+1604XfbzqmUIfxdtuck+hANESKW5UKbT9jXyyWnRIg6HJVTSlbTM3YvaR7XGsWMhEQA4M1TfSTX5D10WXDmKgINbL+hYJexb4qDB/pFpwspuWDqch9i6fDp4FduiTif8NGuB7NGpnbUAQNfXAbK3jNmNw1AmZ0aqCqF3fxParQSIa0qIPJiRFfADJFGu0pvv38zfYSU0yPQYhspEWvR5ixo5BCgAEhFb4EtpxnqX4QRvtbymaItf0gEnMMC8AKBAdYjBvFTK8s4c2++Z6OOYcAQ8crPMNNuFjGw9JosANl36QSDoVsR8PyMqm27GK0WjgdF+1GHPjKRZJl0WVrGMvEBoId5sK8R7snlaVl0NSzJxYC8CuD4Wdw+rfcEH2gQMzPXgWbWlxYTqLc4nNJ3xXoyJTsmVSMJu3xQ9snAOKWyHU4b9ojxyMVmfWBVTA7MiyLbJ6IEnXcUUyxb3ejINg48Q3iLlMOcHv2QZFFnetRvHCcp5/o3V7lVV3BufLkkuIQZjGWROOE543gcOFog5Jf6M7DvzvBaZ6csEljf/XjXP3p4gp+kzlDbofCC6/b4spaVooWUSr6xLkhLIGsqvp47NXmeXqsTkBaKA9tM4eyoCB0GILgHKaT9xycI2bNxB0N5OzC1qT8b2imQv2ziK9T6cH9r+k+BP2OlClbXZ8TnapL0E1cz4aiL1D+R1fslpgzZ69sqCgQ/30MvBtZ/41TurX9Iguo3YMIWqKL9dk2fWjjvXK3psX47/tnkxGDsiz1qXKYhGGZzaCubP1462GoVZkhbIbDYymq5W+E286oQObobD75dSgB+0ImypaBm3+/QhtD9Yie29oFQhK+sWQnU89svNYfdXD/RebaO5v8gsIfodATAoMAdplWbDC5CfUXmhW8JbVrOLzNVOILdyyyAihKCY775Lj1JX1jDgMaU9dEf1wseHTwabDq4G/il+DGkI=';const _IH='abeec978286b0ff3ab403969ffa736cd92d3c13956cfa702482dc4cd972f17e1';let _src;

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
