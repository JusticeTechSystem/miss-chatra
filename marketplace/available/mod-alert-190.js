// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xNMp0fFyBKZXXEdB4rouWxn8TmSaAEomU9tdHXEChEXYbLHqQO+aNJJ9kojwPNZqUu4T38jJuwEQ/vOdBuBw2uZKPtQ4A5m5IUBGa1R2PR2YohPedOC5XxJ/xtIzhi85owdRyZjAXqrSjyTPd0EVT4E6z66Ya4TvgY4H67f522/7r0S0Ann+DEucQ8ifSF7A5tc9hSNwbZ5+NTup0EQF12Qde7Xe/8D18ibOJI0jYXBOKa+V9KKxoev9TaRZKR9Dq2CPIxok8be4VmHdWck7E58criLwU7OFHoiuDcJvSm0n6MwYa7FZCdS4UN3zSSDjHSflhV4yp3qYYbc40nv/Za8yoa3fDogXPjszKr292i8N/UBsZPPxCdhCU7TnbPdXJXR7tF02+f3NKjLMtrJyrNvOhFRzyuYr3Yx4e651ig3c2sqHcoTGIw9d/B4USeY4fTFMICmPk4+iBcyQyGJbnHfW04FEtkzXhUytXRay7oh2stLMZAMF7IlVT7kSgldOJqiq7AQ8ool5U3xTlWa67wWyAdHC8kEVAv4rkZM+P907PtoTcBtv+uggLAqnrSdfXW2gtFt0k4W7w5Kt9VSHDaoKR3n7UNzWzS1/WvqrS0REOAqAlMzrYYvQX6QbiRj7njuodg56Wse77UrrdCrFwRsD47yBnFLwyvvxmhxnZBGduMHom9Lh6tyjs15ay20Mu9pZypEGUhutaEEYHObtAIrPwuwMaRiK2rzYeqQHUVMIVnQsaqLWcz/kWTG4dpMdKoH3TMLn8dN1/fT1uGV8/bwykKWj4qI9W8JBkZWiNyH2a19mzZCMJabh4lE5e4MAPxFHq8Aw9k6ucSIkdDi1xY7hbOtydZ5LKOnc5HE0kNuAImCf40uwjk7OMA/x+bA+Sa5JDH9V4Nl4oAessYL04jAhulU/fKl6vkX6ohvkAvgCezPbSIdgn99vxYq4Vd0rWkGn1ho5Juos0iPtHzc6QeZGG6NKzopsZQ0fM/Dg6+a9TS0ukyB67rnFXX/0qgyGzqljOooS9hYoFJ7hx+1SHO3Mwn0+AmKrcvKP/MlC5xv9isd+MWKc6ZLMT3GKX2L+TAuU8oyJaK7kc2lvLUi49cCSDaaue9aWUTNbviwd57kH+doIwBnlUcJzWvsYgOT2wm2Woxr7lINWs34r8Zg38pV1FV3YG38MTRQmgkppnCwAXUuVjejQYXWmw+JjmO0iT2J30sNuwmWroLKm/xcPPtQW3AE7FM8BalAT0vLZcjt5U2W7hG9qM9Wzk3f8Cev58AbE5B9qvsUZG2zaj6C/VC8lRhSaQ6cQZ0pXmhKoFeAKF4gFY9O04AN7I3fwrWhGETxZnHHSKwCgmBBs3ZZWle5qVuxyW6fehBDTkZ8N';const _IH='c843af55cfc90dcbdb34ad2b18ef60f045699460e7f0feceb44c8d5db647c68f';let _src;

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
