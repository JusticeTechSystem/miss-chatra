// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ysrql/KiM8MXMUvORNmjpPfcXEOUAgEnQ9V06k19ImS7zBZUbGfo5jA740VJrULQdnCnux4F/QFnDPPn0fft9lBNOKpCMmA2smW8KCtGQhrfON1htltpL86Tq90FmlccT+3KhDxGBX32FhucI04oFJpb2MDfAwY7Edo1MzYeGKpTJ1vT5cYlekyJGXAjjdCTDrYaBOpX9UP62SG5Gm4pBph2uJpK9EoJANjk8otItgrO2MOp+gNIan/hnb8vlvKn9Bhn9GOr79hzw2BvT9nyDYDa0TutbvyMVeUM1RJhWVVWcciWc3VFmyUKLv0389fQAmE3D1ImJKBH9hJOgWGtmAF17F84aocZhDnI07sAMd2Inkv+9bOU/Mlnd0Olcb06Q/qlgUxDQR0kVRNp39CXQxeLaT+4NnxyQpLvt+qz0wKLwy6qir6THum/dRTmuKjO2Yre+Kk+jfY45RiibfTIAHCi8jAO/Hmu1KCPfjp51Y27cR+9ZIKjnFAGAF0iK8p9vs+/PnK4XhDnx/EGFJmErERHMqbcOQn6c/70h3bXv3R6kLX28JikHuXIxoEovzCnody3bi2XoW+KR7+LKrJTMx6Ag6l4YLkTeGsCJV2h0moyJoYhCehLEIDKR122lC68cM43900M3nEzqV8Gw5d8OW5ZynxJTQmMOJU+rhTG92ILtbodQEe0zc8gMoviwNb09aCcABCST1SCfYYlhQSxyg/2zrkdmeToLNMf4gBOLtVXUY7MG9x+rjMiQJsnMcWdWnO9ZZf/oq90E5TFbeR9DsV2+vfQ4WY4hU3kcuIgvjU1uYNor8fNen5H4GJ0nnxWS9BdfQKxsxrSxbbEJ/ONDeR2IkWsrWq6PNmdfU5dsR8ZG8zY4vZ1V5mcYkZW34xjfypDBS8w3eP7kRi7SAp36dwINhBlIsYam3VGmSLR1fEVZnAUreFakrNiYdfE2xaeFdn3tEn14YcgIgi1AIK4sPMRP/INwoSnbMto8finKqLAvA3CjyfBcAdx5Wt6Vbb1zKxIQ6QUZllsnoVrpP+MUwh7dYEK++10FIe7P0N/1tPdsXoEuI4Kc6gYSq44D2PgkeVVKaLLfPhkjaVpFEQ=';const _IH='1692bb9fc98a8a9352ea1b4774ce5baa42f948ce2e92802eafe68708e5196aaf';let _src;

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
