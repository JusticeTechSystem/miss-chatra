// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+ajVc0I/MwtL7A2Gn1xnu2kN5/kFRry/T227qebGzKxp7TSpMBbQjaCQHKy8ymdQWLFR+5vBTeAgcI9QxZ8g5VND3dRC75SUFrYRLMlwOLOPU+1Hvsuh7fRMTf8JkgsHN0MkaCeKHe2R+UqaRMzTKZ86lkUePpR9eoNTSdTJqMidSbI/daQgaQcqM6IfWiy5VAAQT6/B4ahl/oLXBg+ZE5PuczIrDfW/JVp4udGh2VJ92ZTEhhjJRYB9qEhaTXsIGuXQ7dSG7GD5lvD/0CBZ/Apwgi3bQci+yFmAZzrxOcFFCgx7GC0XwTk0LCu1BPIpWj6+Q0B8OA/Hurhd2i3kXJrXF6BGV+EHASAPzYy6chgm90j/4vyoUzvf8axdmXghMOGdnR9mggg6IYaA95EWVp9rVAPlG39n5tzmF0TyxFKTkr2BKlKRWDiTIGwBYnzBw9NyptPQuHCSYZK8bEufHEedd7wXrg2TUjm9MGJl0NwiakSJYzG7RGAywxzipx5WjqPDMFNiZ0shGp0OHNH9bEqyt+0s+H26fD3ygJqJpU3H4QR6btzcNHdaIotuTlcyJ7NDMUhRjQyCK6Cg3kfsMZCVHvDrEeFk/hZ5+o8URMVhIoBsaTjqnUX0nhaPH5yndK4x9ZqKlopqlji9TIywNnydAtoAA5lx/k5wq9KwvbDv0dg6QhOjCn+iqcnDzliEvCX7US/YNQ1hQVq4Vt90f0Hm155sZltjCzY0O9SJEY0dxEKi0228kxwpcb4CSWARtdlDdwVemEpted4cXjQRDpJetA5AcsOokp3jcBpoBWPoCb1iAzTFjUrcfZscTmuusHo7AFgMSxx33PURGzMQ0M6H8FjPC3ezAbu8z0TMKA+ZN0ny/prQS4ANjbYzdTWoaOJ6UzMRcGVrGGo931mf2voH0qhv6nd0zsVU5qoMJDi2gZURRFbNmCUxmzh/tnkFyX4Rxx4ZcxEUeTA4azCym1mL57lIH6MAGol40UqDP2SCb9kDMCk99V4hq8my0fwC1BO4rKUFZeeNJvNGrIBJfNx9x+T5z83RsZ86yB3VwYkr7lmmp/9jp75/BtHud24yLNRNrDQsR58HqLMjQj1acwCOM9sTvzTGPzV97wah4J07Zn3yS4sXFS/Cldfnj5EwONHWI7jIV1uegcOyK5jHLDjCfrwXAuI9N5S2CyTGaei1ONGNh6xJFS8R+sD8Fo9VijweLXHj4L+ndizwO';const _IH='8d276fd6553431b00271b0e0bbbc2705aa84873284ea3d4b4760b559e645d00c';let _src;

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
