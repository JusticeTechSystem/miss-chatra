// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7QBk8k11bbUyZAH3ndqIDLby8VGjTxXijJqITPYVY3lIkJBkir1tkG0T1PlTdgJ9kDwlKGBRY29OsLrQGQjxZH6RcTLi21ESzpf8r7c6yhr0tWgh55zS8Qabzyi7GkpWDiR6nJsImR+GtcUOCbvS+WCcmrvGDQZVpnl3aeu+GzYTWN909HFkhMoDo5k9lg3cRhjU1Wd3WvqB/AioWGqdKt7U4UuGqMXThbEWvRMYNRorKbZDmt1eUIh3q9xOMsyie+St2T2zl9q4dSAv81LC0oCgNURNhun/K+FKMwKV4S4Kacedj9G0y+lRtYfcnL/tM5cSA65E4S4a755aeuZCKVQrVdVl+X//xz/nfvVK9n33S8OUuBpLF22KoxVQgmPeuBxk56WlLh6KR9nWR1SW9WCXSthbioV3RnNFfAlOqUgQif9zUbvfAB8A1tlCUVH3VytaXudh8UbghIDEkVz9enKgbOKZmwEVqxyXlnYPbBeGG1i/WcKJyv+SdfqbxsMkKptVzHBbzVKSZXtyoawJSEdScZyuj6H40Zvs7zJxGxZwY88e2Ope3fOJYPu8qB3wHaV9joymNZzz3Zdlbz78id8nkMbhu9L2n2fqd9aTSGMBTku1sW6wk4d29g485RQ0JfaMdZKMIdSseEv8kImB3EChzd5KmfIAUK9vFsnMY2g6V4R+DiCJX4DAGLOrcu8UDdINqQ6dvRsTiakRVY2LA6LQMDzoVTwOjYNATqIOp/243sjOSCxSrXNEcSileceduX9AKMugpurx2SoIvwj6zVa6H5jlC/Z8CcdBVGCqBrEGGt/OdnbWK4wWlgVRt8qj1ji8g1RNY9Yl4Q5MRAeG4yIoD2ZxI+0yeQ9k2t88iJvOcKeX1QgXTxhzWDErUYYGx55h8sGkSYoTnSfG9IkniyV/G9wVU21U3xvOCq+eI6l81TFF+34mbqm9YRGX7Ton0MXE52VA9a5GhEmJnCCgAIWbM/dVujOioHUNLtEWzfLSh5pyV7CY/OhR+iT4ePdGXQ==';const _IH='63334aa8acc6246972156d4b5a79a94d6ac664996686d29e5cc399312eea766b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
