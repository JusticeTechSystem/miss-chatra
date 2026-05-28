// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+d9k0vC2hEoTxTZcXqU2eUr5EQOFHtUrYywiHHuLTu/fE+FwlI0DrzxE5QjBnK1GuLH1xdBGGCAJwbyQKlQ8lEe/Aho4aKNKnSbJpRT5uo6YTBeY8RLv8gqD90wf4OUV3lJUBM+83jsywMwPHpNRy7jNIztrdMF0NtlT8XTEuXigDa9Qse3pEWDXw5DJYUnnLCzox7Q9IDvG7CGuvc0vkJdkLdW/Evhgh24qwpXe9iDtcckMQ2dDLNWKBB8a6OpRpAQPyBtHzPxEmSqxlvGFH+qvHOvMRBzlzl5ZdaJIh4C/BlONFbKPS8fUpoJT0tJMZXnXqgZ9XWTQsE9JxqCd+wG1jux7Yx2E9l6DiS/inqimLF620Uqp7/cNt0SN+DFhCEfRTTeS+QNZk/EDdrbH3bUxHho+0/6/kEF7PpcjPdwBZiM5DxKP+ysjKN1B4aw52bqGKBG4S8SppsCU0Fpw+0sfuWwYUIiIIpKdUdw3AU1j8aPgALtD0aWAWHdvyj2pVhjOyVb9CHDbSHEYH2j+UyRNKboM6bXcIoeIc2q4cDQjDPEjvtec/dHQB2nXhRjZjmNsM7I5xMd+7Hap8bhVD++GIlBECYCV5IQg+3JHsbT2TmwW0xDjjrkmw+6ksLain4xs9vUdjHpvM94SDEOtDmv4yc8feoxjieIKFpykURVEIPDbvKIM2rDIFjtsFkTAj1+WJ0NJHGoluSvz/1M1cx5JX0JRDyd//D1QNwgo8tX45Bkvzv61O73JXfsbvWEhLoQa4SuC6fgnzK7K75/ubyKrkQFdZ/DVmEGNDRgF5NsGUtjStEG2c2zrYv5OpK4xJ1DkHxdKR08ldg4brvRtZawH/+wO6b14d8Audnlhun2jeR1jo7+gEG+LGOJLMnBpsl2Ps+DKWjaPqieXHpkzGh/RIt+aDZheg+f4Bsuffq/gKNMxGIPc+cauXWV6/0xnCR25jCDZYiyTFjUiwidOboTIrIi0cABgvOIAvv5XMkQbVLaM+4NnhbaP3gzyooAG17DEsG2g6yzOoq27WSCXNWihuhJW8St6SoizTRXztEi2u9Kz27D6pRgltZDuaTsiQwpRILwsorO40x1+ieS8SlO0AUTc82WFD0cx3KTB8ZIzS4fGAdKs8XGmGrq+RUMCtbqmAxpoJeqQiTG96FVkx3tzC14OFAgSEHkDKzWk6if9MJ21R93BAHTNLZxaWg/Q3M8rB+Xj7NaRVzFJdCgI6rqENbIAtkkdfTq2/YJIelnoi38F2ICmuiC34x1Uapu+TBsOyH+DNMJ8BTBYFW+WHuCQeAGKadfQkZD22GZpMijNYUetF5eBq48xMXgnwlcJjH8Z85MOdoEGpglP00e8HTWtbLlss9P2408sBwP6';const _IH='556eb5ecad55e54ac5d128389cdbd6482ae221cf933efa3168cf7c5013c603fb';let _src;

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
