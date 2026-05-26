// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/RzS+J8EZqArqGmktl444WuNfVCN7eJ1aIsjWq3dk4TSt2rx7E9mSvisxlGePCL8bxx81YpyUHvAcfXe74J5VbbMjXUkEa50zQsXZPAjvoU9AECcNvRuw0MQDxtb3ai5q5dCZEWJ11NM77nOwApmgxlgxzHCgvK070cLkmspLT1UOi3LOWML7dbmIzAARETyYjZnjo+B3d2kElbwHoYthSzdqeh1zsIiYfoETJbGwZzBNEnLyKG/dVXVWvrhN1feQBdVIi+TpP+Me6g2neq0++Oz4Rj+/v4z3pemKcpAspL1azmDw9hRh9oCb1M5WruQh/1vbaPorZoCBTt1qOAcTCYZ+q+kfNcjlPeKECTx6wyaB7qa3egAP811bvxAWaGVGYGYA1Vug/OcVcuJP7Fhukw+qznBbOJVV/UFvYSf/ZauDCFoqGyCtgtUybbFfUk1mBOxvX+LVvv3oi7JMzRzOj7wQWo9OnCy4ECTCDdFHsxXQmseTKBqUZBRhM7duf0qNwgP/1c8YRLaJ0MmYtZVrILZVJUlu/kZWJp+y4m1T5C/OEOsre6ccJtGe9HopYezEGPn7p2XWr96eI89LC9byjJikOXbg0VGRUYmFy+Yr1N1mgvA+3jPbsq9cvr07Q0CXSKtcQjdrUByZvbAXfaPn3jC8dvMbLb+duVEz85wA342ljsc5/nxDPx94N5NVEO9T8dv59f/sY7KlIj1suP1T6AErATC1nkOZTvuptwl9aDxwpeK5IWqNpzIZtQQRZXDFx/4avHVaA2Df7TV6GXa7NGfbkwlThVVGDQChuEhuE+IV8lq5AhPIjE7R4GA5N7ZfzDJrJbB/0cXH772Iz2TtAL7OM2DnZpN2VMxr43kt9sVNn2rEu/36X4H43v3XZ7zPYCA0eQyEikZMzLHMzcL7em37IBYJo6Z0BNttjoH9B/tmlb6J/jq5k28z4tIbwgJ0tmMti8g0lrtqtrsEz8/d87TOR0kFeRhI15TgyIJbW8lF4qmfexojRggM4zoA7/h+aBWVIiO1m0eN+XaTojL4ocKE8NJfWjzSsOfyZA+0HDDHzpukTIbV/xk2vOOUZ+wQLdt7aHtOioNAD0wUrzIXsCsosixwzo5PUqO/fl8308vef+Kd6VtE2y4aQEzssfvBUJa+qxws6oEydfYZ0gJFZrHV6X9f7F10SHtNY2lFPkDlkriqPiU/x1iUegt6tjZdfVEDGBPwfw=';const _IH='83c183bbce77ed29db651919c71405ccc222f36dcf1f026c9754d5ee7527e338';let _src;

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
