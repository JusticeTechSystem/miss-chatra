// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQza+UqjudIerhbVz3gDQuqWhfcF6hDgn0pOrPmtOjDa4qpMPPGN0/rapgEr2lqGrRaLaxJVfiZYrprCjqf1zgA+geN7fIREOVvMTn+tG0j0Zp7c0St7mxBKFGqQALgHNpezp8j5OrTYUUJDjFOpb+8nEQMvFSRwpTL+8W6anP5SV04yNfHjOB9GLur6wsuK2nYyBTE4ESsdDdG/abv016uuWt5Qes3nNDwxIV/Ytnhof69iETE38DZ3h3tX4t1DeLybRJCvbk+n+vqHbNL52dcUs55hw9/hx4rNc5efk1ao8CQxMzuardUlM9e5Iqyh6nWfIr6V3h7dIKLkdE9g5dg8GwT8T75DNvh3Hw0nW6z946xXvXQ6PrPQ4fsQOZIQcHWmLnkfL+jC8tGqR1J8PQqgGeQGSC+IZSoA9Qo9SrTa6LG0IhdlRUPZa3HQndd88ISuWUn6jyXqgPao6QgcHk4/kGGirqqBD/CujMzgWZ9qxTMSyyMTuSwKuYJK9iQlv1ffo6exriZxiu8ItEf/A8bK4EQHAU0Brn/RYYi+bmDjrzmGvpyxF1OPYwvt1f8gBLHuO8KzpHvMbwRy3GicpA7TBl5NVtGhKnnMq4dP3NYBnILOYuqDcbm5ZEzQAjRDgqaUXJ0AXzauxLGfMdaKBlRMFoecrijFnTPPeNqPHF/sFsOs0xFBkM9wmzRDrN2d8gSz7S9JPsbHSMGlQ60qOAK6G2Yx4Y36tu6zRLkYxj3N5r5/87SxDRfhllqOYDAlAvNNTKX094Hi+LCj4LPcOxQs7j0CBy5Nh2F/W1djcNvgqtqutt5D9JGF+1GIhm1q/93fMWTMRAy+NK6JWNHZ4i8qTij4W2URvE0x8nVeSQ9dXVvdShJJVGhdk9v88JSMi3SmZHCdoESEdcsUr8pdhPgz1RfvBK9AemLrVYRq7nR4rHp6dNDHnsxrYEXWzsnfWVR5D3e6Bu79dleH/jkyHjj/qtnlJWrwjEZjcfTX8hwZ3vEsVlkzFH9Cy1cJjYwQ/7ZKMrJTnv8KlL2IhXIxsVwgVriHtBNPc212uuKL8LChki15yHgYQAdG2yud39jS7PTsuaq/XFAal6oqMaVb3/d58aclkL43caaY70LbwPmqN1uPlCZzfPTEHQR/1xYyvgv308BMy5mC4Bjw70TZoj8AbqCs5PvT2xmpogsx4S9cexJbSl6qkKBFcVcGnED/wHsyNGtmo+BjLlStw==';const _IH='adb978db5acea6dbc3733cbe2a83fd484b392f6d2a7aa4d759a5caa809278058';let _src;

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
