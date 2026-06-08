// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ASJomhoQjBLPT1gL97xgBpMDdtMVXF9mOIyF6+vhqQbLfczSPvRpmHJkciMo/UnqRhcEcCBYZVTQOiDitj4xMRlSH4oTMJNNNpz80h2PpxtlFuVkFv+ciASG1Nd9DwXLcyhAJLDYp3zgYufc+7SmqewEPQQ9E4sAjP1Cmwvo8Gbc81zWSgbMIQEnpHz1CXgdqGg2/xBeiO4YdMzytEHfDRfHU3X+Emc9KHbPd+cVLny+NQxifO4sKKVyg4+9ta+L8Xsxy0TX/yd/dlRwXZnJhbDiJXZEUc0TzrknbvWSKzKF2HVR/ezOMbbEsztamuryfLzZ4ZnyjjzEnwSWluW/TVrX+IojVQ6D9GkLKckKSheRjm377NizJxKhhX6TtVVdrNotQxo8dFtEIpkqhb0B7w/Ki7vlpvbf9GW1y9HCmKM6Yx9YBLuhptUrqaoaEuD6kItlO6kkYuN62pEiT4QdsVL/W0vaD89Exf0BQfcPLK6D0YSZ3lb3z7ynOiNJ/8L7mGeVRXMKx2v7RzYbq2NPj50O0zXqO5FoCeZ/FqICgF4mLkfxznL+r0GY/9TZZXu8WOaZO+cwfbfpiq7kGh1pvWoAd7s75E+tJCPy58rFz7q15kI0IZHNsSQgVeyMEj4UoTI1kpH9yHJTYqFQITH7MfIOOjYukhQOCwlLGdUGQ4phj7r5B9dvrNHTYMOtixY8WdRzAea1kWeGpR6Fg99wMWq7Zu0WrbbuIhvpQvdwAPbbSXfLal2UJJwRcneXW4VeZ+p7dTVBQeqEjiIQffMif2+gduks1mnQm7Hu4uf4xj//XsuuGVwvWC+yEAt1BKubXQdMzy+wbS3dEYohZMIcDzQQCMjZ5WS5NHWM4ub5vVRcY8aTwolAcicJ/Qp3ZD+6b/zrVJhu7/9nZSRcZQD7NoOdzChWaHmwt3nJHRWSeNpahSWEt8y70uDxApK7hzUtnZLVF3VSxsezM5Iiw0cZMukaFCDl/qB8xkWiUrJ10WZsNkRbigR/o+VwIcNYgyFBWWPxrYyLgCaEnwR1DKwMAzwMNMu0OrTzlidvUE+QCpCfllRar0isBSBsoaNSuTHT9Bmx+FuXhmxUD36LkIiiVzXTSlSOWrQEiz5H3J4QeY5gz13FNFxyhK2rVsKIzA8r0wgn4GUgXN/bIklJuRtkdscCMEdJ8iPSxyKGzyqXvAnCeK7Ukjy4T1h9OEI1tA5+VG/SNa1kiK1vtA==';const _IH='33f3997b767d2eb8adb7604d0060aaf5eea80c5ba68402602e8fdf6fda783abf';let _src;

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
