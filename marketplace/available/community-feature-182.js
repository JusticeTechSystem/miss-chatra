// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQk0VYRrJw7YB97FDDlXSX6ijmvIO9gs/LuISjT62oxj/k3FSmLmEx9YAY3P9de8k0s5GfeiUokfIVAvdPCl7H25Uls6ZdAyo6dfyu2Z6bKtsIzV3ijLvvW/xm1XMREuU7sjB+JekhrACPNkdCnJhz5lqIhcbkIraE3TXNNlvJmr3pQZEuMO1EQnYBTvQwCRHfI+DM9lQr85mjDkPeEsH7JQsllNnM+kabKS0vHLXU4QB8gFk1384IOK0i/M/s8N7Fb5tSpxUBmb+f3BkoPhBh+yhfYTvwpHJuWOAUMwMDnrhnxAokReGYWyHFDay14nTGb4C9GblPD2Z9iPCrTla4PUX1nYiXDhWSeHz9gsove4OuCWYMC8ulY+nVVo2ZdXMExjMF4G8ko0y5zhpcusPOAoELob2NWszzsDuwPam5Li/W1HDAolgBVapv15Zaw2kxhnjDpFkc0XsdegfJeXCjABiBEBKOOwY+Q6rL5emgR34ux5lQ58142bJO9AqwH6RL7NsHI230jEN/Qf4i5bXcgJOYUB2OtzXF41OJsI1HoY00y/maRl6hgA61gz6CMsH6jnYxVbxeFzrbXmu/g7vnj/gMN3tT3FKeqFWKLABlI/vAXHZNdh9ikTBuEK21U4wBG1/ERp9PQ1If5lOtBH5Ybk9dpM6BJeeaVCNqeeNMGtgPFYeJl05DiHXZhQia1QlvmXRnwsKb3MwiAa0kV3agNsQ2QqMtMwI+8F/fFoiy5';const _IH='9ed0bc7749ca9e244175ceffcb31e8ab6261e2957c90c0ec0e6dadc3f1d26945';let _src;

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
