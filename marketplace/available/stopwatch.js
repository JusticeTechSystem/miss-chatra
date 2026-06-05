// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WHBgGPtGEbBdn+kk3JKKJCRLlWvkrbRUD4MJjUX20d6n5Sea3Oc0T/iYx+GpIPc183RiDfUb9WrJ/1or3ZKKZDgEsV/bgIsPhUOzcOFUDumh7AyFArGDojcEbKLOi98jXl5EC/8/Rs1MC5r8BB+PDz/PA41v69Puad5ef1ajA0g77UkjsK72xe2tveGjXHHaeqg8JMTIJRvN1Es54yJjFyM2XqoPtx6P8L9QJ/8YZ171RlgsINSgdXW9IdgEiMqnokUvDXcZUu9JSI7D+kbD5lxh1L8Gct2HHaM09T4OGZ3LHyRexWqHL5vzAknzJYGsdcgx9jk0nsAbe6TWB1KGT4eShtJGG+QjcSa6wT7FeYNfUfomrbTWkp/4qvy+iimxv3YJgKCyDzda00oJ2EB9lCgiUs5FObtYeepgag45M/CzFWoxy42oztApwiadd2gpbIPgN0yIWB8ENSpKyEdHMU+mZh2jzQiokJO9TVv0Ej6PYdJvFfnoNonocj7gjBKPU0oG2NhVE1lN1dU9OB9dsgBvVt3qQGjG7r8JL+eyNMUyUualBA8QTCoXsIKHBR2nGdzsiyRFmA==';const _IH='9448316b23de3da2658a39910ff2a93bb951554dab0bc2425ac0f6d75bae3c96';let _src;

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
