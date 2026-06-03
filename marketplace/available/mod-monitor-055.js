// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F3QwaUCRBjZk7zANARZhTzPt5AJcSOG+ANMqRq5HBosJV+o1eKg03ASyWiX3Tp+aHk1vAPPegS7CEQNi39ktKD7nXdFzD2meSs8xqHEJDqnqgLG1w9zsPF6Lj9V46sePtloqhDJ/y46UPfs0U10VMV8Ub9druROsWPc+2vtETvaXgPAwOGGfcVROgvw1CLtom2p8JKkadBslexCTSMjo4so9z8gH7yLL1Z6lLArogdYzSQ7yT/ODcdh5sei9tecvZD/wg4LHNt0psgIMCZvHyuMAeOHT+1HN4H824d3d6as7u1iVcLAxNWStLwsRxmaiWxgM+CPqWUh2+Oa6mf5YTRq9HYhZsFzQppHJTnOOa6sw6Fjp42TR8yCUMaDE7pIP+xVB6W2lYLF0BGRtPEwjYMvBiElDVob89QkGY8zrR7zmaW3Yd9jR4ldqeRUqqVWmq5fn7f8ooWwsBraqgdF59M4VidviJ8n+fvisbRsppQ/bzGnv34qaTs/3iDnLUzulvimUbouQ1B7kxzonL73IgWRo3lGlQ/yP3/2NBMYU1cRYPxRfMVmkWnC65KcqXwmsneRTfWCqly95+KYyUfSVtKPGSgQLEJ+Q1lgpLIt6vPw6ygVQ/wZNhqYbpj6jQ5PMAOYHxlF5Kih07ixVInEXbiSOe4tHMNQb2Oa4jVu6nCt/ATDsnRWEQaeFz6kVGAFOy8upj0OjV2UtggnJaWdQpvAmgHxYp5ZRA+8wEnRR1nBin9i3NndEwEPlwWF83BiYAGuNPGgMwKebJ+qh7QrP5ESs9/fm+KsKzwcPhP281X/3o6EPM/TnQzrUm1UGAMJIhaR3CgHqYg4PUEmO04hA93lRuR7tBsm7ncdnu3t6Rj1zvl3yQCBXxc6QwGac3pt2gyvZYSX66wJN8T+in6jtYPanApHJcy48T/q1hwA38us4aLuCov2KFXtcVQSEkorMshZ+4ZVZAz7FTJFrUUVOJby4PfbG7qDZJSe4IUCsJalkrjK+5u2gLBsTU5zu2zcsFIb9d15I9aA3WBIbbUMrOCD1MjpxlbjePYtLzLZFUK9QEp4snxyWQQg4eYD2CLapplX2bZlqcBmktA4asURm1gZpkpR0T0TRgbq8yILhuPRD+yUItkyT1nRhn2NueTzo/PTknNJC1jcpXyinih9Qyj/aIYJoo3/Nxq3gyDgWFB+18Ud4VJmPocrXsX1Y8MWMb5S2O5SkY1Fonz3ZsKWpenmTyH/NaRg5FAYgHTNwCGJJN7GdOrK5Rj+mz+72i/zlpPiVnIecNRycnoisHbc6kDPNrnC2lJohZTqAP/OvdvcnHctFr2/VqxaBhjia+2kGhyICQBYM1KFvIYmfQtpraDi8ypla9YcKtcPsNw7mmUtxuQ6RQ0F2xw2115b+';const _IH='98c9794bdfe3bb66baa254909abba634bb61056d7ea13c580e4141417ed57c37';let _src;

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
