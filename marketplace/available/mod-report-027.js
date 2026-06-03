// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RE7l5PsMYHE24ZCsetc6BErLUTq7Z26LQHq797/zNHQ/EMnKvrPBAbnV+n8U23Evmf1eNBI9jfLWucvb1GMssvsWgXmumFgxYS2G1iZ8uzIIiG4Xmr8f8/p1s1Dh7JeBdzeQl+5HbdIeoT6gPOpqvhCnJ13CTZNub0KGsuqoTRKdeux6IvA5birYJC5wE9hluVnHDEK66WCjO/eMyhoAw0lQVVc+szyrkHmApVppH+GbKtpUbgiDHUMMnuy5FvhKA9qjot4GgsedLBO1qYnAljhDoNfZ7IvjQwgzpTz0fcRLfBeXuip2HhX2EjiRhB4bW1m26nAg9mIZGb98H2CW35Ho4MbVlNLUL3J5LrxypTsSbRt5Z1uxCD44pWIMnMhA1p07zoFBn4QhX+h+Nrck/+guq0aai2YZbq4kFzM+6TL3Fl7l5OvKiYo2Z1acshnr7Y6QnrMvLtVwYprPPEK2DfWY52s+hSEYyXdTuxQAJZALs3IN/KzgrwGYCbvHZAdZtMHJ+8hgIyK4CgGh33YbmLwBc3/7BwCLj2IfbeExrxjmxAMT5H0GcH4Bm0bRbrU/TV6Zt4qpNNmaFFykDyH+vrAExM29FkWhptJJrOjTvfOEptXsB865Y+jzdk4IwWI9Ip9M28XvrXId3hPrBXJdL3zNlpzGw3la6f2Z0xnxgVgdqrTSFuP2/534Scbq/0j4yYdvkDz3iApElLufAfrAjcL36pSVyMZX0+dXL0JOUMOngGS2sLSnPJuksJHAjB/A8ma3LZzplBtWOZiLIQfIvzMFCxjv65szIXbG+JyyiT8L3NhXdXe0+K8GNawsmTG14Kzbjte/1hHfK9as34SBRTlLck5UdI05KjybZBvuFgr+NcoisrdFIRc6ftqqpByARj0FKkmCE1nyxIhMnzGDJeteIr7CgY+wKgzK0+Zx4VzNH5MdNcYH6tLVEEszTI6CwSeJ7eV05C6corlSHlNyQt3j3uKjtJKVDNNITmUkNTumKUDrTz0jpUF8WruioJtghVWirXgrO2GPQZtcHGBuhaAQ6TA8HbjIzKtI6AxIyrhASRttUqSChtq48Ujlk/Z6Q4frh0BFok9YRt3AnXu/eJq9ohLfNcuEN20KdOVeck91FzfPNgiBZGSaG9biho3J1pUuoUtbRkE3UZHvPSrcX3rzxZYzzbGPaYpopnhQjFf78YVITRvVWQerASRu0XJJNo6e4bc5N9nY9hGBGTjhy3mp2wRcODpWzAN4N//MwPFyjYGgUxAMJBqsyMFGnfl69zOWTFB7ZEa08UpzQvJc7p34cjBJL/yrH3IBYgw6tl0GFnFy8GLzq+nIpPoy/RoWVgs+lnu4BpS3JWzgjVPNV/kGgZEiL+ys//D9/dO1fLwNKFc=';const _IH='ad15be7a301a7892f3099e509e74c0a529068f26f33ab127b3c87d68611cdeb0';let _src;

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
