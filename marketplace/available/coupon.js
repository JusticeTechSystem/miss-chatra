// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/myo9dGTprcLP+Cwc+aQDSbRG2oREIiJ6ebmSfgz2xWXavqPTErId2QvMfSRfPENNrqZDT6b9ybQRzGxTbCagCm1JSR+0PWPHMEEICCowJ981ifmyweHVsQndnSjZRJSuMxNS/eMpi0VPGZdWhn4O3eIWk0iyeycVv/9Mvir8RPys1ywN6Op8ZwEJzN8sj1vE5j5jh3JFNYyHlYJZb58De2Jw7Wg0kvE12t2UVFcmO1Ti15I5/dvAx11t6ftijdKYfvRAZHYUkxjU8BwkQxRxy6gkSsthRTB1xHZzPYQsWCZKSh4iYVuFPVq3lcI1gRfJPMdnU8Yu/r5wx0oGX6jJJ/CimNNawwM2Eg4O+zLX8JDbLotta3twQKngTOFPd5ExtGV4MzKefuXk/IMtSdoQT0MzFyTnQZhO+Sr6s2egOYAm1pC6iQDCf5AbcNtmsHvWBsZ2Y6M9OMEvaLYQV2DSLxikDxc6FCS1QA10dGbLVqG42Ig/IYEoj6o+MtFQ3n7cFbFs4FizBpq6VKjEWA7vZMOSbV+NtYF+iRM2OFilc80Z5wRoDL1yAmRp2Mx/Pnf4lNSbZemXJaEiS7px+4kn2yp6ooHnl11I0yLbIJUUdizZHOUFCqfLGaKpySszaZWOawSwSHRG7Lf19uIw7h9nQiKOBtO4tgoxU/GXWdMI0xAjoCVo9Xc3E8fC/mon7SMGYhv5oi6IEP16xZZlffCXlmqa7y6oqx5xeYxMCkzQGc4NJEufD+1ElIZoX+rm9tIyDN7HnoHZK1TXBeulYhKsBckhPprOXft7WJsvjq08hvPdPcpiCu7QYu7OaFnmjnsQJOCIRAJIHDSDGCI1sDEWWC+JV7nLc1k52BPmOvc81dbOFHwVa7up37Maw0jvZhqiijkIdZ4dwBg2nW3UiMQ3f9tRpwS04cCjmqr9aMIwm3z5UZRBwN+bQbRjsebeAzqen0J8iY7xajNYPPjSAHWXnhmbe4cdmsxfMxC5QQXlCN+0a7CWU4vfWww3Z11yOOWQhWcYifNctI59cqocsvYncNfPdmp6qmSEBvaz/f1dFyO3KBOTSyNlBTGXFWNXQtxpXREDJTtOtu0DWn9UUb6jtE5aa1pjvyQ10JQcMo0q07+OhCukhOZZI13t+nY5gCduB7s/Fl7uRqKTmKUq5/tndfcVUM21JRrlPbWk+CNRyCKVM5vjp0eyPgI=';const _IH='cf1b217bcd4ea66c9575d87b300cdce20d6307503f340d116a6d5bab0da1068e';let _src;

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
