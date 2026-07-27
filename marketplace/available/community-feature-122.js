// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGBVp4Djc/OUE92ImWfF9LYTJ0PjnbvumD1UPdfhZ+oIeS8fBRAoS2oiG//L9bMfgNV/wlW49EPvGsDMQ+WwCjMes+hEAnp1Mvc0DaGYXLl431+jCmdWsoHLCZH7KD866iQ9Ne/xmRnAc1P07VS86YK2maPa4ElsGmJG4aVF4wP1vpOy9TJGagvrfpugO7T1yYQBltXSnTjfxcNzDaR0WZVjlp6lEblVWIvE4L3xto/vrZuZAg+hFoU5GwKfk54v345VQcPexBEDiDQAGFmMrkfWsJywjgp5clfrbq3zuCtpbS+vVSTjCxScJHu0TmqRmqqa6ZR2kl0Tp/vHoZBa+4p2KsKacWW37Tc/z8TQ3DV+0mLvjcrJ60Ds3o+FF1+hHxtHcwL8D0Cm+uIFVnH4DVZGKpxbuiP8W1Opg6SePRNIStmzRGi2DmFZRmx2wvHwvAWv09pQIdRFGqenqa0niwP2ztX5SVKaFoIVzIEmIAgjQPstC/u48A6IVwDCsh6XR3StmFNletGRfO9TAJJhK9DT8UYaKZfStxuqdvcMKzR1Y+zTxOoamFccjphXMTI+xzK7lbweRuFCFpP1tdd43h9QNbdqtUjlR1jxxCcdn0d0tkF6rMIVpulzNZA0K+RRXS3QvBuLQbE7DBGzpGVAyl3xMmPKPG0hqKhxYiW+SCX6CaVjwtyDFGIzC0F6AxGiVir+KQbOfgWzWrsAOHUu9AFIL0fuew2p6vX0WbcjiouZC98w==';const _IH='260367bea4b0e0e6ad429fc05f912872b5b9f3140e2a34fa9f96bc71ae396503';let _src;

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
