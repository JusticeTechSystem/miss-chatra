// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7H2jxwVcDA98f0fenvFuvGYWyOcMtMRxycUDbYStYvUQDFmQotQT3RtynqwcQVgRlrfZd2/8AFxgtp9+7pu/Dhmi5vz0/DpHn71LRxe8RMn5PETD6SqzGobyJ/aVySd5UeNaO5JDWoCmJZmrqfLSjfBXxgwxKv4YKzpTtpCygw4njYwQzDdkboCYEc4HX9vhnrbDxj4NDKrfiFshLUrxSMQxMBVJaSwK0DCoY3oaLaZwAJVIz2BhPlZ9FsloI1rrfgNmO+fssauDQOTFMMoje8F6RtkTqbrfa1ucPf8rki+G1kL8VTbGfPklQqu1KEIjwojnBonslRORHSx1JhRFfhY3hdHheOdd2DZ3XCRnIVHb7WwkZQ/s81bmUYgOgYxC7UJCCDmaNBbrYVf4SvO5CndI4jD6+ifS+pv7uN4lFrPZ2bUq94U0xhZREThcRtj3dqFKagkT/1CzRB84O5JZF2E88MPR3VIl7YLdYkFS/x6Npz/jQtyBo1vrB3PHXg+5EW1prJnZP3nsnQTeYWRvu63ASTvJ/a+NRxhvB8ejvdkjMKmt0Nff1R/0SfVk1eikG1q4f2dx5+XIC76EQJAn0J91qR3aSAt7NOBA1CQKofUM8FKuvlEcp5GIiZjcg9Zu8A1Z6MpJ9eyqN6X/UE8kjLQ+1hzq6Hv9wC5anjSW5BQH5hFynNcH3/uCkNBhYnxeUTgBsBTqGdpfZiw7LeL7FX0i9CGSDGZP4Oc2qac=';const _IH='2454db302ab103e03833bed5344324985cc28d73e40d3d0256c4641d5dbf4e2b';let _src;

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
