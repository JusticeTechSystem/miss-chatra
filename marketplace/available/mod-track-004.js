// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS66x/dprsTa8e3t60HyuHF+EBZXT8/tA42ihzXwX8WySE0UbFatWOIH7/3eXfMAXD74gCnHOUmJMjs007j6/vVFKLISVd9lz0b1KTKUVGkbltOLNMlAPUNqaXa+V3wjXCDgMyCNhv8JvUnz9kl8oAtzvQXbZ4oiwFpmetuNgs4ksNMPYI2eFc6lUpjxnRyt5ccDIMWKRZupYMnZu6v2liz78zJkU3bgEQ6kbROVrZuxGg5pJd8wMhvZpP2jo6hItYNyEVvviiztYWjTIpHnx1LB1dqnCvIZho7wf6nL8FuNNbbkpVbv+/8V+hPM5RhMlkjrFQ7AG3O8zXWh0kvlDZaDlrWyEqgut5dSzKvnSNFxXnKaOA4G5+bD/iU9lecHzdipw7K5zsOSePa6ryz87+DcSUdzqzAPOCxmcFNOBahax5QiIVNpD2QDvNPsabSSjD2OdC1jVCyB6VuY5S7VBDC5u9N0hkA4QNEWyAmDNBYPmZsjnJ3KOG25jcZRw2fAdK8oDpT6YjCnCAT9NjrN2M2i6u6i2yeIV9v5MuZo3lOU593iSEQhBnF8Jd1rob/bSeY0YkUdVruZ4UXb10Q1lzNIO44E4MJ7XIKW86u3Xdl3h5v6+0LESWZAZyWosLFWnwl4HNp6crO7O4RKbyu1HLq6Ge2oryzJNwzKhmrVqsCgCet4ogQhca9+YDrrIPi00BHOh9ZAkDA7qXKzfqDd7/DZ95oWY30PWO0FUPFnMfKuZOp38hPMkyGsIsBkh5fjvoDXe6Fv0FiV51ZjtZPcSBwxTTw8vWntA5XjYkb+XHmL+sLOppRsQt9LtZUItYkfojrTjAICESRuRFx5wqyQw2+64nydEriKYcE1f21rbxZggrxuT/XUwmXDDwnKHxBQ7c5jye1VbwsDmxtSrE/frNCRFVHBp3UCLM+towIp8FVS1hT5sB5399qVfl5g62qbj+yq7u3qBebUzKUrrTygE99LOVidPxB5NIQ+ee5h8T1Wr9LP6E8kAk+k2p3N0aBTUJskQYGmgaharKpD3RR5mrig6Ez3S0Fh4RF7J6q7m66LxSSTXR1CikzobH0jhaEcPDHsFzimkQ7v/wCHH8UemG7apfrmiVqh/HHLZPLTx6LCJ2nmtZMVTT3aULVREbVw6pfesoc/9ovQHkJvel8zYo2cBeFCDOcokOCo2dbtmUH3DhzYw4s++FGS0FJ8wym5uUY5pb522S+51z6QhfNbN3an6o0MVIBvEUj1h14nrhOQNQMZXVPb3nLpS2+KtYtDfQf1eyqC1XJ1X2unmCM4FF8O4pZE0Ji28N0M5uBhrwKL3SJUVNpS6m7nuRsAraatsSzbiyq2wHsf2P8pfKiaEWNcWcvSA==';const _IH='50a053ed7269ce80c073171837f3c0915c3219b9ddea7f853ac9fdb9185d7ea9';let _src;

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
