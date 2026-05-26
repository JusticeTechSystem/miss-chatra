// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LzNtz7gLrV7nTVsLNQuXd6kCQpq3Y1fL9PcZwhLIXPlvIre3T1ouEPbaQP0AKES9SQj18BQd2gHXoY4//zI+hfFNN+QWeuWoiOQF0wgvbpuSDlYB8GSz8XKe1cLSV+Egft6nmUKp0mKq/lUN0Fv7KMXhpvr9j+Q5RIDqwJNb1nYwJ796NvQZBpqRPgTJciVL3TbCrCErYEHNd6a9aY53/0DVog7wg1ohSxkaCGs4VFPz6YvBB0VF/95d4F+yWBt2RLyA/crtkOsbEmIne0vHX2ICWUm2r1TzDeCS2IoZ7213ADrTSqYTxOslkYIAe9AfI4lXpLj+hwkPtARNGDwsT/nxcDEmWsw4bCyQUL3cX4SHSUP1lxYEn3ArCKOe7jcL9yU11KdEdPNkF8Ico02B51oNFsxkbtlefMPuhJNrppt88EmbaML3cq6dLTpCwS1irdRDMkjLiHU7yZKq7lC7OKjrtHNYlSOxyyv5+q5aUapsS7SWdRgu8xkCmgi2K7bmvVbWoTlSDy/sjH7cdawpJlv/2956gayFGeZl5cKvGbRZ8FkNBp6ycWTsoUTu1zEyHa2zdMqOAxTFnkzWEJg8VQ08vtft586kEvtGo+ByXfPi67rgyaBG4rTxaRJsKsm0SSxVXsCPDeTNCQFwnD00aCstxTmDTmPLCkirxO/DhuMXU1sSle1XnnnkwJU2VyymYyc3+LSP7c5vqiZ7CkfV0BC6v7RimZ33O5+FKVAYC13BBWwwlC5R9Ze3euYuzAu+mGcvDI0Dl9mPjnhEjHefVN0ME8uBRTuXx6Iw4b30VGNkokwaqH9dLe1Kao8tK0MveKQ8xedxewXjaI7A6LI+M/ujzXeretF1bf8FGo0P4M/0hQJVx0Yyicip5Dwgmun/BSpsLyVuisZYR1XWCOa3X15wd2q5I71pWa+RyEo2uU5PzkQbk/kKHA==';const _IH='d90079ea45349d173d0921a172bed8dcb922f7af52c011e318e1b3a26bac1fef';let _src;

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
