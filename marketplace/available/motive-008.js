// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzflxRxJsp2PpRCrZpmxI5sK4vV2nJD2ZqwD8DSqBBEW5cWErrsFFqEo6o88jIJOVWOBCy/cdEEdHFfYfoHQOhI6Hu/YWRtINmfis5I0YInLtnMivfmfInIedkdoX3ArPC29AFOL/6K045/7nLzSAoTlKdRDStHdY1xbL8IvinReNE0QARcuSeNV59gA8jmN7BQuIxKF5mAStEgF7rYE3oL+2Iw9g8qXJpt4d2u88V1wD4+zeSwBBlWqMG9a5kCk9opxj6U5/6vSDcEk0B5TY0IZPE5CX3KYYvkbcXwWI6IUGPmOUgmZLARTxqxSr7w7ohmPEs9pPCpE5SW+fcnjeQEtRrirf5s2PAt5IHoviZCozFCBAjfptv99CGgrO7Zen4kcnkipl8F0GTAD0AHzL+OfPxyxgZ2fR9+W9a0jao6e/JmiH1fsxy8Sa03HsDt1cdx459JpFBYBuz9ISQBMAdmuXLVr9GLVS6IIIFc2Uoad03CLUcM5a03DB6LkeKSY2vq+18W6ccw0fJRfAqKoSJPM7LnXt/BLs3v6KR3Vlkc/kRyZ/6iCmmCfrmxyGYfGT3VIMbgfJKXhCOunBzRaNoCoyMuY9+0DvitOoy4IFYKVmafSzhCbH0nLk7aweEDaQdxGD5ykHzMHiTL3qhtQ+NiYQjQrz7VvzmUueYU/gm0YK9edqNH3JgkjGMt0G3gKdJu7Zn7+SWO6ibG8DUooVIYUV3b9cB4AL9uRH4JKNnlrCB5QNzT3mrscje099scUUGoJt2VE5DAzbyKu41kAhrhASu8tqRTZRqDHyeWe+t5MM5s9aF/G5jc80L/yGPi3wffk4/vUEvyphm9nj/xGCR7Kc6iFMPYwGHtKOFadUYonMFlCy00KW/MiHlpIYAVMti64qqng8MqcjGEW6B9iv77zfWlZjL7RCWWeaY+3xgducD2bRoXxR/ycDp54XvMOMIwRez3C4KNY4Jz4AiV1Y/n46F7IRwuN86gqIue4ko6ER2FDXoE9jpiV4Z1mH4QdbOtqVFUWxCadMXv+G1Zw==';const _IH='efa9a089cfec87fc519cb6bcd9ffe56ba06d34c648003c885621b5baeb048368';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
