// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ62LkSiLWMz/jyHlXsGslGFBgZXz8eNj1OjvH5WaaayynhS5BImCG+WdIbStRqQFfwmnfvTvB7bsWJDJhoto0jO28St+6xezWf/OJouarjXcfIk0PqNyP0kIkkXH2eMgj1wlixRnxpc6Dwom26CvC4xSkt3fG0VRKTkksejKwlf5WWaUnaq4ATACHDd+pfMA2XpLVaxuTLewa9ux++CJLleA4eZvzDqZqzOb3Dzr+TQU0x7oXc7+h84MMjDFaLFtBlfJfoGZwqSamU7JhY8z5Ib2WSqf3qM3VCcT54dNcu+wIkavlh/8irW0e6w22ioQ/tOeIfw/77cxQZusw+PCN1W49x6tKOy+iZXNVFkIwVl6WLZOQj/paY/1xCcJ5cWSuOmBhSpTyf7ECy8z4nA7tQ4Lcne5ZWaoamu0oXXt/pGCGk8whNqnX8wu/V4ZlXgGeq7AYb7QA+6n1Mp5fhtpmiHpY5OD5pVPN0oGL8qDn7xn6Of2LHhipOwLyrB3nCIbdqfZf1Wk/zHMPETC79fSCnLHYBqMDX/YnMpcRayj84VE8EgqpJp2eyogAOP1I6/jx8slo2nK05LoVjqFv5KnrmUewIqwJy262KZWYdKbrXlYuYOHFEBumL7KkC/rfFfz6ys7Ju9TVAPmpIw9TTK4l7ge0pVAw5M/TNWZRJhUyejOLvOkxb/ZqatBHUiM5SMePbLMAn03V1MXpSinVXcH59ljGNe1btcTx9+SXSacivGrPKcnzFHghKdQrLc6ZuzH1M8s++HUpjsKPst+O7t6UKVrtDOsAJcT44uXXHXtcqfPgNLJEVAag7554sS4k4nc61zoVfeaVxgSZ9iln2jqZKYs5ZaF6eCuJ+feQCOWfimK/1ynooHlmb22+JIBZyOBODVQ1K5FGcmEtNivcRacPWBw4wkfOVolWb+ReozmuhYvRDgiPYUSQ97xzqRLdubdvX8/bmlguo7w/dReORLEXTXxb+Z6irOQQ3/IKljbr5NN2VFmAiuXzZ49dk5SG/i9X8LQT1pQ4bzERJ36KKvlOFfrtdxCH+03lQVPgU5qy0kmFqjdfxDORmCmBmuwUBb7ii6Y5pc/ZG9YR28/S24FaMEtBp+5rQUzv/1iQs9fyMxcLn+MBKOzBjnD2j0mNS/ZhyH99BQxLaorYlZ5YCyLWp5ZknzwhhEMZYr5UoAhfGE9RTS5ttsv9sDitRmP5ogePumXmwQ5ZjtMsQkxEXWP80AI4EjRKDStfp5fF7xgnCUmFslek7tHD7xJZ7QCuP/MGXnh1C8Q5lD/fGmQseAaXlKkxRyEQmDH2DGJnwHVCKl74BfsbbDpnLx2TMYfklJL3j2Jc2Qo8wdR4qed5wCSZIAin77rh7FOBtFs9Ydo5vs58ytWIsUuZU8mF1H56Zy3lCpxO98bFZk6SOtFrZZxYw+WZ28Jy8kC5CEVKPWQsZOlkzxCt5W98HB9rNWKQhsdonHTEvOjwJlGf9Dn2Wvwa/MLdcGwrobVhUKPMDuedp9ipY/hTeemeYvDSSn0QQW4BLiQiOxy4rB6+tNulnLYKjcSrRzfvyBcN1PSjcoSujSb2DWEeHd7nKCTOAIDFKVkDjK+8jf+ru5ZjfF3rBQQUK64SHB46s7Elz9fMj/lw22pZIZp7RrxyEsoBePizy55CUlE/mQ9NFZ8InaXmITHJw97kgGmHgEyZjU3bxwcn1TXt/K+/UGcLTbEqRTVM49m3mVJHcQphY5u3LFyenagUF7yYvu64Vio3tHnROekwiv6uzewNbwSF5K7FbB/ru4zppKDZYDxZA5UniaHfX0q+AvyFGK8RNaFabsuJHW9VlaCC3VtAstD5CtXMRI+UDuN+cufHfnVsddKly15vbKCVDhpPSNco=';const _IH='0dd3794e18e9722971e181f4764eaa83aed3247244017aedbf274f679071fa78';let _src;

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
