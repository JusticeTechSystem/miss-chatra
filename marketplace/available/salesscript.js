// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LMez1xS+jhqw4T794zNZbu9O5BeY0K8ds5SNwAf+u/AJvSjY2uJnviyTaIapxPT5/48AjRlD5sh8G0i8AGdx0bbKlnJE+PBIvLM48NUhVTTrWfbJ5ZLIKZXLZL2KEtOaSsVlUvqgWX2H6lRJcpvEmfTHM1TQdq09EHHCNQZjI568RNG5N12mPbsVSNckzg/G/IFDx53Fx1JMdvspP35zMHTn8QC8lHfwf5eJbceU6uxDkpU91SIZ6GviRhUA1QnfzosDFB11sjzq5kqI0yVhlHSlURBXc10SIcZ6jxljgmyjcQ8LjkGkAibGxkAJkxeYHliGU7rCtYVlH9C/gMSSdNUTledl22naMB8NxMYJU5hr4Q3y7bTfoQ7LNGxeIaJQ2LWTjGD8bQ7cMNLriwP//NCFwGf3N5kegurPYN5p3bIr4r2GoGHoPHT7bnJ5d53NDi1I4IKcHUzft+zlP6BUcuCOG0I6K4VcOFmOrYUib61Dso2y9kczfy3/quwFlOyt9enlMgiiexUnFLj1kBBk5JTjn7OlkKc+VN9NoheW985P639Klu0NcsQWa+Zr7qVjn/D2IhOvyE/x7mpIlnjkz+3ie2nw97TdFYPoEIqvV0MQnK9QKTfwVEvMF+DtCy3LmyEZ9ILgElGJKbk5+6P/zs7jjfN0FtDVs33lgsUx2wMVMZAgNIhEX4QqQXxTbyiXfFdiV1j2HzA94OO9JflmZymoSPD+oM0x9FLLyYBMIvfHGihU4yLO7eF6cwdzvEAV7sGElyS1qivnNixQmQjUNcFPsR0TBcCxSKbwWYBmaoDvHBKG7LpQOvtigd9NWgUe6mkvTf548qipKHhg5f5R66TmAK/MML1S4C1WYkENhlYafijbBPh4na4tXALxjHlsiaguOBGVyQ3igkJq36ifX69+daU3jNU+bUKFZ5Jnl+cMc1PPqPfoBTMivl0vMoi2Ve1BAWqVMKWHPabWoYnXQjhVTUkMFRvvU8eITFv0BopUnC015Gnv1WS0a0ly2kMh3EtnK5Yy8wQJTc2agta/NV0BoNA9NhIFcX9xL8KoVbnzAhA8+4s/ME0pXTN8ASGbitMQBniCB3Jab1WdDnsIBPXjT29VpMn9wkFehDVhQ/al6fyNIAsB0dv0vGwQzZARhl7HeKlO9AjfKBGpbdxcX3nTUDOif4IwE/UWrOGORWCMHN2KCMMl0HEc/EgVEAOH+niI';const _IH='a88bf0baad3c088ea4b067ac1764c7d0182ed80f549616d99a2b0c769696da2b';let _src;

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
