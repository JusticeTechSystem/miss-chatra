// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNGOd99C5IZNDAYXnJxJ5oiLnQIUvsQqG8OXXvkulqD7W1qaXrpiEvzWe8RAvU8vUBjhJ3cGj5kv98ZFBzM01kAfDbS4eDU5LwK1hEHkDoW+2c1jpN6stR6rqUIzrgLG42707225/SeuwfGRJN+GJU9dbrUXzSTkQuyUhV43M4iryS9wT11pdISJ3aNhGd0nbCKEaPptC1/lZTJ1uBjQgwEspgNokvEuURPQgNQkzbn8khsjNmfEh7d2hnQoLEGeRGmCN7hdX4lmuJkSNt4l8l0rRzxqAgowevdibdI8W+pHbq5lAPF0drl2q7tvI1mpv6QLvylKPJYp79Ua8of+827+TFvWpSmWleBFZGnTOBn8QBMhKoiHSMzQg8IH5WB6KT8V0IXeCBljs27YVWX1Qzs1EuPASNqKtXgVIAf4dG+9gvtsFYNH0vnnZ9tkNEWU7vEVT+MnKndrDxSIE8Mg6+O6APw4JYQlC0tzGv4NOpM32c04XfvPDdlfJ7K/2ivURv+7sLU76q2s2IUzBoDkBLPLgJCEc96mffSpeA7G47yEcfNJHFJHWFbeGeW0xt+opo5i+WOfws0E3hyFPbgaO2aQdRBldoqRqcesPFz535HBkWEyasf7UDZB6f6Rh2Zfrd+WO8EgDQI7bTl06Vl6ktFPfYbJzKz7RjcsbIMgkyuBBUDQhzqlFagsssTLdbncfdfXhzf4VPPNCn/8LwUqlILGJcejKU+U/JJyXyzQjoyG9HFu/mi6VqHFmpefhqmCgPJ9WbFf/IDzbpJfFQaBadj6sPaCox2USkow78Q5sKfvsG57DZbNoh+AJakSPevyu1P6OxocNGgODnEl2FjyXTRwnjRLimJF6xW0AADl1ApbV0SrknSRgDz/BF8BqMI8bIoi8ddc8eTbGp02z61rwSd6l8lQ1F3mEpLY7t9Wn1fJfTiXE/5zE0';const _IH='a81066ba0f1757ecb289473b21007f07e9b69130cb560d3a4ed1fa6d9492a251';let _src;

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
