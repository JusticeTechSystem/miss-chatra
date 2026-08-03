// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8TGZbVgSjDoZ2FNxwH0oASHXob2jhssHNHKcc6SrWJ/snV4uDGH8TsxLi8IfNTOJHF7hMBD+1EYCYGmZCuS2bKX1q0gAyz4pXWMy4afVXM5GyjD3l9788d7dDUlpjOvTxuWJnYonS/y2u+gpnWGKCkmgiEDtAKrAITDtbKNPniIoBWM2QvvNzYV/+3sgWH9Ezlxk36LwBNCqY8dppa6siopjnz8liNCo8VyJVb1p/85nMptDRGE1uSOtBXLbTuKKXcbFTFVq2+YyiIBq/o1Rn/kq/vt4AphesX5e4va8hjvDnU6hcPm54sZ4RbQcpP3WmMo5qbwOccGcrmUbmfoGk1ZIP7S1iAG2kVawFILhoZ5fZI69YZzYA6XcF6LfytlnxQ70q3YWIICBDCxxzdIyF30TelzSpr1KYAf3GaAZkOuY/7HZBUWbQAVaT/82hMOY60/lYI2m7bTsU6pqZVX5Ewu3dFErAAgQGmPFM+eS682MiDGCMEbajPjGjqMnpZ1K/K0/yEO6efFyW7O8c4chdyAyQKxtbJr7Vv+mP1K1Drsj+Zrx34AWcfDvtlMurqt7OPJmisDWNFI9Bxbc3h6hge1mDdOyzqW1FbgJYc8TUxKm87K5kNEMV9GqxSyzd6vTDx/O/WEulD8Xw4HcTwWCNgtk6EmQtwQLiBl5ySBivcjU8aDuUoOq5tpcSQJBjOPXHj0DV/ecV1WYwH27VBRA1jGg5fwvCZ92SAmKTYO+YlGxyCmNW+SqRX1wWCQrduWhFaRZ0q5S5+fmG/5iG7DyNExGFdkf65Nx1An4OlyPFuUubeu0kmc3lkzykd3bjntU8+6WF+5835XnRTJUVvWEKKv8XXfcxUonWb14umFvbRrVx2y3mHfI88J1QURAZAnFjKd8InMttoL7KuGglXMA8tKudU5Cs5eUaQbiuvp8AH/BKWaoOV1AHhSdI5Q1x8p7dluHaYNKqpXY+t+l47IbwCXRZvOOP1OeAU6r9R4FmJYvmc9O8EaQjnSTTialiq1YV6OqLIrfF7SfhV4U=';const _IH='9c5924835ab200dfa4e45825ad4b6dbacf8dc27707d120127ded206e413905a7';let _src;

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
