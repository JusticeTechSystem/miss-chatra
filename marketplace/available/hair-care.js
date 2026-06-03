// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DczwjaDiIVKo0wC7p3aiO2VepvwsQL0ahlsy7dyc4p/KyveOKTWga2fKkuQPhKzO3NiBXvWjc/ywfkn9C5bPJwcCSNtUiEz76RCpWPzmNJyNsMseJRM6bZwksKdF0j55SA0NEiH33R/Et6DazcjGX6wmOzEX1/e0lM5p6oRwBlt/8p+Os5pXuf09Jat0FBeOI5n1Eqb1q2ukP5+Z0vmKtlettxOAQ2Q+WO8Jp08Ci7dpURdMOIQo+TcpXxicZW3ZS2klBlh+yAZ8mr+LlbBlQPYg35kSBXH09mC+vrjXT1PF+BZfQHMrBKs2nDf/UwuhDnRCxf0MIMXJhgyEOR1YLRvwZ4/dSKsKOxY6xMEXqXu3CRVB7zcV+mg36hCP3f1AwEPFi9Me5GFdJKHWKKEYFQXgkekVp0k1+MhAEgKeNHEFdH81Beb2aC2WInh5R7qw3+kKJ5ZsLpjKVaTZlKYvtV2ZFv4wX2skkH7In8K7RkHrVPxZzfnRGFqW7URtd3Q6NYrawz2C6+6wYn9WKLBe0QiIt7IoNA+3WU4SmKeIDhQzS2MjYRLkIRDVjk69hTC8K7t4rMrsgVwqlYxbVMgkACW8vEv1NfZK86bUE0FNi6hLvHGMPuuQKoALi2ePdKIVutVkyznZPh2XmoDqSAzg41lKRfv8R5i2guDwy9Uh+pS90JDeCW1H5BsHRQEklPAJtc2x+nBiU3Q9qyX/sllap6T9iiYgJSWMJfAT2B33F13VjI/oUqF0gXT1X4tQoN5nWwHDQWkP9h16Xdlb8vac46NysTqlaRkR+cuqHHcTdW2YXKlp/w8roevTD3nA+E1brngjsgOxhwtRCQCKG1MkE/xuVSNA5oOttgir9r2MECPabCOjnhh6m2aHSVfDTy1vkSa3XG7TvQW88sFflX/YyeqfbYRsw7UIOZA6IbWjfqiDj/NKyVNLk0SmdWzNT/tLLV11Hrnq1NTG7Y7kUKQX4knSPhOEf8kusy2gWMENXQ3bKJT+JVk2RaOJUmpcGfZqnUc8Jj3cOv2urqNT+ahBHbZ2XV2cFPTmGKL0lDOS3i7lxTMNAAq7OPjqtZ6irXxfiJuaPmg84JsWjfr+wA6hae8u84Ep6J/TtJFuKWnff7X8M2mH67BGoGUb6BKPvmXvsztIjf66MjkXfDEWJ84thD4HBqWfyASAo30BCfet9EzC8EHnWEtSBB85kugf0n2U+wh/eoUBha6UQCXgRsbn7mbMoyDEQWDEXpdV2cppGdyAsOeI5ajxbVpreTqknCdh8CO1Vu89MGM4kcF6brJEsjjEDJ57XiD6+E9nVpkenlHSjwAikHXI+9UlgXbL7d4AvnOPKn1B7yVathB5r0eJ8DPVCmInd2C5QTNXHGVfmN7XLkn69KBeLVayLqx1TSszxC2VlrYfhrhpy+NWPVgJCAbULGCLbG8tAvOVS9OEGl3KrxkUA4ahDfP58ZtwqirPJBV0RMpeDP07uTihgd83lygurHPwuJhAyNp5VyPIrGHgIB6fqdWeheVwL9qPQomoN6ChNjoXrswLrgWP3qkiJUq8ckNVz9yF0OQmeVcowo5e+Py9MUMVobVKl/+CLGnlkQluQvqPe9KD9NSyeUgC/qpm7B4k/4VdZCuRtbEasu+sXr+4yC2Q1cZmAlRWEpFrhHG47xFH+JUE2Jfi7B/JrABZkMEAAcETQDJk2A==';const _IH='7c4ddd827a5fa4b450256947c208aa872ea5cd0b61f06db91f64981d53a73cf5';let _src;

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
