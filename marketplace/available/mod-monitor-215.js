// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lTLZHObJBe+3/whQjLwOG31/7M9kFvvOQEpvOt1JOVyb0MCr2H2DrDrFW8mYO1sGdoyOnlPq7HqsP8vYa76O8YdIJ+9tZglbwlNCWYQBPLxZSBWofu8XvKvBsdkbSp0LhjR1po+7gsTahS0xioKEkBNjzxAdPvT73zSNalgd6Fm56a63UKOCj3kkt3FRnjQn5s6UdEFaz9vdJ7ZmG/ElVOp9rU+D8f3k75u1PqcwcNjTRuv7DnSVmm3HSo3vlDe/PMXa1SywdrBbErGsHGCXYi6WZMWal0eo1Hga5x3nrEu1HjKmTkduhfEXyRiOSFdkUDNTSECUv0uCTQnBzuQaORy1EJ2vW1Ko4L8AhtydxP4rZ/m4TojScl56yepQl+bFvRpVYywXO33FK/3lDcq57CpcNnnS9sChv7tM1+X8LLJX3MSjPmCWqZuVl16RME/djypZFRidyRXFhtPrJcMGZLgru6kXih3juUTp7Qh71J3HzJyBAxHQvE9ZCUpEFZFaS+LBlXKA6LuVPCq4LWgtitNODcHfzbuYBbnZI2MyqczC7xYPNfLDAxASpq4qyVOtWh8VWuNxyIZMO+Tbw62HFPbbKg1GTLMWdQVnWn2mvFxewYaMxos9TM3Wzb69wBA/MBGZ/QkR22qP2QtjtskWX6C+D5byoR3iZUISyqiMfGkZmSV2PRdHc1l9wfXin5/7oFe0SO/qcjYKMTxkvn7T455fUc7M9bMEVGW2CCzZF0o/49Yt77YO8JdfNeThYYJgirqdk02s/aDR3453CRBpRSGRm0rE1T0CRJwK6V4FHWFdgDMUigUMW0lcejpw8qIMr1xd12r5JLHRYYhUUI8AUI+XMnCA4rihCUk03p4SKO2zyUlgQvcYLX1iojLAi9I6+/+aRu44VtjeyeXc/CDOpOUXOrIycO6WT2SPFfjCXYrdznUqOQrEUrb3tWon98ZZ/Zo6YQvK4mbmWK10EjmXuK7gjQ1w7iCwdjCH91HgsF9F5Kzh3kZo+xDFAzm/Xol0Z8YkCyGpsBJzbbKZ3DxMPstNjZKACj3ND29aqgRysGjxntKzm8/Po0k32gzBvc1A1MPvXRCxyCCCYcL/FICqPr3t8c5xsggCMWaGjKK+P0PNlrdU0TPxGy/PCsTGV6Lix8GOgHurKeQ6r2iblmhtvCzrpbzkpYTJh1ZNL/u5gRecJzhB7TgRmah/mR+kk187TgRqaDQfXkySAUdhfQUY3eA2bxctjggoISIPSUQzV4VAZmiZ3mB5A6Fxh30MiinMuftMUl9HwBQH4efpozfKxYJ/Y6zAoCY/12wKTo0P5w49orB93z3oeCnvWmbkCUAk8gCwAk/pAOc9F+Fkv3JYbzmxV7LoXXvrGWtkVxnah+MfirOfRRUdfpVtwjRZeHMALhA=';const _IH='156dd80c210297514c9c4d16b77bd2252e12865602b61263a36796092b8092f4';let _src;

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
