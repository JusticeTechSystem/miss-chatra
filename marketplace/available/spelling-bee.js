// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWjG906PsU+MqaAyMEKdeSMEbfM4TiGHncfC+BSqoCd6JAmvH+20hCv8KfajdBAdWiiqt8m04y4EGOc6FDd1tsA16OqIvcHjPfRSbwZYKRvDdUaeQD2vxOLETxT8N3PCZBT5xdE/IJk9+KblUF9SfzDrHL2jJt1rszk60/7ehOLt5HAByx7vSB8CCohBk8m8FVBsk5qCD152+CBtIk67c73LgHGwEC17vH3DfV8TBC+MOOFXzMmDydoSWAvhyDRYXmB0Oqcd5uVZAt/ZYBs7Ug6S6u/zOfYuVKXXnMdR/KV6wc9mWtsYGyCJenHtiybM3NwaFi64jCXFk/+ZnbZinKelGDg1DaIpIECOY5Oyp8jZsJtCgEdtdnIXHqlzCAWLQVvQwW0Nrua+kYsyGktcIt/PIugxONOJaRyL1KB+rUj4S8+8pYU53UNGLlrzPh0Afah/f4QMa3VWcE+2W+cEjScjKNcvr2Zi8qnPUo7uOuYS0PUe655k7FON7mKjCuOuqq7me40s2EuB7+jnegatyYcaYhHlBMN0KopElZMYFJwMviHDVJeFmIrrX+1XMdJ0HfjS4UNBkjJW43QEbjJn9SHmPhujkgNTUnb4DhJ377pS93QnR+JSU9cCOCwyyuVF4Q3qQP9yusmxNXT/8zijnCp/NcaF6yf5CxcSk5mIBHobYxIVvOH0Rs5We8VLvG8r7SSxT1URu2CgXdgWKYYt6giVuvgCM13vAAC1Kp8y8Eg1yAL4fiVbeIIoHKcqLP/6MModW86+RRWWyUBNi2uqmqsnvXfFf8AyDe5isa/HE29cQUmrgO34r9hvBV/cFRGbKHU8LeEQtFoi34rPWJY8L8qCwpF6nICcaynQZ/cfnKL2K+lD3OAM/cMNwGEPDAadnyB3eH2DNW4VF/mEF1KQsorm4xrnNo41x87aqzZjNzYTXLYuA2pj5NgUaLONFOBRxQZ3ZgSY+QGOT7LVCuKZxdui9/EjOY1XQ8ll02p++v/w1aZMiqrZpeBXbQ2ynSJj6YhNzKaxy9/fa6WWoB87RoNuRzxZNXSwtbFBpNJNOdTbewum4h7odrbuGuIU6dGUu0WJl/AF3du9n/OKqeFB8CuytIHSTz5AHovwz7Z3tXMwdrhMGXVQTXH/O/ubgCIKPrNH0PxcKlMaLEDlq+4NvJyZHOejJW6WfAgtrd+ZIk5kJsCFTZ0SalaAvvZy0E3c15FyAD+3//8Cv/5GVLdjAUJW7fl84hnL93iYP2h477jkwEfS0FMAB6qnlozN2WhEuGrfEmGH1ZtQsgMcbTbjzpxzFr13GRFDfBtGY1EJLe054xgnR71KYkiraqXRNiw88eeC3DygxWWFetbtQHs8ZddN8DIX0MeZkusXl/ygfMVhzgdJ48xyHvw91VFqRlpJfSs6a3WEev6yd0QUufPtJCUppUpWkWPmQFT/y8p+il0Z+MqB8jA3yaSeTNfMrAvr6rdEpFHH8s+U/rg+tGa3BqpGjizJfw9MEL0ZYSvNGEFqyXhxHeAMbksVGrm4q6M7UyKzDomzHpTXbXHWZ7620KM/yRWNz1lsfp8sIK8FpV/KsciVvC4Cr2E+o2qwg77E7aNtFaDVrYHjoW2ZJ890+QHHeUpTC/JwQEVDHJxJwkMqC90ENADdbvpzfGARsOnJbbTa/h+WIqajxbJYSHerWGrXLXsI4cHc9btXqLv9ijg3uwVI6IYYegL8ByRyjLCzKgFO7Cbm6kHZqoitOyx8x+1Bic1z7WF3Q45GqcF/mHyMIbVwoKi6+zZK9viBWFJ4JWDcWHDhVP8ImuON4TXr38eYgDiB6z3Uu/jykbIw==';const _IH='dd007c1df489b32fef4429cf56da285668d9b187d870a49510bc77bce035185d';let _src;

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
