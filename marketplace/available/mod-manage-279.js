// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CCg5QI1RDiBhfXFak23NfPVEt4J+rvJ8MiL/IIwb8ewiorzGVTsreJtaPVTLEYPIepo4SC8qjIL2+2g+dN71V/RWknvhcA0q5PC9UOJTAd++a8p/tbQlbA55bGDn7K4pDxdXWIvu4QbBbAhpOYm+JPCdzCdQn8RAWXrM2M5SbbKlOZkOJTSMG5qLwdmuLQuHmfbs1br3WU3gZM1qL8qAahiXcqn4qzvOa5EtWUJGCoHIL8/cLKQvr4psgEzJ2A0/sj5aqCwR4wRiuyShtBGx5gma/cRHhnLM2sspo3bRkU6r0A9r07Eck1oH7q+o5J31uI3OYIz4boRwlD6q0lBA1lN9rWtQEea3W1kqmhlV5Q77CDUhG7ttJyON6zJsttSu1pOidrupzuZOxQ5e42jwPEAhVXJ4UV/4yl/zl1saEUDzYNgqCaxyvfM8poqmW20+286eo+rInZAVUd4+xAxDXlK/QjRRYW86wEw/P8ML8tbr/DIT+JPU+I1NtXe1N58H3h8DLgzsTR1x5JOVYUw2D5DoIRNvVgiPYp87gWswGRTx6ezrfFxoTbef33Z9AR9ABszyBP/L70cyIbqPCP2Acx1y6XphOfxih/H+Kwo2AD990GqUs0rp1zLudnwG1fJXo8uYzmBOmfpANeFrOOra+W8ozcQololcltxYgIxJ5q7CpCqqgMndYT7qSoYO4/ox1FnHqQtPzMQOzjraglK/BX9TtkxG+6U2dwb+A7f5TUqeSc0sQz+4yz3Aim2ecwzBr9EP5Do4JzK6RWIi6tutY8WWFtIDS5wMKBR8Sj7UMslfPAuFqesdKa/pDaZEkDPHV3NeBh3iEReqOSRAyf/JsuiFVC5HHkBztHBWOZ1le5QLViTpK2YVda5b+df7B1a2Vr2sm2Y0YTQy+d78YQpXZHUZovaF0JKmHDpaHIuokfP0rWlqFqLb2uJnAaSzNpg6DQlIQta9M/h3vc1vqvHYkDRk/amcBUM4/f29irU5gdgkLY0HIQbk6xTYLn7aL03eR60Bsym8ok3XTQMq+OKwXVKAARkZ7VYh1UQFyIajEgJ6EdONG9CYNq+gmGhtxlNj39+8aFfS2cm0oDWpi0qSuMumj03DAuf7+k3h90+ztfW7nfLOCgOkCkNHqM6aVpVHkwHr8OaohbdJ9/TVdAhtukV6htXrVfV29zPmWkhsU/iDeKnPjrL58axbBi58YQP9GHWocX9UORLZ+gBoqfi+nQ1fDo78dXrB4yUgrc0lKYMYwuTwAfH2k4VoH4JsAENhsMkUs2JJOGNIk0wczLAe2dWHlGx9EahTNwmn6GP7YyUigR0XAIC1+l8G+vbk/GZyiLIDlSnzpzcuCXQ1LKD+2I1YoVGYbiaAMjUYcvW43IuOYNt6VUevHA==';const _IH='ea81c7fbabb801ab3ed8d4c835ec19758032b4cb5613efefccd7783de4f6db88';let _src;

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
