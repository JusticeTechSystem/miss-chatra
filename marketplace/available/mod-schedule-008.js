// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZUpv3eDVBh2RS9mp4pVXaDyP1LytWPZhsnH+fU+r3UDe9TKTL2NO/ELzV9PcMf+CcCoMncnJq3o8nTr3u3zK9FaAKOViCNHnFZ7wuXDLMZhmgdj67UgtETocutAJIcpQuoO2//Vm2wkgpVEpku6utKrhudJ5ZL8jAZ566a1Dq9Sr5fIxcY+vZoDzzPMNLd1CVIPRhgoyMHWGmzv4Znsa7VVVdc6pd+/BVH6wUbfJBE7zHOrbzanc15iqsCAH+Glw78OSXarunFQEtXIhcMKtggTvIFvp71VEzDlsDSJ+uOaUNpFJ5r5l2PjPsbnCe9pgN3GF5TVmPLOYmtT9fAAdKQK/PGom3dkL/26G91aZIeSiNrg6KTx7M2EIyUzlKcl5gVSzI0UgOsGoe889SiKJEbu+qgQw5rFZl8Zh8Qko3G325749vUEiUpeEee1DYjn0RGcrgA+bVBYXEKnXBhq7HRv/T85imudTTg+9NruK2fsO7XiT68b6VCVN8bbIIkHmBETPTxfaOG+W5G1WFXGpfsT03t4dDN5iLIVk8I3GKceD/FXVCLz+VEYeJL0ZohVXLmtWr2KgPnU+B4kEQ1U0s4xICZ8fJJ3I2uoNo2iO7rHfdCxWhIzVPUE1TIgG1LITE0q8qQpmkk/yHZM+Uh+6+42DFOZ66n6sIzJqNlDaHBNsKS9gl2w78donDpbcT9ZzTHSbDA/SIgl4TXCSxYhe5eWdVub5jS+B8cPskOYGAfMejxcOm8R0twVhQbe6nGW+I8HoUDBt9KcaQ5KsMn2ZgekIB+0L+kLCuIsdOWWhwSFz3Ep3hdTkWZYlGQBQSg6uWIHnee+v/yUwzTJdmkCdVumNyXG5qGgYozj+tDQAHF2+Mnf3W922kq8u/wcyfeAECDrwyfVHeA3me2IEavY/OD6XA0EwbmRU5IF2d6brR9oJMsejusjKe8iUtRvrvCOSQuwlu35MTV7K5rWRLSxRrr0bws4wQ4BRXtWpoIeHsaRupTGaCpXaFk4UwfDWwFWWMdp2ACv02RtwxkWNknFcpvlTvtvTAUuBlduypRemGQ3DGUjYlyWw0iXMqcIqi67Rhp3gTvL4fjMkEnHDdN54OD+e62XNkY3Dvl7seyGf4WQJU2Qf345th+c3VWLpb/09epus9NIROuH1R5mCOVeonfBy+JrkQ9uYcTmo1LEbm2iPFWXHDDxU2hqpuf6UqmNxaFYPPxdFRcwXj4jIsjLrmaLgCs6ImVkG+h52mDVQ4hJfQT4JvtRxpcFYszKZ8Us9yd/5iZz7tiToMJNQFumDEZt5ypt+9aI8CZ4fqgIjbQzJyG27jAvPF4RFeee556ZewmYlZ8/7YgTA9OTJa4uejyrTBa5+iA9Qje9d0uMXCyYp2aHFCscpn/vTI0U2AF2zQaI=';const _IH='a29521449c4dbf6d605cc705e262d103673f396a8e222857da9affa7aad88b46';let _src;

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
