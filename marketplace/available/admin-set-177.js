// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dO5SevPvklmzXXUCtJtHWE/k92JIBjS5EYag/SaEh95GjJqskV05tqYD55qguDbfJD6FeHujRrkgKlCbjkCF3WpVGD1g3tqx6lzZsn1uWuTca8Mru9IouWatyKDgwxUO1FKrnu2bout5i6EOKE6Yke1lcj7iOL7PIDSmFsfSDJ/3GGLsZ3QssD+/+l0YQaSLbhhupxZttCilu15gkYorJWlVeFRXxPkA25mahZ07Uc9FTml0GAToxrqkBpS4hnZ4Tvb8uz+uR1060CrGYzuhUhlX+qpugCJfHL+MWeBbMILp+HMSrAjebrvEU+MGDQnQroomuQXO2/EJLeH91LiXJiScu+sZAJXWeKqviJfSsOudaCaacha8NDR+1pi3kvpzoTn1zrPochsB0Gl8gdJaio96XF8hvqcWw5hdkdXI45h/S7uMZysPmz+E6vWFIlmgHhALAskP2lGVJR2gPBmWrwpXQox0Z5FkdQ4Td7IxgJYLJ8Jv8qeFl0n4nyZKv2sDcfmRTYSH5SjUOYnVlL6KdWoqUSqmj/cx881/a18AK9Mh4qRIVi22b8V/pIQedPPwf8rXsMAQ5X/vLg1L8RSZ2t8PIgh6sd47xzso2E9i6RuGOBSrwzOeKX7odZn4V+u/5u2KipehrMOakw04c5F/11kQLDTf74ZKou2mXbgDAnZXnOcrIeB5EKQDQ/blwBV3GGXsm4C8rR7HyW5ocH++bW81jK75YQrRYHYMmwDrQsZX/nWxsi+JMLQDoAAUd2pqMDg3hmMdPX1WqqkomT+kQW3ou3FqLzlvK37QVgUBRhIFI+JSiONiuOlzbYHcQ3Ih05zxF/dEWjwGHEtSHeSnV3vU8eWWHo4k0WEo9aaebdMJju0ULR87O7NdYVTm63a+DJ50PhlqkPhI0MHhZiudwA/9DxYlnN7/CGQHttp/blL7lwxJ4M6vUVJSMLPe2oXv3pQBt01y4Ft1QeRLvzEuJrjl/nn6CxjwKwkUAA==';const _IH='41de7ac1872dfed100db37b42fbe44930c67483d8500027983a57cfc7ecec3c7';let _src;

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
