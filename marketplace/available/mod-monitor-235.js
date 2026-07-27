// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgXrZufEvCy0HcxXWrwQK21KuVnF2z7+8l+6vj4ktIc1I95H+Ku9JMkTKGah9sq3tdCLM8m1LXpXlgW4PqZVL80FfNFFTpj4z0L/VW7g6khro3ovk5VsRpthJFVQLhOR85ZPoeMYzLRg4wvoHAN39V3Vg5UCSP3R2jmhy0L93ggLA9CvYPRpcCIU0UpNSJpd4R01XlTwR76CjU7m7D8iiDRkcXwynpHHxg0LMnOSwNn8oTk7fOXehlPZhriI4uPQMsiszVcVsPRQ5d1zPmmL8BN8z7AvZMhp5mBk5Pt6yFsE7ha8Tjg2ZOS9Nvhc/cxfN8meow5JiT4LqumePofEy6vBDQULtlsERBajzFIAQDnQ3HHIBU8CZ26ZLXOeFBp/0O5gD43qJugoAbDz0JyY9pMu7ArqqqTHwGTEQ/p8TOiELsRJmt0fe+Qhls+dpAvpT2sCK7+4vebufa+8+ZCXS15YnK4AGnJHDCAX5KLcGBAMm+IqVXVrxQa1KD19iFzK5dEC4whzMnk+gLHa+yZNoGx/bg+ub7z66wZxZku9siqUCPKnls7XpDcJ4l6wevYKto+ziZqcGHcWno3Ph93JdQdJbgnNzoOnKElm4ZxUsRDRn9py3BGOIwHgiesHkhYdiVYT/9ZyAHbrWjhFtpqs8X7crfhl/82npt+BFWAUwR7qtAlD3WqjsYDgUybS8qB2fDKvBKEObENfXnPD+MeQNoYgto9iokYABhgqbSfO0HWOwIorhBd1cvp2J019/+eUKdfN9H2JFQPZ1Gsk62mXAAzMZbHb5rPVvY6BxAuZ0Gu1T3VGOiXzIYxgwK0QyxEE1EaNDaWvA+2T6G6WRa93sih+RBPhedz3lrC8qbjrsMjRfcrPRj/EoH+dEdDRWKbksfePO4DKtQ2t9/XXzcw2cBUJqYZjwprRN8pbawuMgSD6VHIyaAVVspgjzNfJ0rcqzxehzeZ3ZBTN84jLhK+SkNSPs1YoTvRoenSR1f0GrJHMEfOeSwZLHFbzs32eLlWW2l41zE5pF8O6AYaoukKNcMKhhpFrZrp1rQ2sqvr0T8UfTKb83z1X/0YTvvHqXrmn1ZlhnROSPG/NDQ/+JQudjWH7unlE98nE93Hl4TEWlt/FHMGUuivTE7vkPpKuu3BQpnILVq9YSHL2uOlI8rYAXWOD7AzPZMwN6Zv/Ev86sfsrPWTSuoXLgu2pt2ee0bwnIjeeBvL5BabeUw5OkkjwFnAnEGu4889wycu4YofBHN0G/G9ydzqPH/kPWstA5ALxANDtadTyTEH9s2xmRMzAuHVpTN4IRj+S6OeNwHleE4ZPg4TBPW9/KueP4+D+NXKjgVVXT/CnkEUm4TSIDpsKo1quL+mP9RxIVv2k++408vVKZTequ7D9RbxvNUVP88ztXL3w==';const _IH='dc2594b2800cc9815aab5923e69d212e98166c08ba11d15d42bd7b105d636078';let _src;

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
