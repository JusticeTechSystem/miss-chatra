// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o7BHD6nsGd/ox45H4iqWZxLrbR7fpyNQ3YGhmWbmGjT5IGJrGgs3qMtkJIW95Qbps6xxdEnoj4pWkyqa71tjmUW5BEQp1x0iwT/yAlQTKSbgIkQwYjV1iSi3/HNT/kAhn2IA6sNgLc9FEIUVRtlXydWJvKa/VFSozsH3UEssyIBlj0RfTpqjsVNUiHkilekle6oJzkZFDoWJnRe2z7eYLh/7X+iqBJLczr9QaGFbTZkp7+WkUBe+7Dqh+cGi+d/dMHSIPUVETnH4pL0GDU10ca2XtcT6uH40aETsj3j4IMcEijEw5DuLxhSG7sB2ZvLGLByZ6ttcXZBknEIcVCtEEhua+mirQVflHVD5XV0n53sMCc+QawTu3lkenWzMbkbv9gJPEkOtwp2Us+RjVEeGbDDPVKblOQyVi6AYyMFfX4jlCEWVHbY5m8zcO1Pif0nDe5Gmhn2PRsHPAHqIXQHYHsvsHQrenllUGNbs4UHbGWU23ARLx0B9MnJiaX/Lh7WX1a1pgj0wWS3MX7j8YNrlOo5HETI3aQJ5DUFoTotfnD/yUbt5cFhzhPY1O4mG4xi6IE9kiD95LAhEbStPNCmI8hwSu4KegHR5Q2tpXmTPSnQ1JIMH2YFO9TsnoWvWoVUAp30GGat4STiCvAstGkRU3pbosSBl09nn3yT/Ex6t+tl53HvkV8Fstioe8iJapVaETsCzobmKcAJ1dZ28KatEt0r8dMNmuVkTJulbVLeNSrWpPHHLhRxbBMEXd7xqoZqzdvM5U/JfjXZVEsiJRJ47cIClGe5aQ2bXnJWR6Q2bCpD2ybstM9RM9A7ZVTxuKSguORBAmQXSs//SfPLuIzrT7Rs5mqxt9qh5zceN/fH5Jv/Vn4HyQggabioEaH/f40S0k1j/yPQecktad+sOmyHat5QU8+cICkuJ/SVAUq++t8xgZ6WiR2CoQPg+M79Ju7iBcYO7hhvJHm2HQx8pP5MhEBZ5aM3freKKYo7i61jfQlG+drMwLqER2hwQbktU1Dgu4DH6Vg==';const _IH='40d689cd5aa1eff9d3bdaefc52fc358cd364f0a9f0e603d51b06ea119e442e09';let _src;

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
