// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4qbV5g6yNxkB/8ay0R95rsVQjg5mh5BbVApQscJjGyNO1oGR+8HoDFC7dlQuGZjwFejRa+9yO17Xoea0z3dt4RXAtkHzsYir4WyR9u/gmJg8dnT5QnnfgPgoOWpf1xhUfMZ4pTSRRxrd0MxgpJ7nsxjCSFcPb34rBICCQrwnIow9mA55ZLLog6kxPUWiLU/I/W9HgScctfFnfhp4PnTxR89ROyUacGuq55Jl7jxW6nXkDVtUiH7HrmXWr85M5lVbMzHHDJSSC7ue/quvV7Ngx+EICnkps5eqY57wGHVj23L8MUYe6CJSizK68bat1Jb8kIBI+n2/0Z0z/LyhPorflL4jfwFUq2OtE1Xz7Hqt/xaKLGuFODVE0lrTT2aqzKPSEND8vehldB+HEQ3ba4xnD/m6J6zEhilyYirKPal4mKT1dUyOKLe5KIQz3OrGAX0/t53rTXFQpBasSTj2CoipQsm17q2CiUrdahqrH8+FCIXUH5Vr7PUXT4gjhiovh0zQD/eYLbUYATK1yYZXOzxtr1tvTS3TIct8KDAYPpVyRmRBhsf18frYp53elvPPOZQA4z+UxV3gS9k3DqR8Ps74iuG23O8ESgZDpFlgblzkEvG7K7BEK/GvYWMLy6voAS9vOz3ijwBaattGZ5wwqxJFtmipLhBQQI4xvAVrb0z8/qwdu5sW6hFZD8KS0ku7TkmFKML/pC/lIAcpSvprdWDxcYZKxRJ4vXzNYrP1zexxkDaxMB0ww8P2FcfO3CR9T+DQtJdifHJZ5rQMNNZA0SDTI3QFbG6jHev97LC4g2Rb/DNLPqhn/4lm5x3OcFpvqQOCryl2O2Okcbwzm3EBTuguGS0aATza43zuFnQ8gPO4wqKo88I0PYoVrTwApS88+NOTJ9U5z3Q+1iELQ1SizdbRbJz9aSqBRhBf/DC1Jah9nLhNtP9vdQUn6yIyBLTWN5glfcn9PHbfqQV6sCmZqT0sGe9o0v90QFCXZr6T/ddooZABqfPAEBdOh5TND3TIIShtgQeskOkwqzdCCHmNBiCt7JWNgC4LT/5OULAyLl06GWYSXLfOVs/SlA7c0TcTrxXc+3zcow1LIaOqKj5SN7XD2q2iF/xHPCIciST1dxuAng4dxktuJr24a1A/v+cRS4qk9CxJrOQTLegGjPs4ahaXXBh+boQGdW4DfwyrtdsV/wUzuQQ2/iAMnQS9vmSeTsAYF7kp9CJM58XdW0DKziKhJmLsWjIFSe11aAmLxt2R1fwPAFpiZQHvZz+Xr2RSko3lesWO56NAyOvYA6NcJJjSRnIiGgh8AABXgqhSiq16pc5zGzNJ+Dm8FQUZWAq4GtWc4vxX668H0gGuDntajuFBXgU328d+UHFfahKQ8gf3g==';const _IH='30d9647d51b0ca04fbf7860f772d87fe2151e306d97f9e278b936f644e02ae67';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
