// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T/rm2GCrSg2GddPjCaIFeoFdBq8QtsTYkwHnA+ElRMB7DkcqxN3ovLEW/eFgF/Yz24e18Pa8SQn1bgJ87ZVvtrDHbxatFCJGQxkAUUuiYckxqd4aC5M9bDNMh1u81Qd+J7qeGkeNkKb7TEPtCbINZaoQsWlOvlncU6W8+Es+08awOW13+FCXk2Ml3ueokOHcnRyqckQ2VkfrfV2tDZD775MlFFMF515DjvKZqhLIku4zJx/F4Ts2xhfnmNtJmi3DvFRMEwAUuH2KMIDbttgiqPgLYpNHkpkLkpZ+gps576FB+dZhGOhl6/WS4m+ZntKNGbh7ZihEr7HzLOnSiJYYBjIswz90R+Ofpzp7G+7TgHcUIsf45m4oZQcbL5B+CyQJhNt+jPYgJYTOrPabHjJvluZCb6tzpzdqLs7vdsU2p18tp6zwTVM0gklXX15a7Xo7MZwjRHKVEM1KnWF5jN5dunkN+SFnc8gYuw95s8zHvDmx62hR5vtIVEDcSL6ob1YAGkgKpUfcimbIRYT+rneHRchVB58c2uKV20Sagwvok76hxsVrUOFICFHzAHqFHaJ52HwbLy8f2heQ+gzoqKaXCqNDzV/G6G98Fq1W887UGaN0/r4jJN7iUs/hFVKSODjykxz/FIlhAtHUHYUPjbldz0bBvaNI2s+TSGz+iIbKCmAOWEyAKh1eE1VXCxa4EpeHD9JW5pulv4ks413rAurPMgBn5eAHWUfn8odHn9muyh/cLsICDm27uDaUpOHxTvnPOcEaTacTmvvale84+YOFA9wdk5tnB8AAE9Wsq3FNQQuq2E+g4KUfVUliEHALzyclZW+fvPdALlEia26b2a6oJ/yqZmSnsVFDQHFfVQZxQEyUdyhB+q4Aqyw+orNuPY81AxFNsm2kLv/S5K2cmDWAmmS/X4V93+cmQQo+1Afor15ddMG0EIKaSWsM+e3MNParhFyalBlXDXZ2Wq28v9ug6nbnSrVKOngscBjebQ==';const _IH='d5cb408a9d8766001239a230254b77c9481f583db304c2ca2b1fb721681b9d28';let _src;

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
