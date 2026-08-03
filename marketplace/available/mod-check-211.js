// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQallI70bmP4fW2QX9KrOFOMJDMIHxJjv36tKpsp5aXvRyRNrqM7AU7ME7mditfTOgUjtO69/JpVfTw2H7tIoyP/OUoAS9iMG0h2J55wgrzxlzJYV1c0iJCQpAfw94sNU/mRINudZmPbwI1LOH5PPCygL76LmSBhvMnSGE3L4mzI7bf0I9QUauorKprGxNWknJdWGuZg74BB6QD6Q1y14Qf62jp9/YjMksFLqXQG0adjIHvpLp2W0GbZUp/jUXywvf9fKQgo9g09+oX/hONs2NjoMyKifZna0/j3Cz6+bZXSW1uRPccjzhUBgHO7JJVORP5Rqvh49mGd2aT2j/nI9CrfeRCgNXVWKbb9rfCXrHfRNftwfD54x0VTNoc9LFs2q/5y2El4O/no/BqsTS3iUNR3QyGVsD+ZxV8WQ952BwZm8aOts9HYx5FntJGcExPZ0yd5Y/+2rc+fyhuyUpayMBtPUVBWk3Uw7b4voAAOMo8pVPkidi+BFL1eSJ1KoXhPKKeF7Q3mgY79giuUPHg2CWsbt9O1Xxx/YCKQbav+t7UW36Wm0oDkGsXzlL/ewbI7c+j4ktsTG25Cp60NLZ2kiVGeczIG1MIbM0qLjs/TdvBWxCJSBZ1N5F2dwfXEqxzT39rJldJDpn8Y2IhUAfetdqB50TRndTSgf6mzZ+rLSOLBxFtnI7wcxgrKqnF9iPj2MxrwGLFCh8QlG5fc6EW36Di44UOCFj8r2pTupR7SEPOVhSqAZgVPClUhxPy1xgkTIOJs48fLaw9sg2eoZBcASw70J1Wl74co5EoYQLx1+1ewWUOtv8PivmfVnRBPTVqmxzOXMDdBp/UOEfZiu7L7ThWNEYPyAfTvVtbH7243Am1jLo0F5S+qUOoEyVU2zPJxKRuYrtmCZU7KiVylaaF9zinS9bbztnqmPoAxv+TyAtN4HXCn/Sws8QIylKbuScKMx0Ps+ySodw3P9eFvZhqTIlfmbrXNPurx2I5mF4Rp9Gc42B/tm9Q78O9KxNrBfxP5YpLVufb+QT1C0yKTqVUld5DEakXo7cbd7VEmx3c7/C6oU4EkF5pQOdqCDBWa29XYoiujaBgSMC5DlqHzsxxIMxDcKh9mu/aRHFIJ/w0sOoavBazy3v4/7BafQg6H8678i6RiWys3UI5O6/fUC/eqbhW9ka3xpyx4KPebEnEm7UkfqbUZnY1LW8k4WPZUZDB938H5xfkiTtHMU/3+xfGNiI3akCEv/hfXgpBhl6kN+iCOKSmTKfV5Nb3dukrr4kRq04lq4CO9N/q4+0TiQRfXGuAiVPtANQHlHmdEZzPKziamLL6QHU9/V5iGoTjH86ciQ/HemMVM8ONLfGmDcCw+M6f1kk7GqkbOe19BU4=';const _IH='8c133d57772104c16a8e974963dc293dd34af0a0999a4059ef1e5d68dd4ff951';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
