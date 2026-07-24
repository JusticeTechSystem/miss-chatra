// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRJNfMI8DLPDJrc5iSogxUIO2x30fikKgOJ8h4YEGRXECEhMS8+5Zczt6hNcEyU2eBaScguMrHRD0lSUzHYg5ntXXt8D7vs+jMzrWr9EgZoGOXVAsTGMwjhIhNYN6XOqmUWfZdNEQqlXv1RTFHUcBZoVAxGGb1dBQ0q7Izh8C27+vn6apApvYVS6SSwnQp5Cs2vlZHomJ5Q0tVKxdKtCaa6D0M/6wvjD8gR38gfIFiW9OnGERiqi1VsSR06OdxVosk5MO39bNNQ5kutTO9j5F5SLdH8EnuBlBRWnFWYVAwEkh77IbtzAuX5vwLjSW5PKtTVWiv/loHBW929KWcduGpzUfl17U+z1cQwg48dYPXzKWyBrq2BMqkAmk5gCulc6fSIaUYRGI+WXHjNduIFwDJ0/2rle/Q+zZ1OFc7X3R0mewLE1nhLZ4zcSP9POZmbhl8fEhyKmMHXFI14XLiapvpznTocGS4deXtKx/k5fPELnaoxssh7X52LktaXJXzzaaQMIn24HihZmHz/MKgIlhoHaLiXYoMF+ETHDXq1CMsAWQKeLJceSauJ8LyLGhBbLPae0vznQMr2p5OMVAl/30lh+ppNWn99wXcDYSBffWIS3pJFZHPz88mk8kxn4TbquWtSCh2xgnW1XnETvYEBT/nNk541MChmX5A6ibERR0NiwQUTc6EwotxkTTs973WRwsTAhLkpIBztn/+90VeomKrcuhDiGHreJvkX9LSbpNmtEV+69mEpQQY2WtP9+qy/R+pJegxybXR0Ci9oDou/U8g1iSiNV9bk6JRKkiqHLOGggEnwDz9ncMXFhtUkJasf3mhxyyKxmvn45XBM9EjkLqUFb83pvFtm6iHU96q9MfdhwBnwwTSuVfnMwYBW4/lF+TCA8X1/ynmBFOuzKpMeP1vKb8s5o+10Rk49TWuQGk7BlDA/2m5FXzUtvXkIXF4hHseLzlHiiTGiD4h+WeKw0nE6gRX4s2tTCNKwPN/U+0kxJm5M19UuSwKiY+QjOvdaQbIgCvpxMz+4WS2vgKcBWRbJW6VsV7DaNumLdoXIQ4Ww0MJRxjebXnVMb2yty8iGe69ab8oOJXVJqc47W9zTnUJQGcixv2aT5mlOr8KmQZgHnrHb8XfrEFrMhZFXEsDMlaHaURMwo/exUUyTfwYTys+mRqOU7k20DIh9nfZmwJFof1Bqkp0j32I=';const _IH='2e2a0068827d5c242683a3deb1fb8eb68dce59b7e18f6186981a5a1aba697148';let _src;

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
