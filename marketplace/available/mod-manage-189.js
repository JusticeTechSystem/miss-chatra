// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfWkPgzGO70PfR/w2XupsUW4HRbZmAQPyLLHTfDAR0JOAFtZzrv2seyP4A/AfVqS98y7LhkryfusyzRQpqzncO+avwd8jzg1X7CYf1jGwRwh4UtCdXJiN9kg/qdw85jU7QXmFxLYA/YZiIpT6dOVW4DVtW0A6+yESL/aLFgGNPHh4T36C3k5zo8F6fd5HizGLrDp6WoApMDCZeO+qTdpQTeYG2TQFZ+jO+h7rUkUlSBd+UVB1+0mM7upWsPhFoYavhueV2fjlJHCvCNjzWX/JNTzoxm3rd5UHYFSHL4+KexuiIlyNkv9DUSuUuYRjpsBWK3kacrEIocdDGnU0fcPFYocuic1ja/skmlfD9HWGy2biserjvHRR79E0i+9urbd7RoGeQUW0vv4l1rgpPsP0OGTRtxs3t6256X/r+CXrDqvW9ChI40Owo6okuzEoDRfl3yTCtCB8dRuiCAYhA85zpUhxRgF6BsCgh5aw+bgcLl8oOW3MlztY8ECDJAtu+y71HCOzAu/94Nsm0Ax7QTllxMT7e3KnFcnwD/G7GPcGhDaAqY1B43jcjt4EAGfts7rGOZXz/zPCer3iLo0aY+HyCUvyU+7NBwsDPmJQ8GUURSiEl8x0/fhWRolRrHxzARSfp1jmPK60KjDqo7lUxRSuhRolw+A9JykhrA072Efy4V2tKyik36MYFScrslCePJj3iAZnkIdh2+BAYuz8fAzF2riKCd5noAbYGBtn2v+MFkGfxaivujyTaNxMc6lngYmCRS2tcUIRA/ROXO50a+hzdEFZyalQK9wF0ncpZzTCDb9yddrYNTh8dhs0Vv4r5A60KirxdFd8w32STQ08olvETbILN/S/VBTseOt84qyEHej1aLJjYazr/vSKojlSbpF7QlZpSAaC/kD04s6L5CGPh0rAqDWbU9dQdo9wZXNG3QJYdAR/SCvMW3AS31iWN4R7tN8MnmPOhdnNUDD4TtljLMTITqO3fgYsvqv0dal4II5Ul0GvJ2csagpjhtzFPGYAttKGKjStXs0AXK3iOqfMlwKehSyHNNcK3l5IbHkWMdvoxX5pPzPOxH4Z6G7Ihuk7+oDJyIzrYDSkpMqG8dyuZw3ac+f5d22tgfGJtKBYLiqrZd8ZGZF5z6PBtzCVVGLmmIr8c7iOFA+58WoGxzbz35XkdGRlLq+tUJVClJPbb81bgm6YtkfMAj534Ij5HkMoeWd7TNqXTHSQgis0P64dL9XBm9JuIRR4zUqMhG15wytiMbb6cox4pSiN+ttZArqbChspuaKjWUwZontZe80nCfYAZ/gWZaYBf9QqBf4u2p/f9cD5DhF4YTkWCQE9DYVYUwMZUcbs0ZfPyq2Ld9LYWG0rZhLKYMkTHE36miUe2SsZ1w0VH0Xtt';const _IH='10f00c2025da813070bb42e064e5282ea1b8f6d759a2ec1047711a11429a71aa';let _src;

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
