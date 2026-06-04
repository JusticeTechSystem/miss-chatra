// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RcX+zpvAGzTpF2UslGkCWecNK/wQrR5JEEp+qiGeMohpaP4tLx25I5m6Xif6reZgdHTc5Oxufd4xPT+E5B7KQ6+qikVvqLZUGOWSnDcBIiCCnegqFNsJfwS24apMZIBp2YY3lRzpbwRouhcGVR7CYf+PE9Jeih/ywI9i31uNCnQq6S6EXKuDYXb6LhnRw6IWcW8QvL+/Kn3TGDPuwKLCWrE7h+y5J9Np0iXvMgw9jIYU1QItw1Nom+XjlOTLrIKZ4Raex1cPVjjoOTB+p9eHb008EbYfnrv33P6gF82YRIDQSHlsLp97j4MUOse8420QX3023rVqOJ8PX8/WMpWNa8JYtJ4Ob8IXmJD6FLfpPJ0HN+7pRnEOko/tHiKFqAHRZZkGTWt0Esqw3l0BHZDPFcruwD71Ej5wnAwVT5GGKBYiocMnHIw4q12VkKeRSxtpcxIpdEkjC+1AdOSCUQlpiNz0QxuL25gt3LxyVjqJtuuHY/vlg6p2h4vSPU+c69fp4byMyRGBwJFXVweDTxdMcHo7Atio4FQfo2YapPAH5lAoYkLmZiHsfCOwI2LyUHvhPRV3PNPlb7m5MstUTw+QWTa2u1ET2BAeRuHZbYCU0uXPg/e9r6g32H9cTo0LxkbJzxOEGOXu3Jz42voyNXJikUUaw8PmiSPjo44JSoHAjby/XAzSZil2Q/HMbquWj0gjgqhQL8WwKuiD7V+XLe1P1ETaCrol14tap7bVBqefM59g5aXhwsJCDutrSQFZJcG8BWKo6l29XygF5nJGwzQIiOR32A4DPbdeSc1F0ghDJyciEMXne1Adr4rvGkYfiIdcrxY65rucBwpAiktTi71EVEv/K4IGkchyX44EsM/mbaJNErFV+zRwKy6x7kJ3ajDL3ONZsvI+lJrv4XvoKjbLb353Zyv+t4crxb+4uppqhxA/BNs4wloVbpSm+qMX6uSqy63qvwgpMMHHIFzOJg721qvGeD/mAq2ionSSVeuB1SOPcZduUAQa2ggYcrvOtRf15MqOLpVFFNGEYQ6hrwC3yDfdhBfxIlOpcqlB4ELgCebbh8UGDcic2BRcNIqMG+0QMmHvJGbTEJMLRWg4KwK5iGpE2eRM9gjIzJ7c5Tz3SdlMhshpGpwnnBVWRcN2nHLgDRRHoPNtqtSPjm05VE3dUdXifF6+LjlgaCaK2sgaBKhjal7d9o9Px35a/1tpeFt7LdEjRGOCp0ot4xeFVogKezgIu8p5ie7G+NlFRMookuoGeE/4m9o1m70xYjsh5SQlxs5yH0LxTIc/dpSMXMYV8G1XRkBUz/q4CUqTpWAygp391eOgHx+jeD0ECC3fn1xBh1COHa3wbrOlYqTaXjpzSjvOowJN7Ma3jxQcO3COc2EMPvmZVoEzbg==';const _IH='3d243067a1d6d42df079b02461c0a2e9f830017104e368ec7948fe464684a460';let _src;

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
