// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iXaR2atmxNSrut9eDa/ipFyGVoF5j4JKmNhZkV/U1M8uCYNLWv8gApSOszekWVFrXmYGFWy+0aps3QoAmZRcdAkliIaSPo5/cjLLqzAjeWlgXKUB+8Gulb/qJUtKA34VZStzzMMVClVavu5ApbGKkfNtRFL9jKveghpLrCYiq8DOIL8UloZvwM7bJQibf2Hp3lAUOe4ESbJIRtMemuk0YvRAkOBsABVYTptprXdGJ0pluuWtK8MMFMp/pc10rsxTIZmhdMBdIXshSmhmzJPKe4VfGRoJClFcVUL/We/YIqDpwcDz28Wycj8ENiN4U68cPGYwKPp6koXFlua9/YKOKS87k6wgVjMkzOBbdWhrtgVkYFt6uXFv1uYG7Ree1lnDHCOUMWeiO81kWk9QchtDw1svCnVcDdCW3Bk78xYsABzRlLRj4/N5pXXqEXAaQwKyRsg1soK75pSxp2OS1TjWMVfXDO1PEpOMOnjW/PL5ObQ2VrG85bxYfPbFU4yWy3eHTLX0wpTnJL7HBlR7c/RLRhnJzb7X+dZv+5ndy7hlAqr71FcZkl3h1AaB9834KnRBwCpRSIDqp+HH3gbJ3rawLha2VMKfdRB7a5aKXGwVw399Hnd0FVDGjCDZZU0lvLJslgMO7VZN1zH1xdOTmfUi2XU8623daX2r0zTB64lzBFPcx7RYfN7b45T2M5luhv+gRAOAvQ8J336X7enUoBZH+kciDeZqgrY6AczbVtVFlOlXnZsnGiZ/B6lFcyA3LrdxUX6OpaEqrJt+l8TPyTWlrvvjjTp20bn+O+sIwgdco7zdKA43FBrb6jeU5A3OHqEValIOleoQu9onGBAgGtqRY6Vh7EdEi1inMV+F7FlE9vT6diltFhXDNi+MHJ1O7DM1rMnHHbtRFlTP0yWm+C9BP21TWp+lUGoCO5jpVbPTSU9DvqJXR2J1Off6/TPEX5joRMAgwgYb/DnIE30FH7DbEt/CaE18w62241383C7VK+YsisAA86rcqnjb6oHfi7s30/LGM4/QuLZJfw7jdB6B0xyTI4Sah6GcRaAVW8ipMdYLX61RKLa1EhuWCsPh6HDQ7615Qd+7kqRHC2QxCPpCsGmtzbT6gLjtzShBCPZDNF8F6GZKFWCdBIo9md9EWSItb6WfYDXyi0uIZ81KdnL3meoaUDLkEcFNlAQwUqvBejQIMvdq8MF9cZ8y0MaHPfkCe8+CAuyjNXXyG4RtrADKnp0L4Is5sOEeYgXyxbpgQnGbM2xLOPhH5BWTtOMb';const _IH='cde9db75b78e9be42c01afe967dbeb0f355bedde5623a902c4c7c5848396fcb3';let _src;

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
