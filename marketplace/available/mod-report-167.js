// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSG86RDHVLSi4BNbZhbc6tGmwpKO8zDal+3kuNg+1Mj+9w1jnmm3g6kBKDzNCbYrBU87Z7Z9FD3u4cM5EbPSRevatoD6FLVGJ+XYs8VP1ApRWVW8latXYl1HwrHRY3cVmTrrq7tC4DUvGqX4FfzUYAzu4qFgbLMTkgr/KXCr7efQ7/DZLFKfb5sGikI0aCTWM57NKYL3NocFdZ7WixYkgxL1Ed1xokQksgKmmrhi3XwBLcqLJ1MqrcQl3LR3iB5VjvezHoEM9nqebKGybTUWHbehuKnBxiuy0Jij4FLnjgS92tIVrb+73/4XfWkEF3zPq5D3UythIkhpgEnGUucF6lPlaSKboqZ8lGTZ7gQxLeG4R4MAceBd2wLE/dOE43U3yiANnpmIrCGGC6eWtvP8znKwQ6ZLe4kR3/8nUZ7hryDgw9PrOo+OnpD+EFrvWgDctWjZ+DaNCHtwVnL6vjeKJ2KHYF6Q+WC8rnYgH7fuRbNhwQJeGWjFDvFsHVc8J0pKP+kWHBaWvs9KFH8IZwFj2TipsRWg8W5vq0suD2feQHYtYU0Ohqtut1vD+aQqyxSP2r3HdJVaheRs2Phr16gimep8CYZA3KXU/lvzP6ObgU3/a/DdeiLxxipUeEFH909H3xI47Ukn4CWNd3qXaoN5ny0xtdoTZBU0Dreii55BVFW+o+3EXt4EKJnhH0KGnkDiSODOoeVlRPJu6Lm4DaEPd7rbkDOvODujUuJou/zcCidhZfLHIoeMWqzq5r3cMrQLhklS2Te41KnOw+0B9QWkyZ4HE0cmbGHST/iuHodJdQr+PFCWzJUSe+XD8Ci7LZ93eT1lWdKmEG/de1styQ4Rv02lZ7CiSWT5uHW1Oy2iVObUMF48J1K1VO91+ZU+CnYxYNjH1jfzoRaJLiQf0j0kEOZ0jq8HpVu2end6tiCev8tqJA6iFxVaJptD6vzu4mUINM2oEH4so8jaRlBwbk+zcEmvteJj/qACPry5unDotah98ZOrZMvA83urnBR3u37YcPh0htI+IvzIx4KkpZQooPu3sKoVFnS/5vFviEP9EM3ZBsJYNv92zD2H31heIlO1Qmfg1G1gnm/XhfPs90zHX4c9Egk1EgJO9+mC6cFIhRCrOihtKGIVSnZVE248l4Po+W60oYQLEVe0bHlmtazBEqrfjtof//SKbeS96XSokXnbJE3wvYha6fxQ9NlHNeQ0VqGGNS+Kr+ciVNmmOM1KXx8lXAQVRtK0+BwbbfRwUCcmCCay27Zh7kPwTIkBxik6uGnVFePdwQW+f15hVu7x6Zz5wS3eTLejVsFKBSfAcITO9IciRri5ShyZihLrgZuV9mXPHNja32FhG/ikWEgbD4uO/SPf0pOYDJ40gAILwQm9taIfpEj';const _IH='2a94b1fb8202643af66cfc7b7532eaad1323d2bd6cd71fd2135824a48e63176e';let _src;

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
