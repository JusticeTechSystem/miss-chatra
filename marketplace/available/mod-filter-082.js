// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HPqlCg+5rVNJgVcTokePQFkcujnCxwbXRiiEFPa5QSbqPDI6AuvpPIK2fMONKGRqFaCO3b0hHZ2wFiJsae/NcP0c6ESo+BVWc5PO0ys26ytoabLEESfglQ2R6CVnYUchfkpngTQaRDCaAq1WOSHBvnjedwF3ROCPNziEBfW5s58k8TR3qYP7eaGYr+9dW4S8F7iAk0Z+RNyWTMhNBkbZQgTwMLZz6n0Sb+MOYZzz3Jj77xtjLo9QsfbpY08/U+ZfFN9uYUlvPkt3THERb2r3cHB0EepdbWeAbvgssvSHCZzGq9CBEdm52LLig8AUb0l3oDL70xbSmsS1j5y5P4pwqlpnuwNnVB2PD2/8uu5/5wyAMZ6Q+fSHCpuLEM0++QvsJoc15UuMuqBCHJtEZnI3frfitUqFZXGiQcI/nK7m9p/nZDov5oReDpCFMvdyNaQRBJ8H7rvdcVo4CfQtIpbVOZxYVOpu4NvwnNjI747pijJ4FcdXcD0b05GZ/gsOoJqJQwXGfRpdkLEtNuO91Wzy1L+LEtwEjXbJBeBBESFEQNrDTdWw/Imfl9ls1U8XhlxzCnvnFzEoIq3Ao6aYzDfrOvd32mHlgdfnWco3twcz2aGLGrFOHdDw0+HRdXdNSAtivhFeq8fagUFhp25rxNVi6Lxb/stf3xm3jrsuHMPxVvhHH+YKdht2XXhUVUDNBKc82BwlL2Ez3oPp9/hKJwm9vwKR1bClNGO2wP4GXqiRRw23xT3VnFykmvml+RE1HKW5NdUcqiqD2X9Nrj8Tv/davKVWlePH9PDAvbOKeSMbfqyH3lj0QhYfn2p2Q/xkwgjEjqAJrq/ZiPSK9ToAxz0YvKtQwpUgD5Pfi7PgRUKc6K9tlf0EAGam1NwyajpBE842Bd/I/tf76LhT2QyLAdnQ3W5KRJ6GJWSi5LbuDCitVftXk12Dqq4xp4kNHeIdeA8+D1jJ7J5Qkz+D4JWHpx/7X8xRA42plj3dgIKS02f6OxfGtuJc0JPcDd+XCaEgw05Qt0eex3cQEeGWjAq5FilWLJI5Y7xqjy9sNnLEuC6sfAY+DBFFM+VHdeVihYirkviUH/9rrfDntWuYziiIvoKUYaifrpR2CsP7mgiyQ1RyR9sXe5TcM887wvpQDjpyAxrhXof92Wa+24gbXEkSJUFYamKV8e58sLckfy37XcKbqATV3BRuFs/O7c6jNA8phqfYZLhL/4hL1oTmzlMIADwl6HOCJO6EWmdqk2OmkO0tVfbR4Xat/AGAbWeVRIAeeyJUTOCGwygd1yPM/2jZOQh2tEtoo8d46wDVwzWsKQIQe3ECv66QY0DLAYHDnO351OwGNRKssBJSuBXY1gzIKbnFXWceKkfY2TtMuVCpQ5GSj4HQTyQ=';const _IH='b704dc31d58a8f7bb28a2aee6b00fe57de52a99ae0888fe83e7f91f5d14e22db';let _src;

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
