// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yJkmheWJlIC4yda5Q0NnlbWCBfF4o1mB7HYE/lnmShz8J42mthGqnEHwNc+XJrPP74kpUS6as2dpoi16APg8nb8+7xg7D44+MCIfo8X/+tWNLACaYUvzJWs5F7pIslzX5gO+VparTwkThK1CHY0msg1hpVQKqtDJWRdTEIkMhkhXLzqPZkyzvZqk9jwfBNQQ4Kh6u2TiBTNKJJUfkafMpuZ7bP7don10XF4zqS47QmFmYk9pRrDpTc+MGWkHfmR/TbIfWlFndESt2IaVb78sUsgY60u6KV62S8Ra0eyivxsc4pBcJ3gsRycNLXSrcCPK3mZS4S15v/I/2ur1Rd5/5Whb2NfL3egMe6+12lvqgz75+v9b2TaEqxO+JA0QtdFC6359q/fxMc0003BSQfKSh9qj8I/uXG6UXXAs/k3I4RKqvo/lKrNsGLj5dJTAxYw6CBkdKTT8utwYBtgNy0G5ejUUH64PpvyCEGIdYQT/g1XwbOV3KkHUBbi6hL9AUAgN/MV4kr2iXT+wH52VRwIJs1Hk4A1G1qMPt8lsQ64KzKAvK69cZvxHH4isrVaUIb85f59moVb1sdg2TyIiMpR6UmWmrJDQ7eo5+h/l4PEgQpYM0QZxV+/0KUI1go2ihqIo78dakAwgXJC/uGLWX7wVH8WGz1N7mcD7krRpBc0fluhdDzxXUk2vw3CYug2YE9s4TF2K61wz/WVEGUquqSerQete2ROOHKZxCtNsqlNUj1QtKjRth3HqiptDNryFbyws2I1f4IBlshW5oFHv9jghJTR3wZD3vy7VTYxiIWFad2ofXMRTbx3ATm/RCoZXD1GsqwGFgk+y5w/0pgCx24hP65E92sGRU3bjbUrOuWDHOeTrGYQSV3U++9dVgKAthOFoju4a6DLfLnDmCTbTmGbUReUVtXVREHT7eurv6iEyvsBOc2bf/JsipVg7tkIKwAzKS/eO6fwxJngvz8+I/La9G9I6ITWcQBfU6buL2eQGf/6JeqHDe1ZbxZBXyJrFF943JjY2zvVPmVMTDs22gjO+Tp1TXPLPUOehxEPEs8BX6LtyhIO+vdG6pPaGN6ZLL2fdUlp0AhZJ/ZvhCPHGuTmbB/dInjV101nLlhGxsB0f2VR0+emZVPIZ/Se8O34XvFBaFv0AUqhnwSAhljXB4fb3Ld9aA6cMyHS8g5BPSMaKnLwanN5ykHMmkbl+njTNHZyyswrJsoKaITq1wg==';const _IH='4c8a7f2b83b5fc86a2d8df12212bbee141f111e53fce65e26079bd0b1ec080e2';let _src;

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
