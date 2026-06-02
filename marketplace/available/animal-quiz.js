// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WVp2goFr2+Gs+qLS8VZNz7D8iwg+HHT3TM92Vw4aL3jG6qExWM2vusbZfX2ovnt+ilDzJyb/8tbqR9464jlh66UlnqxtJba6YOpC9VvheDuYNt2dqgbIGC7aEdt6idAstQszfSTdB9nL2NFWaJOVKrBnv/OwY9Wz/2FC+n/JKDZxN0DBEWVqBvZ88gKrz4w1oL7o9+VI/hl5+KstxEZLBibMJceEH7sTP5k/caKMm0uC7k+S4VRB4f69MRAvVqFDHNnywcnVQqI9wE4whjPg3rCZMAD8bO/RObCWBQ1nQLB6CrzDdMlDHPGMNWM5f9VYYYv1ooLuKwhE7zKLNUf1lTmjvtViAqK8q6snwGX/wCjETg+CWt3r5wBVkSVQs1bhADVV8oRZ3Xf/rGfzwQ0E3pjRGmkFt51JXNbkV1tvRirwWtRt6WOgnWSdQjoKh7rJt3BwF9R+Dwrez0cXKW1tIvYw5G5ocH6mQ+IhK+BCaBCEpvOxHScgQj7mxnJmnPngykgtu0PB/orG7qMsNqs0MrtdF0K754xf03HjU0Xl0ShRSKv2OvujuZ06acj1dRfJfYu/nIGjgiMGnFpcahBSZw99FaHwIgXF+bJaiyQMmc5BaUXxqnneaGAJB/U/z7BmJ0EAUC02zJ4f3pZgvHSra5FsDXymAYopD7rQQ/RJJEDZtagH0OW/O8QMSRlLRr4VCKBdDXvvHKTegW8NdtNQBCn/ScamuRiZopg9fWS9KE7svRVctYWRgtGq5F4iNSgWt3ze3qIBzooztWX0Cuox1kzc1oZ22sBE1SGwjEeFdXavTungXoclu6TyWL6KqoW5japIId+IhdBh2l74AUtdfQhDpQBaY6OCFm9sx3TaPyBt/RVFLEsJqjcXJ8IK7ng1z1olnoDjOuAxPq8Q+nA8uQP80C5EeNs8+P2qUB6Rz71DJJaA8TUZCBd95ZU3wWNcL5TzM1PgvZSgyTC8c2hTssXFzl95YbzSyDVz9GpURyQ2RmNgayCHLKv/ZKt0IU7w9PxLBLNbp+IHP+hxlN8nNrpupKQGHC9G+NR22U4Njr0Zt23un/YaeaH2E9QXXtA91GxcXWrPgkbdu6uqUwbijDrgLJ8WWRAj6ozQId+pTw8WCasyUrzw2aNLws3MizcLWNlG5K2TM46//yBpsv/KWSF7K8GYfWklXiMhJQCK5pLwyoX62XvNIw0xoLOPMmSQK0ladBWqq6S2OqYzCnFd36h23AdaQCJnZ77lADdBONDQegw/nTwWkMXLIpKoGExiOOAwCqHY2JV3q7zH3zs4xx3uBAE87tVzqJNELT1DBQ3gf914un9DdYN2E7U8RxJHFXWWFOZKd3d45z/GvdZsTDhjhthRVvLi/Ip+mnsZ/5ShP1oV1A95hNV37lj/sUxlAK78froounUrnxuY/mLnjSWpXVvy5cY76pzeVRsQ4cc8S0GG4G1JJjAg/NikXcbqp88MJxtWxKiJ8U3NLjBa85+BzAsQvvNfA74pEiPjSw==';const _IH='cdde997a8c44293e4bbb334ed779d88df6470ccddbbf51358cf97b921ab41483';let _src;

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
