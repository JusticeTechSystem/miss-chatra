// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/JtwQ33NXC2qwsOYRQrchkmSct6Dx2A5YvycBYpFyv0ZGhqMxPPoRwB9J12xp8OAglQbOValxkvZE6Nnl81ZencTVaK/oA+zDhoReuT3WlMFnO+cGn0g/1WM29jTtJT3xLc65H1IsYkRtBqtsiKK9xvGjvaG5mB8Lk1g+FUyNeLiLH091/mjlipvQ8l8LAnPellF7LeNVyFDujfpJ0u7DcOfsOjTwv82jtp5OBZqIIYQS/55PQmYRVF5wDPwPqO0mYHhvUJkM2582OHcZBY3NHlT6s2tgm9CwmagXZaW1+g/Z7dvlYUw6fE/U1ivw8A2l3Myut3Jrp7tCHkTTpcg9amwAV45Pbj8xt+0NXfFkLDCUb8C/lLfJ420IgS5YguXVvY0zV9Awt2Y6l7tsBnGLb5nydDxGxxA7X6h4n3VKvNhZ+HVvhi5XaY0lsOzzvdpNovnjDO7VS4Ac2ByiB8lVmMXUi3YrlAg5UY4zEIW9zTzUX1WxEqEoqRH1tansN79HpeRHN9lyneHTI4IGPtAk/xnTSfYVAY2EJjlMTOy3uvH0R12mJkUmKv9gsZjYVA+EDSa3WCF2Arr9ZLFruagoU5nm2E+cHlptcpw5tEoofz3nriMUYcgblYQ94W/rCOJkMnz6f7DzpexvOw9lp8fBLaSU54reF7KNIay47jz99FFzdGSy3YNyt4AS0C0Uz8XXoZsaq60iYBNbaXaO3JTWsFWHX7jvLriBJXYTcievPbBOjIwrKy+bexHd7lZc+UutVZxPR7xBKIeNkJQ/zGiHKoo54s7Ek7yH0v326Mhgfou+S5wkzra7yxbQ/Zef9aHGw5qlyZ0u+KNLftjxML3IRMMrmgsQ55MQTJt28WFMurLaksbaBlaPUPAZTeO5LE7mQh7Jvi0FOJPyKKojyyHVDV1GtiyP4YI8zxM0MYkD6WO5DIpllhB/E4xC2VaEvxBChQP5ScL/U3yhhkT3VOpbTRnPU73G9990bietSiMdlGEDM5IZNZzV+yBDuVfacQL8FzjI9FNYOzBj96gjSYCgsmwoONAIJKKfjGFPSxF2RI2pRXrWnQKtol0UHUKqjyDgBE41blS1TgXM0KvDRBn40QdoDvxw8rrfh048btjQ3IOE9zxlfHhiuMQfA==';const _IH='0f427c9b32d31c282e14449cf5cc6607d0e6ab09c8faa39e3ed4867e2666586d';let _src;

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
