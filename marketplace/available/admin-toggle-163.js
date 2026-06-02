// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='09gvUEpLioD3bBHHHVMrTjhd6tAkSLCwMKIamATVo1FGh3FYqXoNtLMzpA4wj4bLr0yvoA2ZktUZpVVDRVi+GIMobU4g6cECSpPEbuJSM2ArjjObpE0R7lkRkfUwkoqZa0YlrdWAtR0SWhoZUswkIhQIn5T0ipczmKOzx3IIT7XFQAcca+ZlROT4IMpwVwWaIA48bQDqGV6vfD1gA6XEgeoVY5ur4OWlNFp33aHAPIAvRKO7+oVenuZG55T3enysL+Z3O3QbObDurwiiP0SJBhT4ElAyySHZ7amYDiSYHQoBL9bOLraF2N6aBIzaukb5s1jt0iMDmOiJnkqiswAiInGVYFlUqL7/xOZ45i2uoutHIR1AGodjpjNdqveYccocc9aUpCRU3g6Qf92crgf+MtoaxQDaeolVdK6PXzBLgdNF2YG6Po/fk3bcoM+Se0WzBTyWhM9Z8uJAAp6j+O/FJ/WIN3ktmK3dv60jzTsDFim5Fatmtmi/JokKsgzYTRiWECbApOuustrWfs17q3KAzg5+gQFZz6xg3eRogvmwdHFX4RAAKlGhnXsWSr6E3JqaMzQ0zRtYr3r1AgHLRQaXfmO3CJcuEonxnV4Ra2UkNGfqNGkiea1k5pvVHXsUm7vXVSWN4ZkGjE3uzeQOtLg4s3GR8Y5ZHmL6gRp0NwtI02+tcs3HMvEAWun/L+MF0f5sUu+ISzPglnUiQhswXw7rwCBjtvDkwOo1Xn2ilrsWxvh6dfLVWR4dszI7MTlbA2eURy5hz81VpFN80VDthebM/5A1YC5KzycdaLjYd9rHzbJ/0ACTOD4Pgy5y32WLOh17bqmOBxqO18fk37EasYS1Sb8RC34+troaAF/9SjkWovP72EXYnSdBqMlpXAfPgHKR5Gkq1zbxw1km4kbHMsgVWF9dVsdhjXkZ2NOBYqXx1UK8Cs1XOLvh03NG2bG/Zv/6MBnwlhjtxusGb44QAk5lQN6gi+j8k/Bv/KwPIi1MYReu4ejM2+xNF0TpuzRa2tmZgA==';const _IH='d39e6c21fd7f754d96fb0680475bd2b1756190d14f69941bad066cab83ad36a3';let _src;

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
