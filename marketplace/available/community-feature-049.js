// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IQh8y9nXDw7DWxGgO1xPatjyAQRh8fgIC6WHIYPJ/1ANz4xEOpzzn1/lMTY7ZhvZVxz3bkag7r+UKCUkdH6HGfbmPfXPdocpIapdGxAVoNH9UjTnTYyI8DobrZ6f3gEA2I/9tCVpvwcosCL/WUDIWxVtlXjmvlFHsoMbNTm5dIgrTsk5k81uqnkQoWw0h0M4Uh+2Uw5rutJHZlZ/G1zQ8byjei4/wMoZEuRzPha+F2ckpn/G/5jkE4QtkgLdQpPKWakYzMHtdz3IKPdo6JgDlAwIDzQWhLFFvb48Dp2mwk+BsgNZN8BSpTwqJ8Artla6AyHfoHxfYt8h9ydK3n+IOK3Pcb5ZLqW8vAwkJ8CNSuMbdAHmXPv9BJXc23Ga5ar1OWh21gSzWrvyZgUV0Q0LxNgr9sYuDHFq3bgPUru5Bk/SUVWByjm9c9XRR1rc+WSNQGwFbktnl0rf1e1APbkJ68zeIWw4/TQNsrpUO3ByQA1paQYvvJsITCc18E2QYoFqpi4+n06HOF6dBc2TLupXYORbBWIuhKczq4Gb6VD6kDpHmmuQhZTugmme9vKR2o516zzMqQsxOkIfv/WgMra8Tk+lQsve7skN3Qpqvs5lwEnhBzGezeJvFCrMtzvITbGxJ2z+mPyeHH0TdSeDAEETKIGkd/xGgxPzj0oPQmvrJUwTR0SXD6ir5ja/v1ticgYo5oHlo6rQM2PCLmYorB2LjxDblfQl4dvHupHA7A/9Qh2J7Q==';const _IH='708a8299420d24d9c5306dbdda08475104e402e1cbd8d33f7b37ed1ec2679bcf';let _src;

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
