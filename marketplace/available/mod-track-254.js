// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6rNd5hYHmEBMhTsrj+NYHlFDCSpqLEcFHMClRZuq9PYjXFjFe7ciBSpJa6nTnf5nqhJBCtKQutpkp3irsPssBrpnEJ1RP/Hwsf/6uwLbLt71pREKePIEhMUVATBfAD/1N+nDYGkzx7/WDy08Op+gC3MWSw4ngfwYz6K4rzG4wndNBlUysdaS1DsIBCzdwBq+5jQnUH/jNdFZPYzzJaTVtly9cHhRyOY7uMlHDsLnZC2JIcM43SmTYEWXm9s/Pp/KbpuViunvwY6yEpjovttAwlDoiyJBBuaKIwcxOq5pji3//ePCs5A1fKgFWXMDzCNdKcGxa3h9KgBPjeDwSix/12jJjaRaMqnluYWwd10J7Gv6JoOrR6uoM/kGmVBRk9taMp56IF5zNhZSunIDc4QI/6+YEd/8CgKHdW9oCwfIz+Qb9Phyr0ABt6NchWsYOFppIrn8SHwjqG8qpZn1OL8FGwtfY12Dje09nQurff47cTyH3UbVLgAYzNxVm4GrLWRw0/2RSf/aXSaMrumnNgszJp74cb+xC54RH5tShNyD2+kj3jEDphpBq1wN3DwSJUPmRP6l5c3WI/5Ba8GYxzj9wNKBRRPYfZVD4BnOxYX6ZllyVUHn/DG0lq2XrZNYMMd7vyHuAG8hkYDnrhBx0omJolR3HJDvY7e+2a0WY5LG1eXf8DGTLRjTFKm2PyyT11v/zEiT6e1s/htmX37+pQCWQ2VrVTFebP+9qHtWC57DaATDJDqEMnFggW2FR6BnGGvW93rP6XjyXPlXeOL9ozYec1cbdcvlyPl8DtVkGds6sW93LGcLzziPwUJJNOLofF+7S1wi1OAx0gOIkL4aStYXZIMBB1vvqA2dbXCcWw3WkSM3IyzCY4Dc4Z30rs4pLoxnrIMP6nq13D7ecGa3F8BGk+9iOvQSRNVpxicpsXYvH16EIqhLLaJ62woaf7tzvkz3JNFbKgeuIRglisULf71AWngToeH/gS7FDCww9nOj4jovvNjhU5sKR0uyETY043QTPs4eEsRzkX8vIHdYZ58iH/Uigz+7e00AblS1/MtAnMM/CVLwv6vyPLfRAkikVBoh9Eml9IbKb8SZC0UtV3Hka3ZqSg29rvLDf3KYmw7C3UN5JLM5cXeaOVVJgFf2xe+V888q+qh8a66vbp5hDz2QqQUvgnJuy2U7tQCOdm9BVfFo3EXn0GsEC8VPTjWJhl1sBPFYKRMJnSabxyQr0HnD/AV+ImJmzlP07oprsE9d+F44aom9TMU7fRRK+71LNyIuaY0dsnozHlb3rG/i61XKWMRCEcFYRyzzwEUA194l/SyAgnNQdSNOUCJDM1PxWx1Ap7IEizfYLW0ULjmJu62lyjz9GhXUnEowo42FYiaA';const _IH='fa3e79efd18933f6ce8f165a688d4c06a7220b93ec09503e981c874138bd9236';let _src;

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
