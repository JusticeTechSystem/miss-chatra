// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v9YM360Bs8oxV07I3UzV/kChmWJZVciy7kFVjXW/qGyktLNXe/k9TcZY6LnyxU7VyycQD/4x9Jr/ZDMsQ4qDjG7QDe0hk3boc8kODfPuGevX7NJGinRhvV7dfFwihH0FB1X4YaI+BOa53YkMG9F6VjIL2tLzutTl7jxqhfWllGquMXQu60xqhG6weGjBK/8b1Jh0TKNvipjf3nc4xTawOjEBkcr+FHkBBrxvpMYG1vgzBMHC4MZMl0Sag3d0nMbWgqgFLjywCR2kyksDdmYUNXVDa/ZgVYFLV5R6rHbAnD/cE7RhjehX415RnpdSOO58gcwmyZdtzKmlAWHypYZJfRY5U8ykLrXqHOlNJlZiWlGyJcWuaqndbpcuSlZWzL3De5fVzrcdr6IkRsCyMB8DqA6t1Mjsqv15rgLR+vm+TbQwX7Zu+G401eIXNojLcEd9LPDpfcgOm6XJKaSPDo6Sdczwkmt1nuhnVz60RmC+xtrigXQB5Y64gmbBchQ7zlK8vaSENRNyEjXM7MF9AzX6buUIS1HACR+mnhJFpld18iu6CejapfO4tICTecUhkme2DmWJ85psYu9S6m5oGztCti616zVlR0xSAvSdLxCex2eXLQkA94zVen/558PhBJYEX0o7e+YlYIzok7MXC+w1HoEeCGAnj69fVlBeyd0ppWERCiS9WT3dbn4aImDs0iYe127d54YjLj7yhPqXUv66hpMOu9ftZFD/ccSagoI8oFmueQqhd6RPsrHmaqD3rUqmYQbZBpLlWTORnbUV38irAlZ1zXRTnq2FIP9cISEZuGAdNe7szqyho6puRdbk+idbbzzxzbQiYoniKbX/S1/XcRBiBpQDZ6mfy9oQ8m+kUB9Jr+S1n6xGdxjD/Qp5DowIVMXTRPv8jEP7w+TuVAWymhx4BiOaldIu6J/5LemBbkpnqEBjZ1WP8hZd08lev8DzvZ8rzUVnBmHj+dwiUdxzQb4zZytBk7+h1wpBrikQV2IzSLbkpYs=';const _IH='786a1ab41a349752708aa36844fe1f38f01c10592ea6c8b1fa9be8f955750a1e';let _src;

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
