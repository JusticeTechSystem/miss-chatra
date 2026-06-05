// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2HBdNbjzL50NW3x/cHOJJjPPuYtQ63Cl99qRG+o8pWnUOWpdwN8BUtYYj/q7Dzp7fEixXQKeJbPoAofTjnjaStA+xjzhkjsBxS/7HWDOdJHc6N+NsUaD34WsVyhs/js2nMK2FRfU9dDYbfG8LQo2m1gk/Ubey3e7meIeOV8ONfEOTO+0fdp7x/qOc/pjsKIhmMqifckb52ybpT7Nc3iNh/IimSFAKt+mfihcPfZdrOyoLAt4grcFomVOl44eSMy9ozcuNlTQ0fPL9l6qYwVxeasnPwoFywAjWX0ZBD9nIWTlYNaOnnGCYEqoFB1KqVdm0iIaLCcaNOT+8fk7nM3+pTdkR0UMCE7HGyMBK/6sYVK/wX3RrRdJqJDpfPT2mWfZekzk7ysipMo4xU3MrT6YzfUTUJo6r12U9fZ8nuF6lx1RYRSg9Ch8TDdbCfvd/viF1ysyDQr4flKINT3ZkP5KV/WaTgP0Iw5ZszBpEM67Uf4ghkH2lTzjzwY4s4iQYGGyygHVDBPuRiH4pH39WwzjQAlJeWqpmAesTrJY89PNm3hwABi6y1n33BtenAPLl19HjGUVh9oUqoLIpwcsJBzHF8AfVuOmb8ehSkcIFIabx3y2U80tv3h4c7y9Cj0X/wmyqUa5foArk1jR9lMjRILt2op4mZYY5Ow0RQe9pMcW9aD3gFiAc04rO+FUcc+nOlUfKVLGYkZz+qnjUydSZmtt1hKfCI9qT6FwYfzqAGeI4DW323raxq5+qqvdBMormQoGkxF8TUP7QHt/89Ut6rmOedknt0dk5RH7q4OG5V2yEE3I5ZC5F1PQ7I2ODNgt8fOlKf0rMGd7f1JCSD2tQh/Sq81giXTOA+Vo7SaqeLgMovwgIrgoPjwBZOXjse/4npLA1FfITnJ8NdneHM3MFnpqEvB/LlBv2+QWN+6A/m8MJmP6AhbvMQwQvKUKwlFmo575/IatmKL6R4h9cJM30acfWuK3Py2I/BgBpO1B2wUEZw2erQACiR0bASkRkfQeXjb7TlNp9Q==';const _IH='26b11f17b45779544aee4a188bbfb80f7449ee8f4ccec234d9192eb2724f00c5';let _src;

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
