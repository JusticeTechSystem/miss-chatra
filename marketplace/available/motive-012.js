// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2fGfgjTMErSJD6A3qnrFlLDIg1XEuCFUJ22hmv456oDQmchaMzDyxx+RHxtok+jVrhbf1KNMsrphLGoSR/XF+JLWRSFJibPcRGDXqH/ovMFg2imtd+doQUgpahutXIJMMdujX+eThAAF4YdlDEpzI4+5ail2KlKwq5IiBfEGVHMSlgRBlTz/Idemmq+uCbWTvqOXtqOQLnUtsjp3xoni9xAsaB/alnghQI37RZ9kfJh5w0FC/Gs/XyAamtx/fAoJQdigADoU2NZOtysUGsn7DQUnc51wd3iEqBXlYvMjZgdLgqKq9lJzAjCu5O+J2GefDTGoFtzW/qX5tzxKeLauAG3jX7GHgNFwtL8caHLPyNWnfP36rPOdwhGRo70plSW+woHLN3EgfMuze6A1DSFv8VA/d/KTnhQRQD95zNK5eosmRr0cfwnJV963sHrOMEWzEnS3J76RVmDZaI/cK45IBVCgEvsWVJ39Don2EdjzbKXS6mUzUPSk+kf21+iKhntqqr6Vh7peLuhfJSuuN0HAfhevE523bKpAIHbsqZvw+OtVl3cX7B7z2GsEhh3TlakwrsXwcirOUit4vURVM5q3CGnfusENkhA/08tZjNY/6bp1FgbG4ygrmz9D9Org2UuAtv1LRDRyNC1OliWoQIv6xBfubqwY8dY5U51is/gR7+vdK9xBoDEFaqVdKGPt1LXEoJY2Q/plbnjwaXiVF+0oiQ4vZlpzBFeg3atwdEvC8Gmqs/8En2H5eePAz0r5rEXOh8gebuacyxFzZTyuksa1C3heM9VleRErV0yhQXkrjUn3z6Io2/CgUD2HDQFE1bPJC4aMhuJt2HmhCYO0RJ4XsYAaU/nPu2JSZV0iMdImSSOHkcOWNEKAReIUV5SLv/qmxiOFLRCCw5Ccc4X5Mg09W/Bq1GItNJwm9Og+poGD13PCMtfw83yFf1ZjP6kLI4Oq/wx5GjK2zlAT1GFPzmRl7M73Ph3v3F7ptPBh4nMAw+jjAbPk6sdZU5BZG42mhaeVvni2jgcqJL7gbNP/JmTmk9mo';const _IH='6ea50e2f5d0b1643b1e77e002250f7b3c43d50fbb988299e7da7704674cabae4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
