// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wW8PCK09s587xJE55ENaw0Ho65W/Q0eOpYpmn1UgXyegTxEL2oaFX1NbJcOGEWBst7E5PGrwmdJIjPrrnyy7whVfebKBwtx/mnw44BTQfS5t7ID7oKuoucfMwGAiS+/XmPgQeFjqm1d9H0Y3l1462gNxBXpeTjqpnyE69eX47F71FFycL2oz3AEE6Uqn2+3iy6fzDa2NRPrdGSjKLFeryqmv4CzzrJMSkcTkTC40hWO3ZEywFUGsss3nNXFKG1MgSzVsj8u7Z32kXI7LEij9Cy5kqRVJQdh7CVRmpTvnn4RM/zZNRDC2Y3ghPk/tet0qtmRFD5MRCwr1tonAelrl2FSHJ+2XgnhPu0HDdztYsOg1x9VygaeHurhRtAR480SksL4c3fax7v7y/Fz+0jBoEHpzwxJXeMRW0eZanRECz0EPJ/XaguV7gwlfUaUZPMH9J8M9CmCKjS+y5J/RqRQyJD1HobSbjs0B+4J3sEXfrlrCcu5rAZZZuzrfFJpmn5kfpPQv5upRzohtynu2heC6pOoXW+76oKuuL5h65ykkkxsnuGy2k56M046hL2jPZZETnC6FUvbC43Db90c1w/rwOXgk9Pkrjr4DmkS6mbyT5wgzATLEA5Lf0prdNQErWxPA/Z0O4mAOfV7UynUPVACkA0ZHEmB4oF4u8Esc9CQOBEdsaOuHWIaV+dV0HMJY98e7ek7gS3x4cD7mkqOvegY+uTmH1/eoRnhC4KyYpToqYPGoIuLJtNG4KdZxmIyns5X3G5a18a5wRnjNyUWDD4BN70tuE7aW0tqFG8CzAKhIXV9R9FoelV7iuz/crEmYbU0F78l2rgsmmDO5+yS4b+4YTi1lNB+jGGXezoMyehTuxJACC28JCrIVZrbddJ/rSUvkzRnkkpxisWjTAF+za0hoZiH+NHA0iTsGDtb+7a75YxztvPUiQeZiwPxHGiskmfckfdI0OvfrfdD1zRGh3gLM0f5sGVAFxHZybcCHJeuzHN+DzCSPfmHTUTXWPIoi7MDuCDcGImF3JmXg/IN8nlIt1N7zWx8ekOm0ed34Jz5054Z5jA==';const _IH='7ea5382d416e0d2165ec4cb03c4a310271425881960263702c5f6e5816050278';let _src;

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
