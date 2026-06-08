// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AYwWeLI5vArm0N5JcnaCz8yaUJLfj7xK7oxUfz9ah2yPnxMUKu9ewHQe44O4StJ4B3Dhh22EAmw8hvzLuur7yLgV3gJnOb65Blam/dPvA64mQFKCVj+v0L30MesnYUCiWmX/O23hwPi9bvXtHayaE7dg5f4URdUUXFHocAP/SP6DGCRw1V3s/CMPBEEPv5oCqwr3aVcrl+aSWO1X9Mf8/dI7PVzsl6C5GE+AlFnn0c41b2YEU/MOPCAYn6xu8shOA33RK+iOgYo89MozJV2/jtyTRc5giGllGJjh6HwM0NLCRBrrH7J+FOLlo/BS/kmjgvOJjf3IerzuhfuceRC9LVDz3oxCt0YLuSi9kaJz4tiJ9nLJuVA/qST+e3bYM4+E0b7rZPXhU5Ffp+kUoOgwxa2caC0i+5hQ/DiG1J08mhEPfS59fGCgUTwsYfdgmxbQIH1b0ca/Q6rSk3O4VJV5xkpSOZt2QoirPkHOK+AEaBCEivKPjQUld2tfS+EzFWPrRHTS7wcBdUnqP2LI3Seu+LJXH2XntPTboWdTmYtxXHAcREH3fsWJHA5eZJZ+ox6gRVpAGuJHObYN1hhi6F3JAzpxW34aHMC4/9bxO7Cn+qfzBBM7xFIHmPknNboM/48fGjzlSEDkV/LCIXVNxNQ1t5cRItRREvwYeKvZNUY8uE+eSlsEwZslmqTioB3JMm5EEsu4avu7ixhkdgWKk2h0do4LVR7V/e3UswsuScoU0ELEXtg70lX/9hjHKi/Q/W9yGa0fm2iXUZbrKx4pK7skV8/jGOOKgbAGWCQYJwcmu9N6yJaPaesHTNyVBOwOY7opBV+Tg97Wl6336SSwBHIup8CawKbhqBGXC7SpeQhwiGxurkZSAKegmPHL29mRhJrCBuUn5B3XtajvWSZWGDd5zNNs5Sts3vhaEluZ+O8bbsiod5WXEp6i011mhBv0LkC7wmbO1+PWYElTw4bpVPUS2YZFJ6s3CiaTwMSOoSgiaWv3evyJXoU0OrigLUwUP+Hw4XJi3sH5xr2h//3tgM1TIvyXkIX9VzusDz+eTkHGB98q0HU+EicWFSNnqyC5+G9XK3HMGv0KLOlyMcPiNrtRvW9cKynizqBj+g8b4RtsuGwAv56ZGEAAH+TB1wiE60SQYKe7UJ7ZDrQ5tmf1oz470zI9f9b6Hau96XsQHwM6wRkcaMuI4zFcG4k=';const _IH='d60b2d4a392178877eee528e7c4bd3a2b95709e183146c320826b233dc358705';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
