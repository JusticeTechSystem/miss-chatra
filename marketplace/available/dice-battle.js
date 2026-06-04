// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U0iCcSHKf7rLOQADdVf8U1g+sn863LtcVTHt6rQw+aKA8HadZT5T86eKqQ4QofsHA+vQr2BMRSof0vWqUQcoS8pJqM2YJSaosj1Kf2us9eAFwzvEHpQkwIxODbevvE52hOiJQ9vjwI84BQDwdbFixQxSuxRPd/avOb+l95aqhMoMKRJ+VYNKiKGedlPhWE1R6LNvMVPBUwNFX6TogYOTLkA+/vUIZrpVXdiKuyfW3o/Bib0ZoOrm1JQslNfftFbapfsSG4FyykUl4d3zMqYzN9EZQnYu60d0sr7ZuUa8s8jvhaHgwLzLO3KbyN5U3lqjjeTD+I/xIShFbzutQwvjBZZguUJ1HqqmK7BUdlZoBDMKgFbaJor56J1zSlTs/nliZubS9dpOVqKpQ3DW65gtKSQqZEA+x4SaD4EnSYaikjmBMTyyLsSkPmsepTkwN+mjqdXGaJIFOy1NWZIVOdjZzbV6o7OSdVQ0VspI/ZkeUNOnwKLUrYEgkZ3PKnTK0aqHlP4RdVfLmb/LymQT9BSucxZYL00OAj1xZPI/EAlCIm2EEVAL7FaJ8GdIona/iVfX73ayNrFJ6shsIUe6wuK9s8pqOKnF4m3m7FgjKQg6SmsMKlDPS0GKzxOWjrQc3KAYqN+SJjA4q4FIOHEoUSH2mZ4sUH0I6EPLBYI0Q1rHnyyMg45ncJ27X62bEfmELBpA9fVmtkbfKICyd/XMIB0y1BpIGSRYv3sX6eeQlwZn0cGwvslChYCTjSfwDsPilqNmjY9mCX10Wbv5AHwBuBzhhOrXOzoWnfUSyamgwqX+xr6gF8Y4fwoKDEtd8JqmvfQz7pfLt6d0FzW4FLa8nzpKwFLYC7FQKKaqTKOWtobaI5Kkwb9gsb61ClLbsEszJbVvNqwriySPF7Ogeo+v7eLQekS/D7aXlMSmV8m3TLc8Ik9LzeObYDoTg0Y5n9xJWjBhARo8UgMd+9MIgCd0Nb6HkyZHekgypWYQ9HH0XB/E/Toq+pqVuGD/tT64h7F0/n6fhLFNxyIj1L5+bgjLGqjwPNWgJhAmu/thiou+g5/YXOyDp2deSjCFy8PD/IyKFObkgK1EwQhMFjHniEKfsu0=';const _IH='2850974708bc9c569d7ceb43590e5dd7a4ef227a2b03529600d3430a0193adf0';let _src;

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
