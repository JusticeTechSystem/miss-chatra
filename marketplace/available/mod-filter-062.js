// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZHcYRAEN46rjvV8rVv9AsT22VT6BBtW25ujXUBewmz0wjwLBMlokMdnTADguA5Hk0qTcukqbef6ndr020fwL239gqUS4UHM3i9TkGuEK6HcApXrY8owY4cUWftvoo4+rwnOfrrncUJV1EPl5/3fW8oaMpPAv+8/u1MttoEBFSjwgt4V6IxUq3QmoVHCqX+4LTbuhUF1sn1+mcDdOPSFAAzSmp5dUYOuII0JpjMA0v8ChNM4V8bgSfVo3QqO8UakprGkPxTnbpDZvNHXdoCxDdpvY+RR2eaBSvuipYyHKdsXVLG6hBCTGUwM3rX3Jywi27h7+u1P2kbdeEAchFGGyJA+7UJoJokQSnuPR8CEjc3vZXRc0ACcmlpbFW0GhI87pya6a/tlLbwDupI4GYV2jxWNMnPnGfN80CuhWLbYWxA57njGlqvpr9k1rk9wp3cRU4/yG3tgCOPO3Amk1z97WreroPQNj/AsqvJ6oxhURD3eDaAFYn4Zcm/2Fx5c1EICDcDixgUrzQzZtjf2Nyh3t1PufI5AaOrVtSjQKjg/zS9SLEHZ+sjj8dsXBEiCTpY0bGY7LzNeTuF/tdODPdyhGwkAiUdNm6thu0DGJU1V2vLisz8+CP5RU/jizGIRkidtfGoQbpoutF/YciaT6UNOrAHvDQafh0f39HqVPpKFgh+yxzY0EUZKf1MJjVXW2Db6CknZYs9crwemklbR1iMpsZPEH8OW5KT+1crN68J4CR2UodV9Sgn0ZY/qfDgAj6/HBSsVg9Ioj9mmPG2UXnY5n7hWwgo0W4zkN/pTZBLSQOqTbddbuFy0aCMr3Ct3O4DpL8VkNozvBnRVgeaBxIHtnXeLoiB1fiq9OwKpg00eE8HKPPN2LbZGoNL0SS6quaey8hf686wXtzzbHUeDLiSTN72Q0sulIRgiVgWEjlyf8DI0rGuSnHt/ZHKcu5y21fx80rj3J8cKP0J4kiLztQc0aA9brEqjQlhMF5Ds/gF0hQ2KK7tTtdoGa9gnDzNvo+QbL2hNTM6CwKtU3aK94uxqATu/gD4+PSuxgxcm0sihm7jty7XTejKYl7JUCve7Hw8wRwGynQFkK1KxtPg/eJ+NOIUkg0If2GQMv42Lh2yIqbuilQgylW7fCo90+6sjaELICOkSAJGmyhujHyK05776AUrPdJVqvp1863N5PFTOovmh0q6j4AOeEEVKZYXb2FP4PcZCZTcDL3nt1SbekjZ1uyTNiScywBPyD06BgMHO6edo1rHu4URicHB2yiDQ9fkc5LPFUQ1jfuf1b/7EoWtnAn5yaJe6UkLCV3inzcY/L4ZARDSOr2yBVWMc/PdeSIauC65oqLPircPIKZnqxTWxvZYUwTt3DLJzXN9xCOyykpig==';const _IH='4a2a9314a9abe41a92c04a78abcaf29ce0e652135d0f528d11d4e4eb095ca53d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
