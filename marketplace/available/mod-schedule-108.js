// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbuL4h3yGnlRqFJOs6uVdlIbidr70cHo0E+MsgvMXBBdmqRXz1/Ka+nqq9eQW29pSV43q4uxycV926d7b82hdgz75SvCTgVWxik0JC7NRqv7q2N5YRBLKYBRCXNE3Wu4f672jOMUy58cDIKV2JG9d6P+EbsqPinAV5WvImkNQ1oSGKz5mik1YRf5vLnUEcW7SILctLLGpAqW1znB+AZwu+CGcSOmUkcH/Si+iK3rjELdM/zuk9GTQ2kxnXfsrgnTYA0RXhz1/iIdYOR5nPkmAKPflL3LzFznj085h1hmfsuKXF8SJJUIEmC8y6Ttcx2Hi+oc51JbXeC9BM41xyEGRP0wSFxSpvzxT+cim9Tyilt+4u4jeoAo+8VEIEVWmUpmKmKFC/xM5mLukSQcmZjcDfZytrSL+eDC2S/bU9xNSgSihW71sG1DZzvG/TXFRqjOEp3XmB/7/XPr1+HCwDc7Of7T5IkXkDsy5JYeNCjQHxfHmiCJ/wj3TieIp4rIzbEelULYnx0FIt6vaXDbnZ4mcHq/AALzslUbFRTDPJC+mHdrO1LtZJp9n/jGpk60ynR3zPE0v2DsCX/K+9nI1KR3/pzij7gW8pAU4skU35pCHXoaUvVieR5Xcno2a7MF2gAmAmc/n9tRzcptYTV/P/xEUYEadPWqh4PEkHgHo6l+Em0b+M6Ug6hQm0RZCqcvBaQP+s9gve5onKlHlzpNaZaWD7+gNaEa1B3glk1QBPrb5TCjtgoYqGWtVEOqVpsjrBbsgrDSSIxuh/dtHCvUe6ZHBwRKmUPAD3gPo8JAEzf61zbbfNeUKPIBISZ914ME/m5cutL94uZ9NpQ/OubfncR5kr6bFta4g2hL6L3o+t04t9LPRMhYeSd5WKoclI/XgobPdaabQLrcXDE3FZMvxRbGyTnkXw8w2QD2DhGazfLiywbnMNl6he08FvntvnqDC/U5072AvnLgIBtIwz7p683TDtGoz+pEB8elLVZZakZqOaQcKv0HOMAyxPzq7/+sJfenu89RedSdUbDPtEBJcenhcm6YgUoXDovziJI1x9+p/hV8szS1TS1Fj+hdgiCGO2T+qfluwlogGQfYNBqSjRVOFdZZyJMlEiBAAhGC1Sb4SVjMjN8xndX3gz6Q7OhpsVYOrcKKPbcE4bcCpgPtrKp5tXU1DVhlcZzxJxc4XtGCBkJnVwd99PrwVJISwFc8v1GNOS5v6VJ+2q5YAXLxN9vcADer2/MsIJ+uk+9vGvrIfZiroYRHTMlcgZt/M9S2kOv1D/oqmUfMsma8dtiqD0HSnWFsxucB/HvjY4tND/qFeA6dHkTEVUyG9s8Hsel23KzYeHMV8hfZgM3EUBw5ZgiRtzbdqNSQNjw2W6jtX8ASy2nOh1iTnANpoP5syahQz2+dZRjgbS9r6GGFUcR3g=';const _IH='f899d89e213677817e888f4ee435a17288c431e7f21a40e6f62b715c3b648f20';let _src;

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
