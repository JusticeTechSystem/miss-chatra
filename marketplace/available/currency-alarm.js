// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4HbX27wZ1tqjp0t8zKq5EibsDwTpaRV3KlnoXCunAWEciwhOxg1IjLlMpbL7p1H9ZGm0mpRZZrhaCXMpqjTu9yKG+uPpVNF4hiQAp+Beda1m5aD+wFmi57nDiCDTt0+MRFRF7/tCwFare5In/snSwHgb6wUbtwLi6cEYeFWKR2pebIAzSEtebLBaThle8xqNqAT1vpQXR8d0DBQ44DyMhbXrEdlO7yCTxHB+5iTS2edZBJ95mdpu3WSV14v971jwoiH9ArBSV3c1z7a67Sf5fFEYpbZVo+zc/Aq0RSKZaqquSp+i/0ZlIUo5UU2pXiHjArFnCd8PEwmr32bpRLLrYES8U7gXfrU0BwYUvjLcwyuBYhPz8ZVCE5kCJfAT/+4AQW55bQo6WZNvYm0v2bBPvo6o+S+ubdxC4LWucVSVl8a468h2ijuwZjvLC8i9S0EPnxivD4mJZ4tuNKl3nrBVMbkFYnwWvVaZ4g4QnbR8Xtx4lorqK5TBd43onpfTIUfrzICZO4rWaH4NpX0oKivoTGr2jC0PTMpN+2mafgNFAVmPo5QaRR+hJoeFZfGGMsBsQXNjh7PAfITJG1JqzZCKEiEF75SMjuIAtcJudHKwCjTlwGUd5cFjKPznH3hPkyWYHmuLiCRPSDm9qPdCt810H05EKd4kt+bscXVGX8RL3RmI7/2YS3hcImCNYUS5oOcJwISVWA6QEXjKX4+cTY4j1LiiyOumBOBOEmCQwgk+96OVKgi2LLUWhPM0PB0kXPh8C8pQCpboiZWo2c9R8a7CYtUEfNGqyq+2JNBh5NVE+aBX+0vhRDFAxcHa3eWG9+oCWHlKpHjtChwMDgZ/GdpvxBvWxQf/5Y5nyFY6jYEQuog5QcumHrWefdRs/K/0E180OeTegNI0h2vNGzQ2XOpNZJBXIJgZybfYJEXzVFXLzYv25U9e1nf6UbT0jj4fhfD+1Uxqkn44IdHrDV/Mf0ceWIpOl4pvY/PYlXsE3McIRswu/NWlAeHY8wsPp0RjMQ5Hna9tMokU/LMuL3N6hoVmHt+vl5GQ/wqt+i0z1dTUm6y5KjLG0b+IhjOzG6hel3uPYprCSo89SOdS5OxsSHmSQQxmEbZV+RUPmzg9tW12EjiNXTDHSVCa8gp+8fM+qwBnuTvIj2kQkZ9dqruAqm2od84EVfWggf+gp07ZYpn/i/Jp8iyXTOjDClhTWgA6loZFM45Pp1EVfXva16DwaGxwoaNSqvOY3PLUh8MnfmxvVkMbjo1jBVIvy1dC+f3auvxkFewXBcjzKeDwZsnUlE48lbFmk1L+UxbOZnD/aILlyV4nSC2kqoGUNyhT1XnTomwPNII3CGPZTyIwvWLC5nuCFUYHtlnPTMoIy7XPq7/fWNW146+f0QxdX9HxVYgo4yj7huFKQ2uU/MSVr7tlCv7HlHEh1NDKH/inHvhk26kzjyoLHdhIP7a/fb6A79eH+HHcRIbYEafiPEYQ7fLqqCH73OcWpm1/o2X4c7tuihU5IANGI1rmOQFWbRMQ4ITL9ezncjD1DUiiTXycdt/Y4xKH56DU7AGf+MWwaI/xhCXq+ThJjsg3KSipXHZThygbHySyJm3CLMKnd5d2mW+SUP99hptC/rgj3yzqDbiqDhUxPuMtrUcW8p3Jy3REQ5lbflRuf3IcX7Pa8OnvF+ZHnveVb12qzCHolWTe9qVc/74wQIe3SLz7UPLJxN60eXVbfmj+FKSPuVocjL9PTpm0JDCGTHDLU6ExRAZMpgSlXdmYC0iQJ3tGMpJCK8E9HN87XQivGSabRRUgivPt0gi3Bf3adhIHhedxw8K0q6vxQbkYuepl+RRlkwVGfLGbBwd2Y9Q=';const _IH='a43c1fa19432e236f00974e0b6db4f1150eb24d78d46030582d0bf8293bdc422';let _src;

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
