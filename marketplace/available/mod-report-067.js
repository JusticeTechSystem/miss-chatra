// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FtrudAa6+YmB8im4b0GpJdPXLT4nBbqFqQfrirLmiPA7cl8+b67kFGpb9zPWjiMVBkLXQFGNAr8m8NpeWGHWjBz0KVV3oy+23aNoTjWvINd9ncTivvoew7APSskv7V8Z602B1HD6ENsmdiUJcRG+k+fRv7iFcpOonKLpa/a+3iSJLVi6navR9G4ZvlhtV/OEcsc3g027OdwmF8gip/5VDH1hfpFoVxKWB668Aq2hgsX6+dqmdNGyXQbe73UPWlLw1i7kBUsEMmjItnr6TBy0bg4OzqbVftzJMgPwLCz7p93MV18iAYmJ1TomQ282fy8rz/Q/2YWlbnz0m4aq+LycHPsoz8KeOZ+8zzKgA0s0QFtExyRE5PVRmC3yp4ZHkI7rOeY+oENP/hEC4S44241VXtTHZHZMId+Q7ba1GQXXdhj5v64I+Rh9zmx0Urh35OHsLd5PoZk5YfV4QnY3daaF714FXBv3p4y/tuHo46akeqv/JR8g19OqKgbWifd60XuI9dC1KbmYIsy/75dNWiMT5jrRMA23IHHAlDJ35jjO1XnSrtbfUiEz2BMoVjXYzngBc7s3tfgfXIURF4zE6h3JieWAURmg+a6WqJ7dKDH2BoCs/h8O9SicT+RtxIk1eGy57rQIPR5J+6fXqUV7W8cERtVeHy2Xxtlwkq3AK0l851uwP9rNv8HwTMQbaBYUMyqKvcvkPujyJylBaKEYm4KFuNHNNNeggUA4nTKTLXguhQeIYL7unpjW/la48nLBEIujylWTgfrB3IIo/+V0Pl8pvAIcVqnr/38YY1xXzPnpIdhXhlnXEkZVbOAM2SR0IVnPp4hCDcbwRGpKFlIUnDSzSdYYDnY4cigR9PXGAv+V9PA6kWV6As3b/LPlf1uvZPew2f2WJhCLz0JvSwcDZf4K1lXWKhzxL3Jn8n1gsv93+QSTgv9skYxv7Twi08wlalLB8OuE42ObeNO6rmT8wI7itTWwlreroEJYy8jeWmBSlz3ggaAX+dGtfD9QqWT2xRTgP/FnAW2D9MUk6ldylcXAlN7ReG01Na5Pa/f/Td6Fm4GnNQASqLEGjixEmQVD0XwJKrSAz6Caohf87RySk2rtckFqygKRYTVKKR3JM1sGyptHkWTRVl3u2CtV3giU+x+xMOLajGGrbv6DR3V0jCpOQjyvM+Q4s5Lz7lmmxii897ORoi9RD9T9kbRxZ3mMwKskG6ZK0gT7kEeDoKf10pSkbv8FaV5UPGUylnrCung7QD+cHCKCrAukkxpVwRwFQNcwk/9Vr6qi5uM1+FMVtCUjxLZ5ef3lt1y2cU0TxjkSPvJ7THiTNeC5LwHm18pHJkpda+kOTmlLHcQ94LkDZuR3//M8nuXhAc5hOy96h5SPkWFUo0A=';const _IH='32f1a464246c81390cd8e151dec526d75525bc4744b51f824c94d584ead9e279';let _src;

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
