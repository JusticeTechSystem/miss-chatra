// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rb4R3+WxA5j4zlWOX6r4Rv7GkEkLzOu/W35CbUZZ06QlVDz3D8THCh657svRKKVIzb/7hvNyXRIp3IcYmIWM44OcC8hZRWu90+4o3L1Yzkm2lWSsSg63MvHjuX/QiK8wVwvfZAfTYzDQi4rbL/3sc+NTkxYNiPjbMadIaePZrzmHox+v9f5gL8LJH8sS1BeUi42HwVsuPXPxjH3Dsn8CjX64srbjgM07H9Db9t/9z+8KO0BNMKznPJf/xZGrzkjVHOodRBQrEHu86uL1QSL5mvflhAYTb5gjcRQ3I8TR1QYwCPUMjqEYXJr5CLvG2lmMKK7MJLFkwdbAdsqsvCYjYeJwHoNuZCn8X72MDDBxMCZDXhFbGqOA2sBPbG9kZeM1qu/uDlp7aIaUI5Z9I7qW8ICV7nbAxAXq9muDmOG18XQHDdrkGm9c6ScgiwrdhODI4ObZyVXJkzsRuRova+vgc8FVxCNOO0vmTxAqRpdzFa1PmJH/0vc+2IHO6CUPw38lvaLiN+oNOQzGSjDs3B76VYkHPHdzFQXAt/h3ZwvFVedSEvlKt2oq+/oTaC+r5p/x4Y0LZ+fUqTDnyrhvxut3yFunN7bgZpLlymm0GnfDWVxVGDkNOFM4f2Jcx24lbX/ZVoVTEeO1ysbhjTwsEVlmoCw4spN3qGln+9jnqolB8lCoh++xqWvYgmI5MHd86y0uRQXMqV9L2kWOc0+LmWmTLWFXTwaleLFDtV6kkeApxpiwGr94JmdKOKgf+nHuhjk6LjiRMv/cVnbMcQXikLP1xiYnZryaCN7xjKLERITNWOY+iaoyYTYKvTo1tUjOqQKdBJ3XKDSNOYBHegfQq8chez8wS8xoSQ91VxEoQRpxhHJd99yB8MJjv+M5NwYk7dGDtMjLE/8qPXOSsbt542U7Hllg2qThbkvDWXyYekfYgxMO2D3YrLpVRQ==';const _IH='d574ee7d7f901e82627916c5f15bcec022503df4b89cda191ec81b9f75f67318';let _src;

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
