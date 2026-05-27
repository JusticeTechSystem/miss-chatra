// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cx55DLae6qqIv4R7HsZ539pUj/rAJCSUhoSvzG/5fHoaOc2zbIEz+h3LAhZe321xUQlGaGSOM7tTYctgLa5Qi3JFUTMlZa38TFuKVGvwAKbn2olHFkAGgedVTT8nmYhpGqinNM7fbxpdunPixFkisbGCNEoJ0qINP5Yki8Hvs+fVQxbZCEOzz65xZE93qUooCl2VZIQPdrb1ABClAZmvrh7dOFgy/caAsNW4EsWEn8oBA9uwyxsSwmphsD5wzFrFc6C0wkTiKeoNV6uedeHH1FcH8J728+ISYHVO28O6x33LiAhYMrZJNzGfu6dYlqBV3kuYWrL1Y3YNZh7359+xnCU5GguouckCmsOneYlxL5P0wg5d9qZ2ga0xCiRRD2YGmjZDN6wIFVO9KJP23l/SrSDriKjq4/iWh8SUC6Tsf7SRij1AQSOsKD1Nq8/Rvu0PMo6jhevQbjkqaEUYn0NeSfVEWtTFSSnqhu6zmHF3Il1ByGQb8sbHexMR9PQ5kP3mPPgA0d7lf6M1QeZn6HMWbhnomBzqjMoHqvzUN/A50gW+iWUFH0U3ECO4nQUkLrSXjHcik+kFtgQtDd+Ex59qkPmp9jJLip7k2VFFORoKJCqb0omZA394pcDFEi/Ldc3exYUIT103xrq5lMFvqWrPm/xI2oQjLyf5UFGkGP6AlCEEzhtI9CFHkxDcUDk5pf2toe1Q6QJfRnORkHF6vCiyuJH4s3v0Oon44Z94SPY=';const _IH='5bbdb02295aca9a58275ebc32d23e8fe812797481769d9baa9c20ae7fc0fb942';let _src;

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
