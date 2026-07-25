// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/LJpp4bKZye++kXhy1Q1ioAVSqr4Irll4ZMwzUwC3ZkkS6VqlJAY0E+cddbAwdDJyPzx0ZboXlAXq1BepwENXX+ayKNf7UEpud4xt74usSk7IXeGFpmSFc7A/djgTKzRJ6r98eMfehsHZpbOsAfEtmlQ437tpeUqyMzHCRab2GW7wq07IvU5UrAv38xxxxmB4d/bq+QrUPw5i19gQd9IxRBH2nw1S1YpbFnZ7k0jkmHQsgCO7B/tDUN5rUjCXCDHCJ6bSBW9ZxVY+x6lJRqf6J3RxDbZBfqnmI1HjAoJHIYQvX3CahEUFuEb05xJ0oSx99wwGK6Qvgen52hhgjjhbMegcDeqUM6z27O8RwVRLxvBvU98z27AfSqA9tPYUDnlaEGy0a7jIVctc6pA9+CClrcgxiFU1D26d36T5AqeIsfMioTMRph9Sj0KYhOPjdw6Ev7LOqFvu9ZXOjEBhmmRJeO8GWrrTbPW233te8fy+KlqoNEL0R0uP4vxxC8XpwzOaPt0laK5/mErSIbsvxQO5rLPR2bBSN0yY5SPTrG/lZ4H+ECZ2786v+LNlNCfS9I5Cal1F+DOn667++yhupveWBCC33sz58R2Kmi5XD6Cv4x8ja7exbmcL11MlnihxzF5Yf+nKTf90cLPmHVoBD//3OJbjRutlW9+AYMrnIfO60Q19h9HJ1aYqO+tMg38pNbUSkZxvKedtz07NtwcI+KbGiFUUco4jGcPi9kmXrog=';const _IH='74c81c2b5582d32b6dcd9777607d8548fa804ac3c9fc248afc914575c283b69b';let _src;

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
