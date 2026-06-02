// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M6zqUWaevHi9b7LqBU3jE3i41MsKSm+zDNgVr898vkiqu+yJBt6KCXasaJvWOvlrwFjeDnDroIw1/4Gjv70NXaTu7ikepjMbx5VN+GlfImfoYsYjEXKtGgfztsuI1gDUT1GGzlZ4i1MLxN6EhT1YQF7moB+mRCaKVKOlIkSwXv2mCjCDMie8L0FiWc109WuRDUBP/ZN5sMLoqtnzoFKm+O++MEAni2xFE0VietSqV1j3bgvacN2i801zpIq6Y6BqBaHhxdBTG8hD//Tlq5Hj7+EozOHpV7XjkvVQ79iDrlPlNV5xBU1Z+gQmbtuf0OeZ6VbqZQZw0sYYw+BJM4X9dMMV2KfknMCIS5y6PoTKnI/Lhqi1nLphZPXdE/ugKMMKFdndm4zRfR2S5kXakIeLDW84yaV9JwopdG04XbDl5Iak6xp6D9UtZJRRr9bjrFnBNqJtbSapsLpOWbE9COxwrHI67xcSjUVyOolHcyw7fyzPAg/DxHMnlGaqyCAKIuALfofn/ngEGaeNQepf1IAGC2HW4guhUNyyGZi4u3UMySES73tqxuMGiQCqp+RY99pVldHDfSlXVI+VJywFKyjx+nny7yleLaK8rOw0G0x1nnoAfqxzebwVjNygX4xikiKDZTr+60EfYApAbDqrha9wahaz2EsLmOsnBxPj3/qeC+iaKZtJ1cilg0Sh+K02nzOR64aQ/sQjlLIdDAQQgEFJilk8OoOcXzPnNxAis0cbrSBCSBjPVgCkHQCX+R83Rend2ZR+jJYngSMRyTqg5I/K+HpZVqzuSsB87jZs2B6i4Sn/NRNcDIoSJTZtonEerBSw0H87P/z4dyhd7ezbfD5FxxcuXpIdg40gBIbGh/f9E3makVV3H/JyiAhYBqO0SftbhNVVy1v7VldJYQcYtSSI/rpLgRKn0SFTuMp28ZkVBoHuA82G7MSnmOZjY1XgizbU8jsxaBYWC0l4WaDbwaxoRsloLD40aeD3NMS0QgpRcC8OnVuBu2QF4yloh7dh03ybZ7IdM5GFuX9D2JZthYzQA93rW6Qjrs6KZtWSnsW2SDUmBiOHKgE4EuUxkwjyxX/hT9YHl2l2/LNjXvmLjn+8AHVdb3Le93mBvX8P+Yta7BIuRrCkoXA9HQiq3r0Q6jN25qw9lVkV9snCWPMo6h0iGYhJ5LtR1jHTMPPPM/DZmsj+J6YNDQldwoRhVWviKfPwELk=';const _IH='63fa2cfe3e40cfc371d0d9d93e5ddbd4318a01d79c6c245faad54a40525a36f6';let _src;

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
