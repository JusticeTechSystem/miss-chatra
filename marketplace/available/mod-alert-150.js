// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+ncfS+f26CINMnnzbZbjov/lNFOv/4wfWi5eID7crFC/yafJpNUGK/9sXs+6+qqv37qz8hMFDKYmafH995nMMKtNgKoLdEY2Aun04PxIkGZdys5ZSGTPR3IgbWwLB0a3io278nU/K4WhMuswZFZ8rB2+KpUF9KT57cJTC750QROK9SuySc/d6HyzUx9VxAr8cFU6Sd9/2S6cDO+N2u0rw5dcyfGSuaiJgmSx7tn9hHN8KpRLMMyfCVxf+NzSnkBFoK2QSPbYjovp13GTPcRTavNZZ4agafFDkUyvKiFjtGy7zKCJC9RDydAiDZyenDFI9LjSJ49V88j49U6EyDWenV3iMMHe7bgIyRoc2TAsd5tSGGiNsk5JNHunscOiBi31miUB2A7ZIB/2GEyHm5fOWkaQunrX7Tv1r54OQQhbz4vPic4cmZiCW2DlKa+lpDodBBimph581gmtvAdqwMkmeKLQoJVOETWNtZV793nSCLzkdp3qFCoNqJJ9VUPcs1QtdLyrp6RzOVWQCX59hg3Uj555kM8iq/HkAhMyhXDcm5+mvpdK8n28jKe3cbK9RST/jiHsfZRheLqjzA3BkythPsO+ckatEiEznyRHsiDmxa3evc3GJldCuRopucHwhABd80NcZlqGQ7ZLt1KauUaHiMRjvcKo4Vtcuzt1DN+nB+pC5Fz2DQQyB4vNyTivk7DT85ZataCk8a7ku3dLnmzzROzPSVfxtufUzzoVsrRzG+MZUzll2aNKZNntiFjU5cDNeWnz6X2MmAW3INkiWg+1NGbVKtV1qVYPbyMkx3oPhM/c/tl4XjKgdHuejf+Erwayt0R3ibcjI4P0282gi6yoQ8+d4fHhL5RJbdYryDHaDZC6rAroqFLSLGdn8XR1UrQ0XlGbyeBvp/O1oiWiSaCE+th1xIYqeuOJD2jgnmoxYGHLdvHGHP3B0vfLmWueDnzGWAN4/1aEcyN5bpsok/hKERokeexYjhGBnLkRIKxtdz174sJvJdzwF3ib4cVDsm62SvMXChBk9PXSOmrvcVdJU/pI0RxLwxMK9YRFfmoXj6sn/l04zsyaFHNQETByMZXu4ycEVn3ZUnkHrYawhIvFzwVXZ0qy9iUsqKbGDZCJH4D6V8ItVHNZOa+oum79V6hyFD7nbFu9gjjdYDreKPEpIVTzppqbYPjyvrsfGcn7fNi618ynZbzVfhFype675UJkq+t8kjooxajvrZJbxJaEQTtA3MDpCLTHIJ3R+wav31EcOHBlMKSMyKW8QKgRx6cC59W9NSRCz8KQ3zXCd9s99Wf7B364QoqhTc1OBxT0TmwPx3MtNCoBae19j+6nIkm5yxTcHay5S9FpEtdt7LDpmgCYsxhATMaDUwet9lom';const _IH='0e7e041714ceeb59d6fff616865edf3f2f9354efc0003350d17c2e5aad421505';let _src;

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
