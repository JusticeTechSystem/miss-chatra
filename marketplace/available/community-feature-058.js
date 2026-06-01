// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7BWChd4/4Z0WysQpivwJdMwVzEDMV83VnIoePJNpXxagt3EU3F89VEM6nY9wZcP3Gc239UoLLO833fx3selDmm7jpK2jzF7k87nUdLDWjAuyQSsBB5KzGMd38AFWnICNB7+ERJlBJblR8GexdqtZTubQfalZ7WC3eTPryFeOyB3e81LcbQtCwIyXm2Kb7HgcMNk1Wu4kzssEARPmsSCvWV/Yey+ozj6s7dKJ6dZhhemQs0+sLqDhAV9p2cHhuLPQhlpwU8nHD1Ex6q+qBZWRM1VDzZGlc2x5MbpbZakjaafBmNa6S5EpkWtOjnTb52j3+wagWvKyI6efzQOEK9Klvbf5zrwNGrZkU4YSXMM6LXLq3diDyIe8j/U8AvNODyGrotreoxOFbtC+ghFx+SwzbtMrdNddVLrx5g7VbOgmGyvgMPQXZsAqTgB3AJIEiwt8h/63svla0bOdCr16Gn79et/Ejer2QmHmT6SdJoM+Y44m5jGj7PfAdn5BJ9Ij2Dy8z+HDEOYcBG4I5aeAkfZ/FXrRNjktfmyydHg4zUXWUizitFurFjk8JPDPOc1zVHkq087WyzPPjcDGwtGLcp/13PfTvyWXBqpT9F4Gt5jinwdVxQIqPRoUFiGsZCvVaYhlb8IjfzPLfONlB5CE4a6VRjI3r7QPWiF6VqXjD3nARoCxkcq09NC4HPV3K0AeD9JZQgqh2GM2Knevwba8eo4zTenUrNM34lpFZA=';const _IH='f939995ef76b7cd7da3dd7881c04d20150eed7226177672f014aedcc45e176a6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
