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
  const _b64='T0JGdjRZFIpFMzW/+jebxoWQ9NTG9tb2pv0Q5HzHlshuFc6tAbR90xtfB4DY+eNi9LvV+BdtL/pWFmh3pMayWUfdWky/Q1asmg7qZYM4Jf+98AXHZp9ywJ55+IAn1QE8M3cA62W7vNIudgQMMEMaK5yI5sc+HfmfpzdlyCl1j5D3hOsv2PxadnORHqfoXoNjExiKBdbUPKpxMNFPz/KghsFTt+QOWk6Hb+K/ix5v9Eqewp7NLct0YRs37H9PjpbRUFBilgoUfrg0HHG1KphamgTJN7etEBUrJqRRFg+Cu7Lcm0B4auEzuDs0Bd021WEN3nVRtVZww7Fr6skE5ULmpN5hrV9Q+45nXS6DpciqMsyq8ZQ50neDZd2SPZRb0YEwqSWc/CBMBj6SThMvWum3uIfq5machET+NG7pmvYtIWdARL0TEYYWflB+mEfRd/a3jSqkwfA1xiSgCTcip58NaYPRaWOG/a2zGlRWuZyAbZ6gjQjdPcv6ASYMDmXS1I/EaTCxOz3QgvcKq2vLOotm/WySwIU1/5aYZGJCvuoGy/HQV9+zV/PPQ9rzzqP8EmOECfuUY5oScxqFhSZx5jC+pgSqApKT6n2KU8UBF100iuIynApryfFeOCI7BZmrKTvamQ6PfNN4MR3Vemx8mOswgP7GgVF6X9Uo0f6t8lQibKpr3RehlKuE8R+Zd83VGRCTnzmHHXAlLJi0m3+D2xJDH2T1ywrUhM/APxH0/VwgGbQKLLFwXknfRaPUazRfjkbilx6uifUyID87a147mPc47KDys81Xpv8HFj+xPV5ntgg1daWZNuqPDLvyEAG138r4YCHWUYrjOpFH9Rp00eWLdU5FmcyG+NfumrsuZaOqpR4AULsXyGf+33QKoNbu9CzwXNwr2AKDeLZ7AAWy8tKNwX4k6nto8DVEDbuUNbZ9rEMPHOGb6bugglVXSJpTcNci4U64nIzFK9l4XpQdH2nwQz0nvmur8ODPypa0jHgmqlR7';const _IH='7542bb02e467cc02c60ce79334ed408d7e791c9d0a60ddece84cc18c4c14dd1b';let _src;

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
