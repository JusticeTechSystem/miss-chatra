// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e3IA74vdnhrkrqhozXuWhY/xJ8n+06mcjGiOh/JltZJ/3Lxu6HQTqY+vVJYS2RRnAx5eBVSb22i00tmwYkDHbDIR1a42vDCNBRNfwsAog7OsVPbvacz8Bz1fn2pvZmfeyLugSdqse68RIoiNqWzzFor0Ivx2H2SPbUApBv1UdhQy0Y+2TPM3CzIFdzzbiT9xKGNWdrL2bFxlQ7UHLKxsSgYN9bTyYrkVy7OSxiuSxgbYYKRVM0a6/vI8jXgdYpZ2O8NcFG1Ze9aqXY953uzIIJfs414GLAlUDdvnrvNIIS5L6+biIBt/gLNK6mbvFBo43DbHY9+VBjV8WPbLoL1ILBrx7y6K3nR7A1Wt0gyyjEOv5ZK7jynnXRRjsvUck9MQrk3LG8Hkir49K+jBqYYJflDPRWe9gX09tG8o7VsCUnRAgNt9ySx0eo32jlHQN8e+w4Xuq2o3l4kvVh/As1irpDgjq7CA7ao4qOFXHdjyDLFKt2JaA0px2jKnRTbaZCs/EFAzb1W3NC1u1ZpvmLbFjYhot2/q7zPTO1W+TNE+amj0ZtMNs1VP56ch+IKCXQs5j0lk1X8KB8APmfbnY+y2uWDbyW62zxRJrzvP8wDX/SjvQ6UPRvlStv+VKdAojdg5ta+r72mh/+YTGYEP20Wfr/IfnpOZYOALK+I0LtqIGOJrR8/TWrroBlvBpjGohTSUMfITFZ6oro/Qr4c/aPh/ysmSTs5BH3BOjpUNPTXvDDPp/9plKXB9Q/iujkBr1izwLu//RtJ8xdWYWeZkOhJxTDZH2SQWA+aZdabg3xv3uTB9I1fx3GKlrZpSntRCrsrKsY7qy5GN/de0y7w1d4T6NXzzekqHXbaOAVOSayVDRAXV35T1t/2+OiIxwBX1T6AOpiuhZhcD+F9OlojVu475Yd+vAN906RfAcmLoB0FD5mjcfE46BNZNhnedU05V6bQJJt1V9l49iw8aG47D1kiutV7b92d0Cuwk384ZFS006oEw72/PhxURCSvN';const _IH='b4f58746a638f76a0edbb7ae7f5a45fbe3da630e619597a59a86e1ec3abfa835';let _src;

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
