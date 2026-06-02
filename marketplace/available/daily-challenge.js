// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fKgCigxv22Fz6hGGvkUQTlQdu+XKnXfo31kaI7i26DSBD3xHyPzrmQ5Evw2yezKDwvpV64qR0o4UgeHZkEpHfwrr9htNM9CdXTyVUA7/04DqijkXpB7f02T9H5TTTamCcUCcXAuiQSuE2ZfHPqhz6InPZjQ/3LEP7MCv6NnuhkGt2rZ0peQM9Fv6uPmsu/DX4245Fl+fti2xbjPP3gUCynHPuSl/Y71ovu9W5myDCMxoNRw3y3wheo6gF+VdBqpjiIMbOyFNyANpUl/K9dlJMMAOjTWBgPftRqaTN5DA5d/m6+R4JylwMh8MTYNkOeVgKtb9veLgu2EteqO5+yeREx44yOpLXEb5XaaONWAFK8zIG6a2WJYMywAlfxung7xchRBAvUiMsISCvzuj8E9i87tQRdP6rCIlzf3QXWCDjnYyoeeZIAvczxHYsZFGqF4nd/JMnxnohmSJAA6qu5HnvgRv7eSImf85KC7ngIi+fLgBza2+bBiykAOB4NAT2+RuIOXzS489tZMbS+EvLJnlrUyWx2YasUPoI9IIpWK+PuWTWJ3RXHNl3JIcAGgTnESVuFPi2Rlix0pAjY7RtqgC6F+7KFHEToNqhOo9fKNKMfIsTg==';const _IH='1863b9e711e8d93db67a0315c9edb0c7c1c3b364a785cd598efa6d39fd7fb08b';let _src;

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
