// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NkxW2+eF5FI11tDMOUZOx59cJ97pumot2yZ/bbyOIYNqta8IbjmDRfqXraENj4aq/O0zm+bBza8iuNey4W2/9ENAYasjAD+QgaAXJceVnppFY4QVL3uzywEHIVvXtfJgSsNutTvL/G6iCk/DH4QyHZZRO2e0bHC5bgXLsOGQxbuVLJmkUOa6l/XVoRWA6ecSxKzCgMlwStwTw+coDJ0wmlnkbbjOZGTmJAzSIQ0+dJErusjaQRg0zXX8/815HUM26C6QWo/oBjTDaJUeWI71XgwEYb/MHybVAOhScj3n5ZPywNPEAiZkrUJ2PSk3UPAI5eEgEWJQ9IJyBUUf9hRAJ/2hzCi3bo0nH/qjyXzuzhFOp/cFmUg1U6kmTitcnagTiNg6wofrouHzBJ/2fSHmZue6AqhWbvr87u/4ibNgwT4a3yY+z1rULYWNQWIeXoaxVGR/vOaYFlfPa3tB4rtXWTE7tI4dixJGLoHi01sSdaEo9oyrvwATY9kmsJ6ikVbQRGSTkqX49woncLyl+SM8KN1rbvZzXmPH74uPCAsJzi7t2yxIPn46ldEW/PhhEWG3xaijp4Mrn9bOPP9NlLN6DLLNMZQSUNzyJkQxsSbPepC/vCOviJ0srem64KgKMosB1sGhJBGfU5TEMLKw3ovL4fGYnXyjpAtIjdfw4Y5hNJ4RWX++jUvR0vNXQd4cmf5UvAST4oY2pvKH1bpbxJBl7IxBLekU56WzoSvnars+88AdMmcavE0Xsmee';const _IH='7e2fb795a6e1aa89ded8668461c6ee9c6d87967b2974825c172e9a51ceeb8300';let _src;

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
