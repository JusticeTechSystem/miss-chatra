// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Phqr2Y/GA47XxwrqxkKVUKQOR+LgvB9fv+7jTbGMwo3OOF2eRmLJvMTQj9Oywfm7jB+PCb7V+zMsWf98qz43ArLjzrTUR9wGVsW4KFDdQ7eBXB8t6hXnrMqiTEsgt+nREN5BaUwWuDj7XT40f3BhUNRZYb+iXnzFMU2kbgmvUY4qFLvFsaDzm+KqPTQ0yUXktyeJQZqkosffxH37mJZDy4S+mtMo/BF+mymungQOgAl+bHWOMbowhRS7BsIx5JfXm4PleR8vxBcluvjdAnL02lQDikpMmspgUibhR+6CzY7ctuh7G7pmX4YxoolAo1e6gsRuUCZDoPRp8elOsl1E52QG9N7XqRykIKPZq5VTccZWfHK8qcRbYChSsFnAtI1e1Vuckd1GYfy2jW5/BWFoFsSyoQyfM6hPrphENNWqSn5jpFAeW2bDSLH5rXCi8kH0HXcr10dVJCtf+g4CQ7oV0g+HnKuefDJmXM/cqa7PIratm1lJXXoj5zqj1GNzrr59YZulPfcjCSF8GQBEgWS0dfw+6SQJpj6PaIS6+N2kyQ4xMYr7JEezTX+ZGvaiu1+eNvCaDDowH1r03/3oW1jubEsQK8kDr3Q/GK4oW9Jj8CXgEQnbVLTRPakoCcvwOpZscr2E0SylD81MO/KWH9zFuolSKYm2Z/v4CoPxWg9Fiy+7vt9yVFluqEsI3UC15rh2tlQOoBVUq5BWKvFR0JqYNnd8IpCaad2xI4Gj3Btnjwq13sl/bxWMx0MU5VTiMj7wTkCwxhXgoxnT9RVT6nJBGvV0/vhTS9TVgF8rGTF+riEJw7YMKTiO+r2V+QmElKhhSisP/6/e2rKh88FuqTqtzugF/m93LU8jn60qf+8NqyAICW83OKRUwEyKfAibTCUnU9XWfEeStUnFiODw7S4te4l/ZkkK7vf44UpwRWntANOCdfxXzcBwxnkE7Q64TQbatv1eX39Z+iUb1e2da3FyeYUMkHYR2Zi3ZBqXZd2AXjlT4VS3bEkFAt+QCMysBHZUCBG8jWdpSvTY8Mc/Uz6/C74geY4APheMNmhWEzvYO8irpE5wuwxaM4XeVVqspP4tIObJtOX/0zwJunbMpIIwVW00YroYMf+KYbNbg4Qwmfx6YpSd8L0LWv9xprOR/0vbKE7blZ3u0TlsIZo48uIhrJh2tZYhjw1jLrhT6SyhUiRnEeEns3rGkuYWWhVf5vwpGRyQix0XlPdARZf8+QJBQTGn3voIZKFxbEYthpqn7bcQqDYqqlOjFbvoovn3T4qRFljOwxbJIRbWuUXP4uQ65MP0rCB7iXPL/61bh5mDaXg4nYpxLPaoN7yDKYnfQY8yxT/ka5W3zlerviTYh69tuPnCCVntUgrCizXU+4N/uy68JFPg4ne6kDix67mc';const _IH='8ec37785abc2750b8c316167e0303258e58a2fb6884423389ce8a1ac8aecf90e';let _src;

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
