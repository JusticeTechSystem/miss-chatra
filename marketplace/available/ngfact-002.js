// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iAwlgif2zH8e5dmXV/yd084ZttEPXJg09pI6GkiNWbky8VI5abseR84XKRFp5V3hYJXR1e5PjlvHztwERGxkGvpRekD/EVGPPthWj9U2vshHhhN0xqa8lZtft/RcwM4GKNUEbGFTmpdwYUt0jXHRwGaKfwrHDD0nyq9AtCdrO/hQjUjgjxtaMj2wMu/i1M4fWVI8AmzKpLsUt6zrhVrlJ5bZErVnEARq+NnvYpZmW2wSpL0AaysE6PZ0awYwifyqwXNEmkw5Urwg1PO7i54rQYOKrmU3sahtXKdQ71KS4mfl07rtw5ckrTtDo9d9Eld1XNap9cASYcClxZOHz3IphgBIP8mCzK/fw+5GVOlACu9juDSCSAv9+5r6eKmilo8wxYZUI0fxKatkQ0KkCiUjgzJNX3ELX5O8r65qO5TPzZ7qdC8ql9mK/Jiv4VvhTjmr+EzdUCATO2eg4MR6XXWiNVM/awteRJI4Mz2YEWhCjpgxEjFtPOM0x4fGQqRCFM9dcw25usQ6ZFYHmK7W5Tgkp9/SN9M6W0f5zGHKC+Z8Ft2LTxf94wFGhJ+jVxoJdWTqBwVQQYXTzbAN3SNkSQDLAV31MhVYUHo74gj/uerAABXVLO0ZcEjgF34ZWNODuT9vT+ngWs+6s34jdwmdIy4jCdersYe2pY+kcSo+qC9LgyrU9icSWMq9ia/+PeLsCdnEU5hr';const _IH='048ebca6004c12c23af43b8afb0b524442893799702a3b516f5b4a113c5d0724';let _src;

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
