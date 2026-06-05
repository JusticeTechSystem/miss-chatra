// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V0k7ITzu/22w1gRwB5oCoSSP94iZS8SbMUwGBXjmnCiV9GmHZiQKefC8ISxBZr6eWCjhN80+zSK9qWdlCPAi1LgdeqqOTUDb+bbvGle7BEcRReZr21+PQq5t3VLlAcfKpv3y7s02I/M6g9Owv/kqIJXpsXYGmK3bAnMtoFj2e3jTOJxUdit6RWEzRNLrZvd2b/C7Tn/izGI2C0tmlPlLMsFizm4eA1A3vtO/qbZ4QCp1NblPySdWRNA7TvKk6wOt1IZzL/pL8iKXL1w5b2f9gCU78XeelnDxkG/z2M9cnH6oVSnaZAaAH5EuLczgbVWxikoOtL3dUtQZLGRaE3UrT+zalzRCjEivVWIzk2FumutiyZWTzCb4nC9FFi8LKsFEupyEgZH7wv0KFRK4VzByCVcdbWkiBAZwUHSMBPKAyiNQ6Uu7jMJDqyP6QnoPnVTDv8Ci9BB00GKksWd540WR3lKD0a880v6LoiB43189cqiuRgrRn4VlEWzgNDLcmsgP+PxSgsElbJtQpkukhxGxuo0yrzAO7d2NtqfgYxEqkzhnEm+8LAuNBZNk8ySFf5kYkjDPfMds4TXw2Ai73TAw/9g6UO8u4eVQDvnTx+MKWWCKqARFpKM0tJAIb9+4xYhpUc/iYhwSH6uJkBdOwJbv/a6/Q7OAHe/1CSCuzoHdvUjxOVYt/Nq+Yu05pxyv4Q0hiZ24YxaFieDwO/E9FLVm3oHXDOpfmQsgNqE2KYfy';const _IH='81347bc5a5e54818240d8847acdec89f959b5e8cecdfb03f805e988ee19b98ba';let _src;

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
