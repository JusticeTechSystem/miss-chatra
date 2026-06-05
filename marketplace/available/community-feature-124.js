// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MJ4jrDGecj4/qBDx/7n71RvoGxfObJ1GrRQZ+4J+6lXPlUiITS0gcLqNuiEm3UVYo0oGMEvNeU9trWGGhOYiJD93X9pTQNX8EBPlQ1O8+gFvmFqjvUvCtO5SWEJpw/367KfZ4Jslo7DqcLIuvTdXfDG+NwtFDSxyaqjrRR4qYiwH2W8R+BEwFcMym3rRlZQaN3Kb2GdEpU3OHaIAjMM42azfBYAvVbTD/B0nclL7QpacSy8VxYwZnjPhY2zxFQY1jhtm9PI2n2qKyauKZEwjYr8mnssEdJfPTfhn8xxDaoYyhI77ZZYUyXoz/ajeK9RTPDrJqGxgkDYtey5lcVzfe16h5/fJ7+acgs1noO9y8fKbuUXNyJ9YLzeJjXEilyGUeBW1F2eqZ7DSFwpvjyOO5RXIoIBWOztEirJUz/GnvzDs7OBOEkBkRv4+/AtujG0HAGgDD1gfdYesT+3eAGCKtNCHOaAexpNVCcu7gbLjK+kA6xiv5/7RqVsMRQrWySz85upS01SfVcztBaeX4G+LQ89C7ImsU24bYJLwh6vFrHJimTr1zkNqhICva42wxMCTmygDnCH7NccS42ODcMWg4LkIdBtTIEuGj4BsMkrpHw8W+UfzZH3423qO8LBaISCrjca0bczwglf/WPA6KACrIDlXbd7n80NjivwtMM3lbo3Ey5/fKLzo/Uv+rsTQaZ9zgLcc9XDhKJZMzabMoBjLp6F1dSB4cJ+qJDKgwERtRDeiqKiGu1w=';const _IH='53dca5c617ae76c3232eac048b68e23daf753893e5dba25aea75f3dfc8d8cce6';let _src;

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
