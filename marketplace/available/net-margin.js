// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NkoGupNEdTtKRuR1Rc2TKGQa/Q37RnlsD1JpTUaabGUu/oaUfMYtNw/Qm7TeMb21/rR/e98twQXCNIQ1Ru9wmL5EnVVjI9yZJDbtiOck/5yYjMnv2ufbQK9B8eOYz9ZiwHSwyrR82r50nMbZxupPRCR7XkPlv24gl1Vd5CHvUO9DsMtMGvNMKzP9eSwFW4UQFPmfUg6naYvUBDCuQfHoEQimV2NADxRt8nvysOD+7hTV5X2Y5bwoU7HoA246JJNYQA0N2G8HYQlRY60OC8BVdo7qC5blXWCxgMwRqpcW8pJmaj+Dyp7EW7ab76RlWG4/txTbCoc2gx+s6pePh8Ik/q533YwrwBSgiaIGBA6zDyRxzE9Zeoy2FuH/3i7kPezwPpmdIjN/xaJSRxoENJHWSOkGVWqzuIxBTyolh82/xdZ8vPS2x56CUUEBeeI5n1Jnm3pLoIT3vxMjsfsGaWwu7GBVui0EzMBvjp9JVY/MMPFgBX8mP+PHoWVptCjz6xj1rX4gsluruKG3FGTQRizmXXBwGLpKBkuNsOV2eLRZ4yk7ZGGwKd4HjNgsPTpkk9BGNrJSpZ+zPSAkD5BXMe5/uTnqNT13zFgkGiDUyOZ/mbJ/Tx0fd1BMUDXFBdoCBc4qcsmmqtZP9NtTxipj4eN5rszl1N6GOvCovLV/YJSJtMIbyT7/jKxtY/pDCmMQrUHol4GEHDbH4KauCY4CIkstilMqZfW1Ox1+iiJ6X9rcNB5TDOO8zsIfkCaZF7AGMtEg3m/ThNh7dmapf1T7vGsjs0x3nBEf+47s+SuxdQ56fNGYI2kh+306G9qoyNjPZCgd3CJnAu9i8hBHSvDf0wa8NG8Dg/OpgCHzMxieR6x2jXfLjXH9Hl1VMWTdErvSm5P7NA/C9RMurfrURUmvmV0xanRbjlB01JMqJyXOXMCGxunfElM3+Jxil19k4SAsIQtDWwPxQyhtiRqInXQA27n+oeGy9MbMe1zjmCDCFHa1ODP+8Sih/d92U7xBpR6fIReWl8d6w7AXsjV/pjpjQ53ogjeUGKRYYwqtY0YfIMrWfgvk2WaapN3Y02gOzP9A//r5Gs8hqZasGRrxZuvpynUKkHUEaPVgX7CC0wF7hzimftrzWrHzxDsBIWgu6sK7Iii4kw6Ej2MfHjsyDKFhKMgpPu3nSYU824VJr7SvIhP5JXSp2TVrhZofhmBS7hailYSo+hR64NwZ6rDsts1dcUD1OJpM8S81gc+pAk1uGQ==';const _IH='453f7f331d37604665ecddb7b698a6586d8370a663a4ea74f92dcdb0a64fc634';let _src;

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
