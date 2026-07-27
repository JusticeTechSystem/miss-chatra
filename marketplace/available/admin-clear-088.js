// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1/rLG4uzP5xC2NJ3ArWbS9R2n1xeBplKzM6GZVwhVgYnJ1iXTRXkc7VWEg63fymNHJFxvilo14iYnFs7Ygwz9qZwnOcYv0x9WjSrt8wlUrukpIqh3IckCLOiJTElrvBj8OdhRyGD5ujE648IYYDuHVvysLRT86I64rGycmPYoCm3X7nGkz1UD8NVU+KoKOwilPhdX5BN7ivfHxKquwvd2tyrPma7m+WJotWDCKmBaEGQ5wgdtn6cepH26hIcj6tn3YamjEpMXdtSA6eTJauCCsyaX5ulzae2aPOjFPCj6JHFqXdkrTkPduINW2OeOwaptE1HzVpHVm6n4WsuSI70Ft0OOibNT4W9hCwNbjR9uzIMGU+l2iPW6PfU1uti9h6cbFYHGRZ/bo30WAd1VL8TbDKfKldMWvudk6JWlH5UkFI/u8Nuid2YihmbCacKjyvGXV+t8kvmXJ3idvKb6U/BkA/iLNY0SuvijzjCf1Ro6eFxiNGnGugd3561AmUadIlVB1wbocmji07VwHDjdogfm6frRBS3ROvc/29XNDhf66M6G9pAosz9VN6wc2RzbrdwPikMCPlHweFqFaAT2SdJ0QDxqbFEKoCX7t8lx8qPegA37hft5NKa1ia7N9dnvXOI5fpyQy+BZixlGzjh35lkg6ApNe2u/Tx1nAQ9HOk1MYEKPyk9sO+tP4P/FlFGncw878be5Obf1mt/jCnDBKu/E7rCWin6yNl1dqA+9/qHyFHwAA1vCQiJL8qSLcKOx/nivguGFApVuo/agOxuQ3NDkHuGyAZcIkfxiLqOb2HRj62NyoNwL+NWw88IWulsyzw7MYdRWj8h5pPQ5dRD41vgMSjp8vSoMp+SxP6uzsCX8iDGyU9UgOBC3iw07nm/qiZa5h+PwyEcGvj/j3CIIHGK8igxOcpLFyl9fmLvs/5ev3dutRmttDvF3zsNE1ZZxOEpE+iHmxHZJBgAuAx1dqYdkOHpPErhpN++Z1WiZrmsJ8H0HMgEUTA==';const _IH='04ffa4d0f9b2ca23f588c8ff0e12953b77212a5fc0e0e6cf2c242f32d1476fad';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
