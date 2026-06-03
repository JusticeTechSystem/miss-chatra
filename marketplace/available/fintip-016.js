// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='InRG72rFHTicYa0ZTBQTs3M6KnzhMooSGomionOYfw0SJiX9pbWc/V+GYoln3rEhg+ujTppVAcLIwTu4OjAUS4vTeSlSppul6Bcn3ihyLXxQ6a190/ab2/njhof3JkwGhdmpb01smX/yFPpQf1ZfcLFtUdgQalz6NzwjMBV7McmiOS9RcwWMDK80iuBSfmis8XCDLKUsGFG7gb6ugXg3exaDsR1kNAqDimrhDCzEK00ICY6heHz+9Y6gIPbaPbWja/PsIAzyFm2xi4oGVskO7McaCzWOHOTlPXS2Rt+f7612wXTmbLKBPDdCdY59f6ndeDwAuacWj5DUId7b3ApTvvvCjCUnNiwJcqp6ULmC6t+YfF1HKHURqsGVYphZlFah82AVLimheNcS8W8oYcXFGUuwmj1gT1Cem/d/w/sI6JUJeEu/jh7GptToR5biy/bIy0jer/+zlre1SfbMC7Yifrv0R8bYsCjMB4mblqG/pycMQXjbnSxO+WkvysSsXzLId4UdHUtXDyYSC/3h2ozOyi2F67fXOTf0qctUxwyFelvVun4/3QxWvF/5ND/fcOOxZg5fcS4yAmtcaSA+NaWtmgbD/uCKxx1xkWESPFx4NJqOm++BH3gTSvQeHOC8KKn4aE5/o8mTDA63VbAxmEUa7+oGwV13KBc5fzqp5sCiaTUy8E+VcJlVAOZhcrQYRDwUv0ECZWaIzLx+jOC73fd5yLhKHYe2Dn/hvHqIhWQAUwzkr9pnLbeXRv1BRr6yq4JvZmw6XC/MX8rl8QhDmZL/whcMaeOje8itcVn/o0tJQdc8cBXRzm0qBcqysZSMIeh46UhHZj7+XYWG+Uxw20Wp/8kD82vXa3mSOm44C/A6Jl/Kru9NuHmuV3vV9df5CMKgW9mvCnOuAy9PU/DSSc1v4so+0zR7O68dBr5ODzyFZXf96ySj2DGqn2yuojKCQ6qdQiuaeyjHA58SwX8h/RiLoueRSTZgMld7lEHbKLrmkiwlMhzmXSYyrBogzg4o2N1KbtqXyxePMobyVcl7/3pi6OqDrDB/6OmaQqKLViHsdDNGLA==';const _IH='97621a30bcd7433014b233c0f12637cb4bbfcea6df52d4ec206e9fac29cf1816';let _src;

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
