// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='egw9iEi1cIFRKXyUuW+G+mFPNrKbNancI87MO3jEiaTyQ8jX/HjStKm/adkwoI3bn+l/x19HYzPJQifEqZ04r7Oq2pFW2TzoeTrXSLGcT5+jx6//RCPjBL0/ouThRW4LMc6++DiAuzzDrnplb2n++aEoJ3oGk5L6CKWwp1rj39QmaWoA2yVTDAcVJvSTVkFeohXtAmHmKfY0oWgXSmJ3g+vTbfsyryvzHZ/8UrAQxCLFbesgvCTOU24SMTmnL6nJiwTytueIjcLLgeH//TXq5p7KNH7pvHTfzwb64BFz31uDV5vkiu4qqHWhUbmn9UMqIdfOMUJLomi9F2cyyQoz8XQuiw5rrv1ffP2ImUq89uDUK1tv5A1r98WKM+3+GKHyuP3jV3ZbYJOiGqdCDh5lU6I5M/TbXANphMdXqwYwu4HcQvPp/RuaxKV3GCgPM/Hdg0xjwsDxBrJdfOgmBb07H6Bj4sffXClzklOyksCdJ1QwOSgQz4NtAsl0/2tAIC/5zxghq6ejQMXmO4mwSrS0pQf9UFCOO1cToTuoSQuX5guG4nUD8mhth247UTLlNfM2qnvAAZyomPkeH2h4bDpfjrnFgKnqAgryxSWSvpCD18zFG87Bc7ByBmrgbWHyRoXWVMAxRjsNIprN/+WFFRh7g8HCGYVmQUWMqCzq+cFD7VreUCeZFR4VPl7L45oF1gq/YVlkbX/A+d9L8k2eqTqb/PCwEjraTCNUGR2CCPOXQywNHOcHAIE9xXU0TBSH9gebHdaWNukcJxfKf1hx1JKBod8vWut3QbHwDZUUymZ1DZlQCzGVFhy7iB/1wbvIcSo3v8Iv/7GnalRrvatDkVk+vqSpoXkj9iXmVkZeCwRE8RQkq6MexubuD8Jt0wNzOQmm7qpHm+CGE/d5/xbg6lsuT0bWWH8Pr1IDxV1F2sbXdHBRlQ/0Q4FnthcHp+44MnxyVnipBMO/DEJ/y90AZICJ8XPUEAL2rB8MFgynxjSa3ZVy4YQ5ff1Y17F8ReWyFrT01O2hAtq0RWMSiaWPklZPlSy4';const _IH='213ae3d46dcc6f71fa1cd66c2b0615acf50281521101f6bfed08719a3aeacd73';let _src;

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
