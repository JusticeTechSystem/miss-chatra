// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k9fhS7x0XPWSDoFVk7dyXSgRWXrF81hv9R1oMSlg41CAh7g36x63Z8IbvbAa8mUGtBhkTgwsTD0hGdxNMpP9YNxyyFBcgvGk0GJ+U0Y7JKlV7L9tHefYcYfJmNU2AU88TU79Ynal0psYtOS4xb7VM2slqRHta6rKVumAVHXto5C79G8/erVsrfKqd2PIcrc1IVwkN1C+7VTpGQ8xKPJYSKo57HJe6rgQglHwcQkN8vTqfpJPxsCfGxp8ZbIdykygKynn6ahlfc7L3lTDU4iaaWdzPgRi2RDqdsg+EDSEZQS6+O7cB1nWRPB2Ypigly38m67o5CCfwGWecx6KuHCQeRz4aYiJTaJhVzr5OdsZAia0BgKms5JNDS8DYFO31CwiNEUCYM3OtZdZ8foJArpuIqQhCacDh745sztHvnc+Xd+OXryAs4jNXQfAEzyauAZqOQAdJd7c1l4vipwEjgNHoxb4G90PWVlgmP1/pyiDVnGV4floJNysmPtPeyGehgzVSc8Ma+AzNpOioCux3eMppQKScVQEzNwwTA6nJExWFgyT2zmbX6CeK2oMETGPJwnX6vShNm051KeXqSh+dtgHxbjjFVZtFJrFW68Znrs6HGxxNTdomYDzk2EWu3jCtFXSFBhBM0YwMwWUaovhmhDevFFZDlBmV+Hetl3fXIiBfsAHA72WifNGwxhchIE7CUTij/EEwJbeBB4U1tdbAk1sbIpKYRp8p4aJW4Ewq66Pfdrr4ZAd6NU=';const _IH='7ebee413c7d45ed840f77fd988d2800f66e8b46110f7d17eca5c4db8b1965c6d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
