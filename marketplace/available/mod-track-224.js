// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W0925nhw5hFiHXRSrvZY6BryjCoT9tnwsuDQCHmNx47MIXmo0Ap+Qcqgkrg49IxxjAMh1+2vb/eAkaruImvWjB7sz9xCTowggxCsBIhEFqWijIcmPuK1sH/ugSWoWe4LE4SPggAz1wXiNreSP/DXyOaKsNtLYDscmDrd18CfpdxaWou21Vj/aUxZMZrN4DxWqRQTo+SlV1zR4kFKyfmwMcCtCek6wSMY4WYZabs53KRvf38Nl6bSaxfeX+a1PHSOFY3l98dvMWopdThfPL5SOM3XkSAkXvajLfsxwZSeEV8Iq65hYbsw4X42vTI7SS/oebACUf7K3IGuYM+v5hwsxDPC0EwTR+du7zkJ2nWpxx9eFhQn8BmoXKYJPVrKP8iZUg8F+Yw8OGzpCvfVYEM4KGLqJvxEI8SPXVhQ507BMZ91KyrmR+y7nixLOXjvNqLpoXTYIfF+BdgoOcPTY+I1X9D6OjZrMi0nooXNj89zGss0VGLTeZ386T8ulKp6pk+rrtoRp5gczuiUxF0TYaERN8cEPlsq4Gx+fwWhizJx1rXr8FgMDq/HTqqHQT3RY8v0CPpWVD4uIEZkchHZq7TAG1PiEgopfnExCX861m+xyB3jV/pCjifMTc4VbXLiGpH0I62FfVG7u0mg+OHD+v+1vFDn7Ks/99L8K+HDdo2uNS0JMSikKtRQJ1CDVXhUMu86xffYTb/sFqhtO2yz2NFAg0S+kUSnrKCOhPwdr1+xh4IzoWlfUajRj8lh8RMK3ZTfSCX87giHZg1Sy6G3X9yruXzMGXkcMuOROMXM3Nsz5FAiPjtTdhUdkAqe22U6SZT5n0IyhB8qqpgzuwsQl97rrjqQ1n9I+CgAEgVNijwqztsIAZHCNZ42HXdXq0jjTGDV+mGR2vL9idP5eP+mWb5TLJ+wF934nK2ZyrsozN43gsBNcfKx1FoLHvyzEvD8cNzPBzsyq/9piiKNFzOlH1oVHh5GpkEHTmxEm47EgizHZWz6H/v2iImmBwagKd633kvZ8r5pPs7YobIYTypFarQ7mEfvN1N3a+j8r4LFbThsAyQynvtpAUZw+L7lbHd76plfpfQ1bkGN13i045CUNEQoOxMGcFZXGaMV5eIoCz2UdXwrSSDysc2G8sRQeSPWxaW5h0FRqee+EdjyusnU0/BdC9/6qzv1q+D4kadUhpAjy08msapPH8dD8W8YqyFfDY86IdcKv2vCBFWdEh9fKy0xsNW8j7SKBSULkLCML2GRPZJ1E8z9aSWceodI9/GdGY7Qhrw+MAHLAomoAkD2ki+yzt5VqkfS892ygJBtlus6I+dP6exKc1SRe6a4tRlSTW0sKD6xhg2Gm0V5bFjcoRS7ixpE0J2Yzy8eCmiJPhX7';const _IH='b0ab3f237f84cf0dfade634f60507194f540b3a83017041d3b08bb835981e2a0';let _src;

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
