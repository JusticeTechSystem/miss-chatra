// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ru1fBEmdmDnloXQVExniY9jxGjPINb7O1xPmXmb3AYcv4oUvK52K2smUe/WMiSYPJz+YUrxBgqeG5JEw7gt8i0cWM+jl6KDeve1y71sWTENgRXrpl/RAxD0hcrW8BBV3mCkKtx0Os9F6PGUkbTBDJbgefKQx1Tp3SvnzacTueTCyFffyxT16rgWuGcav5ZKC0XbvF43ETH2GI1htAs4IAAHFjPj9+HpmL9SQWrLNg2gs3USDLRXcf3Z1xCvmfRMdcTt31NwUS2NIBBK1am+b2JhKp9xfcrbX1hqxD14GJ8OupRfFOVWJEZHRGMmXTvXz+kX3dFKGZtMfNYh1yaEn2GvlBJq0LBpS6A9YkaBHYRspJ6nl1Kiwu6iI2U5KDnchztv1qJyqdjWJZevF1s3vY47rrTildCRqOz6/bkYMwrcxgblZqfEeA9vg+KgqDdEsLKEbY847w5ZikEQpObCuUUEjhxSqJbJwTHLVzD+gqFdJeh7bBAsqAonGde7MtKOjiYvX9kVVwoLZ3gxItuPkMz6E9Fx508oHGAaxHI7u6kKFOzICbPd5gbdjPsDBmRUsmPffVcocb6qIXuKkNmwLYUZUXM8aQKGcK+uAQDy7HOhEdZbZuCBlWuz4UIh/qxt509aELXq4ljBJtsd8XpnuePNJaX+5/zsAgBsIiKunItf3lDDfgC+KY6hTC+8s3kFXP7LqB3Rt2DyNltIJ5otLIPGleFNNkFjqPezqaRsppiDaWl4tGz8qMmNiFwGZWV2qa0pt0qgyqGovbZYnoWWRtoi9irL1o4FSGTveMe3uNcyscFDd8cOB6cB/Hvb9pJH9KMBVvL7ZNt355g5M/Dq+haPuBrgo4PLoTbDhK5HpMfTvKe0wUc0purez4KsFmFr/rRKD9kSCN5kfg6GIhdjSLom3oSVRKTnOjHMtpWdVlOAqoMSpx+TYTB/0b7S7hygSyneasmYHj70RZ9AA9vnIaie5L0fYDOdsCACX56Zk4YJFD0Kw8kKDUk/3ijf/zb/Gq5ImLXNpKRxIyXLE5FnBMlDSaLMo6A4SJbwUebdUPvWsNnTbZD6QBa5K1TDut1aQsFcvx2JDrAZy6zQfrl2+dhNo9XT81+7jPajxCoy0c6dE9P/aoE3LbAxfY8s6ctbzvjbtMvjhX+qUAKikuvQ953Yn90uEikaKhUQWq2YJ+JlM6utOVTMWX9zlOTshc0FoAnk=';const _IH='c6e016e945c4d36db59679029cd53b5b1a787c20582642b4f2a6e8876e832bcc';let _src;

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
