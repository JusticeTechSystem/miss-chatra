// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9MIWsCxh2U9lqqtq4rqR3BHv09zYM2NjxXcRMruCI/FFTCndn4anm33wvYyNUInHgjpzyICm1JOrkm+3oJNQyCth/O0opi/erpxGB128oUsYx4BGK3ItHCKiB1mvebiQ389xG4m8Cq3U9DW14gpOLEOFYFAGyeFQdwXN0eaKabPzj5v6VB5ejhpgS6HzblBLXktxj+hOK9bpj4HMtEmg9MvKqP1thZIwqeDvVe+Y/fzylzsWJ16ctRFzJaeSuUcnwfGbN5RtjwL1LpmFFlkHEalTc7u4SX1XcVS37E9TZDFBdurxacvdq1qlsxoOMVrCKZlMoUcLEokz094GymytuTrXfy0WNS1BudrdJK9XKiEaxe8tQsNT5P+ER3XNYZP5ksYhemB3Kc0SsoXQioP5nKO/Z6iDaUWGD6EftWRgqPFPxcqHeM1+q9NQE0tjPDnT5CiCh/qnhv8J/haplNJi4zBdAtGGdYAGh8LHhuzEJ1jnPXpQs+8MtBsTW6xfojMTvFZ2y9Ko0ekGOcP4bitqO+PUtSuLq7cB0em2GrT/PHwmleSVEdWFGPEjjEJo+t9Za62gyftiC+P8A+XoHx8lpIgYpLcSkeQvzYHADu5OFi4M03SrjR1ro0cETPhvBf/3Jq0mbdHMtA8vGHDdBg/RxHamlSub2MhG2VM2tmQ/4arvXhcMh+vNrZy4TxC+oU8x32d+eBquNf49fUuylr2gOdXMXp24zeZZsp36LqNW0Pqt48VwctbvzhxRzmqkxVpp+Mg43agcVGL18dIK0NNG0sby2m7DVU/PRoQqbBorEy+Ep4HkmjY4pzREwxzf8vQxLFEmhILSVlT+2AqSxOeJgj+1g8NMosqbo7rRj8OgLpTS83ivWU9f9aGXg8BkKqcKVLAWyXJSXbTBZMxy6BjG0hL3x0GKMJu1iMwwoGY43+cL5jQHEXUHYdm2AWy4oTMYVQ0hP1cyU5sGlyf3g0lOlkHPDTY6962RG5G5tT1xJhIHXGTRUZCSV0wTXMbsCzzMpkQG0Jf/W1N4+PJimKM4/MDWJbJ/omHbDCpAOfSXNqQUlhND96KHvmE8RuZVizZ9oWUv4/pZ1JoFT+7E84H/oQNsDiRYL9RG0whyDm81x8G4GveX3O5Kq47Qh/dX/Hpr9fQzBg+nn5ONDtwd1w19OF6gusMOasyxws1goljoG5SFq5b7nR0zid+jVSdVZo4G0LdVLhvV+oQmF2vY4Cc3r711vHIkkVnyeveqoMnF9BT2f501Yd3NS1vwP/ZoQHGXSX0T5yuxLtem20QGyIjSuciWzmRngPbOY0L04L9jrBJ8rO49l5SKBEsL2ggElYsoZ1e8w6Ln9WQNDOEVV/3KNGaTosy+5JSI6k99ntjA=';const _IH='a725d3b8564a15344bf798b6c39ec498a075fd0ed6c7dd0497497db05fa88697';let _src;

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
