// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XlVcKU7ME+kYrQ2d9aRILX1wbq0QT8IQJiNexSFipT56J8GmN09I3FWV0mUWihzVuftQhm/gis6mrNo7krGJWlXUe/Y81RWj97k1QibOB89sWT3yF1wr9QXpFkHs1D/bcPA7xQ838Ndff+pHwX4MBc7/1jdNmZzjmskQ+/AxzBzYpr0QYAqryVjSyhamMMPCMatV2CoxJ/tpF9aUAdzzvRzzYm3/iG1LhitX1aSSGG4PSCdYyn5CN3lotHzJwiIbOb/2mnEMIFwwYJiFE/3CvTxoeVTOLhrK8xuj0TdOFRpBK5N1AL8DXGTPDvVj/93NcnS8cyLsSFWNjHA/wB0c24VnOu7aoWLwtYCJSoHr+6Z6pvkoVcrlrA70rjmqoZ9caHZFV6l8A6TUYSlQSBrA/W0cybdEQhzSL8xi4a2ie/SPmsERGHdLUWTo5vj4+ES9+KSNv3Ua+Xru2+kaYqdiuEHJIc7H1d1suAcjZXJOIUmByOqA/MI1xtNHQiuytzHCCiacn2J4cxrjL0KfPIdk1IIe3/jKTJ3Tijeyyfx/LwP7o5hZiJ4msvuXdhlSroHpJ2//VMmV7uVMgj25VRUx8Fvu/+thJjz5ax+XdKxENQUejUueky9dzFZbV63tZ3eWBQjTqZGEhEfzW5sb1btV6Cy4VizQtkx4PcP4RBEaCpySY0YMf1/8W9defU7Q4t2ntDctbCjwhogilOSAqGUjzq1j7JsPe1Nea5pf7eZyH04BA64Ia23TWsSSKnLaEAa4vygP0mwucfrPeMeAAXc1qzrk7p0eky6Yv74LHP5Y0OZqWm3fIu2q1AHbk/zazhV4W5WueIhrzYsYQRsHo0g1+ALpTiYL5qyCaWpt1fw62ki9yJMWmW/+p9qrKGQwRzQ5eUrw0DhDJdgUGKi9SKxt9cJKUl7xuQgAMgvDNLDje5lWzad88CCvw3dBLdC9272lL6TvTg1Hqvrah3oqU/GdrtXG7aWOGd5SvUwgd1SLN8V9yrZDsSBKD4pT0BnTQcIRC9byw7BMbizv8JB6eUR0CajU';const _IH='e136652d2e04274ccf803896c395623bd61eef85dbf6b816bfc879e2190f0ad2';let _src;

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
