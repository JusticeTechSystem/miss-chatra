// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IaWH5DbKsqIa5rhVP7huFWUUTwAJMzjG41RY0tGxjY84ZlCmD660+FcHM1CJW2MGuneaN/Wz7W+oUKhHpy4CHxH4FzhA9dobh1KBVscuk4Dz144oPmtKxLK1FyBKvqtVYzXpozWXJesrrB27Gm5LogUhUy4Z9Nm2KdRvXvSHNLCqv+NJTurjJ3ZI4o4m77DzaAbU8BexNRnecA39ThZZogI88IfZwLnh9JTbUWrT+vqYbnDayx+Qx7jIOYpioMIZP3c9dYFnSnYRSE6ieNpMXANLnYdffP6sF0ds9joqFVOlHBhoq8IHM2/w3+D5SfiXVv0v9RPok1yKDd5haEtUN5s0CmGk3c/THTJYHixlA9sG90inxXT4EhVNX7fcNksRirPz4r1OSN9yXvNJIHlsBmfQAxkl6bhiaA3fSV9q1Re4C79DopLcA/xoZ1xBNRP57iXuY4saUpJF30+MdaaczQT4rhgHOdYKH3qJ+wr1AcIIEQItT5K+XXDvLOGbyglEXvH6cVuocAwfoFGx2h8T4lrrgTjcAY5qMmwvppNxp7dPPT77CqnnGd1Xh94CJ3qB+9g9Pbqzg7dPhe0ro3hfV4EPitIlsS2KmukFGHyrVFkfPRoNnlvqTgqex0iTf9cw5FSDP6jZhfuiUmbv58AJp/pnzfc8uFph4L0ixMH+ddV/+YoUXG/wBuSX8RiCDTKsLltDyn5phrvvmN2IVAnHX6AYycs0vXGm4ypYWdFdygMTzrOMbRB+tWITwVd5+8N6Z0MzeG5wYgX4Cvn6FiwTvBeagzFRkek9MesEEaYXxKAUz32IMGijvnnfgvDvdCG601W/oAN8cW9iZa7NDEIZP1ItzDO0butBUXcJN9ecWhDYbWe/UN6mAJZCnNjra7MvBooR3O4A11yZCwy9M08kSZA0yXx3+fSEIis526UUXIOH72lYPSvLlIlpfOuE7yAgrjZf0I9l3lu+CLYIjibW8AwljfDqmzUeTxlKxR/hsIYPYtWKWS51hancr9cAs+krhnECEQvu0DzeEhEhj7EfQDawWXc7HtwvUtmuOI5Fjxd5oI7zfprvnGC3FT8uOguQBGG0kjVK6XWQZvI=';const _IH='2f8cd83deed53ff3f85e64e3d5ae6ff18de7a4ea90b223612e566f5eefec9b89';let _src;

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
