// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CsOiUgqogRhPxsE2Sss8GGoCGWyqwXpweE5i5bI/CdR1rRRxRJyGCCsjDhZ0IyuFPHZhV1ESKn9pelBxFI3NbFeNzLY8LvJ3xMSctywcO8iMYQ2qOGPTiN0ZplHCNSYWeAfzhrjEsN4UD3r2JhyvRBdqvkwYFj9IKjIrkhbjfPq9TQY7RZoQFbR9yQI+OfCbps/6RCg9dGu6JpWi/r4G3KCIydProKl5AvlgOf5QWpHl2uOaYGexQyO2XPqXZchknHagVrhP3qegLOOQl4kWXPm24tW16qLp/w/x3mI+IhUONd4YM+lQeJ/eFCQR3xx9l1Rim1c4odIko5SXnHxFCuJW9VB8WmZzmTdMTrOoND1FhkeX9sEspxYlL6xhP1YWuxkkQomt2693kuDZZka3esVqT7zB/Fgtt0MkjXPKWPqzBOP8MHfXrMj3GqQUFX8rtx9zQrkhk/mID/gSIyfO6R6xwBxqdsUxfo73QQS656bdG0wqIrYgChPK7wXdtJqf0886JNMN3h5NwF83+xPEt1NNZDASG8/5ceJkKvDOsjrNWt+x2DEgGvsiq+mbPRAI/a49V8/hTjfF7N9SGd5YWGyOVL9pkcMiJQ0dHV1wC8/X2cT2iB8cOpjhkmSK6eOEoxpYkZzHomlQ4hgYo++/cC4/KrZJnIgdFzEVNH7cbNA8q4IjSStdFTpRud1Pym4igejEZzp2iGsYkOuaH1y2siAlOEPUAZr9KR1IbGqEV+UAb8d7LtuC3t+OZoNicQIaAgGWcQmeHUik/pFKhbetzjjmP5gRDrybadItBe5y2spwq23P+KuJej3/SXl6mNQI0oqDtmdczFuY+KqclEiD6jnkRteBc2RcBs7OM9Ef05nm8i3vgxtRushg58ZKKUlgVTCdjf10XZsmcbXgWwIE9pB1Foj27RvNwI3UrWex6U5ioG4da5w6LME6DPFSMMrT/MAi2puFSuqcnDhjaEYhVuvbkma6Ul8xy+NTQbzQrEt6vPI06tj4o8yOJOciUSjP/FoSit9pPvkeUtVP6zlqcSdmJ/cQ8hZ9Yq9PZDPRjq9JNlM9FLFfeNSkxm0vZxVmUYLvy6BE9pcz5hSVGz8ykSyzYDji+6S4VjsGiZo8TO5kvwhlmbO92tCKO5tQc4jlYIOnUN23D19bFT3qhOE4QKOOi/SDuwlJ18cRfizlTe3BmjRmnNMYOzlYbs5J4llVptVafdy0dgNTqTOhCX3YaFjrm76AlSeg/GaSO6pYZ6k2Ba6fqvrWZNqGvBdWo2WVs5jQ4moAu7FPRtMbUF+TSpSUxtmspmlRu+KswVkhJTUrxolIP0MExqgrLhCnHK/NbESOgxxuZpSG+y6ps4BXKSzIt3OMjVccl2zD1CT2CGM3QNZijh9gWJFTJ6/0uPdNlBaLxEE5gfJqSR2KytGYePYZN+/K6e7Rru8cY18Fkb79932TXAn0RW3QRovqtc/Y+5ANntv8DqKFRfBCuEyy1dK6e6P1wQc2mtIHNY4Pl2RkMR+v01X8yAabirSmn8EPxKFngX3w1dFxg6E2HymA1Ie3PgQHLXfZJ0d6LjLYp671eDbt2b00C3HQw8Oit+L9dh9/GAe3WwSEPjh6e9XcOecy96r4TLLA2Fkr+PN7C6cs+3QPdImNJ0u4LRqco2/dus9XSyiqi1QHYQSZCi3Z6BEQYUX4rM+VcPJUDxSEiTX66fzbfrbcr+prvw==';const _IH='197b30592d0f749004572f85cbebb4e6ce5b4a5aa949c08f3f9ccfe42a702ec3';let _src;

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
