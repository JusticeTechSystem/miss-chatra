// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tr7qiSy6EeGtfPTFOm5FLAHy9UjRvwkcbp+ODmI4lgWae2MZWQLJfsgIS1SVim0yL1NmrqAXThY0x4Ar83Ce4xlH7SpYYPWTI7GY6fg2XnKs87osLDMhGOxS8tX9eo91+nqTdf90TuV0NYJ9nlgJUV1tGmJrvuO9K3W7oxKqFgEhVEY++0VtWw231rPZwbhLrLdKrJNUNZrlFVsyYnP2MbRh5z8f4iuE2tKJr0CQN9HowHIP5ELjAa96yYU14bLSdsfWcmPXyg3F9+ythAEyRvpwWI814+ngpsxOy2U3L2ekBrMt2ETZG0KFjNQrAJaIpV8r/BAgpNVBkUiSVMdPyuNUehxatXajJH0Dgr0b81K06KieR45+MayvuHUPYozN852Df4c1VnBa9Wq5ugzDtLeRM5Z3LjRNmxrfsReUDyUjC789Hkg/9wWqQZbNBJSy4MbGB0H0gdPZWlD43/IoE0UX12xejWp+bwpmmfQT6Fy6AmunxL4nqcBSGvUBfdXm7/NroPKk7VqBd0qnn0xegyt/FFE/ION55hB7ebPP6gRSnJpWF8HsmCDhZ4vEs/+jKeU+k27dbiAnCVXQu/hC/3cK+ztYnNCGMtLlvaFlVm0pfaT5k8C6HhzjzFvwPzM1+9TZ+bI9koo7/rCzqqy5fojzINZOtTKtp5RUg+VhVvXkThe8xQis00OmcuXrjl0YSR+5VJUY1Ri0pZC+TvJ50eHjzQrCv4PlJaRohx6MNnNdzKt2NMQ4833D61bQbujIrMzSvhtekSnKmqzSpbSNMK59M/mBT7dJP493078b1bhY1npYMJNbynDztdQcR1BMm+O9epdaeXnY/av/pnhtOcQKrKLonqtB8/KpawBPPlmUJh7h2MiuqyB55sXNw39lfxQNgMO6DGqbQb/gZw4lRUGx07rhb24chvTtAXCWPcwg24Ph4mL4uHDdYYGSA/ca2diaEinE+K7uunbvavc9oKONi+UKQz1S9Ea2FVhcpykU8eHdaBlmvZZT9ITdABkLAqfF3leci5JUfNee8VE6fLzSOya0nmNE2eQK2JQZYMt6OSOnut6nwNW2RtgGyMOa6G9MGbWLtZNMuLfUKx9urhNdAY834L8iNgf7Fbpm3+aBRU1xrG7Im3iMly9RZ+daTqjXtuw+JkU12HBRCcW+IcZccZy7lB0aXpsTQIAT+NV+M5dgRWhzp+VMpaOPEXIcHJQGkYLKazBvQ3bsidyW3iYh9QLg';const _IH='89dad22ad02fae0ed0296debfb43c0772671c07c2f9094830ca0890f6a23ea49';let _src;

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
