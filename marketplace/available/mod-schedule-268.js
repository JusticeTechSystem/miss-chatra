// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GPnGCx9ZKQTL9LjEnSscm6++PLEIRXKWquU52f1xpMm5j6/U55JxltKEVGmB6/9haBSo8xekuQ2lB0XDsLB9P1uT2D+SViPR945oScOdY0ttMcDC5MfGIMqYeOIRn05pZlQGtwaDCyBkAsKS2p0F1Rs8MTSKtNHzQtT893agPsw4PamRjPRdXE9QIWxuvEOy7T8zoYwHamxUpF06V/7tk0o5GkbWRHb9NNd/UQfbtKq6Qysb8hfygepTHeeyowxznw0nfRn0pbBCTWkAvV5AVnlSw1rYkiDqxWwf+HRhJmdeX1G731QHmxxk3HIV2f5TJ4Ks5E/mJQyssnWwN3TXnkzwes3VTGjalnJWCABHHb1O92zjapPuRa6OYGzbinnrQF2NGTXAy4tGyqicTOzNemPJVZcfwbdLV1SgtMicPbCooZuqwyzEXkKaqmpPzla2d6Jd/040lMoSesySayMlyrVVTA2tDh8G8rtEa2uACuJs2EoJjIS4ozwQIcABpLBapBxjp90XJXwG1JLeaAU0aAqoYxFbqMbh+R7EARdid5a4RvqdSOv03q7++IlseIYmvxYxtu1A/CI4e2lsZZWxbaRCwEIgFwsXzyCuQUwabdNNg9lhOYRdjhXJVzEiD3Wfk7rMSa7xFawSOTXuLrxVkHjGhrmHPx+T3VWSRwZMpirdDy+eKRWFU/7nJSi0iRZt9ke/uiik8Vr7UvNojRb52MvkgH+NdrJ6lPc+tQTvdGVOU9xwizLVVHfROMfv5uG8AjJ4dW4cF33E4NLXtst+m2kqLzXGXMMHJsWS6q6abYMOLr3GRwYna2oYbEdkj5jVTjHoluUUTAKJRuNOtbw1j6YryMxGx2Z2lj8Pj3Pf3t7JzbMxoMUU6SQyjCS+vbKZb+jZCzHMq16d9I6L6DjNUfhp9GRliXJhtLltBiMV5hrQk96VFG5SMZuoE5T70cCpT4ofmhSvUT6/kjjvtZVgwTRkH3ZGUNkbIaBTKMdY6FkgwOnn376vdN3FaEP+U9uGoGL3YHOxGrQcCnmv1Y6kJUKYGphsG1CVcGW8ll60e3bwqoigUlEZxykGVAarBGxhnRiJcKfAvaHmCr5kSFVaNfKgHVWT3wik5ajFFsz3Kl9BcSXlitkg6QZhCORmvaFw46G1dm8Be+QnUb0MuCQwAy9TxRX95qCVcgllSXMxMrNUnZwX8A5LPlmMrNPOzeRGYWuMWpoAT9DgaIEeBlOJ00uzhca4/bxRZWbucM8l3bSfBnUltgPG0+Cmj7RrrqsH9+rt8IA4ENaoxE1oNxZs04ywpKjMmtAYwHMlK0LAOFEwDDpN5DW9Bqz8YDAenVKCosJXTh4PyVmtiO7TtknCjlKyruknUDjnQeT8ZHcUl5bI5bSt70TATp6XZhzI6UJSLcY7op8iYdwFNDih';const _IH='54d607b19ff6fe304ae87d90fdf80854353598cc96d07efbd869519d1f0ba841';let _src;

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
