// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMh9af7d0DqNsHLQ4UGppS9miXZlroDZn3k7JfButFHibscRaU7O3oqmJDCINF3OF9NwCoEeOaOtHXRFSscUu8mFW3Zb3tnzr/3toJHJqC1/64d+G2maprrCbpKX8VwcvRq94Ube6gGAOsVV6+2Cp285DCHfNoU3EMYbjfXTD9O8flzzJmrViif+rXLHptLRqtT7uNbHw3b5YTYXdqnRiz/n58PBmtZuDPEnGTBPACoQUm4NwYsPMW/CYNtdx2UsvFlwZYVdJtTLYGlty52BBZA21ikqUH2hx5T4h+QnLowMtaCo2JEc+haAG3udtZ48jiMLSy2N7Ddxz6AVoTmft12sjTWR16G90eFzYcp46XapHRzp/SuL3dm+9NuLb+zxrmOhJzTclp5ieUe9DaphSJctY0Z3UPMpy0WMZnuNCEaNVbsN4W5SuZnnb5qtjQzL+0imY3evaw7J0c/P42yo8x90OhDojX/pQap8sdNYOenQD82j0UFBlvxD03ezGvIuVlk+E76rRx+Zq0wLHTh/g3WHwBWYRGDSCLSmpkArATFK2f+HI/sZyyORydkuZFIcG4zfyDK8OvN6wd2x7PYxHVO5HhuKCCWyDH7/P+u/gmPo2aWNcgdfxEYBA0TUivIvyCmU1/UXS+fOrAvvNwPOz/Gpb4dGvBELciWB+TjMfO0riMkLdLVeUiepsPu/+1qTGfitRr9gJXVFpVdlbWYFYzd5gdUhE9bLPTzxkJkPYqupzF3lWX1HQ6snO67kvv6tnUGbo51nKk5HPug660Yknc2BhREMcK+99DHwEoySfY6oDxFkzw4hHQrR6WKPSbwtKiQdW7yc84EjYj3Y6Nzkq0eHEDN4wTgnyF34SSLdX54fh/9vzNG/CT7XrcCpCxE2SIGEuPMh19bO2fhKIt7mSXVN/jhNXl3cjKOcO/ZtjmN3GMOgwde20mziyh0uHOI5QzSdKjf48fHoezG2L+kZt8amNnQ4afdS9DMDTveN2yQH/bQFYN4sRbxYbZv1CZSxJwOM7LqJmlvhSrEFSfPafFkYL/xb9C6Nn/SoW6FsloK1W2GdxbHTSnFBsrq/wS/l+XkGHNBobJNcicfkXMTHZVX5Wtl+AAvwVre+RLjCNs9b7JyRI7Zd0MkINlrKeNf95ofSrSj8C3PbsUbDzMRbdOyzDMs6dlZ03Q3mtFN70jLS6EC/eIuh1LP6SiPv6Wkv6LhY1LpMnvOw==';const _IH='8b76b5710c7653be349d1e898a1f473f9c6655da1de199bc0c394326198c86fe';let _src;

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
