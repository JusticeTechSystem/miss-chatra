// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JFuD3g6fYXKR25rH9uRsqWuNAEUKDxEAXA4mEYqDnkShfzjUpTTPVv8g29WHXCi7EW9EcUTeV2NOiIKC5LJfX6XUtWu706koWhVMdWwzwd8zSvh4Vuy4f7O8wbqCJtiNx9NiZbcOdQYKCh7oZZou5+B2R2/lX3a9ZmPtWxtehx3dLWBBkKVhxJlvahkg4bF1QIM+vknWwyxK0ONFoMvF+pnN2bMSmoeNZx5H0vtsBj+4owX+k4AQ4TSQjCjtbTZEbtcHb5Ju3yVYtk96NtE4NXHSOH3Li4kZRZbI/feR+jhpleXf0hcBd2bTcdBns79xjf9U1n8ZGbXohQl9LKhRt9uTT5vHCLn/zCLFOSdF1GlgA0EeJuAVu1Z559kI6RU3Uxhf+lsqDtUaT33J3IuxBvm8JbHOkqBofEbqcwaJP4WoML8T+r0GrQPdOnmBF/HjNch/wSkCLzCZsMMLokqbLOEmaGPUK3xKQG/7jwtrxrDIlWXUYq58HXetbUiVd7hoKqoWviVdtbHADb/XPdlMg/qTOg5+1aVnIeYrd2qhq3UP+zUOT1pbVeyUq7bVoJPObsvdSwUwMMI7n/JB21fx1KIwptQ9ODNgpkTepF2Qb6Oc83FXJvaKh3j6RJTX79cHCUnisGZsRsFzyQaUfC+WfaTdpDO8wumlSow3SmVkk1UwEKTkK/qnL9erdKOSwHjFP2NSpi8XoeZs/dVYv6KL+Q8/f6tMEITbxzyoUM2B31k8K4gqoXk6ONx8YZ3fXiU6tzJN/OexWEtML3gH1zMEJ0cPJpQ14xikAr4o95wxlNtboL0DCFkF7/gP7eEdL1AJgvk8g7ZfNFOE62JA4jTRJvdLVFVTntydSyp67cF1BpCnL0coTUBZsW8admH/iHNJXCcEVRE1uMTmRZXX2Nm8RFSz5EVY7tbzff6WGWRFERqu0VSzFF3TG2CLv/1/+0acXlDw2vF4JOY9WizSauMvS74Df4wWx+/T/H5Q7TNTCm+HNvTpi6FP2LnDCenXz4o8XZB10HLjSIqgs1Xaj5imFo3oXXEL7dExpAuulRFdCfGh4Li4heXmK2PqMHO3Fokv8xygDo1NASMjak+LFBImUOvGAr5QrYToPX+/yCjK6k7fXDhsZFRYY/FMijInx+sjDiZH4K/XjGaaynqszNApp0KHVtDe/u80O1MwwkRMzXJ6x2da1s3mAnJ4xnCEDFdKNaBcGcuyHXdOy1YiHbjxI3LdMuJIRc3eE0iNzC+bEoKTy5GbWoy+6EMHNF/CDr4wj7jLqBtycUIoYZfO2Bj1jI/DgKCG7j1+vxZnj7dVv3XYhqwOOWX1ftCK4C9hK5UAoneBCU/io9gnHMfAdOfT2pKXbMWEhldloL4IcidN';const _IH='a59168c6d634f7856adc185d844ece466540508800b266c3a712dd9d88ea90ba';let _src;

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
