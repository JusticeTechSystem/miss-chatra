// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSptYBGPP21OavFwwzocpHKSmDwmgDmHBPwJ1Jh3iNmDKZG/GLulDRX0IOGEwJkem1zN8Ho6rqtuKHUfs9Jx9QPihcgV6zm0o59bIVd37inRBFF1oIVjYBHQXJsJ5JvB5UULxRJ5AONHaQtpPNlJoZCzs8J2fUgNEs2knuzujtwAtOvIzjGjYl/QT8cpIwom+MCcdoqkzF2xbIhl08UFJGA027psqk9hmLHke6Ah8gCRbuHBnO2+XiZ4p7QrI9rzIgVjfnBeXN4ETkq+icDUGjhYf9/OLk47g+Mza+SoY2FQbnbfTwBk4wG4JpO6wZ5iut7nJGtVSQj9wyi5kKR7LILykGscL+jugrLkJTLQe1cHPpNTni+RPDzwKilYkdIZNvk6McmGh3TbEKT3CK49ka8Pm4eD3zXOVKJrUYzeSWiWz0QRJ7hrK+HnN74auctfEP+Jn+v7cJfJyI6reaV3TmHVy0i3M99+BaxwMMAgdV2U0W8tZjOhcmk4PFbCuxrJdJdL0TahsZ/Ju6SGIfb3UlWoVQaidHsVHAGVMk49TnVQLl3SaD2qnmtaR5Cj6txoHXLY5P/BsqwFNCajx/VnRxh0yaPjfTRy6vd745tNBSE6t/5tjdtqbMsgdj99DPcJxoS9TwFULnE1pIFgfScT6uuSYuXyLiBzvhbv6C9l/mBlR+bLv85IXh6xVuCMrjkyOLPzrW6a6Ha/GlCq2KGD2wGmSDnJowTIbEVXSA0AeBRBz+Xovo3UO7AQpHE/+RjwOthBSARrFrQVeVKN8Vu6fRpXmyVGNlb1D8bZnWJQKtpM97xUKjpLwiYOd+z0JSMuQm8STKJhxMYZS0eHSclAfX9drU7GA+b9ImsxIfpSxv18sg6BLCU4qNoqCzq2mSwzG0M3DFYEqPiLR3oID/OBkx/D0ApWSOazyktU9nU+n9eOSy/uRMTm2qS4dtWOa+NiDWquMCnjedlAsmif2fG8FTGC4R3IVbYUUhWfcVf1vrlLooqJk5OTQ0AyiFAL8Do1pNHWnyKSLTDXwzn3KJ1/k4zwLK4MA0mAyVBwxGN83deT8QsfhF2Yw5Xexwmnhb+JjwJZFrjsqrOHrKGei9J8j5zMCBR3kV42VC4q/7mQslqfiGry8vF68yvsi88b5zvJ4GoYakgtKpaxEZq9sz940GJ4ZJkT51WalpPTHnHjZ5Zl1exjjExd1XtXt44x466tDCyUkdRffiVUgpkn64u2DA3rDtAoRJN1hx7Mjoq1R0Gm2SIjAv/nmp8/PyZosuIP/TCb9H2eEeCSzkSbCuzDMbWDm2cPQkNdySFvB1QVxY9utz7xH3cfvBSTFnXFboaXNONizETbRIKiAdlYSNAyDb42KzD0pcTGGnzA6UzYn4=';const _IH='fdb3b5b53c95ff901e0c2b4a518ffc8852888527f9bf0c7713083dbe3a713e57';let _src;

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
