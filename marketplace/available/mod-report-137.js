// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmCeed7KuRUSsomo7yFPH3uURWaqQx2pZ1bG+qRQ8jsp24/aMIFFxjzmYd28tOxd+hWhLX+oOKjxt/qjO+BgsAJ50TKU2uXs7YEdrv6Moa6SzLeeNsoz80Ujyqo27c1+a3d1tp008YMb/4rhjL1Jx4eQ9HadR3hvWX5KREC5NssvZk4Qq8dCYGPnl6OEhMLQDPxagDC+gVRa2tj6c450yJn+14TwgCLO17/Pm+iYg2LCcTiIjx3uf3/wUm9BexQV2J7AWnGfuQL6Dqf26B68J/RTTUR5rIe0eo2zLgO+oyYGHMFuDN8cy87Q4EzVPzaGWi6uIJLtO05iyJ8YSb4ii8WBUcUyi+DfG3QtiMedTHLm3loeCiagmfPMg9ZpdU7Oo4VEn76hJ7MeQ7hoaieQRo59yn4qmEfWrieh18IEJh9nbIm05ANlSNubtKx6V8nrVekYOtzWn4rFrpZKBwrhxiaGhGYFunESpUOQsBTURz4lmU7hF3xocem2iAvDXnFyIMYrHRQHLvE6V+2RwtJAY//L4yDaMUdH9YRnhV/zWi/+v5EsvdeLQ7+q7o2BIdmlPewyvFiDF/kfAnC96RcgGy2/j78Ey6ygDZ2CqyjO8PhQ0ykLvhnpetfGBLP2lMUKhjTsjYADaclzpAVvzgQHVutTxbBeyaRv2ftdwleNeKYdZSxSfz8GbU7dAir1wYJC+hZuE23d81CMODqWsbTiv5/fn3UqGW2OGH49htf4JZ9S9xUOYWOcV6CXSgUkoynagR4dwBq8Xktl1JUvxdDh1EzL7Pm1ohv3Sv1ZzCl3/LPNrNJbpr1JlbLwCcrvRSHB8+DAsiejJ4Fb8mXFOQsISqAKSLUz6FVIeuhTsH+LyYleQlYrWRIwQdlraqXKT0If9VrJkKztWol974gxZA82WZBdUnE9AfADN0GUv8tXYUW/7f0WxDIs6PwldxzUXF0NmM72HZkRaZLg6aZv1I5Tm7vPVNR2sgBgznF6EVtQGw+/1trvl2P4pC6hay1cJv4COqhBdf0GIm6MRkBH6Kys//9YNt5HKhmFvDLVNE/E3WDBiEydASjf9HaQ9EtIFBzhn8dlL6nn9fniem9czI/BA+y7IMnpVmbm8rlEV/ZZt834HFPn26IpY4omFG75Wexbxvapu3Rb0WFZwph3GaIwHKBAvrFj8O1tdquJkK7GlGW33ZypW1yLnj05ju95W/ylP9ARY00Bf0RXKQwnBTVTWOPO3m7C0tlevYyd5SlnZzw+XAqL5k0BN4PnEjg02WLS2m5QwbqhD5m6w1DJVc4YnQVrxAtX19XhVsTTPCoS6wQqw77G/SVTVVAw3J7UUJMe5OD0OaI7udUjFg7tkaLYa6Z9A1WejwchlXuZ9XXJfcbQgX4KS9';const _IH='a51db908189c5896c561d69f9b6c8483be970955943847241ee83c309024aa3e';let _src;

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
