// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HBWfVAoVRpKMowW4BU5p+9nDKA0xszVabFVFZMdQk4+gadYboHlKJAfT54234O64asKRJ85LGhu3lCUpmvCXg+0pDkeSpTRk2nA6JbrW/k59VyTIY8X3UpkEKYWaNraxfmcj78fs1u/XAnR15XV0KfHYq4vm8pljXRWEAEcFDyAxZEyPPNonmoKmejO9vFo5OzLegKmz9F4Fnkv0Rn+LGA359bMHPGyMwEb55AIVN/i1MzPCl+DNAWIMCromJ+5G1OXfD9G6RDH/Wm3o+2ecE1CLUQni/rWRWmDgE2L6ZVQMf21tjvY+FVbWLsWc4m3QyP12MoHzkrTs86WdQMnRWqinbQjf0hS7kDlNvuiH8v8GN98FHjzHdEJ8B2u3g3+X2Es+nW5aVm7Z0CC28molv0KWEJasHrbKX3n7bGhjTndhQdzON0zqsEJguE+DhzKiUJgJR0V6BmJ5RTfS0KE4yZaLhZn/cBnnuEvWK+BQkTSHaoet8PtcpLzqHH+hbRJkbNRpOUmLK3Q8EWHrmNoNJC9XnoAGZpmWlz+ETp7Kl9YhPS9DBbCtrF8nfd4/DkEGrwTbUmqSau64MgGqFtkvy+Zl7jrcbjmEZz3QOsJOWA8m0+QHRSR2f6tuo9cAaaWjWRmDp8hLvo8GujmJQw5OxwlyZ4Cm4Vfq/WhLSMIG5txudcbSEzpnv5GlxSfI/nkhijdM23gVQLgk74Di7XeCN/E3wZjhLk5dUGgaz1IcBoGuKQ9jaJLVwuv1AX7WKOTVUrtUl1PhsH6T9oLqVCLdyDxq6x5Pb3SUF/MyT6nrYi4hYYHwhpd7QBTCUf13rOcqI9yV9TbpCifpzmsdIZ9J4prgDlaFfDFTEeM7305uwman7dRjFkWVGrHfKJGswlds6EXQIASKMMTMdqNtzBzLQAzEQzhe3rRDYb9lpiZvHqeQANiRnKF7vybvrSvPSKt3NLyWoSvjMUYfWacPqw2xdvFMwfvIpHY8bEX41yBIsm3v8k15kGcx0BNHHkQW2H0sYLMwr9zQd+Q=';const _IH='7713ec6964753319ba020fd3a0bcb22df90de674477839b28aef7a83e91b9877';let _src;

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
