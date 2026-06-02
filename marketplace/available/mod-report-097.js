// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='obtetvGLwWyrbeV32wE5hmkCdjgSt3OU5jUNj2kwvhOv+lOJU+qMADPne3pp6QWqPhCdD2Do3Ic4rZs3//b3OOlP3iVDBxj2J4HlBXQCx6vdRUX5xZdIurtwplBkPpnXTvMR2IcXl8sxAirUhcgiaKiLkJEf/707ngjXbN36FpbbvUJDnK0SAWdt9MRJmnHHTbqe6Tch5TMl5StgQ2DUtOD+OaXTHj6L88i1j/eOvXuAO6KbA5eXhY3KtBOra+QiwMR31KZQSfCuNxnJVlRw0a4Px7U7Q1ePUCTvTuC1/m3VhNnn2dUzeP28mzChKtvptckTw6AWO/VfyJ8eylaQ0ZV3+wGqE0b88urALVqTnKrhH7Os58WNCFE6aFA+e/p54W6VIAgkG6AAdkLuGLLVgGUxmixgSCbzXiLLBkk29J+ovmAV32kVTaIqqrt8Q6G/4rmcJ5H1HygC4YGTkEcyfqn6vGcSpdQLJ4E9J5PmBg6Tznm3i/kktKIEYsiH5PdeKhknMFp2a7oPVYVS12DdLrGRZS0z1IXzfeZeK2kv2cZltOh3LbHgKtpFV7aO174ZuSkXIhjZ0nU72siLfUjyeQgDbkG6w2l9CPxk1Um8aYicOW9EQIItveAOQM7RdnNCnt9Ql0OUqh4mSSDb3hn9HoNpioQ94CLtS2Glk6xoKjYtTvPZkkST05kdFSKPG6HaEsBzbsNpJSm/2BB7Wj69cfAOmBbQiGT7589uGBZsVJKIOVaFtmjcWD3uo//38iU8S51zFm7VEBy5hDNpXUwzXn6UB5Ko/6lxUTGhbcKnM5u12XhKairdu4HECCgdJW75zp3fVGwtbf/BDEiZRK0BWa7M3CAOj9znG5MhbLp7Dn12m7++Ik744xI5HHbxDuMV9PBQe/D4E88Voq1MvH9DBV/82QSl9e7fNFaA515ITERAh6QPtOu4hlVWLHNntQGRpYIXBTDFVL2sZ8u5lFaHGMxl+mLg2UqaTRfMNlIwMQoSWqsGTVwONdjQlg12UU/aZ4sMGh5J5TIn6PgFDL0VN3C1gm6sL7Hqje9IIGp25teeVUfbzLgSw/8+HHLyVQPUhGWLpe9bYbnhSRAOq2Zkyua20G4cBd8glHWaTefuRtVDamszsAt3C4WECTd3PwCffRrT7lG9fsmmpHsNGRltOf/tXLXi/eCbCZlLLUe5J80+DcGLahBIKjVQFP80SWSwWeWjU+0HDnWYmuvssJmLCS3Z1Nh7fm/KUFezJRoawbBS+qG2gUeh7TzAPGF/j5Rs4jQiGgMkXDQfAb4cFn6l/km6MHrX8u9QBoUNoF6SeKe2vGAHyGi6oPtZUrvVFiBlvGssie33iIDtDaP+P/Nj22Qwxez2DVag5/DSJASsYzxqvrE=';const _IH='950f12aa8758432d2e9bfa50446793a6bb8169f2898d71d17c6bb67dc7ba86f9';let _src;

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
