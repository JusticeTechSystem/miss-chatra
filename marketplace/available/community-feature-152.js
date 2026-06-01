// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+KHi+bKAs9f9RJSSm3Ey1KXEnr+8EHbF05tgUhMPLXaZvlot062S6xpYHKMYIxY89a2BS6WDFI4OTnpn2kGPdVO/fN4v9s6GXXQn1CaprT/+h2WBHpMRdYMoxGW+8MoBznyv2SSDBbJXGXQRSsS8UJMI3ObMmsdwBvpjGQAwp1EYjdANtQtn4l889JFKfurCP8WxW5b+grz2S/pw7eUP7rweDI5IrvpoK/RVKb9wQ6ajHLSjhoJCVa2lT9qVPpFql08Svtku5PvsVZi77QYoj7+oTihKEB0KyWbEjxQR3p1l+wrmMgrkqtwyvIGH6AOGga2rIXDqbZRnxvN1RUmFXeSK+eL1oU+KVwj/BlRTAcYb2sz41TDN6UlEQtnBT7PV0SBSeHj7lWX0xSzswShy49bPs6E1qT24pOA5K6LN6kIzcZFjLePitZ2oG4hY6g8G9DxUY4NCraMEOuD7UOpt2TItAZoJ9M9vZj2oefOVDsMFhhNkbi2KhgQMzcQRGpJbpOmCyHWPlwAZ4EOPKAH6Na/zHxe4g1kkV25pxHmdTmB/Ak1MoQbs8JnkRVNghGzg9qFTVS2z7d6wAlIorvTG6Os1CwhZpwAtaGUAv5PWRPC3Pll4MO0BpC3uvWgO8WmDPSY1+4h3tZWv8WtxhyD/loY+Gc8/uSXCHLco1UXyjhQ5GumVafQYst+x/3b/a/YOfvPSXYr6pDV6rpYbEHVUPAKLhydx+fn9Tmr7UeZb82PPXBL';const _IH='f7ae55dd9a8332f92f5ac5e0b5f49c273f3b2b73fda7ab70f511fd53e12c11be';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
