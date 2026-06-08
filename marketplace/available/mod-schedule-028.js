// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bk6qPuHf7YtcZ91Ih3U6NHznNzP7BW/2vuP2CwgeCxZUvRQ478+/MIfwm4MjCtYfST9za8YYKmuvuVc2mo5ytbv3upZxstiKB3iVmc8vPhigGgEhlEy/RVCj4PhPaQsDvl5Xkjtc5aY9cAma+QVo5PcYIy6CBlQqa9h2kqQMAP8SF1UGHkPz4YA7TjZm45Jm0TzsCw4sU11t9LcNaVcepw17vcAjTWeakkpcDEUFgOTXiQ715iWR+ljj5JGXaczs4g+N5GIqHseLyukPhlhy/oz6B7CedVoRCrLPSkhIb1kFYmSQLEZhF78DVl3pCWA7CLfrg99+pfcv+wzA0SXZ+1Fl0v/dNiiBMWAQz9ecRvw6R5AA9KQr6ZkeEqrcw64VF10N6I10/9TlVZBcKipjYdgYijwd7r4k4i4muqo6i84SgfDOC/fEqW8IZaSDmVnRlRxvxCdjaS3RYtPSkBC26eZAHFgYoGLDRZRtNYN7okyTj/3XL3XdZfmvZMEj5uB8y6y67Ji9kNokXITqdeLYaidOqvRzoARVowGSENv7Kdy4emAkjOJX0zrlv6W98cETLvzHPLiT/9oQxr27/bnH+1OFV0CBEiVeVqg+VrS2MPT9oyREoyLVZFMlCTxXkr2abHM79HYQkM6xngLnU5R7TQItQLifoQRgJjofe/G5iFN5V2cYwsFS/QB3d+4M+levo5Utr82140qqRjglkJPBb4NlxM4QW2luEdJ4y0CSh65jU0TCc5DXuVNud1gSvJGnbK4W3Ou3aBT+K197kmaGQkRL0VsJg9cfVSR9Xxx1KmSOMyn2Lt9epM/csewODj9YuoXbvGiZZI9w8ShoiHYquiFHcyxkvPDSFhnKqpQgDSeMUuBIou+OyC66ELG9ibI7L6I6kY6d85xpldevHdTJgZhnmDUrd7l53889nlMfQc0gKl3yiP6vD0B7U6W9qxO4ges94e1Wp9m2B7RTeu0qFe5ENauUD0qoYKgXmVJQ3tJsQ3BHX7zXDi8ViEqkolJoQ7Jcftv9KVPftNvD+7v4ty4g+h2pScX5asdeMZIPLJggGEjogb1aDjB4zfTUGFMC4ZcgtsvTa+WjlrPfJ67loCyEvT0/Y3vcqO5Tccibjs18rYy7hisQFk6E46FY8BT1PY1FwNSwCIvcEGTmBffgVANmzYj3Guw0FtOoJov7WS7cJo8Zy6PGN0iaK2lDZizZczxXiu9IcJVkQey/EzlvZwYm8ljuBNtlgSLoS86Ai/fAsYECVoDk913HojJJ6aNHWsEc13GEj8r6RZ3F8F2zW7Uhd4hD/Z9xRqdh1svxeNC/rzm6sPYjxPhv9gETsq7QIsyewT2UVSe5TbKt8AGfDGSEZy1oqxpgVTRuDtMjlbNxHYHK3JFXypah+eDnWBnnZ+wizfioRQ==';const _IH='744f0a5e1a74d1092964ec9afc44d2b7c8ba40cd0e799b441114d4894887f8f9';let _src;

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
