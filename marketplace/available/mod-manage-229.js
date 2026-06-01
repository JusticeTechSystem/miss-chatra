// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ64YZTQF6nYbOHbgjRD4BUqCY6RSj6T5mOkgXasg1jSUs7V2yljh27XP/yq8Wt+f4aXTjtfcLf/UH3gm4Mh5q3/PFLWhID2NbNIx6y+jLHQM8GfUihM0KslISD+zfXj4w7PguYocdruphyouapQ3w2neWdOWWrhi8KBBJ3vgqEyYlNxK0IqTJ/bVGDUhNvwR5lwJALDDMWfFR8/Nrojl6n3oKYMXzcnFFWlIsT/2xZv9tVoMl1TsDHOioi5C5X9Mu2WN3VkacPq7ESVrmJFx6Qr4Q1CC9xd5JECcGdkPT+qapErypoOsBPsNwGRuo3u+A3Szil0gFHC3bhW8pvNul+g9IeQeR16KwO7wIl0rXnZzUAgc2pIs3TxAvOrIeIznSHBG7vVT15TrCuGcmmKfPy614GpB9mjzdYmQKeaOxU94FK352PmNVKS6ecS168zIw2VQEkgH2s0jR+PRNsej6iUF3hyXwgFJq/lnf2qne7rHci/KQIQwrZw9GdJ3v+CYQeITsWF11LRxUe2HUVBXTRPvrN5N1+XVFLkTmmEMdCBp4p5sClEkI3GAwZUWGFjvAlGdk3rC1aal6NK5V0/zfq4TNKFqF2SXtjoiMp1PK1trSmwpIJlbhtyYMiMtp/ahE9gy5BDyNEccPmEL4f40lEQRZEc+hsfeD7McPFdyh6hO+0Z/9AycNU3oivG2zuX97d7+T34l1YKU/Vine8BVA3XAdnsJYfGYACVYtQc8UPEnqoRwDbrLTQKAa+Yrw2fdNL7MkGgTGag97Kwn9Hm0Gv6qWrfhyAvocFjax4E0HoBaz+ImtaPVJPel7IZWTNH9XMB9LxFrq6DTaiRJKKUiLNFOrxeZMINMGkginvq+9EEc1poS3c3BuwOmWn1DL2zsDyC7+aliZopNnXePv1CDYh3I+sdElff6c6pStnOXT0lgCZDzXnQY0WaGg8VTZ/L9oiDl9o1MFhpdPdNR1PXSIws45Lc7aSEQXH+gMOVSaCX0PjjpCDTzgvfeeg1pr5jyh2iT53h+gSAFAr2EEE+DP2qaa+6BcnRUtg6iJ7LYY+Eewwa0gWyesETYcCAotlUbtAfO8Me898w0cwDZWZC87uyoz6nNTFas8PQSIutBCYO8gJy/g6EA+lyUROFLQDf4mUoUXvyO5+84OIhsD11AdSAGakxPuFbuk4jSl61iNiCTcOlJhc6w1vzhTr6TKTQyCS4/UWuiafJz3h8VDdyrRQyDjQFgKscpMHTQ6Ov8rYGZTO099kb3Ev/Zqe4WfG53Qb/GzgXs1f03Pu5D+d/Q7JzqmYXa7xXp79PKY5fS/mTU8TnYt5UEKkY+4vjDlO7Uvit39tZMeS/eo79UDkgUQQryJ0mdxYT8xDnxjAkZBO3uNQGZ0AjBFyo=';const _IH='59095e7ca7f951360c4c6bbb5cb6e0bfad13bf800684ba86b5553eb995107db4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
