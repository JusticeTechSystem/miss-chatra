// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yKFmhlWv+ofJNn4DVlBUAugBDqIkYtPohioCkuA1tD1lqWlCkTTHIQH2Mm7jSGsbn1zQqFwV404B4YRaXU9Nze0IvMJlQ2Z8N7g2GQvt66Icsp2avWxL8AJphI6lAMqhTmqyfI0AE7o5uXsOLUKzvQNSLIku2ZONRohZFltjqFI+mg+BqCYXuMWiByueN/wQCE0hwWfYFp9PgAfX4le+PcxihBy7OjkHsVe+mCrA1ZZG4QArXxzEoA6LyS2WqSxLc6tLqgQpfNKcedHK6xoquzqxJRH1q+bjNqmN6BvCIxLeAnfmxnWPvAeWp2o/miqcb36Czz4jEbxtgWAt5+m7TRGmXDYgzmXDwbemruKUVJBv8S3Mc+59snzzoyxymSIQcKqdetQQL4xujRKQGUsr4iks7xpr+4HHLj5eQjYIUOKPlBNluOd2veFnbde7HD9pwO/ATMhnzPqDNUfrZ/BFxCmn58YFKZnFF7C0BBFu8kfatN05nDkYzEgKadifU+bklSbwz1xlxlzARwQDRfXE0J80A2wYJs1seDG8KieW2dHa7WhGEgewWHWXcZBzQ+Fpg+jNjW3WUTYpCB77qRVGxEX/tTzOplKcjGri2qF/jck+3iEXy0wIV9htXSbnX0GjK0WkvPG9A57OfnlUhSsm7c1nfVMw/oVkfr8Jw2PVieO0lHsJx+JswV8VH1H2bW88gCJSEW4KQmw+XE5jI+Uj2x9MlHhkvhpaGmHjTIlJ23bRZbJRvqU8/usmhgoSJMyMdKwG73BLNTQys64DeU4gwNxXhp8R/r/bb3XCAwFS2NnoFP9WOC44UluCd5pSbLj2//0pdIUL1bPCFE3InJOEPHCRiuLdzv9waphfU2KZTY7oPM4+tRVFmPJowaP7ZQCQ5gboNN3kS7ZXK5TpZZVec4fyIU+OFGvIi2Qqtqcf8JmY5q1oySSzjpCwcfYOj3gBavNoryAtnDPMiifSB5jCz5l9+9agUR/TejLTSfMvRiOblO/oF+OMUH6MBn6LyMBoZ7sgkzg2Ho+XPO0o4xd/IHBnRgv6lmRsQ35Z5z6Jw2CSOgdcTRHtH1rPfwI/uq3lKllp34WNtaAyLsMKBGEysi2jmhYIcM7OKYVK3e4ivqtXCbjamE2qyypiKtXDOW9L3aQC/MPv9tgOycxqq9dL58TJhIwFvGqYtYgczU28xJKzJAlEULuVaqc7zXHycJ1EPYUdl7CRtqVwdkFa2mOXtkEKx9XuIjQR5rUwj6VEEx6A9gCnGCtgEFxoMU6C0rkOg44g8u+8/OE3Rf1cuANgITUIY9sUuTwhTQ7q8bJytsxOftV7NiDoxV5e56oEJt5ledQDzKWKmY+mSY+2200OlP3DfZFtpOg7JdcNqLUb';const _IH='4a78f8ff54e9d50e49027fe82a1fc3b45c15939693c0df655a9142c42cd97ba2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
