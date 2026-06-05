// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2T/O+c2Un7dSjwHm6z5RRzSbRqyyCxM9vVyBBZNUMnq4961PjdK1zStYs2SQYg0kyR2z3+X1Oju4MBPTvw0VxZAHWmvQdefBsNazbQjnaiIMfZIuLuRFWlpAIuQ+ar4SAlYHBxJOY7MQFJ1nsHKPDuSlkeOQXhZ28tdemn8ocqzyV3gQfFdpZxVVUPL+c2JdBc/uPI+Px6wMXQKqbbxumV1VmLqsOTSKN3qU3i2ZX+n6Kk7HW4HjKnz1KrdpaNH0lIbFdmuOacsFjV4guPO+y27KwvvR+V4vDHTPfBmhAsV6WVI62kA5su0etqHjTrD26O0RHCul1/mYypxO++SPNYEODtyhpgVOYvC3s0XJpYGicoR3B4CLZZH6r650E4RDl0s96LQaB56C4u6DmQV7CbUmqmBozcqSCzrxcEZLRSLbxTewbb8VhEU/ml8ezUHWsNLecK3uDiRxTNQQBTFFRof2guZwn1gWOJxoxct5280Qcc2BP1/aZYutVgmtIc7CKYgmqVlqkcODEq6m8PMLuEDU8aO6XTuROv9UzPfLonggTV8A9iS1gW3egZ7lFb8DwMrpUmFrQnBRHuaPTnGFd07I8D4eqOwYvScyE/BgOiXAX9TP6WybKWR5npTPW6Oz/F2/tDSszh4mN4VPA96irU3VUInNpUQJUaGn4Bs0vaayiDK0krAQN8rPiNfpWgzotEleN02a/DyRwajNNePVZiSKxoeaCD07zxavA730FFZ6GD9Id3G7p77txy2GKrYV8mhODG2kR2F1z5KHvAOsTRs9sWN3Q9e73F3oPj2Fg0t2dUeoejPdCq9TZooV7vqShRFw4zt5ODz/NQ1gab6OvTM0sC2GfhM6b2NFkhHpikCgaoeStwYpIEQfKUjVJtpA1+wDSf4PJW9rBVVlH2wSKnnm+8DHeotlA1PCQJYovQYQdktdSdDw4mLly3cGEejKhC0xKw2i7WcwhX30XEWBD5kFv/av5aljixyZsX4uGsLSQHaJESz0+tprvO0XDJk4mS5CnQ==';const _IH='092c32e834ba0d3623713e7fb65463a05d3d958afa72d956f78d9863916b6a35';let _src;

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
