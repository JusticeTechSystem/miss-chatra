// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+uIvwMckNI5748RtE+5H+9R9koIqiIXP7nj6JV+IfMqBGyrn87bmPpmBA10xdtE+LgJfaYqcje/vxDFLdar5YxgQPO7fukzXrO9xcLfx7I+6kdelxom4siyM2mfHksvB7Tx0od7U15LMd4Pbe5AXUvGTKZvih2cF2FIkLs4lNUibokbWeI70MTBgrL0aRwpplIvEcflgvY9cWxe9gmrlmJ7/enKF9zRukcTVEVQzWHZZ0Yr3nbj2j4kVwFjI9N3x9rCUeVmXHns9r+rjo5MEqsVAOdS10WWuvDkmm+mpiDoLfov0J9NIiGFh8ctTJgwt0Ijt1eZsHk2lkGnuLam+SXJ+NcrcJml5it0/ErflN+5rimoWfYREQaS6szrheRQzzuZtrYtm0J/aRESl1i+q6cycCGFf9VlHAEq6MmO7U3ntCKaXa16ig03DucCgz/6294ZgHRro+25inBVjWf6k7LyKh/ejKu0aBJDcFTa6L19M/Q3bUj8m06CDxqnr5/jrK7yZ9KTPvGpO2OqbNySWAbTRoT1zzBVyO+TbQ5vOIAf0+tsH8t0WMBSynTwEZZ+1rTyhldilZzSi0i0+yNR6gH4r7zeJd3mWZ6sbnCXpBSMrngpnZQ1AnDxkmR1ZQ7wwRMDI338bJV5wamJgobQWDQ/mh6h54QSsA07m+LTbewSzJ+FrXl2cgjFcfnCJV9wa8w3hT3qwI3uidjdWBJdpH1y01oXFo8YjR00OuA5mUSDx89wwidgkdl6wTrbdtUNPOzUWR8dpirLAwcahAc6Flv2YiDP+OiQHyDF/JFtngM1YEeGt6qe7NSQlDbqb/9jNrJzwRv1gT6F8u/fXjyoD+nwTgCBjQs+sy185Iz+bKOEC2cA84k3Cm33GDwwrLIMw1RYO/FWPVSR47/joODdw4Z5vuePxAQ+mQDGtZ40pCzrMCEMhvS3xoIBk+B4MM9e+NbsBT3Yb33gMhSTLhV1K7dQ3wBgDgPSV9ZrQ1iUCq/cpAPJwGuw55tJTzez+BqlnOydMWUGr5YtxeiL4H79+wMhSkaEfjLHjz4pqM/DP6SLzpPCq8UyfP+jmbnqYILEh55PHkwzrCuu+loED76qwNqHJbrqkwtonRllQInuaboOxVfcyy+kzm98l9VxITDoDVDXvGw41doYOER+iULDArCZy7/y6CAYjnPNsNYcCyts+7j+joXDl7hwpVNWO2V7sg9oyFois';const _IH='203c3567a6d3215d5fdfd0e94641a37783c12aab180c1a38db34763c98bff663';let _src;

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
