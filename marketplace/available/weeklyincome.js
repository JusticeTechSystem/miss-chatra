// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0lYkwY9rNnTA4ABEwGd6j3H8pm0npOBsH1ajBW0yHKoHSKIVTTEx/OaWRunMkeSkuD4gF7IbSXxz7NHzMO0Ik+YAfS0oYuAXZBM4+7t6QRD6kvOO0+9brvBIoKoP12drNLis4DPBvFmI5z6E2iiUdQPVrOj/etqmyEj7dmrgkmJ8Ys0e3FOg2yKH9s6P4CE3nrywzCCaV3Jo0yH/iT4E5kol7R0HCiTH5/2QMRJfZlUs8VfOzAwJug5k2Ig6NJakBoEWzSeuaXKVpl0aNsNs1gY94obTNQ3Bm/S4AuhwPtsTwJjHK6eedTksKfuFDxE8PUyPSVqP8eWY+J775KQ2UqQY2k+33kH1+3zIprE7PjcEaOoJgtMXUJ21nMToZ9ZsAtDDjuwj80BjgYXf5PioldKdhxfikrnAoZ68LUvmxsO6sqE2TYJ7U71aKWSfY9r8epBzDwtWlOjfcV04M4vzB6j0onA7a7TaKcz5VtGjUf/Ox7B/iCp7dASiXVZu/cS0w/7Dnj+g+Td/1I7UuTGOKmTP7GAya//Bl73Gd9NkbStCvW/tlUM+oZaqvZlaMwy8CWq7buln/sS6igRjpwkXzKlvUSdubBMrtfP5v+33E2mN6oTofEH9wJZD43j1GgFNeSltQViHXmP/qZnRN8AeE8PuI5a/SNYTOxBFBx3bEUt2IQnXGj7Xa8wLfQ5p4Vh9Z1yPrKHMxFgBHm/3dINppa5EEgUFGzwfE8RRuurGwP5wZMe4FU+zvKCPhmh8oOBQh0sAjPgMBB1m+vAZb6XUmPzS0D7QO+gS8bwiDLvGZ+z52YQ/e8JzaG7c46ozScl71tUYdVPqsD1f9gqxC5eE7hYPmnZdX/81Zy69a4+IxU9E2APNoVHLR38QAKTSad7YYGAnn+HRxlUd0kTYzyr5OyZHs2K7LQS3DEyZszHmbxQyoElvA7RRuwP0U+TCGijva8A19/Dgg+3Tz66nbNIEEQe183sayJEeVlzpPPTonYVa2pHflwRNRH/u8c+HRoxK24goqUpvJTo9rfgqOQwuSNnxecmofA0dNsrFGrgPSZexKc6K+9Ip5sClKnGqwbFg9xCyAy7bnm+0o6OIDZ8/+HK/FGlB54knHZDrj3HdUPWT4VjZeXb/UksiEbU9fa+++QIhdDevjQIyeWVFJJEhgGTGlHHlbrbcTla7T+gGH6pWAH2zYLzUtCxamhRNdW619qRfF+ntnF4=';const _IH='9306029395c48b597446ad72bc44a86fe698deb9336ee59069466ec0c1f44119';let _src;

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
