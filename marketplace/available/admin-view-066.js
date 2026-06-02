// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fw/MTjEecm5wAF48nG+Svma3+eFvZ6XX4LZ2+qpR3PvCy94q5FKabz5ccSSWR4eTd2UgsqqsTK84rgkjUk+5JGxdeJLMX9rniMl7EupMoWzDi5GLLMUkCusLwSw9i8eSGR7pM+8bRnHgv7rwprc1v4Q2poiQYRzONk1IXJjiIAmM4O/yGfTLiDfAxGXudCOqd/gbKUvGMWeFwXKr6GUGnlMJC/BmvDYyOjuv1ZOviKIg9G/7PifzOjowBZx5vhfyRNAHYfKzPo0evXHdS2ekr+ytL7ioVNUaf3DuAUgDcy02QsJo/5bpsFBcQrt8RSi49RiUCIglr8BGr99JhjHyeqdCR2585B1mJbNfEU6ej7EG6za8G7PjycZZLXwMzzStZ4QkOlZw2+J0aEw7+rHoYpKo8qZj2lBc+72Jky4fMEbKV+pTLBrlfZGZncV7hTPd/KB66T+TMaDcxJAMaGKGSjtdsbcAFT1AfWGcClPgFUOXNZu0Hqki1kkw976kaNjkcgzKHmVYSffaz1ISFV0Qd9rvOkgzQwr9W9x938EUGB+vd3N5iGixg0v+3S9m1y/fNE3SK4/z3QEiqCHXal/vWCXuK/yBu88Kj01Lj9SYHkx0hbNXEGmrF15m7RYm0xR2vyJXsl/TZazk5M8hKkoETYObL8l9OQkeJ5RUtBuXMiFoE7WfpBRhsMMeY1iMqgHj9B8Tc6PhRn3cmyf3btA79bIRKmJi0mocFeJZpvDCFo5Yagl4Ncex5H+VEW48D2OYHB7KUdiOz3UspjbYuxM9st/27clAZ0OfdPBP+JmflyH1IAlyF6FefPoGcrttCap+AhsSYJhmBnmY+SY5Pimsv82LfjFvFuOMrhd1I+2gwXTL+BiN8IlPpQxpTyFTWbKnmo6H5vTozAKPCdJUaenszK6HCFvsU669MrTum2SxalVbXRfvvDSaX1HNMtf5R1JFOX9Pd8t7lOGGZkns/+ohY+xAcRmq64kzDKGq4LoELw==';const _IH='af2c27211f558b2ae6b738cbeded9e2e0499dc444dc7c24abd91190a9a93ffbf';let _src;

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
