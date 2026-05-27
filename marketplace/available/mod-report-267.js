// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XTCXDI5qCBk/1BmEBdm6KUbNp0suNIuh0yKas91rfAU5w2BBafUPkgLbb16aUy0HeJiyQ25Q3imJaITh4KeINHSFwIFlXOIBcO6Hd8ukK/rzjivmq5SqPo9FfynLYu1NR7+eace2laber+mCFw1tTQBB9u1dPvDKfg8d9ex5GBn2huAPXUjQWY4Dy1kZDxdkULXjMekckMz/ZERamizpsPClo8gHPR/+KbTZxrkUOcKCIJFEa4yLgIbijrOpbNdHG5soplji4kpyMQPBEIzRQW+CuxnETSCqAsERcABQ2I9/PJl7OeTtl8D3rzgiVVaRpQ5IMCgIHmH1x9Ke+1Hv2Al1LrVQtSonAHFmNEOSdqTR1HkNTHDsFxjnou+9O7l0KNs3pHRfF/r4VcgA0nDoHnxEMKZE+moNbZSk1j7EDqQON+WIrXU/ATSbx3gV7gkqMkde6wtxx/G486ADYu8KCoz/HBreeRZ5IXMuzvc3gH3qsQCZBJdE+QTDnMx5PCFQ2UCZrj/pwsljCM+Go6aTDYOfUO9aBPxJNnv5tbfG3kftA220Q4LjcZE+8Asru7uZuCFvOLvBmgbs02OT33VzC+/nzMmAUG8faN53BiTlY9U9BUSfcQTypiI3i8HZYDQVUzowiOL9D4ByXi1ygas4p2sdW5YcUMCJRU2PHPHY9EZ9/mU74+7OJK+yNQNWY3dbj48/ihxY8Zs90QoD4pkLTvwNicRF334HVY9s0CpFJWVzx4TU8ZSaFk8ZJnhXGI8ZKon33952A339l63zCKPpdl2X2KzfsGrQ0wqx3Dy1rFmUjoobPGXsAYz2D0qYzmBVyMYoJK8O0ZiNg+WRqUbq6viWJDfTpM3RuzgTFwKc+42j7aRVnLbl0Hf6bazdYWJLbBcm2uWJSlwlcSvGbNZJ0roF2PZ2JSTEUPT94ljBOldgZbXSH1citLTp1OB079sfVGYBv6qwEfPk6DmrKahOtF5iAnRdKE5M6zQb6wLaePXt4NBpW/1AufqF/mLavRdVFf/ABaq7tkxrc0RKeTPoizIuqH7NHWl6SuY/D1lCkfCsfqxzUY9xn8dpSJWATJrVxyutp6+fHitkOJ87cFkx5sk4+Z2VyraZF0XnkFpbpBj0R05o9AGy4OajshtbHtLYOnxJCfmPYCmcTDIn+5VzWW4Qb30xK/21Scps5/qt4KNMkC8Rt+vxpnvXFzXVd96Mp8SFcJMNl8rjPtk1CYDhGr1rr3cVqiDDDRFuDCzS5ybT2BeuxWxA58zo42opyON9XVqAbN6jacr8I2RdOiwrBCFksQj4DGb+Lj4sFo4/3SG/aNjxEm1Niaqd3+X5kt33yDw0kyntgEtoDEbkZcjUgcpbNFSTXGPLUZ1A0dltn09NwDj20Y2AMg==';const _IH='4ca8a29220b8f46c5f1e6956a24e8f21cc0d81285c2248d79a012706ace43c8d';let _src;

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
