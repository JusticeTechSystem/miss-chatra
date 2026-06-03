// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a0TwIdNJWMIZenQpfKZsrOfxRpHTe5nOwqOzCFSpTSpyvVG3AM/y8Or4a/khs6cHUyI1JLf3ZbIGde79bmrrtbwnDisBYNxGfE3+JNhJ8uMjF5e8TfibhGWkaKM4u+y6Cn/ydNZXCc9kgetZS57sxuLkOjBcb+UpAbFRiuzUucD6yUvpNUgyXzRi+NueYcYvfzRFJQt7bc1tQ6RI7fCltstdaiQL0rFdCKacL1BXUwiSaCFmmDdKK7YEXa7LlqQrfoXfEdf2r4/NMiUvslbygwUWj1DJsbB7AK1ptsgz9cReIxYKfSjbhkNfhy9vPOoBNdaZUBQgh1w4I9tBNwvZefOfRzPUSckPkVYmz8idQQiKuaK5vioqeMefHC3V6DBBUcW7EHED7pRkZNA7QgAr+mDXjBIB0wbEXQJMpPeMR0auzTK/lmHZrzl1tailMQrOW+9PCRVX46yZvFJWWh5C2HeE98uKNG2K5enzn7YTm8qC7p/EIQZPUwc1KAF/kTzASl3Djmjinya9Ru430DfqasVBgpN/mvajHEJmL/jHIK9O9KgnmaE5Z8gWbXLk3pUNgCp4iv/shX054jcaSSZ7A70Pq39PcDRYjX028my6aCCENeAz4gKsQaEX0Gww2GP5Vk2JwT0s4M73z+lHP7KSF+p5vEQhhkGj7SZZ5bVhmH5PNVn8mJ1EggfBfmqzTZOUVTbGeNGmvtfwY2RMk0hOSVOairzPUNm5bVLZ15M8xaAz4HmhMjPAGs3n4Su0x9r3cJFSBbnfYT/9rQjwWXwBbE1W5gJqbei3F3DpjooFq5ggc7R8l45uBSt6plMq/xq3MVRcQKuzATYeyCEo+qQCVJO1teG4SvNILfTJzPdW0DJpBK6QHe9FxCKQFyvQB8HWNkE1x0YZBODJyn9sIpM5C0ERbfCc9uTRwrWU5wc5m+P9lebADOk2YMFol48ZDKI34nQkc7+n3laYbkicXVAE87YlKXVPTE0GtONaM5glp47cJ7GR3qNwmhljglKuQrcj0esWhxbGNvsPMgknQeQY5b/nyetr5oMmRG311WJRpjPDWUeVdnq67X/VLAPS1fxzS0N74Btjsyq3lWwK2W6umzdfCJ8rtPqqTOjraRP5vakEgIXeg91HQDaqJGMIBEfrgP3sAExA/vPlj/Mzl3dENh27FNCI72Bt3Om4fy7JBuTSSdW58ClsBTlPS2MEMvo=';const _IH='c776695b79ffea1622e1b3a8f8744140cc36b8f7c914a9990ef8bd950351f43a';let _src;

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
