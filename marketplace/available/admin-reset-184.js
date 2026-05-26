// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N3hmvJTkhGgynXBprv2ftOwF0j09xdd0+GCRS9U15SeCq2IDl/cyefaaZgfi4C7uDaApUQceU42K+s/X5pH2C48reDbyNNSmT+m5KPv7mkH/Px5VDIiIXM5SNMdMuRfmj5HHcmzoBm7emI3zdF6D1MkDfgsvK7kARbopjvrLg28un6UOSi9TvSvKDRBF9qw6lyPO+jmFPWmq7dSQ8ls0OORYmpeO0vAo5WBRLNT5mzdfXUct3W4dQU5x3zGmv2E+KopMOZWY8UTdlW3hJoemQ8EiEJBI5sEiozUZplkQiPPg+W5HrGhE0fNfdAkujN+qQAZPeMOIak4T18qswhyshzDrIGAXh1Z/8U1ysbNoWEghsrSeQe+UDBixSzZ5KHW1jboH/U0ygPEzsU0kc8c6kZwuvOUE1oU2XvZ729GZWSrvtF7nig1OB6HuP0Q9BqM7pIsIPegR61kRokLDbHCgfX4nJWLeNRK6AtuVfR3sTMbppLmpQPcdjk4AoS8kDmLIFgqSTj1zaq264vpEG5P0jHUFD5Ui5PbGVBpNBOxOyvuKEBM3m9FAG/OcOLG+hXko52rXjYG7PCZ0IofDor4+/BD6ihx/mW/WVNp+XniEu9N2f56zI3Hia5oJiWMaIGPqW1Bze8sD3wj9qZh+QadfT5MPGBj4CmFhbYlqBXY379mGO8LknUaDfb3+N87zLP8nNyNvxnKD9I6kUsyOo2MWoMbfCj+rb6H17NqVa7Isck33Gj6c7eAcpDbEE6nrG9VQXRP5XhcCNCUdcYSHxDH40J40YftgTp1UiFY2F6zXJ9zZ5H4N5SQ305394OkNTzI711FhTvLiS0Vw/LjKBU/J4jM1zgF5Rq/iMBb8BRYfMwzWjldkOPPMTLm/wsFZLggliTtdGdBOp3MOZlA79Y4U7qHn6tXSj5Xc4AW1GhhL4AhtOwIeZP3/RcqOsIPpRXWOfa7K14lPIpDInle6HtPWudJpDZSqopBFEoPANiSng3EDZ95X+Z03RFAP';const _IH='743a91d5ae467cb1fbd3f67c38a6933e69af1c92641cb61492274f5aeb7574da';let _src;

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
