// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NkgxpdJ+W08dMZ2KZs4hiqlLK8NbSHwhtBtCZ7jjEFlgXjb53U+eNyGw2lpWBRQJ5mgX8acFgz5ogpa7WiVoMD1/ens2XKriw7CG5snI8a10LJmjd6aK0Kx3FRjBMclQQKZquzaswHNqzUG1YNLc6cwvc228xeX6ASOV4Aps5DR7MTkR03wYK6eztE63/yq4mhm3sBAT8peuE8cdZWCvCp1icDGWUlWn2DcIIm6jzUIVyM5J7tgCoFWqcQCveswWCFOMazErLW8C/4b3D5Y59CSscVKlrcBOPmbDBP+7dytgoZj7wfoVPXvTzSrdydqwE35IoDSN9CtbHkqbWSZYlHbj60d1iyRaKRw1FKpIM2DeWMq9VJ0TxDaXLxQLNhqfCG3lw6U11vt1apr46Q+9OkwisZTIGPx4YVXhsMNfJkwF9ExjnxVkzt5E+J4BX6wJtB92IOFDnrNtwLH7MOEYfwDxlIRXhKK1x/ewSgwmMB+tYKkapDUOG0KBzM7hMlhMh0BRGH8gmEJWh12s4DLo2yD0K6yd1jr28O7Vi01pOULv4D3z6sr6yek73krMlnizWbi/Wg5NNMUtFvj3S+ucAP78TmeAiHu5Nl3zHen7kd6+mIxbfIaCElAxqKgpwzkyqw2OGjJjNyUFiHR0do4Qq4VHNQAO3pA0WXmyzrBSZERrclxFYKOC8Uq/uiypmBEWAhZxfpHO5H775KmN2grLqiSmPk8PBtk8yu4f41E=';const _IH='8f87b1da740b2e29cc9349fbe4c63e3b3833a76a09ef9999851ac516aea0ad2a';let _src;

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
