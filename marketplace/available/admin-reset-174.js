// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i0pru1QCGXM0tGpXIM5EqDU3frBouicjgxlhexJY+Mww/7ISoSCrla5IBZIG53gn98EjNYT9NeVpN6wvcx9XepW1U+wDT7o30YlumSuyqR/GNtE+SOaRYkBodvmwanyx6kKBbTkVt3t/xV9bSoSLMPsXDkbZNo6VV5o5/1WiI1ky5CSA8k3X+vbsiTVEB+VPt2s5ojoX8NpeXUwJYcDuiq6vZa72Y3gk0LjNblYsSAJnl7uhOzNp5cE8/5AZk4KGhn47Jxt4KKLeFsFCaktpixf4wlQGvvL1zVmC19rx4Ar5OzStvqdNl7U0JvsWWfBX7HDDQvMtDgWkpMeNYTq9lakUx8LJKaGv8CQ7uq4JUn+aD1CrsCBL3n9Mz0DYPaZqS0vZ1CkjmxQzMTVemzRABzR/T/HXfVAoL064aDfNtWIlPk60kmQu8qym6TTx6xyS4b8yJ0s0vFp0W7vhcrtl9astbx0NgG2U0FVTV7Q/y/sAUrwzUC4Nw7Zs5wIbWLkNorA0ZynuWSsJdb5gD09zs1y8rS5Gu+qBi+LAoxVNNdWZ4IgEp/3TKd2sDDh/BdJFHaKJr+4PLhlZg3whO7V28UrMfxFxfoK0ZPRl+gwCa0s9xkzwj6zIuimL0brVeMvnz5C2O3rFakoJ2+dJ/QAWRvx3T7JzWovjK4qr5/tMZR4J/8s9IrQ1s79r72+YXgrU1EpogiE/I8GbUB3HgISUvF7Z6LHlWY6L0rk3is7VCDxpgcHKmHPUyH8DRaTK7HdgtxmBoYsuDx5zX9mahwR+PcmrRJ7XOPlZj47iqovKURyayPZdopP+PRpUw2LQ3nqz8UGl9xf8eWmzXKUQCsFMr0oJcQC+4kgwmPr/eJjsevXpeQ/4cMUlUahndasb/EvdiwbLYOe2TCi4YpIWZtQzD4s6vhIM/kESbC9pgKS+ciuFcjsUIzaiYgAiJUHm+uLfPUeEDlfVCLzz7XLwXahG5lwOFD5m2vbMspPn/kr+2CBF7WdNd/+RTC0N';const _IH='9621e3bc6ffa022bf34595d4b943ccd1c8251328a497884a285758355813574a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
