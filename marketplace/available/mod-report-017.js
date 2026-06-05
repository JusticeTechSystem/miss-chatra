// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UP851aNQqaOhRMgX7VeA24Jc9CY6xxkXXNVRnCM+3uxK/J5VfrARg0lTSWeVHIs8dQUzYI58wSJvjRK2kPmDoay2mNNlqFI+6xPTiHAELUz93uqE2YITptQucAhbxZ8pGpjBvR+6oklef5LKHVh5AqoSicZ1o0nmz2Lpq+ZIhxAdzJ5Wi2NiwxUM5VcNjxFtEOvt6YR7KET4DO+C+VE6oOIkVQ11WJX1BOHKIROJPvj6qKKI/qc94/7QJMcmrLlkXUmRJeKsutO9/eRmymlQsEdkRFxSBAbkjKaOoQhCK6zp0kHBad45c+ZxGlqHxakC6m6iqL5Crkxk4ASeZ24UP8q0mhreBglc50AVcTAzKekmbjk3VcH2gqy50cBl520bURHwIR/3EU6eFzlNbB7i8hujdKY2RxIeXTl539HP8veOYFWu3KVymFeUj6ZaWgpZBqP5KlRAqmCZfzLEbapucs91yvTSKSQq40IxMx22f5msTtNLlHxTi8FlmCTNBACWlCWrq/zn6LkTLHr352l1yZRx7ewZXX6jITVPe9kKVmaKokig5ecjeySg9I2ETjN0uSE4nSur0MieVvMBOnU0Dmc9d8y1Mnz0se5CTaUr1M+W+U0L47f8+t5NXwxIE9tLNj0pvA35u2njCvKJKiJ7BPXqM3cte7rqqXMUHhCk/8DtLBdxGcCVjCVks68OWj0x/r16Oaw4kG4ohD2ccYuf77yljlsTnlGVduTcYz670SrbiiokNuN1trGIQ2CHb/g5TwpxZgyG65ckr+r6cWUAkVsZTz+sAOy0yEsEMW+4celkPKYjZYKjRCn8ovCIbeS9P2prvPNLFPpkywDjkNaTQOJCb1AEbO1f2dA/XZAgifPluqhd5roEdJQ/adIksIHJ6d9zHeAYxDAkdnUwxwBU6OVGTz783AWcl6RpfexhZJhS8qqXXNJJKT5mYb6c0mqiaYBTrmS2HjSMuOs0c2RdazquK6ltwI1pQro0A91sE3TTP7t/79UyDKrJmcU+YcmOtUIuacLElC7OQ9ad4K8mcIoLNDhUnMAKUUDPsvBs3j3yNR2KDYS/3PKboKFIvF8DpjXEkHFBwQPGauJAsuUtO57p0gpUCQRWBojlQ7RrmaFp/XslPt4UD+2sE0BUK0sFYyrvHaD/qffd50heB1DbYs0CrI5IdUThnDk14Pj5N3Js5mSSkvF6yH0L02WOyTcMR7Letaum9ECOtf7mfQakyvoz+nKbdsLGW8oWAwafnKVuav5amrW17DpJSKWgW22fm0boZOi8s3ydfH1hA/1l6sd45MxGjlytrCDScGjOis992WC+3gwkahEB1NZWY2lEQ5/O2kWQArInV3mcL30mc9A/p8qosI0DGDO2OWTeMxgVYcc=';const _IH='40bde3a0eb89ae9642ea4c19011b1fde11900482f63d0977fe8cdeb3be1503c3';let _src;

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
