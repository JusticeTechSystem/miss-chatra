// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+I2zGqbZf+NWAe99kVeWgn3Zo33VKFUV60YhKwD4FyJACxwNEC7D/rnEKz0kLI8Wi5LeepaPzTfzARbH9mXAHGbs1Iqh1moo2LCTUir6MuUN+08bWsOURN5RBAyCJlTMSJVbSNKTpnRGbUo7/9PO5cpf1ySMX1wx+cO8oQfEdc4JHYT3qquhNREHCn8+MOrpYD5qUh+otlGfthDlXfAEEBW/iNKP6I+L3BXwCEjq4RsTrVJ3rysFzMjqckD4u10vijPi7xqAFvuO0IwGTJFyQfNaQrb/SVjMYjrYYMHjzb1V3FXAOUBqUdMKtMnJPrvjbMsrwfPK9fHeJqwGQ5V9v1JCn1jzNZ1DtbV+3KdaAPfDqXndWamraZ4dhEVk5qeEiH+Waf3LEakcSuCDAmfOY+li7NzTH/HnYwHnaADmew+ZpTC0Zih3OLgQ2pOTa0Mn06XfnsSfRgD/UiKTNQmTF30Z/j5xMmw17YMH7KgLX5BngIFy9yAJM9HiOtr4Ik5DV80uErpagWIqBCGkSij2unqEEgnwGA1wXpdgqVWVPH4UE9MKebj648rYZ6zkbg9ViIPgzPWhsKjEAdRP5mJLFZ7kkRk1zn8bG4Sq64vI+3RQRjBiSp9R8t5ZKtdPBAfIcNAepQ46g+Lkm9RzXgWAYkfFE3xw6w+Ps2c3JsRnR1QDmiiQshSI6TWta+IXxbrhJoGUa8gOuBhZ/u+4ARAjzXtnCbxnUMJe/T4l9Ey/H8rnoSs=';const _IH='ce39d788ca73d0f6fb18736f4b7c2e7b3335ca1286ad9c7fbc121a847d282fc7';let _src;

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
