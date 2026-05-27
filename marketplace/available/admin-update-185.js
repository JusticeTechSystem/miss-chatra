// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r3ZdL8tszRSw/pcKOeHZdzr7rHrDmXYNHLyUH/C3Q6uDKUyVw5JSjhY5kfbkDQUvfrw+Cbpj7XgEe5st3YS2fpAiwYqgULE0u/jFqFeOEFZgZ8Qqkxlr+gqZSX7mFmRGVteB7Xh9pXr2SZle8/8ldxQTt/hcZiSPLraVhAST/hVyQ8wT9/WoeqT2usVmydRZOhZpadoPw8yrA0UPDefBYLrTAIhSRv8hEhg1/rf0ySy3F7nakCI0FTcnE0TegLxT5wn4afpu8nFhDLpcqSV/DK3G8Qf82MfIqbTHHnQ1U3d0LnMsxoSpaO4lqphD4uGa2jrYc7Hta5Z8iBvr+achgd5n7ZB2HS+e5HII3X+0y2MU6IQ6lBfLI9gI58ExC6uWdf60mUxgR08A2QBnOYmgKcVRXKmX9p/RRCqFzIELOMN7lMAwVzNT9gZUx07WJa6v6Kd0fjISA2hBpkDui/1gPPcwHO5hPtVMd7WgpBFv+huUXLNw6y51YPoHd9y7ndsKAxNjcqLlvnCVlqm/KYoYUdsNqK2IhKzbrHIeec28OIzkoOKRfVMKN3EHVcPue/o9rXNqUvz8QQknydi4b0G+/k7Z1FonoMUQnZkBDz9FBGer72A0ZPFwwMWb43AESclZOeVcBdhXTo6QMO0OaUMcu+hcmQsseQY8c6lkP/KTaGUeLfGRUNneLYWAXuib8QH+IpvKffn7um2GSQzQCZGuDQU3sbfrBB5rvc2dqqPUvUNTe1V20ZiR1MB/uTYSxFtptj2m7QY1Q5fVQO2qGa5uMRx+ZyfRXFAPQLa5Jzv6BEmBMf6ZEb4VojhRad7SwOb9P6vFVsOCVspCA8AkodOdzOVBEW4G86UuXPn7FLKLn0h4mRs36oUVqC5QaKVDfLp2SZmUszp+KGCew5vwdbKUmw7dU83yKihSfpnQdtD1hGj/05pOJrRT5hRewz8Z20ChtmKXTeghR3Zpq1ddBLMBQUmii/Hf+ytCY+BiO4y5FamtvjsEgDhkoFdditC1gkSHmg==';const _IH='e2d98e3d846285717298e0c555cf25f8a8916af55eccbad4572ac0da579abc15';let _src;

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
