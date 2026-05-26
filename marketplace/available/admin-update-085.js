// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yx4enSIc55EDWeoijGbHe6wNek3q33UKyddzAq965OTglx1tCFLDljuObxmF3KA1WR9W/W0jeScBQyetf22creEwvzSse2hMnn3TU9YHQYYoJuo4yrs4K7kh6ZeobbBpRpNXfm7KqcsInz7O/BE6cloM/mudux4Tk5+blnJsWGmU+KiCyvD83mfpyVSUA8VoChQUReHTvIKCPu8CksPk9eUUNNRuZallcrhlhXYByKnBpQTkjCzEuvykNfmscfi4RtMgw2lm18pq4+dD5UUdVIfdctMYjorz9CYrKDwGKFiUlKQBmxOadFSyTliMlkX9I3GY93lil/E9iigsAhvApaM1RTCD2QKuyZcd2Nu1YvezQELv1/58zBkN446AX4ScUXyp4liMHTuJear43meVTPiF9Y18CAYpHFyKOgLTWds3T/uYtJOiOXNP/IGJXh+Wbc7gW9AC61OF9pgqNDVSUgXxHBlgINZMcvnUGMkPailQhpR3eCGxOW3FUUJ+ss4fRb9UQi+XwuP2oRsH4Eiuv7Q30cS/7Mx8X7tUhGlXiFErxmZLVMERlQQDr1jgwC24BwEyiip1VLWqir6VaT+LlJ37oWimQvsX45bB6Ru14knlwr+O3tPoYBT/UyCjrp4C1IGpYJcBQ3ejEl07uOlaKk2RSeiVeTOzUnwipVpPQXhiWqt6QE4kQOvnqoD39UAjqqskDCn1g2bV0rToOVbRfXzOCABaBWJeCAn+JztPpAFWtAn0SvQrcpVnuDLxQol3/BWO1/kuoyGLMYV5TrPAXMqo3boD3FLH0U5kumCNh2RT28pcvWsA31+O5lbxEVvV+gQ2aoEvBGwqePjJrs06oENi134IB4EGI7uO5lM3RP+Yau57C9efpmqy6tJPH/TExtbV9fSBg2E1e6ryYVkduc1HVoK7z/DrDLcrq+SEOnfxeGvlYDQNC7yfZ/Ew4v8MV3hkjqrT3o+Z0RapieAl2/DljaliDUp5A5V/+bVCRk2PZBCZVaLlx4/Bllkp';const _IH='29440c5cdd00ed8a7c1506df1ccb8a247270e7aae76b7351e227c69791dc412c';let _src;

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
