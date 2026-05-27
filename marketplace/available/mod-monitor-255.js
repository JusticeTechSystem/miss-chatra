// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zCKpZra0x/rgyl0YAoDl43mQHZDrPI1VM77isL5i39aeO4GIPCRlJNgwpC+RNOLjvQrg2LNvnFTKXrR5WrufprHUxvDBvTP/9pt8OoHjjMYh+9CwmBM/n4lZrDU2AyW56qIjFsAwlt/wBj82XEK4Jy4vsM7p6Fqlw7tVcy7c6TAOL82dcS9BNyz9zetXFVK7VtDCz1SBcsP9G3TddGy5icJLJyRPHhg3lUy9ttHrxpJ75395VDTy/Vu4Vjh/PDqdyLwSNpyFRakdvXXRC9NweOhKfUJWk4J03FLdvdXS1y4AZkiuf12jdiVdXaT4LdG8kjYTDebFT3MDmT+pcJdOHZyaKA6dXJpD9vyLPDWCiwQiuvBM0ldyiqXoc7Bt3cVMVVjGvvmJ2yPZraZXYG7f2CicE+X+lD1sH5lrJA0ViW7V5B5lwLzaR0htWWXXf6yNx8DdpjgivgCb9KBcot8PHSVE/Sj74QUrdbekq0kO/8TQDuexZwn48SSOUErju/4tKX32N2M8vZLSFtqiBzG3dbNYO6t4vY964tac+euSy4zwKo2txuhKspd+cUWzquzLnF1oKmq2/LpnlF5jg13kiMPvECOz4aXei7RgOxd0rhaI4zM30CztFUeujdZkbkrHXQ9Ll7CDBHxRSbKOvAO8wItmy7gxGsEk8StYUy0e4d1mM/+U9XY6xxhKnsI9D5jAhSZyXsUHWEMuDIoOB3K9/EWrottq4mRm4U1g5eJyZSthiJUriv8xD1O0tQRaUlQ/qcsIp7i41nBIs4kIJmCM0swxbAmTkrHBaGFrAqriF20aNxoIODNHP5HtOWGlYjDe8+o1maP+vAug9FT2Y9uii50/Nmqxl/DHOoEKmX7q0w/nT+YiKNlrJCJPwVoG2/rjyLyi5dA0yt5EOdEZbWf8h6dKcmq0wmnqhhTJKJ0pmzMsgoWcpsjgh8ysiHxTo/93LqOKslpmXAlhdVcqCQJLyGB8c1cDaZ8G7Ec78M23EvS2hSi5Mrk35EYN+teR3xAYIHVQLhFNrjkl0Ahy2old9Nl6fZue+zsNshhDmh5to1yHBe78yHpY5iZpZ30/0BBGpz+8XjQ4zidgfea1cK+dX2dvpN6wcr3PZ9ghegkmF60jzz5C5SPL6sq78FRYe7ZdkBO0+JqzYSxx5NSb186RIae8U50ImMFPruy+OkaGgkI5KgmQgfcIlwi0UYjtzlRebp3RuijNxNEJLXGkEjtQinABPm6uSHUnvEnB9KcdECO25SYEMUvFBi2puEc9dCW5SXg6gSCk6CmOEBHjFloFMcpiTSBvAdNHbWNuN2RioE/X5KuKRLEYHKw7qVOwzVBCoi95Xkr4d0gcvyQGQJ7w9HkSNNXsK+xgghNIre6a+9aIYPuevOT691WDDfvEh/Omlss=';const _IH='8fc8a9f5c97650ec0c2a7806f01cfbed872ee8b553e97d86bfafb588d6846a8c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
