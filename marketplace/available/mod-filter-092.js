// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SAdWCyGnMyl2KH4VK927J1XNfWB9WOSqKhQ6X+OISS06kaXT8IdugtzabLOYyBu5kV+ifDoNA/xr05LyIrdORvPHsQrv3Qu02x/PaC6LfcCh+D73uvbKLKyDVunvCHuW3VP35vgF0OcaN6XxE87h6rnA3IZTrzYSF8EWHae3iBrM7Xk4ukEmsrICIjjZ//IN+lNRdHmU4VPoP4bHg+rLofG1+3n2Cn+h6VKW5HqgIVdl2h0qylEWtEFeOGAruL+DpKDpe2QjPJ1Fd/cv7xWssFEOLAFOcGvp01FZhEbb+0ruiaA19J9XaQgyfOepD7LM2zqTNK0OHoP0d+8WIQg8MJgys3YRiFyNiZpfduM+seQ4M6AllYj0A+rezkZ9dmseBtL+O28/zckUcktkuUOIYTZQM0z8Nx+SPIkORxAWS+LQ/V2FA4wXnU5koz1vWsyaW0uD2L7vCMzR/0nOfiR02kXgg0rbjhe9CrRdR5hLHh2PpH8Xof3eN6RmjT2I7dXWEcQKE6DH2Jr0ZvYY5fnTFsNB5FB8l+xLGt9GR6Htpe+8KZ86haNbs5mParR/0VKiDaKGP9Ak+dl8zkRCAiCna+vZzIUFwJv1JR+widPOiQb6hYK4wWTCCxelajFrX3zuzT5UXd/q/l+smCVtIHivTDVDN2QTPyeOqyB2cmPmwWVt+QE+JF1U35yiwrJFQ2BYUvr6nH/+jlTDKiEcoGcO764lazqjJnfxAHAki/L6TJLgzbbuxJlLpstS5BaZO3Ed4OBrWCoISV9/7IkE3G3BI8NwvrqFE94LBOQcw8krg4Lru0QSib50vaZJkmyGt5r+8Ng7ESgtHPDCL3P5e1A7LtbYpOb6fUOGrgKeoZE4QgxmLagsj1ne/lxnqyaStIwd65pSlp+GkP2Ui6GqRGuWDJJmsCwpirB8qevFmgmcU3ThFQ67cHlMfu/Lm6zZzk0h6i+j8UNGj5VFHXplvlPZCsOigInlmp2dOQ/Shhy25TTGzpGxVTgiEaa0+7tBK8xtuSF5Zo4//Kng3HsrNn4ygMSwoM7KgMyPn0FBz4ZLq4Xv0mGfhHyuDiZ9mME0LIwrY8doc97RfXJ5Po0K4txwLKe+2CZV6Z91RrcG9bda2YkV3PX/rELw9FuA9Ns02ttOCQ1JW+MKOOXWKcQJE7p5MapW2X7HlPpWvwGH6oJq172Q0uJuTiM0ona0oqMsX40mFFiQPRWEZfOVDvTkejIHcYioeB0HnuFbp2M7kcyEONKbSmN1X3dmuiboHPdhkjogbfabqKSYJaST4sV9aNC+AeyB/JZ5agGtoHcAy1YV1cKM5Nwj9H4Iuzqrdc/uqiX3A+N5DRzzxvcNadinD99o1TIRcOcCm1yfHFBfcxVD38gkngU=';const _IH='18fa30b587911473280f828cd3c728fee828d9efdccf53734001fd681bc3996c';let _src;

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
