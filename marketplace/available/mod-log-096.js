// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CW448AF3B/9WqWwm2fgkQpIsAAEaCtpcM9nwAaFOGcuUZBxFDWkcjxsigQyqPDEyzu1PS/Gb19C4e+zU61Sv1QCSQ302R/XCjhDio7AgAEz3jISgmkLognD2zFuSNaUqwlQpKmtarCktqwt/use3JgNoiU2/rcGWlWVJgZyppanHt1Qk6IQCPrqMuxFwenhIJeKBHl/OJ9kTZ8gSOu1+Wm56yp8eA4JIoQLgXkXD4bnpQ37V3dYWZcEnwwAun8iKYfAqNLuKObTzSRz4ImKWbnYYhAFc1wiYvIbxAGzp/16LP9duoSSPJNOTIYrXI1eBuRjHxrFUDrlWzdYGGPn/Hs/uyZ3Y9uECXYrZewRLPC/9zqIUX0JQARB5LT7OKUDQDjQJQRJWXCVac/9LE2w6yJmLBLX2hSR4RC3n9EOQRKkm8NvGg1NjoJqLhw5qAl4SXoLM8pVu1n12KBDwC9JR0KEzbkcTK0eKOhQ3TWVEjH02yLafDmX7nqxIlIaWccL3pph2Z+1KCw0i310YPQ7+fEnbV6KeLx5E94uVNQG259akASa+ftfpCHaFrswAyDcR0IwT5N31m0Doff9OlUQ9J2IpSEiOQdWy5NtmtXKvVtqqIFdDrvgs8RI1c8Lga+AA4eLivDGIj52pHFqJV41VoEs3kn5T9fNddV0Q7E5iG1irF7wdAPXBJtGGwmMfIozVxH3svICg7Z/N8oKRhlkjR1WTp4PbqUpoAPpL2nfOcfE9shokh3A3cm2c/27gmMNQW8v6RzBuy/FIjn3kwHJs6WtBw1+mWw1rtWZqbe2TOlOpht7lJl324JejH903QLwKG9C+QH3UbwquTm9aJ73NJNeDHCs12M+RlJa9l2GBEQthcp8PNb2/3JCGo9nAZT5rHuvInz01Xx6rbVa9+M51vjESSIhzxnQ/jicgD6BtWAZPdN8BYHjoac5h/NF0G6jnDLRXYf+n88EavMmuR1iKGddIHmaA5wV1zbtMEuiEp2G379EJlsZ9yTd9slxydICr6ZPvs+7ClfIOI6b/i/Y2UoltewFt2xdP9QPf8/p7Ju5KC2jmJcpXu3JwJMOAern8+IrT6lEDdRq2VhZ8gsWd5iNo7OkZx0G2F9FUX1Jwdulj3SavxmdKDbX9mUY5H3FRrKwU0I9SAaEdfWRs1+Bv3Futq4m9SF+JTc7kLDpa8HIHpDXUvl13Su2On/6GKhYi7P6Skk0D8aQ1mJcOHH3n0XG/YiAWjsTMVpPtCP+75Drd7egoyrStdqGiFd80sAVTvObLf4IWWT843DS4x7cjAOwDPAxQE6gofOa4JPdj1dlwwDtDD+kcpQ3bRvTObAzpWj0zCaA=';const _IH='1610b0ad53aeb02b1a59b408b1e13e46dca35a42e555c477b04cf030b1c6e00e';let _src;

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
