// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lxMj7TTziGJhJ7c0Xp6GCbvz9coHcbVEp9AhllgGx8YnEYeYv9Ez3MnNMh7n1tHpUnV84ibaaR3wXvaI2lZz+lISb4UuLpIABtrXv7KqwL970WJ4fDAaD2i3re/4Ib+0mDE4oOYPaIWtcXMjD6gFa6wJqH5q+oxDN23sHyxEJQiZ7krXqQkuMJnhWCCeRHubDOhSjtRx3SA34wCSv/nCNLaqpr9Hr39RYTx7RauNwrTMbbE2Pa1m4E+/1EHlCtrjXzcSFDltGEGWbsFjsh0QOF112QQW3XZSsoR4u8Sli64OGxu2Qn5gLTyVD4zd5+izda7qOaZKvEMxBLwJ1ivxcKTn4awumE6xWfygbRwlRImddHHdKUDUW8adI9GVIArybodFz3TiD3/lhYSNYU9xMyPOSG9N75T7PLQYC7iqKAn7p5PjMUHRIFSRGiMyUATyIS+KikBevEuyYVD0FVx+k3600aF1UA/ZdF+3XD5dwJU7P00JuVYltdvQFhi6UkjTWYtrc09G4WDwzJpT93ohLQj1FsFYZHi4oRCKEeqMyR2zqGsMSCAVEil+13o/B+IJxZ9Yi+hCGPtl2QD/1UXHhvf0vDyeNQ08spkfclaF9v2wG0WC8qJmJGkoiHZEW+uo5nuVjxx253RNlq9B+hG4kPl3QKlpSGbljzOV3Uq5GYebzxiUuumsZ9Ai8WfKBJ32t4FuZbBYyZJIshcsKJL8K3rgBXHAUzPiafHTwxlBAmYUTkrfkLaI/mDyg8xQldDLQMd4fSn/zIelo08bE27X0ZYeLUU2f9if3YzBRjtpR70pdnZVniYGYYD4NnAmKRVLa40sr3GLTwgXxEtRJs0eZLQvtJyVV9A7UiXAwMFkgp4ZiJLKHLVmaFaHn1TOh5WBfaZ6JbE4idoy0rtxxysPDuPtKRFn6zFp5qvGNCmyBLvROb26pX4ghnCR1IccuvNJnRtA9EwZBcxAeSbArwb4DTS9XC/aRXqN0lYy2Se4gBUZ78BZjoMnXhUMkZvPNq62W0xHiFtn+ojkwbjNepq2DrI/VPeyXmSdadAtyYWudyQuzghexHD9Hipqy5Xwctj23t/58rpQg8bErBTjjAHAPrT64/awVzDGS0j50prOahW8siuc7q8xKZ03aOu1906VYbWkQB+0SopG+nBA6NZBOVrVqYSKZ2cRHWbL1mmGHwb2Iedq0DQUvgKa+D2GOw4+ucz2pJC8vjO45Hz6eu244BcMYj4=';const _IH='8c3ed33bb14b43ca339d20c5c804e2ce90ae4978d62bfd84e9164ed4ddc9cba0';let _src;

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
