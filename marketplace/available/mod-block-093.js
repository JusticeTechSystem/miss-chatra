// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8PedD1H2BDcSW8iaW3QfddRegi2P94DUi3wZKqS3/Y6854pDokvdsTjUVBrffaD309tIK5nQvgtj6AHNuLG/c0E2GB/rYHS6Ep3kxr2RjFpt7FP6a/PbTwdUe7mmd7PL/pESf166Z+hLPTZp8ljMtM62adX+2ZKPZfnO3ySxreqFmNAR/8yPoExgjeDk5Pwrk6ydH7JWmZVzP+K6TuI3Hmy9hJ2AjTo1KOsMwKgiLRysn8XbJK0NHMVUozKtKIsC28sEuasLqIG0vV6u31SfMpnHv/6mJIx1l65tQEFX3kFsJHWDOaLpy2wJpNJbhc+WYJXLImaZRivXSXRsxtn+SuPoPKwI3OXi+i10BavdcS9N5UEUf2eJf0y66QYsaLQlBiWs7DuapPXt+lsc0lg0H+y0Bd8zHNWSUbjt7GZmWXcBMcwHVmEezTQrr+S5LwcV5s6m5LvfLmAuji/0nPFdaTZXe2bGH3X46IXbAgwQGzIQE5UFf7SnXP9mw5tcILDAUCpuVOH+3G1ceGCGe3N7eQhy63Fpr+4MJa/pAwkEn6KRgxJDinpEgNteWVeUmBsDJed/ri8sz8N3GM1Mix7nI/TKp/zno6swFT5A4oVVL/Y5laChhRNViqVCkWv3DJWLOlh1S9Y5eWo7EI2swaTk+yGIGaPicDgYQD7LntNrK7xXgJJnP+26JwmI+ukosIDpIQcVFNxBv5ztQFUEmgFvt3ynrQpj5B3qWigzUkrUrFpRTy5mO6Hx1XcF05vyvRP8pCTw8d6CQx0lwAEh9C2MX1k/kXCmETIgERVes+v4EfQ6P7VKoH2qjewMgjFu2PiqUyLXhmwkZQXomT+pEW85GWL61a+lo1PHAxRQGK8zvivgYkbivifG3i0ooGO86744YGhMYBjy2u9jY6du1l+1EmAKtmWJEaY6/e87DIR16t9dxmoNHSleY4h/AjgoXUoGpjhgQRQkGFzyv02OXdviGjeYlq2stVEJJOwXt+lVV92Lc+gPiocoMAbg1KlDh6vb2I0rjaIv2PHNevSiTDBKdd1tLj8ulun2T22uDj7/mxNpsHbxDwCEVhq8HbnTDtAVCaodzQGgZ8IJSGgWe0x/cyORZ+xbyP1WEZkdtLfH6kd/vUSKFwxbwEoX6tFtN9io2acFDMjA4ZG/ZvB89ENC5Hd8SMLemYag9R6fBxxSq3eOEV/q+4LCUIbv6U/CY4V0inm+WNdwueGbukCdn+Tnhniwfys49cTLkbGAq+dnQiBr8syrcBuHLHMA2nfjhO2kRJ7gTuJEn6/FPDKECLzhDUv3HtIobWu31kPue6ohkl6S275F7N2SRiB/0apJrJVeJS4rVhTNA2h/rNl0s7vlGG1aQtdZesX68';const _IH='f57b1c2b272ce762021bb6da4c4344ac08b4b19d8339ae9299a4586d4f0c1676';let _src;

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
