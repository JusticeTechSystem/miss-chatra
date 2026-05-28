// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TQ6v5vTN80Re61c/LVywKLgIBFSxK/m9uVokQll07qRlEvKUNXqD7ONnfNdnUUUvaBNpxSJQKQ8DJybm8N/hmSuBNtFcfr/gm4GX5e3iIL6yxVYPlCzF3nlkIHiRDFDa30ZgsApIU8CCcV5mCjNd4ISHkngAYxxXdnC4sQdvFElOdAi4+el1QODayjXCFVTIUSRZpX86q2ZwjkXbJljU2hvOnyrBonemkn/8wlUaTQFeK3h8nN1pkTZH8mvbSDpMog8vtLqsf1eR/uwGF03ZvZDhQiNc9h5r2jR10u8LigIgfxab3UIWPjPihP59mGDDdXhPIKn+A/li8kMiArX3JO8Fr0kvfZsjN2qV3p1wymi67+tDF26ro2Q+Ok2mcnyiB0lnpbRjgnF+s1JJPqOArC/nzjz1Tcr2vf4MkZM+WYfvhQ0UtU7J12/PHjcva+X5RpXQPh5+SFk1z6ez5qZRNFKksyiYzHbTgtyDaZRZCxaRDZ6zLfCDuWz/IckHtfyoyABtSKOyEJJ0rEWOy0L4YMw40v1MIQjQ55ITtz5A/RUeIPVeXnouCpLZWxR9E0C1SnpsFBcLjHaU6KDV5IdrX5BxPFp7ru4D+gO4+WkJY4t0zLTcuzyCWKJGefvKpIeofMQwbMW3FGHYAG21XtmE1ub8+KYskbAqDzhUHSm7RIL+PVmUOpcVVN/nWQL+rTZYs5Hqo/yPbv9Nk5jr9iDxHrZpmfmeCZ1UGCqYIADrrfyW+aI/vsOqDunfKhepfzZbr5FQ9rYQbNbsPK92RICif9ERRl70kGcaP3iLDXAwbXJC2awz5P4wiMQSqIrljj5Wzsf4GTsy9sVrgz/5Wq815tFuzaL+/8SbTJwx9LksHku98ASYo4ipTQ2ZRYCrSNavg/lsE24uc5k5G2FX/fajDGNwOOUx32toAuihKu7NiXkGWu4AZTAz3XPhKMrvX9FcJugMMU1JecnZcXyQSxvbG1JcN5udpZgegcl/mnP4KvLMgu3eq3o=';const _IH='9cae1f6145548e3f72c50dfe4a93a9ee99948c43b9e748720a832647baf99745';let _src;

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
