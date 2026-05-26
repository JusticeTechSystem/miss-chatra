// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tiMYDpeIPINw978QRgsf2lVKZBo3L5Vlz/Yk41nf79/NlhENd86XpzNJa10qtxcqP3ExOr6lamMyYA5qffA3iImujA5SqtmXEJj9Mu4cQXDbE09hboURb9QFQeB1rNEOdGTG3CGpA0vRnZRhotEbyQ1FcnBCBvg0cw2RHS0aASyOFy1+B8iuhCoxICT+dZ4NrUHGIsYSS021B6cGFCsv94DZeHsYzEQWdvv8LUiulNkx/0uyGRl+zVhmjT7KxhlxArokpSVvqZL0ObqozcFW+C+5lv1weq4Sis1mlCYMcGWfzBOGhnTg4O3NnqxCXDZpNVXZR9jL8QZ3XMtWfT21ih9a5uJnssTr5RMHkxkJrWpWXxwOz1bumOrLbP2H+Nna7XJCj7CfVbEAGc6b5uEZZETWRf9ZTWlcCjCubyLsb8dmlHGXPCs5nKcjcmN7IRgNHPScs1q9zSwcbHCQYKXVCWXGwez870N5tV9etNrTUFlxxF3U3fdREK8mNpD1o0L4uovrbq3ipFDELod12g+XrjHnJyLWGRjH6i1Kn0RhDTJCytOLLIvCVTjYRaERd/YAWrEVKwpFROHMD04kRqzRKUSKg5fxS/tbBFZZuBjW+6bvTni6kmUhJPmkKCqvSQPoaTIAMxHO2dV7grL7Zt+OfPqdQNmcZoAypl8KssAZMt3FL1eFVb6CYbj3DmAqHrhtqbVmxcTMuRvfsJfjubBIyuGAZiLLRAcCOhHIAYDZNN6Fb5mvfVUvA679P4arqZmJZD7IATm1xIk7wsNIOd1lnz5LnhAekq0oHDt5J/8v6x+Ei8mGMeAdMl+hkvgOiJzLJraYJAWcx7NzLiN+aSYDNqTRe7JxyKKp+97jyQcdB1OwDQHWZZy90VNPJmrhgV7SGlQGvphQmso38Fowc0g22c41NJvCltRy48WUY5LMr7vruerfJng02XqaAubvl4f1BzN4JmP43SwQYo6husBn8E635tZ6yrEC9t6T6nnLDw8s3UlthZlSyggrAYZVQDFwln/iSOuFnXR970HtokBaipPRqsIVozgObl29zyO6jIPV6W/RQYaqdfXzSdDYjLMtUVpK8rqMF27N2wmO6EJscDlWVi68GxgCCEgzZQ+6HRND+/hxPHjdXGofV5ZHvJsyMhmMeunJu3h3RbB9cdyDNefM6D1JTZVlGk8gN2JSulmKOt/j9kGuLI1PVLVq7zuCZ8KqB/QGEdS5Z2SsOp4awiLlXvjrOWNPQ4XuU7Qp03QvEc/reC6Rebbuct5Mr+hZy58zztR2pJk+mfr/TYe7Fqrk37YR594UA5+iVJ3JCEF2Ug4BnLHluGqptXVcL5dGK55nn0M0XfMSKzOYhOLP7mNqzjSdUBs/Wa32iZ4dVJwjCuKduXJ97A==';const _IH='41d1cc9a6f6a6c20b75daf81b13453cc8c3a00038061be6786048863db261771';let _src;

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
