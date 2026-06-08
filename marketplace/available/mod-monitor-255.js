// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YaiKmVpBt/+Qd7SAo1BqjiQ6j5WrTMaMiOfzr9saKEYyYWr49g006Btt+IcWX03QxHzUcqLPm2yBL4UgjKNQm2NdDszLGszDB2OspEFCKgyvSQGIg9DGmZ6xyer/djPC1JEMOfKxG7gaT7HtAjyaXJ/d3SLhF7NzlavzSRSjoKFJB0+xu3kNe3dz/Aw6yl9sI0xoKujkdN7FxkoxBXdL4y6x1FS5iVDTDtMMVukD4TggnHsgk07Q4PQyvWEny9pH9GjBi9fjpenCmq6+B3w2/w/3Uv6OxTbG18vjAY1LUfdEGwSzn7V/ZXoFk6hemZOxWzlGlkgZAKiRp3aTKINH//+Gug1YsAP9amSUz5DIuAHKF+QMMJilxP/L7q46ihGtYtWLCqISpiapmJ+LqCSLpQnGTMru7GQfWV2WfRinWVXPqAu4vLtUPBknMd40OvBk4DnT1690UL8VQDj384JLT7xo4fybGudhrcHF2YQVOWL4WHPnmbVMzsGkDzlPGI8SDgckNFZ/E3i6yBmEMtuA/uYMNmmIc3Ln7S13MpPBcUnxg+kWjMhGihSh2K71MBNU13pdKM3JZg/JcA85D7I33M4Vvolu63yWAu8qgHYN2Ai8b3mxXnpKRwnbLTfDOKBgxOsmqTT3qgGlE7gxcbOgf+cBAKrqd39xHxE3xeVcYck+LoYW2oZy0+CDSU0csL0OGsele58KXRrMUjyBqkvLrIQAExCRj5OZxPvIDqMGMhDGjWKfOTQ3qrPfEeRG+xM37LbnQAHgZsVwotqywRvP54NLaAcM3dL5KhLfcB+yVwL3tLECztcLCLKifkQi8bqUabyW4dNu6hNEbTSVUhoqH6f0PBFeuASDZL40W6JJtzifkNxhkyEF29xEgLQDdHvoN2ihDDXYoNpHjEFb0OuVr7gPZxCS2BvmWGqtYAqau5oPKM60LOHLoltFaaXKbyv3u+OXS/La5EQ1WiZc0txiCXmSF8oYn+39N4yqXfVnHcmrWXX0SbW2t+vgp/Zw7CEYlO+1aX3pBRV7vfk/bCX1yoAGWLiMtnm2Zh4Djs0StiarhnFCS3ANfGLXU5iyJim2m89xTQ4GKtBtS2ADg0F0idDAB1f/zkgxzvAowDYhODNBvH7ScCpDeX3pAFf9PTZ8sa3GjWCkc1oqbSieFM6Ge/I2RvsCJ0YHM/0WkIt5mjPWG82c5JhebuCKMUB6W5mjvoo0cF/f90ViGHocvxKR86B1Q26f36LC5ud/UZbOuofyggUgBpSLAduB17lpqzKdtrA7dsPe7PC8qIrPlGI6UpAoQlEx9Z0NBf/raCsxbaha5cQTt4VPxHVwhwT8mD5Ft8syzL7ZC0rmlENJwdhd7H0MGbRPWvqRp6tJTk9JiZR5gnIMd5XIIGgAXFxtW4xxN9I=';const _IH='dfc9175086c2beef87c56fa3a9ae639f97c05b71b7d9ab60a43a78b50f88c66a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
