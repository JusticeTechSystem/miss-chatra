// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WXD7Qe0huymi7Ibnsp7MFBHXt5vwDnZ1a+RY1YFxQqbIvJRIrufG23S1C2YOdA1yjZOfBQElEoqn4EeSe2yCDmUxpRYVFZXhTZNiIgMRwmmICyJQnvG5C9THXln7J5omSKX4lU+ymp3g76+my/hJdwYfIe0qjzZeZiWWuGiqUoyZKIX+gXj57MfWeZt7MOzSg69V+LDfcMC0h+TUYLpvzoo7blW/y4yG+iQzo0U6kH6m0h5bO38aV/Hr0Xpcz9blJQxu1He9ZR1dQCKsKlofYgit5OISzmjkJtHmpEjugRYeptu/z05oEhiztjLYOUtH1/MUgOyTt9jgWFnAy4xB1W5w9wwqiss4fVEeiDyiMrI2mhWC0hN1dKhP023dft0ETpthnCXCTXHbLKJPW0rG4AKpYgObJN+D1Bm+1jbRkrgvNOkm0FalYGNoqHNe5/j8R37+sg/ElQnbKEXp+Pqeh+LB9L1J34+huO8PMJ4K3EjXV55W9BIYHV3mxrm69mZd2cKYCby5V8CtXeaeOkP4+1nlQvV1YZ9P1ub1tCU/rHM8v4MCQHJ7JrerPNgFPvPAzJgEL3WmgYR/MG6+FK2vSObuqGeEmNKXX5QyiRfSLDwqjDOugCyoID4ROdrNX2mQlshW7Cax4ZnNnt85TyeP3dRhExpOAqum8QTRU1F/C+gqOIdTr5FHa/Znn9D1xuKhzqhpIa7ywVS2pvUbfmjzTSlJnL4zGCDWqGX3u0mwLKxdvc9tuHXFTg+iWLQNCS+dhIzguPAv0kIftr9McL4Fzj6m6Cs2YRxAiFr0ldOJPj9V59Yw87B51NtUdeyxNHxWLhiwL+/+RMRr5tY9VvDHU1QoFFFHdjxZvO/Yc+92TVo+Uaf2TjaOGaIY0ENfb/4XZPxZRYNWR1DvmiQb2rp58xDvlvcsYHCRWRGitC9aOkPhAwotbnCzfWtzoWwMA0cHFPuNDUMhTNwHpKwZujLKkQCstXtL6wd0MXhqY2EaX9KpVIUR3Rxv2Nwlt08IB9vCAGXG5W47T91xXmog+E3ZDzPaD17v9et3emzfhIS/kJFqef533lSfrUK1Pmog6k5e2Eb5swXBcAh6TqB4fvxSIgaAqhs/g17XmM8J4D5KBvl1PNu6WlaMrOlOM1pbxE+Vp/7pJU70K99TRd7Z+3jdIOqas3NBJMbUbdU3n2n+i+SY2CPWOwKXyblUjfNt0ZDWPij+xWtFkDV2uo7TFnKbnCtElevniWhr/LAznus/XYrq6jx00CA8i8gymyaUMuq5PKRtIP8gr3L4NA9xYTjKSIej1pXVtkJT1gFiAorzuWOd+P/w6gQnzKJquPA/2C58bD7IxN0uuih70VPa7bptAtyTO/R8c4pHWKiHJtCtiIcMiKQEGrAtCY9K6/2RCYifW2urI0WDfZch+NusRqN/bepBIS8/pJzkJ7HOPdor62i+pxkFNxNppl5B+57OleNalFzJpb4wVgvKpoxQhWotLk7lLu3HVqY0Wsto+cFI55VqGfFZLx2GePUZAHT5zmlfjKAaVZ5a2o2+w1WHdskGVCDTxgsp1uq15fzkO85+y9uoWwvmwhp9H2QiPrW1D0reqmieRdsLzdCUrMxwHU6ZV2CRL0lCL2JCG+w2fQVpOCr52S1FgTcau+d8NEqT3uKnW8sfrNnOkAnrU6+L5fsU0B8UQU6tYKme3hloeYEZ/tGlVlcRnkTcOrqleuY9+THcTjqzBfpqj8lcXS2Y5Eo6pzebx4nq0+AAry9IvokMEWjPSWcQUJGFthNAWMHODT8WJiXf8wxBReyTcRoAjasqvnhU+Q==';const _IH='a589beb814f523ab643e021742150d0949a0640e342cd3b2f9d404d9731521a8';let _src;

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
