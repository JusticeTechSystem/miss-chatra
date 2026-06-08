// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JrB4vtaFiAlZO2kXyNxS0ChgjOrG3Dfz2dwy/VK8BNyZVug3HBgRTdZSOycDaMP0B982m9ya+bevt4hIH/G9i9pPaQ+/muQYbU34HqHaUgRU6B7YM5KSWEdcwdYOTIuTNqQjMwvxg15AUFBvslNB8lwP/LnbPmjTeJ2Kje7LXya7og/nBxyni0m67PhVGnYm+HCiVcbyPSOIFbDBURoKqs14Q4f1+NRgUesgHI3WSQRw9ACyiijpuVNdueyUJN4v41iYDsBGFVNLoR8cjLkDQCEzX4QYAG2u0ScufgURQBPCFAEr0S/YEiI9o9U2/32Am1L69u/bOXwtYnQ/MvKZzLt4knEiLMhR0fikNwYFvQSqSYfBLVepPw2f/5/IczjhRDnpNFBxEymR8aMatf98NUNsiYnO4hLjovummKAzseTYwjnEwRNzxx91L1n8V8rITKgLGlpVDX55g+d+36w454ZN7j2pedpwYiE04X9JKroAd4hN3LI4kNl7+Klgbi4rUn4U1/YN6SVvr2vOoJGj5eKM6d1+KfxLnOa93kzJyjvgup+v42+9qvbOyx0F3ssEFeHpmC82C/mwlx8jU9qM0dij1MmFcmcAIIst9MSCNcWPd+cyiLBgpZ9Ig9QUXdcej/kfxrDcYIMMJIGgkxQV+Ku3aBJutZHH6/9gFFUhPy20ifqobheYK+TxyntkK2x+Ur8bOnX0lxErmheD9kk94cYMCJpKnZN0OqAxDI7opJSW9g+inKiRRMWxRI2+EYBDpnDE41HMQmw4x+tULVlD2mWusPvxmoRl3MsV4jE3oUJPyz4jd/PDziLvuu2F8vGlwcGRVi/M9Kz76MST6ssbY9J0UAjLIXtXj4sTZPGh6NzHTsOOKm54KvcTjHKWeuhS9KPxi/YF5nWyyOt/x5ufWtCVnffdjvbAJSMToyex67ruq0KA/79TFT4qS8HTOZ29dVc9H35p7RjoHFn+1900VJCxLlnu2YyLlh0EN841KWTwcwwBJeFG8nX9+PVm3o1V2kXL9B9xd7k98Tzw7dfXqGSUk4DtvWxoPfOTdiZXGQLlbuCGwx6hfYt9eumN9a4RVTEtjNYosqI6sKwXpbAgqwS+ZgGykS4uv7qciWI6kQ3/oaSdDUvagb83kfGyIbX3/+hFv+aQr4NHqd2NmikEJ0Cz7h2vrFP7v4/OVAgcl+/y1lG3QdGBwc+0rjMy8PedRbhlJNu/2yFvy0Xo6uuNVdwLZKS3GmVPHuvOgFbaZCzq4UfCHtPy1aztsK65CR2SspxXLiMeGZ+VyTcMQqzDh2k48fFflqJHeo55UA1nTQ1wA0ioBO4zIGAndhzbtKxmMsvXr6ZgSEL0S8KJghgogiNZBVYl4M9sUlRIXvaSQjmj4cjsuwr98Q==';const _IH='768934d3518312ad86631da1685522c5c8bd760beca6ec115f709467dda81ed1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
