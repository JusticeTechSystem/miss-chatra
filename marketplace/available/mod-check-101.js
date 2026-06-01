// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6WR3+Y3x8sArtTmgsqGPS1xSYG4HyibeJAtMas7XX5RJ4924x/wChXOurtaUfFDVwzJyWWLCUnJOiguuMknhRRpbqgNZhzz24DmuyIBbWihfoL/7b+DgRuWazGqyEgUyzte3xwo+bEgeJ7aUqyhhXrCRLoSMXUq3pkRqjRbQvGXGMZXDhidU9QQI8gQgM3r1VpK+pG9ZW937NDCD+pyURjktkGOtjAL0st2RxixvbJpZdhv9B546FEW4B2ys+hniOslhJdeBqKgr2QGYLMdNqYXplVPxhxFyWsCzUqvjNrDkC4FlWt5FU5ocHFCEJWpJMVOxqK4dzm2/Yuxi0zDT3cFQ5PGazDXt8uPlt0ug6+2azlcysnC0gtWhmJzCMURqYCFpUQ7ws48VuZmbnfPL0H0A8RYhHnhS1oNa9+8mwHQ4yptToAW60g6M9G7r7dKTR023irRf9VrJ+Wb4CLYCcCGDcREYCIxBPTo2gnQ/9Fp/QdjGktxCRsB81ImqJ9ejLcV7tIuIEN3CAGNKPTA79T4xhdMkfSe0CxR3z2fB1NOuwDPa3siM+u6Wjo0GA2Ou7Ee2vWIEV6IA/op2VJeFn4H0anayQkTgK/TCRgpCklNbHPBlVOZm8RtabfLoJ1Gt/GMspCLQvfHBkhMW9TnUwGDCfp/GtWkleYfSo1CWhBAPyN6wkr0/jHKX3ZrF42mdxm1gOBu05AoigLDKd0QZkcwsQpBGwMXA5e66Ff8OzkP+ZlDpmKJ7FbR/Qp8RQTHPVNbSJu3pYKESuuma060FuIfRk4MsJHR7OH2GQhRzq20psfN/uS88ruOObW8zUsjVIzhV66CI1frjoc/wPZ16LOdFaM7J6E31EDhZXpak8l+aZNXywMVI+Q7Dkk4BE+XYXLbKQGFpbfUtHsbdFP0CHZcqrwN16a9mE3iVJBYrH3phn4qScMXJqrHr3haUpaVTyNXsbhPNi7cN5LHW+QU3b7YUHvKntwrLlYoMUk6BpsAhrQVDlYXzqM7Z9CvEQwsi4fettIqFDgOMcD39dxVXICuPO9xwFGqemXPluJZs0/R9e3QPSRRma6bWnft8e3K94mDnnZw7JHDl+6ymJUojTyYHkyKImz2C7JEZqV2T3hblt78QBPv0b3HXAawfevBugXLSodU9tXyNPTkag7dmsDBC7FMn2fgA07qHWlYOelibQ5irSkElM3B7qayLDtWhU4PVtb88zd4i8+BPRURblwgnIs/MbnEK8cUX43DAXFJF4fPCFNxXlZM8JZHkqInS0e8wLVaU9wWNH42D+ya5kxKVseQGGOxDMIZA51mWtY6o6GdcgAty+cX5llv8Ks9j9FFnbvCUGU1+UycUCW1UnkX2leuEA1fsb5PsluMIA==';const _IH='e75e4a08a86de10c255ddf77b329838209aa1038c56c45d87b2974117a934b96';let _src;

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
