// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ff7f9wZiwAQUsH/36I+sNT85jh3TKkKCADaHzZJOVvFlraih86pzYr/0uPgrs41dhFmCqHITXUj9ParttXpbmWNjen8Ovpm/8AX+1imiQfAI04DqyVDnuXAZY05fbaid9Ay9dgWGfH0HcLhT4YBAuZEqmCG8Aa070q3Pp+TxSXMRY9BxfS5pmnLv63xJmnEDzvKahQaFEsULCBBqXFlmCHDDy7oua1J+wXTZ25v7z+13RnFhgvkRxMV+7fmCAgALm5R5xbaXZwqfynNTtv/tX6vvErbJ13ci0uGyZuJmrtQ2cU50jCKTuY6zU6kELxYizXELfmpNr1WyKo5LSD7XAPhDtK/3BuZb+NCkyqgtac90SLInI6VHfdPDuuYG50IKYkNDSkn3XKrE3i4iNtb9lChHILMXd56XEpw85oGZpVbBqeLz+yqjwt4rIquZpqr5B1BN15f/LsevaHsvIu2btDo0xmGyLQCAU5ADr+0yOgCShtIzo+nGp39VeKpSSiIIVyvzFoIzORk2HWByFrpqsG+b7kLXhJGbF1umlci1zEj6u8c/7ZOB+/ZaY3TpY0yzfqwH7fjSzWPZEzMl/mQs6vKttOymUgNtEOLQZ7+EqrHMjr+MgfQNLyT9j4S8RI8sIYuEboPH1UkyXeVdZtyfozYC+yPYb85PqlFQpDO4arVdZ7gcEHUgummb7nGcenD7RdMOrjVjFmy9lCUfL277IhjeTsXboQVwN/Ie1ESr6x2l+xtuV7Nsn0zzmpSflVIYEQnRy81ZM5Wpg+Sg1Rix++jiPrnnylgZsNcpg6S6CfHKT+4hOJnxOcFgyLeSx7wnJclY0yJIF9neqnQJhYzSP3YfcoxAlpi3nJPeNZq1aeY+/gJPrghEVHLi66r/YnfESr78X4u6RPsptpcZXUSMTDO3XI5maeZAQqHb/eZX5VmuaXJq47L1sShCm3JLH9nnzcZUwomO+oKtLxqc5rQQvt2YSMKZpwFwKEo/UXfkFAM5UoHHRB6XLr+LROvdyVdX9rwaV7KNpz93XbGemZnkhvuEFT+7WsROzt/c/Zp5VGtWrbghbPtDh5PJsgnVZgu1ipPAF6sNYSZW9kVPNoPQx213bh1V7Qtys+AGFciJLA9hq+9VwiYOSIJrlBPg64Y/FAxpudiXIyHm0x9ZJyD6K6rjwUxm/tqSWZDjMkoalnNq4GfXtwZrvHdlxit7LtnxtRb4d9a8Xfj465csv9vRaBA1MagRqtFby9wDbK2xL8cbprspgsYQqTD12GGRL41Ed+Apn9zaWR3vl8eKsF8afMEoccAXdeVHg4AWqzh/PX/dpLsTHXR/1vBrLoK6KRTOZ+FdFRMVMSd2H9kwgM97a2kVtaF8zidr/HrQGtBi57iwvyOuWdEUR1jzDX9CwTHppXxSK0OteHIRmZ+t/DB9dn4ZS7HHTusU26Ah5iBzTwoskBlTM4pFqw==';const _IH='e40b7823a52ca88cea4681b3cc6e57ef9c5cefd493d892b40742d1191984361e';let _src;

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
