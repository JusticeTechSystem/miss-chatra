// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b5ANJGikyZlFWPeapVduUayxqSLRqY3Thf9BjS3r8t4ndQYGBFOWHd2iVoIu3YxOc6f2EjAO/CjXTOskwzLCg9Ctmj+ONMOwcTZM56FBsN0qzaMdWDloKvAJEECgZdVSIhoPC84S10w7T8oobVPNlkb4zNeyGuPP/z1OsCPLQP3Skbc5bx3mXK/JvM9LhMPghCtrb1GvYmahpOa29WmTl5ko/wLuKhrFxI9TukFZgDibJXLbxgYMFh4FgVzuJqzMVq7DRVIup+dC7objKwWDFxnxEwxo0pmF9hi6zuJLAr+1HwZxlVhg1i1wFclgCjq3curo4Gy0M9/1jEULKSufn9n5Fy7ecpQLDLNHC7GOuYLnoZW6meO7cDY45vp0S+t2pCjZyrB/72J2L9i9dbgVFBubgwFqmN2YOMI4oim5i6cHF8HHXKrQamGdk/Sf3I7WUX/zFzMvBSAUuiuO+E/fmXFcmdkMajxr6pUifSboMElHkarJgfO0wfttv2HylgmfGT1ZK5Es8fx5WRVC+9rONmnOLsGSIabn8sCk1WbUGH5xIHy45LfLi/hbk7aM3thcpcus7sv+cwAwZu40bk0iQ8Y8OxL/d+uNQd5d+rg3+iazbPnRejNTOcirtQBIVLZIZ9WQzbpUSi57EJdf8HmFurws9wOnuagAbnJtR4+9K0Ugd/zNa9LNqIjkYynN20st46BMHbxFSngVRuZgSQEuT4BLwdU3WzRgeuw5FrwgBuDPqhheUPgzEhvH+LlCteUectgUmth4ZoZ97+xJ7+T7cLJPBqNBvCVWTCF8Tg641VQWorpGo3kKBAdgxqxTOFBoANoguCsKnPG9+SVm/YfG+vbaiiaayO4VEkvULfGK7vXSafQMo5kC2xz4UNcld9ddY4BBQuvAcf5MTPGwt5sg13wateR/i+hgJUgZJMiweJLRB7x8NLcVQMUjEoQAOYckP7lUlD1wYBfzn13FxdKzhTXpsgXxWHjcmw9xQ3eiLaqpK14MFhFLjmTfgMFEGxtWzPdM1Dqs73eUvzMjEYwkdGk93xpZ078KL2lHsY4guCt5uAtxP6k774Ma96kLIqkFGFMtBwrIkxlXZ4+Yac+YjkkQ3giSzHQPk4TQJCuBFwYbU+tovrjnHQ1K8V79ogamyf79eW5Wa3rY2FNnJ0ffIev2AOEsyygIJHs25YRbbQ2Jfm36WHHQ1y8Lwbe3e826lsqAXxhA3/zqTpvZ0Cz2nIDsqX5vz93TRSf77+pFVfxd9+6E+Mj1lGl1rqQKP2EnSiqIW10E1y/GgxQMO2JbZQqbcshEdvgEpXWk/3g2xbordSdeCuCK07l1ghm0QFvuSymke+LvKkFyyrtVFzkat6xOkdyV9NcwMg==';const _IH='7c9f8c795f2c5e7a0f03be8f7492c45175bac22c97824d018ae61a5b11a21af8';let _src;

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
