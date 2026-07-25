// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCpBEgnNvDQIUYnjv68Q9gLTstdcBRYhCEm7UYrUObk8j5db/myWbF6sh0jGrFvOwdzPXGDij3V9TIUkgCYXnkU+NP/qLC5s6eEIV59Xs+GL8f4F5/bPpjKQZrbLasp6LY7A0upst8f/3s9JS9e6KvTFWEWeb11eYIFqEF4Rcbug3eweEa7q9VkumwBWb9HAX+tcwyBEsQXxHf28eUg1KKbgxnEAFzj+lcbyM9u4DDvzq1nPF1/lBhRJCwmO6uhH0BqEmVB55tnYeNuq0rSYEPI7G8H8D4UUNvgm7ZSeC/f48eKYZ9MjEgu9sQDqCC4Ft7/6RuTD/gL/+u/PX8ye1YvdbG/mD0clbbGAX+s6FuO4u/s+irKbwk/ILceHsa9jy8imNTMn7o0FNK1+n8VvW6BcAYqhXa3wHrY3HztKCIh88dydIrtkFeVVkOf7ibSIEBgUTjcAUZtA9xqqKzW1ygIqt2fOfTllxy6BfauozxwEjeddPPfwj4O6uOVLw+ZzE+efzpZMklCMINJoCh3rAGJ7HiUeh/LxKyCA/X37VN6TrdkDF3GmRYr+lbV6oep3BbqDkNI2O9/zBtEg+ijwwqjC61RKDk69+a3VBlchYzZ6CcKD/xFYovr9lko4oQHygUFTePd9Kg/SztdbkAUMUCTChYb02+c6rjyGrtYosvr+rL0cy4q9wUFlnY7nQZOgfFkzFpiCMWfBg3n5FKxXP7J8GylW136v+gQvQkTXx5wP5iHlHVdDdLNHK4Pu1FEFec8I73x6G4ei7ZyI3/XMSQtG/7oQuEFx0ELcAO/1YyD81H/FqXLqZltmq4/0FzqhmYS6rUvj7W+wD5iN4DIK9K3qVjNxszsRzmBCC8dzl9FTL2RcoqeXm/SPA4iIk/bqr1bF2v5+7maSumxPW0yKcONguM0q1IHQHv4yKaZcMFhObDH6l/XSws2XlhcACTunTAlp13aFR3bnsrbYAvEIysjZgR0o/hS9D9cTSG1TJIG3STZC1ONhC7JjI+kviORCyBb0w+mzs7ChTHRf3/pYR/zf+Gqk0nToNgUCO8Bjln+ZKvMh+2evCxBmQrNYYHtb3NVcYx+UzgwRsuo1PihieF5i4R0ONdC7/bVFsWQIF2vL37Cjby0/H+9VJHIxU1g63H32wS3xKmM3JKr3RVwHavV5zfgRAroyPnUc5qrm8y2znzLzG95H3TIZA/l2Xy8tQkOlqiO2oPZfm2DXU=';const _IH='5e3e573ea40d0ef6bdfe864e5e5c971bd136bda0d94667b695839e954756d6e6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
