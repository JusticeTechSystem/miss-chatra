// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Irl4V8N7hDlGDgt0MLrP/RiuINSJ7mivBwCXhLewu2w6XrvbCH8sOyVRd9JpH3akBsknriPfsye2XjMNlZE7aT7u7NH7EEKDfqJ9watPaCgjsJU5BHsYk5Y2dROw7nlVX/W0FIGkmb9WGgaMcJ0QFM9/MUMsgEQS3Vt/N96SUZDilD7UuoNH029l6VqlKoLtTcdjxn84r/qLUdQGn9JLlhs1zQB9r8G23qmhxvrqU0vsTrIT7LcINpeKLRoEjrtEaslvXDY/16ogbeukaGObIfo8OONVt/0yTbc//fsXY0ztE226n7TL8jYsdCyUSIfF6DgDI1I4HcBJlvrJd4tfJ/1UztKzXzLAAFwt6qq3w7mBmaQfOJm0oVWANRxc0KECQRlVnPtdZnva51/d2b1hiKpZJ4I1JalzBnuaRKZ//HeCp04P02OhyRPw6cMyjMy3wqaMtHUbwX1I9KAXVnXrXqIxuqtp7v69QQKnDsgLlSOu0jTWcAnfiY6B/ysCuLFRX7h1BXcJHW6my1N8IN6YgPiGIvxqm21raY4uVulGGPFStyla9WpNi9vq9jSwmeT1Jn6ssUMpIkg1OpkB+dXVECxej+znQgYQjD2iZsrSEF1DXuVXUeHSOXIFJS/KygoSltVNE840YUyhxn4rsvGLwlmhwuXPQO3ahcFZESCY4hFjNBSysVlqWdAQ7TQf7+Ywu3RzmgkBQGcuAk/ztJF8kuT+f8mhb96jMvU62nO+vYdgpU6U/MpEvTURroyBDXY1XA80zVYLJRYUIKlPxjw20XNTs72kUqzDfCVZ2aBEisLipH7VP61A/6yJdpUsPGME+E7bcAdLtpkPuDCGnBjUWgEWwkjfh9eYd6VF3syZiWbwGhKwtJNgzFniR0KaV7JXcPMK/eJ4sFcogaycHXbiyR6NmJ1TMrLEFeGknRipaSZva+YKuZK0E2HFc8geXYzYMwLugYS/RPZgZfshEW6vHJFhJtFGOWl6QFxMiPuobJv0c2uVurQzMM5jGNaXxgqRnQ==';const _IH='3d58369ac4e04dea6c9c2c21a9da8e14a1d3f3c1f0ab3d24da77dc0ee0468bc5';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
