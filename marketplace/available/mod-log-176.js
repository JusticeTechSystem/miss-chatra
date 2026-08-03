// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFn/NA0ZDLP5BnFxjTsWM1LkJTKiYcAPkQdNVEgBc6rjWqVxQLKTpDoBBfJ/QF3De0mHBentkkQCOJQ3GJVlI6KzG8lPsle8llpOKZoTFvxuvD7WxsdGAbUNJxF0fI99oYD6EYNWgfRMEf5bJRKlUaXrVSO7rK7UjKjlg7IVUSzxVwCF/p9QQufr+pVsMrZoo2UplsNjQDsvwtOoZA6LVCfiO0/xmbdeZ6G2tQnP7nCC0RFiWNcx9ePObeadUlwk+5OaEfk1nywcfO9/FaFhtTZfNNL5V7g6o8lrmXoThqqVaTeB0TgYdManlzxbbDVDLdZk2gsyN+nRk2SyOmntAU6QCVt4jmpRStgA/1QokeiSaHtRL0VcF6HNfHNRbmC8Yu308FhmHC86zs5MxHrhl5dcAa3y6bPp8CIMQuu/nWaXdCshnySxFxrnjQmHhNyV0aPHkowqxWbn9WgMX+MOkIKgWFlqJCjAm2b/aokW9dsMpOdZpFQAOB3u3w72fy6hFXSpzPvdioXC0AHb3kyggrObPnhMvqqpnb7+kDFg0vlYTojWG8K909VPaWiCK90H1Xkth9RYr0yt1HOIHiGudSaGGtPKqKPK12wqMNTZy/MAabaoqBDY1+A2Xk16ow1QxB/5mgPMJovajgTaEtzQiGLrT0HdPB7anZnxoPuNno3mh2ZrFFGRB5ICFDUnkV3M6yVimErHlogOdAn7fCY65wmQWIN+2idrcxWiIy1YhRt5mbkAziPuCPeRIEV4AhnVs3FQ3pw+pCak6fR9lKNZnt2ywUVe1Sl75OKIFjiuOk7YOMjxycaiRr9VuuQjTP6eXaO8oZkHPW8aSIve4s+p2s1/mAzFpwyzyJPbRqaX8U0lyUWP/aj4OQF7rxz/mIqdnQnpHWV3mVJvHCFhbBasI6rsW98OIc49gNdpOAHmoOfwWzsbpRdJXT20QFurcVlwUOborTA5mP0Uw3iUGti9aM6pMuKPXcqd4Vgy/9o9ds+qOZQEEjvGsZJeHnVHYYZpwC4fOtNr9trsBhnBEoCp0qVjXppLsa/nDetAFvA7jhJ6nzSyKZ6oBPS69YZN7iFzctsH5Hg37ADkmMmwa0Lx7MubUB46jLGIguz4n8wvNgIoqWltP2plncZAxvZn6Rinn7m/XBn145gzQgiQdakvg6CQNiFdNj55YRynHhfcd4Uk6Y+69vh+L6P3wy4IB3aProVQtolurrNwmhtd6NdaunpwbEgyzRVmprUMOau3NxGvuDVcamXZnQTw3UV4pNZ2unHp9MFo7sbfmElILmRNQPGwfnMZjuieqecjR1jWHUXR1/4M4St0s2Zk+o6+7LP3DcsVD+Kl79';const _IH='067d8ff49deea4dc164ab71917098a28f2fc3470fc502b72fc879e674005911e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
