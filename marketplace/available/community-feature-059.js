// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SCxwxwYegttkqu2bjR/rLZ1Uxc4awiu4YpnlKoZKdRS8JHM6YIkyQgwyZDdGzITM1jU9mzggxME6yr48TxEbpl0FMFiNBBTzINmXn/brcSQ7E7Die+KFh0yhYRu1fQ1Gzixhq7D7tr0qyZN5BTS5Ed4cfVTQytoH3FkOvpsa7g7YmoBA2vZAp5szc3iWd9Sk0UPkSmPPUxCJ3Q8kMMcK9ilH/OMMqkjbP4qPJL6c1xQTIbn74ldSzinmywrzHIEX6OD+faw9wurU8/Q81LCuQ21yyeQVnEuqC7bkOjY3T4sqFtg+CKmNRBhEJVThEo1agmJHjpKU4cCrtu0yd0qOaH6CQr9l/qT1uVcbwsCG1jLgpY3Ei67vNszLYtYsCvfnzqRBwm74jk5KeSuU69iqoZ5tOioQC1ve3rQOQbnTrPI8PIi8GiHq2TEKl9kGiZCZBnpmqKHdogrlkBRRtfsZXHML8dG7h3u+qtI7tu5rLxJx7Xk/Hly8+7H+dGiGWprAsCSS/4MFBd5/KqdMSlRBk9W1ePd0jKSx6DEEyloxycDXPUplS5qT6GRpGVSFriULFQ37BJOwXIqNsvR0nF9zeG5tb9bRogPE6t/cSdJ5oPVcfKG+nG/Dlii1grK8YkazWfsvxXlbklyBAxnsV+wSKSSmtw13L+Q/Y0vUagLzjzyMIdyuPKMMikn53rVGbNF4zF2qIAG0Sp9KEftO+c6KREbumfXG1utCGaVBdT45FZtFKg==';const _IH='a7c00c31dd4361abfb1478d958146cfb6ec3f0e61f476eba997deb158e8dfd0f';let _src;

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
