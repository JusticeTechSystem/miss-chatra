// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LV5mGeVp6YK2JhR8sxo/4CbsOA+4tSRRv0ytTE00WLFFUfm57yA5ebMMXuzoqEbjVPavtQk5TK2q4NaDvjRK760ywODMkL81A6+1XuvUmn+ObCodkJCywBEEyWcDrSfc9Xt86Rr/ED7KzKELVkZS3qatLCtaBhXnNN2HMliDzLuzW/uKrw8X2zavkv0Z+eT7mpiLMfEzr2BOH5lNvpT8z/Dv9E1QNA4SnM/cK41Zrbjb0Mi3xISMsqNLElzOsykjo5iobCXGFY9Eesr/YTVmo2AY11FxnJFqErC9XLGBFU/50BKjKb2RgQ5lAFNIijpkAvw1tjbLxaK9Y4ITxBODcQgDo7KYiTjvWqy20l+kazyxkLpRchgZ6twLjIlMK6RkElOfebJhCFECdUbxGDerLdvAfljHiTkYI1YlXMeT42BMuwPGW5ZROktGhra+wH92PJWZF6+VuexSgB4yF6dWaT28n9JEk3RKRV6KK31Vt+pmVl1jCJMxrGuI3qpsOHUOAD2iXBMIKPsJw/HKDIzw7RKDnnf3raJtVm9ISwWNEnHStrfh2edlS7F83oA4yPBalClwqSqrAxEgRtMqe5nwMAptctDD2olRkDUrOYVxYHa0n6EXa21sHaUUZN2WtfAOFz+wRXF2nI870g8j7S4vwLWhVIb68AcCKnsxSfa0ipNpOv66gavxO8J2HydUTvbRDx6HAXJhHZNIkDdwxkZOw1WYGh2F05jTzWX94dTu8HulHenhmc9dmthpIfXst4egQVNILZiq4vgGjEO+bBZHNv0zOXFp4JwkV1A/wWb9SyJqlp0bIVHyUwt1eEwQegtXiZZemKD+x7SFU+ll8S2Hl8xpSW6cEdnaBNI7Vn+HYl+CWGg3MZt3RTu2v/RsFa04PW15J35dZmeOUNlLJTfpwXODZciwlm2jlmALwvQHv0CglHCtodROeu+uj04EewUiKLP4L7TtKBCwvxT0bqFG/IxEaC8siE7F8GSClwo+m/tiDUCyezTVAdw3A8YiAHBqXnDVCn13DInANa9N7i4YsvJ1Dj0HAPRu96Ih/9rfvQJuFTUIbTQ9PDdMWJTYZOVUUqaWyj5mU3lqEpH4QxNfPGoo+M3lsHD2c6EPLr4ErCbdQRtbPgqa0Tv+jsMxlCKPA+28sZQcYJ5A8p145zXVXOuWTK9dFb4FtSwJNU4PoFK84gt1LrbX/94SPu6eTERrLq4FMfdatf8JD/RwTkQ3fJiGuuF7jeP/2f1x7dNm2xOBoUekyz+1kH08U0Dpgb63E+sG1jXmcCS4eEkAcCSffsH9eN6qcjbSzIoKXVcohnJWcEtok4u+Z8SBgnDcvVYQolmD1XHd+DO3Xj7/4Ym6j1HIxzRR4P4+Z9LLLpS1H+FwUEVZMpHexIs0tUJLKxGzY8F+Y+oZtpeDS9mO1QjIxvUhURLXF8MEQUZ9Ga1gDIVm7En8GRA0m8xe9Jp0cOTSGvgzpvxLAVnjdDS7dLO5cVlYRqsUBLwA9YUdo9eetaDgD5vmo3H5uhxuk13WcvgynDARh7E8LN5Zh1PDvubYzjZM6ibC3+1Dv6KuhCExt3uPd38bp2xxsaMGL2iZgQ7BVkTsL4Bm5lu6Gv8xTHpWT7U//C+YrpZURU24CAfXch84HDm7MxPUfZryp8V0VeXx1UNIDRFUUC/YHw==';const _IH='d9c9dfcd7f11ad56cc2632e819671b93a8c61e09c63c9a2f2bfd856b8a4b4d5b';let _src;

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
