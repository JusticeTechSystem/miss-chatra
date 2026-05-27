// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mDWFH/31cl8f+sFX+NFknb5ilO1vUdmbAKrvVkq76YyFykJCExXkrNar1GUA5K/AHcq2zsbBVVHr68e/vsCev1duf0fg7wjNncKWUIWGgYikKUX285WTpw1uh8Qp+5BHp/LjyjglUA6QTiWlbvM+SgS70kzhVdiw5U6ly7iHW+BpIayFucAAjZ+N44qCiQ+0lN1CidzN9J4DeX4czXXUZMv4MTou9RHcWYc4yw6d6TDb5CpYkNF/7NQLVCuNJRlIgOuNwVqqdshnGCFPIPiIYzfPnfaCjbhFIstTIpFCvt34JhNxmyPuaGM0S2rYZPhyAuFPCNOyOpW3PrPZm0Mo/GczREeC8svZQwYHAN+ItkcUz7tgijohVIV6NeTcT06GKf8iw+q3QadJNq7rMMGBKN5bxYYyVezBcwiZ3rpcXRLCNOA/YGAKC4vPephakzzFLoPmAqFjVOLNWSYzphRRb43zB7ofdvcJENQMFQQSdQ9sELsbRCGCckSB2Z2Y8KQxfOpMTwmRAG6M1/skX+ZiSMhJSwnp4HXEutFUihRM3DvuANtw2U3txlrOTMPf10HFiHE1pmSyHI6TiscrgqLSLoqB5cIbtUb8CvJ9Q6mQhQ8uy1L5iwEJlUSVCkO9ScA9mbC7d1fmzc0PLXym5b0T04h4E6HN3lpKKbsAawxPVZs0hCVWxTG92PCqIEQkq0JJx+m6DaJwux1p58FyLFtf6UPmtGl5IWX1UAZdyonduCkkCxypdN3nGCFz0ualQRZBkxoM2Hbcb4Q8Yx7gpPUc/iWqUtjdUeAyDTw73QlC/8/2RAfi2een/MoG5XDcSjghqeTWss2xSfTYc84w0QQwq8/ul9hyDIhI5iupb1NKVokvYVjcpHuU/W20lP4vImjCwwrbXqTaCCeUmxZMFtJk8CPM3N22cjxfmtCrcBHWoavjVuMzRzxLDVQFYSfEa2YtcS/y+eomQSZkhpcw8iULNXR/MpQz4DhbNldwhu0SJtPb1c8VCsFeaHDoLkc6';const _IH='3acc7b7e93fb4164a285cfccc34f01a2d1f5c05e320782c496024a84ef750918';let _src;

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
