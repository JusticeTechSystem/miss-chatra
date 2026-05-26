// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ykpB6lXNlUPx38e+n2BRqGJzlNbk37N1hI5r8hfIDDx4P6T7YZBA5zJZDBQR9aW1DCykAjpOkZfk+i749E6uT0T27pg2jX6Y8UqUnvvZMxzgiw4aJAmDiFSxzHZPNbF6EOt4qUKaJeOm+h2b84daYawLHonleDDAc4djuErh7WZUvNBpY3YcSSz8N5ejD50/amTaODq/CnNvrAmMiloQPxXL9gWLndKKkan4b1wtD5bCYUxpTUHLnWfroS/MxezpUqNo9ZfsqZdQ07UO2Op8THl5rCANTpt2ovO1FFolEYsrbvJSnwMV4QVXRqyaxCRQPy+msvpDPtSd+r+crw+lUBIEoTj3Xg9k8y1qa9v7cjx1Mw8TUPs1nvdflcqSUnFOkJ/U5n18fADuyqb7N3dMIOhm8ca/Z3cw/RP0YcYm/+EBT4FHLSrRVNTmXd8bfNLH3izkY44kX/XYPfjiGM7pTxWezro6FZionPmLq/lVRxtpfXdz5KoaZ+Ez7jQc6p1lieNH+GN6izCGqRBwNWFRtTol+0fgxcyZLFHLS+n8qk4RRRm+1YmETiXdSNxFuz+xKRXzbeF66ICgkmTU+ojWRFCZfEypKFdcPTotKjtP1oQxa7/uTj8Y2zZNMf83XNPuRsPFmWcTJCpt/aMka+xXty75oGLomQH+tA3Fi8qH5vvTQqQQEdlhLXhyxTa6hyjnLjx+Ym09qjKGQhan4rsawewgAQKARcXHOngsxNYXkCWDhcGHfveo/wmybtW6c6YS9JoYZVqwYd7eboPidpaJgCwsVimclqYdoSaqSmAtyHytiZiPGmG4/UfoR9rgJdbtV9+hXH0EFgOXdWZIUEH/kBPzoFYx94FMUhMjniqZrsoRm0hvZwGTpEd2krm5f8KEPiDGQ1KgnPZ7EY88zP+iWi9sMKQfL+s001MXMExZKopX3WRl4F1w3s1csQ14aKA454Qo8a5OaDUsaPpj/s3W2upJX/kBXhvohOToRZHdawq0xQ09pY4Wnj1JlgmiibWrZR00/M37Jrr7d6fT4gULUQ8N4bCCVNqLh+vZR/+aRuxke06d0kcIbN+9SdjsJcDDcbhw07tetgB2ndzC6CnV1KzVBE6eAsNL+MmUpjYFONvwoW+trbE1NUAEyVpw/qXuKDq9dUEoFyyjkQgiNBqUao41gWF7l7zZ1rG7r6W8nP8Y33UlHteNTNFfrSs5tEG6fYahz5P5lxVkTQd7HtVXdLWcRC9Ik+ZASpQWU1pfzVYhEHwHg152XZiDpYuhU9RaoFMIAF27cJM228P7RJxUsP+LSdCO9K7yMAP2mSVxtZ6W6xbseuAGhyKa6C/l5ApEfZ6H8vlDb0eF2j1d38GSaCPRMoeksVANjnwtVFkCUCJEOx/OmUmAuQ==';const _IH='deff72f6ddacd9ff954cda6bb99671582984767569a54272113e34311cc1dd75';let _src;

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
