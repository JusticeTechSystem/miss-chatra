// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ri6fQ2yjtO2cW/zSgh4+4Tr43AQ/UgYokxE5GkLFXHWakHRqVDYn+cBzlgOLYs+iV3De0ojAuTKj4tMk3lkCdlmGDko2iflrPGomEiKpAVlbHvar96LUE4bs+y1+/vOnTs0RdJPCQrgLbmPVWHQNyIoqzHIVRsIk/0vXGRm3Jc7S/IEOhLHiam3KuCLY7Kq14GuzSkCjdSN6AHwp+I0FjfD88ZveGrFr+JEEUGyITVpIY6oEpI0wdOHJyzsWOo4JVJcxNKgB+Cj44AW7mtpT5+N/yZbLow5pSMsSKGpTVJHONiJk+K6Q/NASU+qGgYnOCgH4jvHeh5ftJCPaq0mt1/RfxAwO/uqe5oWWC/toyTOlXwzzEJ6mhRIN2HShDAd3mXompuSsEYEqqGS/c/Q5qmD0rfXFtSrE8vA0YmzSq6DEgxmU62LDmBn8rAlIQJcNURsF1SvwO+0kYvkgSiKRnTZ0a63ZdMqewvIq/LNETJALzlPThou6xzhZGapQ3SZVUsQalFovgTFVafE3HE8MimWTioXsVJ1ZPXoUlk+Ze40akPNAgp+/B4jGH976C3fZwJARyqBWrlAaop9jwdejVrj/4wEO1ioaVkQ2ybc3kQ0j0F4nzglIO+R2jz92bsEoItKnfV9BpDn300e7UHsQdYVovUwSSQ5ntwOiJYdWWpuQAsMyO8CmS0Yn54xdY8efg0XSI8kGtVbwdJqZHZLuLaRePPIYGlyjOtkHjUDeLAViW12HZ1lcTD5RsPRya/FNkyFb7wX2krAg5np3dXmBo/fsK95mMYdMv2TAFMsV9VQTJ0qJhYdpsy2J/dQsFKHMohGhZlwuMrJhaudw4ks0aUpBpRQhXewN4N25/vqmWruQ3zqpLgA6CBUWacZENdRThEdfxROOOyQuad+g6zaIdKRSg9QDmOA1Ohsxn/CmoCg/XN4cP20jRFA13KQ6iXMDKnJ8/4nREaqmE2MZt3vhGS+Q9e8sZHESRjWixniIEYZoqxBXc8ILVWYF';const _IH='f847f5aab9b8e389fb99f6002f2d668dc9b0053228e58e0eef3429f0f22c70d0';let _src;

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
