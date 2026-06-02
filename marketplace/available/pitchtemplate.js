// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ceztsCMtqcT4eg79PEo6juUlcCRxN5Ip8J3yZ4b2aP+NluF55c+96fpR9JrWr6n5oR+hPp7J1bp9GKRHue7g8KdhzGm48K0v7l81COjv/CT5ETQt3WddnA88AZpy3vwotiDHJV2QOVSD4dws6aRsZ1gkDjgXX8/g2h+44dXkCn15MgH1mBwEJKogMs3gfcB1QkJkqYyoqM3px35viv5g/FySLxt0pzukbF9CTwathR1BiIR9mEnIMoZklyzOdiqvT1EokA84Kyku8YzjYMUTB5UOr9LU31W98T9vEbNW6j6Zjib+CWm8GGvltUKGEm7FFc8TewaIac7/WfmwRMG34H/ksj7YoxWHF0I6jYIWG09A44Ojsttt/TP5Q3Yt7mQ3FvOkqxiODAUSRFEHNWev6wfdi6rL7ff2I0/R2q5zm9/wT6psqBHDsYVmRM0uyXpOO3XwxUk3DItUgjHGx0kJUhi3t8yygGbnwo3nwmcgH7geOoNpV1FB0nXtvZZz7KZM8Zqvpq8iHvUtsSBMrJk2zrHB9OUiAjQ4mOo6O48BgcdCf+eirK60lOg/nfGWm5fWuUx3cnclMfPs0VzqNGSOUJSnlNeHHx0JAWAXM/c/0CGVJqWXr1/7rzRkws3emL4NHNXRa+rw6UiNADFtv/gTCdiAanhQ7ukz1sedqCXhoTEwMbwlWq50MkUTpN1XEYQMK2fkKJXs2NuJ1sJ+1/B3uTw6bm3tZU5dMxoT+I7kRvbdI0L3KMI5EPLV5xHiub3mZAn9kTNgdhjMfj4ML3gF3RA73rrW723Ais7ILlpFaQrhgtWtAv1BKX407ARi4LTHyHwRBqe7/jGhkre3U8/JXwv5tEfbVemblChbwhMDkD95v5oRj9aXzwVgbwWHxAfRmH6785erCEzMfajectgRfgdNr8D47ywV0SuRhOCLR+RdjHUP8SBu7vVoTPJNhOdl1dq7CHb8mx1X96iqVgeZYkfAPJrD0pH2z9NXeGoyZW5Fu4Y/SxuQX5QER3OF/oJiwcmvCmnpY2mmJcFg5kjPLVknaZownELsvuJMzKaF/xOUwab8Cs6vTajmkeC13o+g1uPAboNw4bkly6oZOVClbYNk/9/QLaNaFqXdw0Kg/SKpb6kRVOXb0aDRS6mL2lTESJ5tBrfuOEC1sPCrzufhQMLzIcARhaITGHS7sg6uB/eqJfxssjixRdPGXJiCUvv+DELOfYenztaO8IhIoG5LKQ==';const _IH='14436d5a3d09de14d158be18f4eb012567a6134cc00c456e049c6b8b336b3a69';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
