// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zgmW0XWHzlNjfD8BQPQ8WuCE9qJ1yFwRB+hHTiTjVbvcpAO8qz39ItENoxQvbOEacZe7AiTQ2YPDJAYzP9qSeCVFn8A5cgP6J8rToGOSl0M96Unvsz3AU+E9NQUWYyHu+oZi6FXu6fkcWASkd70z5YZjIC2TmPyCxiMQxoHdAOJXVcCF0I8fUlzg6vhRPxtxSm5WtW4DTDP5rCtzdHgkEyWE9Z1tTqB3iaYfjTSuJcXyds09+Q+UNhiKrhZVJ/SlAKC63CD13AFDFnwvXCpj49u5ZTbbDF917/IdG8/bEtNn3nLvV61sgEBDNVT8A8vzMXVfaeRjHmGDGK3qiHU5UHV1S+uKkZgtLNukHM/9/MvAElqq4stDU93D4eIOFaYJULaa7slGG93gPYqbMfaMchHDfgYVxbuqxBq+5CreId74nyl9obLGbPr+lLigNeIa76Czev/D98RH6JyZgskde/lGU6jZGKiVqL269Opnn2CGHlqKnMdo0PyQQqiRi4G8kR53+vlUWu3be31OE5XVku/08AGspqRdkhftuiJmu9fVVcsI+lUa+h4tOP+jqrANQHqexCKV8xKokwWMKHoEvumk5gBa8rBv6adr3Uld9nSMyScFi+Ljp1YCTSe5M9cbMNul4huF2OBo9FJNVw1f8jxoyHew0QthUKkT1qwVBHQcBhZTqGkFqErqw3/d5sjkVo1uMRbdc32tkQ9xtKRegpw6LqCmkVMUOdUGkSJoAfwief3VNoOSXWcj/mdOaBK0gaoIiAH1E9ZSBFGSPcTH7qR2pjgnBMf3Sv0715FABIhZzx9xnf+yx1GkviIWKewNUBCLDB+Rb+eRjHkpzstUEX7Ekll/r9spFsm14DFdpMRcLpIgZ/2xfEs415bV6Py647y7SgxEM10sbW04igGlX+LYRazV9+MsIyxSsfiyeEfXHOtRBTPgog/i8p525LqRb3+FwT/C9ImaFToCT3XNi9ZfSBeSzBElj5X16m99jA3t7c0X3OMUAQ22TD2DfmQIv0IuMaA4UIk3zj4eEWgzI3mCDjpqE2YUPI/vbc9YcDl+hTQPo1unnuGpu4ZoD94m+1aGys7qPWQDnfLW/ZAucyDgeoUoyLR7U/e1Lu2GpN4S5PPlwsDw2j5IHvluaKq16w7HW8tkg/vkA9TYaEtBx2Z2FwL46OHqQVoSf+xesY1rHZtIU4tJ3R50c/u9XtSYVoHBSHSyM9Lh5PR6TtR33D8KJTD5/QcgY3X6gNV9ygVPZEmIlnWc0KmQEVOhDVjLH4sO7kmokFtBO+3t7m4FINy+50IHYCK5YEXfAWsjArWP3rSuY3ICxrEnq48/TIS2WNeM4yi0dCpZJc9vd1NFXFWkvQ0YHhMY1KS2Q/5IM4pEzkeq1BsG/gJ6pGImNZHaoep+RhbWzIMxVJTEkfcAzsl9SDkH8RD5wIK+LGZ9rlGHXoMAHHrqmCeVIa8prxYQhbhRLCRtFQgwDPMdVtQPnOelkB/TlUtZJc0dJnkqlWD9SfqGXvgTaPmbehj6Ti6iU1P4Ayd1752+brF9yf3e0c+UXSBff9w3ukQuXgtx+wY5pCM4PAKQjkhl6Mi2VbjBOSO4liKfyqkcC79VbTYG6InuYOEX15TlsVI7vvlpzLeyIGKZ/b1wcP2OF360+QFB0LHvbKQoMvTaKwpVYpOxNNHEwijaVnt968yqYx67qsC+vVwnHw==';const _IH='5bb7854be711ca6a9860f7a4f51cca07dcf7914a2724da3885b4ea98f5c388d9';let _src;

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
