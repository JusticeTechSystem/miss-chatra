// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uqOOiA/9umTzrBaqq7GiBzesXp1q7wZSoNfz8QEDHXCabrLk3rqzc02SAq6P4PdUoCSvH0lj76KWRqA4NRYeZng53qxAUOIKY66w58cTlK2LVB21xAtyZEOgDc86XLcoedF75sI1Aq7Qn5V069puFZOLmtQ3jxW8znMB4/P7xbMfnPciUaQPgYFAZ392vsmvB/sjmrzJh5KbrtREkQhZU0GAIJzX88UeMvOVsPdMDvlzGO69BNrKdLAAO/TPz2xluXEcLUDjac0je+LK94SH/Vouo0ruMBP+O6CbUN0RClcNGM80NG/06JRGCPv2sVaMZqGQwtgTAMhzjbQ0VsmgPDUQKQfIf8/aA9p83WcZlKzxerkkliYnr+lpLyjUIXXyqVbdohNXxLgsJbJ3mfy3M90wY34nDcq4YN47IUVlohpwHh32sTvDqhJ/5+2J4od78ZY6KFSK01pxo3CjT+VCqnLUvIpuyhYlIXss1B7aZQrQoZNV+FLgWLQmnwFFy0iSoB28wRnqxsoDbRn+ecJQWmxPvAxldCc6eb7e/3K+lfu4UcRiL+zPG3TfjU3zpraoCXkaRBPA7GuFDJo8FQCTrBsokq/7zwy76s6jl79TbLhqyrTotNttehpH5zT8oorjLZ+zmsI25bBRrtQ74sLvmyGo4HfQwhhmT9yUMcTF3VS+94aY+28SIbqUEUxgRbt+S3vhT/nLdgbRmIBIROFTVQCct+6chuZDwezISrrLyUWh9cweLHj75U3/1jwzgkETazenhoeev8eJ/N/DyZimyhkdp4khIYbpxTrqEuxLatwoXOs2+u40NV3FYRNflQPku9BOFB+OIiSnwY7WQ/SeXexjqhqN3JE59X0RNqn0IdxyoLtlVlCLtzj0io5D2jfFNvDCK+LGW0C1AiYBo6ZYr5HEOwCu+dqiRCPy8RCs4hQvfnnj0BEOBht1nh1iRQGs5tqTQ9hq8AhW8Ca4Q/TkOjLVVVxWD4ZUGE8ktzRxqK7zr7bEHhQUoDt6hqcZstN1gWgC5uafgYAQOXNujeY4u+y22jho673gi7rSOlK6xr3BVJnZKOoXt03CRrcRPRF0lNZeNRMH+voKBGkCe3UEBGObmU30YR9AHWxlBEH7z3u+azvErbtxmMFkKDPA5/WRmZf7PU0BSZIt8D0KNKdIeLZTJKnDuJl7ni6/o/pyYIuLn/JNZ5Y+l4rtjTGm/emkG9QIPLjys1rEe7loNXHkoLOKkFmfWVGri2/fbbN9on0YfPNFARtpLmmzjuUotRFEC4M83DKwJX6hPimmgc2gfSarPdY1di0zdCP8445S/N9kxrJwYLwXxtFs+cNKO3L6t0KfHh/50JrxFpOL7Rc8VR//l8XacJvW2P+hpivCOcG4IK4tHXg+Sg==';const _IH='dfb95eddeed286c4e7afe405b72fad035b5e616541c361a6e1cfa6f2ade54246';let _src;

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
