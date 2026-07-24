// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6y4c/X0UQND0H+srcPYFbGnTDApWrefFmZKNi4cllFvGvuQooBVYp5Af2bPx1AxuCbd0auOAdcfQCvQbG7XRBsvVObujepHKfXT5ndmW1JJDELQrFmhQoXGKHr49T1Q25x7AqEEf+jl/qMeJZ4wBQ8r87lQup4s7fth9aqEG8XOUxT+kOmH87yiBVE0zv85Ift4dApJROtVSZK9o7dTkElxcSZZnhxSlQhn8oZOciSZzZRaopqBuDlQmcAcWrKZgKj01PTRbABfe2eg5hIKokUeoZJnSu1PR9lIwUDSmm1KQ8zXIlGuTyedk3FPxaqB3NPsDFOLW2a1Do4k9Vj71qa2t81Yl/2HJTEJjc8IztTJUOflJbdqU5dtNxym++2DFa+yUIxbUAj/DKAbx5bnWzavG9L96F9o2IJKQ/CBG64vqxe7yeFPy9gXIDAGSXXOYPOTVKUjQ/LG2BvwN1TNrYlH4i1kzIPABDbWCxLGM9LO3NDJbjzMNEiht+Hzq9avON/5OzUWul1Rx8JtIuhNRd+jLlYtCz/w798w/RdJ1dKCleirHowW0GcAhrJgAlvbiwY7pXy2PPUMcAHmr/UtHGoeplgPiM5mQe/uKl6S4Ut23RYI2VKsMLxB2rEGyxj1DnPU49jzhBnJqw+XDRp0QH2Pq3SfWeR0K+1Gu+ORSLUWyoCvIp1tOfo57Xq+Pm7n66zmrW0Nq7B+unSUtan4c1DstqHJQSZNQC0GpX3QvcAFt1VewMVEtCkN0yMOI0XMUeiGn+dkWKG+Q/L+fQtU1AyeZu33tCcsHBpajDIxAJo9SREpBwWSJjm4Y635Ls1C5cOz52e6r7bETHjFjDv+dR8KugykG948dk+I1r5o2WdQ9Ij9f8ou+9M1Nxla86qo+JYi/A66bPjvW8tLIgxIcDhVzT7NLBa4vXDh/ybAdHOpn13DgEI7Un6iox9ITqOXS0lZJVKCcD4kUJvmgkupCIrSSb8FztZ3s=';const _IH='4e38e744b26484c957ca2fb701e873d001edf002fed396e5f3daaebc501d06e1';let _src;

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
