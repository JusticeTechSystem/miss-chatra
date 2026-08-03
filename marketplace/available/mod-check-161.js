// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpyYG3h8XPdXdH9NqRvBNTzH/uttZ7UKV4LSzznacDujarpC0okxEJPGUcw1n561AzJEEri83qszc2UBZO80PVogttifoc9oCcdfHeMoRL6lYKYogledcjeFGooEo+XGWBrazHsim5n1C/M/pXdHFjLHV/FIup0D5+jpx3amAT9eUTOmWXdd3DsBY793i1S7HGI8iZ0Ddu3o8JtcRibg4CD6dDs3Wam9Yn7Slh20QwyRnjQtjqLMYhlXyojI2BAaOkDWdWThpMJ7eH09puYYQgfeA0RbbWISwDvLXF3ElaqAw3I2lyYcqOSNqq5oHIE1IQsIgE3KelVi0L2dZf2QJi2Fmuc4+kJZrldGu3hbon837vGUmsXbhwiMCTgjiCJChXa3oYUp2Vx9HPLB8tr5GafC5R8r+WVa1S7OPRruJYc3OnzLqwO4Lux0Hx9ZserQTtxl1m/77D+PS4fLHRuD+wfKk3GvJ1Iyfo0JDrncBfrLWrjmo20bRiXHbZCyp/qDyIHYuKrEGcZcuHTjyEszSGFaX/AVlYYDbvpiYuAYDSYDsO/f3G34+AGCnaBAhJcqSSW757ME4/8Ckvoo9qaFbL8q2fSGKWMngwWn13RVB5kYr0QG6yN/9q4wbkeUjMjUTqrW0ineQNV716NkGXidZHjFTdGR8Z1egQpmECMit5WC5+oje/8g6i1mLmpiNo98kc3b86glMSBaB7jjVpkV8dAMywNQs4pNIkRoFKsHygOtsrdRCJclYORyGcu9OTMJVM61I0iA9q/JG6gtxv6ZEAGZ5XRhzhx0QpjPLg7oWJy+2uoEtAu6tT+vPG6nNUHxdAOlqxJvN5lBu7k1lRVp/IgV7Uh7+Un8tl8s4mVRqJp1xbw7s3MW4eKWc5yepZbncl0ZkjU8Mqa0q28WuE1+Ogi7Na9xrjetr0tT72tiUgZFNcKpMP0kSAvPFphLWOe3DUDwZgiba4zVpEsLE+RBFwmwKSBkuxFumaADJDIMGHyE9Wk3cZvBqwgNRVLICB4l2us/OUmxLrPkEKtl1TUXq07Ttjz413LncvajCC44voM94BMfLIRVSm/uJayJpeFlsDUUg6NJM0RkpSprwWvbj7DxD8cSZBR7a2mGMAbZdkuMqPLrkDPNnQYOIsfLauAQVJnYqyhQYtst8Rh8FERp92r2bXKsbBcfEJteohfTx8sNRQbgHf5VkfqEWOQ3HaCfPjy97tpRZAylEmNTC1n1mBf5xtrk1PP1xexuFaW3nCvn00Rm26TqlxWzyt5dUqWfdUZjaruqsUnDjYZPFiWuO456xLbT60htcoVNVe5hGQMwy93fIPICVoTECKWRu7JqIpiH1LyJ78HgLwRH5BfeZu7jN1mua2bw1rivg=';const _IH='f77efd3793f49aa78fe412df0e107c6e2fd747623f8cc7e84846338c667e2c88';let _src;

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
