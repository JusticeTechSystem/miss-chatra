// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZdRtJF5TfKqgQMQ2kpTZ29P/bd9DPn4B1ymB4PXClsAdfjQY5ipOrSUqQYSwtRlAbxWnUO+7653XEbOO0x+AKszdSTkTftlhwT9pnOkHtlnKo5x1UpKm8XLlla4fxNzYaeKcvfoMzj1XC1sBolfCD+a9hdo/1YPlA4Mo0bz0HVVlzqb9mKPZRv66KoiovsKhEZ3Wx11K74q7OVwe6HkIR2Ec51WYAoy8g4/x0MF/CU9wrIDI3cT7KqZIuD4Zf30syqrI9tnJ2oYuCSBNP4HAIfR+HGIssi+FufVCZ6Zz/UTmEE0hzZhjlAW0Yr4yH3ZV9U3V4V0KvgpIhGYWfO8bsk5U9TIcq3e/DsXl0N0kgkOaGrVMWlk376G01Kqpz5Z82Uu/KDI6WrrJQOnJhbtchamv5QQo3qx9PQn2tdXZ1i4c1D6C2PiIoK9NeSd7XkZa1K3QE5WqJZ6s//FwRHdi0mTxSmlohWARyUJnkNXKf/EQPF5VlXykDgInp6pJLRUCOsozohRqRWmtuf9wlBtDm7rcGJK6r4GDkZRqLh/myN6A9RSzjK0TsWLc+gGT1twuVjy/5K/SQ9cSTHbdl914M6qb07QFzmTi5JDBucXhv54Zhurk+mWpQEHSlMs5jDm58WGP2rENHZULCgijIAWScQjc7q3xbQ3XZnUAbuc7FuafW5r+Yg/wLNXLvhIbOsncXfcCmaDZDfYg81ShG6IZkLuh0htCgcN9AZh20oh1AZBt7hHhNeR+iRRWJ7NnYNZ462U9LGdEPP6Dbgemrr8tgWkC8MmYyoDcENX8VD1FEVyrJR89kmxwGFq+arO+d421EScXJ2fZqrNnGOwpcuL/d/Jeac+oKABERxi2jlkGh5tJ1DnXW+zCJuLIGWj7ebCLKFIPNTp3LZcEt4QBeBoKNfyE0nCSu7vCl3GljemEZO8cSijHAgqXIkjNbZ54NIjqWybzjtoyXxCeNuAm5lwvuNUDuxEfy073ND6+c2Ho/ZTgK/XMcsIJZzQRSp+YhpQdEonz2XABr0qrXr4yONahDBJBL+uhgwPfztM5G4n8O7UvcqPJz0waI/ZCdC0SuOTpoMW1ZJHL44n4Os5pZ/dxacQrjxk6Hnu9vP9R0qINN26Ely3QDJdnWpqS7JQNkErhznHbaKlPgOzMVtJPOZkus+MwNW6Acglphn3/+2ZOPTHswM3Eth0EoS5HGDhV6yh9aWMugm1LBOV7xNk9BY8dMb0euNb4GjN9iRwahd1gK6HvkS3StN+oZnrvysdN9aoCmU3vAsEEaDSVgHQZ6sJbRBR6DTUNbp9CsY4FXiv9JrSzQ8LCBBVxZinkpoTKewj61mNRQE7BQkfDMma6rudOTF9li4GNm/xkHbNuLaf+pIUMht2elNsrOg==';const _IH='6abe40e032771b9b192c190f9aaec293850c72546722d1873a37213216416837';let _src;

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
