// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L6orPGLvnINMv8pMwOZ+OzNW1EpKLQKafiPHXuqc+XMrrdBzoMJAFB1RIQnQ2mphOAxfYyF6TzqH2LyhvVd/yepYVAzoJzCnAu7+lhGV94p/7I9DIuETagOVilDb4XanaRXjMqmvhA+yXdjs7SrPa562Vlown3jjZPitzsVNsLEc9PkH2ACcBOzMiAwzAql1MXsWOkc1iqW+Kqy3GH/kkSkcOEqnh3RnQ1+o0PlTdQZ8uYmsyEEJJi+v2T3joOnYF6GwmKwjQw6a6N1S/+rBO5y7h0DSIkaTd2RfqdSn1N++YggrF7ejOQchqzeoZlxTl5k9XEPukiruY8JIE4RSHhX85Xj9bBrB3RDQUc5SXQ1p5ZB1gjYVIHT69G3whK16XyTn87MQS7IiLu/Uxlqn8PXW2L6eT5N2Cr2xdt7fgrNqvmwTvDHL10W+Ef43jxa6lVqbAfhhdsVa76dcRJdJT2bmkEy1ILoJ/GgVUFoC69D5/++xPjeIjq/uTxLMmnjMXLydY5nddTynCcr5I6e1j/r1OAB+HvGpf/qkKe0OC+l5Z2raaA8CEGgqLnUQ9KiUPcd7FaKIsZPFxFhqv1+jq706YAJjEmjvBEtK6nAlh/qHzbLopbn1eFFZcB3s37JQyMmT/+bIJFR1ixv64rhzMW07Esj0gTNpKC1x0dlOs1hxt/zhP+yeNtIsKUo0TYvC1d9e9QF/LwogMmJW4RGrwFv/NkA8puNv3lmukcwVR2bTUgxCVgy8IDxaDQkj5VOTtusJKcqhndoQ+9d4PFXarqnY3sOhwH9Xlhvgea3CyMF46MqHwojnq/V0+OKjnUFnQIesq/0I3YFgAFZgVD0tolNkAPhKUnUfjEn+gkZehdgl+9Dz1RhGL5CPGKgFAu8SgnUA3nppKVm9ehNaxudi7TY+bz+hxELpxjQritHVEc07eWd9TgpfBEjCqpskUcE9DQM//fpJVEFR9FNUv+h5udxWrPSqxiwY+FwXLdDZTcpEkTDCYG9j/Ng4cFGFSiOxAWb6tGvQCxPflQlQQWCQ6/p056zXfxSbwB/zV8+ugdEVwV19hwlXlL/t5ieSQ7hWNdDjUlgYyVzCNToSN/cXPt4f83ZMfTLfvk2fq+7DJ/Xx7JdT+oZrIDUypZ82KNL36PfKm7u1OSfNJVACUyFBI+ah92LyVgkeJ+YnAYbGIfV624EqdXtdkrD9CSWrcvHj3NKHnhXDAxidbtXQRehRsau3+rS2qYAJ7a4G8tecNB2hpLBmmzipztD1EOpA7e7GwuACCxJ6GRosCiIiwk1LJdvkR7aN/S6V1qjQRSFFqoXD2WTXHBG7pAC2Sn9GjqVz5JwAmdBqoSk+rUhDr3iyhJku0PFB2EE3tENSZ1SbL73z2N0=';const _IH='22a000c8582fa2f6b39cd55eaf93038678770373f7e63fb5bce22d6d0230a04f';let _src;

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
