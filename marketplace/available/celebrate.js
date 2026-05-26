// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='joteW94jjPvgGjRNtvDZ6icACQE16kTn7iOKqRlgD65W56/vg+2V2lMXQyMZzCAVRgXpmPOu/BY/9UX+XCy8ya6tbiyHAmLb8PMAwy+TC/Q+GvmAR8Zl41yxw7UHUwpgb9GWAllirNpcDr0SKAqqZ+fHlQpjCmGNAcZUASJYaG8L6Uc3a2PRmrGgWJVuR8faiZA7/aDZcU4DCWe6gA9e8ijg4SFu0297j/s6Mcq120ArWXM/foL1zAtNK0BHgNujiHnMW6zMSwUWVOPX56QRPc/edS/L1vJeCwyS0XlMIEYMP7o3cQYhq9TCoqbZ9NK5KznDBC4sCW23nrDyk8vlNDDpzAmEk32LMQCDy7pp+aB78AuK2doTlITkFUI3L5gSWdZVoEXCtL7qsTCssWY6y5dAcJLWGiL9cej0W09FBHuTge5Yd5BuTRARaCBp2b3AZcLd8sZ4dZSMZxOKsivO+fZGwlptZqHcTDrEvj6N2esZ2k4xdfkCxxxKoVSroe+0mnpcKTrxXqkyKYZ+mgcRB2KaKfkmqVREajBQLySis4LEwQJmt5ovAgQuFl0Fap29gaov5+uQuFwv75QNPPMEhaJJzZRv3qtE6FFwyGYtBMGeAujTBLnxt4sQ6VhMthZiwmVLBrj5ZEdKvp+SmX/TSzqdoFjogLdQl59EFHKs2EWQvEBKto13QaRf1Pf/Juwlyhkjj+beWdwO5k8yW9LHAzSd1Dt6zKiJjfYxwwRgl9C4A2sDCnL8JE7kTslHoJLg1yRTQJwErMXPs7Lh9h43AxZqEiie3UV+L32sleYefYsF+dBhDp2Fciv+mtzWyzgqUTVUA+AcrPcJ/m9o+iTonT9pUQD8xuLuMITxZbrBUe7Ek5QIAq58qq7JqPNQnlDDnC4yKuMJa6QfgKDBEzicUDMcBFcHmSU4ldHVPRG+eODw1HIZT0etOglrHw3yklcj9lC0uCsAxwJd4R7YcofY9VqvmALtzVCFbavgyjKm9Ut+HUAAy6Cu+vZ5gxO61neGo03MBF9kMUagHHMyFCZ3YQa0+o1uwcmFk03q6WROZ+shEMYfHCSTzuh2h58i4Ui+cV9pidVUt8pTyPj6E/+bQlTokZLrwOsIbkCabyx5wIjXFek0JsLBiWhrj2JSsm9NBh3pv68/PCx/biqP0JqJOoqPzIBZ9Ykvivll4+oEhNh16rmJgBQuCxc=';const _IH='8e8aeb9bf122c200f37bea54b86431b4566707be1626d866f9176741e00282f4';let _src;

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
