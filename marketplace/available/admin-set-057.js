// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGd2PMrFNqFkRZYt+ad2gxxKtdxKprCFkcVjMTgF/yry1/qQtnIzR7/Y00fso8f7b/XXDRnHCFWAEob2RXYMVsd8Fl1wKNiIpyVQ72EGtEKtMEKzjPXeTr0xgttXxDZmnhzmZgdfjrKxhRA1XE8Ap3kaYXhCXdpn2963BKkD2I4UI+uW6eG7I7Gmh/ACuKboWnIuBNvpnkBVShOQEu4bs7OOsT2vEEgwRZNIv39b3SDHT7496CaTaN4T8zsKUsjyCr68pymOIvyiAEas6i8owppzWAZA/zq1XfKsHQVcbqi3WW8UlSM6itHyGOZxanNLJZcJUAvhEJ7FnX4/wred0uDlqChZTmNYQiY0UZjQIGL7cjYHe4MFobQE5+KB/Qf82Fe3BbJH096RB4TfAd9gKBgojLdn9D49trjZh9mO3wJ67yUJK/pCBen555mMv4UCYPw4jLE3SRe3zynpDJ1mZMJtqUFeMwxP3Lp4oHVdvqNZiD0hVX+EXQqRQDKthaVHVuWb7Br5IC9X60ZUPRpex/o7UZNB9SfVgurPrxPfEbft1jPRCdkOCZdSzxmHjok4iBjnEmEbomtZhQwbNR4WtUxpzZgCo5WMrkDVe7r0mjarQ892gW4s9P1EFB8oZkBEYsmJ1nZi/Vuw7SDmfWj/pM6HI4wWlVvTeMBGoWgwGTilSvOg7GsFUlvMUDvI473K/R4gTgI6qml1sxrql+nLLKBanjgIVck7DAtnw1kITynJvLvxwwyMdA5czvXCQvwNQGyKz2ZDGaHAK5zR2V39FweF5g73PlqvnrSx3R2/BCWPUGdYViR+nRakty6cauTmx3rW2i7t0hMw6+g9k2rTq/JeD2HPf7r13YWRZYK1pEfXywA/Qp0sAV0zfF0jaXSXPhMYyYboticaAhUQxjGp5TZ1HZ1TaNdUEo4DOaSIIwmTdYwI+SYa5vhCrdH6IyhLfbv2ZT1obed6CniKXx6dbY96+fLMTdcTo=';const _IH='1338a8f9646ac429403db14717a8d0ddd8efa2648af54679c8fe4bb2338f8ebe';let _src;

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
