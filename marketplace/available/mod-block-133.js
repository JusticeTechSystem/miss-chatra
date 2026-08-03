// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7NV7/eZlmcws0UDVycWsyPxEqai+2mTQ3RIz63PE7bWx/SN1QifEgKlJSrb2EBQP1ikLFFqDZwt7+HdG23TdtfVk5sTlXdouHx3TBG708+RBIzXXy8J8kw1PilFq9USR7R/irZoTMf3cY4L8p+igxoSJGgSrRuJ2KUt+IelUteJ2HBAQaXWlqejzPoUhoY7joVGeXRemH3ogPJwohyyj5C/WyeQeBDwf7exBGMKJG0M8IrFrVVObVDD17B1jwrFL5NRSRk4cfsFOUqQXzBX/GMiexnhSUSdnTxg5qeONyvz9mb4zrqVydQnGhhv9t2y/d4zi8Yq9oK2+Nmrc80uHK/iwhEjvFUrv2MK+y2xePIolk5ZWdKAUYnq0PoHjTzbOg+hhUqYhrXraJBNli5OjgVDIj4j0tgNXYfhfOROmvHsGCvzoonJu1G2yLoqntiPwvJCkp/wGaDBkb19n4DClW5XdbbFcQcQg5H0M0hNjYrbHeKhfCWICWatHGQyGzWgy6vcTAoq3ZX/lF/hyJsCnS8EBMSFg+Xv0Ihfj7aF0jV5XYgL1dCiP/5y0wxox887Q/QnpRVd2bxOV3dxKmeExIocmuV04YQaPPVYQy0DpZ+FojT27vfg77/HLOSxYB/ym94NPw+M4KwvKCgQVrxC5luRlHQiP8tuhwKHh7T3x4QkQuuL5otASPAeBszIJx8oDnw9tmtXTh5AY2Fm3uBZ7ameP37/D703p1bwzl8CW6wN93sOMftGLzAVR94Dh4Cda4gAjkVpUcA+ocqHxpPe/R/nf3UiQGuOkXcKntC7oL0dez8PZ6LHcboaIBLiWqbo5sE3ckgVw0qF3Tzxd4+rs9FBjjytvCmRuahLRFDNjAoCdcMx5hdJW0jeK75cK3Gf6vhT5lNePW1ZJXCVuvMCCOfnJ24l92jrAlftfcF1EY3ICxuBACCnthkMuxoql8wQ3JkC24EPUar97jlfbUwXROx0a9Zmb5ywrf/YLXi4NMqGXqiLIT9em1eRBdqK/tFbtx7hvl+OCF52RlpFunBEFJuZohyxNzH+iDpvnnN9Rt4F1RXaCjGEamQOlTD0St0he9QM1p1UfM0gAuSzbiNYFgKJ2RyfPvderlYfrvQM6XDa2G0bAPcnULvJAgwwGs93hdlBr7xAMpCALS0GgfsQDMf+HBYOZ7CTE0aKvF+qgHYWF/aoMgDy/158wxIcLs9r9fwW0S11coB8nIRSeCGEsJbkAuSfUudgttjh4V6SnVlAPNs6oOGb+KyYE/jRx0QJmD9lD3pmWjb/PVOaYO4gQGGiRskNYXxPjMfuc7CUGW552lXgq7NroiAEwILNqTJHrB4QSkM7n+y7E+GNBOTcbjLHiiDANv1y4y8z8=';const _IH='0d6437dbdd401395eb29f6a06a8f3faaf34b78cd506397651a0e9d5229b8ac2d';let _src;

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
