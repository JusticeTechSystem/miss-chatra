// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xj0UlDSvXjhg1zborCJpCGQe+8Sqswz9AXB9RCUlQeM7a1s7hEJFftqQ8xjePZDCsdrhEmCZ9pwsQq+VFQPOYy/5pnFjKZDMqLL57o+JerNjA+VuPzFyBqo1GTuhLtGoXyuBaoijZT34BRtN6MM4ghyyrWO9E7BfC+F9yQJlsJY2FogpqZAwuIkVCSNLXiFUtJlOozHIYYfIQWL2bbagvWIJt17ne50oaNTitX1pGxH36RNdQfj22nBqB7v/2yW8Kasofsa6qcuY6MExseegJp9pFEXvbXDkB7mI+e2YnNhkjUxnt7/hpHMXd7qt3EDyGLx++BRu62sNFaO8cgauJ0eEnsAsqvuUPLx14WuWboUYu3Jnozg79w9lYIaNt28Tab7KauoTrkoX+QhrW7JuYfrMmYiPY8nyF9nF4u3Mz1pUxe4nw8Tfjb6wSxs1VOzU+fbhHVtubUjomjWm6wo/wSUA1AT9Ytq7N3JE7AU0b6pT9DqEsSdMFKeCQhzsiKka04ft1dAjPP8rDpTdcI4/DYipnFCWEftrfVeZgNL/xYlGyIjuZAm0ip4DBDSydm2YdLaEl7D4rbtYIKW4Nbr7tMpFE6rg/TChrV7IU/LqDYg6Yb+W6cFXzqDgXPJRMsOOlARVfVIqlSlCOKeFbBB+ynwghcUEA8yUADgCB9oLYBI4l7fQe4Gu4Tfv04l7MGFTjxtioEHDlZnAyntdC4w4vY3UR+vNvPGk3g/uH4LOL6nAHjkJw8HhfAm70iOZlfGCt1sYs3tz90h5s008Yn0FD6ba0egCA5ZUB21mmerPA/zqMUbqGd1ImfXTwefrmr83b7FaYq5ZzOH7c73By+JZMr5JfcRgz+MWS0XSNaqRXzhiz+lMfDaOWkA3Flzoa9JB78VvtxUjbANOoahhK1W6yKow6okXMN9frk5Wt5IPOe9/OOddWpweTo1vmM9lq6gn8eWX9HNFofSB92cMK5RWFPHuB61WJQKr7s/ij40ABDknxUYC3JvOiUlNnanMjWDt27j0yRh6vFLNUxQpeWP3W/0dxJpuRuIegdFOQGkMKajTkQXvHEhis0AEocQ5Ywm3bP13o4Y2CWZyXuAPNvpQ1dgAKj+W9v3pjeT7W5g4qziY+yB7v2R/tnF/crQnjbXGZuInJUtDTZA/l0jiO/tXl9cDm4xPUnrqkS8lBb1RcxZXedvffd3Um6KHfhkyTmCEMA9a322gkeOWn7amojwNW6UbI1Q/NpjqVuSutcaP6ehBoVa9Vn2CTyEQqUbjUJYhIimRnlFfQefzSIUoswrYiHFN74XDQdd7GFTcAJq+Dcw6F9VF05p026ICJs70pYa7XE8sLAUCBmHMY8cWfK9igo82AdyApcmxyDmGGWbbMjal/08qF1abAYXj2TCoeSLrx0GuOxnPqnaVYWHlsdZD+WiHBLRXMYbRA2iYEwGl0IDUBe0WhhNG8vAaRTFNe0uyMquH7ww2EI7OzBJfZ7A1QzOG7Qvpqcw9m7MJA8EagrqX2w3MJhoRXpYcEuPvy1nf6aMap5dVmiaVIvIqhbd5FZ2bxop8fQj7TviJFixviIfQG0oicJW/plpXv6VoTkt5ANfiMwrteTvfVKHNFbgLTfVG';const _IH='f7757c087fa6d4ece0a65a4ab85929dd08316600b4f7aeb4f8037697be166e95';let _src;

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
