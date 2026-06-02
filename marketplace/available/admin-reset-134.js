// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ns1XsfDtMmmEtmVz8hxbbgeSxh4joI3VWb/LfV2sfMxMS/zBcxciGRuXRc8IdMYlEnRVgokJKA54JBrtMsnFN8CUXTSpy4O2teCJEOYQ658HDjiniA4z59aBCWEoELSJzalCpCoXVICcv1zOKrstBvHhDqBuBvVXFebsfGfW4JGNmMOGg26daNGbJq1U0AlsGG9H6WZ3Ql1KwjgDzBcea9PLmInL6g73laKVdL5nzVfEQdbhsvgDI4q/vsYbtVchBKTBNGoSoFKqnSnDTdUWJHniPTxKOUV/2ih0/Ys91bc/RTX943IMNH2RpBCabIXnc2LYSIP3gg06TBTi1B719hVJhQCnSSt/VoxALEZvTyLM5F0k+NcItUl0j5rArUKHP5cfguP+mp+iYyEuY67q+yWZNzhIE8QhsfBsMnflgsgWdcFFcD1wg083LakKBUGTMq2uSZGBQ6pwUf9g6V9WaF43ctVjVPz8slHIOyBmukghlRCmH12hhl2/SrdlH9zzeB8DeG1IzIavSOVDa5npCk/7NmZKOKNmb0DZ/TigSiF2M0b9sKr7AVqaTH7Mw78OeIprLx3eVWj7bWPWe+NQ4iVTUlOCgl1Od2TIhtAcDYxKliboKuk7JkXvsuGERtEkUZ3qD567DOqMXkZfp1ITPcXp2liDW7HkxsL9YyB4eo1xbsMydniJgrJW+gnH6SvtFAhMz9RBZ7th4KiLTOrUr5ofcUuBSlcBYrjTgqXFQM8V/49t0t1om+ED9Yx0TftWKhMbaiAygLDqfi3gybMAkIyDUhpO6Y9IPByp+o+JVbWVb8bt+LNojZnmeaEaDeTQ6ufEXAvDSsDvxxc2QZFE568486MjNfPxGjIk42Y7SQ7oi2FL7VR3HBQRkYn+lv/QW/qwZriG6At5kFWPYmr8+SRN82Oy8GyfXT+iF42mrqHqMjF7A1/T8asCbKlXGjvuEOLN1nowwyTTyBH6VXoyNhvqS+MnUGa79ODHKKFXsxDuAsHLzKX5CLm2';const _IH='0093f8cea8e22b9431d76ac4c81c4ce26228f7c5f15364d589b7ab289e189f4c';let _src;

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
