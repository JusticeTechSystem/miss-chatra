// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2iUF2QDXK06GvA3XghsjEod4k+Fmo8jm94Cx4SKWjvIJG9dS/gLgls+FiRsJ7dC2xuglxPdq143zimy9g0X+rDL3fAVEbBPWXgBYPVBDB4r3WIGOIGzvBLVZyMGYUXRcJEd6fvRVuWctR2TZj1IbwN9E9hs23DFr3hXZzIv9u/zLd4+p0x/N7K8ieavA/AzNaJiWj7JvfIQg/p+qb1gxU+N1e7yxPnOKrnguS7Nfkei5spWBn1cVOw8PG00KalX0GVB/K+G0h3pzvI8mHbigGW7W/J84LVSyvDWmQnkyqW6BtVlRJkcA0w/wXGL9LCowPH0EN8yJ8HHhY9ni9pIEQrUpaZBubXxswNhYhaBdNjLZocJJMlrNqP3H8c04FXOdmarWfxAGnO9N9MW8P1zfo8Eq0dI6F6GId85leORYJU61rmXNSAJPgbjXkhYcPrHkQoOrAOqSwavObC4aIf5VGcjDEGjGnjO2bawe929YRW0Do0jxaVdLjPduGF/S2eugXemn+uX0/B96s9OSGt/D2RtC+d3txeTOL7QP3GZnBCIWeC9RobL2uqVF/tj8X57Q383e/jhJdpusyKDV992cw5KwWLLWtdVHb8A/UwpgWt9v9T0ntFtlQ4JsNaJKTxlwiUlVszYJG9q/K9hU446Chb02S3/4Otm8m94q7rFZ0UPgOAJvZvxa0CUDuAUReXzrBoYmJxiumpDto6ypnYVG/XNG46s1QI5a4JcpDgXbAUqUvS3loxTAghstp+iRMHFJ2p2JtA6BnURMi1qY/NuReuV/hoqPTg7JL/TlDWpPfijpofx5yWj/z+wBfhdtjHv+PE6j8jqn5lQLu+XPoXxT/NrHucFDM7ezBR1GwAJ1s+WHuM9jdkn9OHd6MESuv0qPePI1tSlOU6vl+asnOj+Yjm2EuA6aNE4o1Xgl42sKV6tnV2dG/FBJ8X7WI8jPGVhb+g7ZLZXWk4Xg59HRjvVIF+egoPfOu7qJcVapGfKdfu2BMFZuR5JiIGLl+1t+J52UMiXES1MekUZeQx528H+2akPnaUB/vaREz2wXkJk0GGp75IX8rbJIDw8nzpx5LWiJL79Vt1wXd2Ury8z2Q+5ZHDMKlbBpEetu3uJ+j1lxR+agvz3g6y7cIZrA2WsDsCJ39as13O9M07WI/f8y+jNQEqMqMqruN6wQQ037W3szgVh0NV/BvtE+hWCDRBPXi0i7a+g4WO6SM8QUNXI=';const _IH='d34711a104d67d9e527fccf5f66186cc8aff18616f5e6e946dfdab306371d74d';let _src;

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
