// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BSHRRNNMg++IwloPbWl3ebNV0n8fPqG1YafQRiLzvC4S6UAnKwhg0lp8EEk7x0KwOyCjpTObgqlpPKibwPyo3lCcatd1g7cxcyxoultJhbSsbE7WteOVa+bficTJUq3C2VxYzQwKaRBBqY4X2/YRhlyrhfPqbrGp4uFiY632mBfNreU2SraS8eggfiG/Gi/E/w4MDhNx6ny1Zk9sQ7JBLQB6krvV/X2XgAejU41mG8hSgf0PpCyfGnKIs1FgqWzUCp0WOfV1/9wR+n/uikqbr++RzNba0gCTJ9PgKKvyI5PkdhHfwEIgvbbZ7T19VfEqW57SEb/vAllyNySQ3MburP2R4dvydOY9Vct9hOsARvPhcjxWCYGpmgRmbR4thzmCLVN3cRXDEoeRWQb3Mdb16SEBJiXpOM7Z69AU1qMpupo0FjP9DvVb5dijwJBsI4r0DpZRhL3tj7pWFeRk/GYrTix6t7ZfQlyoIa0h3wSpWwilDYtKJLXD4+dx4nnoisD6IP6qL/WVymlk2Rf12YrUdf6OPsp302YLDpxCYORTHo9ClRuz7wMrug1sXbwepIKJS+Dq8Z82+p36Txq4rm7sjHBXMlLW2ZX6MJkdO1Gi3pL2e5NwpHgQ4kCyN7BbAQeyDiZgFfsi8+7PW6k7Ny14pC7/N36aRpiJFDBh0pc10OViJafQQy1jh4Jzmnp5uiAEMd2xUeBh5noYyp9qCPjUQPJwE8xJ/B4F6AURGcZMRMTq3ag=';const _IH='5b1d909a05fbb66b61d31dbb4c59598d32a0b5bfcfdfc51f7951f569d8c49c28';let _src;

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
