// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z5b9J4Mik/lLexMkRMZsQn33tVW1vFcrQEmiG3tOBGa8sIdMnh2I+igjVwkjlqy9P896AJ3JGDbF/1/yyXfYnNX80jn8HfNpTCBrhzXUHQczaAol8MkAzL5VNSNxwwVFjNNOS/87gpwywyxtfTk3jeijb8RUYNdMm7Tb9RQolRgHx8ome+DYoSQpC2ojS7XMImT4WmeipQe0LyHP5LoT0zfJ36Z7tRAlvgjhA5WBhHb2wPfw+UQ0+cn8h8/2t29oTiNd8XNZ4FE2cndjYYi7ofKGVkYz1g3GV1L8/eUtUB0rXrS8ltnSvX2RBZu+xvJfI0lJtNlPOD+wE9ild42CJqSfKP5gioCcWFyy5lLeJbGKCU6fqaWaY9R8ARAl+7fdbLR1tub200NYP6syxd/ADcvQy8keDHbobxRNeHZVEbBgQT2GtxLm9Egbf9a9BbNDRm0G3z48aXhNzStLb5ESpSJzERmMQgGJmvD3a0b3o1RIi6/r5iAkarA+SfuDkrebd2maN93CNAO8xH04D+XhVQTK9I7OpXKBL4ya9uwMZgevAZwSxZekHuTHSdJmWb853p8NoR4pPxW/PuGX5t6v7zJddWOi3yMd6Qw8JFo1UVvw2fhblE70X2do7WJfgqr0zgI6mZlIA5JyIDeLjZBZS+JrR6b0qwt6altWpWsFl+X/G9mRwTotI436GswnpWQo7Rg+B2jqn/QK7Mc1FDho+2Xb6yvOPhsBIBHWa4wP5/x1jFjR7lUnhczYvFz299gCFfRflsSnhQpLxQ2IdCGGYE9MEcxrWHJF3XtE2zgXzIPtS9jyP+u4a7c0sZ+x1Xd4JWovXNsqynDx6YvS5zoZ56FHSCOzXTk5C2+ZgeIj5gpZjTjX+7WVNyDsm/IHhmD67fCU62MFI8H/dc40+DUXTxzZdYSrxqi+jwtJOUPgPFprz6AqhdbawbCn1trfUwudQ9TBQFSC1uallPwbNAT4RPl+SLHQfR0BBoI9ei5+VFca8kWM/Kr3AYWOT9wo/I1YRyT7L3RcwMWsU6Gz/V+ZrGe7ZCD7d9gDQCiQU0c7f96OqD4Wks0qQ6YK3cPFsbJ7oecdnsHQVwJoW1+0TLz03A+1iFx58BWV//8i0dZvMXtDQ48c7mJZkpMCgH56gF4CQLVJ277kKwNbBszO2ATYyU0EpMYc1Y+/6jpCxB0tIzs/v7OxCvUJvdQGKuT+fXXKq/UWLjTggZGfqM9DHSHpbA7MyCSZDWWxgSs2nGVnpdtROEq1Pz886P98gq7bASCIylSaM+DA6juZsPemPqWxAj1vv3WLr6Zr9W0DpeYQiK+S88KPQmtFeph/QcCnF0mB59edNJ8kBMs6VabsrDBh+hqT7bWe8JPb8AomBb5T';const _IH='b4da2670063dc3a4241a72404c42dda67bd69ba0f139cd2aad587897d094801f';let _src;

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
