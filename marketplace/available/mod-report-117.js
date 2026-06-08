// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5etICdlBf4hpyIR/cu0356QYpNDswjMdRKL15PJnLetZJnMHJ3YiSW+PciTpaZ4BV63djUbFvmKFHv7iI+P57N5LdI4/2T04AhJ4Nzl7G985AlHYlohXuOenuRRrl3pnbvMoGeeHTF3NLigthID/6pzrKil5TnRWCKJGvhdl7jfq5BYrtX7a6ayuF2sl0QZSXS447aJR3wvgguoyTKsMoetXlegHwaScJ+cgvsFCTChIML7tL9Ofp9A7hqTA71Nr9GcmeYqyK53PgWYLxgO2QNj1K+KxpupMg8X2o1V6MHuimlMx4rBOBeSK4rmDOeXMmK8Au723hGtZWPa7k3uAWe4iULCcGlkKg2pt7fnNESJjPaf5st2gP37B7PkKJB65KBxycUYHM2zRFYGkG9Sy/jZyRJVP6AwLP90QDA9SsNOgtrxJjLDy8P9A2opv9rlwDH94oq7Gzo4qrB4gB/nBsEduP8NRhDaTb1+o8tjKKB9HSccz4CS1u1iUW5GPhPsx8S83aAHfluxi7fYvbXJkTIF7/JSOoKThhdcyA3gZ+sOJ8+k7WwohNJrF97vN8093p/e+uxuksnW34NYCGQRKkRof6QiEaQ9KeynlxrGAlUax4TeB451fHYMTGnuj8Duokjt8gEb1YQcfgd60eUd3ouKKZuxQdwGB9vsNLlfsn1RZVhEAKCvl1Km65QH3sWu39yNt/5A4ZWO7WLu07OZ01EUWBnaXWkiVPODF7FKgchdvRZarvnaQl5j8Bd/ueOqdeudoqZ1yIP3ZqJHiXQfFr/oSfzCP7MiDDAnIPlhmG4KroaIJ7cBfgEsbXzhcaYO6n7C7dbD1PNAPznKPhFvIFx5YSOUiesii2iwdQSCShM2rzeeNwax1BJLiSnXQrDMAgG/L89b8hP68binNK30VKtiaZ1iB6ocx0+f/t0VDWNeCMTuqMnuIc5Q3Eeq8gEs5Z2vT2P+nKOiNtAvHL5NeK7o18oSr9iqlB6YHCAJ5JroJBuQfjcreI9PTOPXSNAwIogzbtNX7eMuXRgfRrwAZ7mTzpEfIehXitbwfAwuuW8wW070SuCvGohb9QUL9GCrOlOHal5nO1KX+81w/ImSAVkbm77pyQZsT76P3TFws/hQttKqiOtecSUtTfHOhxdLxCnFuruyRTVNKfjKsLxGp4icjPNKk4Z6tnirBxf/t8Q7SOyl7Gyg3UB/pbr/zPyLGazRdo9K4063vS+OG2E+7kfzhTdh+HhJOKHNSlYFrNmQ+DX4cpPLCFGhA1FTWerqX7WgFTecFK09hnPqwsJqa/QVNMzhQyuMKda1DLOVjmHXwL7kwRDf3C15/y0XanhrHByTng5HJ4uQ25jNXn6/wsBm3HWu/78bMAPq48Uem1KqmP64BZyybYw==';const _IH='911e34c64a4f9dc06369c9e874924eaed56ca222b65f56d05f62e0ec9eb0071e';let _src;

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
