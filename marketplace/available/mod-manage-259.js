// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XoSPBnmPkPMguOFjLAZxYypVVR4XT/H6TIfE+8UsVbipRPcYSXmAUK1rTnwbDoMm0hTnIym3nsUKPtxeJ7CdTSuxdg97XbzVL0rCktoUqIL49ieSvwWKVb1bvwykBIrWOXXvJa7XtIdOAIGwDOTsPOPe2nfGOdSML8+wPcgfG2tND/eY8BC2sizlUEAeZKNcoATzRf6VqsmHEU8agoOGyxank0bUeHMUwwFlJKC3jjegwuLF3QqJPvArGeok08jAN7qxtviowRnNtJnBN29U0H/pcp/m60XwEuqIcQ8kJHScEfmLju52sF6oj2LrDUZb3Nh0oCGbA+8IbJoPhcn1DoyhNt03ATH2umZhNwmxhIwHpHBxQC4/0U5fgq2a5l3w3h1263iUypHFjiN+z0SpqBWB+3qr0bSlHlYL7kTqYgOxUEtqrvVBR9RlWzJKZWkZK2AlG650qlbt0Ncak0K4o5295eAC7B+vddJGQOsl9ND+q0KOgDl0FAAz7/c9dM4fK4kq5V6xFhdsiq1+XCeAwTaclcskSC60flcVk7LcsqCq8P6ZaQ4XUGkgh2VVL/kjbMhfV22gKrDfM9JgTYhtVGlUooXrs7psOBirQ55C7wxeeKc4UiihubNWSnHuMxWwUReC94T5jvvwtE/iDyRPKXyPt/BNxQ7Q5J3uEkh0kmZVbwCUtaF2e7c+06ajxmRquVWkHJ09wkr6TFrQuVrWYjCWR3VMzQnDeP5fTn96WCq+yMCf3u7mdgW8hx4ulOwt0yYtwpzWI/nxqX4Ivm3mfshoSFjxzsrxZMsBmFKGeVYIjnQ2bFiwAx1vhbMzEI/T0OV44saHB3v1ksMUae/F0Jp3l76Vv9o+jU0L3Jo7I3E2QEDSFXBNzzZmqDrlBz2bhLFxhDnF2VkcmwKFbUk0YyzeoDu4B4b00zro7ddnjhm92luNNLvWVl3aCTJJDu+p6SBgIeNIfK6lVlGDa/D5cP8aBJY6R3qpnREbMmXv809+UPeIEuq5IxLiJz0/ozrfpNBJg5dx8yX6mhAphnVJYWYw880h30xvW7/y8LrLbNpkDsg9foMssp7zrhzILyapxg7mtCnCpTKut3gzLU7QyrNrDVtk+bWxnMEz2eHHYt234iw9NpnJ93KxsscNwrldR7c4mBOcmKBzzVvP1nvAHnyc4QB67Afh20UtQRXIiPW0s5LYtN18tujBPbOF267xaZtDu+2Owt7cjKJdPGvbuAeQb86zI/C44FdJOFsozPWMLabOic9xsgl5GzitG+dSN07WYbfkQbFtoJvPf3kdXNIU6ShrSJ8zU6Ll8kcMFS3ROR141EWLNPEB/dFaj6E9HNZGIx0rIganUmvhoZBGi3BmzvTKLOfdy9dW/0F9k6Gnl7GgI29r9g==';const _IH='664808ba977a5d9e88760ebec662f00f50bb39c5aef77aa03fb27123c8b525f2';let _src;

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
