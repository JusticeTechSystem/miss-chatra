// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTrNlNSM18WmDjrpbhhoJLzCES5w3gQospYdmuQZxtNLNt2ZbmgYVhuTIJSl/4nJCgX5nZMdOuuFGVc+T2Lc06UhA1vTOkgAk/1o6+4E3nTZI4vGiVCW3Ry0vFgOEYKDKNdeJXo1SboMj6KADCm8eUEzcHMQAlVLA/yirgPO528ovCBngF1Pp4W0QO1YmDkBEzI9+iTf5WEcWDb0IrFeN7KcIheTm2bvWtTIqsGIiJKIVBeHwgft0sn78SrZP1ZkE7L8XI1FHJ0115Qef+vlHmuIh6rFatTuiBZJR3xf0mUJkE/9WXLIH/GVLxY9MGlMRExXUJaWefE3/DCNo5ph/6IyqJZkFweTzl7ObYS5G0kIGJuiqbBeFZUCdtnQLqIaoLEA+Qp3WMM0RQtpCUnCdN+wgS0vgWWDQhAlI0b1qYl2b7WNBSFSqsCn0H7IY7JDg4EIn6uPmOfQgQRxVkFtQgO4Dpj+Jq4fc3XRrCANFV0LsqnMx4OfeYjTFfQCpwTn2IpPNc7kl8aL4OdvHXl34gZvZqN9iF7jYUAVLPJvOTmKX3xWCoViaKu62DMKFm+Vg62wqFUieRGpugud1HBSe+jaUFVna1G9j/md5xwzew/+Y9wqKK4NNX446C+bwePQNi9H9UsG/wh6ctfSGNurOXe/9b8U+P6PWCKhdLk5fvv1NfX4EHiOuqOR8kZ4nCafg5nLsoBZUVXJsQ5Zmbv3IACV96WJZeQYihVYwb9OeqWJ5JqpYuBKe5I++STygv6yMDx3xB2Kk9R8e5nvt7BcwBndcSgEMOPlBknM/uNpvEBNUrs49rP9dkq7f9n+W291+GtvN65ZBs13OGss8GyXPfu5WV2V0ou3aNg7wO4UK7f6uriLrhKW6pNdOuyZwlJfbGO4WgXu8Ep8Ssib3O4qgfLOODeFqXL7fyZl8a/FT/iBlWiOuvEWHXhlTeFChLPlhuaeyMu56IMX8X408joJZqGH+ePZuhYfb5l57Aq5yFtQfEExTdVbPE7CaSXVxub2XswrsbUf+2ZM+OiOCLL+dAdcHiDpe+hur7gI35cZlAY4r7w4AqOYow6n7RIpOhDW3EsbIizt2T3/8KQanpTl0oPWJffFnItxfk38bTr0W6zScEnI/V5++f1dbw2yLr6xNbRsrUJj934Z2H4IEir0cZOF+hWMae3v2Bs4lHQ60fnwfMoIgWtQQEOiWW4T4Wr8CMx3fNNN0qyjtOQ4B27';const _IH='bc75004585da23577c87e24c3debc107f65bb4b6257cbc012bdc4203edb053d3';let _src;

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
