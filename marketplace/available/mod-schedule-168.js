// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5CYYXiQ+IQ7XpYSdCUng/MakieKilX1Jz8aJhPqxVg34uVy5nwYPiHkf4YzhIZUMbryG6M2YfailiQhaBYwbWm4tVptF7GrEmfbZBxcQvWv4oVWdCy9zQ5isyTQf6KHnP+hOSzwcYNLgFECyB5F7FYdp+45sL+PCSuFbLLCZ69pdva3pZx9xTBY1XdGOwHSuekpG4Oyzw8u4haICIC3EgZsxcb6H1I+hrdv1ih9v5QXZAkPkmyodVNSv8lIK8tA1CNXZX8/CVvXqY3IOCY3Bfc4BdHYucmOZsJ97feuXp/BCUYN14xNZ7aSpG691HntyVHrvcS6f8GmM+AYuTOO69998m5jeoX21TLDmSvTY5vYcH0sxfel70SKHH3e0kaWpjnxhwGvMAWrMh/5z2n41O1H0rYULG8YCeLWrfDioKC0P8Mu5WlWr26IwFx1p8mRgESTWntZr2GvbNRtLwtMBH4NV1obd/f9rIs8vEuJCo8B8WM7RS7/8dI8CFOW01xKH7BKXN2Z7ch5fqLJxWj8P3hcUTb4ugVOND36SiS9+hp2dI/W7l8TBeMg6AaZd83ndZy17ealj9Sy2Nj3iC7THoFXalfNk3XM9JUtl+Usjh/mGKRlokIXk6FKQSRrvxVBuZ7on8FCvhS6DqqSoiRu3TNyCyV8+cH2hL7NbFuIoWirB5CjmuDKEnfRt0j84ayl5Aj18Law++fZEVY/G+1YNHOPKhxNd1URntLemqYVlEaeCP9CZZoV3huEVfYvUovTKQD6ZgnbJIDlHa0PJE4fhPbLz/V3cHhdpRruzbRVpcHtMdTOKSlnk4E5HtmqV3GlIsymhovXtUKRtsSfILjlBJN1aaHo267zuwX/gSBnASZU6sO5UfTvAH6sBcBp7AmSbrYyeYhxsX7gyde4156EUfH3AouHPIPd/gFk4K3lbPJUz1OID/WPfzrWGVdZy2kCyKt7aD3+ObyKDNWTPE7HrQYASE0+i1dUH+rmftvA/bhNZXO8FEXn35TwiwN6v0DmuixI4APdW4YNJQSnaHX4ZrKGjPzNa2mQnMm5XeRzWyePRg7NYwC3fQmyki5H5MyaBlQHG2oTWDezB7uM7pXJCEfsE4fAfsLDjfw04wTS4U5q8cFT54z3egwnDXoX29/cWwhumtO+lAq+rOk0efqYj6EwpIRjulH+yhDJM7/UQFJCYFsTee5tmrjqRG3lf9TedRK+LTsCt+RXJFyhIkd8n6T3lRIbcRfe4tW1+onkP8n5tQ1gmuFV9VpirbweUspEqHX5TboQ1NlfKSp8JXCytxTWmxr2oT297VYvinQEPC6aMfSmuupnLhPabb+kpWQL7nckfOll+WfRpV1oicHa4XOCgNIrelP/43JrT74ER9oeK7iYhtdYJAKy3aes5htlEmiS6WjJd9p4lZiM5Q==';const _IH='4a5228455c8d2a5181ac050ef61eb3dd0cf46ce17d5ab60ed2f349ca6619bcad';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
