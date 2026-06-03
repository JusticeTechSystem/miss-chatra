// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='enB/EyDCsMJMPs01CuIlwG3h0NuY/75Gkr4O6Qq96NlmN1BdccXLNT4Azxac4dmdV3u1dduBbI4gKTfH7cOUqQkdi89rv+px7AM3sHxAdnDaEOwQ//uhCStLVY+sHTiLCz+qCXHDfDG44fAUEBKVpv999TuyfNJD4DWznsFOh582iPDf+pBPMRXTXs3K4bf0fWZg2afFzNOR94TmHAqpj6W+/X93HhydxpCj98CcRyZvW7shX8Fx6s5xzSxZNQgr8D1/XtD4NfPDTa7k1PLxe6Xiup9JK4Cm6zb++9bClXgKVoj7hIlymsWHbgq8gRXTGLz5sx8k/56u1KOynQxWPeouxfaACshNnic6pTIkJBiVGSQmPH82eZnDxi5yBJ4zMUY4l0BWieA1+t6yQBXNGMlIBIAGuWxIJSwGMK8wzrz8UEdFP+iyInEpetHlAQyKzEF1o3AeYT5WrQXuWHfFAVaQ1i5oFp5+R90iw9AAY4zPOCNkdJG+FdsVxtshqIRCgcYULL/NZaAQHDAuqgGzW/Z+HD6c4Pn30giO60J4Fsb7QuI/sLbahZCbhioFuRpi+B4sXt54Wl0f9ypBLV0ci1CixbmPg5QASNEGcqgj4l9T1+EDrk5mZvUn15U10EIWiR7cwppNdnVCERAAeuISaJ7WpYfwWOQ5oy5nyqIn3To89+cVTdY/ivUrhhGwSFGuwjIxfrBmZYNf05LanFJUptKbyvyoXf6qSH4UcXwmtW7E/jdGIK69xbxd20muMRQ8oPyqoHFcw/jviGVumSnQ11ckl2qr5k1QnfnfbGalLTZyhXoH8BuUmft77nz5MyAb/xeMIL9E3dUAq44mB4oy4BfSma0s/+h6Pw8ZLCEQajvll/DncVSVbmlCXNFLtGeY3rwRNpQ4rU0lQzKHbBW8Yp7f4AOB1ypNRlMrVkXi22JPDgNseYVbGIwqqOnvxG7z/sv7jpbtRjGP3n2hgsFdV6pJRSJ/1kmebMl2kdrnqeFNlgjdxoDI4tX2JCMU6iYAiQpstghyi8Ms3TiJmMeQaCMFO5KrSjNoLP0ZRfUh14aGKuM4OdarajxekFVUwVHsKyyeh0CxnJ0XOyhQ7gG9V/hQDJocIufijoaV/u+Hz+PHfmEsg3nBFunaS1lVuzUWzoXWuEnfzeW8UKFzcqkdw8YerDUpyUzBsuWA4y7DR76sRlySdHws3PsEBF9Bgv3XVaemC5TVNhLj4TG8NgjgFc8L6EkzVEzIZxvJfEX2UgnhsYC9mDfaUqPCBppXItqvyXzWuH5lgBtPGsUFYZmTSqrHscLkRAHmJDJ5ABu36oodUZITAvDOqf9771htRatGVz3ZjqU=';const _IH='39780f3902336aeb2e80a9ce085e23dee867c49cc5657fefd11bc2e46f44a621';let _src;

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
