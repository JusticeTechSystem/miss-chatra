// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QMa3/+KrrsTgvvEscqyOwVRL0umNhEVWt6L3IYB1zlK2SJSKApTr3n7UrmZVDh+DRzGR5+KS0jV/SFy23Q38JzX8r61gZVsqr7aVrZNYfh2bMGD64FyiUXUg7KHOZTdYAqMRlk1fUfJRPkyclWWJjNiUyBO854AwNuiNmwENb2hgtR9+Gbpr4ZBhpQK95woAx8HzHnIdzYmb7sz/iJIRhXHW+cmRqdbE52P2DTdqzh2NljmZYK46FK39CtaknL829xROIf7vSPcq4brmnUuM7ihl5aqMNhw+7aFfUKbSVzmoTOx+aSIKgTscInmBgevZD8T8qgEQ2ws7cqeLnNPBaMnkbs3Msr3xg5GVN9FcXbmN9jHUpEP/DBuQwzB7hq+JmZxFK5mg28sDzLIfjSUg6JZoTFm0vAj6i1a249JKIVb4kY7trMML1f7tlWv/2AgkcywvG46jAlxKSqNp8b99Lh3T4Ks8r/oqyBya8X/59Twy1gystjkpmRf0x118oTW2BMXh9fYq+REfS9sndUOXaitrRo+GCQzM0lierp4e/BEwC+/0/QqY5siu3vgu/irq5vNzgkyKPGMh6wLEPa22wIdWlvuj8d4ozFmxJzx/At1g2EGY8YRihHW+SMq28O9bYXuLOYJRS7pCc5mj05RT0qOY3TpoiTcZQrpru3Zmo7s+0gYBaZ+AU9rBMJ2bFOXa5RclXhLo7u+Y2bcaffjuHkg7/Fd1tC3kg9HL7zlgTHj7sMWw4iQ+y5GFPXm5nNmiP+nNYt4LMaOhDrU16A8GZ4GR+6SebZ3MxySp8IZM9cYsg1pVai+63O2jqePKexbBZzSfdD66ripahOshR5/DdlT0FOoT1+Y0SVzXQ9gxs3ypWNmq0ROm9w82ggr0dmuwYuxzpnW67DesZGZG3+qzkG3vi9IzZOWqUtFnneEyWsBd4l+hhK92BqyQbe2d45ynzO3MvTOJhzMQQGpjBdHo/6zS6LcLq336LL5ZRiW02zJQ9Uyes3o=';const _IH='1faee300fd26c62370923dc864867957b9cd5d016a4f29a210a370108435a848';let _src;

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
