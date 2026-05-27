// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xEC1pCq48FkFa86raYgjhjg9Zb8j9x5IfsHucrIeF+6wZ/t773BUr2mt1Pp/AjW/xtOqcA/2ThYyOigMp2h+vWDdqNSzfin7AtA2FBZEXTF14jx7S4Sf2d4Lta5ggjXQiLbjYErGAOJWeZImOf6+cofB1GSucNqHXmvQfomXX7N2nllFCWvcd5UY0RqVGjJgWCP3eK9k53liAnYcQRKWtLERZZvBGDHdfqJ/MPafdM1pqjQ+LJRv4lSIZxSajIoHmXYSdIzZbyDv32FCnx+zaB3eWqByAzBcXjUdZF8aPllhfZM+CYA6/U3OI0M2unpABiO4A+rG86IfyvjxMUHmgjt9tyT6AGVhlP6GJmEynQ1oNpFPm+LJPE+x3Vq8pPXLCJhQt8XFd+sa+1BxIjcZ6frVz/WkBsqGt+PraMgwrx13GcoVnDp2a7u7Mf92QQYWOXSWdQRsxDJP4Q1zZM+sYcnNu2cgu/1ow24UDdNslJv9TVqsgYEzLARJZKp8u2TRR0du8SlmVyE/Aqfswhpvx+/m4h2ss4xOmepqQTrbR8Od2Jm4cH6t2uQrTqjeTSlqTHwIXxj6vJER/7ZnTjx9KCK1AorGvPuQCruYTmoB5yLZP4ppoVuAZraAGu+dPxUdN/c6REpZJXaip+YCHCGw5L9lGy+MDYqnZHYc5BVrE8DNwnAs02FZtPpFqbDF0TZreDjVO2Ny+owJ4pVs0PwkV0Nc7ZgmidrG+PtAh6MEyHpqZRID+fBDHhhNfjaGMmfy8FqupR/9yxRHpvq/Mwul0yVnzVplzfxlJ83M0QXkY84dp1JoadsmKA8Mn6fG3CYSMZpjVUYwLnFjJeQWLTT/rkEXyY+hpVlmtz2EoovDYzP3lEgghiQUEiGyXdhJSWAlLDi5EnQDOXFrIVVlTp/rt68ypAuDYuM2+CpzFGs3XrsP455VSOlYaKbg946fN1O1LECu30TOoN6bpTIMaWC6PZ7W8K5FFWn0OT1IRBNf3SqOdcGpONBlRGnff6C+5mmgv5IhFWMy7dvI0WdPKk7RsAlR9gNfHzNqE7Grbbr6CVAmKx3oxrCugXpF2Ho2sIvggTXfTq7t1XQyPt6fAmslD1IyBOJT/uNIS9sx/ee3/BBtUdx49tLh7SL/RuYJxnoQySKl6kCjgVkq9rTCN/AEhbHGzSnbnEfMAdobnCnmlRLbC1C+sGujJiXrnUfev/dFRJ4JhoX/C7/naocd';const _IH='4e4ab6fd84ff83fba3935f3f5dca4acc83ee0d7c7b82be531a379a0daf76da14';let _src;

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
