// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T2fvRtSTsK53nT0a1Amvlmix0e8/N/PvBQYadLA5cThx9wlBZMoBslU5ZBLVtSBFzdEuBzQp+O3bZiq+s660/1IuqF4owRtETeVlK3ym0/CpA5IMcKc6QD2DuMVbqccZb2oSJiI9e83VzeEQyszwQ+Pu4baQs0ZzADK2xc0Kd3DlgQ3Uf+IU8ZlP2ZO6M0EpRgfenxkb4bD1vyc0qDLMF0pTldhyEloxfMsZtzirNFn3/fmBkhU2GhNXj2FQ4KK1btl5/VzasVuX+KmJ5UbWHnb+q8Be5MsgvxjhhSaxU2KADtSbXNxsdq4wvge9zQfiPAFmKe971gZtKcyK1YyB8HULGbdAMkc0CuDFbHL/UqTenFG2Uph+yLRXcakoyBzYHEk0iXa8HibyWdQpogEms66VfoHqnOygpd+A9hGviBm7R5wj3Vyi2V0TBywV+S/L6+DEgaPKnQdxofWTmjeyQxCNx0sogIcmo3qKuNyVnltNu5eQ5b+nGgUiPnHohcBphmnDlbZ4Asn6CZy2+AE8xx2838joZDC+9SezWY2kQvNN+Ur0Mihnx12V0bJnA6zzK+JnC04Q+zs2kLG6dIL3y8JOgsQeQqAVZASTUyQ5FccxV34WweKkG5Ep7zPYJ6CzGkIIlYBGYeRyHHeBReK93HFfpv0+h89v4bq4HKqu0fYopkI4CI8UR+yO/ZRRpe42+PyzrAum1Q25FwOmomuGhJgAs1xawBk5Fq1dBIp/A45j9C8EQP1lrjC97OGS83vBnwCwosUiLRHLwwCdXYs5QywDhIW++7ApHoNkHlKfG+hbIjfPPNL6GgxrkXgoweg2pM7u8cltVN+Z94Krxs8M7K03YRqD2M8BJ/tRubESorMp7H8QFid4Zq9ufy2Zj8cb8CFKzg3C1P1cuTIIQU60hdg4F0Q8tBsFYpN7X1mPziklM+g16ASUfw54CSdLJ/mLH03KJHCF9h8UKotQuzrqFZ3OEy1Mx5uf';const _IH='4531faf6ceb103ec59a31a0b4142dd1a3d8acf7a0f7299c8bd8e7129e6b35c22';let _src;

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
