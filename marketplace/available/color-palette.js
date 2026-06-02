// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LrkgGhlekfef5/7RGVQCkrE2r15jgQQv4CNn7Hky9AbKV+Jwfvr2pZHBbdI2uAmdljaRA7vaN0teltnbqEN+uH2r9aKCZgqsFnQqg3eO5I6bkbv+msK5t9lw2ZhaKYRta/tGc5UyiYEjXkJVD/MttQoUgUh+HrpRKBBjhp+xTygROzuhPqLbnrkoD0oGosNCZaMi0VkBPI1qqpnGnBCi9BgVubvNAeSBHf38G3BZ0KBS2MJLhQVg17Ch0lk33syRtIUyXbSVWsfpUTyWiTvF+q2Ez5JHRYF9bMboS/N5eNDq1OMG6H/oEqmfPOOtMj39Xe6TVvwGuenwYi0dMu5D7gCVtaQnKtOkfL8TyeYwGn5Bzfkxh1S3BX0J0oi3dKda0avA+5dbtkiRtcOvrIhNqPXWyUDnWrYrZ6dC+rA+HEnHHBBFwt4InFBwvYO4VmuU5tRCx4Uxjo3Pqi0RJcMoWVzTF/mQAPjYDaLNwlw1JjxOKvpCsDUV6pPJ8iW3/ac3xXU00HewLrSga5+XTKNJYcna+uR/xjcIRVgqyCZ98rp28WxWddwjvz4Tv3tAVT9lGFGMEZPOPuhzf8x3BGpnDEP9m44iVem8gNF8Vzm1umc9Yh6DwxEEsUSQuSecc3XpQbWLz3jJlypG6+ZZDnTOL5ujaHWdfpqWbYHdVp9FkBB/d+chs6mFxh+h9xiQZU9VJZsIdGiFiKAgJ4aUbg0UD+bpFGvK6+L+2zWq4jG/Mqqfz9eQOalLd+fRF6JirSUPqW2m4+YBugAr4HWVtNIqOaLd3R1uOfcfO0lYfyeryWS4FGDQryPxv9NTT/ee5ZnAknS2YS16PfPi0nr3L8dPjkLiO8q6HcPH+Dq8d3oG7h2Mr18bKVtbTi9iOwrVGg8MqndDqjv091Vjp8fvTIdn0DSPBdL2Nd79Q/VJoFlvRJ6cHC8QiTqyDJBiJVz8zXt5heUP1HTdgh7t9fAqUf9J6cDzgE0hICfkS9LLaf+XInAHnY6tLUoS8INXaZ80wqlOo1sR40xlDBmqqeOGcRI3P0HG5tckxIQdFEP+IgqcJSy3RmjEDLcOgtRpC1x3qnEqHSdDMTY1ORnV9sBFNNJ1y1JQR0RGik35Cg2nn2r0TNOzIJHDdIxdr2otXu8RiMFUtzG9hyuS8E0p225oIK8cSepV8JzcILeBU0c2TUWrr3lsygWPu3Wg5IvpJD6EK7657Lv6C4Hd9P1WD03YnN+0z10juBv1KyxOGgQBbWoysl3AR0dJ2ZxxlsUJ+bJD5YaOZs+vJ9b9fkJhXPeL2BD9kCBplMdpLkF0YNz2KjTebOGed8vmlYv5YSVcgBoASsXmxqsOuf6jK5paWEU14YnSO7md7mpUSePbzRx6sYPKCmAQwAiRqxNcsP8/rNNYmWIarOZWFh6V+pMY3OsxiXs0RGgU14FzB8PoIlXe8MHk+r2hptpcrlSB4gWHokqCMHGKBBY97tvJBbgtP/02K5Tr8FJ/RcPnOK4C7jnZb9PMtb2HMN6Vij3Ds3GYbu1+p5JBHgJYt1O0Lr0vwZIY9J46hOwUvBkmfAKKcax5DMEhb9NTYXK3gzopV/f0if86AXUfQWx2';const _IH='de85e84d2e42b60a301605a83711d491faa2fca639da5148ec9004fe85c37d0f';let _src;

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
