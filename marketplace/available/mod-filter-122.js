// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PG3Xelzja+D6kspBZBtNZ+EZXiXbiyv32exzm9xE5w1//D9Jyzwftt9mOahIlTmuShhw9hbNT8M9Jx/qapxCNiGUEB0AVNRGq6lNbX/CpokEUXwrX8YT49DsRJGf5Ocwv6raBRtn9cTO4AgQqfyMXDHqr/1l8sNbg2xDwUkG7RNId0AIG4BD9P/ev/x2Z1x0d6io4aP8OQiGTEaTORVWv6aLANdRMT0GzuHqiNZJapZzEX9zmazdYMnBBDtkvySVrok6oPrUzp86Rm8vhu5Szw1q3Rho+xQ4oYw5XU9lsEqfGYeM8pjLORBDXb9iF5Xno9sPECAzEfc3SNLQG6H2Pp4iC1xmGotGzxsjC6m1f7ZDq+OWPBh4odg9QCAnlktuUUulBlyKgcwTpwC5mv5aM6EPLponldVwZU6wEWtEZ1gLx5f2EXGiu6FW9LnoXRU5ZrI/S2P9h3pqguWeK8BdmS4rWoXeAYYv0zIzB+hcglIEEqvV+ynYsgll1DuSP3NzhemWd5M1hq+H86N7KYiexwBzQRXY1Z+g/vwMp9NzuehjaiNz3hNsm7SNlmxOSX+hkt3Rh22HeZ1WfTLQgaOcCJ3fqQNOaPu0FdwNnCAdSE5QZcaOfl9RATeZyKbRKvIHAIoTOz6n60d/z/gSvNw6hVaIVvNsU8tdsoRwgElbi8Q9s/U2U6gwylDjGBmvuxjJnsevWp2R+P4SnErP6emgv5LOdx64tnKyOLSXhBXHFLHsK2Md7gvbEXKkoQHgLEMCt7i/LYQfpHnyQehBG/Z7IoVxLjs17MEGsRBjjo3TKkN3Y+S3oZs0HyEamKEDMUJiiBTgBopUZu8Cxa7InSNENtsUg5FWFPCexc9oBY404bYoQuYsJamnz8qh64+RmL0sbBLn1AQA8Fiqr3fbCIaLsr6H2UTEv4NohqLAF9XeAuI0RaBColcgRZiKcjAy5Hwdb2MLbwXlLAzwnnQ9TMdHUs8llj/p9+dhY1O5q4BKAxWGsPz9gNNnTDw9QTszVeJd1XbCvnBeXy0pBUQe6l22h+EVyyYVe7aDoEwbtmg1An99Yk3Us2JW0080J17kkQhm75Ew0C5RW2cYURx4qymaEaoflu5DCZNGaTfTKQ4AZ0OBiRepk7gUFO8xcBdeQAdsuI3rHs0X97emKyG6nlkn6jsT7xmpaDdoWgvMSswPCeygxYYAo9e8rrQXBszByrQLUw9EJDtq5oUSxpUA+S0TWOfEd3LAi+q2iXaLOLDPDhK6cYgoPqrMKaZRRbk6VJpCtuPe5244ytBrSt/XwhlyLmLYReoHHQ4mzJsXBqh9wwlPipM21o0W8xikvJ3TNj+3Wh78sB3ApHaRnr318TgyvSuVlrsjnwTq8U+r+aoiJTHzUUlemVdOPQ==';const _IH='f3f06fd90c96665172386643d726e0aef2fd87c54b16a63cb013d2b122881615';let _src;

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
