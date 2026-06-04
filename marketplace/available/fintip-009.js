// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PGDzN5HtvT2M8tlEmx3iSokKwD0XpV/QGgL5xGDyHO5eUDpny+ZvDHM1CC7dbfiMT9F23IzRwA2lAP4AO323BVdX2yzL3+Lgn46RNFBlqZVhTJEY/Ec1yJ+cLRICIlnkfg1E1l77LBqIR2tzSNX1CTd0lU7wAg7t2fuG4u794kJPApfRtFoxdh6jo+TYRQEPQOvjQ+XM8/ickUcTxZ6glnw8f/4v1Z2Aa515J4fECSwF3gTQE5RGqzdQ8902N1974Lc+1SibHETlI7YXucqMCu33GxL0VkFyFTY9V67KKi4bN1reXXPgbW9o5gwCxm7gJkSHCJ25jKxc5XKIfMvluCi0EdiMUEeSolYb5cfGDhBcuJIFjReYhnBFOLmxnYK/GV+VD/7OmbRCDWm4ULiuwq+7PuAT2LhaaYRUT42tda/xghrdkj9db4dxeBWxUe4LWHsjhlTe7COplB2/iqJPJ2r+WGXH1COqXZ3MD4Fj/dV7RHjGccvI6rEUiGzHipyCZ6rgBvn8Mz3H2aXAltUaWeqiDPuVNqf/6VJkhNQMlEnTd6WI5PekgVLMwd+E1HqW/6JXLPTOIfLGJwkX3vLQ5chuoZSdUhr9OJ9AgT5H0MQdkR3ofhH6n8nvo+pnOluok8frojgqVtLoL8eVomH7+NQlFCv34STX2tI9RWfk9UKLWzk+9N9yIerpOMjuC/dB2MtsQ5Pdx1CO8jrmKTTejkmPiF8VXFD2v9e/okEsgNgkMchHchyYJKwaIWmuhHAH3tbh39TYPhOQYOjtkvNePn9akLw7OQz2jzA8aRoOUupAkZD4OJqyDLBVO6Hxfbdesg6Z74YulJNMAZ/RGzzIwv3/xM+WEH7AZ1alzef19v3W38pfismUUoDqwaVGDx5eOEgJ7YbpPTK2SHgbg2CAR+WLKfqfrYvWZNUVWncXoDKJWfL3csQI7z8g8VZZrdhgfQqRjPkkbfvBQohOuIRRfLvq8kGr/6CcpAcUSQ2wVNJ4kC/6UhiKsJ721PdF21V2LuFnbNBp6SPo4QeztyPGJbwIdee4ufPxi/uZ7yo6';const _IH='fd488d4d7d7e61b146ebd74a369b08a8a0edb055e1d725061a882cdd2062d70b';let _src;

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
