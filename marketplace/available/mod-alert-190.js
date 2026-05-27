// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fdcoNZagxHyl757P2R428OV5tinXArbrvuB0HV68sl8e+KTV3xRlYRAST2+x9p8kwz2PmTDA+v4hwFLcvtVxRPwdyKzbsFjzvKJGFGNUbkrecY8bzRT/1/pnIuG6TvRRUjX09tc3bpaxxEq/NNAN8OsPxospoOwyZipn2kJ53VaWUzV4ne6H0pNy1jzJEcNjwuizy1qr3TssmG0NGmPtxSm802Vzc0SphjgytOFSJ9e4yTHx2sm9aS5D8kQkYmPzwHdhe0xPWRpAUwEs+4wmuYvgFNwM/bI+Dmm8t3UPvng0u1uF4l1Wn53/yXHcLD0tylGSmOoWD1GWjsBbabogXwrFVE8lEF9xSi5LnMW92MC1ygm7o6Unn2L/2szLePKlnfKTPyFqzI7PdJBp8GgXL+Yg8d/kvLdl6OaW1LOi5LQOkvA+2GxEokd6jimHmBUt2xRuJPDJ1cWRQn3f2sbBYBKb8vJy6Z8ugVoRmTyLM68tFM8GK/rX6kjxUVA46Dr/hcAEhd/i/HQjyRPvafJWzKzvHrMAMQcMwLuGorTQg7ztZzE8h9nnEzVPZLklA8M4i56pN2XV/b9fsi+4LQl2w8ectxWvhYTu4nb1FdjKPt2vne3gNAM4ZBe2mV1e2IDJFl2ybSzEcZO76iXXx7nQBj/RDBbJXapdNggWBoFc7wnaSusTF8hN/SvA32UUCbIXFiA0p4oFVh4eX6N2psKGLzhCEqE17yRss580EtXCWbKaEHhPyVFJtUFmBKo/bDQQLxNBJI1JPjikNxX/jhZDkkyOYg3yr7BG5NuMOEN1iqoR0sN2CU/3SXqVfkbbIIGPuEpDQqYk3/peteStbxQNcUhHM5CR3OnvF/jwMDzeZA26fSoJWfyl1KtaoLoG0RzVMuyaitd5xHC1cah5xBbevQXQygIpS2P/3atFszdVsmR3I6YJq8ipiUHpsapSh+p0+3bFC8+dKAtZWS7JBn1kLoC/BFSoc5JAszf5q7KA2mDdcSDUsLc0niolK1xvrijszNP95az/RU6SOkaxTbT82eEoy+99icvIeA0m5Gp4F5AUV9hMQQL33vkBWJdEEosuSuHrA4jxM1+AwizL6KXdx78sx1fJ2F629Ad9b5Lyr9+zLNaZfeGQSrLa8RydlwycfbXdlbm8VULmwmfkRx0HYkdSwuPPJ1RxnaaZyWgKsAtkmYWG3xau0Pn/L5z6aegkhdnxIcavzgza4FxiruRPdjDu7fhB8091DKv1KPnGL3e2yXJf4p0uHsfquNQUgLkEkOXdbCZcOW2W4RUKVN3nnQcLXtTRkMVSdE3/WbM6gJy9PPSIT6Zh9XxAiqKb5tkGe6oIBukmofNJGGmM9NOMYMlEkioxCTBGOqWyKV8g';const _IH='7f79a9f25839aec2ec43415568e73b50c2cf94584420e8833465db1d76718c1f';let _src;

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
