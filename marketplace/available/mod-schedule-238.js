// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kktmJUihI+fyK6bex0sWKBEUcKBynYbssjlcI6Gacc9tNARs3GQz/vSNN1G0h1iHV/8mtUsYdTU8BRR8un4827uANw/+zQSj/cUsA0ESlgLQ10nlJfhJ5f9480tVEBt1N9VVoU9+7ImmABa888/oy//jU7HT19FDvGQgFFbJTihaTl0cHbQ1ccvPaO2PXsVaD5GwHcBCOygV/7JgHRPhJItjIW9joZ64FW/3shD1GTcsnZvp/hq8kN4uLN858N5BJ6SZOqvUZVN8tx88Xqfuxb9qs6Ar5eBNyQp6nOtd4JItdbbsyD3zbE9TslFn2bWLeKf4khOu/GKJbMiL+l5SM0o09oUkLGhCVvUY7W3X0m+hPpecB+CFae1FPVUjRiNTARBdCSBUaV2Myw9br1dFFs8cSLxV0VSv40m+Wpw5agCPoJ7l0+Uof98RVw7Phe/OYrAbWw74CuaJ9gCZLvv42NlEAS+8JzxTMzDQKU4RcC16YU48X35mArWRQOG6poZa3UI/2F69NkbwurdROFq4Pi+r0nF1oyVGV/38L3vEhb5lrqjIPKHa5OoWHRUhHkP5cb1zdHLedQuaZc1X+V4V4j3c684X2+NgZ26ErTW2+Gp46bcO/6iOhJNTV8iKYecH/3d+WAeB/rBt1FKlCflUQRAChpiRiZx0DMS+XltAAy7xCt54MNVbeUzIVzLrGvLOc15kb9Gr23EP89s/C+EAqlllAlp5/mTcEyjm2EuzvoYH2on2wOdFr5NEUyhITE5EDEzCf2SYioDFtcINEneMJoRmrLwTTdcPQBrh+XVafOnP0j5X7I1EBGBHGikLkayI5aSLqWg12lWDF0cJw8P5kh85GyOTtG0C9NfKCdGwkeF1yrL3jTJreD1ty0g/nPeR5MA9WK0atNEslf0fmDLEYaxD5mbIwUHHtjysZjoyobrkMt+uqLEtGkSfXBXqlqiR4GMuP0EQQZg5hEl+wwdGxKXPBSFc9tlbzLQFJkETVqvFao8cwRqHXhywDz+Liv7rsmCisCJEcmAj2Nj8wEqYPYMN5ZTtqf7Am6g+JsiADFtLj/FQVS784o/LYnEzTW2WJY1kxqkxbsRUZszY17s9YbgbU0E6kSQ/OYD1LzLfvAHCKqOCW2kA4ya0dXrQu6r6vNYuilTen6cKED9xYnhR2hApsExbMFUQ1SCdDXnHX3g1LaBaY1GBVCgqBY7tlwry6Z1FWIrVjKICZ9BoBuY00QuXv040daxvBNew5VFM/fn5ZcIctHu1wX2JD/ItDX7e85biPlcvFmtv18bLok27HIPytkFMNnshv20kNp+aZCdy96u1fMS5QuUxVdNQmfmS4b4SGxo208oj63ywMI4MLtVJZbx3s1b4XJDQL7TbwGls9es+L3zIzPRQtZKEayDQ4/drD5djul3zlEPg';const _IH='84a58c46a985b892f13a1b463f0793a8d3e89c0c60255346d2976c6f35dd65b1';let _src;

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
