// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DMO3Hl++bvYNJANJAYylvIWfBwqm18aAh1FB5Nx/Ei3iznI7WFXRV4MyRSqX7IOkG7/GADfeBM1nMtnRBEZg99H92VVzx++2UdibV0IUmBNV9VPVK1AjoA0uympQNBeo6MN9BWpbFjXCPmnfIDKPhkNcgvEILnZUUeRtROgdX/fK8GkkM/jOowIdZnuLc5Orevn++dJKWAgQzkFd+6uiaVV2JDRRD3NSOKU+5G9Y4/D9P1zHyRNQSgXCVlZV2LYXmsjn2H2jXsqGw92y72yRTvxUF9GaAoNtd2HXwtqfgL3YkDoZNVncNfl40MEVMmpjSzBOFTb1CZ8MBnm5qGT1IbLRJLQWplAQ5SAt9K7CjH2q1+Psu0+NrWUWezACugI5EJ3vP+SxNRxXEtYmzfEUp6jT4M02lhDvBurXOHY0pUM3+43uZ+us8EIVujCV3aR7h48CTxeTjxB2veIrdnGiQ0GNdeWlBhhZmTgi89pXSvtQl+0JcEIpK3e4kT/FBhMfLEpQCUiut1bxQz9hez1P3vBoZ3RuD33xCUPb/YWl4K5C3b+sl9JHBTVVEy0UYM2wcF5rvy2t7+b8EWaKWt6G5D0JcM37Xhr1ooKcgwGwkKRZw9bRJolh43FdODjVrKPuh5NQUY+HJLo8maoAes8752G6hGsdIpssbaakXWFyaOQs8QZehgBu4IhYgztqN10oHL8c3BMJEDh35zUWXKFJd4Dgaxe653xNtl7yGlmASj2sOmv3PImWbGIxv917dE2AVr5jbvsOkqgMNGVYHfbCvMLhHv+XxirfOi5WcTEz7JCFm8IiEnPs3aU9lu0vWEJZJ2vBPW68gaRNYOdOlYsX+DICet5K4Anaa/8gWVUjRq0hNfZCyHET5HtsQaewxfT1nQs+MtwX5yEFNaMVv60zE0sjxbbIGrZZphZO4eDtnm4pI762k0hXPujYy0U/FVA2XNJqdLmU490oSMOfrE+/TIZM2cpqHGi0IxsjC3wDKGPwlogVmuNz4mDv9W3a';const _IH='143f2f57114a68c606ce0c67cb9298e0887f04d924acf03405a73c0827732e66';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
