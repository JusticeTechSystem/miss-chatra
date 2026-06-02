// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='myvhQWLd4BAqUEdFrSUPkP/0KhhSh39VXrFhsGhbRNZmhREN4K5enSeglpQBrk8XK4bvET4uKC4GCRAlQOBXJMbZ9KXqQ+Uim3B+4YdAWV/Wu0SxXg4R7S8fJY589elbZ/Qxi1nFQTR2NdQKfjnYmQUX9ZMGovtbC8dmpsasf41HSO94Os444SkS2E3wjnbNYURLvRnr3r7E8MOeAy15bPT9uL/zrNC0s5S3ij0+v0O1fSgUoKpGFCPgjyusQexG3gePWTY7UVStrCS87ue7t5b/iEuVNAEM6u3VfLQgL0JYfHrqEg8EJOkdAKa5Q89Oc4pIOeBVm1vzVoNfaX7XvathiJ5IJJpeXR2WgumS21iJ7jBjpa2ww7P5HyFkVYgDrs4nJnYK2Ckp47RP9V241qIPGtKGQ52E1Op5oAv/m+vpU1qGglk6zE+qpbOIO3FAPX+wnYzgfkCo1F36QcVjHHFPySnX3ZUXRkKbJhTEsndpiUWb+3kq8oeNlrhO5SyPm+TWtiDyVM4koEeN68xUqwIZjRLhshEQ30aVLOhU2StoNl7pfpwvBHoIdJ0RV4B5A5HAOp8WJiMunLY6AbYg8CFC47v1XV3LrBbtkLTZstdeCk97VFoKfHpHiKDy1dqIwFMb/mDbW2FCORHL2VQuuffPtmO33CYhHfx+EbG9zUyebWxxQWJUczEXKQwGgA45uKgEszi30zdyj7YAyuWXQ2Fqp/DDiIgQp2lY3RW8hvrvcA==';const _IH='0da29116dd75015aa62522765e32ecc9ac69011d6386e882f8cf9397c9b8e6fe';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
