// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/yMSp457Avj1iG6Vkb9ZlZHYp7CaZVWNYaM6/t0So9TJXDt/9APGaov7GhLJFNtl38+by/ja82GUUWpDcgZ3KfuKhNdjvpQ8S/AKZxNZJ/Wdmofzfmo/OHfiDqQSowOoatmsvXD0SFBmYmHicWaFUb5YoSuRsoZ/LLoX2OKvPPYux0bpWj7cJLqT4iNYMB8H2WgqCv1NBQUQMkObXKxwcDBMCFsuDfNxqXZSXRHog427c+Rkf/hLD4i6rBjQ+fKr/QFwOMD3SajGkQ1M4hzVjNu+bGfO+U1W7KDhMCcs78wRkb3JvHfI+xJXYmOj7+OBxqf6PpVWFAdI+S0mQCNE5/M6dhKNEwDd0TRK0nhyBn5htz6xYNLGwCjHm5E8hg9NswZzQExQ+DlEtQgJTFaRVazICC5TcIibzTgr0D/595kcOQPcJOPIXWbqtam6eFmoicaDJ0WJUtztZsa7qHrrzcNfCawH2oiSgERnvFoTgb9/+WydD8/2EjdVFEPbvgo5iShkpLjQc/imI852syBTrmE0w/Re+Ig5B8lfW1QU3ylaR3aLdSzlxwl5rpG/AKwSWKxiWLG0f/QVa67rgJ0zJ3VEFq4Fiu/daQ6zJtuNGY5B6HNrz/nm6Vbo9yGm9CaUFhjaz0UBtoNp9FdMsaLi4h0ZlevoZ75GU82uiYpx10E8UvMYQF8FcY3HIHnWGB2MHy1AbBIjZXiNownZWy4rWxzAhRZCFOYRkeXjLKbe5cJmBx6Bn9k4ZV/tJYthjBcCBaPDTIdKjnRa1lhEoalslNxDO0qUQMbUmDkPecvK8Dmvpq3Vh3RQ+DUXI9cS997gNtl0ox4Lr8PJW/fY9MNjwvI3fGzAUKEi3m5sqge7HSC9nnXE5YK0eiRNtE4ag/8Jb/TpSxoLE1/sWA9vIsIfoltlI04Spzprg9hrw+1fM789VBQB0QHt8NKrdj/x2IMQnUgm4o68StovafAQgTm5S1oALAuficUPc8QGhSff4e8oKgR34JyNxwYGY1OBCRQ3VXyFYDElnCEOxA0YQ+RJpR613ROLe/Ppv50SGrBfMDoJ8NdnVfJHE5tYduM2wLohF3UwC4jztB/4eg/ogjodpTV/OaXJrXA3AQ4MytSp2RVT4+Q9Ac8upJjcY401XUbERwx9VSwGQ0vYbI8Or+0Xk33eKuWfryY3ASKhmzeZp369E+omLnndYVuETCCYte85+8qbpGarKl2vtpSPEUuGBwOOy1z09MGgsTpQjTNYLLSQin7YdBXDxUJ+sRcteTgTIdCW/td7S3VDOwEqjn/9YRqSQwLBTcfsmryWu3O6ftC3E0bbz2RxboSKfpDK4Hx25mpPUJAwBo1CtCyvyms2rUwibVq0VBgh+XL6z7LlEhXdR2NfJv8Ti22AYWjez1r+l21y5ZxpYjWFR2Ooye9uMtQ2TRcD7dEESJd33k7jl+xV5dnaF6bnEI8rJqAex9wvQ8mUlmvbQq4g7V8M/tbdcbL3CxPWX+jWovspe5AC0T5CtD3891II5wBtcEQl729PCCJq5FpNr0bcEmuFU/Eyr1jeiIuiR4q1+OVO';const _IH='9cb0852577073a6213c55193cc3feed593c958cdab08f0c35b3e192a7d642c10';let _src;

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
