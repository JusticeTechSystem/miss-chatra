// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YH0F5pD10aecGhyL08rvHB3L4VAHymZZPkkJHqqU0U1Qr6FuQUOdLne28ehAs32Y65y0aaM0ACKcEygrLwj8Y0NZRm4YlIUF5lP7zvo/H2jTtWuPzWdA3CaE3GeF4+JI6AxmKzZeWAL+DtiOTKl5Tj9kAQOWto/+V17isXR2f6AGJU+PP7TX0isEFbtz1JQkJLkh//XCpHmNnsGSu4VDffFxzzrzH2S3+UgmLZBJILKDzcyDRTVGNzIj95+6pmIpwCGEUxYswVl4V/zV7oFgMxxRCftoDosI/Df6K5U26aA/xahWUb3hY/KXwqcwz1C/sTVGRrTOt1+DvqHTT+hdeb3B1NU10tuXE2gQn7ijfXWvcuplHkYI0O+Yq6WVI3eN6OZsC0QRzpunvgewT0XGgM5t1ygljpnWCG/Cb0mA4/1+i0ooK+m/dIzkSwJhQLRykVjqEwTECMJ/ujUEtgjjGJtdF/JuOf+hOhVvwz+g3H0sLFP3ZCxO9Jdt7ssqHEexiap4jj8eWNYx9RF5xLTb1QFGaZ8ABSxxO95Nf9KuLUw+fyY/4TepWkA52O3JbVA8ceZ3Tb+W2061vLWnqim4dTMhUA0btDljtX/HGnuOYaQUZyaFNDDlNk7osjsU1ltvdSMJ3oergCAPFy9qzdPSVrMO+4C/+6Pz8anxejVro0dHBcF1EO5EUNjVjRInhHWKrAmmh+tZiMQWJcNHHpPdq/khwtqHxJpIyvEwfErJHCLARV4ufDENB37O11oZl37tisUVwy2iW1ULe+XBq01KcHGgtJv4ckK9V6bZu4PTXKs/AwVIoprwBwWibU4KX7JI/wmRhBEXLUigjYxH8ZiXkvjbMcx1KK6sfwAUsL/C60lrNG9OyBbvpRkbj2zBX/IgF4/xiboSdxJU7mJmAdxceUtiDUPnG3oKxdtYi6u0HQC1CvsEW4h5q+fk69kjAib8wBmDwX2U0hjWxBR6VorVk+ZXqnS/vKoua7lG2byEVIrAqMw=';const _IH='da4fc3bce6aa8cf7a23030d2fa59d55b48f85373b54f4b7e0655b4489853134b';let _src;

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
