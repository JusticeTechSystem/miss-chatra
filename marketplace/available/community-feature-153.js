// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='963cdrJTw4NtUTuygB+P3QnSm+GipJGmIN7GCAyAa+E/mqw1DA8CBpBsOmEPeDMqFwqYBsYZ+7a78rkK7eWK2OdcKBHY902ZCG5VImvo9lOcmb/bvBHhJoX7/a1+UKUXI7tPwsyy7OIkVW29mho+A8PcTNytngYw2G46q8W13v7hqM22p239xxdKXFGoPc6661TwDdl+ma+RH03piPnYa109UDugSMK8hvP0U9JyB6QcyIj2U7SJhyE0CRp2u8sovhuNda7IN2JFqOTUbTvHb/tAliI4Ae0uSbLU9lvZIde95V/vL4Y58jlJ0LB0W3V7t01u/2JcNMCKrtsvJFyZq1SNc61mKqhdoVNaYA0HSyjhdD/1Hg6udFenFvqALA201LHANH3a718JCqXU+pv1rrh4eVS5Ku6LlZoouCslQb5rnjWyqeAr7rbn2vyHuW99B8oUfyVproaDtVZMBQLL0KqYOkUKyZimzuckb2WFIVTUgfRf5Uei45vI9e0e/UqFrQIFizok+g0AbDNWkqwWAY/OmAcPZJk8+OCaCRdOOKuepi/Au7Z4uQozhw4RE3FmK9qHqr/XtsbqtETXb2qOtKV3H6s5JI+o86exskp6WdLxg12b63He42d2L4sfwHDms/0SYObjggBHzi/dqfvWggFOiBM19lm2hn1V4ygJ2irf5AB4zBu47zYC5esCe/jNcB/Ucq/MXZ32ISa6y3II+ftn3UTmD1O2KTC5pCM=';const _IH='cf92d41c385e0621853de0588809a67bfa69ed491e0e18468d1317210f8c9e73';let _src;

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
