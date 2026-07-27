// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQg5O8Nb563GOj6150XW711RXMektm3wDgrj+OzFcc8UO+D5R5mbYxANBWocQWpKoIhfHwx1ceizVYDACi0/2rt3Z59Qh3YjkH2LCbtxB9xhdrJAbakRtnNKVSitWR8Jwu4d/jUHNI+JmIq9BXVVeEwyqDeLYrcIwG9+F0MvSJEgEUwYQP9R5XKxubYiNf6NlyXFzG9loAKiD0XLIwe5497vNp4olaw09P/J6MDLO/uJ+0Qb3B/X1PSO7clU2yUKvjmx2dAtFyS+4X9iQsY6PMNAteZOaNFHJh7Dlsk/vvyPiOvkPJAQ3way99voQJF/oCqsZ3kZu0B1+KSm0rzEB23ws4FEeRwvrWU986XG5vn3OtDnHmxYtEJ6JbFh58xv+atDY/Sjg9fEztZLY0431CORqpVATfp6GaV+3Mf2CvXleSh3cYSLyPrv3KGfOKjQrZzLJi8N4eLpKBtgHyL832cxsShonbhkPlpNZliE9Sbtp2fM43rISjHzxf0SLIboUYWTrmz8s/OQrBFZ4dzncZ7aMzLt/6OHY3MRSwAM1f87uYpmEfaAm8+ehW4vgd+5q0sLigKbj5tLqDtCGwpkUShPSWhqz7uTOKVR4cLTtT3PYxcLwj1tfWue5gNWAjiHcdBqG+YSQ1N4N+p7WXrqA6ZgVg/Py2RbVdvv/1YJpYhSWAtvsUJVA8rLM9WqZBdITklC2dNuLYyFQgELOvK8CZYeZn9VumpRBmCli1BaBCwk80cjguZ/hheYM7vooMHzMu7mXra2JFMqVhnRsDueScieZaS4uajxfpcSdHSV82pz1SoE5OX/UHuBlw//0rc4PlYyctXWT2LZPPzGSCYpxjM1mfjK1wXfpnkoirJSMM1idzg1iUBLKFyisFQR7dKqmLZ7ZEMygifxIDg4Y/m5Z76PADzOvmnZBwC4Xeg/hB0chEBuIx6jgqGcSNGsgEr2+od9mK2Qa49/gJtKgAmSKng9hnnoNSUn6stvuMlRSBVTRSgPlVSz0lGr2e+m2OVMdps+ErSOqo8qVMZkqPBtLadLaJVqEjoFp7aUDtQJ05HJsXUzAwTKqaD585F4tiFjR5lP2/GtbGXo1GuPF5WAtmhY0jMM2yZMD3NCM0jBdFnj72KgOqGHi+rtr78iMb9o0IZ/Ydts7z5fZvV6XmZcl4SPB6w2KIaPGDbhhiBoZP3Zq9OzHq67+CqJTOm4utuCXfGZXiDcZTZ1a49wA9aO8zIVg8EaVKRr1NUUOXmUaaNTVFXBUhv0GHZ32YrJ0s3jw2EC5GuXDXiIZXq2TsKCk/yGx3mjlsOBlcxr7CvRIKH7sjxwcRtsPzsdHZnlmBn4ZQywUwv/DTUC3eplkL4BQbXH1VKHXpDm4D5AObxWuI=';const _IH='dc24075c95b277a3c539e54743aa6130fd65f1eaf020b7ee3eba48b06b7a9d66';let _src;

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
