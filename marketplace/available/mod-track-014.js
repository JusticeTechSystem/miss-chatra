// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PzI+wNIRZMgB0rl9eFhIHxfL1v/temdDApwyiXYjlmdqNGrXe8/SAsERwmv/e/b4gmF9EAJ+KfDIAgrdtBWL311Cd2wY5dmf2smIxZ4LsKz7Qk+S8LOdBDkiBKC6AKPGABQMavBeD7+JdXtkX1i8thiVkwiSWsXgfTCGlSHbnlnG6NjxHfNZ3vagsRoSiA3VTXCgBqE78lseMJd3fafMT13+NxJl6hbggVy88aEooy9yvPBQyk6+Kbk+Zu6r6nvvK72gMRxykiw/hn6dypGjsCPZbiV0EuSM3oanj/9mpudxVPIH0U/05gOn+xaMt84fW0i7BstDcQd7hJ9r+SgRtpjjWbfcbR8LO2uJnxztBU+FSeZ8b8cidfL/6hLOb9wbgnuZ7/YPaEJyBbCCPuYk6/OxkuBZoGanu75/kSCKyMvZ6R6p4m1YIpB4wwxumL7upriJlFOLuwj3zvm/wtLk8hVLv/lqrh22TTN3jX3ZC2Ig8WWdQqT6I9OXPwStFtAsLmWt7Nr5/fiP9BTnUStE/VjSIc3KU92eX1rlkXeHGA6Vp0W0815fQIP1ytV4Goz3Ky8TcxA50Lee91bFVbUR7WcD856mGlszrckMNimjZ0zmrB/evOm/LX70dXERBAxQDgT3G3ZuqlbkrisnVUInHCQ+MN1eI12PuDq4wPqtmi5JLk9ulmEmoMUPylLuzJ59RXht8ZYgbZsD2vUN4vdz/iK4fe2TLjRIpjmfHGsXrAcIrtAoT6TgQSVukykqI99YusOeZUFwIiYI0S4dh4tgDy+r/VIPXXBaOFIOZIdn1WHndgE85ZolK2gQ+/1NJG1I6Uaux0M8WZTkTMITe72CltCkZpW2vbNunkYjwqWBpU6PUgumr8oEZuMDVvlj10LRrT1+0ExZ7tJWyoJ6VQxPCeINowSQwvBgEqFExiUWIWEug9Wg6idT8EUOvl4areKNVc6TrbJZIXF8EwJIc7737oJ8e1HLfoJehw29c9vACiV+2nOuOVIeOaa7FAfx09kfetgOFfKRHOpC8mroBNZWSkwVNMNnaiZFSJcMARiDRi0ln5qKb609PiBYMDCZtkANgyovg8Lmo/PKOaZHz79of9NmBL1cn9ynG7WZ5eQHJM6EbJX5BAdQCvVGr2FThEeK4mGdQ/ZHxhR5/A6DwwiE0BLm9pCi45Mtq0jKP6ih8FyBdz6F3f4IzwFcwXIdLX0daY9KVI4OdDdtTSLx9VTvmIkJxdF2omCI8yGGjrPlv428Ac/bskwHQTXPpqZP4hoYg+dfW7veqBdfBrUEba3DRiIFc9g533NBhfzuaCjuQo/PdfeTaIvzIK8xU5adNDcuXWAmOIV+7BnZ+YPLHopWKqrmhNJ26JS5+g==';const _IH='f0679edecb694eb206a8b85655ecc3245d5d772e301ac6e630fe90d82a7ae2d3';let _src;

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
