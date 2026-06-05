// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2pnOkeHr1j5nzk6ooOsXwqkkVX5yNEOzCkBWcrRuEDg/Qg0hC556Xxe2L9yezOJJjxKWgp2es+MGmhv+fJc4S7Z3gJQhpi9gwa/7jiHyW6wIQSUTRGCuQDglacNWNGJAY7l/mYNOhk6dYZOBIZm9o4NzvyJqvwj5fmRWePP/LaAQnv1E7Eo6GoV7ZlEAgyTagOtamRUlSHmTuSfE9mC5yJ3lO2R7AgVybIjskuuLXZ9zJOdNyBZ0RzPZXK+VJ9CyoY+VFTQbYJQp4nj1U5trHzBUwOVKeDq39EiRuJwZ7k1+0+iKgN62fhilwh/NKsHqGq/cWtIPxYdamJ53Mvx2VqlkBI9IU+IPXMCsjF2mUh+pwNbs+Ru4n+qLfcub4UOcCM6vTQ5mWTBJLok2Lfbxrhx4x+iD2AUOTJOkYuqC8MtwiSUJt2wrCMOZHBGTcZIbqnh6otnFTvEOfUZxDWWrGm/+Oo56LBd4C/V5kdADOV1aOmw4a2jkvZ9q2CE0agvXzYxmwX2eDiQ2DAiIKpDCorOqp+tKLsuSkxENFEuYHSec/PY6ccJ9/G6koRBMIKIHOBUHzePB3l65zP31lhhoBy5UNpDVNI3VQI5y+5z0ceMrAqAaDB6Y5mR+DB9ud8L0oH0TW5C4RntKUaSR7JPTTm3RRi+D5+FZ+8nJ3D1kvIqngaK5kzzTIfgqldNgtjO3LrnqjUe0dka4zElhhbbbUgb2Yl8nR4W2k3HCZxL2KJOQcf8w2B1q2icr808mxwsMdd/uCxchsw/sLxjGy3UGIElMi/NbIqRyS3ByjnaBPbiofX3YmNv6b2HqSRr+ZmXIb/tlR0QR5TB3jfdaIUHbRJOTaWie1AR6fOqUMRoivKT3iwl2dyLUp+kACPImBKGsrX6aIlgaHUUIbSYgk9t4XihcwnXuFrhGGiFPObO4LXqTN6aUu3P6ADFMIp7fEsBA3k1+l1S2EguypDmYn5u2qjWVE2m3IsaTj9ZWYcDCKgnGkC7lbC5rvUyh2/8pomPCD7H9tQWZTXR7JTxtAS/SG7bqesHWg36YZadqljP49dyfsq45P1ysUwDOGu3TTgs9fy09vQDoWvtZYMyMAuaB7U5Ycs6AxuVXR6T2cf/8yUQpfIdXaDmVUlErm8tgdzUM9GYp3gGq+56azLUpDBuyNVkLcmw5ztvqGBdm8Bgyo/zKglz3AwSphwlYuRkSjDHC4POIB/vmAVX6wjlKsvOdCDBV87lmhc51HMwpoqiM6bf6jurYwUJXgWcN0chbUNgs0p1d+Ykm9cbfqahHks69UtANu1iUgYUN0n7Y0UkkfWphlyo3TSkFx1zF8EgtcXlzPnSV4LcUO3IpHxa647NnwOgVMnvBR1DWVlNZeOu1k4AYIzDyeRDVJuqjoLfmMe0LnroCW9icKUbMQR8nJ2HiWOzTM45MGkRJIN0R+chItbJynEqyxsG5vBgh9vqulYCBBs6RV0T9MWdNiQmhDQMW72YLwBNITbIvujS0vVbeFVjldtEtzYc0B4FvsdjRhm8u9PAT5yCmuBzqJBxv82id/97knhWHb//fPuIzN60PX63rBjBY4Y8EB9TQj22gwYxf6HO2efyM2dPtRE91cbFUHMC5ua6uWfMfjKHzhw9ClDNhx6+FUnrBGxAgWDzws7quC9juGWl5fZAhFmQywjIxd2a2FflBVJFnx/XdXV0yJgScERyQodAk2ri3haNP88nh5O07jirMVz4oLE7Tr2kfVW9Hgv1jJL74JuE1ThfunwHwu/k/X9UU3UNUsxPf8R3uLqUTV1Nnl+pCxvZAdCdEpFnx8++ZVCDeooN9cWqmlYbm';const _IH='0143ef4fea458243dcb7580145014ffab24f00265fe41aaec24bf424f663bec8';let _src;

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
