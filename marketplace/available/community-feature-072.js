// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9zYM+TZwq8DG0TC283XZtEmms2hkuAtZBW4viCYKx6ITldeSWheZygxQdPtjO/3U8JLSREFi3RHmbb9x+Cy2P/+N512hrNj8P6FPRehcweBKJ1w4xRPAlV7PpaItGTD5ITcDL65WlxO3lHRLO8P7eiLF6V6H5tUWK8qNFQj3EtWdyvliQODn8IBgkt6bL5ozILLvzIZ5UZTu7EdAwptM7RSc2r+t0dXai0WjoIIecFtn95IiXxkTcPgVn/hz1tca+V1N1h1Eu4i5jnvSjIsJnSW+sDIdYa+M0s0L+rN0F7n9qnPgm6Ks7k4sYD1TkhlLm7cZJ84wygBMOgeo1DtxkCiEtv9PPwmdWgmtse45ZCH8FAi7MWzn3a5Zayi1SSX7ThRJ4XQO6HmraUBP85Fwbkqev5ss6XxSsXYo+TrN1/79Qz12kNDQ3hMB16uiJP4qeeOszWvMSo/RJbZTAgT2Iwq+6OvO81MkG3ElPl6vWmtHvHbcg8wYinpy+joxK++r6EqAoZxsQ8xsD+SRUgOdlAyIPxRLqaVoneBfi+VC+Npg2wbYQbS/MBSWmlT6ivAWq7gjP6/W+eLDLEKNu7wVyuB0R32aWKA1J8rqdRsZuqejuq5w85IhDVLlIesJuU7hKLIgF7Ffai//bWMAYfG6i9AdoR6Te7AYKwtmiMD8+1cMVfc6kh48AEJHoBdKzc1FgjGIfiMJC3PASyeRQniuQJ2xAKyVW7rK2HBxg9d/xw==';const _IH='fcee558950e5dd0879020e98ead53b9c0aa60aedec59b0bac88ca2f9e21233ff';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
