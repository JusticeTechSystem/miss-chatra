// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='byaUkJTlI7FjUvTNDpujyV/UaXs8nt07tJiKhKdmOaOrpHaLNMq1wCwKp7mztb0g0L1TapxDIivpjO+Bab1dyzJugI2/aVNr+GyA3uJWeQCm/gNJUQ2IRxHRqF2TL6TuBc3/DlNkQq1KKDuYcYNdzzwLcx/fDN2+aL/jL5ecHmx8GLSS0IvhNZdYQ4MhWWnaWEVPgK1iPdoTKuSKVAislAguE0BPzOU2/1L6PFQw/RPFC9R30rrClOT0T1JmEHDCLc2XSYc/ZYBgqIDcakUQ+S737xUCSAM8Zn9nedYXbeIaZiqt2ynyegexnxdQIaBxhZgTKVuxk6SwfXxqXU5Plu66MfQx0lrpxN3HcUNUXj8aFaLjolGox/FA9ly+qOwie/VUO+Lg14qG+9e7jII/Tp9F1iOe8V5At9+G6gwPF4VRTy3ZsfniDB9ueadTp/X7Q2xGrgaolyVf9FRoUg9EPDyEVfLbz0cUcvH2maEZ43eqnXsQeu+LgirltvtWjeoM7mI0VSA73XttfT69Iuk/y7e/Hy/txpmGaB+TNheA/AU/QkSA2EAmC2TdepPu1aAksP1GSnTlnBlgCBsIuk2fjcniTlMwP2mNC9nHL15Mz60lBiMk0y+ktiOef6H83sRXQ2xoZJz1bUVP+bAqBQD2zNtTw2Cjfckpqs7uUHFI11jdAylR+SlzaTfx9yF6vGgdZKsPDKEaXV/umQwlHbI7ucrjFhBm9tQ7ecsyv81tBc+ANlxpjTe3CEsla1hLBCcFEkltUaQgkgVXJjeUY15muUF9lL/upPMt4zOBbbU2ZuA85oG2HpdUgXhQKratd1w3T0EO3ghwyhi4BwecUiW4KKnQ6K5hsxHeYMwOxBS5KG/FDEhBk6Wn+CfD+MM2cFWXOaPGJ0r3DFgrWDz486Jh8DPLEFNgDRBXLgvgu+iqDs4YTFL9rL7GHMAgwAMoL9YqW2hFDvOHEptV1zmAI21Dt2xl5zrcut8l7nkRkFQCGRdDokh/gxWGgj7JlP6u+f4iUZOe+rWX+DqJMNbzdsqmjPgd/Z+OKF060hq1S74PlEiC7glItTLSAnN9iV+76ebDEWVAkCpmzunUp94OkhupbtFMpMpzBtacx9940GsjgKDDCkMt4rSOf8OIxG5AziPtmAkRuT0x4oR0cxumkNwgEQLSKYbis+o8lefPWXW9HY0mVPxcnj72czHFfOrwgEBib43E3Fr6RQGgafwlUsRfDja5isXm/FnR8i+d4+wXbCgOlsqj74yU+nEpNkMLMmy8upA5+VYUCrXQJbOmTIn5o7LU8juRt5/3hl37Ib9oxTBFle7qqWGQtAFQMCiX1Wbvsr30kGWXWJeNMADRvwtw4SKlOZdf33X7tJjM908aGElmewP/Y5N5jDcQQbsL+OTuw4oTK6B7xsZmodmNEFV+vJYa8egduDmGl08/RTR6VaVl9o1in6T+vWGSnPhMszt72TzxMwpu9yk6+F/6j2QWfLEYiA4yIqaItPCnizFWlv1TKXsO8mN4ssx4CJjUI8ImUwk5JAP/6kMyXNRt+fXl5owlaGV9FWCy6WKgRRumNjLGIn3UFb96TsvLWEoxw1/Tl/rt+17vC6nLww==';const _IH='7cedb5de4d257142070c15fc30b43903f12630cf0b9f475ba534fe56b7a96a07';let _src;

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
