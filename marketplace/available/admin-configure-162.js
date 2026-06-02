// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yvJHTynvf3246fDgh+aZcQ7XFktWYifqwD20UK5Nl1tBSmlzwhFjV8YWzLaa6QudxzYYkBSkK/+Uf8VxpEQ2DXvRwx9FOnbdXT/7+8w86o++YBv7yzSTxYggOtN/Dae1kUua8SsCyikKTXYyJ1glo+jlBgScv0E146Q+0/zo6Ra0iysLxoOU0QTGezc2+j/0tqzT5QjZfvg39VdXOkt88SVqLKe0vNjsF9pUXwu5u3PxrVzwXSnLNWEUv6woj3QqHdN9QW4QgV++55/RHBJ/SXHeLRHZuZKCOpa8qRWS6cbUtazxiQlAf3O3daqpoFEdYi25SWV+fkI52ohDYCSjPIBlvgTcTTrkwh5YND470G4tmeYIwbg9GArwfvxyTTPqJP3+RcAnFCOIrIZkyFwScAk69gRH33OYh8q//DxW9Z8jVPVrPn2Y+S+i5FtnrofjSsks1g89i2SEdWn7VTELVig1QXnDxPfVY3PIf32ElRqNgMyLxySplNUwS1JI4YcDwjXbGJV7Pa/Pzwbpk6eTtDP613wnKF7xMcm3hApRzE8LfLf514MP5bjIVGuEZZsZRO6dr87cPkIBczQGsxhGTECLVsgSqDrMi+OpCE4eKxckZ2pss34oLX4OCJdappOc7NMh2A6RD2VYueixdUUVDZGsFY2o9cU2fDzOP5+/IISs6CU8R0jlGOlGSuj9x/q05KbQ/ILm9+bdK/6vSFrYmPS+FczFhdH+yCb+jvoA4ym32LCMuUJQw5/HJRvLscvZ/IIkX7+ZavOVbnHBuQnoNqF+68pP6Evor0XoqGtkPutCaPjsYtLX+BZg+DQ9k1Gljbl0wSOOEFyBZjG5FcAShOPv37ftzRBNp8Yx9tL2dBt2YaBUxRxe780+h09/soomBSvC7eKgjJJuEll7jlyt/PX7Bc5/SU0iRv8aagIZPAdMsTYOXw6Eq02anlwT9Mr6jYAclsMlYOp7r0l0r7A1c9Sft19OCryQzSE1vT/4g9pG2GgWMKRtBpxtotJvYTocwfHt5JMk+864MLSMjRoPz+zKCc1hRg==';const _IH='1bec36ae65d2945a541b6edcb0f50bd5d951af83ae5143376833cd7d58509d59';let _src;

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
