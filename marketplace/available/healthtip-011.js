// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YnjeDasCNyTnhkquaYz7cboS4lPb863q7KUmHszTQRNC+g7RySQO48rE6USPSAIqWZV4eWYfaViXa3gm1X+HqUJ98iWYjU2d3+Athv7gQt34Tay0ELQ/E65OSsp6PHGfMIEv1NQz6esfEiLapg2X4flm/e+zjqj29+SxtOd19Y0+h7yra6an+U0nFwIk3QGrwZZX6CgcrGq2CNDYFS+MhpkeWpp32ZN3oUbU9iS3v6dutVlWmN6YoJmdARj5qvZcpk08x8f9Kqr1+euQqqmNm4n7TWY8CNEWEQqXfb94I+0TOObVA+cHC1E5H2DqJiXdaDD4Ds7wj1/7+BvOpkaAvE+S+dY3IZnMOCR+yZIjbGo5VrXPdN8JnoO9/ksPgU2dVHbzW1MqjMGNKLB85Gnl1ocrp9jMWx+9+quJw/IHkICXi83pKu5T6yVOiQ6/qWE/wXobIfKHaulH4sZ47dHQYPs1Vj6IhrLbXAPpZVTlJzaQ47aSg0pZ35D+knakuUKXPHDWa0QSiMoe3WzmBx2wqdGttBC51zHxDlNviDSF5X1wDdoJ+99O+qAecCPN9KCigo/bDk4TliUOKsdmnA5PqP/ZQOsEmuAO6pugx0LLHUixRlXodrTIRsGVqXDClKisQX37YzLkla7umWeHWVvZokhGcxjPO31qYldwS6KIF8thNdphO6IskAxWJ1K3ww0Jcp53LbXsvslzdoMnhLzosRL2tE7L7IaM/wjbVMEKlwAMUnqXIw+K3gfeQzgeU+NR5I7VqfECitlQ1rCqX4l37NbAbiCmabAsyp1gftr9kiIa22XwZJE02s+pdZ9y6eFC7Dp/iuFVhC9J+m/YS3C/4yeGLRtWsZvJsfIs0+48WNfmh06gr/wOJtWSctTCeY5sJqm4k3yLT2yxIbrT0rURLH3kf5cAW+g5YFdIhtmmKHVhFkYcAof+d11vMlM=';const _IH='8699b3a25ac8bba26144362d8e68d2fa87a602124718cf5a3a7e235f94e5c883';let _src;

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
