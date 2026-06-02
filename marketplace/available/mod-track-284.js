// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i2V1TDBTSMn+DzD3L09gEbSuETEl+t4qhOzwkQUAb3VCKCY9W5NqBXfV93C36tIvG+ZAIjHwiniIBIBwRV8hKOdYX0lfT+lQAoLXfF1qMadvgrXdXUPVzYcOb7QuueP+2U97Gk7A7xk5x+8rnKuhVMrs4e2fQvPmnQ3RxvkWGmMBR5wUYgOlDfn2Tb9na8w4VM9ab+Aup8uQOBaiHU7oged41HSexfSg08h+OmT6OsiR86lgZW4tAPHUSlTYqhvuzqIX5jt4iuG9ybujxtk8Fs9hlUymA8V1NiEPhQw9mKq0glJTsZBd3JyZ7s73Hvm33A3Voz3olbAWpDyDI4Hi4VayQ/gxDsqE1yaomeTA1JdB8QjH/Pgs7RLGVYBZ90Vj8HMs0PvwRBomlUcs3aPanEsuMRCJmDeJwWEWuxyGlu9eR4Sz1kRUouIKV7lyh0kmO0okhkZ2x1ua1LcGpxmaXMnkUFeiwCY8suVaLhcO9VolF/469AjHA+ctXc1GvWrmr/qJXgGLTQBA6THT6FbDQsUXEegyUrpN4Ps0F/6EuaAR6K9w9gE8WsRzdoiPYASJ4bf7IHO+ol6rIfamldS+4HRg74QSc/6R3Y56xrY4ZJF7n/MiWXpD+q87yVETHZTdHMZGc6/UgO3Tvt01Zd1u7tgE0a8p5oWdLTQbBXWAqg0ii3t511l9xYo7Ru4iZVgiG6h3cqgBOKCd+HLByEGd9+w1wUZYWvvoQuEkRX51j2DEcQKX6jEvcTqkSd2DRPNHcvgpm89J+Jcucr5j09KX+xnAxnhEk/d1ytCSo0yuQcKtvNZtx3F5s/h+v28OoJ6b105mXNdEyqbOSs3Bofbn+DtdxidZVheE92jt8e2Yf4mwK0+dAaJHaHuYa4d9r3ou1XCioxoIK1qS0X3jGrlNZkLTLzwZMd7yH9Mez+dGLAhKiJCY2RE8ldF5At1xZnicp59Bu5CkyJEbM84yWcnxxZO+W9AC1RKhhrAi8tmCh6jDlCa9oZg9dUeuyB8Q1LeBJ5FJ/GKqDAMDtDOVPKHvqyKAttq/dDJE0jiAORfL7YO+mddmqr43VUBVmV7yCRZRODImoxLt/p/5PsUlgzd8vQPOEOwy8zj/545qaFqDqKxjqZO/wXWpxnq5q9kU/MBPgTbTaQu1jPo/95SpqtJLqwCDA+uiBOXslH6AbIFMAcQX/Y5+jtniZS53ZmD4TqgPgP35Ygexa5lHGSM66Z6VI4M5sZ6O/FYavd53V+26uo/DvIgY4yAqBdH8R+ExAUTkQw87bWnRwdLqjkKiMFjdBKaydVY0vjl8wRwRZs520l9jEOqpi+SKiKcphw5oP6M921ycxZZVvWhstAnocRnS+NFMZG5N9DJ6LVT/i+2r';const _IH='dc9e73b9879216bccfe675267a4909159ca8a3fe8290cafac824008a85afea12';let _src;

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
