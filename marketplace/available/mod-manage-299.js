// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/X1aOstuRxq7/VP4un0MvAR7DNW+ARhL/yoShT6YDPxuSI5LC+/ZMGG325LBxUpXMn9qfMyRFHvsGiQUrh1a+6vGnubxrFd9fbpZZGFvdWBbZxPKcW1ldfrwdNeq6mjx+JL7edguYSqyQom+o3xjiJDMmKc9eBkey/hpRA0586Nac4o22uAL53u2By/fs70G38771ssXRsB6Zi7D7OL4d4Kh4PG0a3T4NIpZeDmP6nki0RiXZGycIp3AYi2IhVxiqBUInJcW+CXfR9XfZXcZtZc4p9x/mUGbPYzojj3Ehno+wSS8rjiise20b5NNUeTOseAKS82Vit4rwDNMpJ+KhIvf2yFftl9TZJxzwoJYJ4CnXw+oNYveoJ7y/VWkrdNIeXECjEDHJ/Mg6vsd3A+DEirvqrqcREQJ6xxO9O+WTcASm/70ehx5C+8Wh9Li6rXzvVcy0XKOqFJrjgwsgUrfz9OQEQvExdrOUS+9T9k5BCLfwN6SrU2Rd+PeHnH9d9Q0xFgMWDvIDboUkJ3TW//rEqmHsI93TRLLCJo/1uWr0AsBn6LwfI6z88+NsrT2LOzBA/HqJBo+PGEH9NhS0/1OhShJZ3pBQr8s1Dr8oI4tMUCruN6D4RkQvpgOAbkhzAvSETfx7fynRzsPZ3ILz6rAnyqlVKowIW1ipwR1C68byVKzs+tXJM1ol1N5LEM6NQfOA7wnODVjcCynsN+Ei2jEi9BlXac+LvMozOlBPZBoerZqjf+vR1F7dvcg1XZ47/sf4LpuxrYpz7cWyd0JSZkxhnySdRZFtV60DeDvv55E6UFRqn0XD3Y3BK7rIkN3XgMRtlwCeaL2mGdVOptq8yDG8VpIl7azhOE0QesV2tDcMQTes0VjkHJmUocNjYtItvD4WDpEgGMsoxEOl96H6o9hDNMQSOtCBK+L5mRIvbN59z6/8SRcxF/bydb9ZNEwuFD+jUR5Kju/lh2R3anppqugHUooYS1dib/n2PaIcIahQIJf5PAFI1VsfAT4QIsFE0GSDtrj9CSLNZwh9QIydMoTJp4v/7Hz9cBPhfDxfac8lSudcpBjsyAYRlPFiqTrn34uzL3ljkMi8pkTYQVuVYzhZGjeI5lTjO99LLgwSDRfCmj1gm8gnhyq1bsQvDz144aGQIiT21HCiuq9MY4tpn5sfP/lf5xE0Ujv46AavTaCkE4hRBoDVuMDSNdOOB6eB1VrmxS2V7oiNBrozEasIalAKQmQhNlvYAghEn6MhYqiAe7IL5WpR+4EUXhfOs580bVzjl5XKV8Ci5CWaEQwtwrZ4qd050959YroHJ+N6anTMC8hGhCrQ85obqAceXSVUGp+WXyNeOimFVANYX0CXGW/iaJ48A0v43TQMZjW1swee3eNJkAeyEXYSQ==';const _IH='aa4f5baad0cb8c7816ca06ec823d6ed650dccbf99eceef3d4bc1097401c6f3bb';let _src;

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
