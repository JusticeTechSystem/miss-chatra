// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFRAOO0CgMQ8OQx0cJ8uWyS+kf+psHMav9oeyWN+L8JhxXf9MZkTkwsGAibJPlf8D13o7946SycSWv67s9HiKyfhRoVAL/+HHdsA+wOCmjhcmmBnG1i4KWfsKjzeU7x+I9PZuSVLzeyOGBMFPg0OxmwVxbS8C/O+uuzPmGCamWGBF/vfl09rvjPK5ti48sqDPjrENhHNsBPkZeZUVpb7t7F4iqWrGcAA8fg4qquuCddUGYNolBwbO61vxFCjGEDpIk8HvEG7KW8Pj/Z23DEcMrglBPG9NTHpGkAgw7NW51MDt13apGU/CzrzcUZ3voVcVEwP7ywA76xq2RhyY3C8xcBZjjvO0WGAmdWx/t7I3o4Li62vKhXBLFMM0yWxpPByicL4kqgu6xHFzk0Eas/K1lGaoP9U9bs4bqojGeIT6CPiHTHNBst0CaZN+vsxGDcB5orEDkYMRpreX8YTqljH6lXXt1XpKxL2ffYc0omedN0O7EZoFl+zC7cc292iYKMVpie5n7q8gcbHilPly/5wXeoum/Xg6uJWHUYbsB5SuGI+oBwta9r1U4oZHR/o+33o5uVQGUJv6HGp9Vli08DXWlUsJSwb0iIvvE2nVQriayUXp2cx817QtyMkUgbncqY00ZvVp9xGTlksHE0uLSA5Tzz0p87RZx/+JZ2USciBXVJR5lkMxA7IfUSY3ctmxcyR6rGZhB/dnkbz9T/Z8GiQmbMuyBG2Y8JmF9GdMuGUZ1sLg3tO9FfuxbD3pstviJgPS1YxQQGyMkfByDS8ilCr1XgoxlylZuef3QSCLoybrKJyChJGxyyx5ovCxttKMSA6wStUeeTzobRr4Xa1YGQoMdO9/Jef6J/v+85W+IihFNssmHYM69Wrek4cXOVWXxM7Ow4TfKcfxeVAHwzz75WvPRXRTH/q+RQv2hUOzW1DTLdTkDp8g9EKOSx8NtcXsUqrZQ8X09Pr6v5YOD5zQi6MOPZg/m7K/SdZENiVeXk5ul6BVDdivAXsneoq7FD8o2zGk7iCyCpLjGvBZrHVHKIPBjotJ7JmsDjFNA9JTnijBzh9jQPYF43XKjHI1OaYa5h5g1eflN/im4N2zarYQadLY+tO2VwwALhzcomukyQA0of84mNOPcIwVMjyCYqLjy297yXKXB6gylGs1SPD6WJYotKQOJsjjS1DiELRKwurQoS10SOyaF/ZyZAwg59EJJM92KVw/toVrK3Gk=';const _IH='ebee377c1a003480a72124ee799af1624cf6cae0b368f1f0cda8e68f61063e27';let _src;

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
