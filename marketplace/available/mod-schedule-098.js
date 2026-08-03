// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvb2xc0L04ucFFpn7AbQI7Mves5SryBleB7sajfk78v9gJ2yisd6xsNT/CP3NgjYJXYdCSgmYhMO26EwGhOl17kGj0EWAzC4ofZmUJjE8atX4ZsSCu7sg1H+4bFfpXRXi5Pr3TfpFQGdL3EGu50cKSbwtoxOrmLswyAkPBH461GIKYPQAe9v/4ZixAdjf/bQJRvwOwcoFdPhuw1kJS+FvrZhDNMTV5SjVq0kjWOpgd1webXfxDD/yM+uy2Fp7ExwBjO863d0yU4hGI7x60i3yDexOPxBdkcG6CLxoW+IW5MTNFoIkWADgRGyqU8zdh7F0E1wJXBorUkxei+6VTGKsCgCaBa+0r39f0xs1trQ9sawLWbSpFLBiYznoEFmxEyT8Sj1CASNT5bm3d0o/SQlVGW4HaMPacc+jsJP4cyuJS9Z6ZHhNPKACvFXNeS0FFQrYje3PEpd5fMCAB6+igax+9CLKSTPOhyl7cx5rz8RmvCAYwMk1il8sBH+9kxEJKfoMVYBpgFovGj+nES7G17LxfrpWp9AAiY4cfVKuK7cLs5U0sRRvvDIYFnQ370tP5uwhoDHUO4KWgI1hu6fVSf4P9mK4/qXQzI5XCY6r8pQ2OY0226SRQ/TCf1CTVNU/wkNXTPMTqd5UOsh1sHCc3PnkM4ESqdiZNdnnvUzPrsHYYVxb5KnidPtcxUIcJ4kaPIWi+HBcclWszo+03SQytSgo/ZDyLTLL8BB0zK4MFCIhKFw8m/rPxVeMDWDeaRkOUWn0Nv4uW2ugo5z/S2pBv3x+3CqiUFE0yxFJ51UcojtPhgzPqCP7CtjpKz/H52xY+esXHTmnMJ17ei7IiP5M0J8d1S3s2pbTxD9o+zigceDm0T4a5DWThRRUu0XRngmt2+2qdKx0UnLr17vTWWJXs62NteLnTmSN7YqrC4Zr46XvFSsdabRoTeXXYH1mq3aL0gagXuHlYFvE4atSbWu36kDjHv1fiu1RgF/bdHM81Dt9nqU7yHneTDdjhsaePk+wAZfxNWrE6Kxy+2Is8zpskaQCgzZFuDc0G9MxL5tt3TQJYXzqzefvutAs4DA0Dez+EMz/YErnA5HKq6HHmrNGWlhcso7K0MkfQqju6NIw7ljLBdOipimmCS6CGiJ5TQFG8YfgOfeU4zCVao5mF5O6naBDVYilgoiRfVwbvfT+BtX7uAWmqylpu9RjNrjXzddsQFr2d+RqmczeMOkbSjClvysFwFJ6aoxx89LRlRARnLhOtBDuTy3Iv8v6hefveXlIKTpuYzOchKRNtIbdFpbSuUQ7klDS3KV0nP1OQhEUglHUFW+gqc8lkMI3/OFBN+T6B63VloYvPeYVCSXRlcGGmaRq30mNSuRVc2yzJ7eB0Jh1vJfMOn9PK9m5O2DeIPvTx2UDkuJzp';const _IH='d5731ffd0ac5cf4045e21561834dee78aa6de02ca8c0ec9bf9d1670824335df7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
