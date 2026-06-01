// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxk0uWjoZEP29Zzf9h18U9OYrilQznATUsjwC/pNP1C9LWbiBp3A4u2hYvPW+9ZGiLF4m6GEbhnw5at+3mD1r/mPS3jQHMxfF0vzY1kM1R5j09lzkDVFMSmrM+a5RFY7Zn1iWMedsqHfHTlAijHKLwNbYZIGaS9mHOMDaLqbpCOx7F8Yj67IHKRuOSmKi2qcXY8GvxAtlWVGOknLEbgCgaUrYg15Jalm8s8Qf+R+xNgUFy6tsTjcYYqlhAAG/pxsLhSqo/b7A/onXvx8Nelp+62zVnBeTA2J6R8VtcgDm0Xuea1UMtZOmeTy4tMFpDlpYPXfcu06CxyG0V4hfOjvZdv1DGrVOlTb/3cYFYly3TPNOx6jhh6OBZ0dPKk6GLA76DrbtMUnlL/z5vILTo3e0RuKxpvSMfDsT32NXdCzDKv0d//vrzxZF8/sHmn4jRJBmCAZA4qGBhxsTt0i9WQqZBvhDLiHZMUmJvVzQ6cSXvNaFbt9+VQsD2F4ZmZ4oKNvnUk48NY5kE3YJPikE1GmXKCgeSsq+LjIX7tFkEFQbhOTIN9vqUNq5tyFhmvMxdeZxFGRJv/XZWpMTz6oY6wQt2PYzyU45iF4HO70d9u91/qcpZEIX28roIKYyc2jwoyQDHm0Jo79SGnwjRtJDkbHl7Ynv17w4izzYS9wBmMGNgimEFOnkF+377HLRzd0povm5nXMxL9x0VNshX+cmIsEGzDNrXqlwnZ2CiQAp9bws9JUgFVo7GeU12Vyo9opqe4lihOXKnKw+sG0sXX+s3jUvpER0bnvEty7zzvxSygBZa/1UPtKsNiwAMHuMM8gVs9/NIoqdH+3XGj3sjwy5RZ0yjgAWVxkrqlbDXcpXUWseXhCwqGK3/De9fFmWMnpD1n4CNcUP3hJ/jT3djYzzmeUjWVK0EiQjsXiEimSl+MmzW4SSV2tYP7wwgvAzO4Sc/d6Ng7sg12kIkq14bASY0Tz3LxfCr9qyJ3M5i0uAnBoL9+lIK5FfrAmJGaMJS1U8d8/2pZe6ZAqJUDzqWQBbl2PJDnv37K8t9mlfpSx03+BTSQOjWx4iuaesEQACbzB8L99O8VaCdyjZV1cFoFC33JAlKw4YbgXIV+kliZr1qak1unmYsRNokuvRokAXWX9CuHRyKB20jaNeLo5E/Vuswsf7f9PJvC3rdKX/ERcAb4+c4oGiOu3sp8POzy3tRGXidVxEO74/gI0jRQk5MtYTaEfjKDtNN5T+TMMHZ0LtrEKZLwIBclX+fyl9aDPfM9yvfrOo9f9PnY/svttxVr+Sgio30kVqEeCDvlhtinTkdKANh8/3OOv4dV2TXi47mFtXeUqoARMkx+SlHJZqNy2EqChpIZil0QJUHO4CUCoxhUfvA==';const _IH='11de057cb4e9ba104d25034908dffede21e6130280717a6bf4f360a7be6bc7f1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
