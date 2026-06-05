// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qT4pLf92+SZ5mzu2zaflxYM3ETUIVt2zGvlxOX33YGJa8r3AKGm8ElTqNhg0p+llqgv4Wn0+tEyOHW77FA9HuG0Ne4pJzDd3BcfbBsbhWePErsHZMIFCKfLSVq8mbamrERj3gZtBp3VYc7HKcefUUBz2nfS0LrnaQyUHLUyLoauH7QxK+xFmtsrycRJb3I8FvUDb3rxru54v/u5VrWxcgRm/llxbKPR+PEhuZH9sKBYwxIiC6oT/0lmRO7zHVbkpQc7KezB/YpUQBiLIjXMnP42tH4OA9CgJ6RSDrbHn9oJm2BIKVuBusBrCG1ildtKvOWOBz6LTPuo3AKbcGSoyo38s9bG0YYE3z3XSPhZnyEcDvlaPNq39mJ7iU7R+yFpWq7qxxhgJLfiM0uzI6Vu/mr3mTNj1AV1SB34ob8mi11TVyJFJcMkvLZX91b80+J6wXgcOT0BPWSLj/797WtxdHQOAA242wX0wabFctjZYL5UUu2Gj7X3NS7+1qjZyLJOL/d7EP3qwz9EYe3b6ZB99UJ/C7gWiTLmy2basgm4rAdtxj+85n5tbhFdcRMtJtmS4zb48/2jygDGkzKq/ypvpv/fLNEqmPDXzTaHuGHKUvsloXkiml8Tij13Gf2+sFLgJab0tbU96atuID2UBtOWZYEWP3WDKTDLNfGoFr/djxME+VkPRkH/N32M9jXJMKcCdROQ1kfsUFLd2/4KNx3pRV8Csy+L3987FNvA2G1JJdkNLvG6IxP0QkZhgGUdmjb45faSX1q7iPTR4n1hb4TlqmdJaBHKWHWrFbmNvIt7VWriYqWdaPfvjjB2GSGo7bkQ76Nzg6Gx5cjCA/bjjXRrpYUm52Z7wOG8byE0i5ez4oDsXk8H1iRz87NdrQuDPR3l60Ln/wz3A3ex14j79dqymd0pobX8Tj+RnmMQaNQc72waUxuoalJKgn97oFU/kyN2wGWi0Y9Ugag3pUyHJT1d6JGXwnw9OgZ/9qotTEhx/v3C0nBt+rzUhgjO03U7djI5xPektWWBUBqt3kN3HDet2awOOMVzfqk1bopuAZz76oxwi47ciOlp13iLgHj3zDCj3HFA7YM9bIi+ZRJla8UUyWwin8ppx26FqCaW+P342PamoIsU7oVseweerDkvfbCxkzFlBQBWccPvZZM2eNJ2g8ezYacYk0f5pRY2ruTV8zOGfobhF5xUxBMqHtZppDplMzW9SSepALuu+lna9Vd4DJ471AXBHDoFO6CTe5q/tv2oNc7y5zm8NDnyJPkgXaO9S+PznqeaMamFvNMdrSEk47+4WDl1/dMjHn+mXDokFRUA6MsR6LQHRxpFKqL2XfVl7xGifBeWeSCcs4EpeDMccvc4/64ogSA2GQV6hDI0Hjxdqeb1x1Z/e9cQWEf4Iq/F9EmdBwn1AVyPhCMsuqUxWNdVzidYuaK6xhBSX8UduXo2JiAp8HyakfTbq7SI8rblaRCUUKfcNKKs78C5BxxRcDVO3qunIBHr1SmMC3+PoZh/pAdXi6Glr7RWM7W7onK752croeJUFmnUhPfRn6MTH+EtatUt5ks07Oz/vAOT2ckUUfkxv9S4D72vs2jfeZilTdW0jmCxzk13mvVD6j92MhA2rEGb4bM7mJkaIECaJaC3Fs0RpLAvBAMn9+5RrXYN12Lfkiluh65EF+ToIEkYpCT5lqBiqC9WVC+QnB7OBto//RGUtJIUwbhvjgt3LN4LEcYrmQtWsdJJAd4ol/WLMQ4ODj6OGhkdtMC9apnNgh1t/nKNG16iR4PxZP2yHArhGYltZ40tuM6/iOL+TWp5SGnDPzlW0Q7obwfIB02L1JONKud2zQIKyEt8w4V5cEpjIFnxrOtLB0XH5fNUma7eN';const _IH='063d74b45ba225ab21ff4e35312e5dc5733efbcfc2423691e6a33555cc2874a1';let _src;

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
