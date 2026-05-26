// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ik5rsiVD1m3cg9YIwmwBt11R1nClWEq3yxbIH1km/iNu6BXAErNW130aBe3CGOS7duWMvhaliz+VDxqvzaqHu1QfLrvfBpeXjDLNF3nlgHMKi6wp665SU6m3JEn2/+pX+m7abNtfg+xIFcVPy+toLKetuulAJne3f/KcEMRWZHJdQWupIsqRO/HNMpT0TgdG5VcbSHvogG26N2MQHpkq+rbYaF6+1ayJ41m0VAweu7knbhEMM5T/H0lGeO+EB3NoWb9mdH+DSlm12J3GMIes1z8Xbr1YfvElW4KGmbSOtMFTQ0DLid3giQFU/J2wIwmorT7LUngbOVvbB5BXvFQkgMMw2dG/badVuRFc7zlOBomg0ypIWRePbQqUaLU+0liQIy/nWuqPVK0VZ956KoyX/Vp1surA64qoNM11mdT4CLGWAW1p7Ps0VkYGIyBt8ZKegyq1effnJlkEeerHgrtbza0ozLyZEgs1VfHwvtKUJ+xdiIXTT6d1t/z2DyWQbRd5Eud2e9M1cielggs/xFQPHzG9o4ir4ya2Qe5zcCJJjbxCOEEfl5uD/HG3J3m0DaddhX9O5hE4Z/7zccK+orjUm3O5HTvFDp5DG1hZwrD6Bfa+Q6aYZN0QzUvmA8zWhibBA78V+LCb2DtuPJm8fosP3w+TMfRK9C6RzQN66ilN775VqWaytrbm3WrAbzJazwjEjY+uW4FjjDV5oeixCYUcYj/HBZLc7EtMfKuyRymknjgq2KyfGaO7yT0Z5uG5YGVxQUWHphhiqUCVJ4ZEi/cygnhyzDGrpi22Timh/jHKXJn5BZ/+BonrZ6mtK5DpAA7Yt94Ol8FCxUbV3wviPHNAClki+NlwGzOw1INfChzKwSVWNvUSX4jwJjW51WMqwl+WN+f2lfhLgXqZaIuWKLhzfO5DX+p/ApSD6brYJTlV0zbvGfp0SZvunhuvvM6PZTvpB3wqJvPg1I1RwMYv2a1eKQ5+kxKz8ajEC7eYIalxRqdeW/d9llUn0wHIbuUxDLzFKw7A7qp/A8FekHybzIVC05pr574ge6SceQa1CSoCybXj/xF2NmOgWWrsCfALUMwmwq2DZrgOgmVK2oAEfCcjTUSWuX9RUwHJFYk61ewtPnAHS79Sr7Kr3tpjNuSe99FPrkF+3gBv9KEsYjJ9qbDNW5eWmTp3Hn+7LXvypNZELP2uEC5HABc+XfSwuVItduTzy3me8YlnMzRfrHTuAw==';const _IH='3b49eb04636777e8e8d5af181f8a07e59e7bce819f32218979d11caea270ea71';let _src;

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
