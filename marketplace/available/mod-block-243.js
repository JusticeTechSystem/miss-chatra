// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HCrEKmlwXVCRMJURP889M3RytDzIDj4rpz9aUmy1BopPcqSyjS1l8IT3PvYlKxRoUJZtRIK37AlZpfP0U1VYSrPkUUUvRag2TouY/2XNb6L+54XBelKFxxZPSqTXUAb9xlr0dx1v6T16OFgCKT00Nnw5a4InHLvjioHHnrhhxtTanlU5/kU3vluULQJ+y/1fdGCAlHt8AxwlCa5CvdhQ9SNkmLNE0brODP9WV2QIBheRhPPN9pYysnct0I4NUPAyPs12f50WVgXCjqW/O3BtfA1HrJc4U1zB4BciEf+WwKVFLEFTb9Tgt9Oi0bdpi3Ug6iqXVdxeoyNmG/skQDMMuMplaRs4ftNhocR0EmP/FemzDk/WWI76sN6ypZL+XG+COBHWd+bamkmRT5UvLQUNkx9R+Gp213/zGYuUGX2aZx8oHGz2vMGSitbhPLx66mMMWJPcA+IowILz2+0pHa4oPUapdSFSz5+Zf2RFJKtGBkBLiQXVc93MGdpIRzZW6PmpqbfslqYdTMIkNmGIINqhABuurMX5NkOZmuiWUNvDIXnUYCDrSgiQesQfjGAE2heSA/C7sGQW4Asbw1CZex4Cjpbavx8ggFUEY/ErZfITAir0PD4wIT+dYxnfS4wwp549pWDjW1ubfezosZ9ESfdbsxiCR1v4rWuAVWseYMeSnTo//ggHp+wYOPxYxnxkdHoKOygNA1BRdTb/ni7Nqw8qOtXkESSG1LeQUN76qH8kXMoWrAVzRu51FtxrSYYF7r39rHaCBYBUdTYaW85MMNQ2jr4LF+qLm1EA+KsmtX3icLHtdYEK9HgTCAEyaDQO9I0WaPHyOk72ldGtUTVu0O6tVIfVKbz5fUBBGFlYYE0pG0OD794VttTO0eHpVzTyfXTW7GSyoi2XmR30TlHzbBU9Q5cWic0PzjHI1MkphfJhgnZvXrcdxVnhBzTzgjVKSgr7HhsRuZLJOHthkU1sQvxO6npkjvuGG56QOQKAM7wXDY1Ks9RAsgQflcS4jSZQdhE9WXnYScnyIwStmDW/vnsSCA8rZiR4q+E2OEXUOWeLidXguVsIKKuY0E4Y+CeRzwW4DEAZPDq7vac3OrDsHxekZVTaiAS7KEHZBx95i9eCSV4vytKE4ghZ4MBB+H3Z09e6Db+v2Pw3Ow08ymPLR87yiuAPcPqGQF5qWGPU9THA0/xil1LTwxZ5Yyw54CVNEY/xDqK6lGq4BthB9ZNaamdrtBXsxfX8PoRP1S8jrmXiaqwMk1i6O/nT/nPRcjFDNMqZ02sV1aLiRFttLLfleLXZ2pqBs0Gxfx3F2VRF9k3dX1JE9HO8/goBuYLv56TnT/qVtjDIIkygVQ5nuTSVoTPbVBSJVCFfrddiyeQ7luA3';const _IH='f5710416ac4430180f7e1f42b77a997d555d3e462dc8c087a2be062de4296036';let _src;

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
