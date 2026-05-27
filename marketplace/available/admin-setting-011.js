// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AFbBY5GQPE2N1qz+Bh3UkcV0PLUMC78aCvArtfIlApSunjAfzzHMD6RAF0UNsuHyUSoklTXTwkRsKvJgfzskASEdfyL8Wu/khxKXvKk6ZUniFWv0R48lZxGddqEmoAjF05KbgZdycMUj2jQK0h/vKKpfObeBvQmFnKCi5NYBwHYIeU28ngpbjIZhJ4lAvQgZvKIUJBVvgBNp7LNvnc5ajSvIb6ENPu79BWsa6fh2oko+4CX1puieHhq9FW5+0ksflpcOAAvKvTEANXt/LKjLePtW6nGnwWLdrtqBo9XQ0PD3Pv9X00bdXIAwEthkkddKhvuYlvXuRj0vFv7duDbnE6aqQlmSKCRgGUK/Ff5LhikZkUT683goZNazHj/KfMWU6a3JMdYr3wPEY4S20pRAnVATXHBMNhORo/7JE7MxRXubWkI9g5du/A3MRQGd2RebZLddhs+w99WZIuJjGbR/L7snfrRGApQk3AwE3WDP0f8bWHyUJK5XbedA91JsQIkF20p5xuPY4/wdJ5APSlcjghJe99+LlM/5WVu8T1LwVlOkZSkixMq96UnnKlju1gsZ60M4rHv6kntp/OAohEd09cH9jTxXXQRRofM4ok921EQHX10z8N5DjMLYJKpClP5py7fDbuLPnD1ydsiAgnkuQk/ZBT3iKAcMEH43l6Mtjt5FW62L8vCLd5jK7xI1v477hwJKfZt3aV88Nc8g+p+akwjDlUWmepfXivuYLULPiNxJip3++N3VT7zYE+6dhp2EiLQo6VQA4KJG6s99OiI1H+bM00pXXtlxPKQwWkdLL6dMHNRdsMCA8q5v2p4F0tqdNYqcgDYGbCIH9uOoY6pV3xMdvnE7dAUH4HPzkeZwwlvFqUbOr1IDD4zfBBmJWfF68gHU7aG0oY++b8mo8uVQM6ssCvOIXC3w/ppKrC02h9+5fzuBdCWgIR1febxDhqRojl32ObOl2qsF8YjmyKqEMIEJ3ZOkEv6WHJ1Uw78v6/OOunxdJXLnntpA8FhxBB4qR0byHA==';const _IH='104d93159b08fe0cd1c3e2eff65a3396fad7ee3d945e129783d84206f9b17fd3';let _src;

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
