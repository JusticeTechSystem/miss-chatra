// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0GfCxN6IdiIutN5Q2bcFrPWXDegagRHQRAvBxNL4ilfdRCXhqwOKqjHU7bcc4/jZixvQ+R+fXY7XZSOFvcCQLfRlSuR5iUNDaeEbfYWxJUQ1Db+MVFKVwe246bB43MHGyAmOEY9zzmFlU3DxoC8uSZJgsytPBvT+QK9z/buij5B41c0Tdtosjn+5/h0eyHRbhMIm9ZPYDEwYD4RWZZ0wgxeTRMX6j2is1V1grVKh6MkhPBwvqpJ0nFP5VPR6+tUlt5Tb57k/jI5dEYLR+gQZjHR5w4ZfFzjwcRG4uAadFlGDuga92ddpjiN+Qjm/0YBwU9B9ozGM1uHbuLq9WS/ad+uywtW7Xg+mwyv6uKNRHa/1jJTvaP3KGA2ZTWImnpFZAehSl1/D/ik4IlVrC4RMf6j+RwCqRUEmVOUYkr9nO5TbdmpuSaHhmnMXe4JxPnUh7Fpeu15euoCVQwLUBgRyiksVmqDy2p5WYtrfaa6DHlsvxTkXn8U5QInMM/7yGtq0BBMEMrA4GVsgFPiU+Ingp46Hywa29zhZb5pzgZMmgppDbtmtCUFdsiveN/E8QYXPpsTxOIkbucParNbKCPLkyXUZ1aXIyZpyVRmrpmRznSiFrjP3aFRbZ9FF71OkpJLAfudsS8vD8sTSEJhj2ffURTcMVeYVSLpwA5HKzovByTxIFJHu+Ye04EpjBncmNb4sSH7m5J0/552Wc6a9wYCtzCJstiMagrjj/DPVu36eo2OykFb2gjwBtyjSow+gQIs1ya6A3DrtbCfC0FkBN+OQmzW61zgjaHio2b/cYNfKAWW8Mw4r74hwOTBQTHc+a9JQVyiwR8ZPARUAL2mCSwjhn7JZtX0tKxbdKsDyjXH0/MotsuKK2aT5i6pjEPL2SpqYu6SwhWg1+QEU5JuePcqVKMiEn7cu2Ce6zrieA9T1OH5WUsBAw/JvzGHblbyWLHd1pSHDGaOcwR6hGw6btPdQ3QtQ8eS2Oo1NdXO14zizqirM/KRkMWhFuBKNXoaL6/EPCM=';const _IH='5c0bc6845e30b90f511e37282eddc65a270d5736d7778aa266d7971958b30039';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
