// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kCeNa3PYmbsJcfRrwsEx8xx8mWrbMCNYz8MQNU8HYTPFrE99nq+h1/1VpOPCMpQSF0zUYzYuxXKPcSoo+7R/JeudGHrh9lXDQ9DfCIjIVtCl5KpfjXwsI6lNZnCqpi5gVkvE+uzFhCKDW15uxK+Zksy1GWcmNSxQQGsFTY4zV56pmLwG/0X9Wx+or5Id0QIzE9Lzdd7n/rFjtvKzPQd/SQ30YGKqBW1KgGVzjFC7DN5KMXDvJuzU7AeOgsgWpFsuZc0vPslKpfNlBklpR6vX9vcP5MGaIGyxvfPUbti9SgbktYVXs0/P4alux9YkLfcc6VBGbJeZGDJaDmg6PKFJxfdwBKOr/qnrwQQ5TxFo55eEsNftNfFc4w5XlVazAecwBwZ7BOm+2x5HidXpQ1L/3oV3kjyRR3Njw79UXPSnAlwAusEtl9pBVzoEeTdoYWRz5MkO02ZmfmlRAvkS6JfJWBgeHJjHBz4c0iFRlJ9R0890yWejpx9fL67F93M7BPhnFJhsec/YIiL+jubN/aII95a63oxUOTAJ0EN8yuW3eCUMnXfFp14FCPbYAsc54WgI4K5V0nXSROwJMmDOGbxrw/o/OkYLkfL8QBsAVY1Uw3K6A+VU3lt2Ru6Cn8Ele76cWDDsfU7LS+1s/1s8gsFik5qGw44zBo+Dh+7yAuZRB8bo1xUnEVNCsym+xJWPf4qGntm6RyMvxp0cWxTwKizq8mNIInD4oGSQ';const _IH='177f8da9bbb32f54b8a5eaefba16bc2f2c1d887cebc7909952bc07ed33d0fd72';let _src;

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
