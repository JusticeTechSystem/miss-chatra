// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YFyDEJF9nHIsEBd6IvV0/E/JxQr6hPplsjgqPYaWnt2JrFRMAM8MwvDrZGkXHovRihPtaf5zEEjpx1TVFFQCDpErPNRHbzSfCKWLVnGPGhNs+Um5gtFLC9t6j4dyeec91b9Gn/cLo40PkDaE3f431NyGncpDg93pahNWEgggHeN/lmkSI1wANHNulI2hsyMFYLyqX4/WyltLrdI06LXnEePG83Ru+ZgKXD/RGR8TITVzFTvmatQBuw0vsn8dHx92xQDpKBLGAzlTUJo7DSMBAir1StRDLeojNLwTzOvekAbBn1D0585gpPoVrhqljjmRR9UY6fuG9lQAo5OY7tCAAxboxllHhMgH8kLpc5Ev93R2HPbWkv2UNH33EiYkktF7nO5HXmKda0nLfyZqw8WoBN7T/Q8grAaEqDuui2e6ma4Vh0KW5no+NGcn5dwoId+GIGj/Rg656Y8QNH102OW351lmgOcUvtwEEFpTGceED+iBezGYhfSYvI/J9+zgDc27FiUmdBXg8d6mh5gDIKHbiAQqliR0Oj2ftGzd1sBBOSgJnYaXvpanNqoV1cwFZR0ux4l99DBtw4mYrC/RMLsHtlTgzgP4wqoCqGbmzJSNyeOGRBF3U0VI+XyZ9+9Ebk8W674F+k831FQM7WI/0OAY06u+qdazeZHCjYqxs6subsaPRH4/GtsDM1ibZTNe2pshihkvQ/DtY25azD26c7ijvrdOXWUmqD1N5hhMwm/YncSac9ye7vtp/rbTUMc9ndqaGAdN/uu76OvdhoBAsG2VbGIpq+jmrg9kyqblFAuhZPXwjhHQtKdaNMyXolC9Oa8udWwjitArP+kcXyKDwscbFGTtNxbRwlctkLGCZI8MrWaLEb/DOFg/GmU7/OJxwsPU0HrZRpDH4usdmSjmQD5tT499MuAiyM7/dgqi03UfOTiJE+pt9eeIStqlsW1Kl05F9/bpoqL0rfnenhknpBlM2erwp7RX2omwmv8HIPt2GFJbqqsvCpyrXLwO';const _IH='088ceabc80578a8a3cc0210c7fc9f1a3a12295143f6ccb1ea976f25865c8b964';let _src;

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
