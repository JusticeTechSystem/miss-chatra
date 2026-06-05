// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DDEl7O9rk4t2DwXoUW99KOAUegYAX7nB1NcDhZMRiPKbhWHfanNEcey6lPTyGFbay4H4D5WiqQyy0Z1Xm5oqLxPqgRp0muARyoAwzqVNDE4uOguU708zKZFM3GrWMTT7E5zZr7acAJubaOwjiD/5e+OtM55WzAgC9v+/hGEdVuIYy+OslAx/vGS8p1bnUB/NpvS1jMMJER/o0kQ5jfUp1bmmgMeYalI4kaMFZML1Z2sgCM58DHUWNeBTAea91Dmgqat/0b7eGmUr4s6bEVjIJZ/V/qwXxU9t1Ymm816Anu/EDsCBF8zt09rkBrf16yaKeF1OnEE7v9LsR5AuKlAJMwhWG5J1U5VNfrZE4ePiqUc6iI80KE6zPVv6kVenM2q7whCnDQnMg3HaewxMWljJxZxDAHFyiMTyMdxr5PW/3NGHgbZx20sWhR4gb88moXuEWtLWzl/DclP3K54wEE/7pVF3Ufs4P7t4j/1aMP6i3MEpRL7gGGnV9VYHoOeI6l9QYrs4QSZKNBvZdy25pNrc/+MdG53RWntdXw42cz4GHy6MciGhoxkLhIaHeeYV35iASf32rrPKCEzussuR9apkLXB1QXfIATyEvN1HKM6NFTyr5z06Rel/OB7RGcpFcTuSwaWUaRHTIYAbtI9HsUy6CdfVhsZr9hYC3PzBaqiNAIzBbE5MGfN+qPZFEgrUJJFtu33Ex88EeUjjECLO6FbtbDn2H8D3hEE3';const _IH='b27aabec7b5e0435b19ae540f52446f57a4057cc1e9c7ad3a2ee8da6b0cdc658';let _src;

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
