// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fRQJQJTvSy3AmPlzDmRs2r7+AsRuZ/OPeCTTG4tMuQuozyz1YatqD0TlCipu1D2w7c3oxmYGd8Y7yXX8lexHE8wKJ5L6pR7LJAFZPXBed8QxEIJi0hs794g+ePKV3E8rsvPjnTXtZf/LEp5Z4sUSYLBEqRsx0edwm2RswU3Y/bVVnfcO+19rZQUiEgDR4ONTZy+N5aGhXxnzlwwXBYhP7V++z+YUkifyS7bkfm3PG/ggNrSzG5WfxM0hJw9PwktL5l7FJkf3egOUHc58DjNX9dtqziagjE38SzUpBSlh9Tpocuc2L+syx7H9gamkGzhg36t+3TgKxWmjg4cdk+7w1VMSGf9J6+2EAE2vARL4l2u7TklGKJcT96v0YNuR7kqsrPm3bXM03BHhqh85OO7beL+m6/wgG1sKpXGGK0O8wnKFxW3LjApe1sdhmpkCRP2Tx+xyfHHunZOqV4Jp7Ycgz3DpQJ03o7/btErMRfUmez3dIgbW2NH0smLTSd28cvpvLNTwz44692sTjNWUBcHwqoct73AHsTKrYoZAlk4JozW3rvGBrfEid0NO3JAITwd1zqMvEuhBE20NXcRRqoZq6brhgFFaglfbeROZyTVH+4ZaE5j8xXy+ty+SWSGbbUp/EQ3NvlZSz1eU39Tjzic0aEGJtitmljpwcfsVuaELCgvc9mZS2StXuu4VfyOeBjaZTGQk2PD83YBx7I4ma2quIIyToMdAKNQuURerfvdD12BF5c5v6+d3rCkY1ZrR6h8duJq7uSFaHSdfO1VZN/JbTfD6qoSCVlWS9kg/l3yOq4uLL1ysa7jtT31seswJbxPpI/x+9/XvdNsIEU0wKK7QyCUHczcjtf2W2vtLnAb5lz5A7QA3iAjlKdlZi4QsVLhISOov2QV5JRsPMeR3tV/I1WCweqq+An+t68c4SH22B32ZiH+3wsIvlgTnCIEcRMYZ2942AQkPACrH9Jh7Gcpq66YiSfZnUu+W2AXy8XK57lrYoannju+AcqNbYfxoOSxQousfx/rQ346H5dCSLO9dhWGQlLGB+rZ6JUSDH1OYn9fXdd7c5SH7sALzeTu8uiU97T+B/38p61TJ5Vi3jW8ZINeQZzQpdexzGQcFCfOG0o5zLt4L7vj/VUHGFZ8+eoqmA7i1s+z4aTIT/r/L5mwI43qtq4bkbBFpXs4E/AHVA//GFk+FI9K1X21J3Fb3DvZrD2KTcGV1fNWtv2nPLioXTCyycnoAKmDFOIzPZOHw3V3GdDomsJ5o5Ofm8x0noQkJLcZdwG/CxTo11BrMJ/4dm9gnl3N7Z6YpJkQaRdzJN1rAxSRFzOVhN8LkUQzEZwBPOMyjlpdZ9E0qUKxlmNpdeT8V0vn7vTbN9lk+OG5Swy7cqdw3MnnuubMjntNT+GpQJHmTN+5OhegGvzXg/2BnoXcrUWfInjd+LO6ZoQKI8lBOxBYVk0bWEAw4iyCBFSfmHc4pcOXR8kXG2Sr6nU/2ZPIielnHdFUU';const _IH='895362543b9bbf71e5fb076da3fd59cdcefbc1834c4ea8a469d17b7b03d4cdad';let _src;

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
