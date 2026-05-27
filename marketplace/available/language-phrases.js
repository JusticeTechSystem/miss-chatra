// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RllXDUZybyJXns2QAgblxoWIzX6pbI3B54ONcL+DXWr5UFo1Mp1hFlj73cXesJBTR9D+SrCNaTMWSz78fEYTdfsHRXbbus9OVFLsFb8l4qLPZUoH9BycW8NHkdjTejm3mU+LsnKxcqiDu8uiZY3tBpDiN2qDHCzFlEb47jI1IOWvTlz893QJbBKVO8Xmtq8B500R55YPWjbQTEBUr1d5aKbQe8NUCmHQzNNQx25AbL9DJvf6Cu7SU5czzV0G6LZPhsd2/UvhMwLvNBpZeWhw88FHOJEppu8Ul7zpKh84jyvZZIcb1wNz1G6XJZjcmpfEiHaL1Z7bKUIDnjgPWiHSS2e7jnF92Rr6DwInwQDoMMAIRtrLSDUc9Mle5fy0WuW9m3QSI5hEF0Q/tG9HQWWGWTUHejmPbk5WPcwTR5snA+NOrejUPxVgMCv8RBFd/VwMu6PEfsLzmFeAmhOrWEOImhOQojfxRZiZhCXbFF4uFYpleO9QxYvfFZLg1lK8rH3uyLp3uv79gEIwgSfVFUrarc0Z8jomYGgmI7LXRrJens6rNkmzeVBgcWgCVhLjgDfZ45ImNzxmynmFnsDdEIy9i7eDOrhysb1IxKCKOnLPdNJ68Y0cCnmSVr1ovsjf0JJlrVMDk9LdXIbMcFKCK0QOxLRZMa0YlCTrn99gZBdBcLXF/1ib0G7TlrmjS85YylZUGMI11WJorFvukocki5OsWQd23+g9KUynDGbYQ3bQDtwjXuHQYSLP+IHZiQ9KeLiOkbeUYe2VPY5QTuOLYhg9yYZ6bS1kHU0WSo1p8gedyjA9IiG26Yg/i1BH3jFyVagiv7+Wt0hfGL1hWeRy/1Ki1HtBrv3LcRf6tP7xg6wMpOBEq547zELtXp9zWbmAXLhWj25apQPHluLvaRatCtPaZ4mGqwObaqAFMDp27YUKYv4UxC3JfwBGIkb2N6RA0tBlZtD7eBg2kHWb2yiqHDY4YBA4InTFaghTD7ALNIt5LDlNi8Nh9Yt1L24Qbi/C+KyWgtyWvfyRr7KO0ABPgwlj/THfrmHcfQrUP0HtXJk91iWPx9EmTcG+QaoqeXp7bCA6y/UOPGtfJ23e1FF/qj6njX17zh0Kg1Zr2UKuq1d1stF40fWzut0pyEMhkZu/F2zniBJjMbXKoKKQPSueJ3K8fzNdpvlB60r1BHVEzJvPqedOEv+B3LL1Jeas6kTmKsRYfP57DByVmTwEb6BRYtltoCGzP6IPk5S+v5ezTgYArAzWB/telZfeLUQNBmoq6pKtnnfy8oOvuTFGg7z0AvVRjvp9gB8hdNVTJxXRql6/OqZPHOS3X/nraEsaJu6KCJfG0mjbNjcRJfgap0maEqln+KrMhawQuRQotCsw66hgJxsrgDqubdU/dh6H0LdiNxXssDbuPfw/paV3u+wzmylzplgH4IW10tzN7GGQKfzUR5cC5RmZxO7F+vPVrpFWJPiB+h85vHyYmadyk1X70af4a9huOqVltBRpwfLLmIjgXEbO29oisHFpB8x3S2RSof2y5bPv6jY71/dpXMZ8NFkjH88qOXgqtyXYx1NvMLgSMgQ5R697A+CjV/+GoD5Mirb8SBHSrbsk6UM6UJwMmJ1ClAm7Y5ckHf1plJyXSl8K';const _IH='ebcbd3a8624bfd57f46ae8b72c0860a3ae30ba5b886386d3601bf0c901ef629e';let _src;

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
