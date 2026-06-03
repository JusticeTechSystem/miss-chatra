// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0LyoC5e9fpY3Zqa4ELCde7h2yoQTRDNYcqEwb94SRRQKzSGbQmTvFSmCvBcXvrCXTufYU5GWVP1xvr0wTLywhcTc87/Z6j3HoPtdr35UpzoSxeJ7U9oRP4aaZitSnQHJsNRlrF8EGE80Nsi8FEsW7uOv5qEQ2AZwiuYPuXptqAQtqODhH07DFRyFwIvQPdXYKcfsRlCyfVlbnYOLwTG9mUiuBPbvvNN5zQzvL6zIsyRSPPHtEsNLfrozlHi+FxkdhymSUcdlGWI5dHdq5POuDPlZO8fXUpS+ct+HGYNA91JuHB98vbbdYg5s9Xe35vCpJhcEv9USBD7IJgZArkbhW15JsZXCmTYln1JHRZfF7TITE8ronJPR/Er8AKmqRenRGl2ZL3+jkDrMNlrkKVryO5GjqKBgaoMWX5mShzcEaiwqCz65kFpGEJaZ2XE7mJRrGholkaINxEDQoUSmfiHX7062cs/PAgVy3t6JnmnNor5IHs1qkTZfCAsty8nWgUMCu5UxtcyJLbAZW1XAeOEJY0ehBvUoJp9nc+9wmTpr5WxsEJM4DksDs4k3pvZMhjdXzBTe0+J8AavQ6zfPNfHaSAK2hjAaVEk9KilCT7otN/ZeBV+q5gtYbpukm8jcXfq9G1EI1cphm4KQEieG56x3mlIfcOqJs3PYMFrZO+/k/Z9SQOgms1FZ0rtECnNi3/7KkrHizOxxNcJ1PBCtDhwnsEu+vOiO7gkOfFAN9/IhtFD0pY60RBfJ+pkvQL1H1FNMHGSmw0AyymXVLrc8luf6gU7bmrluhgULry08xgqZb7CRyhqOVhXjpAQ37pxAsiuJsL4GwpIYVzphxWzU/AlRFcGG1YEYzGP08ivqwR3WdCK7EEvUDMwjQI22lFa4aooeCcG1ybX5ERw7VXQUCHg/MO0pyPpFlUusUjavq7Bgf72+oV2mqsNhpXmH/aAgSJqsvnBxoulOTolMiocCAAOjZFxouUMwMbKAIXt/PgC9yAYjV+kqWri/kMum47xV9Ay7eu+gWHqmqfVpuiCCDdHSqxmTLBUDq14dUWKBxLDXvL8yiyem2HevQzw0AZWzJ+5t8RjI+ZckcuKwfMbFKPG1dZQxPto9JkN/wFH6ieDTlFPFnnawxzXDv8Dc0LLO93H++dtaU2VtvcxCdXa2CbQjXVVynqLr77apLuKzpyd1p9xXiZp61FsRmjTWsvlQfJzmLbobhzkP6hQMf/R1xyoDnEUit0GLg3KnD/AsAkbFWTJHtdTAqT3PED0AjTE2oak0xE/9BC3SuYJSfg8IsnRuMue68HvvLGGPiZWxq5SjwlVtBIIv7KMSw94w8MRUmC/6qVETvnqDC8kJYQ==';const _IH='fee51d09ccaac7b3ded7d8cdd0a3c82368c028e4c12505052bc4d60ef8e3bacb';let _src;

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
