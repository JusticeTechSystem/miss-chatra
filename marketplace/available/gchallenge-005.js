// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQindG+S2Ut2VMI0RvbSpyKvJUfW9KSYXladjtKAM9Yj0bgcaS3nlk7JPOUefoNaIAe691I9I4U1Gm08NflQoPHV2FofViOs+UYcBdGbNVhf+bTY0y2bG9XoG80AveBDfjJnO/8NKLpTP8cb49SE6K0EibV8g+cmW2Jhdj/dncK1Kwq3PtGbDaiJ6lqB/LyfJ/MZ6oPg/ePU5h+L7WQ7M51Z6ZL6NhCgVDxKI+T2nI++wE1dyS3wFbLunACNUUVM6EDeUwsDfhhl5oUGT4wN+xDlO19cnJxa6BpQ3j4/RnACNNVeNnNRA0wAAlM8xS3EMqagcsUvh0xG5aUHjVI1k7sZxOtNHIenm0IubmIU8sVdzJ54lRNlYAPyZ06bP3zyYResSe9P48R1Dp7nr2z5l0wLMOAUhZyNYvuJHuggwAAvstJMwgwEKX/FfYIjToo3EvgF5k+62G5auiSmITHdtYLpmh8Zwk8o7lE7eYBMGTVq8w48koslDjDacK9lgSXhNdQ5fI6YrkSOs96EtynBUp5ZzCNUtymSWNGoR/AQzj8aZRxbjjGlOPMhqfMgX2JnR1JZEhSwJVxoMrENX8WeT4cRTCjdi1kvXvu7Xczo9h+BvT6NHKx+LMxJY+9Y4PeVMMLxn3flWE0wsakGS4F0Hw0uhqwnBrDoNP+S8uG0ClykbI=';const _IH='62951e00d5b0562917c5dc2ea076c937f655b659f40678ad115ca3d550ef0ead';let _src;

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
