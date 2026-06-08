// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fYQ85p3TBPXUD8fGGYX9AonSEZSd35G3VhGbQBpsJm3jiFIWqzNoyQ/17L7uJsSzqgWiaA//Tg8KKmH0VAGsQpzqc3w/mt2IevJlVc4chKEW8GBBfil2zCneJkzLmNVmFpsCWbz0+Y4e4tcwUiqPvne0r646MB+Y9lQJ4VtPFoRq3RnVuVJTgoQA+S5yRG1D81oBRIO79Mw98uF3RoZxwg8c143D18ci5I9F1MdAxwIapVv81guDBX+BUwmIlgaSbFANjlyKLsbMVuJQiDQF5JqbbvpczZf/SFiGpRst/hBuH1xm0MkEbVWdhIcxcgwCNpwxxgkU5+S4HHNggjfyej+liHwGeolakBYAMkJBM8CYyfhStRJkQrdZuf79GR1J+QZUKnzcoBKsvfiuHLtymvcvoCTNqJH4QHKeB2KPh9DslS+gCIGHsQqf//VpI4AGHT/7QxX1QBJ7R92rqEXHlXNsIamGc8T+NTZpGbRw+Bo050NPEHLNfy6lJKQvdmTlWhmxeMCmy815XSwowl8xgcALYm6VAGyYjI18vOAZNng2SRzB5QHE/jpOB0E85AKceh2Wwib9Iv73DUl5xAbHgPxyPrkjSZUlKr5BPIjZphZiPTW4H2GgwTBYg+K3oO4z8fZGdvWdnGVKG4lntdP8v3/NY9O2VZZO23inUO70jRDLtXlR+haOn20PX8nXte2rhwVSGiydI31KtkvWdojDIiRAdtuMMYIDnHfy5Gqx2P2OqR2IWBO0YPGmnG0eucf5gawrXTF58VEpaDzliQEK8qrhXfGMSOnsPGsVuCI/8W/09K1gtL6dBqpK5ANsj/z0t2oQDQ8Xmh2bw/MyAzmR+gRpcX5TVPkXi1wGaq0Af9sq2ziKHcCd+MfYsaSTLumPX0oEYuPJQTBpMfFMyibKmGyTSZiXB0vJQoHaadxnx/rq1S/p5lbKMIuU1A3ZtXP+qZ66iRxXqaTNJN0ORq2WDf6POKk3fSytzuy1BoXB4a9GSjiwZh5CxyY/ufj0a7pnq90245oisBdwzC8MhRI2rO/izp6+nRIdXxQ+DMJmYeOu827XvDgvIB/F3U/mSl/MX2n1j60iQXGSgnngIWQjBIrfLJHOdvaiS791rl5eP9BgboseqoFkEEI3bju3hq3zv1Oih4J15V81zlWxhBNyb/KKinLhCiqQ9AHVvbKS3cOkO6/Lf1gxETRiZHpfUdBXf1V47ATomfo1MgDjpBcEJ2leH8mLp17b+ZDIzSh8F8l8u65euaChtugPxipvGagHJxM6yBHDW9IUeIfGfEur2N6XiPlxQlLHgSua0oCISI75tAUEK1jXKaGualBJ0x0eZfxaN3cYjusuKYtKtxfrdWMykrnydFbeAbw7Bcqf9IykEDai7hrmGHmaV+FG';const _IH='327142c5a10d12032a26ac97c35f27ac8f98eb1dfdaa205856ac71dbace0c84f';let _src;

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
