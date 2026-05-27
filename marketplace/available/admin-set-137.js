// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HEZnWne4tVwOCJXRVNkRbES3+rEBLgUztPh40Z97DFr539x73mmDGiGf/Nbw6DM5muVeg6ImOkIN//qecnlEws43Vv2KYDTMmGGYn7aPB4ehpFcYha5QHJ73oegdCiuz01mbR8IiBXBZKHyGgOxxP1NfHSKUnzIlpzGc9/BQ0pEW9K/WXHo0pMIVS6KQj2L3IKJvM851cqWrYKgPHQdl+oFtTeOw4YsnG3k3UtVr4XpNcZwpda0TOAzzTd8bkzRTcaSSETZwh3qCViTVpd/lpZFiysxs0HpaXLsDBZQaMDM1TANijkIj+AykuJbye2snC+tU2zVUaUNqi06fsk+hoSdst0m82H3ymPbFYSBHpTzPVtBFzJB4tIi1NvMdYkvSP0gjEv7L5//OZ/VyxLJCuVzvQ9zze6I/cN17QoRObqcvHSXxLxJFbYjiq9+BPMQhIrzfjRYbiqFCFFuIW1l42I6CWDKlSltKJfXSe7Aiku17RcNLTzJyErYW4DkyE4c5RycEtwRaQtQjYnqJxcpO1gTz8wX03M33UtSAcLHxu5hHLGBqWGMOJxSd8YH6gqMYaupCoqqdbda10C49Cvq3r/XDmBrNaN4ePKXHEsxEkXar1RqiQ+VVKLIksNrLjSUJc0uDYnkcffUdw9oTz1FCV+ZTJ4y3q7ZFPrtKW0OqX3OsGMygS5K/pMYX0UflvkTpJv0INO4qZn8NKSXwbBizXIDY5hAC4xuWIz3tfrCoSk5bgOVSXzQJfNfx+7nI1zVcR07e983e79kvlGAbdzd8X7y9G6Xyrsy9Pjk8QpmlioKb45mMmxURWyzUtdunMENaMuHFpRG/REhP5wNlVXEakn6tmaUci4PQE9tWoE1CV3obacGPTPlljz2QGEJY9Tw1YApqkO3TJKNq/OqZ3v8UBK4lj4KBnxFJIqh015J3sLi7XNjiVR9uNTqLujDmgIi6gkZvePfae4HviTpvtLz6dDQOMI8TcI32udWvCw==';const _IH='54aa6316fa5adaebc6d90a04edadd447b901a040a50bbe3aa33c04b43ccb595f';let _src;

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
