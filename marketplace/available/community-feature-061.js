// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GwZbrMggYcG6iezGxrhiEc+VQY4fsMSwNRUK6AHsEUXH3Bx1xxGOAcGj+cR2B7dgL8qUgDFCTkWOfxBD+aMDo5ErH8ZAelnXNa1RokRy2f0JTuychCFAZCxl2qR9A5fa2wYpTyLJBQ6afPdUDZpsMzhvhumJyFuDQ8XCYL7O5PdQwUI35kjnup32zLlQ8VvCZACXRlR5ChMAT/qj5vFxwOm8YeBXiBvfViTHWw/LZ4Or+eCI+X49d6Nv7tyZahXa2djyz+3qOUaUvxmk8yowvK1VAWRGDMLivVsQtJeE9TrE/J1QlzJKkxagYrb72n+lmkjpSrJfmfCDjLJu+yW+F3D0ujmoBagIcJK4Mq9dxeu6aNDS2yi0iTwCl0krzAOMov71Tf0wyy7EmkGR/Dk81Z7widIE0sCir3oSxpvg/4iN+Wuew09allfJJxeajWlt7GSixSOkSGas65a6EWcMNMU40rrynVt0m66IDYD5gmU17AfWg0IUROPDXlrnXw3IxTwaC8327NsY5h1EkcLPW25yuUCFCjJJrlYCYI4jkl2+tUAJbBcU9gZhDk4iaBHl26voden7goJzoSwtmMni1bE5FerIt+uERkwls84zh5RwXcmGUXVyXZpgx5Dd71fhi5nGpc7+w0TAAILOxtLrPZIMQ64cjG7y+0Vbdqyt2YEAO2ILgv1SuDqyXYxrPhHYoMQJxlinuHO9d1QaqhtDgNn2WMA=';const _IH='1b9d4c1bcd278a91b9e762f29278cb0cbfca83187a910d150d0e860b507e002a';let _src;

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
