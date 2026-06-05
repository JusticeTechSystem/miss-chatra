// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CSd+LlVpNEggAsZvm9XK+klVNwi1l/9GqJRgsYdSwqi/CKcJQ1kwkuTPBOqJm5squMHCdN68CVYaS5VWbAytrsgOPxGDDhiUQXfa96nqbJfNnAL4bXNZIuTU5tNMR1NKnmufJ2tiOdbScPl6U5f2iOdfdl+E+3B1uphUc7UoLTuc/hbMojZ454S9LopbOMtnuXZob61Rilv45+mkNrGRq8jQdCsdOyrwKSby5iRrY/yhbIYe4Mv63i0HyiM+DyAtAQgCJQ4MF7eRt1bYONYvDcty+bILbNmR1OdmY47lSe5vSNoYfpSIKtEmyZ0/hxZk9cybk7XmqUmMJLiEMv4cXRaMfjsCb9tO1QlfwT4jbbPqZAqX1dh399Pf1MYaor1W0eA5V1DyhF4mmqXIdZYSfv5l+SivLldbRU4nWLLs07t0xhabPL8oNWB1tWN+X+zpbd6TQ2IXT5WUESe2cdxKfVLEkQl5lAf8yA/8Tt9/NR3Z0wher56R23molKRNYq1oV0krZ3Ve/WsjIHKV6ZqM0x9mZcVIaP/0DtiP4XdPbYpiOo3FM7uxYsCVmRFrHJrNbg9tuXy3CK0ZxCI8uP9amWP47i1zqG+L48vsZhEXI4nqpxNKiBONcR070SfbWQV9CQp4cEWNvuOJzQ9beOwakMk6/UTfGYnUV2IXJC1cJV+3bRn8jx/IBzCc0fQhH23eXR35y2PTCto9peKUfiYxtDAbitwwvQi4ZyT/twH7/83D9eSIzpNaX24OD/NF0I+2BjjNjhdJH04lu5Xw0AA5Se66Lkx0+ytEZNwlyahs18GlDKkfGGN8uzZLI1HNsolRylG5P4MY7vhHW3vZFU8pAr3H0yGPiS4t2LnY1dOYY/++uxmw67qYiOPaaJzBFlLjWG5Plz96jYXx9BMo6mGUcBmNDRrsdPnOggVTuYOQQi5R3RSwOMHkzW620/pcSlcmoMHQL572AD3bWSKFhB0FiYo7MMTBvY/HgVwNKcawCOI6kaEsu9uoiqoUiEnxkWMK6ceDkEabDvBP0lfeVwoHAKVRCnUu5mcecfqb8fvUbcmnQ1zs2q35XonRd+4RNmum26nBTbpOgXNo660DXTMNFG5GmvlTkTGmHIS+fUHq8aNmUzQg22ISMlV5fWPeZ5fF0h7/EXuE3b/EYpa9m6vX1avPdtiIo9TPge1AFwOsNth6vT2Fde5EM7vhWJ0LlFwlcqIWTtyK0s3l6yeuHEWDa+KxX5qVWzGjgV1tB802Vqd1/2awaNURhFDwBmJDD5g5KZTxMU4WmTQhLAW8tFVgkC6rH/I+dOy780ZfYnrlo/e5kewt+9IbBlLvBmlap+SkX1nDu1EEkteFQmNMdMbNVSRGnzRWhbMgiOxz8tKLtA==';const _IH='7c13054e63920c9d26d568921a09f69bf7387d367774b9377c01f256d21ce8d9';let _src;

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
