// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Uyc78cR2G0BuoVDZOSEad5Q99HEfGN4plmiP+jtBBsuEsGIPaeDXrJOsRMqaCJwZ1T3KPWmnxEyLwRHziulzwRjsNLB+yjb8JAzkudiF9h0XLXuGbpIk1wDxKYafjYJr4riyRjFSqcH94l5pCZLilaQFfnkRZdbbbo7+LkcJhMQAsVq6U+gblU0zYJLG4qqCbP6M5pL5BYnW+sU2C2HErIscMtnQkT9BeFB7RK+9tUqyBln0TG5LlvdFlHidyrmKto5Z38t3OiP+/3BQ9gO0q/tQ5LsFlJlSxHGVg7DTcxnNxUvGeVeewXzC+D9QWKZCdB3iLWwuTekguZj/kw8PZRZ0wD8Uu7soMl+wVQsnbs/Qsis9dLn18wYN/8vOOdnlkP5j5HoJRO5fjJwkKKOgiQ2P9npMcD0RhEAwaJb1plr2fc/XLmj7oNCvPjrt/+Jwz13mjE5uHXTsA7U8Y586XT2KFDUY+vbQvy2yOjIJ3wv1VwAExPfO3VTph4M7j8b21J26Gw0Z06yheu0qUBODyaMtG0hRKIYCv4/zicb30qlbIsArZGi/PEK0dbJIf4MpXDQ2oTdNCCPpsZKAwvzs6jjKeL616zEFV9PsSoZFPeyDR0rH3wAVAaAjhL/Z1+8TM0f53oYL7ylBojZLIKMfibD/8k4KKdi0Z9hprddFDwjPwZ5e3Qs1apaoa/sL7cb3JCimHl+X5/QNcrYmpbG78/k5GoVENkQ6yTwoolb4Tr5Ol5005I5iE17eKyIWkdd9x9t0eANa61p6lsWRULHfGcIbRohxC1hQpukjWk/ARFzqFHhlGnAp27Yslu9BfYoWpzv4N9MKLKlYVi2n/OiFoDsWVTq35l3+PaSL6LfiURPDdYkwfd45wf8vYlQw7yLuA3JIn19fIEv7Lkno5Q6qx+Y3CQ0BiEgZn9J2BXKuhW4DE1e3VeEqTX45+ZeYOBL80nLeHE1q7lklfuXn7PHKyf3WSF9pUNl';const _IH='33436e06e1735e3646de5e8062e9f6647f8041bc432eaf16cd281007f21e3832';let _src;

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
