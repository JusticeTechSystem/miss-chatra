// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VECo73FEC5gtSeKmyEvS+crWjjyx64ZphGDpWgdF69jbp+tHVWS9H4tQhd+IHg03brRvlg5YqNU4vZiYOgr81UzONdbfFGU9qUbeIR9i3V3/HvTDOMqfpEAbvxCahuvy7woyV2H3k+Js/2AuWxxx2JS4u2PeRw3d/qcyC8Pu1LDtRr62f6NAcbSSfMETHUa7Z0U8CkZKq2NirnzssZnrIjbNKtR2NvoN21Zj+1MrATGR2YqOjAJiihxHcl/cSGUuZbqmIIiJXPQ3vcJN7W3j692D6Hav5DEMC6Mrt/HWRbZiRCt5Dv1HAXaBgJdkvqODBXs8oAo8dJ3s7DrFNGd9iPystIBMx58KtFz6Yrib6gLIdZ/123z8dJS0sBLXxbNt9GdKC25hpJ9XnwuB/UcbIZ7KwFZ+4mXWHmV0BOmTprKCDvK9VBDCkHCK949NIZ3LJyAbMaZzN65kg4vipmN22IFEfO7cQm2PKTdgVXIqAVYPPdyPCiHdpcFDKwtEZrSiXbbMkWC7pyGFiQqlrupffHL2Wa9p6k5OBXggBvmB7QOUjS8KE1AHNxYlhu0HJWMj3AYPNzTHbuyyKiUFj6AqXM6vhFxnOBt7JUYPScXXjWQ+j+9M5wm7BbMVlFHIV2DxPNSbasNOLx0Tktk+w4Uki+GQDqbXPeDO7NHdYnVegut0ooZP82z3tDiM2JU2Qdz96D/K8yLV1fgD0BsH4KVEFSOtcQTg1PVxdpEHTUdLSrzIqwzq3Qkda46zHwvUdAWs6HUkTtEWJwOQxV2cH88ss2LvamQGQ/QMWTMq2JYU4NtQHBlxwd6pY9nHvrOwS/GiFIweqwksZkvvLSoC/rItNnIBpYQKnwXB43Qt+GbYB5BX9PKW5HlHJaRb6ryx7yT8idzaPOr3TNtqRL/lAw7B3UWSP+REj5MgI4XCJpTC3ziQ84B73RYW1aVfXz1hwNMfQ/IXsVmWUp4A4c3Ukrxxqj5izVcuW1bzNa9dLYL6GiOtgLAKl7c9mLgaiHhyUHX4NdXbPUpO2d1pAbQFYOinhykGxReSM7TuEQANAjZ2AZYc/rVOdxDoXqRX7++spnU5tq+B76wrlHn9zCvDibkJbfOk5GsoTpf5RfBzuEjEKiBPiKvFP2asfcphNkxdzw25bfBQgv+FQbZpM+nSTLLiYoM74jRLAJypVK27jTJjKLm6pXHtVmtfWni8RfHXrFJ8+NebRjZWQqt7OWfT7GmIxtGPgV7Fg8ACXzaBVYFVvk4qimbH/x7r3QI2bqxYwdd/xoftqUb+EFwj4IfcVdsigaStWBO//VkDjqlHWKlWD/A0L6WyAr6sScchhX3b9EXLYnf9+NIpkeDacvetXx5O7HeKFQ+YRo/f2XS1xcZmTzCAwLzqx8V/+Cks+0/DwGBYjfRLgSaHAZrVCXhL9u6jkndoWDvaRZFTt8e/NQuE7Z/duW5Aa3RkvE0JsjjlULv9E/vqSo94YhszaeupECPDdANY8Yl4SgKGq7ck8UtPVg+kSvSM08HJAsxfCu4/UyU9Fw/HMGj64Zs=';const _IH='cf7d7f02ec89f898c0b4f4ff2ad4b4dbd082be8db3e03ad2a6f8c9a853ebded9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
