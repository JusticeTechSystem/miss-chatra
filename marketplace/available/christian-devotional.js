// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5udfLz2ThpTvxUPPCyfVsGpCYt7Ou5fGVoee3ca9YtN2bO1I76tg7qlTcb55YHKvopn85Xjt5UbzZUnMVtokiVfoW4Sjgifzbuq5c014ZXj9uHHpmruDxqj9T4bPwIXy/thcDY8HzB1upVoyoRow9b+mNO5eDMImRIuG8HxkCpZPcARRoVmr1IjcISaSeDJjuV0VHyyKIq0EFP4ffOk7lO+ufqfG8bpjcNJYjzQge6aJxD+MV6aw4y9yPQGH7zzAJeOnXIol891vG5sdc0DljRNR+H0MbfugrCUu2r9pkMeWJAbQwydR+i0Hep5k8mC+hHqvgiMAOXqJ/b0O02lNhGJ5EB1RmORGrPf6RunPTJ3SZyJCYEDzET9l4JxGnKOoS0mMVap2q5ryO3tsSnZA4+Dms7Hv637hmW4g7878ITzgNpqcooNvg1u3Mv9iveQb3HNiVv87OAcze5qkIQ6pPxs33+fggRdKT7/wM1BN3HxjxYwCrlAItoibjLd16nmzQ0hKKUkUXg==';const _IH='6363f8b7ae98a6ffab778cbc19b3a12306de533e01220711c6b64dee1db99260';let _src;

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
