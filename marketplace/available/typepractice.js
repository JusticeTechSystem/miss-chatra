// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='unDcyqnl8uPInC+UILF3SigFsi7vrP6wbWFSuDXivrJn2pfVwDPp5a+xOlSEfbgjnIjDoyzQRoA4Sd0S9gUKOTocmHTEYfD/zzvk31AkMc/X0Fz/uTlz+/GYbQMpKf0SYCd6Nv6DOCrGlOasZlPqBnFA6Bw+uSJDZHIiIR36blC9AaMijA/LEPZPp2/x9/ow26bVK12llN2F7uwC3ynpiToiAuMLaxZBTnzRIQq4ujGV0ILFqyc6rKPeZiOVSupEhAiBhsQlQeFSEXsSdN55EaMKgcVaDfoEMe0h5VEZdUBKanEd9wp67H7GA9gRNX1akVRjcDzoglI8jf4jqcJ0dmdTzt+aDnnsTo9/s4Zhq4HTz+ZD1Xkrj+aDk/EyUh5Le6iyoyR5uZxxv0OIvzz+SG2J+zYWfx3KkQ/OLCWR5VCVI1Ue6X5vsjPQm5gI1JA80NU+eFL/siDEB5GE9NI5UvdcfArZOdHIPddjB1l5XoGxRLmZiuh67epj7JH0gvUhSk5iay9pKjqaCwxPslIjqjoL3TguH6aaZFTDO1dvs94tKNfiThz9p5rO56U9hSH6X80lVpEPY5hiocuRTee8z4s3zS59zI4dHcwDgZ5fKwe59olf6lEJ7m2Asxc4jHsv3UZtmS8pNjP9Eqsq95azm8xmX2po9DqEVaCwnRKg7YbAk+EVtj2Pxkb2YNOkRhelTqAxPeyhSWwMsbEywqaRNunEhwo6IrmOROz5cs3oSDAktSiO79gfdeFLhp5XvyjfWYoaXOj3/qmVfJRV34bL60wDk7c+KGXHI+NXxsL7OkoLWyXtVD3J8IE1qaiit77DIHk80DQ1WDQiBbS7XkKX4j6qXSJB9qyJHCGm6UHH04QHByoV6DqB9pgoQTQKBzSQkYdSa23vUlHF+GtyZ6YBcx42yPqN+F7iWdKqKlgKltkamPa+qW24h4nJrELVvDPNnvErnll+clhwIdMe5bhGlqkJCqyHMkVKn8H6i5xBfI2efSWPA5NZV0e0FDyLYqYUs7G8MtIVbf/EFJbdgetc/sx4rGkWe9IKYHnZhiiQwzroW7XOR7AH/HGwdJOvSlqmjaH9lKcjNN0m3i3ZfQQXyGTFpdzzv4/M5n1bpMnd0Y4l2+05R5KCPOckL65IdYaJaC+c+31SSDxGMdtmVEeNDENtUw912DHNb8gZJy27ebYnjt73Vs5+FjRv9o0Ttczz4hqu6VdE';const _IH='2c5583fb204702f96a085bd479303621148d9ede2687d9af94fec9a68668ff43';let _src;

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
