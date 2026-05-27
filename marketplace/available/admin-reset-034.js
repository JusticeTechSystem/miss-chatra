// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L1IOSOS4afyOckd8KLhGApjYYkYNzTRXGKgJHlwzkjgKQ68hL4S2j+Z23TPvjWRaMWrAzA/os3LbmdzZYgj37sKL3IK0pbuc36f5ATTBJxLQWZJNrl/MaMClfIgT0YbSkxrt3fKdpcbL/cakvKo9IYFSB1WZVCOLRXft7bOVHGV7jho2BMI79oUrOvURUkNNottVua3BXh7Vy2nk0tDhNZzYE/PqU2orwmQ7AyOFXaOiyKyTobeCewFe7UGOua8dNR0GdPoLSMDgSbMb8LXXxV99yhqxDBsBvTe46uXG52JiPyIBw22fp5OoSLPAtBaNRkB6n/hWtBN0jMs45fE9xPfm6nlM75uFS4p7/0hMrdlOgse4mpXnVtHeMu89i/LhuOXWDxkUtdfB/6ZPB3KFpZFkVrz1LuuWycl1jPkAs4rj6Y8leHTxlG3WzKaqbCJo4KyYmORi06uwORTAF5y3S1vY95vY1VcAN+2FQXojgpWMiWB6kR89E7aD+20u6lviDI5mPPXAzANdFX//7j8VgTT36VrvByMlSF0F/L4Cl4zqLhfJcltyJyDwGJNrAOJ70cwoeEoZUWnkLHGeF9HcvZuHGz9litAHMX1QVKzxYGectyCI7jDZYLpV2jHb9lAgofJ89pdb8cbJG7rHTPUl/2Yl6uFdpPALftFbpAVxgDYhB8QSJtyGblv7j6bNvXF+F++dHLov2nIlJPm4B/+VkxRDvSAHOq361qnwY8B0DOKAxWzfZYV7n0QNXyEwQ6/TxCccLn8/ZA2YAMa5b6IHhx+F+tiQQQfROKbo7XJPpbt4cZQeG8NxlBfrxjZasaMxKngfD/qfX3TV/WdlWgemXHT0JWgSYdfS3MWyR0VpcrizNzVlfta4QNj7VE6fjCBSreGQwNj1VK1/7CThPgSLkPmruGsWHMwKSj3CAKkhaoshSBVh0R9tup5mZLIf7DvLrliiLve294PcqZCwwastfwfK/YxXNqw3LXFalVDlF2S4dBid+cA=';const _IH='43c9d2d543baeca20ba060eedd06d63ed55cef6336b35d856371422b370df2b2';let _src;

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
