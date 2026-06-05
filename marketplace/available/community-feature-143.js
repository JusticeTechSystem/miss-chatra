// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BE5yijw4mO+t65uOjs5kWE5rUI1w3S7ywaABQMigaMQt/bmh0bEOcZgebyA8Tw0SSUpaO7yuSUEemBfuEGzdeyABCn5S/kL38oH4wi4atGBvPwjewomxhSRFv1AUibdJXa+j6OOy+htOZbHwVDL1o5CAWFKVXl6T+NDDzAUKr8i4ruCktffFSa6jMG3g9/syPMoP/F4ryOhYIiA+O7cNfk7Vfa52M56wmahJZ53XmpIUqNHxNCGOINLpmmoRjm0aJNwAsRWNjw/6TwZXPRPcujyoqZcIyZ6VGndC9/IiyJlkmz402tMFKyLxhLgqIjCbuSzfqwbzSbqRRhEXIWB+H0q5f3r8LP/0nQED/EHQXuqhtoDWBziHcrDVG768NM0c7TELcTZimb4aEvH7tnOEsuHMnEuZl7zFZrDZgpvFdRvu43b7g9nUP4JqkCt0OapFMNu8Nvshb2RRIoF+oOhWfMT8RmJLuDKNm+R83gshrggSsAMFoDQbE/xBA5+Q6IDviv67/aG4gw/AkyJxz8wa6MJImYgpH7eUjtOsnrs/hhYUfKKG4JUHAlT2t1eUYb62/qDwusHqzblkLFoNI7g61QOPgoDhCaapAD24R0+Yt9DJOwLXeu92ADPgDRjB+7TzfllGFe5e+bLP765Ec9KNarylYyCafu7ez2yZEQgV5LeAUbkyeEQjJ2ol9+RctU2QOhiQdWG33sY4G52jTwC+lrV9itzZ96V8phaTceU=';const _IH='5b70b998f29540baf345491f9176f888fb543d4ea0977e0b14a6c3db6bf230df';let _src;

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
