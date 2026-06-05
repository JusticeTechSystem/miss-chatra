// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JhmyW1vGMrAAlMs+/paVVJXZIXYDeCjQdsR9d7F3pjjlb5xCZJrxWJPXpx9580HlKPOfmU9v1n0m7o+WCjg/2HFJavVhUHUZ0Pq5Uc56obL+XXliGZa3jWkMjnXubiTek65YXNe+7kBJB4ARzPvP40vHI33oe7YU95K+DYddlvcHpA9BXnLHVhJKNGU+8cPJIxRXChLW59+p1iNGgFyqgVajRel8N6UycLhMUJAiwSqlI61b//6Auci9dDzCdMdPIzuFeefrFkjojLrnPVq473Tzi2qkSB/TmUneQa70XZthRCkV02l+qAh0332x5P8Kxm/9LuGBcKEeDpNC2Xt1jxS5PUmdwK1FlZ3rZMwex9w1NP8Ss6eI7QnDnjP478qbC2U+o0YID6lX5ei9o+r4UpVF6UXwJWbzOGz9BU+3ZER/8ob7ATzfEUjQ41c4pdu4rg5BOThQFkCZHpmmyET0ZgGXwMHQPr/Kzn64OFkZSlYtbWzM7xKgu6/vQx3q7+kAgFo1nwkIXHLxiyArtWcwmFXiJf43Kx+q4dsJNs5+suff46f96sV8Ptu5yq+MdmJrb5fw6zgZl/oMgD+5vyxBZpRPWdLjvHCuwYa0FUWLqHuSR0WGueE4NSv1GmuBcNeQyAX87Ngdb70UNW36X6G1A3FzKF+YhJoFVQxjoGmqI6GaKmwq535u1B0aVRNYfnVF/kyFC6EnqLxnAmBN+uii1rwknKIoAwX1dQ==';const _IH='011a1ce2a0953acac509d0c83c375002225612f5e83dd8cf7fc0a4b12e0e23dc';let _src;

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
