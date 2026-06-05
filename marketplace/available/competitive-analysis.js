// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g8oKFBXwuWmQVvhldm4AoshEyCH8+zctK0B1xkX4PNcdbyhOhzA2Vj8dXDQNVMfpcopODrAWaDSN3Am32Rt5I/07huOeTvq4aVENtGx85VkZIG3RkttR+ti48sOMoyVJyyq9JCoXSULvHHkJCUR7BLMsLdqD4pEEkxf7NTlBVGzHaz+/8wFMbRV48iLBNvi/oyGIqBfFQug6nJQ5ycwyJoXRfQ/xQbwCbmH6YeTO6H7fXaAf88UeGoaYny/AN7DphES/Cuc6bZ1A6cbEk30kGHO2jeI+0hSJckxEmmQ7btWZtB9VsJexgE5h7U7QDp/3PpQX9z6Z2xtFknRX46SXhoil++5qhDAR8K3kStbnPu4b2Lw1TX4RYBsdFREB5wIHu7rukYu+1IDaeyDmcPJNMxXp8apqcOGAdKL28FYZhfJF6l4p3ZcFVZHumA4qySY3FB9Fl+zeix5S8TcIfi0a6MN7vfaRXPsp4PkKO0gCFnRxZzLsqt2XfCmbMJNtSP38VsgY7izwifI8RoF69BToy6GAQgCwEbWSPjBUTl+H/WO5iVQjuQKq+dooyWy++mIdqdI3PuKgQNCwtJs+5bK5i8OK9vcO4iWrsy35uLyBBX8hAdn+oyuTQiOBfIEEYSizqeLeOjYq2gHi/S6ISXhNvdyvUxcnY0NUV70jj8XGG+AQmqlcRkaMnUtDlojonJrsAMZ7sWGI605b2Ie2Ww6nhN7KGJjFdBqFTxVE+BVqeXOvdLYQjSEIceQMHPyYQtAhrYagIk8RRzSYB/SxLphdGIyYZt65Ukwjc58VTgSKPnGVI2tho2Oe/A4QMhoNZVpGiZ0RcUpQ0njjlCjrNCcEAGlKFpFggrlloKDALa7cB+MhIoFDdGUjwQba7fXH2LVM3D3AJ6qNU32hzwSJ3c2sdTcPPRWu3VA4YFabdTJFE5HMBkiTT+6U6oOX84vkzbbrUrnLf5qBSwLGiIcAqnyHC7jhkt60XnJiBFDkWZ3Rd8GQN/19gyrKnbOA1HDI6Hb6Rri4dVy2zdhVF+tk4b2W2MZvNDSeEGT08r+SUb6Ghl7uKwuAUZ12zk+XEh/OQkcnwQOatCeEy57mgDAUVy0gdCJYOQHRy3gNX6Eg4L6PpKCONjqpGK19YJ2UFnWojPzwTwsYuWlFGsC8caWcdJX+iNaaYQ/0pY4WVd23p2oRD6DMeiRmd5flhTooH0I3nesccrNnom3+TseU1bEXWK+blVVFBonRoZRpKIT1+cFbWpEQ7gesPkP95WafRRrfb0mnFdqh7cKNr60hll81YXe1jD5xEx8fMQENSz5+wIvCsSe6ke5taNV8Q2YMfymq/RFbVtHJEfjsqyto7hvQ1XPZt2Jdibwuq+Mk6gx5wcKTgq9U89f7y0bGt2iAWfhta/g8J6fyxrfc5+033jSq04XhPbFCp0Yw037OWjDs74s7G039PeMkc/gXKMLgxw1pI54voK54fKk57rLZJ9y18t0OcBu1EloqBpKAbn3DkiXoU21nuCABUqPVT5RfyTl2SmTfWMnVfOp+eZtJT3hraSTz2VZMsDer2BuRrDQUUhVxRIEDgQOYil7cJqyii+QkXLcdjXVv8s3V55MQe2dZou82kROHjM1HAtheg1Oboz1CyyfYPBRfWZoAkjRH1B88rjoRXvCYHyhNtjxHfuCRMJJr/fvFKLn0KU5DDWfcqBVdLMoxibV2Rno60R6k5nErLcQVlZeSCLjGX9TePvNs1wjV+SC5UNnUwcOi8g5Q3B5tPAvwtlXwAfl3JA==';const _IH='ca78572a01fcd2f149d2cda63ae83130bdc0bee889191b0fb6d44b07281bde90';let _src;

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
