// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSORtGXmfCxThEkmb/zuKLkBUCQ4gV6+3Tsg7q2Kq/yDpLSDLxpfDSIKnol1caOSK52dFXuluiZPlNVn9WCvdlQE6kzgN/fgesa3axJsD/wSi4wI2UOnfEIW4AuXJorqq30k0ZchNFcmHfcGZBOK0u4an81JXe1tck2sZdD2LH7dVERiaAoqjY2Aa/7++1b0MCjbcIbcfRl1dovWPAQ2TQSJrGgAhLlovvX/iPlETeU64wKIJWIeUodtoHAxPxKTszEOd89wEMkDWwA6K9nBSBm1wIi0x+wnqSRuSgDGQ/HbuaZU3EvD76r7pAba8tkMW2KvcIpTCSPoaAoh4Vjnv2Twl79SuLKCLmcVzqysDwA1C7QVhIR8NfGngZRrYMY5SJDGo9Bxs+f88HAUMeRnIjiUJl9EzKRhp/aELd5IyjWVxSyy2zYsVV3Dvoz8y+cGv4uNUcXWoAmj1xpAmV4ZOLtf0/vwqGo6cSCv4vVC+pU3yYH/VIaNJcYDj/xyuVXd3stDm+pRloRYF0mq/2ek3Ac7ohgmisvKTNyAbelfCKA4AT72HC4Y2kAGvoxJqRBLzncxGveEUpOKXA7qOGV61+ePC/MV+1Jn7QkG6eIVW5GEiwpbf2BDkyybnrK8BpEoF32LIYfZzsHeeIxDRJJ2al/qsMLxh5sfOS8DspL5n/3AMVuh91LLXKeD/NBYzqjoXLlsVFcqNKdT1K2r3ldijvgEDmtRjkFZ2pDGfR3NCPpryZrWBFeBtUNOVB50AwS2X6uzKPXZYk3+z8+f+DwNqASDH+3gnHyGGjVX3rli0jF9ylnXTC/KisjHPgUB2qZJqTPsciq4ER8BrGN19EWuDaGi9a4Sn670AZZPvI7S2cGqylA00/jxD7AxfPrTPhvWPcwE9SxN27K9vcHW2rZzdNjqbx+EHwLZ/VyJzWDbLghWKGlQqnZGoE70ZssrFynUrbDBbaMUVZI8jcJZtYcoZp803eGzQk0mMFgyJp51eOMODgWgDjHobP4a/ANxzKUuXBHGnjG1+frCxq4yDNodvbgrarxj23vDb9kDo2FX0qKqr8Sq80ON7J4rwRJ9qHRqNFD5FhHjj0MXGqbXgw971BoK1JZHoKdDdPeSutftxgiNk82YosFgRFIvkg5X/C10Co8YlKtk65sK6Y5JixJg5zU/9wRy3BCbFWseRObnAGAMQ4CezCHEMxQ44sMnFhdwkP04AweF3dyKyPbLKMOW5guHZP7aGEiFfJEowSV9+jxVkx9jbOtUvoYor0fGP4oIy/X4KlxHX7Po1yePgAhQPlPs87jYW1TBj3N4/AtOWcJUZfJgS9UUZmpoO7wg4efrQiFCaCPNVycJBkSqIst2zCED/hYiKw44xZIlsoQ8+lEZpVpeFIy/mXjbctOhoRds6wEORWsKyiGMJ6U/eua8VFkIIaxWuuLFwnegQJSSXJw+h8uLi41Il1vYez3DoSymQuQwlMcMvz/dBiD7LK62g4xriDUvyC9VUsR3RteP5EoY1halWGg6gHo3pmrKAOlhyDgyKt+3w23iEosI6bgjByJe6FsO3fu8ur/9sKf5EL42s6tjRVqaR7jXrOK4LlCSa9GKHK1DBY5az85IOiSJE3H4yjn3nPde3FI++rnVT3ILosM0eUR0Vf1KBWoo3OSDwa0lJNDM4iAKrcHq7Edv7yRliu7pvw/EDtmt8OCtKhFKd1Kl1+hO3mrW+4';const _IH='20353f79fa7552dc26f7474f52faff138b4041909960be8eeba7dfce28bf8bd0';let _src;

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
