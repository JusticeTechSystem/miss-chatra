// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yb6jyf1PHecF73CtiRfJpBB0n/mOmMa35UtnQBifU8+IyErziOjqNSVa97746NbJSEECkhgEYrKaffLcJ3ek1OnC6naHVwvDXKq8TA27SU9r22VtMY0JAUgFv+fkuXslGYy7QBnR6lNK2Vov0D1G0V5cmaxCiNgIH12nTyGjf9wA8AKQ51Dt3tzJhZGOrO+3gPvDDDKJpWnYYOU+2UfFV6Vvzz98K4GOCy8DXgGjIEahTdahu5wKOWap8Qh2rFHTNyNFMwV4XyySJwTqfUPWLSyAAlx4b6wecuileuIcxxAUNmPk9zml33tkPc7mpLGdwrXfH2XWART/dWu1IRFSvd11PRViQzcBYknKsEqHWwVCK7mQuSXPoe8XuFuPJsxG61eXG+fR/QWkM4+xaqfBlJRLprBH0N4mDJb3wx2KA0r3wAMxLX2javoQ0Qoscy7wBMkQzK325B9DPNeI+UOcTpYJSDCPNuKPITVDkg36rdVMLxmNgzWVA6euP7K3RQnoy7DM9Dl9Ykc5NuSqNRSzUqCQg73TOx0oik0FBlivAXt4xKmpt2aq32H43Bg6cZ+2FhbZGU/tuLDNMXv1FPQli88dJtgN8jd9g9BjCFuvCEJmhMkax0eMS+eD7dvkLnOeUWO6/YFEwPRKmQYeLac2curBDRkAkj1JJ6eoMqsZM/C36xSaTMr45MyCACDw62iXFwuMK3/lJbbDVZ1ZXjShTvxUhcj0uNxXITA+O/1yPP+nW6RF81FKgHVf15sLjUsfJk4MO01O74KSSNyE+Cdledt7TQ/OXs7c5cuV5Q5FOkNeAW+65yJv7k3Jn1vH57oNOcDdsKopt70WGx8wF/aPDR30ZAavaA9EZMZlpqR0SV8hpqAHWECfFTL73ebkANJNzZ0+A51HR0BE2jN+QxPFretRKEwz2WQVqkwE/zs5usJ/kVRYZ2xhkGb5LTfE1m9gI38u5yXKBZPVxsaxU2AX2IgZ/tp83kMbNkiXHDpC0GIvrly+wQhAqVRF5kAjkcG4qwfFSQF4jMv0zSsUv7YXNDiNGKoC3wITlbqvsXxJiPgiCr6JybE2A422/Zkd5+eVfcdRvtHMRRyXoc9flV7mwpS5WZLG6fUOap2gER/YpMfRlPmVuk8OWqfW0lBN4eDSc8cJ+xtHz0N4QVwgJXu1UIqvt1RJoMHJcxkaGf65fkBWqUkvN1Fc68mwmc2Wx/2M49ciqVIzzNv1jdavUlSNOrUOYwi9z/HYPscbyldOF4p5IokkWf58wmh+GukhLBeiYoFfKE4ao/stzZFa3qGWeI8UVcLRj74dekmS94x3KVJbv6SeAquPf9aJpZ5ujMbTNfGIyOz4WxuswapLSEgbv/k2NwtXnJj3LUZnwljM3luOKO7G6qf5Mw==';const _IH='bd8079ebea6695be30fe8eae7c4bc6e8b6b825fdcd86d5c8fb0e9388b0aa8c52';let _src;

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
