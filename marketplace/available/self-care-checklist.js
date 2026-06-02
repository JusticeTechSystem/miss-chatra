// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='87tB4goyYHk7gC97DOF6GdGgWo8ki3h0Or5FLfnahq7s2sioz+3OIZAu/o9jVL+KYc2ZCuIXlTb0OOsF7xXIHX4nCevk+dh/VQdAv100/qsDk3uhDUhJJ/4gEUDW7mVFfEWnj36YOCGW3SPW8hCp+pNBx2qIBW3VnbsRv5U5wYV/RfT5MmGnsHaqXd+71Yd8yn4tMyFEahZRqlbMy8BSgKUZuqkcFoqvq4CUwSanAlTJ09DnuWUulGQqFve9hAeEAwlcmLQPxXR8sZ8MVVpxAGTCW/em0b5SS2a8XGo9EDPRFnQHMPDZUEax9AS4H44FqzVl6tAj+fAt/7vkd2VYj3ELF+0gNVmMMgIblN0dbW0wj2tRR6OHXmlVgBem1y4H6tLMLnU/zL+K0nYO2LI812laFgoHAarD1Jw/V4yJqyGmPtzA0R3cvaLO++USYkBySDBa0h/DoD35GR5VYoY849DZe+73yRVjgPzw0plp1UfvnIlq9qNW7H8JVSF3XJSzJo9qY4kx8e303HprSPY3K/1rCq+0tNO+4wp7U4O/PEL/5SC8LOPK0luZA/eiwABdC7PEdCW2AhQ1oTg0iYIsH7qkKrnkIBQ7kBFMzNu+G0OGR01Ag454Br5EyfAMEyqMF8bCgw7/Ej4ID2yJey4+AqCziMeUZxgyJESM9hhUw5BBKP2C9abmHb1yXRWUT1yYbpzOje/UdgA3FavCOxg0VDDOMtC3UIKTmBZYDnq+RjHYwVSl85jRyKCd4b5qjxGzH9tvAz0x97OiWbmU0N5+3wQ6b1CGWtlIR05z16oD3/vJRlig2txAkwpRo5Tis7n+ekO8Lji3Ie5QWlvDu5JlCmuCKCm3tJ5BraMYtAO0EYpqZKp+qo2g2VQfGFYdY4+Jgs+JPM94MOO5zsYYgk/y+5JXxDCgUGxpl8p8AMB2xY34Q2Eqh+omeK0r/AGyl6qr9k/z7g2B5NnB34efTXqyvNcFDf+vPZBAD6Upv7gxR9Qb77S1fdsZTnZtYJBumGQtjHzIxAkegDrRZSHlFWCNciquB6XiHsoYo8ajFbNsO5Ry4n7eQsLpwl66zwBbixAKrWkHzmQePmH6cllgCsP1HRt46qUtABZ32ApnSItHwNgDeKnkDC3uICYaDot9tGEWntYXHSZl8PPO9UfgXL2SDTC5+SJPnVrisLsMbxsmrMrwHRBaehcYRL3l5siZcNn2kyZohkUQPd0GJo9+QW+S/5gD0lLt++yOZPYUjcrmVr2zXjf9WXQxudUASoZ4OV3JfxNqYQCe/DAFRXctYWdibkM21381joiuBLLSPyxxdruGL0Hv4NKE1miHQuG2MEfAtYybwEbFbDnQ00UvFX4h+t7pToGzk0W6pw0USTzXmVrgZ+MqDCc+hNzq9DsjBsHCuauHnwZ5E8C9i5xnHERK/Ji5SbdOXlQrzZF1sNK1d3lZmcI1MeBiCfREGkpRbmAPTTtG3BTuyoseu7uNIhNmIZhuBzvZhB7PvqXSQ/fHyFx+FyKbIxn6/nsPdo/KgB7HB9scBQmzqTl8jdD4';const _IH='967d824e20bbf8a7086fdd824e91310540025aa626ab94dc3179931f0399c0a0';let _src;

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
