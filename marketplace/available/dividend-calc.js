// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5yKyhZkkCrm5f1SMZPzsvACR8tz11CIv3hV+bl+Sw4XHMHdZIS1U5kf9oKIxtcJtUWSsIsZ0tcUsFcYL18CtguRzKvHcI1qa5xu2sq+Q3avgre6YXVf0LHqAUUc7dqCoYLgE7A9zqxpNnYmmw7zh1YP9J4rkiHk32n4Lc8vsSPEEshihcTzBmh4eut/UfrS13rjMviofqIXO8RgXCwY/agq3rXH8vj9DBKnMChiMJc6FhGzkQDrVPIIUSPqSW/tZXfSwMTF90HU20zuaRK8dXztvgHwL+ausjWNg3GnESVvczILFTLWOGXUY2ZLTrcM+Nw6rSjtpUHDr+uGjpK8fTXHY1VzVGw6ySPDtroc2OCpmjc6JY56qgL1hKeZdKWeCi6zPa5f+LimH7B9CbfT6/QX+pQ6oeeyeq4dvEFUAwWq4Ty57ZZrlKOP4msXwqcAAVo5TKm7bZInuKkhNvhldT41iQTmLTi3Mdrd1KwzFm2xZHWNHG9D+LH/22JAJYjIeO9UXCbHw2RRXZf1TUYYyopL8zShyJrLPizlBxgM0rej+qs6bFcrnXrv/CEZJ4vfZOj3nyzDIeq/tK8elFPcLgESVfJjWV4rQ5Ep705Ag6Qn5NUeoG7xZT9q8kdrNQB8aDQcaS75R9uZEwhFH2NYoK60NCcoEfuBA8b0p7VK04AbE+tXsmxzZgKG53fNFGeMCuWeq4Sg2Uh6fSCMqr8f7ou9TCrrdnb4h9fNUpsrgNN5BHrV2zMR4DvDlXDoktPt6tiFhmuPTi4d0HKFeAA6QD6MCK/lz++Mg6RbqdsW2pA2HNMsPN6KGtliGYTzwRcg1aenGaeduCgFhCW9+8RjUhwqEDWBcjuM9j4kImBDQZ/MjmdSyw37Ly2+PjWCwpmhgWtDms1OhwKLMOls82BP+CJR5A61gUzyu/zqzxzad0/qy4dNND+2cGvesUgJaK+/DS7WKg0xeBNya69onnsDFDAodsMR3SWWxXz62v9fnfj+J3Z+KuQ==';const _IH='60ca7e2650dbf648f5dfb3ba9aacab253dead1d872647becb4035424a3d3e69e';let _src;

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
