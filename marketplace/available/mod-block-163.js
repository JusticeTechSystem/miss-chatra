// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hM0g88qtp35+gIaSzwpuqYjYIl+jMOlmszkqmKkA618FyGh3uE8+WCmuWOGA7M1Tpc9KWYj+VTJTS5Zal6pu0wrxz5qWjzoRW5rrMtgE+UviIccVVMqG4dBifyh15LEjH3cadAbPQIxN9NBnB97GrY/MMfF7G6DIYElFT6UWy8FPEZJ93w7BD4RtjVd2xI/fjf0DLyVdHQHm98MPhOlCPSjINPF8MM8HmFk+7WgQZNAoJtjtNLE43zJhz6qAeW3CUgr/h9VGoiBiPSfqkZFODWp+o/SWKbRqqOfXiILYjIQDUSL8zz8KYOjZoF65BEVyTbdmJV/uOngLMwdSqkAz9VCp7Gt2IsqCoVS2guOvFqKnbNoL+5R9/I7OxNOKQe4SPaAywZrajzdWQoB9qhxONhrcthGnYoc4EF7ETtwbfRMhdVRwhuHJX43NH+BU6xoRDDn3xrfzBrj+H8psDzKQrpOwnK/8KoTqXHsrNK3nMVLwAah1BOI3Akj5ixOEBG9As0drWzgxl7ZQbKfgqbwGtEbHxCreQShivp/Y6Au2rfirAGHwFPmzb0P8yW6Eyoh6iFwO4EFf3TsjY30Bo8nRWGZIZHeGB4cKJOlSwEfGjc6RQxnXcusPjhKz4NRQUHrJOCVZJSzXaDVc27e01Hx62TCRLUNphdsZ8K4FNoDZeNpyFqP1l0W+9298TI2yCwu5HgSySr4Q2rPfLO9P3kpynbeRDw2+PYcldNdijOPf41hZYV4/+FQqf4gYjZLiKqUfC32jFtlUp0wfrjVWtN9jcg4L5bz0DXyJJBkuKu2Uuqm0ODYyc2Ezdxiq3uXxkss+xaTlOx6+Q2TskhAf/GHHkfx1hkdAcSmk6K5iabSSHQb2OjGvY/x6h6FAtxdX0ueL+++yd9r7zmYBs5kZEgJNufbpmWd/DxXuepHxd6/8unoydkQI2GMJ3ARI4jcyHrlJkfZgPznpJYdkNUzSrYcVYXuU2sMU0BT+aafh/DljlOKOizLT7sFLHqFOJ5DYbqmKO3Dm1vCv80TBMrxF+HmpHqs/K7F8WguNKo96u5l9wkEU1rzel2kcxWQVm4mzjwGeYh4Yj30Y1hgFnyd/OO4bk+PdjmiG+XyW/vWA1hbf7TVbQ9RO9xQSZXmKCo2HnoZ92u/AChAoSjazdDjUfV9yU0IbcTQX6HlHJraVQhIFuaVT3b23us6ciiEsTddg4eBvkI/kmPSwXa6CuBpgwc5EF5h/N4TCteq+ayJfpTbOzscAHq8vyvOeu9Fd0yL3/YU/Sgky5pzBMT0uRSTArg3hz4hEw2O9D/FcpYqozV0gvqF6qnDsaU9/xvMgs50C7ieAqp2oM8RJUqfJcRhBuve+atbhQwlgWYFNH5sNm09J';const _IH='c903d8266d9e8c612e75882fa067f658fe227f6f34c8679bd20c6e16352805a0';let _src;

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
