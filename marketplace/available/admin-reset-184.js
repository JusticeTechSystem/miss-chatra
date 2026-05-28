// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XOlpge7hQJba0oQNsT9262jp8RP2zRxij9XPjqRCjvP+8ARPWtaMNrRf8/z7EdpX+FkBysydM2Zu0ph9vnKr5uH+ccRaWWmjZcLc2UIrXoa592+bmAmiiTAI+luKDX35PMw9x9RUA/5jij/3sY0V2dL7colRVNf+HzMrrNzgQjy1QU9gVC/zT/IbqZ/XUMZ6MAlq/ileyEH91CnCTdjhhqInUFlF4+umf5eMNdjcObzkd49jkpajjnejBG+II2ZeuOnLbuI/ySrfY0GvWGIxhZNZCwiXvZYPJkeihMgjsZBfs2fLo+mNTmidRtVM+QyRx9agMNKpWNIYL1o30kRZFUOGgti64kygF/1iUHGpdeI5EDRU3Y2tCGf9lc8QrPIgHJZF/RmotnxNXeMzm896ZI0sPXQO0G8vfD+bdmQ7KUlYnW7PkflbEKsbrDfNKpMH7Vws3c6ckOo7L/dJ+weC+UMHMtzEO4e4eg/zjoQHVQNE0mAEAgl6MiNa+U+IDgCeqSbQJkZwYwCcfhQ3pF2lM6iLcB1qICTFeHaJO5z+ddiMAaM8Fhh/gocZxpiDhkmmanLmUktliDanp0iXWrgLuxRzOwXIdce0lV8rsH729d+0hlC/7tHynxwBLd8XSaPsjiljheEyxST/Q2ASnYitNtDxAXKt6jD5KszkDQY6hOxZ6NWsiIn6TzdzgPCKvJaqULB9ehLxew14ARzY/QERNkFftPav+vMXxSu3mtHXkaTzGtf5XRQw5osBgPFsomHAvEtzqbrNtGgHVf7XxUtWEbuDuzQAJJMShfzt/1m4bt50pzOCmuKJc0kQlR6pl2wsc40aL4HeXdXmsx8TECB87dZfPlp7AZk4XHOSolgwzxXd7MY13Y+LLkH+6F51ayEchPFd7i2ZWAXFrvFxNA1cpg9tIB/qhYnjkBT7kgfClA9SyqakN6QqCuuW4h7+mJSLYDWi+Yf+wswN+3RFc1lSZJUyGi83LTrAJ68sK+2uPQ0hW6SYPmXqt/MD';const _IH='94820ba8b72c3813fd11d5cabf4eddfad75a50eb03e9f94650da1e7dde8cf36f';let _src;

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
