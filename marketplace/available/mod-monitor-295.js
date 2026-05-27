// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F9hK/HhSH753DSRv/HHOn7OMgbPYd6w0gsBH/SjP0P6KGxJU0yOgu9lMgfxTfpaqpZzD4QtHWBCNg9vqds9betHOLNVzw+3HBlBrB1r2228DhUIpQiS9ddxN/M5nBDIgkw56nZB/XfrF5HMmPRVt9Jwh52knU+IkGuyQ5DgFxkJCeoxEv1eIxLCYkuNz2O+2c7qylGiMeINClYkCJ10rAgZQFmrnzl8L8o8foXWz2Gu3PW88xM1psakZrhLCg3h6vfPjXXjOHU3PLIaF2D+9Qt+yk7NFziUL+A7aXuV1AHQYvd4mLHlKmIS08RBn25l9kaAs0g41nxhqtbX4lBNmNgWAGdgjUkBvvwCa7UxvtmY7U12LhhN4kiLUHjRgZe/aKSwF4j/XhSzh0fS+bgs8dYSrKxBPLn2iCikfSTAtlyyKhOSC6qh4m5/EURTsKJblhJB/jKFAFRIvJySRJrImEgnj4SB/dPkxWk1G43+fs5Of38zuJpYeAwQVcY3jP9xmWcLrjZfST3d8ne4MmrOslDMwX54y62kWClVtWK+7wG+eZbtzLL/jwSH9/aWPHMwP56atuV24Z+i2B7jsGvc4YSByGKhde7v74OE4qhegc7IcMVfWUVn1YFX6Rc0ukz/nH9C1CNdbLThl3IchvqlfR93sxpKpPHn8qiE8pd9BT4NRy3mUf3cVEJn1KI4hEy5+1cPli5xHgoTsXsnWwwh+I1LOUzvaNIaLJYJOjoSQjN9MQ3Kg7/v2M8A8uWWBq6veXC/fVwFFRC0fHdVUTdR0F772NP4NW05RxBUPeLQ7ujktz5bmSmZifMRXfKlSafD3z55Otg+iPM9qbsQromBhySJGRk4dttQyj+EGfHulPdPTfx8Wf03AIrvjSiqNdTxgUHtJi52UZkgWL8w7HHdSSFXTsDWDCKHmyZtTT2gQf7EWQhob1jd09KPYsi6cuXWESxofr8yf/ffeqiUavVyfucetUkYTRdIz1kGsxUR9Ndv3LzdEUNMj1PhySNhUsw4DQ74WpvjrxLUMqAfyFFad23mcVE6BehM1PkrBQ0A/y2pzv+dDF+kjQYhrmxTg0GCS1A/S+lSQwrt95PDNAGPWknrcf0V/R5XB3wu776AOfag7wSPUXpy4fs8gtOpsi0hn1Lfx2KMkEwgDEuJOLyRZEhDhSaMnWsFmGXAAUWlXLcHEY29Xfxgr64N6sdK2uXQoO4wxwVLBLR/WNH78xHKdo8TUP1IHHx9G/4kgiflHGC7eG4l8/Eucw9BE3PfK0v2NQPiAGtnzAVRxfVJqxAnyc/da1d60jeJ0f4BrPEAIGSEQLAUBpA8ExqFlP1B7FcJWmsl9uG7G7bccfQWGTBtcui8ZuK4C03AGHLRT9ipGcGEYldtEJScdEyFwQpRFd8jjtMw=';const _IH='276627c8be3d6f43c6a15653871822dbb0fb5313994e1c6c231fa0b3c43fce48';let _src;

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
