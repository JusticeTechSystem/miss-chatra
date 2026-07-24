// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROVaCp8B1DldbmWTnphVgaRk/za8ulZsv45cYQWzK/HGt31+X2xRFJPwuZDs8ZX6N9P5Oyu8Hwism9S0dFv2ehR/B5PhyeUq97m27rLCcDs1UBZ4KeQXD3LOKh44xxDURHnq1B1V6YOcnhCwPMaFpBdbo9YeMftlfZrp/0+wetyh9rtOstftbNTQbfb7mBEJCrKDlhlE+fm0bHRx5bY9Ol5dK1x33PmS8G0a1xRWTM/uYzcoPQ3oxcreCRMCY5vntki02RcD5BkY5EBOFWwB6VUvmQugITDmTbvrkZcBoulBAOToiMNUMFtraD+zVf1t7vDceOqBdxaKMl6eKfFRev3geeN0vUJr4xRg/U2pODG8MosM2QO43I0Dl5Su2cK8itskrRmEQC6eXWjn1JycupqmJQzYNvsGX5zAS3dfSbRDHzGQCD4veE8At/vYMSvu8UvXu7Lu3Gp3NECUm4yUmRliFUx//UtUhPwtM7uYOQtiMe3ZARU713qBiDikARO4IIkmhC58c6H3prdj0A+PBrJgxcy8z7xRBPuHoaeVWVg1lAROR92wVwqhSxy7UudcNOQbWS/5vKtAYW149lvhbPKXBICVpXJSkFHs1E/QNsxleOZlndcPATaecEc907Gy2cXsAid21jF3BrRbE7K3kN2qnlRZrbIDhIlyBNdbAZvS7Q2sUlI/ekqg9k6rfSP+jbuZH9B1wqexkmbAIJCCyBrkBUMJ8JWGYAEnI/fcOTHrSJi8+yOeE3CLWnMvxB2vv7B51/Q5iBF01TBjg7ccWsif2O/2sEyHYIWXfG/I0oIl2Q3OIOxhm+oN/rUhLfS1N+77tUoNYvuHByFWHMQ6npsSFCmu3Z5rLlC0tIm1v0ik/IQtGPAOJaIoa7zj8z6mPDzM0LVz1ReSqbnp1WUUcYReo6e8QTsaCsZHTzMxKouw1LWEVYDQGXpK1Svnzqnnm+s9ybukmToaXpYH6FaQMU73+iYXXKjFG+pKEp3c5aS6d2axprKFY3tbVgcCREiq/yw2Fhzhsp5zcemIOFwYpMi6FTe1+hO7rwWXfwMkmKplWW5/95tER0KttcysUiIcTTdpXdBZccNPwI1TZlUAf4GjWP9Tg/yFHBJmpydBCY+mdF565euYcaFiGEEALb71NzoGnt5jkZSCfEU9ypzFrVSoxbbmDh1LzwrsMmUuPe+SQW8v5j7Yy3Qf8OYTnry9Mjtteqtd9CMtsApdWsik5rx8+igIy8GR6T11xuQC4sjEESj+JkuCIGnKN/ubdGgP7TU62xF/A08m9ERwIJPNcboY7/vxfrFHWDdFU+7M82MC1sE3bfkmaoR13NzzZTfT2iennA9rKsGW57duskDix7d/yosw0zdObBQpt0p3XXFvNFYPriyGADzgRpFSlvFdgh2BCdh4W5JXWdxsgMM6yf+VeeBLgYHN7PClocspz4SLlb3QCZ1th7v/d8Ake2V07v3lEGzNoprjDNstHGfLrl+AhgNjJiH8pfumqmul+QMnJCgLTxpjtuZu8Ynw5lAurjzj/au7n87iB6t3xWHvy2/npO0F5ftHikY3xYuHD3pMEljRtAkKXhgGGvbn5amcVXJcFj0dEasTh92bwu01pW5oIF0nv1PGgdzmge/vO6zAIcMnVLWkHlOUE94rLnwmFpIfG9sHMrxxvD9zLVxiQzpuOBtW0xeu1NqSG7YoPG4CMp4g==';const _IH='10cc6feda3f90ff14e288334448ed07a449fe38fb1031b074373d8220ba0d84b';let _src;

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
