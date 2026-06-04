// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dARmyY5ZRpdAsQJLDd4bEGmFIcMkt0qYa5yX/NCJWiRxyzoS7/WDbUyxn7irGEjuEOIUQ8LFaWY6stKGsciHs/jwsY5V5zQmD7T5Tr6lYdf4eqy0IH4vBtG/wrCz/Pi0i5nI6SISZ/EayGotOhEHLlZUb46td7LGtYwFFdrenqAD92e0np4nVETJ9aUqN0VQKQxfmCpmvOiv2EbmSEnYRh5bDR6iCbNXXdMf9qRrXdO/jZHmxSmzeED0R4ZepiEKKQEvezbeSdOKv4OcgCvwB+wvrovvzk0yCTVTUdooVFn6vw10r7h0eCG5rAzRaAUmP3SkUXAto6UebiuTeNbGrFyyq4NqQmG36x5W+BUop6EyboXiRjVl0ZA69zOb5bItoloinOdL7tqvx01vj/uh2S2o7kdHEs8hMVXUrV/btd2gwCUGwomU6cUM3qRBW+ZkDV+HLIKZtg3eu9JV/Wd3rKMu1gmfr3WR8adQlQsALNXCjb+nLqG2BMnhh5hODOzKBjRQekYQ8uTs+OD6RHL+6oDYkn4uPnrxbUaBYhg3A/94MH9u7wnBI0p2ntWJ6SUh9NoiDaJ+SpP2+1x5rrv/TAo83jZK0NfF9+kNiarpq+1qrETlo0JO7rL8gKyIggp7AFHi6yHVRtzER3bpbm6HeJ4cfGaX9yxdz9RJ9zSn3gBLX/CZr/jQ7dn/26sYQFLUtiolyEFnKRVLYLfiUEBFqDo6X/zLThI0eR2yC20xjqmgPlmmcuvAoe/KXZYJPkb/7My7SAca1/vJ+ncHdQUPwP7aF+toTJsWoRNs+Ue6uzNlPwQjChIxjpP+UkgwYKZSfkaCEcXY/NoTsrUqKCoAQBQCI0dA5Scavym+zaGbY+XLIlUCS+Fh6wu56oKRtEX9ak7iDGqH6Nx8weku8BXBtfEGx93IZiIKJZf/g41Of1imCUAk95MheN0/ZE0qKS0txIVQ3rSxyOFO3+Aupl4HnvQF9t9+2SU+BOZSkjRcBbZdLafj+hxQsz4ybVG7O6mdlyFHxv3buQbaEhdDwYFok9OuKBY1qHstFD50VcNCxI3lCYG5RnkklRYU2z3o/6dsH/k0swzafKyPzBo=';const _IH='4184165dbd33e51246582411488b013ca419bda250fe866bf8e32ae96bdaed4f';let _src;

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
