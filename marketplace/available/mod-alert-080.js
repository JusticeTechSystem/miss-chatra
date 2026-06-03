// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yhftWnOF1IlVnCOzArn0ZfCWy3IhNyByyoLnfZD4dhiqjJ4xLS1If4agALa6lQ1tQxITpqDdoesOZ+veTm0crMjTxKVsRhLBmOFShOpjvkCSBR19yfJ4azaYOjkFiwe68fwaz8H8QbORyw9Ic6LqToRttH40bKinNRYcAWGiINHLbtpPWv0mImCcRF2thk5mi+/f+j5my6/CL4e3BZD6jN/YXEEYu5Z/WvC0kU8K+EedbVyfvAra+32PGabaDcaNSLt5QXrMWJ/Ed9JEHO+5rKtVpGhXHZy/UZAV78KxxLbriHvHyu09BPemgTdu3FXuImfgnv2O0FIsadjjKr4jdDp13OK/QJnHulhx0Y2b5mTDolqRwUg/MkUEfkzdTKkgjUF8LEPKPWtkP97X6p1IFAWY3Dx31RkzSoQTsmdy0gBDRQbUtoVMy25obw0GMm6OloFfGO8L5eiFOc+meq3JInQX61th7sX9IBjEhB2+L3zg2WMnvRmjhqA+fB/tKuQWuhVoVLYyLiP/eb1XTX31lHXZEhghWN1YigDzdJb8rD4V8RlEteChFjrgC5UvYQJ2Q2ZFzxc0N7LzQ2cCfI66ct7TJvaYGlcLlmORF20mtcdRwXmmGlh8CJy9Blt8DPKbNsPvAhlr85g84gwhyHfl7MKOVkFx1UNCgkFYN+CpMVE/JNe2lCHJ8HOMlXwsCUq9qbZkQgS9WAokAmd1cRi6AdzpIDWtdAuH6spj+tImGRnuOdcq9SzUyuzHUx/DEnSgoQUskOtRRHnYg/d6zMRu2QrLe/Wyg9JYeQ2/7F9SjBby23JxBmbSfC4/3Z862RW7+JIa1RtIJwoS78V/+RrKiBodzKJ+hfeL0THoKCvBy3SiTxCuAf6OF/rkpTp7apI/B1B4NGqmENfk4Sf/DN222uIF/INrn6R5zoi4WBWIoO4Xhr/gp2F9RTnJcNSr8929sQtj0mQjSJHnFrtf3Lg54oecJZVv8J7nd3gkraSWXFJa0iigRoULB2p2yB90YBeBFQqudEaU8d29G7hlc6M5gnB9gWoPtPBxXlSktudkyh2yLhygZcA3NhoIV6AjcVLgzLCwA6ippfu7ZpIdldddPGs3OaRe7XiBYxKfXSAJdfhkhdijx00kAU+VShFff8+tqte7InCvt0rjH8avZ8q6Wn/u9zZg5VrnR3csYoE9Um2K0ZlkjO77U5vGmstOvaABC05YVrEUhvOcdcMqZ5LDsbSJ24JimPh+p9prStlyrIFXcZsjdQ8douLsWgOBDNi7CRJQ7ZQvwqhZU4GiiSWyNeW1oJM3dRaj7VPLYVzCr+Y2OkWP2n0OzC+N3H0iB8oK8/+pWQsobQVx26lrHt1s+YhrllIVdTgK5g==';const _IH='1d1309be42614c5e254a0b0258612b6587123ee915691560c03f10cb8021e638';let _src;

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
