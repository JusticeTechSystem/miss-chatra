// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvv61AZBty2H90X+LTScGOk/pXRfQFxaIHGwe6ih4A1rkSnyB/fYWeK44dBJlQhfkIt86PUO1ayGeWDbO0LVuAxCU+CiiQcTtlEP4xS8vJgv6C1feyHTKZ6Mlaool4zT3YybeZem1fZ2p3ApU0cKHTKEEqe2GJE/23/LeJ+OKv2b+z7fidk75ye3vuh4g19/MXjauLjjaAdYsoT0p8NU/YHfywPkvlVd9cQkCcIqpkJVK3Q1U+cJzfHG2IpAqsI1XAeWByB/j0Hstj9zICmjTvypDkvwgBwB/rwPxPMsnMHwLz01YHAYO+imUvL3xILYflO7osWdTxLauy3WJqgctdR5iGYUN72sE1YUDT6GHjrdLuoybYIMAXaydGAynGs9Ps9apW+lPUU0RNOsmi3v2FrZzxQ11cGCNDkCyFdtXABRYQHJsiO86m0ReUKIywwpuiQj+Lq+x5+w7qh1sbknnAaHF3Ji1zoOIH6rF6X//J5Ck0gWJNlG/2IS1Fy1ZcrYn5B+YMcb33EBS5S86RR36CylHKpMAAyNlxh/QAQyG8CGItikCWZZRivPLwlpTWYYsQocWWBOqpV8eiC7KJ1FgzthxR+g5OHwKj5+jY+Pqetj8WTUajHKECc0YVmpLsWvpl4PYF2TDTSkMwSH5dlG7w6z304aDX66UpKXovw5+ZMFMNW5in0GuLcnp9vqDWvZxGUY7t7SZZI7aUMweYf7/eSdARHob4IFutqaE+MAR8DtDzFP0pNhI02TTbKHmZqqpMMURmwqCEoMeg3MgGScbRKDUN+4FTUTmOkUOGGX8GDs38WsUx9qGfY7kI8LN1dHUvmMQvFTbtXZoUivwJiA4lWaduUL5kXu9duvo7haulN14KDS1bJRwMMnSQHDXtPq96gkOAcklCnVUcpDG2pMGvJGKbeh9fpdcqfieljhA1biB++3BAxsf9KDtw/BKk1X2HOzO4Tu4eHrrnuW8i/BT0dZuBxWezOp8uWYmfir7izmfmoW206K/7w1MncV8sL3mwvdTuNKv22Xib0Bqc0juhHP5bbJ6WzhrNA+tRUISNXDR2n6mDFrtefGAv1xO9rmxGCHB6BaU1WeIIOWqRIPqTKl6vfoZFHVIj2ClWzrKxqAsdxIKM7v38+6eMTg/vVn8d7BTOGQFOMwZFU/hSXQ5ZeDAtPyppeQs7zofhtWdLp7XedRzFqYzsa6JSOcdJW6NMy9jC1bNmRv3PY0LpOMcPpPD1+c24F+hSuUbD7ZcIYqa3/RbovYM1kUMQEct5yl1EtAKnxPdmdLjhloKLu+Y=';const _IH='914638f580a95b69832f21b57f99a2dbad75cb7f603448c37d6680b44fdaa827';let _src;

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
