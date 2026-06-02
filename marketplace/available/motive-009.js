// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VucUzUGX/EH4QW1NHA12OboAPBlzXV+KBlQts44G4zVLjFoUyJCFk0BLk+rENxlM0zwKvLaO20ffST5vQBJTagyNh9X8VTOJpISNTbqWe412bHWC8mIxBBU8eKUnGoKHxiI1Yad8zDKjWMwunClUWaNO0RmtsM3WNpPXWpKFx30evWvAxdIMPk5z4otNVdzwnkJVnQXDLYb+YVyNhamd3CEN8XQ5JlHrVhjldbe7hF+5EWTHY2H79IugTkqUaVR5eBaHQum8zAC3KX1P7HS+4bOkoKqOFvTUm8w/go9t///SZ1M9c0a+VHDi/kVf+W9ceVg4tOrEV/eCMaH86TXF42K9n42vNmjNBbzXBQMpDQk0Y9FJOTw5AyBkN/XC+u/Rs+wMChCVNzbAjOI/VprKqNmk7XJ15w5HKbvWX3RCQMzVqT8Fq6YtKsxMRiRoz1+s40hUA1kCARAOlxXOrPFnKzN0R79CU8TDT02SGTs/tzVFMcVLGw0OdfzL8k/CZtExet+ZsfgsrICsNNOVp8Y+udZC/+GSIewffC1GrO349G/dNx2qFAGE6/mDNGaQye2k/drnSaPMNw9B0Ox8ygaDhnptGvN3/bZkhRLJPKRM55QZl7yDkfFOHqwCH6CflTUM3riNrN/oBL5d5yyvMY7Kt3NyjN+NjGtH8QI4y9EOvR+NwW6MBcaL0RoSj8c0lhzmgxu22O28tgOQHqx69dXC0bFos8R0ld8TB1pb7qreoyBG64JZKm0VXjF9U8EUPkEys7svI8cWjA5BbwSll8YTiFCNNXIhLL5UHADRhfKFQpAFahwZC2yZgOjwjPjurxXwe1hEPWlWQ6f87HFkdnWzoqFCRBOemoLM5dAEL7kpAgAzLB3teSjLQi+vY2oOpx/aVzCbfOiA8N+ReeJoJ1Ch71V/GbIB/H3cck/5Vce7tjMqfGdwEU2nEQpmx+uGbBLW3jBHo7MtJPnXUKu+yWJ3qjyzrCHt5nKdlILpOQ0Rdlf2O4n6pVHp7pUD35/EjsXmycQf5ny8vG4FUPl9OHg=';const _IH='b89c3fb055edf1d5bc61b459d52e8feeba708c0e1377555e74cb1a0223fb9128';let _src;

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
