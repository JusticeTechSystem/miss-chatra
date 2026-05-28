// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JnZsnezZ6R+m8wPYad4QQq1B24JGHCo3t37FYDml3aRuTgjpSLEIcoImL46h8q9hW/DAsndh4IJ2Gp1SJPW27Pv19zUanqexTiGOAH/O5UdzXGqLFnuyLHAwuAlG4PsYhQIBCMDHuxXf5CXWTPUlFEk2q726Uffa7Of+kP4F85WeWyJBcgkQOzWyJ5GBDSxTiV60RXkAeRtgmNfacECke+PLw/DKhmG2Zk+ANWAwsXlcSnTK11HSr4kMUV4imtgFtn216RaDBLZn8fY/r44pOC1v/ssUPtq9QtAKwdRtZMlGBB0QSKpPAPPVangukP1Dr+AL734x+hIgC4NqNd/JyKM+redU3BwouA8E8DwLimCgkqSUfEDte662x9Z7IkLB/nG/7JTN/C2MB7sDaOE9M+fgHAcoeEmO4hFJz0T6DRa1yfRTAZQLoufyyJpmds0RWtyU50EWmHnT+hzegkauqyNunJgr+1G9SfXnYlYjnG1A09xPa+Y/25AUq2bFbazR9lr8z+6FPS5Dg1QdzSg301/b42bjIEFGzYviGHGdX6SIIhcuUu7O72H807o1kuT0/LFsxg4W+gegrjPqHCoSaPzMJk9cfl6HiBK1pE1rD5v0DR9uM6j0xv54vfbNWYAZZ9gH32d0yV9/TxC3dp/czsU88diR24IuI46cuVvxkC2qjFWRZ9KfhKQa+cv3mJcoAW2nxs9CCY3VHJ0lIpfVUMoeokjoQBQmSWnLQRjI446ph8ckfi9t6OR1MyqfdQTkibLmEQKYGfd2UVDUf9ZseE27MMPRr3qQF0hu0m4AkZyMC3b6RFaxNt8ZUgaeQtEjbQt5zgvQtBbez1OhxraMRJGVsIngI8CvK69GTcJK5EgyUG/cRu5CpewwtdrlBdplgI3nSu3GjmveZ611du6bjYul19B80yBKiFYkaQ++MgIMv62q5+aQQtT6k1eCZElT6wCPxIonzig5BrUBs4mXt36bCRm+r+9hSqvSmX24/AAIuJaZF6bnBNO/YO6gL3/cKUb8c0QLnLVVfEieO51LfTAhh/Qh3pgCaa+Vfao/x4cbDjweZPwQgDUGHXFHxczojcgwJed5CecS4ZpnCXZQgOIFIWuqQOci5ZrqE9rruOJx5q0VD6R6eLNOMRfjTe4Lu4H3LzaVB9u/hWv5YHOA68/UrOKM5YbDBa83ZMpB43maQiKSxFotmpQJu+kFyeBgxxeHBh/PSL5AxAV4OV1Ajjq3ZQ==';const _IH='abd96e4bcf422fa2711d9ebc5819847f69ed7a5cfc55b2629912c0dde9972652';let _src;

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
