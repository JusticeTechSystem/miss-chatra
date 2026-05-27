// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bUXNpREHk1nCfoMf5tb7nghCnqpjaY5uTb5roPq1nn+lnmg3e1cKpkOK+iLB0EDKKHgWkoADVYWGGxhGWZQNiDevEMIJf39o6h+OqydanaGeBnu79AcVpf3kt0+swCP5NttLlGLMVOYNEVQFeDv6/oIbGW/cUf/nr2XFus6fkDJSlkRJyR2mneJ1gLVHhFeiHZ2UrB360cSexnpkf57RFbE/apJemoobrpibNWXdar975hQPdYWJm8sQdTa9wKXT7YhE/jrf3dw8+6FRlHKjRh1XP3tyzQlxzUQuF53xUgtMwntiMJwxerWR264WzO59roYtzIfnXw2ngYb3Xb32EM2FkXtSALryDZwyu3VaiAT6qLeb5vieKf2KGehx48QkibeJjBp/my3vsSgInswoGgJhnbD/l27QYtevVnf/zbJvlt7ImwjHa7gRO/kiAI2qsTEzE172nALEmBljBcm4fGT5FtwH2e0t/XSS0WwKtzRdOjBiqH+utiLiYSPWmyF69HfZfmK9mXpraU1U+N+i0IDGHjsdfjy746/hU6wto2Z45qUzmxCbFgssZ0FA34v1bkC2xgxi0emecZbXowPqmHAiBrD3S8AymaY4pvPeAXVZGPBodscmcrqCL07KVC3M+vL0pPiYec42k0Kg+cj/ltm0nOAJKYLsMeEfWn4C4llMSAlpGuKF06MQm1J26f0oW4hHkgetwGiIaN2GgLa3n5Euk6hk6YH92iIxiuDU/gQ42ABAoZFHGnt9b+E7jXctptgTvb/rF39nO6uXjX2a5p0VCfULFuBc0SOaCfoFH7VHp5aAEMZFy6ftTpIscMalOn1vT4zndLLEEbeDdYkcGEKtKoUr/zE4TJ52ifayXE9/Lfm7aGSo6e04l+qrIOiYpndXscAp1Jn6qYoWiJQG+bMZZcVQwfEinZvqj0oZBbDhjnNdM4h868XZhxx5abPMLzsDoTLyaYjQr0mk8p0M5FmxQ70Xta76tzXkGb1wg2XvytiXyeK+CQXwR3xnkAsuo8hPt8NLiriaXanZzBO6FwUArQM8tyLAlcCjZPhLT4nEzomnNnx6u1Y4U2PrnKUDNGngfYN+43PhZNr83WGCO8FBUGk/5tKfZDeccotDScsAEgWq1DSxlb0HIRh4v25x7WqdOhSTC2Kth9vCrvCty7r+tllWegMrz/JMXK+i4a38GH83LCxR5eBoaqvnG2cnbyLSPvdqoJmRc5BwF2I/rYzfuXPqVaz8jhdT5lKhMF3QRO8qBJ120vYGsS/iEbpbIeFT3hkFMo47eSPxPKLFGvGg2IE/HHXLzOhwCY5ZXCOCPwAr1vxVAt7A96ClTpipXmsAJlG3hf8vWF1zY9gzWfrP59AkzF8g9QtzWHsw5goub+J0mVnNVTq+Jq1OA/HDLI1g2SFqB+Te/3BSfVz0PS4obFMzIo0lzTvPtEzU2aSrfGEc9wlVySynQWVL6hfZ/52K9H69p7qhV/4+oG8x4l9Ja+RtRuCbO5owD4ftLV5OZZXkB2SzYSPgVFVrtQcFCYd5kG3daMOeuiz6qv8uJPB8/Hoy7Thg0Es+h9+/Rm5wonPoNy3pPg==';const _IH='3c9c6fcbcb6ca350eef41b2f3b2c72a0ced66be15898c353b04ea4702e1e834f';let _src;

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
