// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oVRC8WYgHllJi+rrjHu40Ca34KXMZ7SW4h7FQ6AncD4/XjUmB4wjKjqApbk+ZGOYiB5rKV4/kgemwvZboTFFwQFBG2q2g3UQQex9yHKa9k0Q+PJvqdHe9jyPp5MT9KaZw3hu8MQPMAZiVeH8obIs30cXNs0KhHJ9wPsmVwjd4jjE3FkIkBbYaN2IYuAN9xQEGK7UHJd9vR6r4AE7ClaSNzJXbPu7YXXsKeqaOUnrfAotUTZDTKaBv+rOxUTKZxugIwxHwGrJVwMqzjPwBP7yLCUx+MizP9mcNwFL4txbSDX0+kopx6rU1uUP+NtERuRMrDDwoPZ5N9QwYPd7IxfQmgmZpJaDMELIt7yguWUQwgG3GfJ7T7D/HnV/XJ++Ytf7/5rahdC/3tYFh4ABenicmMEvgGoxE5GP3Je0MeZwxcUA8z/+iOFvN2KZHsGvwAE3tCzC5g6EftDv+aUybbdklpARUknXdcELL/1wqH9FBUZXg5C+nzWatf8u01ZaemI3OifenjOVlRj8vhDwqGNmU+rqCXsGFHH5VMxO4p8zSV6N9uCPb2G/x2nJNdLG0tdIFGLGoauoFbiszDSsFmg/0lj4U6urpfENCZmba6xU4tGFbg==';const _IH='4d898cda23ef5ca6a24c08ebd0d68755bdfcac3b51f32c13aef05a551e59b0f1';let _src;

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
