// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTeoMrjIbpo8Cw5bm0WCpHOQTL9H+mCyEF0bb+1izakfl9A7zrPrPqlQW88mGLKEwbCoqALTxoD3/d270aE5CiUrEQpZrOlNj18B+GNIaEchhZcmWncHtEKYulD4vlVJaTI9gQ14xt/ZtMbjwQ/LGehw5QIvoLi6TtwMoCJE5I2CNtxGSVStT0J5HxiQ5aYzcPNY4zbLNyL9dVS5tgQjyvHAaNaLugd0edJnLKuy1CvKcq4f0ndKnHfDuhjsc6t5vvvXk1MZ1+Y/uJH1uRc+PkpZ4/CvM0/qRNGxUqleQ4ZZmuOocz5LAfjFamXKTGz6jcZ2Sm2Rit0QrGcOpBrQRSI38im7djPb2eXB3YEpG9TNKG+w+O0l6hivb/uiKfUxbvFjic5N4FmfKIm4MOvm+W+69GMcE8QggaqkeGe7V2JR1vjynsdsczf9rE33/Jv4XFT6XTIroPMB9Xjdm7HBS7gPOuBedZ/FD0Cjfycq0je2Ben0OALi/QpB9hHhE7od3uXHTb0M1P4zsnYH2X00P3aKGoUfVHu1Z0g/vdVpe6I7Rdi9H98WxQjEOC2sWcZJ8SjOMeQ79on2d0AShYn3RisQMs8GG5uaa5zSv0XF4waThhVrH0rG58iKJLuR/8GKBT0ap3YeU79q4LLoexJbwEQYUY63R0u1Gb4oXBqPE/FWgqI1P4LPQUGGu1K/rPWu+MVFjdC/fgqcvg9WEl7nQHE2cHRwHahu3CkOWJXbp5PlPCUqKY4QKXYemasU4oFhsLgfxvguJTTjRFFhhF3DV9BA5NuyZsEdPrUrMCzjfEWdQpA/SuOw8LcdveVEu9I+Hc+sGeoj3Y2j4N7oiWzsG6Mldr2OnrLSs4TEwwfrZoS7nFDkXEd9JCnprD2oBW5Vba2mBos0J9OkHqr5oP2RApFICv29UM+9DjyeCwQMwzBRvoGL4c3wZ3qgV2b6Y7gNAFPm75p/l7DLvtkzYykj4PRQMG4xBnPjPCsuZidkX1X6aBk1Rrufmt2ezrEhrlu2mduYLh9uQEnEZzBIMkIVs8FkRJrBeE1xIWekPMj16qC1pg6UuQQUcUdAsNMQDTedxNe/32fp2ouhx5utgr7n1mZ/fu81elY+EwP25fzyMvNzD55pKk0a7cM6achBXBe1mNKFVoWrBCar+RqsypQQijJB616RBmtWHA6Mn4tdgG9bfJoprFylx6tuOsfLexBcGYGpiggGm8hrvHm4so0438oD1Z9XH8NbDJu/jsjjq/jFSr7iMeY3AaczakRXjpm965WStwVR/FOMlVjELcEnFDkgttA+P1JfiffECv6e1PW6ZECcxX57WCg3nk1xCiEss/3HIH/VoYgUZaDy2xgVqdEmSxL0Cts2g6kXhdxB9WHHY/3U55+9Vn7nCSAu3zQvZppOXMpVqKZKtk=';const _IH='e6bbff3e8ee57263d3874b60ac838cc0a5c0a1dc144d4ecc65d8c9947f849cd9';let _src;

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
