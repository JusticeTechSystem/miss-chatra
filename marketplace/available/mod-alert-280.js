// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rQXbRNc0AOoKmbiQoKibyLn34ILyhTsBtwk4RRY5pRw5HcRXfsYVKSml++qfQOxoyaTzKTBltjMM9FYXEw5BlpGaclZ3+bkR9EZttxWEt0AQ45P1VdJnY/nbPjemAUsKksXnVdxwlaAYiwLY9uEmuuigdn7OV0z6F3bRNNeUUUHZUEXqvmPmrl1bUypGYeyY/LPdWbpM2Cgp5Af0FfoUV6OfvXdwL3cgephx1SRb3SeuHMK3fsT4sz+0hwE8dSQTcEnmljRUJqtQ3YPM3VzTVZT7YvOx8vPijWkXgZpoPz7GuFCt1u7rjeiuE0PqCYgAmhAI/X7UC0V3sgxplcb1EQxyW3io6js+wR/IXR0ASEJRq5VDH70awv0cHsq5LPPPjgXy2A4s9/mBnYPUepXv5xurHSwZW+3/FppMPEQ03eIQBwOo2JeMY+tqIzfoVTLs9UayHsK6SYF+o4YKMY7oMgEZ14rk92w1RKN13qkmTZWKIDsqxHlsZVms8B765AwJIljirrCy/T2XIAuolBfiHVTAW38LscfuotmXA/lCLnt4BBw/V0HyDLYnHxfNcHfOU+TI+aDFT7tdglp6QA7Yvg9QcdrmnffezcPTpFeQkIsJDYMHUs5NLwq8ZEq1CnpMQ2zA006vLWx7hZkh6Yp1YOnqPHZ2OQ3mmS4glt9r0uWesr6+5zIDC0uLDQPyDVs2xL63pjl4PLdp8HKagRo9mzahXZ8H01Fl/KrRGj/eHfp66rGbNp7lR+U2RFyUZktPorfh0o0YFvzE8WKonbJuiCsrFR0o64CuRxbI015gUdhiLCVC9AB7tJp14Fd4vBPITax/KqvERaF61+SqYENGRvbFHQfel64xfKUc2CiqYeFqAniTbA6Hw3j3HJo1fLLszoVQf17/meHTMukQLhKmjb6GNQIto4Rh9aH+dU85EsZCLe8KBGBpXX3SYPe9sDLxWkpl4DSRAV9CWWJ7Z0u6oHSkK0q/sIPvGrs2NZ6fjmVh9gslkMUrKhGxUvdeY9+ixVt3cz1q5JerEbddwLKgMeqGF3N7y6cgqRyphhDXm2Xmgg5Klrx+Qx4J/4zQwHqWafBpsxwyYQnV3M3VLv4JqWOH3P0JuWzK4kj8+jGpRN4gzj3tNt1WptQ5OdlO6rJuysXQOdwBxaLGDChaTjHCEhLSJK57L2i7KS1isqqfAhU1VQC6gx5oa5lmQDQB2MLPVSj7BRHivxU7rYGKZGZtRImpW3K1tVEcjoBi/bpHxFybFsTlr2ijWzHLXe8o2FNeq58vTBBGnaFlzuPWnAsDSL6D6roCX790oVa4KvrRa0wlE6Ye9Y9+Gt3+QTwhJUxHDTqsK7W8pXGqtxpB3SagWlx6Ld2bvhilcmXAHpvd';const _IH='46d425370ec500c30f0c131a637b172b206fa5c17b5176a8aaa2e3447e1fda62';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
