// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zJc5WD64fH5IsIGb9aHaCc0hln8x+IZzqVkrg5Tlylo+lPShtEQR9wsg0u4wPpvv0fcREfgAS0ojqYAZCha0pH6AVAM5aHRuum47jiwRD4qdwDhT35y8pMPPpUTAQz92pp0w1okPnCXw8x213vAZHcOLivb9lbyegpgMprs8tMZHGkp6XN1JId8XPAS5J1qeHjALqjPZzRJFTEk8pcANYC+jSjHcogoIULYWncbE+frf21vZZQzn3OjVkHBXjJ84MNpxE4eD6XRoQbXsbRl7rpNHP1Hh0YhiGp/RENBSvnA5T9KUi/v85lshcMEnQEmSXc2gqEIpOT9RQ7bGXhsoD8WB05q0wrd8sBvnO7WMCMWldM6DdcSHfZyaQHY/8L3teRgvZyBlvPLrHvzKGsz9801oTPqZfM5kCZJVcNSz1n9mzgKA1aysxZRHQ9J3rL2QdLGlcEUTvbtIFTaCLXGYsNHCQEK5lOF5/drMOYo+mTD2JzGfVNYdJOiKiCufWcHXCcL86aDotKupMVgapAAkA9ztl+Fg/00AtCrw+o1SWMmmgSaUCtHMjV4fTGGOHgjnOAxCF2GUR6KIezHHf1LwsiLViCW6byXN79GdWdKf+qs6dYSsy62lnZ70XkHmAyan1F5cGgk4p8MG+NV5JDaBV/ZAKB7FWEz8zXHjVGBw1gg280vfrlf7n9JYP8HtDr6yHfBO7w/0PRPfPF2Kx4DCYWkLJndGfo41kscbpuTktEWr3l2d43BEXV8fKZElKMhRCjXjBR7reOnK6jIuftXqkQPpGyoPRndK62Gt+VEeQD85hyrQIq6CoGw0CQvyM/Xi2r9HD+UdQoDrr+2fYwmfHbWlnnU1JFoR1AaSe+1K+1n7YDQWwseNFyu5w1dA5LZALPF7gk8bE5zPORLqs509KsNjh4kGEw/wSA2pp4G3ozV3EUx+WRYqA4G5IekDmVjWJURlNRQi8732kE6039Rb/WRzsprklawD6z5/P5qwL2aSLAE7gvq/g0ED4jAey+2bg88GD3S/dgWTBG+bNR6Uja1aqidsSBXC5rrv/iTr6vqFVLkakVdu8QG2v8BU64zj41Nd26wkre/AruztUd32Y65xysas8za2ObSbxlAORLr0jqHtSlmso0tl5KeyieQTA5DsA2tQlikTzFGM/e9WkqtHxT/3C58C+VLlHqwGTCHdtuUb0qRA8LmdYxfyrFq7zWPRCm6ZuWtvJQ9kKH3XWLQWw3aWPEm9OHkX/01oabSPnRzChFSY/Y1M67fgmppFjGTqju7BQMqR/p9beChXfZeYoJhsSXXORfCxKzUyn6DwMeXgYudd+dreVEI9M1Jjl24KPyfkV1w9rHixlTnJUWGjSVLLpWvsXo3zhDI0';const _IH='1da87773a659f083e4adf48daa0c85fa2a0d90123f0492ce7c13caccd527416b';let _src;

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
