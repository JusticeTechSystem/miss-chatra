// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQdwAHwFYmtspdJgQnblXpUkIEOaeTjeRQDtXmzg3GGoNTd078dGHc6lOzsotqJwOnTOi2lJmYIuZJYEp2/D2lqm7MWWYR8apaq2brpgh8UcWDyxLavNBKexxvwF48pFa3LgihANrlKqVtZP3sb027KgTkmlOL3Lv70/IUiIHTY8HYVJ8dSY6Kwizsy1qxh+6VBcVeiRoFvpdHbw9DVQDQ1liZdbEhM6Uil96NVMklbV8paucM6sVrn/NaiUQy0jbR97SBuPKpSxSLdD3C4evlTJGBikPR93JAFoNlkbMsVF8dzKtXNW52MGehHIO0qb9dC14QsiGorcaNiI2Gfl30dqu4d2CSuKekL4l3OAjouujJvfYCbupVak3UYEahKbB/H7S256kC8YcN16Ns/wHrm33RHZ7QCMOpvxGOti/35XMfIq+XSexeA8iyAiPjbI5ZppqfAuFO9FaqRcCkdYm3hRHwCVy9gjDjXORQGs9X8gZKJEqNWL0mwwa/SNJIGm1J7lQ+OYCQ69lDIpj88EW0LQ1wWLN6ZX82K92ED177OBREeNz27ZWwDHte0oAse+uUE4f/u1PzZVx04FxOnn6uSFQMog/JBBnwicrGC5wfxd6E1IkF8ul0H6eEn9uv25ViLS/a8YU3slWdyeWLi3hIhsIqO3UzcrvusmGwHBYSmjPX+ufIj0Z+DA5X8Cf16q/CIS00+Y4X8DF8Jyu2gnAG0UW4LmjmkR3Qf2e8IMoa6lLUn8sfI/RPAnxYNXo6lgPJxQNRw2lTmpdw2T/Sl5xdA+X7UdQnSOr/09ooVrr1/HpObMpJQInttb0rYJTv1TndbwRrrSJgI7R6BbFBFTezCrHCnFL5apn3BDv0ZPsZ3BP1xOpI/OU7F/WT9BXK9gS+bThO8v+PZbshuEzm57jcs83saXfxAEQlZP9Tvl1De8ROgEaM8qE/BZ49Mv5hKbd+S6nWdyZnr9NEhgMCMzfSEhsXgq1y0izo=';const _IH='ceaf5039a33393c381896f91c8ea769ba4264bf2f6251f4296d66c14d8c1927a';let _src;

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
