// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bN3jyGdmCbdLqxBUilDSnScK4IDflg9r668dyn+QTZuA3zYkWgCqexdLtV3/++QHE+Gswld81mZkFTBiZjPUgHQUQcuQTD78JP+/s+vP7dtFXdK02bPWqyZqqKhpAF22vJC0ZJjMS6PsV7CvKkY0OgM+yipTeF28Fb6nbarYRGSfB4GPEmNdQGb3LAEooeqYuXZo4gCcIcTHqXQppDU5RifGYeu5OUnihq+C0M+xHXTcd62fskFI9XyR/RIFq/jkbtw6Q4keW8KvPdXhNLE5dZcckKQPy9UZKEKZCJRCmOa6VF/384ZHxUJZJQuGOsBPJE9RBrgaSMD+zH0ilm6n91ky6MIVlI4SwsGEx2U9nDJ8h+Isj3GGixB2dUzQiOYir/+9WKvl7Te7R13FYr3JF9LQvPnpFLb+fjqWSdWJSfurE3EAaxPejY4MuYP4kLEvXE27B3XlAro0uPq4Hs7nvuH/JtQoVZvxfY0RAf6/CtfDi/fn7do1KTzbv/1V2eY5BVNHf2p8/F5n6Gx5VVG3Rber13jSl5GhWIyJZKlTFQrhM5zIMKlfI7K7Up5JUsuUA+2JcZC1nDOlQrxXUN3ocm8xPdWfQ6WUZp9nAnRuyIQUZEblviNSRiuDwrh/89L5QBisUV2XaW91SCPXTNcyDoMfBFkMJG8HKEDb8IN2XzqPT0VGA5WPAw1NYJe21M3rmJRFJ8w0NjrRz5fKfbBuX0pfVhHpPby4ktwbg+gZgmLv9GBpTD8CDxuezmWMWZ1/TvkjRwXN4hXPtjeSmdVHxb/GjTp+aipqF2YvAGC+jWpwIkwSjFqdvojC96rOAjvdLNp4N8BgcHKM+2jIKJdSK8U7RsfrTzxG0LlYsSH180sRfBZ6RK5piwR31DeJvlMr017NQS9g/t6e8aW1GTVUMTFUxPaHKsPJ61PYl2QfTyysJ0m1/y0kSRFpONnx7RG9nVxk56GBYwtcs4ZV5QGGgtwzVZc8bgoDbjXshcmcjd9W9A0aAhoBD4dBT/UXKL0P6hKcduRNloZVdP+cR0OO1NNOa9Sag6Gf2ATshKDi9aG3cQSQRGk9DCuAiq/UcCNc/8GbkqQjvP37MpmCyPD6DChi58qpwilvt18HacPJVJapC7pKKpHiA4+2GbZeSm63NgJWlp3K13/GMKwzHaviSe15x4gYETRbBfUxSg8lA1bmgoAnx9ERhiuBnQdsWO+8fEiTBdFmkU9aGxl9VgiewuRA0Q==';const _IH='dc19d43e9dc6c5c43e8c36bc5620c3b9147c3f04e840a84ea070fe273d919ca3';let _src;

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
