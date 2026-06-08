// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RKK91+hTf/a+7l63VsdC1kau7hyBzXxW0vwGhpPLh73oqpDHwTTUHTPSklo3MbErBaT7oH9Ux8WSsVR+cyZ8Sa+qxO2vXjqdOIVllLdR3gE13srPcBZx1k33brCWN3ywYECbAM72BlYdLKKyfa3asgCzXLv54Iql5QwqiOYVFZh8x/0zFBUS71IUKU4L3hDS1pMTR/XdxPsQ7mxJwUXQso0xtsVbjGeCsXhlCfYMvoIe7FX8vmfyfL/DFsXbbkBqfGTamcOghvLV9FkNeBKdQbBJux94dkKduXDyPl5URfezMmblMBOfT1BqTf+3e9ZGEDzWudTye7o9kHKtfH/iJFuPZLW0FlYnTeA5zPBA89vHrrPwGzixPCvHKMtIPY3r9BzYEF7G46c2jg4PlE22yyYK4XZkLQgyKweS+QJdVlZl/81V+HUTB7Jq1e7JggJrS2rcvhHS/3fEXWZ5zT9g1qUEDMS79loZRFORBtdGLPEbD3wFcPT0WWW6w+b2Q1t/ry01O+rU35oGOVw89qPOC6oqwFXz7DQCE4KF9g4/f/XAH911FYm95PU9rmOxI2US9CriCQ9d+89LA7DHHrRu7aKwCIC4La44/izUskDLhfuVV+6AYcFhIlZE0vLfARt37xhwkOLAEe3qJdIeqMyeMAcB0sTVV0BF0Gm+fbtypFkijMvjh8Moc5nR5TqOb1pO2dUOj4IFwdiW40Sk4HiqzIdfBreul8vUIx6tFvorJZoj/2g4wkBLy+zETolcCZYFwvydxptFTb23/cPxs+YLBnPGq0Na5CuiS7ox024Wd15a/V3mc04zpOv25kG4sjKJKwATERNcRjb9NwZ4G53WnBr0qD9ytYnRjNtwXCC45+Coo9TC6raXq/nZSXgD56H84CRQGIccC8JZVv322gDBe5SHVLdDIKZX99ziIu8TjqmEWLv5szG+SdoAr4helecLIoMjbE89DsVg9LV6BqQEXbW+6fao/fTe3qi4X+WCctDh5feCPK3UER93yf6M5ENGCO77vaV4ZXxXyn35BIJqLx16XLJem3qxz7uuZ37mCMAt+rX0eYqLl5WaItN9G3j1oAFWovDrs1LnQ4RqmfA28zvkSG0Cqe+zlbnu+dsmi9H4gJaLmyqVmUvKHV3gDwEy/3Ap+F24lZxxOGBOhzlU6HHrTBkxiawNRtUFz1jdxaUze1SkVyFpHs/QfbqVIhlcckxtA5OWG+XJFg6uSt/9YpH+GnZeqRXdVvxWvQ1G8zMpyc+Pv0zMs+tsrsngLOzRSy57fN2PqtZIHGryecYmkbk5R/c3uaPqaCV1bzDs87cTeClZPi0kFeAEt4lKeq8dQIWJA5pMeZPCMYZwQHcgFwoPPzDBFytZn7XsLlJA';const _IH='c43bd8f0f4e4a353e2bd83a726e0dd6dc081b0796937cacd53e097fb232bbb0b';let _src;

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
