// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KuBNCI1X9C1MsC+Pa+I6Z0YRhg4SKcPwpXT76sbBITfyAWAWT3ew7ZgiWKteq6O4CNhpTpPN4aEs+bbptrwCYd0X6DtwmeXNgveNw4MUcjVOpa9HO6iXO7QtWmM4/ugp1ukM0s7goKMH4nymgegsUcthTR9OQEDvu9A13i+wbWZPxuemNrU6sS20Mmd5Heugpzog3uQOixdlEE49Ts/0zsU8494mEtkyh8Taen6StzTJ89+4e3W9wcbdA8bXmdiEFxEJXNhOYyx8JlFXkYFpRnZ1abtLeuTycA6Ef92kkERSG0jxw1cgWvJLYXcNQO091D8azBqxl+Ga6NyUaZy5h/QtgWRlx2TvJI5/BSsx5TGa6k92ttcSxHGeE46v66aPkdrQ+xk4KWPzZWbF4nSH+tuEHFS0Q26AEkkk2UPgaj36nqdqU0Eq3sqsy4fY15sUgUn9xZgmPKSp9/q0kSffz7bj5/vche4hcaB6v0BvXuuek6ogwxZhHqxo05LALnqqrV/SpsRVs/zY6Ub7O4Rg2kxJseKaK8MVF7cSiY/8Ski5/i7JroHorD0mEAiAFPgYw8ZB7ki6X9CA+HdWkz2hKwEqUH5mXL4BRjJQ88+I60CKBJmb/Wzn/9Kz+31kYaxzIoFODWE4zo20reuZHVcaaRrXN9ZW7av9Wq6XJ9pJC4GyVIGbuAkGSYnxzi0U9VC5q4/dn1rRTdIYw3pIz6WYfMzLWdw7rR8zp1q+va0n8YLbO6L//rQtNtmrFMVLbN66o1wK8sTr1OzfMO6k9HVPSUV5bnFWjK+cnfJiQo/TnFEIJNeUdSdq3m5LhvaKatTB7fKSBqG+y546vzZ48arPdhm1K3tsiKNzb56EAsYGNrAFHMiX+2XxI9gIdhlg73T9lYJNodC//sKQ/+h4hmigvFSf8npw1l7T1ObsR2LVLJoKbcZxZRnEzi4ChBYtvA7UCLmVuRcmzrdF6QdUpVhHjexJ5O6Mt41khHhk0B+gXOlDdb9EnBvUBgRVIUHfF0hDK5DAcOWIWl575NPeBm/DwuExf0uGIjcK1BeAE8HuojBWFTOFuAaRvJKe4IyzXCAZdtszlbNPFF2wNrmRAwOryMUjEFG+zb7yzCQSBADdPHPlhOOYOx3wurM6V7BnQAiIdnuLfJ9xLs0qQwkTfjGj0Ab8Xn6tM9Mk+DNsrWxWgNCOxdg5QNxBX0wX84HWZHT+jq87p+0U0D4c7S39fytisI8sLtwfeOB1alGk6YPlH7YrWY7w0Iu2lfiainHIpB78WmVnQfHIFkaq5pKJfq9mhrVqB7/3zAPbv/R/11gjsMkRvkF1wabAzUxtDQAlODje6tVIa+TPa7B7T+l6OIuoAi0g/Z5VgSACJ1wfV6Ib';const _IH='1a3e53268e14807e7f4a8de72543dc090198a6cac5ce927e7016de666ec73c52';let _src;

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
