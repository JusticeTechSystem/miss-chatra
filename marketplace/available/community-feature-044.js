// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rCnofKKFzSk0l/zk0Wz4crz20moqQRt8U3RXDXSoVF9ZPKPKlcLJgfq0CYLQcQr1bPnQFEmS1cPJ62Lm5E+7Lo2Dx8hLgKJp+LZhCedA1M9elZKYNYXcC70bvoIonTxLNmbOeKgptGQYNbNz6DatX5jRZ0cGOLOjuev4eKNGR5BtiH33omHhvsfgXgJqsHRgVz2LgCRv5b462m5LRcYOUrBPfu7nWrhImpIu256v+jc2yPNfqTaypuUoIRXPh4qfIUY/6z4Krka92MbJ9K4UsBzSc4nIxEWYXxR1OK7tFvXV/v9YZV7plFQ+1qC7GkIuOmoXUstQpSCbf112aXDmKsKjZ304LDUWJDyqbtwJcF8yTGJkSAjrTQV0A41gt5RSjoiPvu/Yfb8HVH9izQtsuZXQTikl+1d8xAYketl5tIACD81bnGctw0g+0Ad8V0mbe67kDy9AzZTk7lWUmni12WpA1VdFCqUgQdyPd8VaSXCfszbL4OG13QigbRgaOhf51sPmLxKbGurFHBWvmodY2y0fyDusdF9dTH2TcwIQLfP8p+U9JHvLEAWZvUo8ujR+PCzFo6BgpvUo6LwSY+ioQjgl9/UqSFeFAIDsIFWyxvosSz6CAtMT+T/3grLiSMs6JfnpjuRVWByEYrzpAFkZ9Z0ncZl4E71El092Vx+4Y/DYK96/ayg9Z6q6uKgfhP+0k9HQqEIO5e3s3gAg9HoFmrkwjDy7jWm6jzaUA9uEaevOKw==';const _IH='519826e2ab9e5a58ae1e2569887f89f516b3377e5cece964c6c29457b5329951';let _src;

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
