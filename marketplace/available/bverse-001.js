// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8BJvMZJqgte6qn6UthqFuMdP2JMn8IV8BWp6Sg3KpRp7IHG9PbUZYJuC2i3j+3nchmBNUsIeN8ku/2s+GTWPYwEObnEIluBFK1uze7fXWFQMhd6/jPHHFXCgeix/3sLEJVmRq1/32O7p5JbCH2ke3kCHt0yp7ePNDIVBktr1l/espgaXPO3lDJZbK6XcmFJHB8DQ5iX7qnERDvNTpHp2geRyEpbfQIHSPPmJVt5yfZ+vSQqWy+ppioKDX1L3uRDgd41EtVaDkrmkkqxkCuIimGIpM9kayyItLoa/0tlCJ5ly/4V0M8lnC4dhZtH3F9bjg7fYH2nr2tLC7GBHaChWJe89CWPDWAwwz0N8RB/m2J1wiDeqwPOpk62KSIScdPW+vvDxmQ2LWMm/YIOvOilvQiTOEFik8Ycx1E1wto6055gmGOyzl/f7qUfFOCd1h3NOSL2XaNa21DZZHavhGMWE6Lz+D27V4kwhzc2Df632ioZau40YtIpKFEAW0Tk3KII7yOh1vetWE3pH8JFt9WJGu7HyaweRSdaHWpv/87j6vMlSnIl83HZxuNYDlGYNR7j5gl8ddKYFmWi9skiL9JRyi1/Um04JHJjUjIlKka4wW1vOK+ZIiZZnzffu4sHpfdJ9yA0VeKZt2EM11qw09NEGWElwMZcjRmzn2NINsc6k+fYt1+WAc1eLVt7cXjRaPdvuhcddeXU/H0b1mQs=';const _IH='17e46387b7aef829405344f65c044ebd3ef05c2525e30a9df2ebee94b44a4ac4';let _src;

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
