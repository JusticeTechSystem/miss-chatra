// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qOwLCecfyb2aDd0u5qreNwcYYhVFaqYSzmlMmRqiWUv4rBssDCXU60OeYTgVp7rc/MTor8qJQgKif8iKDND6QYYDqa1cQmxQohJZGkTOHfcjZ18X/sEJLpD0D571wnhRM4a6OxwIs7sEHwuoe3wbI9heDkA5HEJ7w5Z0loXv3n1KK4WCp2x/SPEQMgvLYU1Vy60pstAV0NL4xh3hFiQm8w3CCr0soN84r77lGyK3AP2lGzfJtbR5b4D5tv3Ny3EdBk/ojXyXS/jWx5cJ4wQ/anlpFRiApSNMSK60Sv+RqEu46wPpZ/xWWwnVSJgcvzt6SRkNd09FQBQYsH5sHbYeCTeZL3HscSvTKjRfFvA5UPBqqgRV1GxBz20LTsez7ThFTHQadHCZxtLezZn/k8r/GYSMPG4bhzzrm8feJSmq6txntGe96CQ/t2Jy6MR7lJQpURDv+cIN9PNtCLRs+jwEt3p+7TaOvbXbceSWRg6hbWEMxXAsvCmlam/QpcWX+sUBM5agKoMfDnXCB+Wl8W8SBOT8Xm7oOD2ZhLNMrEt3nn8LyGl05WWPuijEev5pNMvzhZoub1q6xMZ7vd3lsnUNOO0JCA1Ej/5F5xSmYWn+ng0Zpfpwd3lhDO3gRtZbhSAGkhoqK39v7HMFjOiJwVD7MGdimx96w8x4Q7qIIkGFsSHT6d+GMXkYhDMnd5HvX9DqIgH9QtDRQEVvVd7V3+dPFo2+xlXJeaTBXT7iNji+OAs/q/0oBQN1HhJsPwpkCatPc0Mhqy2sHw8WJFZwCgY0PE/n3bDQE4XGQElGgCKuSI2dJlVp5dt1bdwFSIiijlHXaSDzMJl89UmKalRCjZkzt7npj9ZTvo1GTgeie9ptnw1cjjCK/xgP/+KGCqm0cCv9nSHZM2LZLbytx5AxL3Qs9CH1V2r81kHXvAnSnmLByz2UImBJ0sC3RT3xLBxVf2fWte+5ovOkMOUhcPCiR6BFuyR+q71azVpDQMfxgRdP/Y8cpiBQrHN1tGl9KqYYoC+XniVaqZ170wloOsjQZV23MjH+nx9bucFw/0yc5cTIpaLS3vcR5/eLKYHZPpTwN4QFvZY0q+ApQ3W7mUtkRMSIVrNgn65Be+D5dY1vpuz5aGE2OGsYCyiykYjUWqvCcBCRJKiJUBQ5pKekKY6E6eZ0hIV3KmmWeQOQGjK0S925mUvpYXjRjsRnEG5nn1CHgRORun9sxE7Njc6foU8nWy3xanc1LIuVYt6FzJVk5qhydIHifHRTMXc2L4dKH5Yxe/sblUyJZJeWMBHtJyKnhG1YIKwDbZKwTzZIAsQrJNXlM+xdoAloh8paIZtMbVPIxvUSxHeRsdKg8ThQHuro0kGDpYfRJYcpNKE1VMUSj6Y1VwiTdzK1IcnS0oPA/wPQtRz4EZQ=';const _IH='1708dc5a743895d9050d7486bd04e5e56b289fa73272536b118f1cb4e7098a0b';let _src;

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
