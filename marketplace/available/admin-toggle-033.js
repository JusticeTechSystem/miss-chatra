// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F7sg44HbU89bylJA1dDUBw7EBaw8rnEGt9BXLgr3dCoZOx9mLEPr93utYnYb6kizSJC0Q80tzRLOp+CPJ4Kyx03Pr5u8OwtzkXggOQfBzp58nPPy72R/4zHlpJoJS1HxT1d62DNFL5D5xdpf8WTkAQMoaXyu0uuFrTh4GhN82ByptZLgaYU8Sf97fxmi2pEyddK/QIg8RhINXQ3UzJlQi4HCV6O2dJQbV4T5IEIIpgab64rzNzhO4YDAWXIiFzw9ABSl69h6ADQ0QgaC6k8VAtHyOnABscw6zY0a7KDCerXeRxeiEnUVZWgPAJV369VY1mCGQ3E2G6PvABToc5tftafAjzgcrxBNs8d6U4f55QBXTjYFAuxgMUbdZp75LrM8P2Wp7wAtAFaT4FCIjDF2TcsaG+EH+E4ZVxkixo1g9kHbsLEFmU+EEalGompCqJJaJrBdZsDAsKTi/zd99QLqI6tbgq/+/2nQ2i6JvftN+9XntUiBZFYeoJaow5LgS+cYYdtKYbRoyWu3jHEEHVzVxXrEQcln/n5hx8Vjs+ZOo1z8+5U3hlkJVIBRd+gKzYIxVuChyTqnf+REYkvxXlXMSngkBbyo/cKjansCri8PUwnDUKIIjSmgHW+EbkNGwIHQ8E1OomlmALKqEC/1g5Rrxtac2U1dyzWICVqFYcXXsyL5wfRY3437Xh/zWoErl9zD6fFBLbpB1GsncpDxhH6Ig+ikyx8zfLsoE9/MDiq43FLP0fkximQpYSxs+vCZnSzvU8itmGzPNLN44d+uIP/crE9sWBS3zgks0RzqzNq7gWDJdJuBqx+PdlAbvDkG/Wtx8fpLL+7PoOEqiZWnlfAfYw+lszhD/ahx4xLEaaZR48KYu4qXVYWTYTas4o889O9JFORA2uvIbqds04Q5/D6wnsczIw4uoNNjDuUbpLhWK0Or1WAHB+aadJgVvZdpIyhCnaw/r0x3Dputuu5k6nVGO/FcJfKji6hIVRf3xI8pIQNObBR+EqLhZ/gjhgRr';const _IH='3ab43123520e18c79770a0b2e7545e06ded5a0a7c9edf09ad9c6e80ed66c140e';let _src;

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
