// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTkApbdO+M+qqnE/Gy3AkVgv/sLBq+5PLRetOTrmcDgDchv91rxjYx0VE+sWQCbOo9pnzws6sfJpNtsTkt1VAGuYxn6b7bpvgI9lvLDrDoaHuvRmaOig66Xe98rOMyHHRZhSifaTt+9RrsCDVyACk+VHPiFJtMVPDirB852VBMDJX9uY962q+m9sYBRYaAmxpPynspIcZ5D5CJkHq7VCkmbmgSSSEmeTs6f4tNSD+qsmvwS8Rm7CJKJGPada+sKPCom0Vs0LsJQRe9eh8QL93Qjm9GTIG+MK+6mAHEphcu/h7fZLjlcEI02D10Dt4ICRDLM0L1d0rAviaMHu9HgVAS/emJ9E4RgzDSJC5r4ILe/MUOvN8ex2dlegPvU0WSHbNpcHFvMj+w+USNFd67EUL/XPDpXThTwzwgkDHkC/a2x8JJEvUPj0eOuH9w5IOPsla/CxNhFlL94UmKZspL9Ohz6iD1HhlD3xRDCHPp8YjcvC4S+8itb+KhDYwlYbpuVKx25PNtA81OzRzBsl+9EeqeYIRLJvwXSo1H7a3Z7S4og1dNoegHpROPdo8EJnCA6nZ/WvhabeaqhhIw/bBffsCO2FWF14uTKel5HklYLxaO/q2zo+VcpGgqdQeFdAiCjJG8iWS85rwBu/tfM2Jl01bmwC+lCkfi16uMUvEnLSk7U18dWFWxCXYE5ToKXBHJarX0B4FFRFknn4ShxtNG0AEn+WuV0HDSKbwLd2eZ5TGeAfiYMyEuxRA6+aKwnTsdpVnm3+QMsTWkDFvxX7LlI1utw4L8Xb3JqRfNptNzKfzii3v2NaMwj/lMkBFRXJbglQhyONHPO/iqZjOcawoVTqq47uS14SSOZELgZWyICjFdnXzaZ/JFgd+/KXN5xrlexoVthmZqiIl2WoPr64tsSLiMBc3LZURpnL/Xek44M3RX8hSevE1bidzCQRDBstieM4QiKtRae3wwBL2gbdiEJpHLPn659I5ST3AK3y+I9tL0B0hS7Z8aCuEe/C+le5T7BqcyFKytjO7n9iXqwBALoNt8hFepjGlUzPvj7jwyHLT6av3TDZggKWBVLYPi8LT/0oZMctU3uWWlUeCtC+VLt6aRM3GHyW4dA84VnA8qeREcmrtm3m9EM//MqrG/0rWJsjxT3Tw65MVCHx27qbw3ShBNFql3Acdn7/xadX/J7ux+aZUtS2W+F1Rq+VMVT6idVL4julXBdolnp2Zg=';const _IH='b6d88f95264493439097ca519918ec78315cc00de3562865b25cdd26f0b1d06d';let _src;

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
